document.addEventListener('yt-navigate-start', process);

if (document.body) process();
else document.addEventListener('DOMContentLoaded', process);

function process() {
    if (location.pathname === '/watch') {
        alert('Watch page!');
    }
}

// NOTE: working but you have to do browser reload once on youtube before the chrome extension detects navigation changes
// some references:
// https://stackoverflow.com/questions/18397962/chrome-extension-is-not-loading-on-browser-navigation-at-youtube#comment64837144_18397962
    // this did not seem like it worked
// or latest solution: https://stackoverflow.com/questions/34077641/how-to-detect-page-navigation-on-youtube-and-modify-its-appearance-seamlessly
    // looks like this worked except that we need browser refresh atleast once after the extension is installed
