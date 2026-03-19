# 🌐 Flowork OS: Chrome Extension Bridge (God Mode)

> **The ultimate key to unlocking unrestricted web access, CORS bypass, and deep data scraping for your Flowork OS Local Apps.**

This is the official Chrome Extension component of the **[Flowork OS Ecosystem](https://github.com/flowork-dev/Flowork-OS)**.

While the Golang Engine acts as your local offline powerhouse, this extension acts as your absolute **"God Mode" gateway**. It bridges the gap between your local hardware and the vast web, allowing your Flowork web apps to bypass strict browser security policies effortlessly.

---

## 🌟 What Does This Extension Do?

Standard web applications are severely limited by CORS (Cross-Origin Resource Sharing) restrictions, making it nearly impossible to directly scrape or interact with third-party websites from the client side.

This extension shatters those chains by establishing a secure 3-layer communication bridge:
1. **The Interceptor (`content_injector.js`)**: Listens to `window.postMessage` commands sent by your Flowork OS Web UI.
2. **The Router (`background.js`)**: Catches the injected messages and routes the commands to specialized background modules.
3. **The Executors (Modules)**: Performs deep web scraping, API fetching, and data extraction as a privileged browser extension (bypassing CORS entirely), then returns the data cleanly to your local P2P Engine.

### 🔥 Built-in Modules Ready to Use
Out of the box, this extension comes packed with powerful scraping and utility modules:
* 📺 **YouTube Deepscan**: Extract video metadata, transcripts, and insights.
* 🎵 **TikTok & TikTok Ads Scraper**: Pull trending data and ad analytics.
* 🛒 **Shopee Checker**: Scrape e-commerce product data, store details, and pricing.
* 📱 **WhatsApp Radar**: Deep integration and DOM reading for WA Web automation.
* 🔍 **SEO Checker & Web Auditor**: Comprehensive on-page SEO and website health analysis.
* 🤖 **Content Forge & Fake Name Generator**: Utility tools for automation testing and data manipulation.

---

## 🛠️ 100% Free to Modify (Make It Yours!)

**You are completely free to modify, tweak, and expand this extension.** Want to build a custom scraper for a new e-commerce site? Need to adjust the scraping logic for TikTok? Go right ahead! This repository is designed to be a flexible, open playground for developers.

To add your own capabilities:
1. Create your custom scraper script in the `/modules` or `/js` folder.
2. Register your new module's listener inside `background.js`.
3. Call it from your Flowork OS Local App via `systemBridge.js`.

---

## 🚀 How to Install (Developer Mode)

You can install this directly into your Chrome-based browser (Chrome, Edge, Brave, Arc) locally:

1. **Clone or Download** this repository to your local machine.
2. Open your browser and navigate to the extensions page (e.g., `chrome://extensions/`).
3. Toggle the **Developer mode** switch in the top right corner to ON.
4. Click the **Load unpacked** button in the top left.
5. Select the folder containing this extension (the folder that holds `manifest.json`).
6. **Boom!** The extension is installed, and Flowork OS now has God Mode access.

---

## 🔗 The Core Ecosystem

This extension is specifically designed to work in tandem with the Flowork OS Engine. It will not function as a standalone product.

If you haven't already, download and run the core engine here:
👉 **[Flowork OS Main Engine Repository](https://github.com/flowork-dev/Flowork-OS)**

---
*Built with ❤️ for the future of Hybrid Computing. Hack the web, safely.*