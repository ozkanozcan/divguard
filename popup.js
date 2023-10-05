document.getElementById('startButton').addEventListener('click', function() {
  var divId = document.getElementById('divIdInput').value;
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: 'startTracking', divId: divId });
  });
});
