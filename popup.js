document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('savePage');
    checkPageButton.addEventListener('click', function() {
  
      chrome.tabs.getSelected(null, function(tab) {
        d = document;

        const time = document.getElementById('numberPicker').value;

        const text = `Took ${time}m to read ${tab.url}`; 
        document.getElementById('content').textContent = text;
      });
    }, false);
  }, false);