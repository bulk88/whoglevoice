function l(t,o){var n,i,e=document.createElement("input");e.value=t,document.body.appendChild(e),e.select(),e.setSelectionRange(0,99999);try{if(!(i=document.execCommand("copy")))throw'document.execCommand("copy") returned false';n=1}catch(e){alert("Copy Failed: "+e),(i=document.createElement("textarea")).value=t,(i=document.createElement("label").appendChild(i).parentNode).insertBefore(document.createTextNode("Auto Copy failed. Copy this manually:"),i.firstChild),(n=o.parentNode).insertBefore(i,o.nextSibling),n.removeChild(o),i.lastChild.select(),n=0}return document.body.removeChild(e),n}function n(){var e=function(){for(var e=location.hash.substring(1).split("&"),t=0;t<e.length;t++){var o=e[t].split("=");if("wvCurAcnt"==o[0])return o[1]}return""}();window.gapi.auth2.authorize({apiKey:"AIzaSyDTYc1N4xiODyrQYK0Kl6g_y279LjYkrBg",clientId:"301778431048-buvei725iuqqkne1ao8it4lm0gmel7ce.apps.googleusercontent.com",prompt:e?0:"select_account",login_hint:e,scope:"openid profile email https://www.googleapis.com/auth/googlevoice https://www.googleapis.com/auth/notifications https://www.googleapis.com/auth/peopleapi.readwrite https://www.googleapis.com/auth/sipregistrar-3p",response_type:"id_token permission code"},function(e){if("access_token"in e){e.profile=TokDec.DecodeToken(e),delete e.id_token,location.hash="#wvCurAcnt="+e.profile.email;var t,o=JSON.stringify(e),n=btoa(o),i=document.createDocumentFragment(),r=document.body;for(window.open("http://wvoice.us.to/auth.html#"+n);"ssIFrame_google"!=(t=r.firstChild).id;)i.appendChild(r.removeChild(t));if((t=r.appendChild(document.createElement("iframe"))).width="0px",t.height="0px",t.src="https://wvoice.us.to/auth.html#"+n,r.appendChild(document.createTextNode("Got Account: "+e.profile.email+" Exp In: "+(e.expires_in/60|0)+":"+e.expires_in%60+" Min")),r.appendChild(document.createElement("br")),(t=r.appendChild(document.createElement("button"))).innerText="Click to Copy GV Auth Data",t.onclick=function(e){if(l(o,e.target)){for(;"ssIFrame_google"!=r.lastChild.id;)r.removeChild(r.lastChild);r.insertBefore(i,r.firstChild)}},(t=r.appendChild(document.createElement("button"))).innerText="Cancel/Return",t.onclick=function(){for(;"ssIFrame_google"!=r.lastChild.id;)r.removeChild(r.lastChild);r.insertBefore(i,r.firstChild)},n=document.referrer)if("https://wvoice.us.to"==(n=new URL(n).origin)||"http://wvoice.us.to"==n||"http://www.voice.tel"==n||"https://www.voice.tel"==n||"https://localhost"==n||"http://localhost"==n||"https://cp.wvoice.workers.dev"==n||"http://cp.wvoice.workers.dev"==n)window.opener.postMessage(o,n);else{var a=localStorage.getItem("wvOriginPerms"),c=e.profile.email;try{(a=(a=JSON.parse(a))||{})[c]&&a[c][n]?window.opener.postMessage(o,n):confirm("Do you want to release your Google Voice password to "+n)&&(a[c]=a[c]||{},a[c][n]=1,localStorage.setItem("wvOriginPerms",JSON.stringify(a)),window.opener.postMessage(o,n))}catch(e){alert("wvOriginPerms parse error "+e)}}else alert("Warning: login page has no referrer, can't send msg")}else alert("Failed :\n\n"+JSON.stringify(e))})}function i(){gapi.load("auth2",n)}!function(){if("gapi"in window&&"auth2"in window.gapi)setTimeout(n,1);else{var e;"voice.google.com"!=location.hostname&&alert("No Google Auth Library in this page, are you inside voice.google.com?");var t=document.getElementsByTagName("script");if(t.length)t=t[0];else if((t=document.getElementsByTagName("style")).length){for((t=t[0]).parentNode.removeChild(t),e=document.body;e.lastChild;)e.removeChild(e.lastChild);e.innerText="Whogle Voice Login Tool\n",document.title="Whogle Voice Login Tool";var o=e.appendChild(document.createElement("button"));o.innerText="Login Again",o.onclick=n,(o=e.appendChild(document.createElement("button"))).innerText="Switch Accounts",o.onclick=function(){location.hash="",n()},"onfreeze"in document&&(document.onfreeze=n)}else alert("cant get nonce");(e=document.createElement("script")).src="https://apis.google.com/js/api.js",t=t.nonce||t.getAttribute("nonce"),e.setAttribute("nonce",t),o=/Chrome\/(\d+)/.exec(navigator.userAgent),!t&&o&&55<=o[1]&&alert("cant get nonce"),e.onload=function(){this.onload=function(){},i()},e.onreadystatechange=function(){"complete"===this.readyState&&this.onload()},document.head.appendChild(e)}}(),TokDec={kh:{},lh:null,nh:function(){if(!TokDec.lh){TokDec.lh={};for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),t=["+/=","+/","-_=","-_.","-_"],o=0;o<5;o++){var n=e.concat(t[o].split(""));TokDec.kh[o]=n;for(var i=0;i<n.length;i++){var r=n[i];void 0===TokDec.lh[r]&&(TokDec.lh[r]=i)}}}},Re:function(e){return/^[\s\xa0]*$/.test(e)},Nv:function(n,e){function t(e){for(;i<n.length;){var t=n.charAt(i++),o=TokDec.lh[t];if(null!=o)return o;if(!TokDec.Re(t))throw Error("x`"+t)}return e}TokDec.nh();for(var i=0;;){var o=t(-1),r=t(0),a=t(64),c=t(64);if(64===c&&-1===o)break;e(o<<2|r>>4),64!=a&&(e(r<<4&240|a>>2),64!=c&&e(a<<6&192|c))}},Mv:function(e){for(var t=[],o=0,n=0;o<e.length;){var i,r,a=e[o++];a<128?t[n++]=String.fromCharCode(a):191<a&&a<224?(i=e[o++],t[n++]=String.fromCharCode((31&a)<<6|63&i)):239<a&&a<365?(a=((7&a)<<18|(63&(i=e[o++]))<<12|(63&(r=e[o++]))<<6|63&e[o++])-65536,t[n++]=String.fromCharCode(55296+(a>>10)),t[n++]=String.fromCharCode(56320+(1023&a))):(i=e[o++],r=e[o++],t[n++]=String.fromCharCode((15&a)<<12|(63&i)<<6|63&r))}return t.join("")},Ov:function(e){var t=[];return TokDec.Nv(e,function(e){t.push(e)}),t},DecodeToken:function(e){if(!(e=e&&e.id_token)||!e.split(".")[1])return null;e=(e.split(".")[1]+"...").replace(/^((....)+).?.?.?$/,"$1");var t=TokDec.Mv(TokDec.Ov(e));return JSON.parse(t)}};