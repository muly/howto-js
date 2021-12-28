// console.log("background")
// alert("background")

chrome.runtime.onInstalled.addListener(function() {
    alert("chrome extension background install event")
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    // 2. A page requested user data, respond with a copy of `user`
    if (message === 'my-call-from-content-script') {
        alert("chrome extension background message received")
        sendResponse("hello message sent from background script");
    }
});