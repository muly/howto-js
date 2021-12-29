
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    // 2. A page requested user data, respond with a copy of `user`
    if (message === 'my-call-from-content-script') {
        alert("message received in background")
        getData('https://youtubeapi-336109.ue.r.appspot.com/check/Cdup8kgw6qU')
        .then(data => {
            sendResponse(JSON.stringify(data));
            console.log(data); 
        });
    }
    return true   
});



async function getData(url = '') {
    const response = await fetch(url);
    return response.json();
}
  

  