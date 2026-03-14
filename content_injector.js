const metaTag = document.createElement('meta');
metaTag.name = "flowork-ext-id";
metaTag.content = chrome.runtime.id;
(document.head || document.documentElement).appendChild(metaTag);

console.log("💉 [Flowork Auto-Discovery] Ekstensi berhasil menanamkan ID via Meta Tag: " + chrome.runtime.id);