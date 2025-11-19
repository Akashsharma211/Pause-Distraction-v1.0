⏸️ Pause-Distraction

Reclaim Your Attention, One Quote at a Time.

"Distraction is the thief of dreams."

Pause-Distraction isn't just a site blocker; it's a gentle nudge back to reality. Designed for students, developers, and anyone fighting the scroll-hole, this Chrome Extension silently tracks your time on distracting sites and intervenes with wisdom when you've had enough.

✨ Why Pause-Distraction?

We all do it. You open Twitter for "5 minutes" and suddenly it's an hour later. Pause-Distraction solves this by enforcing the limits you set.

🛑 Strict & Friendly Blocking: When your time is up, we don't just notify you—we redirect you to a calming "Time's Up" page with a motivational quote.

🌗 Midnight Mode: A stunning, deep-dark UI that respects your eyes.

🔒 Privacy First: Your browsing data never leaves your machine. No clouds, no tracking servers.

⚡ Lightweight: Runs efficiently in the background using Chrome's latest Manifest V3 technology.

🚀 Features at a Glance

Feature

Description

⏱️ Smart Tracking

Automatically counts seconds spent on specific domains (YouTube, Reddit, etc.).

🚫 Strict Redirect

Redirects the tab to a blocked page immediately when the limit is exceeded.

🎛️ Total Control

You set the daily limit (default: 30m). You choose the blocked sites.

🔋 Battery Friendly

Uses "Alarms" and "Event Pages" so it doesn't drain your laptop battery.

🛠️ Installation Guide

Since this is a custom-built extension, you get to feel like a hacker installing it.

Step 1: The Setup

Download the source code or ensure you have these files in a folder named PauseDistraction:

manifest.json

background.js

popup.html & popup.css

popup.js

blocked.html (The page you see when time is up)

icon.png (Optional, but looks nice!)

Step 2: The Injection

Open Google Chrome and type chrome://extensions in the address bar.

Toggle Developer Mode 🔛 (Top right corner switch).

Click the Load unpacked button (Top left).

Select your PauseDistraction folder.

🎉 Success! You should now see the Pause-Distraction icon in your toolbar.

🎮 Usage

1. The Dashboard
![alt text](image.png)

Click the extension icon to open the popup.

Stats: See exactly how many minutes you've burned on each site today.

Limit: Change your daily allowance (e.g., 45 mins) and click Save.

2. Managing Distractions

By default, we track the "Big Five":

youtube.com

twitter.com

reddit.com

facebook.com

instagram.com

To Add a Site:
Type the domain (e.g., netflix.com) in the input box and hit +. The extension automatically cleans URL inputs to find the correct domain.

To Remove a Site:
Click the small × next to the site name in the list.
![alt text](<Screenshot 2025-11-19 162747.png>)

📂 Under the Hood

For the tech-savvy, here is how the magic happens:

PauseDistraction/
├── 📄 manifest.json   # The Blueprint (Permissions & Config)
├── 🧠 background.js   # The Brain (Time tracking logic & Alarms)
├── 🎨 popup.css       # The Look (Dark theme variables)
├── 🖥️ popup.html      # The Face (Structure of the popup)
├── ⚙️ popup.js        # The Muscle (Saves settings to Storage)
└── 🚫 blocked.html    # The Enforcer (Redirect destination)


Core Tech:

Manifest V3: Future-proof Chrome architecture.

🔮 Roadmap

[x] Strict Mode: Force redirect tabs when time is up.

[ ] History Graphs: Visualize your progress over a week.

[ ] Focus Sounds: Play ambient white noise while working.

MADE BY AKASH❤️.
