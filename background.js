chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "analyzeWithClaude",
    title: "Claudeで解析",
    contexts: ["selection"],
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "analyzeWithClaude") {
    const selectedText = info.selectionText;
    const claudeUrl = `https://claude.ai/chat?text=${encodeURIComponent(
      selectedText
    )}`;
    chrome.tabs.create({ url: claudeUrl });
  }
});
