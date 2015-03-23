chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('index.html', {
    id: "mBubble",
    bounds: {
      width: 420,
      height: 650
    },
    maxWidth: 420,
    minWidth: 420,
    minHeight: 650,
    maxHeight: 650,
  });
});
