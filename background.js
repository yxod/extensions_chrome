console.log('Load script');

chrome.browserAction.onClicked.addListener(buttonClicked)

function buttonClicked(tab) {

    let msg ={
        txt: "hi"
    }
    chrome.tabs.sendMessage (tab.id, msg);
}