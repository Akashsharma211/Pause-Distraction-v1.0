document.addEventListener('DOMContentLoaded', () => {
    const statsContainer = document.getElementById('statsContainer');
    const siteList = document.getElementById('siteList');
    const limitInput = document.getElementById('limitInput');
    const saveLimitBtn = document.getElementById('saveLimit');
    const newSiteInput = document.getElementById('newSiteInput');
    const addSiteBtn = document.getElementById('addSite');
  
    function loadData() {
      chrome.storage.local.get(['dailyUsage', 'blockedSites', 'timeLimit'], (data) => {
        renderStats(data.dailyUsage || {});
        renderSites(data.blockedSites || []);
        if (data.timeLimit) limitInput.value = data.timeLimit;
      });
    }
  
    function renderStats(usage) {
      statsContainer.innerHTML = '';
      const sorted = Object.entries(usage).sort((a, b) => b[1] - a[1]);
      
      if (sorted.length === 0) {
        statsContainer.innerHTML = '<div class="empty-state">No activity tracked today</div>';
        return;
      }
  
      sorted.forEach(([site, seconds]) => {
        const minutes = Math.floor(seconds / 60);
        const div = document.createElement('div');
        div.className = 'stat-row';
        div.innerHTML = `<span class="stat-site">${site}</span><span class="stat-time">${minutes}m</span>`;
        statsContainer.appendChild(div);
      });
    }
  
    function renderSites(sites) {
      siteList.innerHTML = '';
      sites.forEach(site => {
        const li = document.createElement('li');
        li.innerHTML = `${site} <button class="remove-btn" data-site="${site}">&times;</button>`;
        siteList.appendChild(li);
      });
  
      document.querySelectorAll('.remove-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          removeSite(e.target.dataset.site);
        });
      });
    }
  
    // SAVE LIMIT FIX: Ensure value is parsed correctly
    saveLimitBtn.addEventListener('click', () => {
      const val = parseInt(limitInput.value, 10); // Added radix 10 for safety
      if (val > 0) {
        chrome.storage.local.set({ timeLimit: val }, () => {
          saveLimitBtn.textContent = 'Saved!';
          saveLimitBtn.style.backgroundColor = '#9ece6a'; // Green feedback
          setTimeout(() => {
             saveLimitBtn.textContent = 'Save';
             saveLimitBtn.style.backgroundColor = ''; 
          }, 1000);
        });
      }
    });
  
    // ADD SITE FIX: Clean URL inputs
    addSiteBtn.addEventListener('click', () => {
      let site = newSiteInput.value.trim().toLowerCase();
      
      // Remove http://, https://, www. and paths
      site = site.replace(/^(https?:\/\/)?(www\.)?/, '').split('/')[0];

      if (site) {
        chrome.storage.local.get('blockedSites', (data) => {
          const sites = data.blockedSites || [];
          if (!sites.includes(site)) {
            const updated = [...sites, site];
            chrome.storage.local.set({ blockedSites: updated }, loadData);
            newSiteInput.value = '';
          }
        });
      }
    });
  
    function removeSite(site) {
      chrome.storage.local.get('blockedSites', (data) => {
        const sites = data.blockedSites || [];
        const updated = sites.filter(s => s !== site);
        chrome.storage.local.set({ blockedSites: updated }, loadData);
      });
    }
  
    loadData();
    setInterval(loadData, 1000);
});