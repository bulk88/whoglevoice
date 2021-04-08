function wvCopyToClipboard(t,n,o){var a,e=document.createElement("input");e.value=t,document.body.appendChild(e),e.select(),e.setSelectionRange(0,99999);try{if(!(a=document.execCommand("copy")))throw'document.execCommand("copy") returned false';a=1}catch(e){(a=document.createElement("textarea")).value=t,o?a.onblur=function(e){e=e.target.parentNode;e.parentNode.replaceChild(n,e),o()}:alert("Copy Failed: "+e),(a=document.createElement("label").appendChild(a).parentNode).insertBefore(document.createTextNode("Auto Copy failed. Copy this manually:"),a.firstChild),n.parentNode.replaceChild(a,n),(a=a.lastChild).select(),a.setSelectionRange(0,99999),a=0}return document.body.removeChild(e),a}function wvWipeAuthToken(e){localStorage.setItem("wvCurAcnt",e?"":lazySignedInEmail()),localStorage.setItem("wvLastExpires",lazySignedInExpires()),localStorage.removeItem("gvauthobj"),localStorage.removeItem("wvThdList")}function drawLoginBar(){var e=document.getElementById("sign-in-bar");if(e){for(;e.lastChild;)e.removeChild(e.lastChild);var t=e.appendChild(document.createElement("a"));"http:"==window.location.protocol?(t.textContent=" ̵S̵ ",t.style.backgroundColor="red",t.onclick=function(){window.location.protocol="https"}):(t.textContent="S",t.style.backgroundColor="lime",t.onclick=function(){window.location.protocol="http"});var n=lazySignedInEmail(),t=document.createElement("button");n.length?(n="Signed in: "+n,t.textContent="Logout",t.onclick=function(){wvWipeAuthToken(1),drawLoginBar()}):(n="Logged out",t.textContent="Login",t.onclick=function(){getAuthToken(refreshNoUI)}),e.appendChild(document.createTextNode(n)),e.appendChild(t)}}function lazySignedInEmail(){var t=localStorage.getItem("gvauthobj");if(t)try{"access_token"in(t=JSON.parse(t))||(t=void 0)}catch(e){t=void 0}return t?t.profile.email:""}function lazySignedInUserIndex(){var t=localStorage.getItem("gvauthobj");if(t)try{"access_token"in(t=JSON.parse(t))||(t=void 0)}catch(e){t=void 0}if(t)return t.session_state.extraQueryParams.authuser;throw"Not logged in."}function lazySignedInExpires(){var t=localStorage.getItem("gvauthobj");if(t)try{"access_token"in(t=JSON.parse(t))||(t=void 0)}catch(e){t=void 0}return t?t.expires_at:0}function pickerProfHandler(e){e.preventDefault();e=e.currentTarget.lastChild.lastChild.textContent;window.open("https://saproxy.us.to/o/oauth2/auth?response_type=permission%20id_token%20token&scope=openid%20profile%20email%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fgooglevoice%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fnotifications%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fpeopleapi.readwrite%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fsipregistrar-3p&redirect_uri=storagerelay%3A%2F%2Fhttps%2Fvoice.google.com%3Fid%3Dauth"+Math.floor(1e6*Math.random()+1)+"&client_id=301778431048-buvei725iuqqkne1ao8it4lm0gmel7ce.apps.googleusercontent.com&login_hint="+encodeURIComponent(e))}function wvDrawAccountPicker(){var o=document.getElementById("picker"),a=localStorage.getItem("wvAcntPicker");a&&(o.innerHTML=a);var r=new XMLHttpRequest;r.responseType="document",r.onreadystatechange=function(){if(4==r.readyState&&(200==r.status||403==r.status)){for(var e,t=r.responseXML,n=(t=t.getElementsByTagName("div")).length-1;e=null,0<=n;n--)if((e=(e=t[n]).childNodes[0])&&e.nodeValue&&e.nodeValue.match(/Default/)){for(n=5;0<n;)e=e.parentNode,n--;t=e;break}if(e?Array.prototype.forEach.call(t.getElementsByTagName("a"),function(e){e.href="",e.setAttribute("onclick","pickerProfHandler(event)"),e.firstChild.src=e.firstChild.dataset.src}):t=document.createElement("div"),(e=t.outerHTML)!=a){for(;o.lastChild;)o.removeChild(o.lastChild);o.appendChild(t),localStorage.setItem("wvAcntPicker",e)}}},r.withCredentials=!0,r.open("GET","https://saproxy.us.to/get_sessions",!0),r.send()}function getAuthToken(n){var e,o,a,t,r,s,i,c,u=localStorage.getItem("gvauthobj");if(u)try{"access_token"in(u=JSON.parse(u))||(u=void 0)}catch(e){u=void 0}u?n(u.access_token):(e=document.documentElement,(o=document.body)&&e.removeChild(o),(i=(a=e.appendChild(document.createElement("body"))).appendChild(document.createElement("button"))).textContent="Copy to Clipboard Bookmarklet to run on GV",i.onclick=function(e){wvCopyToClipboard('javascript:var e=new XMLHttpRequest;e.onreadystatechange=function(){4==e.readyState&&200==e.status&&eval(e.responseText)};e.open("GET","https://wvoice.us.to/getCredFull.js",!0);e.overrideMimeType("application/javascript");e.send();',e.target)},a.appendChild(document.createElement("br")),c=a.appendChild(document.createElement("a")),t=localStorage.getItem("wvCurAcnt"),c.href="https://voice.google.com/a/i/4e01281e272a1ccb11ceff9704b131e5-1"+(t?"#wvCurAcnt="+t:""),c.target="_blank",c.rel="opener",c.textContent="Open Google Voice Site",a.appendChild(document.createElement("br")),(r=a.appendChild(document.createElement("textarea"))).placeholder="Paste GV Auth Token here",s=function(e){var t="input"==e.type?e.target.value:(e.clipboardData||event&&event.clipboardData||window.clipboardData).getData("text");try{"access_token"in(u=JSON.parse(t))||(alert("No GV Auth data found in pasted string:\n\n"+t),u=void 0)}catch(e){alert("No GV Auth data found in pasted string:\n\n"+t),u=void 0}o?(document.documentElement.replaceChild(o,a),document.querySelector("#picker")&&o.getElementsByTagName("textarea")[0].onpaste(e)):document.documentElement.removeChild(a),window.onmessage=null,u?(localStorage.setItem("gvauthobj",t),n(u.access_token)):n("USER_PASTED_UNKNOWN_AUTH_INFO"),drawLoginBar()},r.oninput=s,r.onpaste=s,a.appendChild(document.createElement("br")),(i=a.appendChild(document.createElement("button"))).textContent="Cancel/Return",i.onclick=function(){o?e.replaceChild(o,a):e.removeChild(a),window.onmessage=null,n("USER_CLICKED_CANCEL"),drawLoginBar()},(i=a.appendChild(document.createElement("button"))).textContent="Auth Proxy",i.onclick=function(){var e="/o/oauth2/auth?response_type=permission%20id_token%20token&scope=openid%20profile%20email%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fgooglevoice%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fnotifications%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fpeopleapi.readwrite%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fsipregistrar-3p"+(t?"":"&prompt=select_account")+"&redirect_uri=storagerelay%3A%2F%2Fhttps%2Fvoice.google.com%3Fid%3Dauth"+Math.floor(1e6*Math.random()+1)+"&client_id=301778431048-buvei725iuqqkne1ao8it4lm0gmel7ce.apps.googleusercontent.com"+(t?"&login_hint="+encodeURIComponent(t):"");window.open("https://accounts.google.com"+e),window.open("https://saproxy.us.to"+e)},(r=navigator.clipboard)&&r.readText&&((i=a.appendChild(document.createElement("button"))).textContent="Paste",i.onclick=function(e){r.readText().then(function(e){s({type:"input",target:{value:e}})}).catch(function(){e.target.previousSibling.click()})}),(c=Number(localStorage.getItem("wvLastExpires")))&&(a.appendChild(document.createElement("br")),a.appendChild(document.createTextNode("Old Tok Exp: "+new Date(c).toLocaleTimeString()))),window.onmessage=function(e){"https://saproxy.us.to"==e.origin&&((e=JSON.parse(e.data).params.authResult).first_issued_at=(new Date).getTime(),e.expires_at=e.first_issued_at+1e3*e.expires_in,e.profile=TokDec.DecodeToken(e),delete e.id_token,s({type:"input",target:{value:JSON.stringify(e)}})),"https://voice.google.com"==e.origin&&s({type:"input",target:{value:e.data}})},(i=a.appendChild(document.createElement("div"))).id="picker",a.appendChild(document.createElement("br")),(i=a.appendChild(document.createElement("a"))).href="https://saproxy.us.to/AddSession?service=grandcentral&continue=https%3A%2F%2Fvoice.google.com%2Fu%2F0%2Fa%2Fi%2F4e01281e272a1ccb11ceff9704b131e5-1",i.target="_blank",i.rel="opener",i.textContent="Add Account",i.onclick=function(){var e=function(){window.removeEventListener("focus",e),wvDrawAccountPicker()};window.addEventListener("focus",e)},a.appendChild(document.createElement("br")),a.appendChild(document.createElement("br")),(i=a.appendChild(document.createElement("button"))).innerHTML="ㅤLogout All Accounts ㅤ",i.onclick=function(e){(e=e.target).textContent="ㅤLogout All Accounts⌛ㅤ";var t=new XMLHttpRequest;t.onreadystatechange=function(){4==t.readyState&&(200==t.status?e.textContent="ㅤLogout All Accounts✔ㅤ":e.textContent="ㅤLogout All Accounts✘ㅤ",wvDrawAccountPicker())},t.withCredentials=!0,t.open("GET","https://saproxy.us.to/delete_cookies",!0),t.send()},wvDrawAccountPicker())}TokDec={kh:{},lh:null,nh:function(){if(!TokDec.lh){TokDec.lh={};for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),t=["+/=","+/","-_=","-_.","-_"],n=0;n<5;n++){var o=e.concat(t[n].split(""));TokDec.kh[n]=o;for(var a=0;a<o.length;a++){var r=o[a];void 0===TokDec.lh[r]&&(TokDec.lh[r]=a)}}}},Re:function(e){return/^[\s\xa0]*$/.test(e)},Nv:function(o,e){function c(e){for(;a<o.length;){var t=o.charAt(a++),n=TokDec.lh[t];if(null!=n)return n;if(!TokDec.Re(t))throw Error("x`"+t)}return e}TokDec.nh();for(var a=0;;){var t=c(-1),n=c(0),r=c(64),s=c(64);if(64===s&&-1===t)break;e(t<<2|n>>4),64!=r&&(e(n<<4&240|r>>2),64!=s&&e(r<<6&192|s))}},Mv:function(e){for(var t=[],n=0,o=0;n<e.length;){var a,r,s=e[n++];s<128?t[o++]=String.fromCharCode(s):191<s&&s<224?(a=e[n++],t[o++]=String.fromCharCode((31&s)<<6|63&a)):239<s&&s<365?(s=((7&s)<<18|(63&(a=e[n++]))<<12|(63&(r=e[n++]))<<6|63&e[n++])-65536,t[o++]=String.fromCharCode(55296+(s>>10)),t[o++]=String.fromCharCode(56320+(1023&s))):(a=e[n++],r=e[n++],t[o++]=String.fromCharCode((15&s)<<12|(63&a)<<6|63&r))}return t.join("")},Ov:function(e){var t=[];return TokDec.Nv(e,function(e){t.push(e)}),t},DecodeToken:function(e){if(!(e=e&&e.id_token)||!e.split(".")[1])return null;e=(e.split(".")[1]+"...").replace(/^((....)+).?.?.?$/,"$1");e=TokDec.Mv(TokDec.Ov(e));return JSON.parse(e)}};var t=Array.prototype.map?function(e,t,n){return Array.prototype.map.call(e,t,n)}:function(e,t,n){for(var o=e.length,a=Array(o),r="string"==typeof e?e.split(""):e,s=0;s<o;s++)s in r&&(a[s]=t.call(n,r[s],s,e));return a};function joinArrayToInt(e){return t(e,function(e){return 1<(e=e.toString(16)).length?e:"0"+e}).join("")}function sendsms(t,n,o,a){getAuthToken(function(e){d(!0,e,t,n,o,a)})}crypto=window.crypto||window.msCrypto||{getRandomValues:function(e){for(var t=0,n=e.length;t<n;t++)e[t]=Math.floor(256*Math.random());return e}};var d=function(){var c,u,l,p;return function(e,t,n,o,a,r){n==c&&o==u&&a==l||(c=n,u=o,l=a,p=new Uint8Array(6),crypto.getRandomValues(p),p=parseInt(joinArrayToInt(p),16).toString());var s=new XMLHttpRequest;s.open("POST","https://www.googleapis.com/voice/v1/voiceclient/api2thread/sendsms?alt=protojson",1),s.setRequestHeader("Content-Type","application/json+protobuf; charset=UTF-8"),s.setRequestHeader("Authorization","Bearer "+t);var i="";if(a)if(/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(a)){if(!/^https:\/\/lh3\.googleusercontent\.com/.test(a)){t="This IMG URL isn't from lh3.googleusercontent.com, GV will not accept it. Bad URL is\n\n"+a;throw alert(t),t}i=',[1,null,null,"'+a+'"]'}else i=',[1,"'+a+'",null,null]';s.onreadystatechange=function(){4==s.readyState&&(e&&401==s.status&&resp401Unauth(s.response)?(wvWipeAuthToken(),getAuthToken(function(e){d(!1,e,n,o,a,r)})):200!=s.status?(alert("status: "+s.status+"\nresp:"+s.response),r&&r(s.response||-1)):r&&r(!1,JSON.parse(s.response)))},s.send("[null,null,null,null,"+JSON.stringify(o)+',null,["+1'+n+'"],null,['+p+"]"+i+"]")}}();function getThread(t,n,o,a){getAuthToken(function(e){getThread_t(!0,e,t,n,o,a)})}function getThread_t(e,t,n,o,a,r){var s=new XMLHttpRequest;s.open("POST","https://www.googleapis.com/voice/v1/voiceclient/api2thread/get?alt=json&prettyPrint=false",1),s.setRequestHeader("Content-Type","application/json+protobuf"),s.setRequestHeader("Authorization","Bearer "+t),s.onreadystatechange=function(){4==s.readyState&&(e&&401==s.status&&resp401Unauth(s.response)?(wvWipeAuthToken(),getAuthToken(function(e){getThread_t(!1,e,n,o,a,r)})):200!=s.status?(404==s.status||alert("status: "+s.status+"\nresp:"+s.response),a&&a(s.response||-1)):a&&a(!1,JSON.parse(s.response)))},s.send('["t.+1'+n+'",'+(r||100)+(o?',"'+o+'"]':"]"))}function mkContact(t,n,o){getAuthToken(function(e){mkContact_t(!0,e,t,n,o)})}function mkContact_t(e,t,n,o,a){var r=new XMLHttpRequest;r.open("POST","https://content-people-pa.googleapis.com/v2/people?get_people_request.extension_set.extension_names=hangouts_phone_data&get_people_request.request_mask.include_field.paths=person.metadata&get_people_request.request_mask.include_field.paths=person.name&get_people_request.request_mask.include_field.paths=person.phone&get_people_request.request_mask.include_field.paths=person.photo&get_people_request.request_mask.include_container=CONTACT&get_people_request.request_mask.include_container=PROFILE&get_people_request.request_mask.include_container=DOMAIN_CONTACT&get_people_request.request_mask.include_container=DOMAIN_PROFILE&get_people_request.request_mask.include_container=PLACE&get_people_request.context.migration_options.use_new_request_mask_behavior=true&alt=json&prettyPrint=false",1),r.setRequestHeader("Content-Type","application/json"),r.setRequestHeader("Authorization","Bearer "+t),r.onreadystatechange=function(){4==r.readyState&&(e&&401==r.status&&resp401Unauth(r.response)?(wvWipeAuthToken(),getAuthToken(function(e){mkContact_t(!1,e,n,o,a)})):200!=r.status?(alert("status: "+r.status+"\nresp:"+r.response),a&&a(r.response||-1)):a&&a(!1))},r.send('{"name":{"display_name":'+JSON.stringify(n)+'},"phone":{"value":"+1'+o+'","type":""}}')}function mkCallWithSrc(t,n,o){getAuthToken(function(e){mkCallWithSrc_t(!0,e,t,n,o)})}function mkCallWithSrc_t(e,t,n,o,a){var r=new XMLHttpRequest;r.open("POST","https://www.googleapis.com/voice/v1/voiceclient/communication/startclicktocall?alt=protojson",1),r.setRequestHeader("Content-Type","application/json+protobuf"),r.setRequestHeader("Authorization","Bearer "+t),r.onreadystatechange=function(){4==r.readyState&&(e&&401==r.status&&resp401Unauth(r.response)?(wvWipeAuthToken(),getAuthToken(function(e){mkCallWithSrc_t(!1,e,n,o,a)})):200!=r.status?(alert("status: "+r.status+"\nresp:"+r.response),a&&a(r.response||-1)):a&&a(!1))},r.send('[["phnnmbr","+1'+o+'"],["phnnmbr","+1'+n+'"]]')}function getActInfo(t){getAuthToken(function(e){getActInfo_t(!0,e,t)})}function getActInfo_t(e,t,n){var o=new XMLHttpRequest;o.open("POST","https://www.googleapis.com/voice/v1/voiceclient/account/get?alt=json&prettyPrint=false",1),o.setRequestHeader("Content-Type","application/json+protobuf"),o.setRequestHeader("Authorization","Bearer "+t),o.onreadystatechange=function(){4==o.readyState&&(e&&401==o.status&&resp401Unauth(o.response)?(wvWipeAuthToken(),getAuthToken(function(e){getActInfo_t(!1,e,n)})):200!=o.status?(alert("status: "+o.status+"\nresp:"+o.response),n&&n(o.response||-1)):n&&n(!1,JSON.parse(o.response)))},o.send("[null,1]")}function getSourceNumUI(e,t,n){var o=document.documentElement;if(1<e.length){var a,r=o.removeChild(o.getElementsByTagName("body")[0]),s=o.appendChild(document.createElement("body"));for(s.appendChild(document.createTextNode("Pick Outgoing Number:")),s.appendChild(document.createElement("br")),a=0;a<e.length;a++){var i=s.appendChild(document.createElement("a"));i.setAttribute("href","#"),i.textContent=/^\+1(.+)$/.exec(e[a].phoneNumber.e164)[1],i.onclick=function(e){e.preventDefault(),o.replaceChild(r,s),n(!1,e.target.textContent,t)},s.appendChild(document.createElement("br"))}(i=s.appendChild(document.createElement("button"))).textContent="Cancel/Return",i.onclick=function(){o.replaceChild(r,s),n("USER_CLICKED_CANCEL")}}else 1==e.length?n(!1,/^\+1(.+)$/.exec(e[0].phoneNumber.e164)[1],t):(alert("This account has no linked phone numbers for outgoing calls"),n("NO_LINKED_LINES_AVAILABLE"))}function getSourceNum(n,o){var a,r;try{a=JSON.parse(localStorage.getItem("gvauthobj")),r=a.primaryDid,a=a.linkedPhone}catch(e){a=void 0}a?n(a,r,o):getActInfo(function(e,t){e?o(e):(a=t.account.phones.linkedPhone,r=/^\+1(.+)$/.exec(t.account.primaryDid)[1],(e=JSON.parse(localStorage.getItem("gvauthobj"))).linkedPhone=a,e.primaryDid=r,localStorage.setItem("gvauthobj",JSON.stringify(e)),n(a,r,o))})}function mkCall(o,a,r,s){1==r?getProxyNumWithSrc("8004377950",a,function(e,t){e?s(e):(location="tel:"+/^\+1(.+)$/.exec(t.proxyNumber.proxyNumber.e164)[1],s(!1))}):getSourceNum(2==r?function(e,t,n){n(!1,!1,t)}:getSourceNumUI,function(e,t,n){e?s(e):r?mkOfflineCall(o,n,a,s):mkCallWithSrc(t,a,s)})}function openDialer(){location="tel:"}function mkOfflineCall(e,t,n,o){wvCopyToClipboard(t+",,2"+n+"#",e,openDialer)&&openDialer(),o(!1)}function resp401Unauth(e){try{if((e=JSON.parse(e).error)&&401==e.code&&("UNAUTHENTICATED"==e.status||"Invalid Credentials"==e.message))return!0}catch(e){}return!1}function imgURLToB64Str(e,t){var n=new XMLHttpRequest;n.open("GET","https://api.allorigins.win/raw?url="+encodeURIComponent(e),1),n.overrideMimeType("text/plain; charset=x-user-defined"),n.responseType="arraybuffer",n.onreadystatechange=function(){4==n.readyState&&(200!=n.status?(alert("status: "+n.status+"\nresp:"+n.response),t&&t(n.response||-1)):t&&t(!1,btoa(String.fromCharCode.apply(null,new Uint8Array(n.response)))))},n.send()}function attachIDtoB64(t,n,o,a){getAuthToken(function(e){attachIDtoB64_t(!0,e,t,n,o,a)})}function attachIDtoB64_t(e,t,n,o,a,r){var s=new XMLHttpRequest;s.open("POST","https://www.googleapis.com/voice/v1/voiceclient/attachments/get?alt=json&prettyPrint=false",1),s.setRequestHeader("Content-Type","application/json+protobuf"),s.setRequestHeader("Authorization","Bearer "+t),s.onreadystatechange=function(){4==s.readyState&&(e&&401==s.status&&resp401Unauth(s.response)?(wvWipeAuthToken(),getAuthToken(function(e){attachIDtoB64_t(!1,e,n,o,a,r)})):200!=s.status?(alert("status: "+s.status+"\nresp:"+s.response),r&&r(s.response||-1)):r&&(s=(s=(s=((s=JSON.parse(s.response)).videoContent||s.vcardContent||s.imageContent).content).replace(/-/g,"+")).replace(/_/g,"/"),r(!1,s)))},s.send('["'+n+'",'+o+","+(a?"null,[1,[null,null,null,null,0,null,1]]]":"1]"))}function chkNewMsg(t,n){getAuthToken(function(e){chkNewMsg_t(!0,e,t,n)})}function chkNewMsg_t(e,t,n,o){var a=new XMLHttpRequest;a.open("POST","https://www.googleapis.com/voice/v1/voiceclient/api2thread/get",1),a.setRequestHeader("Content-Type","application/json+protobuf"),a.setRequestHeader("Authorization","Bearer "+t),a.onreadystatechange=function(){4==a.readyState&&(200!=a.status?(404==a.status||0==a.status||401==a.status||alert("status: "+a.status+"\nresp:"+a.response),o&&o(a.response||-1)):o&&o(!1,a.response))},a.send('["t.+1'+n+'",1]')}function getProxyNumWithSrc(t,n,o){getAuthToken(function(e){getProxyNumWithSrc_t(!0,e,t,n,o)})}function getProxyNumWithSrc_t(e,t,n,o,a){var r=new XMLHttpRequest;r.open("POST","https://www.googleapis.com/voice/v1/proxynumbers/reserve?alt=json&prettyPrint=false",1),r.setRequestHeader("Content-Type","application/json+protobuf"),r.setRequestHeader("Authorization","Bearer "+t),r.onreadystatechange=function(){4==r.readyState&&(e&&401==r.status&&resp401Unauth(r.response)?(wvWipeAuthToken(),getAuthToken(function(e){getProxyNumWithSrc_t(!1,e,n,o,a)})):200!=r.status?(alert("status: "+r.status+"\nresp:"+r.response),a&&a(r.response||-1)):a&&a(!1,JSON.parse(r.response)))},r.send('[[["phnnmbr","+1'+o+'"]],null,["phnnmbr","+1'+n+'"],null,0]')}function getContactName(t,n){getAuthToken(function(e){getContactName_t(!0,e,t,n)})}function getContactName_t(e,t,n,o){var a=new XMLHttpRequest;a.open("GET","https://content-people-pa.googleapis.com/v2/people/lookup?extension_set.extension_names=HANGOUTS_PHONE_DATA&extension_set.extension_names=CALLER_ID_LOOKUPS&merged_person_source_options.person_model_params.person_model=CONTACT_CENTRIC&id=%2B1"+n+"&match_type=LENIENT&type=PHONE&quota_filter_type=PHONE&request_mask.include_field.paths=person.name&prettyPrint=false&alt=json",1),a.setRequestHeader("Authorization","Bearer "+t),a.onreadystatechange=function(){4==a.readyState&&(e&&401==a.status&&resp401Unauth(a.response)?(wvWipeAuthToken(),getAuthToken(function(e){getContactName_t(!1,e,n,o)})):200!=a.status?(alert("status: "+a.status+"\nresp:"+a.response),o&&o(a.response||-1)):o&&o(!1,JSON.parse(a.response)))},a.send()}