!function(e){var n=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,n){if(!_[e]||!w[e])return;for(var t in w[e]=!1,n)Object.prototype.hasOwnProperty.call(n,t)&&(h[t]=n[t]);0==--m&&0===v&&S()}(e,t),n&&n(e,t)};var t,r=!0,o="470c1bd0a31219ae533a",a=1e4,i={},s=[],c=[];function l(e){var n=I[e];if(!n)return D;var r=function(r){return n.hot.active?(I[r]?-1===I[r].parents.indexOf(e)&&I[r].parents.push(e):(s=[e],t=r),-1===n.children.indexOf(r)&&n.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),s=[]),D(r)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return D[e]},set:function(n){D[e]=n}}};for(var a in D)Object.prototype.hasOwnProperty.call(D,a)&&"e"!==a&&Object.defineProperty(r,a,o(a));return r.e=function(e){return"ready"===u&&p("prepare"),v++,D.e(e).then(n,function(e){throw n(),e});function n(){v--,"prepare"===u&&(g[e]||O(e),0===v&&0===m&&S())}},r}var d=[],u="idle";function p(e){u=e;for(var n=0;n<d.length;n++)d[n].call(null,e)}var f,h,y,m=0,v=0,g={},w={},_={};function b(e){return+e+""===e?+e:e}function E(e){if("idle"!==u)throw new Error("check() is only allowed in idle status");return r=e,p("check"),(n=a,n=n||1e4,new Promise(function(e,t){if("undefined"==typeof XMLHttpRequest)return t(new Error("No browser support"));try{var r=new XMLHttpRequest,a=D.p+""+o+".hot-update.json";r.open("GET",a,!0),r.timeout=n,r.send(null)}catch(e){return t(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)t(new Error("Manifest request to "+a+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)t(new Error("Manifest request to "+a+" failed."));else{try{var n=JSON.parse(r.responseText)}catch(e){return void t(e)}e(n)}}})).then(function(e){if(!e)return p("idle"),null;w={},g={},_=e.c,y=e.h,p("prepare");var n=new Promise(function(e,n){f={resolve:e,reject:n}});h={};return O(0),"prepare"===u&&0===v&&0===m&&S(),n});var n}function O(e){_[e]?(w[e]=!0,m++,function(e){var n=document.getElementsByTagName("head")[0],t=document.createElement("script");t.charset="utf-8",t.src=D.p+""+e+"."+o+".hot-update.js",n.appendChild(t)}(e)):g[e]=!0}function S(){p("ready");var e=f;if(f=null,e)if(r)Promise.resolve().then(function(){return H(r)}).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var t in h)Object.prototype.hasOwnProperty.call(h,t)&&n.push(b(t));e.resolve(n)}}function H(n){if("ready"!==u)throw new Error("apply() is only allowed in ready status");var t,r,a,c,l;function d(e){for(var n=[e],t={},r=n.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),a=o.id,i=o.chain;if((c=I[a])&&!c.hot._selfAccepted){if(c.hot._selfDeclined)return{type:"self-declined",chain:i,moduleId:a};if(c.hot._main)return{type:"unaccepted",chain:i,moduleId:a};for(var s=0;s<c.parents.length;s++){var l=c.parents[s],d=I[l];if(d){if(d.hot._declinedDependencies[a])return{type:"declined",chain:i.concat([l]),moduleId:a,parentId:l};-1===n.indexOf(l)&&(d.hot._acceptedDependencies[a]?(t[l]||(t[l]=[]),f(t[l],[a])):(delete t[l],n.push(l),r.push({chain:i.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:t}}function f(e,n){for(var t=0;t<n.length;t++){var r=n[t];-1===e.indexOf(r)&&e.push(r)}}n=n||{};var m={},v=[],g={},w=function(){console.warn("[HMR] unexpected require("+O.moduleId+") to disposed module")};for(var E in h)if(Object.prototype.hasOwnProperty.call(h,E)){var O;l=b(E);var S=!1,H=!1,x=!1,C="";switch((O=h[E]?d(l):{type:"disposed",moduleId:E}).chain&&(C="\nUpdate propagation: "+O.chain.join(" -> ")),O.type){case"self-declined":n.onDeclined&&n.onDeclined(O),n.ignoreDeclined||(S=new Error("Aborted because of self decline: "+O.moduleId+C));break;case"declined":n.onDeclined&&n.onDeclined(O),n.ignoreDeclined||(S=new Error("Aborted because of declined dependency: "+O.moduleId+" in "+O.parentId+C));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(O),n.ignoreUnaccepted||(S=new Error("Aborted because "+l+" is not accepted"+C));break;case"accepted":n.onAccepted&&n.onAccepted(O),H=!0;break;case"disposed":n.onDisposed&&n.onDisposed(O),x=!0;break;default:throw new Error("Unexception type "+O.type)}if(S)return p("abort"),Promise.reject(S);if(H)for(l in g[l]=h[l],f(v,O.outdatedModules),O.outdatedDependencies)Object.prototype.hasOwnProperty.call(O.outdatedDependencies,l)&&(m[l]||(m[l]=[]),f(m[l],O.outdatedDependencies[l]));x&&(f(v,[O.moduleId]),g[l]=w)}var N,M=[];for(r=0;r<v.length;r++)l=v[r],I[l]&&I[l].hot._selfAccepted&&M.push({module:l,errorHandler:I[l].hot._selfAccepted});p("dispose"),Object.keys(_).forEach(function(e){!1===_[e]&&function(e){delete installedChunks[e]}(e)});for(var A,P,q=v.slice();q.length>0;)if(l=q.pop(),c=I[l]){var j={},k=c.hot._disposeHandlers;for(a=0;a<k.length;a++)(t=k[a])(j);for(i[l]=j,c.hot.active=!1,delete I[l],delete m[l],a=0;a<c.children.length;a++){var T=I[c.children[a]];T&&((N=T.parents.indexOf(l))>=0&&T.parents.splice(N,1))}}for(l in m)if(Object.prototype.hasOwnProperty.call(m,l)&&(c=I[l]))for(P=m[l],a=0;a<P.length;a++)A=P[a],(N=c.children.indexOf(A))>=0&&c.children.splice(N,1);for(l in p("apply"),o=y,g)Object.prototype.hasOwnProperty.call(g,l)&&(e[l]=g[l]);var L=null;for(l in m)if(Object.prototype.hasOwnProperty.call(m,l)&&(c=I[l])){P=m[l];var U=[];for(r=0;r<P.length;r++)if(A=P[r],t=c.hot._acceptedDependencies[A]){if(-1!==U.indexOf(t))continue;U.push(t)}for(r=0;r<U.length;r++){t=U[r];try{t(P)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:l,dependencyId:P[r],error:e}),n.ignoreErrored||L||(L=e)}}}for(r=0;r<M.length;r++){var R=M[r];l=R.module,s=[l];try{D(l)}catch(e){if("function"==typeof R.errorHandler)try{R.errorHandler(e)}catch(t){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:l,error:t,originalError:e}),n.ignoreErrored||L||(L=t),L||(L=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:l,error:e}),n.ignoreErrored||L||(L=e)}}return L?(p("fail"),Promise.reject(L)):(p("idle"),new Promise(function(e){e(v)}))}var I={};function D(n){if(I[n])return I[n].exports;var r=I[n]={i:n,l:!1,exports:{},hot:function(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:t!==e,active:!0,accept:function(e,t){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._acceptedDependencies[e[r]]=t||function(){};else n._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._declinedDependencies[e[t]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=n._disposeHandlers.indexOf(e);t>=0&&n._disposeHandlers.splice(t,1)},check:E,apply:H,status:function(e){if(!e)return u;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var n=d.indexOf(e);n>=0&&d.splice(n,1)},data:i[e]};return t=void 0,n}(n),parents:(c=s,s=[],c),children:[]};return e[n].call(r.exports,r,r.exports,l(n)),r.l=!0,r.exports}D.m=e,D.c=I,D.d=function(e,n,t){D.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:t})},D.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},D.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return D.d(n,"a",n),n},D.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},D.p="",D.h=function(){return o},l(4)(D.s=4)}([function(e,n,t){"use strict";t.r(n);var r={qs:function(e,n){return(n||document).querySelector(e)},qsa:function(e,n){return(n||document).querySelectorAll(e)},$on:function(e,n,t,r){e.addEventListener(n,t,!!r)},newEl:function(e){return document.createElement(e)},getJSON:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return fetch(e,n).then(function(e){return e.json()}).catch(function(e){throw e})}},o=function(){var e=function(){var e=r.newEl("button");return e.textContent="Sign In",e.className="button x-centered info",e}(),n=r.qs(".section"),t=r.newEl("h4");return t.className="title",t.innerHTML="Sign in with your Spotify account to get annotations about your currently playing track.",n.appendChild(t),n.appendChild(e),e},a=function(e){var n=r.qs(".section"),t=function(e){var n=e.user,t=e.playing.isPlaying,o=r.newEl("h4");if(o.className="title",t)if(null===n){var a=e.playing,i=a.song,s=a.artist;o.innerHTML='Welcome. You are currently listening to <span class="title__item">'+i+'</span> by <span class="title__item">'+s+"</span>"}else{var c=e.playing,l=c.song,d=c.artist;o.innerHTML='Welcome, <span class="title__user">'+n+'.</span> You are currently listening to <span class="title__item">'+l+'</span> by <span class="title__item">'+d+"</span>"}else o.innerHTML="You are currently not playing anything. Please play a song on your Spotify.";return o}(e),o=r.qs(".footer");n.innerHTML="",o.style.position="absolute",n.appendChild(t)},i=function(e){var n,t=r.qs(".section"),o=r.newEl("div");o.className="annot",o.insertAdjacentHTML("beforeend",""+e),(n=r.qs(".fa-spinner")).parentNode.removeChild(n),t.appendChild(o);var a=window.innerHeight-document.body.scrollHeight,i=r.qs(".footer");i.style.position=a<120?"static":"absolute"},s=function(e){var n=r.qs(".section"),t=r.newEl("div");t.className="link",t.insertAdjacentHTML("beforeend",""+e),n.appendChild(t)},c=function(){var e=r.newEl("i"),n=r.qs(".section");e.className="fas fa-spinner fa-spin x-centered fa-lg",n.appendChild(e)},l=function(e){var n=r.newEl("ol"),t=r.qs(".title");n.className="stats";var o=r.newEl("li"),a=r.newEl("li"),i=r.newEl("li"),s=r.newEl("li");o.className="stats__item",a.className="stats__item",i.className="stats__item",s.className="stats__item",o.innerHTML='Key: <span class="stats__item__text">'+e.key+"</span>",a.innerHTML='Tempo: <span class="stats__item__text">'+e.tempo+" BPM</span>",i.innerHTML='Duration: <span class="stats__item__text">'+e.duration+"</span>",s.innerHTML='Danceability: <div class="'+e.danceability+' dance"></div>',n.appendChild(o),n.appendChild(i),n.appendChild(a),n.appendChild(s),t.parentNode.insertBefore(n,t.nextSibling)},d=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"error",t=r.newEl("div"),o=r.qs(".section");t.innerHTML=e,t.className="notif animated fadeInDown text-c "+n,o.parentNode.insertBefore(t,o.nextSibling);var a=r.qs(".notif");setTimeout(function(){a.classList.remove("fadeInDown"),a.classList.add("fadeOutUp")},2500)},u=function(){for(var e=r.qsa(".notif"),n=0;n<e.length;n+=1)e[n].parentNode.removeChild(e[n])},p=function(){var e=r.qs(".bg1"),n=r.qs(".bg2");e.parentNode.removeChild(e),n.parentNode.removeChild(n)},f=function(e){var n=r.getJSON("https://api.spotify.com/v1/me",e),t=r.getJSON("https://api.spotify.com/v1/me/player/currently-playing",e);function o(e){if(e[0].error)return{error:!0};if(429===e[0].status)return{message:"Sorry, you have exceeded the request limit. Please try again later.",status:429};var n,t,r,o=e[0].display_name,a=e[1].item.id,i=e[1].is_playing,s=e[1].item.artists[0].name;return{data:[o,a,i,e[1].item.name,s,(n=e[1].item.duration_ms,t=Math.floor(n/6e4),r=(n%6e4/1e3).toFixed(0),t+":"+(r<10?"0":"")+r)]}}return Promise.all([n,t]).then(function(e){return o(e)})},h=function(e,n){var t="https://api.spotify.com/v1/audio-features/"+e;return r.getJSON(t,n).then(function(e){return a={0:"C",1:"C# / Db",2:"D",3:"D# / Eb",4:"E",5:"F",6:"F# / Gb",7:"G",8:"G# / Ab",9:"A",10:"A# / Bb",11:"B"}[(o=e).key],[Math.floor(o.tempo),a,(n=o.danceability,t=void 0,r=n.toFixed(2),r<=.25?t="info":r<=.5?t="primary":r<=.75?t="warning":r<=1&&(t="error"),t)];var n,t,r,o,a})},y=function(){var e="https://accounts.spotify.com/authorize?client_id=f8df77a3e85c4e49b6e702e8be74f262&response_type=token&scope="+encodeURIComponent("user-read-currently-playing user-read-recently-played")+"&redirect_uri="+encodeURIComponent("https://l0rdcafe.github.io/readme")+"&show_dialog=true";window.location=e},m=function(){var e=/[#&]access_token=([^&]*)/.exec(window.location.hash),n=decodeURIComponent(e[1].replace(/\+g/," "));return window.location.hash="",n},v=function(){return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,n){var t=[],r=!0,o=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(t.push(i.value),!n||t.length!==n);r=!0);}catch(e){o=!0,a=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw a}}return t}(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),g={user:"",playing:{},userID:""},w={state:g,setUserInfo:function(e){var n=v(e,6),t=n[0],r=n[1],o=n[2],a=n[3],i=n[4],s=n[5];g.user="",g.playing={},g.userID="",o?g.playing={song:a,artist:i,duration:s,isPlaying:!0}:g.playing.isPlaying=!1,g.user=t,g.userID=r},setSongInfo:function(e){g.playing.annotationHTML=e},setSongStats:function(e){var n=v(e,3),t=n[0],r=n[1],o=n[2];g.playing.tempo=t,g.playing.key=r,g.playing.danceability=o}},_=function(e){return function(e){var n=e.playing,t=n.song,o=n.artist,a="https://api.genius.com/search?q="+decodeURIComponent(o+" "+t)+"&client_id=ctokZwUfFN3tRZvAF3508DuFP96uTHbzrUzO1qRr1afr_uHooGGpQpYyyPtctNXz&client_secret=kHUtzfUEv40H27yPcM47aSyilIFmKEh7CRwKmsQs9u_l4gusJ9SqN4qAv8VK1pOYxFwPlrrXsteVa8JEEHWoxw&access_token=EGD5O9WVYIyagmEQBfAgmp-WAt7VcMjME59wm4pM7BZ2fzwrii1vAIfOKZ31WK_0";return r.getJSON(a)}(e).then(function(n){var t=n.response;function o(e){return""!==e.response.song.embed_content}if(t.hits.length>0){var a=e.playing.artist.toLowerCase()===t.hits[0].result.primary_artist.name.toLowerCase(),i=e.playing.song.toLowerCase()===t.hits[0].result.title.toLowerCase();if(a&&i){var s="https://api.genius.com/songs/"+t.hits[0].result.id+"?access_token=EGD5O9WVYIyagmEQBfAgmp-WAt7VcMjME59wm4pM7BZ2fzwrii1vAIfOKZ31WK_0&text_format=html";return r.getJSON(s).then(function(e){return"<p>?</p>"!==e.response.song.description.html&&o(e)?{annot:e.response.song.description.html,embed:e.response.song.embed_content}:o(e)?{embed:e.response.song.embed_content,annot:"No annotations found."}:{error:!0,embed:"No lyrics available."}})}}return{error:!0,embed:"No lyrics available."}}).catch(function(e){throw e})},b=function(){localStorage.getItem("ACCESS_TOKEN")&&localStorage.removeItem("ACCESS_TOKEN"),r.qs(".section").innerHTML="";var e=o();r.$on(e,"click",y)},E=function(e){var n={headers:{Authorization:"Bearer "+e}};u(),f(n).then(function(e){if(e.error)b();else if(429===e.status)Raven.captureException(new Error(e.message)),d(e.message);else if(w.state.playing.song!==e.data[3]){var t=e.data;w.setUserInfo(t);var r=t[2],o=t[1];r&&(h(o,n).then(function(e){w.setSongStats(e),l(w.state.playing)}).catch(function(e){throw e}),_(w.state).then(function(e){if(e.error){var n=e.embed;i("No annotations found."),s(n)}else{w.setSongInfo(e.annot);var t=w.state.playing.annotationHTML;i(t),s(e.embed)}}).catch(function(e){Raven.captureException(e),d("Sorry there's a network error. Please try again later.")})),a(w.state),p(),c()}}).catch(function(e){Raven.captureException(e),d("Sorry there's a network error. Please try again later.")})},O=function(e){setInterval(function(){E(e)},5e3)};r.$on(document,"DOMContentLoaded",function(){var e=/[#&]access_token=([^&]*)/.test(window.location.hash),n=localStorage.getItem("ACCESS_TOKEN");if(c(),e){var t=m();localStorage.setItem("ACCESS_TOKEN",""+t),O(t)}else if(n){var r=localStorage.getItem("ACCESS_TOKEN");O(r)}else b()})},,,function(e,n,t){},function(e,n,t){t(0),e.exports=t(3)}]);
//# sourceMappingURL=main.js.map