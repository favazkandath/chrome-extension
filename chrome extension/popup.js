/*
//console.log("popup");
let clicked = document.getElementById("caps");
clicked.onclick = function(element) {
  let color = document.body.innerText;
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.executeScript(tabs[0].id, {
      code: 'console.log("' + color + '");'
    });
  });
};
let clicked2 = document.getElementById("default");
clicked2.onclick = function(element) {
  let color = "clicked default";
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.executeScript(tabs[0].id, {
      code: 'console.log("' + color + '");'
    });
  });
};*/

let cap = document.getElementById("caps");
cap.addEventListener("click", function() {
  console.log("cap clicked");
  chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) {
    chrome.tabs.executeScript(tabs[0].id, { file: "content1.js" });
  });
});

let defau = document.getElementById("default");
defau.addEventListener("click", function() {
  console.log("default clicked");
  chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) {
    chrome.tabs.executeScript(tabs[0].id, { file: "content2.js" });
  });
});
