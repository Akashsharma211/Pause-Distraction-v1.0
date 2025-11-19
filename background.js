const DEFAULT_BLOCKED_SITES = ["youtube.com", "twitter.com", "reddit.com", "facebook.com", "instagram.com"];
const DEFAULT_LIMIT_MINUTES = 30;

// Initialize
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.get(["blockedSites", "timeLimit", "dailyUsage", "lastResetDate"], (result) => {
    if (!result.blockedSites) chrome.storage.local.set({ blockedSites: DEFAULT_BLOCKED_SITES });
    if (!result.timeLimit) chrome.storage.local.set({ timeLimit: DEFAULT_LIMIT_MINUTES });
    if (!result.dailyUsage) chrome.storage.local.set({ dailyUsage: {} });
    
    const today = new Date().toDateString();
    if (result.lastResetDate !== today) {
        chrome.storage.local.set({ dailyUsage: {}, lastResetDate: today });
    }
  });
});

// Helper to clean URLs for checking
function getHostname(url) {
  try {
    return new URL(url).hostname;
  } catch (e) {
    return "";
  }
}

// Check if site is in our block list
async function isDistracting(url) {
  const hostname = getHostname(url);
  if (!hostname) return false;
  
  const data = await chrome.storage.local.get("blockedSites");
  const blocked = data.blockedSites || [];
  
  // Check if the hostname contains any of the blocked strings
  return blocked.some(site => hostname.includes(site));
}

async function updateTime() {
  // 1. Get active tab
  let [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
  if (!tab || !tab.url) return;

  // 2. Check URL
  if (await isDistracting(tab.url)) {
    const hostname = getHostname(tab.url);
    const now = Date.now();
    
    // 3. Load State
    const state = await chrome.storage.local.get(["lastCheckTime", "dailyUsage", "lastResetDate", "timeLimit"]);
    
    // Reset if new day
    const today = new Date().toDateString();
    let usage = state.dailyUsage || {};
    if (state.lastResetDate !== today) {
      usage = {};
      await chrome.storage.local.set({ lastResetDate: today, dailyUsage: {} });
    }

    // 4. Add Time
    let lastTime = state.lastCheckTime || now;
    let diff = (now - lastTime) / 1000; // seconds
    if (diff > 10) diff = 1; // Cap lag at 1 second (computer sleep fix)

    // Use a simple key for storage (strip www)
    const storageKey = hostname.replace('www.', '');
    
    if (!usage[storageKey]) usage[storageKey] = 0;
    usage[storageKey] += diff;

    await chrome.storage.local.set({ 
      dailyUsage: usage, 
      lastCheckTime: now 
    });

    // 5. CHECK LIMIT & BLOCK
    const limitMinutes = state.timeLimit || DEFAULT_LIMIT_MINUTES;
    const limitSeconds = limitMinutes * 60;

    if (usage[storageKey] > limitSeconds) {
        // Redirect to blocked page
        chrome.tabs.update(tab.id, { url: chrome.runtime.getURL("blocked.html") });
    }
  } else {
    chrome.storage.local.set({ lastCheckTime: Date.now() });
  }
}

// Heartbeat (Every 1 second approx)
chrome.alarms.create("trackingHeartbeat", { periodInMinutes: 1/60 }); 
chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "trackingHeartbeat") updateTime();
});