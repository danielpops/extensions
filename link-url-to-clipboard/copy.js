/**
 * Create a temporary hidden element, put some text on there, and copy to the system clipboard
 *
*/
function copyTextToClipboard(text) {
      var copyFrom = document.createElement("copy_text_to_clipboard_textarea");
      copyFrom.textContent = text;
      var body = document.getElementsByTagName('body')[0];
      body.appendChild(copyFrom);
      copyFrom.select();
      document.execCommand('copy');
      body.removeChild(copyFrom);
}

