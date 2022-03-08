console.log('Content script works!');
console.log('Must reload extension for modifications to take effect.');

function notifyPopupPage() {
    chrome.runtime.sendMessage(
        {
            greeting: 'Greeting from the content script',
        },
        (response) => {
            console.log('Greeting from the content script', `${JSON.stringify(response)}`);
        }
    );
}

setTimeout(() => {
    console.log('test send msg');
    notifyPopupPage();
}, 1000);