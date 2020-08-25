function wvCopyToClipboard(t,n){var e,o,a=document.createElement("input");a.value=t,document.body.appendChild(a),a.select(),a.setSelectionRange(0,99999);try{if(!(o=document.execCommand("copy")))throw'document.execCommand("copy") returned false';e=1}catch(e){alert("Copy Failed: "+e),(o=document.createElement("textarea")).value=t,(o=document.createElement("label").appendChild(o).parentNode).insertBefore(document.createTextNode("Auto Copy failed. Copy this manually:"),o.firstChild),n.parentNode.insertBefore(o,n.nextSibling),n.parentNode.removeChild(n),o.lastChild.select()}return document.body.removeChild(a),e}function wvWipeAuthToken(e){localStorage.setItem("wvCurAcnt",e?"":lazySignedInEmail()),localStorage.removeItem("gvauthobj")}function drawLoginBar(){var e=document.getElementById("sign-in-bar");if(e){for(;e.lastChild;)e.removeChild(e.lastChild);var t=e.appendChild(document.createElement("a"));"http:"==window.location.protocol?(t.innerText=" ̵S̵ ",t.style.backgroundColor="red",t.onclick=function(){window.location.protocol="https"}):(t.innerText="S",t.style.backgroundColor="lime",t.onclick=function(){window.location.protocol="http"});var n=lazySignedInEmail(),t=document.createElement("button");n.length?(n="Signed in: "+n,t.innerText="Logout",t.onclick=function(){wvWipeAuthToken(1),drawLoginBar()}):(n="Logged out",t.innerText="Login",t.onclick=function(){getAuthToken(function(){})}),e.appendChild(document.createTextNode(n)),e.appendChild(t)}}function lazySignedInEmail(){var t=localStorage.getItem("gvauthobj");if(t)try{"access_token"in(t=JSON.parse(t))||(t=void 0)}catch(e){t=void 0}return t?t.profile.email:""}function lazySignedInUserIndex(){var t=localStorage.getItem("gvauthobj");if(t)try{"access_token"in(t=JSON.parse(t))||(t=void 0)}catch(e){t=void 0}if(t)return t.session_state.extraQueryParams.authuser;throw"Not logged in."}function getAuthToken(n){var o,a,e,t,r,s,i,c,u=localStorage.getItem("gvauthobj");if(u)try{"access_token"in(u=JSON.parse(u))||(u=void 0)}catch(e){u=void 0}u?n(u.access_token):((o=document.body)&&document.documentElement.removeChild(o),(c=(a=document.documentElement.appendChild(document.createElement("body"))).appendChild(document.createElement("button"))).innerText="Copy to Clipboard Bookmarklet to run on GV",c.onclick=function(e){wvCopyToClipboard('javascript:var e=new XMLHttpRequest;e.onreadystatechange=function(){4==e.readyState&&200==e.status&&eval(e.responseText)};e.open("GET","https://wvoice.us.to/getCredFull.js",!0);e.overrideMimeType("application/javascript");e.send();',e.target)},a.appendChild(document.createElement("br")),e=a.appendChild(document.createElement("a")),t=localStorage.getItem("wvCurAcnt"),e.setAttribute("href","https://voice.google.com/a/i/4e01281e272a1ccb11ceff9704b131e5-1"+(t?"#wvCurAcnt="+t:"")),e.setAttribute("target","_blank"),a.appendChild(document.createElement("br")),e.innerText="Open Google Voice Site",(r=a.appendChild(document.createElement("textarea"))).placeholder="Paste GV Auth Token here",s=function(e){"https://voice.google.com"==e.origin&&i({type:"input",target:{value:e.data}})},i=function(e){var t="input"==e.type?e.target.value:(e.clipboardData||event&&event.clipboardData||window.clipboardData).getData("text");try{"access_token"in(u=JSON.parse(t))||(alert("No GV Auth data found in pasted string:\n\n"+t),u=void 0)}catch(e){alert("No GV Auth data found in pasted string:\n\n"+t),u=void 0}o?document.documentElement.replaceChild(o,a):document.documentElement.removeChild(a),window.removeEventListener("message",s,!1),u?(localStorage.setItem("gvauthobj",t),n(u.access_token)):n("USER_PASTED_UNKNOWN_AUTH_INFO"),drawLoginBar()},r.oninput=i,r.onpaste=i,a.appendChild(document.createElement("br")),(c=a.appendChild(document.createElement("button"))).innerText="Cancel/Return",c.onclick=function(){o?document.documentElement.replaceChild(o,a):document.documentElement.removeChild(a),window.removeEventListener("message",s,!1),n("USER_CLICKED_CANCEL"),drawLoginBar()},(r=navigator.clipboard)&&r.readText&&((c=a.appendChild(document.createElement("button"))).innerText="Paste",c.onclick=function(e){r.readText().then(function(e){i({type:"input",target:{value:e}})}).catch(function(){e.target.previousSibling.click()})}),window.onmessage=s)}function joinArrayToInt(e){return e.map(function(e){return 1<(e=e.toString(16)).length?e:"0"+e}).join("")}function sendsms(t,n,o,a){getAuthToken(function(e){h(!0,e,t,n,o,a)})}Uint8Array.prototype.map||(Uint8Array.prototype.map=function(e){var t,n,o;if(null==this)throw new TypeError("this is null or not defined");var a,r,s=Object(this),i=s.length>>>0;if("function"!=typeof e)throw new TypeError(e+" is not a function");for(1<arguments.length&&(t=arguments[1]),n=new Array(i),o=0;o<i;){o in s&&(a=s[o],r=e.call(t,a,o,s),n[o]=r),o++}return n}),crypto=window.crypto||window.msCrypto||{getRandomValues:function(e){for(var t=0,n=e.length;t<n;t++)e[t]=Math.floor(256*Math.random());return e}};var h=function(){var u,p,l,d;return function(e,t,n,o,a,r){n==u&&o==p&&a==l||(u=n,p=o,l=a,d=new Uint8Array(6),crypto.getRandomValues(d),d=parseInt(joinArrayToInt(d),16).toString());var s=new XMLHttpRequest;s.open("POST","https://cp.wvoice.workers.dev/corsproxy/?apiurl="+encodeURIComponent("https://content.googleapis.com/voice/v1/voiceclient/api2thread/sendsms?alt=protojson"),1),s.setRequestHeader("Content-Type","application/json+protobuf; charset=UTF-8"),s.setRequestHeader("Authorization","Bearer "+t),s.withCredentials=1;var i="";if(a)if(/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(a)){if(!/^https:\/\/lh3\.googleusercontent\.com/.test(a)){var c="This IMG URL isn't from lh3.googleusercontent.com, GV will not accept it. Bad URL is\n\n"+a;throw alert(c),c}i=',[1,null,null,"'+a+'"]'}else i=',[1,"'+a+'",null,null]';s.onreadystatechange=function(){4==s.readyState&&(e&&401==s.status&&resp401Unauth(s.response)&&(wvWipeAuthToken(),getAuthToken(function(e){h(!1,e,n,o,a,r)})),200!=s.status?(alert("status: "+s.status+"\nresp:"+s.response),r&&r(s.response||-1)):r&&r(!1,JSON.parse(s.response)))},s.send("[null,null,null,null,"+JSON.stringify(o)+',null,["+1'+n+'"],null,['+d+"]"+i+"]")}}();function getThread(t,n,o,a){getAuthToken(function(e){getThread_t(!0,e,t,n,o,a)})}function getThread_t(e,t,n,o,a,r){var s=new XMLHttpRequest;s.open("POST","https://cp.wvoice.workers.dev/corsproxy/?apiurl="+encodeURIComponent("https://content.googleapis.com/voice/v1/voiceclient/api2thread/get?alt=json"),1),s.setRequestHeader("Content-Type","application/json+protobuf"),s.setRequestHeader("Authorization","Bearer "+t),s.withCredentials=1,s.onreadystatechange=function(){4==s.readyState&&(e&&401==s.status&&resp401Unauth(s.response)?(wvWipeAuthToken(),getAuthToken(function(e){getThread_t(!1,e,n,o,a,r)})):200!=s.status?(404==s.status||alert("status: "+s.status+"\nresp:"+s.response),a&&a(s.response||-1)):a&&a(!1,JSON.parse(s.response)))},s.send('["t.+1'+n+'",'+(r||100)+(o?',"'+o+'"]':"]"))}function mkContact(t,n,o){getAuthToken(function(e){mkContact_t(!0,e,t,n,o)})}function mkContact_t(e,t,n,o,a){var r=new XMLHttpRequest;r.open("POST","https://cp.wvoice.workers.dev/corsproxy/?apiurl="+encodeURIComponent("https://content-people-pa.googleapis.com/v2/people?get_people_request.extension_set.extension_names=hangouts_phone_data&get_people_request.request_mask.include_field.paths=person.metadata&get_people_request.request_mask.include_field.paths=person.name&get_people_request.request_mask.include_field.paths=person.phone&get_people_request.request_mask.include_field.paths=person.photo&get_people_request.request_mask.include_container=CONTACT&get_people_request.request_mask.include_container=PROFILE&get_people_request.request_mask.include_container=DOMAIN_CONTACT&get_people_request.request_mask.include_container=DOMAIN_PROFILE&get_people_request.request_mask.include_container=PLACE&get_people_request.context.migration_options.use_new_request_mask_behavior=true&alt=json"),1),r.setRequestHeader("Content-Type","application/json"),r.setRequestHeader("Authorization","Bearer "+t),r.withCredentials=1,r.onreadystatechange=function(){4==r.readyState&&(e&&401==r.status&&resp401Unauth(r.response)&&(wvWipeAuthToken(),getAuthToken(function(e){mkContact_t(!1,e,n,o,a)})),200!=r.status?(alert("status: "+r.status+"\nresp:"+r.response),a&&a(r.response||-1)):a&&a(!1))},r.send('{"name":{"display_name":'+JSON.stringify(n)+'},"phone":{"value":"+1'+o+'","type":""}}')}function mkCallWithSrc(t,n,o){getAuthToken(function(e){mkCallWithSrc_t(!0,e,t,n,o)})}function mkCallWithSrc_t(e,t,n,o,a){var r=new XMLHttpRequest;r.open("POST","https://cp.wvoice.workers.dev/corsproxy/?apiurl="+encodeURIComponent("https://content.googleapis.com/voice/v1/voiceclient/communication/startclicktocall?alt=protojson"),1),r.setRequestHeader("Content-Type","application/json+protobuf"),r.setRequestHeader("Authorization","Bearer "+t),r.withCredentials=1,r.onreadystatechange=function(){4==r.readyState&&(e&&401==r.status&&resp401Unauth(r.response)&&(wvWipeAuthToken(),getAuthToken(function(e){mkCallWithSrc_t(!1,e,n,o,a)})),200!=r.status?(alert("status: "+r.status+"\nresp:"+r.response),a&&a(r.response||-1)):a&&a(!1))},r.send('[["phnnmbr","+1'+o+'"],["phnnmbr","+1'+n+'"]]')}function getActInfo(t){getAuthToken(function(e){getActInfo_t(!0,e,t)})}function getActInfo_t(e,t,n){var o=new XMLHttpRequest;o.open("POST","https://cp.wvoice.workers.dev/corsproxy/?apiurl="+encodeURIComponent("https://content.googleapis.com/voice/v1/voiceclient/account/get?alt=json"),1),o.setRequestHeader("Content-Type","application/json+protobuf"),o.setRequestHeader("Authorization","Bearer "+t),o.withCredentials=1,o.onreadystatechange=function(){4==o.readyState&&(e&&401==o.status&&resp401Unauth(o.response)&&(wvWipeAuthToken(),getAuthToken(function(e){getActInfo_t(!1,e,n)})),200!=o.status?(alert("status: "+o.status+"\nresp:"+o.response),n&&n(o.response||-1)):n&&n(!1,JSON.parse(o.response)))},o.send("[null,1]")}function getSourceNumUI(e,t){if(1<e.length){var n,o=document.documentElement.removeChild(document.documentElement.getElementsByTagName("body")[0]),a=document.documentElement.appendChild(document.createElement("body"));for(a.appendChild(document.createTextNode("Pick Outgoing Number:")),a.appendChild(document.createElement("br")),n=0;n<e.length;n++){var r=a.appendChild(document.createElement("a"));r.setAttribute("href","#");var s=e[n].phoneNumber.e164,i=/^\+1(.+)$/.exec(s);r.innerText=i[1],r.onclick=function(e){e.preventDefault(),document.documentElement.replaceChild(o,a),t(!1,e.target.innerText)},a.appendChild(document.createElement("br"))}var c=a.appendChild(document.createElement("button"));c.innerText="Cancel/Return",c.onclick=function(){document.documentElement.replaceChild(o,a),t("USER_CLICKED_CANCEL")}}else{1==e.length?(s=e[0].phoneNumber.e164,i=/^\+1(.+)$/.exec(s),t(!1,i[1])):(alert("This account has no linked phone numbers for outgoing calls"),t("NO_LINKED_LINES_AVAILABLE"))}}function getSourceNum(n){var o;try{o=JSON.parse(localStorage.getItem("gvauthobj")).linkedPhone}catch(e){o=void 0}o?getSourceNumUI(o,n):getActInfo(function(e,t){e?n(e):(o=t.account.phones.linkedPhone,(e=JSON.parse(localStorage.getItem("gvauthobj"))).linkedPhone=o,localStorage.setItem("gvauthobj",JSON.stringify(e)),getSourceNumUI(o,n))})}function mkCall(n,o){getSourceNum(function(e,t){e?o(e):mkCallWithSrc(t,n,o)})}function resp401Unauth(e){try{if((e=JSON.parse(e).error)&&401==e.code&&("UNAUTHENTICATED"==e.status||"Invalid Credentials"==e.message))return!0}catch(e){}return!1}function imgURLToB64Str(e,t){var n=new XMLHttpRequest;n.open("GET","https://api.allorigins.win/raw?url="+encodeURIComponent(e),1),n.overrideMimeType("text/plain; charset=x-user-defined"),n.responseType="arraybuffer",n.onreadystatechange=function(){4==n.readyState&&(200!=n.status?(alert("status: "+n.status+"\nresp:"+n.response),t&&t(n.response||-1)):t&&t(!1,btoa(String.fromCharCode.apply(null,new Uint8Array(n.response)))))},n.send()}function attachIDtoB64(t,n,o,a){getAuthToken(function(e){attachIDtoB64_t(!0,e,t,n,o,a)})}function attachIDtoB64_t(e,t,n,o,a,r){var s=new XMLHttpRequest;s.open("POST","https://cp.wvoice.workers.dev/corsproxy/?apiurl="+encodeURIComponent("https://content.googleapis.com/voice/v1/voiceclient/attachments/get?alt=json"),1),s.setRequestHeader("Content-Type","application/json+protobuf"),s.setRequestHeader("Authorization","Bearer "+t),s.withCredentials=1,s.onreadystatechange=function(){4==s.readyState&&(e&&401==s.status&&resp401Unauth(s.response)&&(wvWipeAuthToken(),getAuthToken(function(e){attachIDtoB64_t(!1,e,n,o,a,r)})),200!=s.status?(alert("status: "+s.status+"\nresp:"+s.response),r&&r(s.response||-1)):r&&(s=(s=(s=(s=JSON.parse(s.response)).videoContent?s.videoContent.content:s.vcardContent?s.vcardContent.content:s.imageContent.content).replace(/-/g,"+")).replace(/_/g,"/"),r(!1,s)))},s.send('["'+n+'",'+o+","+(a?"null,[1,[null,null,null,null,0,null,1]]]":"1]"))}function chkNewMsg(t,n){getAuthToken(function(e){chkNewMsg_t(!0,e,t,n)})}function chkNewMsg_t(e,t,n,o){var a=new XMLHttpRequest;a.open("POST","https://cp.wvoice.workers.dev/corsproxy/?apiurl="+encodeURIComponent("https://www.googleapis.com/voice/v1/voiceclient/api2thread/get"),1),a.setRequestHeader("Content-Type","application/json+protobuf"),a.setRequestHeader("Authorization","Bearer "+t),a.withCredentials=1,a.onreadystatechange=function(){4==a.readyState&&(200!=a.status?(404==a.status||0==a.status||401==a.status||alert("status: "+a.status+"\nresp:"+a.response),o&&o(a.response||-1)):o&&o(!1,a.response))},a.send('["t.+1'+n+'",1]')}function getProxyNumWithSrc(t,n,o){getAuthToken(function(e){getProxyNumWithSrc_t(!0,e,t,n,o)})}function getProxyNumWithSrc_t(e,t,n,o,a){var r=new XMLHttpRequest;r.open("POST","https://cp.wvoice.workers.dev/corsproxy/?apiurl="+encodeURIComponent("https://www.googleapis.com/voice/v1/proxynumbers/reserve?alt=json"),1),r.setRequestHeader("Content-Type","application/json+protobuf"),r.setRequestHeader("Authorization","Bearer "+t),r.withCredentials=1,r.onreadystatechange=function(){4==r.readyState&&(e&&401==r.status&&resp401Unauth(r.response)&&(wvWipeAuthToken(),getAuthToken(function(e){getProxyNumWithSrc_t(!1,e,n,o,a)})),200!=r.status?(alert("status: "+r.status+"\nresp:"+r.response),a&&a(r.response||-1)):a&&a(!1,r.response))},r.send('[[["phnnmbr","+1'+o+'"]],null,["phnnmbr","+1'+n+'"],null,1]')}