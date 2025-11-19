🧠 Mindful Focus

Reclaim Your Attention, One Quote at a Time.

"Distraction is the thief of dreams."

Mindful Focus isn't just a site blocker; it's a gentle nudge back to reality. Designed for students, developers, and anyone fighting the scroll-hole, this Chrome Extension silently tracks your time on distracting sites and intervenes with wisdom when you've had enough.

✨ Why Mindful Focus?

We all do it. You open Twitter for "5 minutes" and suddenly it's an hour later. Mindful Focus solves this without being draconian.

🕊️ Gentle Interventions: Instead of locking you out instantly, we serve you a notification with a motivational quote.

🌗 Midnight Mode: A stunning, deep-dark UI that respects your eyes.

🔒 Privacy First: Your browsing data never leaves your machine. No clouds, no tracking servers.

⚡ Lightweight: Runs efficiently in the background using Chrome's latest Manifest V3 technology.

🚀 Features at a Glance

Feature

Description

⏱️ Smart Tracking

Automatically counts seconds spent on specific domains (YouTube, Reddit, etc.).

🔔 Wisdom Alerts

Triggers a system notification with a random quote when your limit is hit.

🎛️ Total Control

You set the daily limit (default: 30m). You choose the blocked sites.

🔋 Battery Friendly

Uses "Alarms" and "Event Pages" so it doesn't drain your laptop battery.

🛠️ Installation Guide

Since this is a custom-built extension, you get to feel like a hacker installing it.

Step 1: The Setup

Download the source code or ensure you have these files in a folder named FocusExtension:

manifest.json

background.js

popup.html & popup.css

popup.js

icon.png (Optional, but looks nice!)

Step 2: The Injection

Open Google Chrome and type chrome://extensions in the address bar.

Toggle Developer Mode 🔛 (Top right corner switch).

Click the Load unpacked button (Top left).

Select your FocusExtension folder.

🎉 Success! You should now see the Mindful Focus icon in your toolbar.

🎮 Usage

1. The Dashboard

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
Type the domain (e.g., netflix.com) in the input box and hit +.

To Remove a Site:
Click the small × next to the site name in the list.

📂 Under the Hood

For the tech-savvy, here is how the magic happens:

FocusExtension/
├── 📄 manifest.json   # The Blueprint (Permissions & Config)
├── 🧠 background.js   # The Brain (Time tracking logic & Alarms)
├── 🎨 popup.css       # The Look (Dark theme variables)
├── 🖥️ popup.html      # The Face (Structure of the popup)
└── ⚙️ popup.js        # The Muscle (Saves settings to Storage)


Core Tech:

Manifest V3: Future-proof Chrome architecture.

Chrome Storage API: Persisting data across browser restarts.

Chrome Alarms API: Efficient polling without blocking the main thread.

🔮 Roadmap

[ ] Strict Mode: Force close tabs when time is up.

[ ] History Graphs: Visualize your progress over a week.

[ ] Focus Sounds: Play ambient white noise while working.

MADE BY AKASH❤️.