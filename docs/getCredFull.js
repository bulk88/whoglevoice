function r(t,o){var n,i,e=document.createElement("input");e.value=t,document.body.appendChild(e),e.select(),e.setSelectionRange(0,99999);try{if(!(i=document.execCommand("copy")))throw'document.execCommand("copy") returned false';n=1}catch(e){alert("Copy Failed: "+e),(i=document.createElement("textarea")).value=t,(i=document.createElement("label").appendChild(i).parentNode).insertBefore(document.createTextNode("Auto Copy failed. Copy this manually:"),i.firstChild),(n=o.parentNode).insertBefore(i,o.nextSibling),n.removeChild(o),i.lastChild.select(),n=0}return document.body.removeChild(e),n}function n(){var e=function(){for(var e=location.hash.substring(1).split("&"),t=0;t<e.length;t++){var o=e[t].split("=");if("wvCurAcnt"==o[0])return o[1]}return""}();window.gapi.auth2.authorize({apiKey:"AIzaSyDTYc1N4xiODyrQYK0Kl6g_y279LjYkrBg",clientId:"301778431048-buvei725iuqqkne1ao8it4lm0gmel7ce.apps.googleusercontent.com",login_hint:e,scope:"openid profile email https://www.googleapis.com/auth/googlevoice https://www.googleapis.com/auth/notifications https://www.googleapis.com/auth/peopleapi.readwrite https://www.googleapis.com/auth/sipregistrar-3p",response_type:"id_token permission code"},function(e){var t,o,n,i;"access_token"in e?(e.profile=TokDec.DecodeToken(e),delete e.id_token,t=JSON.stringify(e),o=document.documentElement.removeChild(document.documentElement.getElementsByTagName("body")[0]),(n=document.documentElement.appendChild(document.createElement("body"))).appendChild(document.createTextNode("Got Account: "+e.profile.email)),n.appendChild(document.createElement("br")),button_iframeNode=n.appendChild(document.createElement("button")),button_iframeNode.innerText="Click to Copy GV Auth Data",button_iframeNode.onclick=function(e){r(t,e.target)&&document.documentElement.replaceChild(o,n)},button_iframeNode=n.appendChild(document.createElement("button")),button_iframeNode.innerText="Cancel/Return",button_iframeNode.onclick=function(){document.documentElement.replaceChild(o,n)},i=btoa(t),button_iframeNode=n.appendChild(document.createElement("iframe")),button_iframeNode.width="0px",button_iframeNode.height="0px",button_iframeNode.src="https://wvoice.us.to/auth.html#"+i,window.open("http://wvoice.us.to/auth.html#"+i),"https://wvoice.us.to"!=(i=new URL(document.referrer).origin)&&"http://wvoice.us.to"!=i&&"http://www.voice.tel"!=i&&"https://www.voice.tel"!=i&&"https://localhost"!=i&&"http://localhost"!=i||window.opener.postMessage(t,i)):alert("Failed :\n\n"+JSON.stringify(e))})}function i(){gapi.load("auth2",n)}TokDec={kh:{},lh:null,nh:function(){if(!TokDec.lh){TokDec.lh={};for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),t=["+/=","+/","-_=","-_.","-_"],o=0;o<5;o++){var n=e.concat(t[o].split(""));TokDec.kh[o]=n;for(var i=0;i<n.length;i++){var r=n[i];void 0===TokDec.lh[r]&&(TokDec.lh[r]=i)}}}},Re:function(e){return/^[\s\xa0]*$/.test(e)},Nv:function(n,e){function t(e){for(;i<n.length;){var t=n.charAt(i++),o=TokDec.lh[t];if(null!=o)return o;if(!TokDec.Re(t))throw Error("x`"+t)}return e}TokDec.nh();for(var i=0;;){var o=t(-1),r=t(0),a=t(64),c=t(64);if(64===c&&-1===o)break;e(o<<2|r>>4),64!=a&&(e(r<<4&240|a>>2),64!=c&&e(a<<6&192|c))}},Mv:function(e){for(var t=[],o=0,n=0;o<e.length;){var i,r,a=e[o++];a<128?t[n++]=String.fromCharCode(a):191<a&&a<224?(i=e[o++],t[n++]=String.fromCharCode((31&a)<<6|63&i)):239<a&&a<365?(a=((7&a)<<18|(63&(i=e[o++]))<<12|(63&(r=e[o++]))<<6|63&e[o++])-65536,t[n++]=String.fromCharCode(55296+(a>>10)),t[n++]=String.fromCharCode(56320+(1023&a))):(i=e[o++],r=e[o++],t[n++]=String.fromCharCode((15&a)<<12|(63&i)<<6|63&r))}return t.join("")},Ov:function(e){var t=[];return TokDec.Nv(e,function(e){t.push(e)}),t},DecodeToken:function(e){if(!(e=e&&e.id_token)||!e.split(".")[1])return null;e=(e.split(".")[1]+"...").replace(/^((....)+).?.?.?$/,"$1");var t=TokDec.Mv(TokDec.Ov(e));return JSON.parse(t)}},function(){if("gapi"in window&&"auth2"in window.gapi)n();else{var e;"voice.google.com"!=location.hostname&&alert("No Google Auth Library in this page, are you inside voice.google.com?");var t=document.getElementsByTagName("script");if(t.length)t=t[0];else if((t=document.getElementsByTagName("style")).length){for((t=t[0]).parentNode.removeChild(t),e=document.body;e.lastChild;)e.removeChild(e.lastChild);e.innerText="Whogle Voice Login Tool\n",document.title="Whogle Voice Login Tool";var o=e.appendChild(document.createElement("button"));o.innerText="Login Again",o.onclick=n}else alert("cant get nonce");(e=document.createElement("script")).src="https://apis.google.com/js/api.js",e.setAttribute("nonce",t.nonce||t.getAttribute("nonce")||alert("cant get nonce")),e.onload=function(){this.onload=function(){},i()},e.onreadystatechange=function(){"complete"===this.readyState&&this.onload()},document.head.appendChild(e)}}();