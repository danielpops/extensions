chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log("got to background.");
        // read `newIconPath` from request and read `tab.id` from sender
        if(request.hasOwnProperty("changeIcon")){
        	localStorage.setItem("shoudCopyURLS", !localStorage.getItem("shoudCopyURLS"));
        	console.log("turning on extension");
        	if(localStorage.getItem("shoudCopyURLS")){
	            chrome.browserAction.setIcon({
	              path: "writeit.png"
	          	});   		
        	}
        	if(!localStorage.getItem("shoudCopyURLS")){
	            chrome.browserAction.setIcon({
	              path: "plain.png"
	          	});   		
        	}
        
        }       
    });