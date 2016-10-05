chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log("got to background.");
        // read `newIconPath` from request and read `tab.id` from sender
        if(request.hasOwnProperty("changeIcon")==true){
          console.log('message passing is working');
          chrome.browserAction.setIcon({
              path: "writeit.png",
          });         
        }
    });