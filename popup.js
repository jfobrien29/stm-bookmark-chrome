document.addEventListener('DOMContentLoaded', function () {
  var checkPageButton = document.getElementById('savePage');
  checkPageButton.addEventListener('click', function () {

    chrome.tabs.getSelected(null, function (tab) {
      const time = document.getElementById('numberPicker').value;
      var data = JSON.stringify({
        "link": tab.url,
        "timeToRead": time,
      });

      var Http = new XMLHttpRequest();
      Http.open("POST", "http://localhost:3000/link");
      Http.setRequestHeader("Content-Type", "application/json");
      Http.setRequestHeader("Cache-Control", "no-cache");

      Http.send(data);

      Http.onreadystatechange = (e) => {
        const text = `Took ${time}m to read ${tab.url}. Saved Successfully!!`;
        document.getElementById('content').textContent = text;
      }
    });
  }, false);
}, false);
