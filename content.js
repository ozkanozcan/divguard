chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'startTracking') {
    let target = document.getElementById(request.divId);
    if (target) {
      let previousContent = target.textContent;

      function checkForChanges() {
        let currentContent = target.textContent;
        if (currentContent !== previousContent) {
          previousContent = currentContent;
          alert("Div içeriği değişti!");
        }
      }

      setInterval(checkForChanges, 3000); // 3 saniyede bir kontrol et
    } else {
      alert("Belirtilen ID'ye sahip bir <div> öğesi bulunamadı.");
    }
  }
});
