(function(t){function e(e){for(var r,s,a=e[0],c=e[1],u=e[2],l=0,f=[];l<a.length;l++)s=a[l],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&f.push(i[s][0]),i[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);p&&p(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var a=n[s];0!==i[a]&&(r=!1)}r&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},s={app:0},i={app:0},o=[];function a(t){return c.p+"js/"+({login:"login",register:"register","starship-card":"starship-card","starship-list":"starship-list"}[t]||t)+"."+{login:"73472552",register:"10afb14a","starship-card":"42ddfbb8","starship-list":"a19f0e29"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={login:1,register:1,"starship-card":1,"starship-list":1};s[t]?e.push(s[t]):0!==s[t]&&n[t]&&e.push(s[t]=new Promise((function(e,n){for(var r="css/"+({login:"login",register:"register","starship-card":"starship-card","starship-list":"starship-list"}[t]||t)+"."+{login:"baf425b4",register:"4756d13c","starship-card":"5c467af9","starship-list":"646d60a3"}[t]+".css",i=c.p+r,o=document.getElementsByTagName("link"),a=0;a<o.length;a++){var u=o[a],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===i))return e()}var f=document.getElementsByTagName("style");for(a=0;a<f.length;a++){u=f[a],l=u.getAttribute("data-href");if(l===r||l===i)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||i,o=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete s[t],p.parentNode.removeChild(p),n(o)},p.href=i;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){s[t]=0})));var r=i[t];if(0!==r)if(r)e.push(r[2]);else{var o=new Promise((function(e,n){r=i[t]=[e,n]}));e.push(r[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=a(t);var f=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(p);var n=i[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+r+": "+s+")",f.name="ChunkLoadError",f.type=r,f.request=s,n[1](f)}i[t]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/starship-directory/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var p=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"107c":function(t,e,n){"use strict";n("8ccd")},"25fb":function(t,e,n){"use strict";n("651b")},3881:function(t,e,n){t.exports=n.p+"img/home.69b3e0e7.jpg"},5526:function(t,e,n){"use strict";n("9400")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),s=n("cf05"),i=n.n(s),o={id:"app"},a={class:"header"},c={class:"header-top"},u=Object(r["g"])("div",{class:"logo"},[Object(r["g"])("img",{src:i.a,alt:""})],-1),l={key:0,class:"login-links"},f=Object(r["h"])("Log In"),p=Object(r["h"])("Sign Up"),d={key:1,class:"login-links"},h=Object(r["h"])("Log Out");function g(t,e,n,s,i,g){var b=Object(r["z"])("router-link"),j=Object(r["z"])("Navigation"),O=Object(r["z"])("router-view");return Object(r["s"])(),Object(r["f"])("div",o,[Object(r["g"])("div",a,[Object(r["g"])("div",c,[u,g.isLoggedIn?Object(r["e"])("",!0):(Object(r["s"])(),Object(r["f"])("div",l,[Object(r["i"])(b,{class:"login-link",to:"/Login"},{default:Object(r["F"])((function(){return[f]})),_:1}),Object(r["i"])(b,{class:"login-link",to:"/Register"},{default:Object(r["F"])((function(){return[p]})),_:1})])),g.isLoggedIn?(Object(r["s"])(),Object(r["f"])("div",d,[Object(r["i"])(b,{class:"login-link",to:"/",onClick:g.logOut},{default:Object(r["F"])((function(){return[h]})),_:1},8,["onClick"])])):Object(r["e"])("",!0)]),Object(r["i"])(j)]),Object(r["i"])(O)])}var b=n("f4dd"),j={components:{Navigation:b["a"]},computed:{isLoggedIn:function(){return this.$store.state.isLoggedIn}},methods:{logOut:function(){this.$store.commit("setLoggedIn",!1),console.log("You're logged out. See you soon!")}}},O=(n("107c"),n("6b0d")),m=n.n(O);const v=m()(j,[["render",g]]);var S=v,y=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),P=n("3881"),w=n.n(P),L=function(t){return Object(r["v"])("data-v-60b4a2fd"),t=t(),Object(r["t"])(),t},k={class:"container"},x=L((function(){return Object(r["g"])("h1",null,"Star Wars Starship Directory",-1)})),_=L((function(){return Object(r["g"])("img",{src:w.a,alt:""},null,-1)})),I={key:0,class:"info-text"},D=L((function(){return Object(r["g"])("p",null,[Object(r["h"])("Welcome to the Star Wars Starship Directory. "),Object(r["g"])("br"),Object(r["h"])(" Once you're logged in, you will find information about the characteristics of the starships of Star Wars, including its pilots and the films of the saga where they appear. ")],-1)})),E=[D],N={key:1,class:"info-text"},C=Object(r["h"])("View the Starship List");function F(t,e,n,s,i,o){var a=Object(r["z"])("router-link");return Object(r["s"])(),Object(r["f"])("div",k,[x,_,this.$store.state.isLoggedIn?(Object(r["s"])(),Object(r["f"])("div",N,[Object(r["i"])(a,{to:"/starships"},{default:Object(r["F"])((function(){return[C]})),_:1})])):(Object(r["s"])(),Object(r["f"])("div",I,E))])}var T={name:"Home",components:{Navigation:b["a"]}};n("25fb");const A=m()(T,[["render",F],["__scopeId","data-v-60b4a2fd"]]);var H=A,z=n("2909"),M=(n("99af"),n("d81d"),n("ac1f"),n("5319"),n("fb6a"),n("159b"),n("5502")),W=Object(M["a"])({state:{starships:[],selectedStarship:[],selectedPilots:[],pilotsData:[],nextPage:null,user:"",password:"",isLoggedIn:!1,selectedStarshipPilots:null,isFetching:null},getters:{starshipList:function(t){return t.starships},selectedStarshipInfo:function(t){return t.selectedStarship},currentStarshipPilots:function(t){return t.pilotsData},showPilots:function(t){if(void 0!=t.selectedStarship.pilots)return t.selectedStarship.pilots.length>0}},mutations:{setStarships:function(t,e){t.starships=e},setStarshipsNextPage:function(t,e){t.nextPage=e},setSelectedStarship:function(t,e){t.selectedStarship=e},addStarships:function(t,e){t.starships=[].concat(Object(z["a"])(t.starships),Object(z["a"])(e))},setUser:function(t,e){t.user=e},setPassword:function(t,e){t.password=e},setLoggedIn:function(t,e){t.isLoggedIn=e},setSelectedStarshipPilots:function(t,e){var n=e.map((function(t){return t.slice(-4).replace(/[^0-9]/g,"")}));t.selectedPilots=n},setSelectedPilotsData:function(t,e){t.pilotsData=[].concat(Object(z["a"])(t.pilotsData),[e])},clearPilotsData:function(t){t.pilotsData=[]},fetchingData:function(t,e){t.isFetching=e}},actions:{getStarships:function(t){var e=t.commit;fetch("https://swapi.py4e.com/api/starships/").then((function(t){return t.json()})).then((function(t){e("setStarships",t.results),e("setStarshipsNextPage",t.next)})).catch((function(t){console.log(t)}))},getMoreStarships:function(t){var e=t.commit;this.state.nextPage&&fetch(this.state.nextPage).then((function(t){return t.json()})).then((function(t){e("addStarships",t.results),e("setStarshipsNextPage",t.next)}))},getSelectedStarship:function(t,e){var n=t.commit,r=t.dispatch;n("fetchingData",!0),fetch("https://swapi.py4e.com/api/starships/".concat(e)).then((function(t){return t.json()})).then((function(t){n("setSelectedStarship",t),n("setSelectedStarshipPilots",t.pilots),r("getSelectedPilots")}))},getSelectedPilots:function(t){var e=t.commit;this.state.selectedPilots.length>0&&(e("clearPilotsData"),this.state.selectedPilots.forEach((function(t){fetch("https://swapi.py4e.com/api/people/".concat(t)).then((function(t){return t.json()})).then((function(n){n.id=t,e("setSelectedPilotsData",n)}))}))),e("fetchingData",!1)}}}),$=[{path:"/",name:"Home",component:H},{path:"/starships",name:"StarshipList",component:function(){return n.e("starship-list").then(n.bind(null,"7a2d"))},beforeEnter:function(t,e){if(!1===W.state.isLoggedIn)return{name:"Home"}}},{path:"/starships/:id",name:"StarshipCard",component:function(){return n.e("starship-card").then(n.bind(null,"0d4d"))},beforeEnter:function(t,e){if(!1===W.state.isLoggedIn)return{name:"Home"}}},{path:"/login",name:"Login",component:function(){return n.e("login").then(n.bind(null,"a55b"))}},{path:"/register",name:"Register",component:function(){return n.e("register").then(n.bind(null,"73cf"))}}],B=Object(y["a"])({history:Object(y["b"])("/starship-directory/"),routes:$}),U=B;Object(r["c"])(S).use(W).use(U).mount("#app")},"651b":function(t,e,n){},"8ccd":function(t,e,n){},9400:function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.c1d3f948.png"},f4dd:function(t,e,n){"use strict";var r=n("7a23"),s={class:"navigation"},i=Object(r["h"])("Home"),o={key:0},a=Object(r["h"])("Starships");function c(t,e,n,c,u,l){var f=Object(r["z"])("router-link");return Object(r["s"])(),Object(r["f"])("div",null,[Object(r["g"])("ul",s,[Object(r["g"])("li",null,[Object(r["i"])(f,{to:"/"},{default:Object(r["F"])((function(){return[i]})),_:1})]),this.$store.state.isLoggedIn?(Object(r["s"])(),Object(r["f"])("li",o,[Object(r["i"])(f,{to:"/starships"},{default:Object(r["F"])((function(){return[a]})),_:1})])):Object(r["e"])("",!0)])])}var u={name:"Navigation"},l=(n("5526"),n("6b0d")),f=n.n(l);const p=f()(u,[["render",c],["__scopeId","data-v-11038ce1"]]);e["a"]=p}});
//# sourceMappingURL=app.17c5af7a.js.map