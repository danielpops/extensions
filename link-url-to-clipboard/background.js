chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if(request.hasOwnProperty("icon")){
            chrome.browserAction.setIcon({path: request["icon"]});
        }
    });
