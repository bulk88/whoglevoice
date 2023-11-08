function wvCopyToClipboard(t,n,o){var a,e=document.createElement("input");e.value=t,document.body.appendChild(e),e.select(),e.setSelectionRange(0,99999);try{if(!(a=document.execCommand("copy")))throw'document.execCommand("copy") returned false';a=1}catch(e){(a=document.createElement("textarea")).value=t,o?a.onblur=function(e){e=e.target.parentNode;e.parentNode.replaceChild(n,e),o()}:alert("Copy Failed: "+e),(a=document.createElement("label").appendChild(a).parentNode).insertBefore(document.createTextNode("Auto Copy failed. Copy this manually:"),a.firstChild),n.parentNode.replaceChild(a,n),(a=a.lastChild).select(),a.setSelectionRange(0,99999),a=0}return document.body.removeChild(e),a}function wvWipeAuthToken(e){localStorage.setItem("wvCurAcnt",e?"":lazySignedInEmail()),localStorage.setItem("wvLastExpires",lazySignedInExpires()),localStorage.removeItem("gvauthobj"),localStorage.removeItem("wvThdListA"),localStorage.removeItem("wvThdListM"),localStorage.removeItem("wvArchView")}function drawLoginBar(){var e=document.getElementById("sign-in-bar");if(e){for(;e.lastChild;)e.removeChild(e.lastChild);var t,n=e.appendChild(document.createElement("a")),o=("http:"==window.location.protocol?(n.textContent=" ̵S̵ ",n.style.backgroundColor="red",n.onclick=function(){window.location.protocol="https"}):(n.textContent="S",n.style.backgroundColor="lime",n.onclick=function(){window.location.protocol="http"}),lazySignedInEmail()),n=document.createElement("button");o.length?(e.appendChild(document.createTextNode("Signed in: ")),(t=document.createElement("a")).href="#",t.textContent=t.x_eml=o,t.x_num=lazySignedInPrimaryDid(),t.onclick=function(){return this.textContent=this.textContent==this.x_eml?this.x_num:this.x_eml,!1},n.textContent="Logout",n.onclick=function(){wvWipeAuthToken(1),drawLoginBar()}):(t=document.createTextNode("Logged out"),n.textContent="Login",n.onclick=function(){getAuthToken(refreshNoUI)}),e.appendChild(t),e.appendChild(n)}}function lazySignedInEmail(){var t=localStorage.getItem("gvauthobj");if(t)try{"access_token"in(t=JSON.parse(t))||(t=void 0)}catch(e){t=void 0}return t?t.profile.email:""}function lazySignedInPrimaryDid(){var t=localStorage.getItem("gvauthobj");if(t)try{"access_token"in(t=JSON.parse(t))||(t=void 0)}catch(e){t=void 0}return t?t.primaryDid:""}function lazySignedGoogId(){var t=localStorage.getItem("gvauthobj");if(t)try{"access_token"in(t=JSON.parse(t))||(t=void 0)}catch(e){t=void 0}return t?t.profile.sub:""}function lazySignedInUserIndex(){var t=localStorage.getItem("gvauthobj");if(t)try{"access_token"in(t=JSON.parse(t))||(t=void 0)}catch(e){t=void 0}if(t)return t.session_state.extraQueryParams.authuser;throw"Not logged in."}function lazySignedInExpires(){var t=localStorage.getItem("gvauthobj");if(t)try{"access_token"in(t=JSON.parse(t))||(t=void 0)}catch(e){t=void 0}return t?t.expires_at:0}TokDec={kh:{},lh:null,nh:function(){if(!TokDec.lh){TokDec.lh={};for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),t=["+/=","+/","-_=","-_.","-_"],n=0;n<5;n++){var o=e.concat(t[n].split(""));TokDec.kh[n]=o;for(var a=0;a<o.length;a++){var r=o[a];void 0===TokDec.lh[r]&&(TokDec.lh[r]=a)}}}},Re:function(e){return/^[\s\xa0]*$/.test(e)},Nv:function(o,e){function c(e){for(;a<o.length;){var t=o.charAt(a++),n=TokDec.lh[t];if(null!=n)return n;if(!TokDec.Re(t))throw Error("x`"+t)}return e}TokDec.nh();for(var a=0;;){var t=c(-1),n=c(0),r=c(64),s=c(64);if(64===s&&-1===t)break;e(t<<2|n>>4),64!=r&&(e(n<<4&240|r>>2),64!=s)&&e(r<<6&192|s)}},Mv:function(e){for(var t=[],n=0,o=0;n<e.length;){var a,r,s=e[n++];s<128?t[o++]=String.fromCharCode(s):191<s&&s<224?(a=e[n++],t[o++]=String.fromCharCode((31&s)<<6|63&a)):239<s&&s<365?(s=((7&s)<<18|(63&(a=e[n++]))<<12|(63&(r=e[n++]))<<6|63&e[n++])-65536,t[o++]=String.fromCharCode(55296+(s>>10)),t[o++]=String.fromCharCode(56320+(1023&s))):(a=e[n++],r=e[n++],t[o++]=String.fromCharCode((15&s)<<12|(63&a)<<6|63&r))}return t.join("")},Ov:function(e){var t=[];return TokDec.Nv(e,function(e){t.push(e)}),t},DecodeToken:function(e){if(!(e=e&&e.id_token)||!e.split(".")[1])return null;e=(e.split(".")[1]+"...").replace(/^((....)+).?.?.?$/,"$1");e=TokDec.Mv(TokDec.Ov(e));return JSON.parse(e)}};var wvProxyPrefix="https:";function wvDrawUserList(e){var t=document.getElementById("picker"),n=document.createDocumentFragment();try{e=(e=JSON.parse(e))[1];for(var o=0;o<e.length;o++){var a=e[o],r=n.appendChild(document.createElement("a")),s=(r.href=wvProxyPrefix+"//p.saproxy.us.to/o/oauth2/auth?response_type=permission%20id_token%20token&scope=openid%20profile%20email%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fgooglevoice%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fnotifications%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fpeopleapi.readwrite%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fsipregistrar-3p&redirect_uri=storagerelay%3A%2F%2Fhttps%2Fvoice.google.com%3Fid%3Dauth"+Math.floor(1e6*Math.random()+1)+"&client_id=301778431048-buvei725iuqqkne1ao8it4lm0gmel7ce.apps.googleusercontent.com&authuser="+o+"&login_hint="+encodeURIComponent(a[3]),wvPickerTokenRefresh(r),r.target="_blank",r.rel="opener",r.appendChild(document.createElement("img")));s.src=a[4],s.referrerPolicy="no-referrer",s.style.height=48,s.style.width=48,r.appendChild(document.createElement("div")).textContent=a[2],r.appendChild(document.createElement("div")).textContent=a[3]}}catch(o){n.textContent=o}for(;t.lastChild;)t.removeChild(t.lastChild);t.appendChild(n)}function wvPickerTokenRefresh(t){var o=new XMLHttpRequest;o.open("GET",t.href,!0),o.responseType="json",o.onreadystatechange=function(){if(4==o.readyState)if(200==o.status)try{var n=o.response,e=n[0];((e=e.session_state=e.session_state||{}).extraQueryParams=e.extraQueryParams||{}).authuser=new URL(t.href).searchParams.get("authuser"),e=n[0].access_token,n={origin:"https://p.saproxy.us.to",data:JSON.stringify({params:{authResult:n[0],clientId:n[1],id:n[2],type:"authResult"}})},t.onclick=function(){return window.onmessage(n),!1},getActInfo_t(0,e,function(e,t){e||((e=JSON.parse(n.data)).params.authResult.linkedPhone=t.phone_arr,e.params.authResult.primaryDid=t.primaryDid,n.data=JSON.stringify(e))})}catch(e){console.log(e)}else 0==o.status&&"https:"==wvProxyPrefix&&(wvProxyPrefix="http:",wvPickerTokenRefresh(t))},o.withCredentials=!0,o.send()}function wvDrawAccountPicker(e){var t=localStorage.getItem("wvAcntPicker"),n=(t&&!e&&wvDrawUserList(t),new XMLHttpRequest);n.open("GET",wvProxyPrefix+"//p.saproxy.us.to/ListAccounts?mo=1",!0),n.onreadystatechange=function(){var e;4==n.readyState&&(200==n.status?(e=n.responseText)!=t&&(wvDrawUserList(e),localStorage.setItem("wvAcntPicker",e)):0==n.status&&"https:"==wvProxyPrefix&&(wvProxyPrefix="http:",wvDrawAccountPicker()))},n.withCredentials=!0,n.send()}function getAuthToken(n){var t,e,o,a,r,s,i,c,u,p=localStorage.getItem("gvauthobj");if(p)try{"access_token"in(p=JSON.parse(p))||(p=void 0)}catch(e){p=void 0}p?n(p.access_token):window.onmessage?(t=window.onmessage,window.onmessage=function(e){return window.onmessage=null,e=t(e),getAuthToken(n),e}):(e=document.documentElement,(o=document.body)&&e.removeChild(o),(c=(a=e.appendChild(document.createElement("body"))).appendChild(document.createElement("button"))).textContent="Copy to Clipboard Bookmarklet to run on GV",c.onclick=function(e){wvCopyToClipboard('javascript:var e=new XMLHttpRequest;e.onreadystatechange=function(){4==e.readyState&&200==e.status&&eval(e.responseText)};e.open("GET","https://wvoice.us.to/getCredFull.js",!0);e.overrideMimeType("application/javascript");e.send();',e.target)},a.appendChild(document.createElement("br")),u=a.appendChild(document.createElement("a")),r=localStorage.getItem("wvCurAcnt"),u.href="https://voice.google.com/about"+(r?"#wvCurAcnt="+r:""),u.target="_blank",u.rel="opener",u.textContent="Open Google Voice Site",a.appendChild(document.createElement("br")),(s=a.appendChild(document.createElement("textarea"))).placeholder="Paste GV Auth Token here",s.oninput=i=function(e){var t="input"==e.type?e.target.value:(e.clipboardData||event&&event.clipboardData||window.clipboardData).getData("text");try{"access_token"in(p=JSON.parse(t))||(alert("No GV Auth data found in pasted string:\n\n"+t),p=void 0)}catch(e){alert("No GV Auth data found in pasted string:\n\n"+t),p=void 0}o?(document.documentElement.replaceChild(o,a),document.querySelector("#picker")&&o.getElementsByTagName("textarea")[0].onpaste(e)):document.documentElement.removeChild(a),window.onmessage=null,p?(localStorage.setItem("gvauthobj",t),n(p.access_token)):n("USER_PASTED_UNKNOWN_AUTH_INFO"),drawLoginBar()},s.onpaste=i,a.appendChild(document.createElement("br")),(c=a.appendChild(document.createElement("button"))).textContent="Cancel/Return",c.onclick=function(){o?e.replaceChild(o,a):e.removeChild(a),window.onmessage=null,n("USER_CLICKED_CANCEL"),drawLoginBar()},(c=a.appendChild(document.createElement("button"))).textContent="Auth Proxy",c.onclick=function(){var e="/o/oauth2/auth?response_type=permission%20id_token%20token&scope=openid%20profile%20email%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fgooglevoice%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fnotifications%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fpeopleapi.readwrite%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fsipregistrar-3p"+(r?"":"&prompt=select_account")+"&redirect_uri=storagerelay%3A%2F%2Fhttps%2Fvoice.google.com%3Fid%3Dauth"+Math.floor(1e6*Math.random()+1)+"&client_id=301778431048-buvei725iuqqkne1ao8it4lm0gmel7ce.apps.googleusercontent.com"+(r?"&login_hint="+encodeURIComponent(r):"");window.open("https://accounts.google.com"+e),window.open(wvProxyPrefix+"//p.saproxy.us.to"+e)},(s=navigator.clipboard)&&s.readText&&((c=a.appendChild(document.createElement("button"))).textContent="Paste",c.onclick=function(e){s.readText().then(function(e){i({type:"input",target:{value:e}})}).catch(function(){e.target.previousSibling.click()})}),(u=Number(localStorage.getItem("wvLastExpires")))&&(a.appendChild(document.createElement("br")),a.appendChild(document.createTextNode("Old Tok Exp: "+new Date(u).toLocaleTimeString()))),window.onmessage=function(e){"https://p.saproxy.us.to"!=e.origin&&"http://p.saproxy.us.to"!=e.origin||((e=JSON.parse(e.data).params.authResult).first_issued_at=(new Date).getTime(),e.expires_at=e.first_issued_at+1e3*e.expires_in,e.profile=TokDec.DecodeToken(e),delete e.id_token,i({type:"input",target:{value:JSON.stringify(e)}})),"https://voice.google.com"==e.origin&&i({type:"input",target:{value:e.data}})},(c=a.appendChild(document.createElement("div"))).id="picker",a.appendChild(document.createElement("br")),(c=a.appendChild(document.createElement("a"))).href=wvProxyPrefix+"//p.saproxy.us.to/AddSession?service=grandcentral&continue=https%3A%2F%2Fvoice.google.com%2Fu%2F0%2Fa%2Fi%2F4e01281e272a1ccb11ceff9704b131e5-1",c.target="_blank",c.rel="opener",c.textContent="Add Account",c.onclick=function(e){(e=e.target).href.indexOf(wvProxyPrefix)&&(e.href=wvProxyPrefix+e.href.substr(e.href.indexOf("/")));var t=function(){window.removeEventListener("focus",t),wvDrawAccountPicker()};window.addEventListener("focus",t)},a.appendChild(document.createElement("br")),a.appendChild(document.createElement("br")),(c=a.appendChild(document.createElement("button"))).innerHTML="ㅤLogout All Accounts ㅤ",c.onclick=function(e){(e=e.target).textContent="ㅤLogout All Accounts⌛ㅤ";var t=new XMLHttpRequest;t.onreadystatechange=function(){4==t.readyState&&(200==t.status?e.textContent="ㅤLogout All Accounts✔ㅤ":e.textContent="ㅤLogout All Accounts✘ㅤ",wvDrawAccountPicker(1))},t.withCredentials=!0,t.open("GET",wvProxyPrefix+"//p.saproxy.us.to/delete_cookies",!0),t.send()},wvDrawAccountPicker())}var d=function(){var t=Array.prototype.map?function(e,t,n){return Array.prototype.map.call(e,t,n)}:function(e,t,n){for(var o=e.length,a=Array(o),r="string"==typeof e?e.split(""):e,s=0;s<o;s++)s in r&&(a[s]=t.call(n,r[s],s,e));return a};return function(e){return t(e,function(e){return 1<(e=e.toString(16)).length?e:"0"+e}).join("")}}();function sendsms(t,n,o,a){getAuthToken(function(e){sendsms_t(!0,e,t,n,o,a)})}function getThread(t,n,o,a){getAuthToken(function(e){getThread_t(!0,e,t,n,o,a)})}function getThread_t(e,t,n,o,a,r){var s=new XMLHttpRequest;s.open("POST","https://www.googleapis.com/voice/v1/voiceclient/api2thread/get?alt=json&prettyPrint=false",1),s.setRequestHeader("Content-Type","application/json+protobuf"),s.setRequestHeader("Authorization","Bearer "+t),s.onreadystatechange=function(){4==s.readyState&&(503==s.status?getThread_t(e,t,n,o,a,r):e&&401==s.status&&resp401Unauth(s.response)?(wvWipeAuthToken(),getAuthToken(function(e){getThread_t(!1,e,n,o,a,r)})):200!=s.status?(404!=s.status&&alert("status: "+s.status+"\nresp:"+s.response),a&&a(s.response||-1)):a&&a(!1,JSON.parse(s.response)))},s.send('["t.+1'+n+'",'+(r||100)+(o?',"'+o+'"]':"]"))}function mkContact(t,n,o){getAuthToken(function(e){mkContact_t(!0,e,t,n,o)})}function mkContact_t(e,t,n,o,a){var r=new XMLHttpRequest;r.open("POST","https://content-people-pa.googleapis.com/v2/people?get_people_request.extension_set.extension_names=hangouts_phone_data&get_people_request.request_mask.include_field.paths=person.metadata&get_people_request.request_mask.include_field.paths=person.name&get_people_request.request_mask.include_field.paths=person.phone&get_people_request.request_mask.include_field.paths=person.photo&get_people_request.request_mask.include_container=CONTACT&get_people_request.request_mask.include_container=PROFILE&get_people_request.request_mask.include_container=DOMAIN_CONTACT&get_people_request.request_mask.include_container=DOMAIN_PROFILE&get_people_request.request_mask.include_container=PLACE&get_people_request.context.migration_options.use_new_request_mask_behavior=true&alt=json&prettyPrint=false",1),r.setRequestHeader("Content-Type","application/json"),r.setRequestHeader("Authorization","Bearer "+t),r.onreadystatechange=function(){4==r.readyState&&(e&&401==r.status&&resp401Unauth(r.response)?(wvWipeAuthToken(),getAuthToken(function(e){mkContact_t(!1,e,n,o,a)})):200!=r.status?(alert("status: "+r.status+"\nresp:"+r.response),a&&a(r.response||-1)):a&&a(!1,JSON.parse(r.response)))},r.send('{"name":{"display_name":'+JSON.stringify(n)+'},"phone":{"value":"+1'+o+'","type":""}}')}function upContact(t,n,o,a,r){getAuthToken(function(e){upContact_t(!0,e,t,n,o,a,r)})}function upContact_t(n,o,a,r,s,i,c){var u=new XMLHttpRequest;u.open("GET","https://content-people-pa.googleapis.com/v2/people?extension_set.extension_names=PHONE_CANONICALIZATION&merged_person_source_options.person_model_params.person_model=CONTACT_CENTRIC&person_id="+a+"&request_mask.include_field.paths=person.metadata&request_mask.include_field.paths=person.name&request_mask.include_field.paths=person.website&request_mask.include_container=CONTACT&request_mask.include_container=PROFILE&request_mask.include_container=DOMAIN_CONTACT&request_mask.include_container=DOMAIN_PROFILE&request_mask.include_container=PLACE&context.migration_options.use_new_request_mask_behavior=true&prettyPrint=false&alt=json",1),u.setRequestHeader("Authorization","Bearer "+o),u.onreadystatechange=function(){var e,t;4==u.readyState&&(n&&401==u.status&&resp401Unauth(u.response)?(wvWipeAuthToken(),getAuthToken(function(e){upContact_t(!1,e,a,r,s,i,c)})):200==u.status&&"SUCCESS"==(t=JSON.parse(u.response).personResponse[0]).status?(t=t.person,null!=r&&(t.name[0].displayName=r),null==s&&null==i||(e=(e=t.website=t.website||[])[0]=e[0]||{},s&&(e.value=s),i&&(e.type=i,"string"!=typeof e.value)&&(e.value=" "),e.metadata=e.metadata||{container:"CONTACT"}),(u=new XMLHttpRequest).open("PUT","https://content-people-pa.googleapis.com/v2/people/"+a+"?container=CONTACT&person_id="+a+(null!=r?"&field_mask=person.name":"")+(null!=s||null!=i?"&field_mask=person.website":"")+"&get_people_request.extension_set.extension_names=phone_canonicalization&get_people_request.merged_person_source_options.person_model_params.person_model=CONTACT_CENTRIC&get_people_request.request_mask.include_field.paths=person.name&get_people_request.request_mask.include_field.paths=person.website&get_people_request.request_mask.include_container=CONTACT&get_people_request.request_mask.include_container=PROFILE&get_people_request.request_mask.include_container=DOMAIN_CONTACT&get_people_request.request_mask.include_container=DOMAIN_PROFILE&get_people_request.request_mask.include_container=PLACE&get_people_request.context.migration_options.use_new_request_mask_behavior=true&prettyPrint=false&alt=json",1),u.setRequestHeader("Content-Type","application/json"),u.setRequestHeader("Authorization","Bearer "+o),u.onreadystatechange=function(){4==u.readyState&&(200!=u.status?(alert("status: "+u.status+"\nresp:"+u.response),c&&c(u.response||-1)):c&&c(!1,JSON.parse(u.response)))},u.send(JSON.stringify(t))):(alert("status: "+u.status+"\nresp:"+u.response),c&&c(u.response||-1)))},u.send("")}function mkCallWithSrc(t,n,o){getAuthToken(function(e){mkCallWithSrc_t(!0,e,t,n,o)})}function mkCallWithSrc_t(e,t,n,o,a){var r=new XMLHttpRequest;r.open("POST","https://www.googleapis.com/voice/v1/voiceclient/communication/startclicktocall?alt=protojson",1),r.setRequestHeader("Content-Type","application/json+protobuf"),r.setRequestHeader("Authorization","Bearer "+t),r.onreadystatechange=function(){4==r.readyState&&(e&&401==r.status&&resp401Unauth(r.response)?(wvWipeAuthToken(),getAuthToken(function(e){mkCallWithSrc_t(!1,e,n,o,a)})):200!=r.status?(alert("status: "+r.status+"\nresp:"+r.response),a&&a(r.response||-1)):a&&a(!1))},r.send('[["phnnmbr","+1'+o+'"],["phnnmbr","+1'+n+'"]]')}function getActInfo(t){getAuthToken(function(e){getActInfo_t(!0,e,t)})}function getActInfo_t(o,e,a){var r=new XMLHttpRequest;r.open("POST","https://www.googleapis.com/voice/v1/voiceclient/account/get?alt=protojson",1),r.setRequestHeader("Content-Type","application/json+protobuf"),r.setRequestHeader("Authorization","Bearer "+e),r.responseType="json",r.onreadystatechange=function(){if(4==r.readyState)if(o&&401==r.status&&resp401Unauth(r.response))wvWipeAuthToken(),getAuthToken(function(e){getActInfo_t(!1,e,a)});else if(200!=r.status)alert("status: "+r.status+"\nresp:"+r.response),a&&a(r.response||-1);else if(a){for(var e=r.response[0][2][1]||[],t={primaryDid:/^\+1(.+)$/.exec(r.response[0][0])[1],phone_arr:e},n=0;n<e.length;n++)e[n]=/^\+1(.+)$/.exec(e[n][0][1])[1];a(!1,t)}},r.send("[null,1]")}function getSourceNumUI(e,t,n){var o=document.documentElement;if(1<e.length){var a,r=o.removeChild(o.getElementsByTagName("body")[0]),s=o.appendChild(document.createElement("body"));for(s.appendChild(document.createTextNode("Pick Outgoing Number:")),s.appendChild(document.createElement("br")),a=0;a<e.length;a++){var i=s.appendChild(document.createElement("a"));i.setAttribute("href","#"),i.textContent=e[a],i.onclick=function(e){e.preventDefault(),o.replaceChild(r,s),n(!1,e.target.textContent,t)},s.appendChild(document.createElement("br"))}(i=s.appendChild(document.createElement("button"))).textContent="Cancel/Return",i.onclick=function(){o.replaceChild(r,s),n("USER_CLICKED_CANCEL")}}else 1==e.length?n(!1,e[0],t):(alert("This account has no linked phone numbers for outgoing calls"),n("NO_LINKED_LINES_AVAILABLE"))}function getSourceNum(o,a){var r,s;try{r=JSON.parse(localStorage.getItem("gvauthobj")),s=r.primaryDid,r=r.linkedPhone}catch(e){r=void 0}r?o(r,s,a):getActInfo(function(e,t,n){e?a(e):(e=JSON.parse(localStorage.getItem("gvauthobj")),r=e.linkedPhone=t.phone_arr,s=e.primaryDid=t.primaryDid,localStorage.setItem("gvauthobj",JSON.stringify(e)),o(r,s,a))})}function mkCall(o,a,r,s){1==r?getProxyNumWithSrc("8004377950",a,function(e,t){e?s(e):(location="tel:"+/^\+1(.+)$/.exec(t.proxyNumber.proxyNumber.e164)[1],s(!1))}):getSourceNum(2==r?function(e,t,n){n(!1,!1,t)}:getSourceNumUI,function(e,t,n){e?s(e):r?mkOfflineCall(o,n,a,s):mkCallWithSrc(t,a,s)})}function openDialer(){location="tel:"}function mkOfflineCall(e,t,n,o){wvCopyToClipboard(t+",,2"+n+"#",e,openDialer)&&openDialer(),o(!1)}function resp401Unauth(e){try{if(e=JSON.parse(e),Array.isArray(e)&&16==e[0]&&!e[1].indexOf("Request had invalid authentication credentials. Expected OAuth 2 access token"))return!0;if((e=e.error)&&401==e.code&&("UNAUTHENTICATED"==e.status||"Invalid Credentials"==e.message))return!0}catch(e){}return!1}function imgURLToB64Str(e,t){var n=new XMLHttpRequest;n.open("GET","https://api.allorigins.win/raw?url="+encodeURIComponent(e),1),n.overrideMimeType("text/plain; charset=x-user-defined"),n.responseType="arraybuffer",n.onreadystatechange=function(){4==n.readyState&&(200!=n.status?(alert("status: "+n.status+"\nresp:"+n.response),t&&t(n.response||-1)):t&&t(!1,btoa(String.fromCharCode.apply(null,new Uint8Array(n.response)))))},n.send()}function attachIDtoB64(t,n,o,a){getAuthToken(function(e){attachIDtoB64_t(!0,e,t,n,o,a)})}function attachIDtoB64_t(e,t,n,o,a,r){var s=new XMLHttpRequest;s.open("POST","https://www.googleapis.com/voice/v1/voiceclient/attachments/get?alt=json&prettyPrint=false",1),s.setRequestHeader("Content-Type","application/json+protobuf"),s.setRequestHeader("Authorization","Bearer "+t),s.onreadystatechange=function(){4==s.readyState&&(e&&401==s.status&&resp401Unauth(s.response)?(wvWipeAuthToken(),getAuthToken(function(e){attachIDtoB64_t(!1,e,n,o,a,r)})):200!=s.status?(alert("status: "+s.status+"\nresp:"+s.response),r&&r(s.response||-1)):r&&(s=JSON.parse(s.response),r(!1,(s.imageContent||s.videoContent||s.audioContent||s.vcardContent).content.replace(/-/g,"+").replace(/_/g,"/"))))},s.send('["'+n+'",'+o+","+(2==a?"null,null,[1]]":1==a?"null,[1,[null,null,null,null,0,null,1]]]":"1]"))}function chkNewMsg(t,n){getAuthToken(function(e){chkNewMsg_t(!0,e,t,n)})}function chkNewMsg_t(e,t,n,o){var a=new XMLHttpRequest;a.open("POST","https://www.googleapis.com/voice/v1/voiceclient/api2thread/get",1),a.setRequestHeader("Content-Type","application/json+protobuf"),a.setRequestHeader("Authorization","Bearer "+t),a.onreadystatechange=function(){4==a.readyState&&(200!=a.status?(404!=a.status&&0!=a.status&&401!=a.status&&alert("status: "+a.status+"\nresp:"+a.response),o&&o(a.response||-1)):o&&o(!1,a.response))},a.send('["t.+1'+n+'",1]')}function getProxyNumWithSrc(t,n,o){getAuthToken(function(e){getProxyNumWithSrc_t(!0,e,t,n,o)})}function getProxyNumWithSrc_t(e,t,n,o,a){var r=new XMLHttpRequest;r.open("POST","https://www.googleapis.com/voice/v1/proxynumbers/reserve?alt=json&prettyPrint=false",1),r.setRequestHeader("Content-Type","application/json+protobuf"),r.setRequestHeader("Authorization","Bearer "+t),r.onreadystatechange=function(){4==r.readyState&&(e&&401==r.status&&resp401Unauth(r.response)?(wvWipeAuthToken(),getAuthToken(function(e){getProxyNumWithSrc_t(!1,e,n,o,a)})):200!=r.status?(alert("status: "+r.status+"\nresp:"+r.response),a&&a(r.response||-1)):a&&a(!1,JSON.parse(r.response)))},r.send('[[["phnnmbr","+1'+o+'"]],null,["phnnmbr","+1'+n+'"],null,0]')}function getContactName(t,n){getAuthToken(function(e){getContactName_t(!0,e,t,n)})}function getContactName_t(t,e,n,o){var a=new XMLHttpRequest;a.open("GET","https://content-people-pa.googleapis.com/v2/people/lookup?extension_set.extension_names=HANGOUTS_PHONE_DATA&extension_set.extension_names=CALLER_ID_LOOKUPS&merged_person_source_options.person_model_params.person_model=CONTACT_CENTRIC&id=%2B1"+n+"&match_type=LENIENT&type=PHONE&quota_filter_type=PHONE&request_mask.include_field.paths=person.name&request_mask.include_field.paths=person.website&alt=protojson",1),a.setRequestHeader("Authorization","Bearer "+e),a.onreadystatechange=function(){var e;4==a.readyState&&(t&&401==a.status&&resp401Unauth(a.response)?(wvWipeAuthToken(),getAuthToken(function(e){getContactName_t(!1,e,n,o)})):200!=a.status?(alert("status: "+a.status+"\nresp:"+a.response),o&&o(a.response||-1)):o&&(a="[]"==(a=a.response)?void 0:[(e=(a=JSON.parse(a))[1][0][1])[2][0][1],a[0][0][1][0],e[6]&&e[6][0][1],e[6]&&e[6][0][2]],o(!1,a)))},a.send()}crypto=window.crypto||window.msCrypto||{getRandomValues:function(e){for(var t=0,n=e.length;t<n;t++)e[t]=Math.floor(256*Math.random());return e}},window.sendsms_t=function(){var c,u,p,l;return function(e,t,n,o,a,r){n==c&&o==u&&a==p||(c=n,u=o,p=a,l=new Uint8Array(6),crypto.getRandomValues(l),l=parseInt(d(l),16).toString());var s,i=new XMLHttpRequest,t=(i.open("POST","https://www.googleapis.com/voice/v1/voiceclient/api2thread/sendsms?alt=protojson",1),i.setRequestHeader("Content-Type","application/json+protobuf; charset=UTF-8"),i.setRequestHeader("Authorization","Bearer "+t),"");if(a)if(/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(a)){if(!/^https:\/\/lh3\.googleusercontent\.com/.test(a))throw s="This IMG URL isn't from lh3.googleusercontent.com, GV will not accept it. Bad URL is\n\n"+a,alert(s),s;t=',[1,null,null,"'+a+'"]'}else t=',[1,"'+a+'",null,null]';i.onreadystatechange=function(){4==i.readyState&&(e&&401==i.status&&resp401Unauth(i.response)?(wvWipeAuthToken(),getAuthToken(function(e){sendsms_t(!1,e,n,o,a,r)})):200!=i.status?(alert("status: "+i.status+"\nresp:"+i.response),r&&r(i.response||-1)):r&&r(!1,JSON.parse(i.response)))},i.send("[null,null,null,null,"+JSON.stringify(o)+',null,["+1'+n+'"],null,['+l+"]"+t+"]")}}();