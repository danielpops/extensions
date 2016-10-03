/**
 * Create a temporary hidden element, put some text on there, and copy to the system clipboard
 *
*/
function copyTextToClipboard(text) {
      var copyFrom = document.createElement("textarea");
      copyFrom.textContent = text;
      var body = document.getElementsByTagName('body')[0];
      body.appendChild(copyFrom);
      copyFrom.select();
      document.execCommand('copy');
      body.removeChild(copyFrom);
}
document.addEventListener('keydown', doKeyPress); //add the keyboard handler

function doKeyPress(e){
    if (e.metaKey == true && e.keyCode == 67){ // if e.shiftKey is not provided then script will run at all instances of typing "G"
        console.log("Hijacked cmd + c event");
        // Find the nearest a href link tag in the node hierarchy
        selection = document.getSelection();
        if(selection.toString() == "") {
            return false;
        }
        node = selection.focusNode;
        console.log("Initial node name: " + node.nodeName);
        while(node.parentElement != null) {
            node = node.parentElement;
            console.log("Node name: " + node.nodeName);
            if(node.nodeName == "A") {
                break;
            }
        }
        url = node.href;
        if(url == null) {
            console.log("Couldn't find a link. Just do whatever it would have done anyway");
            return false;
        }
        console.log("Copying the url to clipboard: " + url);
        copyTextToClipboard(url);
        return true;
    }

    return false;
}

