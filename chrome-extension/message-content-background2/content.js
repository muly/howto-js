

chrome.runtime.sendMessage('my-call-from-content-script', (response) => {
    // 3. Got an asynchronous response with the data from the background
    console.log(response);
    console.log(JSON.parse(response).allowed)
  });