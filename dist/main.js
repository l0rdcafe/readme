!function(e){var n=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,n){if(!w[e]||!_[e])return;for(var t in _[e]=!1,n)Object.prototype.hasOwnProperty.call(n,t)&&(h[t]=n[t]);0==--m&&0===v&&S()}(e,t),n&&n(e,t)};var t,r=!0,o="ebbd4ddd9ec0eb47beed",i=1e4,a={},c=[],s=[];function l(e){var n=D[e];if(!n)return A;var r=function(r){return n.hot.active?(D[r]?-1===D[r].parents.indexOf(e)&&D[r].parents.push(e):(c=[e],t=r),-1===n.children.indexOf(r)&&n.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),c=[]),A(r)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return A[e]},set:function(n){A[e]=n}}};for(var i in A)Object.prototype.hasOwnProperty.call(A,i)&&"e"!==i&&Object.defineProperty(r,i,o(i));return r.e=function(e){return"ready"===u&&p("prepare"),v++,A.e(e).then(n,function(e){throw n(),e});function n(){v--,"prepare"===u&&(g[e]||O(e),0===v&&0===m&&S())}},r}var d=[],u="idle";function p(e){u=e;for(var n=0;n<d.length;n++)d[n].call(null,e)}var f,h,y,m=0,v=0,g={},_={},w={};function b(e){return+e+""===e?+e:e}function E(e){if("idle"!==u)throw new Error("check() is only allowed in idle status");return r=e,p("check"),(n=i,n=n||1e4,new Promise(function(e,t){if("undefined"==typeof XMLHttpRequest)return t(new Error("No browser support"));try{var r=new XMLHttpRequest,i=A.p+""+o+".hot-update.json";r.open("GET",i,!0),r.timeout=n,r.send(null)}catch(e){return t(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)t(new Error("Manifest request to "+i+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)t(new Error("Manifest request to "+i+" failed."));else{try{var n=JSON.parse(r.responseText)}catch(e){return void t(e)}e(n)}}})).then(function(e){if(!e)return p("idle"),null;_={},g={},w=e.c,y=e.h,p("prepare");var n=new Promise(function(e,n){f={resolve:e,reject:n}});h={};return O(0),"prepare"===u&&0===v&&0===m&&S(),n});var n}function O(e){w[e]?(_[e]=!0,m++,function(e){var n=document.getElementsByTagName("head")[0],t=document.createElement("script");t.charset="utf-8",t.src=A.p+""+e+"."+o+".hot-update.js",n.appendChild(t)}(e)):g[e]=!0}function S(){p("ready");var e=f;if(f=null,e)if(r)Promise.resolve().then(function(){return I(r)}).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var t in h)Object.prototype.hasOwnProperty.call(h,t)&&n.push(b(t));e.resolve(n)}}function I(n){if("ready"!==u)throw new Error("apply() is only allowed in ready status");var t,r,i,s,l;function d(e){for(var n=[e],t={},r=n.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),i=o.id,a=o.chain;if((s=D[i])&&!s.hot._selfAccepted){if(s.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:i};if(s.hot._main)return{type:"unaccepted",chain:a,moduleId:i};for(var c=0;c<s.parents.length;c++){var l=s.parents[c],d=D[l];if(d){if(d.hot._declinedDependencies[i])return{type:"declined",chain:a.concat([l]),moduleId:i,parentId:l};-1===n.indexOf(l)&&(d.hot._acceptedDependencies[i]?(t[l]||(t[l]=[]),f(t[l],[i])):(delete t[l],n.push(l),r.push({chain:a.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:t}}function f(e,n){for(var t=0;t<n.length;t++){var r=n[t];-1===e.indexOf(r)&&e.push(r)}}n=n||{};var m={},v=[],g={},_=function(){console.warn("[HMR] unexpected require("+O.moduleId+") to disposed module")};for(var E in h)if(Object.prototype.hasOwnProperty.call(h,E)){var O;l=b(E);var S=!1,I=!1,H=!1,x="";switch((O=h[E]?d(l):{type:"disposed",moduleId:E}).chain&&(x="\nUpdate propagation: "+O.chain.join(" -> ")),O.type){case"self-declined":n.onDeclined&&n.onDeclined(O),n.ignoreDeclined||(S=new Error("Aborted because of self decline: "+O.moduleId+x));break;case"declined":n.onDeclined&&n.onDeclined(O),n.ignoreDeclined||(S=new Error("Aborted because of declined dependency: "+O.moduleId+" in "+O.parentId+x));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(O),n.ignoreUnaccepted||(S=new Error("Aborted because "+l+" is not accepted"+x));break;case"accepted":n.onAccepted&&n.onAccepted(O),I=!0;break;case"disposed":n.onDisposed&&n.onDisposed(O),H=!0;break;default:throw new Error("Unexception type "+O.type)}if(S)return p("abort"),Promise.reject(S);if(I)for(l in g[l]=h[l],f(v,O.outdatedModules),O.outdatedDependencies)Object.prototype.hasOwnProperty.call(O.outdatedDependencies,l)&&(m[l]||(m[l]=[]),f(m[l],O.outdatedDependencies[l]));H&&(f(v,[O.moduleId]),g[l]=_)}var C,M=[];for(r=0;r<v.length;r++)l=v[r],D[l]&&D[l].hot._selfAccepted&&M.push({module:l,errorHandler:D[l].hot._selfAccepted});p("dispose"),Object.keys(w).forEach(function(e){!1===w[e]&&function(e){delete installedChunks[e]}(e)});for(var N,j,P=v.slice();P.length>0;)if(l=P.pop(),s=D[l]){var k={},q=s.hot._disposeHandlers;for(i=0;i<q.length;i++)(t=q[i])(k);for(a[l]=k,s.hot.active=!1,delete D[l],delete m[l],i=0;i<s.children.length;i++){var T=D[s.children[i]];T&&((C=T.parents.indexOf(l))>=0&&T.parents.splice(C,1))}}for(l in m)if(Object.prototype.hasOwnProperty.call(m,l)&&(s=D[l]))for(j=m[l],i=0;i<j.length;i++)N=j[i],(C=s.children.indexOf(N))>=0&&s.children.splice(C,1);for(l in p("apply"),o=y,g)Object.prototype.hasOwnProperty.call(g,l)&&(e[l]=g[l]);var U=null;for(l in m)if(Object.prototype.hasOwnProperty.call(m,l)&&(s=D[l])){j=m[l];var L=[];for(r=0;r<j.length;r++)if(N=j[r],t=s.hot._acceptedDependencies[N]){if(-1!==L.indexOf(t))continue;L.push(t)}for(r=0;r<L.length;r++){t=L[r];try{t(j)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:l,dependencyId:j[r],error:e}),n.ignoreErrored||U||(U=e)}}}for(r=0;r<M.length;r++){var K=M[r];l=K.module,c=[l];try{A(l)}catch(e){if("function"==typeof K.errorHandler)try{K.errorHandler(e)}catch(t){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:l,error:t,originalError:e}),n.ignoreErrored||U||(U=t),U||(U=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:l,error:e}),n.ignoreErrored||U||(U=e)}}return U?(p("fail"),Promise.reject(U)):(p("idle"),new Promise(function(e){e(v)}))}var D={};function A(n){if(D[n])return D[n].exports;var r=D[n]={i:n,l:!1,exports:{},hot:function(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:t!==e,active:!0,accept:function(e,t){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._acceptedDependencies[e[r]]=t||function(){};else n._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._declinedDependencies[e[t]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=n._disposeHandlers.indexOf(e);t>=0&&n._disposeHandlers.splice(t,1)},check:E,apply:I,status:function(e){if(!e)return u;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var n=d.indexOf(e);n>=0&&d.splice(n,1)},data:a[e]};return t=void 0,n}(n),parents:(s=c,c=[],s),children:[]};return e[n].call(r.exports,r,r.exports,l(n)),r.l=!0,r.exports}A.m=e,A.c=D,A.d=function(e,n,t){A.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:t})},A.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},A.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return A.d(n,"a",n),n},A.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},A.p="",A.h=function(){return o},l(4)(A.s=4)}([function(e,n,t){"use strict";t.r(n);var r={qs:function(e,n){return(n||document).querySelector(e)},qsa:function(e,n){return(n||document).querySelectorAll(e)},$on:function(e,n,t,r){e.addEventListener(n,t,!!r)},newEl:function(e){return document.createElement(e)},getJSON:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return fetch(e,n).then(function(e){return e.json()}).catch(function(e){return console.error(e)})}},o=function(){var e=r.newEl("button"),n=r.qs(".footer");return e.textContent="Sign In",e.className="button x-centered info",n.parentNode.insertBefore(e,n),e},i=function(e){var n=r.qs(".section"),t=function(e){var n=e.user,t=e.playing.isPlaying,o=r.newEl("h4");if(o.className="title",t){var i=e.playing,a=i.song,c=i.artist;o.innerHTML='Welcome, <span class="title__user">'+n+'.</span> You are currently listening to <span class="title__item">'+a+'</span> by <span class="title__item">'+c+"</span>"}else o.innerHTML="You are currently not playing anything. Please play a song on your Spotify.";return o}(e),o=r.qs(".footer");n.innerHTML="",o.style.position="absolute",n.appendChild(t)},a=function(e){var n,t=r.qs(".section"),o=r.newEl("div");o.className="annot",o.insertAdjacentHTML("beforeend",""+e),(n=r.qs(".fa-spinner")).parentNode.removeChild(n),t.appendChild(o);var i=window.innerHeight-document.body.scrollHeight,a=r.qs(".footer");a.style.position=i<125?"static":"absolute"},c=function(e){var n=r.qs(".section"),t=r.newEl("div");t.className="link",t.insertAdjacentHTML("beforeend",""+e),n.appendChild(t)},s=function(){var e=r.newEl("i"),n=r.qs(".section");e.className="fas fa-spinner fa-spin x-centered fa-lg",n.appendChild(e)},l=function(e){var n=r.newEl("ol"),t=r.qs(".title");n.className="stats",[e.key,e.duration,e.tempo,e.danceability].forEach(function(e){var t=/:/.test(e),o=/^([A-Z]+[#]*)/.test(e),i=/^([a-z]+)$/.test(e),a=r.newEl("li");a.className="stats__item",a.innerHTML=t?'Duration: <span class="stats__item__text">'+e+"</span>":o?'Key: <span class="stats__item__text">'+e+"</span>":i?'Danceability: <div class="'+e+' dance"></div>':'Tempo: <span class="stats__item__text">'+e+" BPM</span>",n.appendChild(a)}),t.parentNode.insertBefore(n,t.nextSibling)},d=function(e){var n=r.getJSON("https://api.spotify.com/v1/me",e),t=r.getJSON("https://api.spotify.com/v1/me/player/currently-playing",e);return Promise.all([n,t])},u=function(e,n){var t="https://api.spotify.com/v1/audio-features/"+e;return r.getJSON(t,n)},p=function(){var e="https://accounts.spotify.com/authorize?client_id=f8df77a3e85c4e49b6e702e8be74f262&response_type=token&scope="+encodeURIComponent("user-read-currently-playing user-read-recently-played")+"&redirect_uri="+encodeURIComponent("https://l0rdcafe.github.io/readme")+"&show_dialog=true";window.location=e},f=function(){var e=/[#&]access_token=([^&]*)/.exec(window.location.hash),n=decodeURIComponent(e[1].replace(/\+g/," "));return window.location.hash="",n},h=function(){return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,n){var t=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&c.return&&c.return()}finally{if(o)throw i}}return t}(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),y={user:"",playing:{},userID:""},m={state:y,setUserInfo:function(e){y.user="",y.playing={},y.userID="";var n=function(e){var n,t,r,o=e[0].display_name,i=e[0].id,a=e[1].is_playing,c=e[1].item.artists[0].name;return[o,i,a,e[1].item.name,c,(n=e[1].item.duration_ms,t=Math.floor(n/6e4),r=(n%6e4/1e3).toFixed(0),t+":"+(r<10?"0":"")+r)]}(e),t=h(n,6),r=t[0],o=t[1],i=t[2],a=t[3],c=t[4],s=t[5];i?y.playing={song:a,artist:c,duration:s,isPlaying:!0}:y.playing.isPlaying=!1,y.user=r,y.userID=o},setSongInfo:function(e){y.playing.annotationHTML=e.song.description.html},setSongStats:function(e){var n=function(n){var t={0:"C",1:"C# / Db",2:"D",3:"D# / Eb",4:"E",5:"F",6:"F# / Gb",7:"G",8:"G# / Ab",9:"A",10:"A# / Bb",11:"B"}[e.key];return[Math.floor(n.tempo),t,function(e){var n=void 0,t=e.toFixed(2);return t<=.25?n="info":t<=.5?n="primary":t<=.75?n="warning":t<=1&&(n="error"),n}(e.danceability)]}(e),t=h(n,3),r=t[0],o=t[1],i=t[2];y.playing.tempo=r,y.playing.key=o,y.playing.danceability=i}},v=function(e,n){return function(e){var n=e.playing,t=n.song,o=n.artist,i="https://api.genius.com/search?q="+decodeURIComponent(o+" "+t)+"&client_id=ctokZwUfFN3tRZvAF3508DuFP96uTHbzrUzO1qRr1afr_uHooGGpQpYyyPtctNXz&client_secret=kHUtzfUEv40H27yPcM47aSyilIFmKEh7CRwKmsQs9u_l4gusJ9SqN4qAv8VK1pOYxFwPlrrXsteVa8JEEHWoxw&access_token=EGD5O9WVYIyagmEQBfAgmp-WAt7VcMjME59wm4pM7BZ2fzwrii1vAIfOKZ31WK_0";return r.getJSON(i)}(e).then(function(t){var o=t.response;if(o.hits.length>0&&e.playing.artist.toLowerCase()===o.hits[0].result.primary_artist.name.toLowerCase()){var i="https://api.genius.com/songs/"+o.hits[0].result.id+"?access_token=EGD5O9WVYIyagmEQBfAgmp-WAt7VcMjME59wm4pM7BZ2fzwrii1vAIfOKZ31WK_0&text_format=html";return r.getJSON(i)}return n("No annotations found.")}).catch(function(e){return console.error(e)})},g=function(){localStorage.getItem("ACCESS_TOKEN")&&localStorage.removeItem("ACCESS_TOKEN");var e=o();r.$on(e,"click",p)},_=function(e){var n={headers:{Authorization:"Bearer "+e}};d(n).then(function(e){if(e[0].error)g();else if(m.state.playing==={}||m.state.playing.song!==e[1].item.name){if(m.setUserInfo(e),e[1].is_playing){var t=e[1].item.id;u(t,n).then(function(e){m.setSongStats(e),l(m.state.playing)}).catch(function(e){return console.error(e)}),v(m.state,a).then(function(e){if(e){var n=e.response.song.embed_content;if("<p>?</p>"!==e.response.song.description.html){m.setSongInfo(e.response);var t=m.state.playing.annotationHTML;a(t),c(n)}else a("No annotations found."),c(n)}}).catch(function(e){return console.error(e)})}i(m.state),s()}}).catch(function(e){return console.error(e)})},w=function(e){setInterval(function(){_(e)},5e3)};r.$on(document,"DOMContentLoaded",function(){var e=/[#&]access_token=([^&]*)/.test(window.location.hash),n=localStorage.getItem("ACCESS_TOKEN");if(e){var t=f();localStorage.setItem("ACCESS_TOKEN",""+t),w(t)}else if(n){var r=localStorage.getItem("ACCESS_TOKEN");w(r)}else g()})},,,function(e,n,t){},function(e,n,t){t(0),e.exports=t(3)}]);
//# sourceMappingURL=main.js.map