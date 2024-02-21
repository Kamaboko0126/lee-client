(function(){"use strict";var e={3632:function(e,t,n){var o=n(9242),i=n(3396);function r(e,t,n,o,r,a){const c=(0,i.up)("loader-item"),l=(0,i.up)("header-item"),s=(0,i.up)("left-item"),u=(0,i.up)("router-view"),d=(0,i.up)("footer-item");return(0,i.wg)(),(0,i.iD)(i.HY,null,[o.isLoading?((0,i.wg)(),(0,i.j4)(c,{key:0})):(0,i.kq)("",!0),(0,i.Wm)(l),(0,i.Wm)(s),(0,i.Wm)(u),(0,i.Wm)(d)],64)}var a=n(4870),c=n(7139);const l=e=>((0,i.dD)("data-v-b7e530ca"),e=e(),(0,i.Cn)(),e),s=["disabled"],u=l((()=>(0,i._)("div",{class:"header-left"},[(0,i._)("span",null,"FLOATING"),(0,i._)("span",null,"FANTASY")],-1))),d={class:"header-right"},f=l((()=>(0,i._)("div",{class:"top"},[(0,i._)("div",{class:"logo"},[(0,i._)("p",null,"FLOATING FANTASY"),(0,i._)("p",null,"FLOATING FANTASY"),(0,i._)("p",null,"- Eastern Gouache art of Lee Chen-huei -")])],-1))),m={class:"bottom"};function v(e,t,n,o,r,a){const l=(0,i.up)("menu-item");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("button",{disabled:o.isAnimating,onClick:t[0]||(t[0]=(...e)=>o.clickMenu&&o.clickMenu(...e))},[(0,i._)("i",{class:"material-icons",style:(0,c.j5)({color:o.isOpened?"#fff":"#3e3a39"})},(0,c.zw)(o.icon),5)],8,s),o.isFirstLoad?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("section",{key:0,class:(0,c.C_)({"expand-animation":o.isOpened&&!o.isFirstLoad,"close-animation":!o.isOpened&&!o.isFirstLoad})},[u,(0,i._)("div",d,[f,(0,i._)("div",m,[(0,i.Wm)(l,{onCloseMenu:o.closeMenu},null,8,["onCloseMenu"])])])],2))],64)}const p={class:"menu-content"},h={class:"menu-items"},g={class:"menu-items"},b={class:"menu-items"};function w(e,t,n,o,r,a){const c=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",p,[(0,i._)("div",h,[(0,i.Wm)(c,{to:"/home",class:"menu-item"},{default:(0,i.w5)((()=>[(0,i._)("span",{onClick:t[0]||(t[0]=(...e)=>o.callParentMethod&&o.callParentMethod(...e))},"浮生幻景")])),_:1}),(0,i.Wm)(c,{to:"/artworkappreciation",class:"menu-item"},{default:(0,i.w5)((()=>[(0,i._)("span",{onClick:t[1]||(t[1]=(...e)=>o.callParentMethod&&o.callParentMethod(...e))},"作品賞析")])),_:1})]),(0,i._)("div",g,[(0,i.Wm)(c,{to:"/artistintroduction",class:"menu-item"},{default:(0,i.w5)((()=>[(0,i._)("span",{onClick:t[2]||(t[2]=(...e)=>o.callParentMethod&&o.callParentMethod(...e))},"作者介紹")])),_:1}),(0,i.Wm)(c,{to:"/exhibitionconcept",class:"menu-item"},{default:(0,i.w5)((()=>[(0,i._)("span",{onClick:t[3]||(t[3]=(...e)=>o.callParentMethod&&o.callParentMethod(...e))},"展覽理念")])),_:1}),(0,i.Wm)(c,{to:"/latestnews",class:"menu-item"},{default:(0,i.w5)((()=>[(0,i._)("span",{onClick:t[4]||(t[4]=(...e)=>o.callParentMethod&&o.callParentMethod(...e))},"動態消息")])),_:1})]),(0,i._)("div",b,[(0,i.Wm)(c,{to:"/interactivezone",class:"menu-item"},{default:(0,i.w5)((()=>[(0,i._)("span",{onClick:t[5]||(t[5]=(...e)=>o.callParentMethod&&o.callParentMethod(...e))},"互動專區")])),_:1}),(0,i.Wm)(c,{to:"/interviewvideos",class:"menu-item"},{default:(0,i.w5)((()=>[(0,i._)("span",{onClick:t[6]||(t[6]=(...e)=>o.callParentMethod&&o.callParentMethod(...e))},"採訪影片")])),_:1})])])}var _={setup(e,t){const n=()=>{t.emit("closeMenu")};return{callParentMethod:n}}},y=n(89);const k=(0,y.Z)(_,[["render",w],["__scopeId","data-v-153ec852"]]);var M=k,P={components:{MenuItem:M},setup(){const e=(0,a.iH)("menu"),t=(0,a.iH)(!1),n=(0,a.iH)(!1),o=(0,a.iH)(!0),r=(0,i.f3)("isLoading");(0,i.YP)(r,(e=>{e||c()}));const c=()=>{t.value?e.value="menu":e.value="close",n.value=!0,o.value=!1,t.value=!t.value,setTimeout((()=>{n.value=!1}),2e3)},l=()=>{e.value="menu",o.value=!1,t.value=!1,setTimeout((()=>{n.value=!1}),10),console.log("close menu")};return{icon:e,clickMenu:c,isOpened:t,isAnimating:n,isFirstLoad:o,closeMenu:l}}};const C=(0,y.Z)(P,[["render",v],["__scopeId","data-v-b7e530ca"]]);var O=C;function A(e,t,n,o,r,a){return(0,i.wg)(),(0,i.iD)("div")}var L={setup(){}};const E=(0,y.Z)(L,[["render",A]]);var T=E;const j={class:"content"},F={class:"bar-content"};function N(e,t,n,o,r,a){return(0,i.wg)(),(0,i.iD)("div",j,[(0,i._)("p",null,(0,c.zw)(o.scrollPercentage100),1),(0,i._)("div",F,[(0,i._)("div",{class:"progress-bar",style:(0,c.j5)({height:`${15+o.scrollPercentage85}%`})},null,4)])])}var H={setup(){const e=(0,a.iH)(0),t=(0,a.iH)(0),n=()=>{const n=window.pageYOffset||document.documentElement.scrollTop,o=document.documentElement.scrollHeight-document.documentElement.clientHeight;e.value=n/o*85,t.value=Math.floor(n/o*100)};return(0,i.bv)((()=>{window.addEventListener("scroll",n)})),(0,i.Ah)((()=>{window.removeEventListener("scroll",n)})),{scrollPercentage85:e,scrollPercentage100:t}}};const I=(0,y.Z)(H,[["render",N],["__scopeId","data-v-05fc4c34"]]);var S=I;const W=(0,i.uE)('<div class="section-content" data-v-34b07467><div class="loading" data-v-34b07467><div class="dot" data-v-34b07467></div><div class="dot" data-v-34b07467></div><div class="dot" data-v-34b07467></div></div></div>',1),x=[W];function D(e,t,n,o,r,a){return(0,i.wg)(),(0,i.iD)("section",null,x)}var Y={};const Z=(0,y.Z)(Y,[["render",D],["__scopeId","data-v-34b07467"]]);var z=Z,q={name:"App",components:{HeaderItem:O,FooterItem:T,LeftItem:S,LoaderItem:z},setup(){const e=(0,a.iH)(!1);return(0,i.JJ)("isLoading",e),{isLoading:e}}};const B=(0,y.Z)(q,[["render",r]]);var G=B,J=n(2483);const K=(0,J.p7)({history:(0,J.PO)(),routes:[{path:"/",name:"home",component:()=>n.e(768).then(n.bind(n,2768))},{path:"/artistintroduction",name:"artistintroduction",component:()=>n.e(75).then(n.bind(n,9075))},{path:"/artworkappreciation",name:"artworkappreciation",component:()=>n.e(225).then(n.bind(n,2225))},{path:"/exhibitionconcept",name:"exhibitionconcept",component:()=>n.e(277).then(n.bind(n,2277))},{path:"/interactivezone",name:"interactivezone",component:()=>n.e(70).then(n.bind(n,4070))},{path:"/interviewvideos",name:"interviewvideos",component:()=>n.e(851).then(n.bind(n,2851))},{path:"/latestnews",name:"latestnews",component:()=>n.e(140).then(n.bind(n,7277))}]});var U=K;(0,o.ri)(G).use(U).mount("#app")}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={exports:{}};return e[o].call(r.exports,r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,o,i,r){if(!o){var a=1/0;for(u=0;u<e.length;u++){o=e[u][0],i=e[u][1],r=e[u][2];for(var c=!0,l=0;l<o.length;l++)(!1&r||a>=r)&&Object.keys(n.O).every((function(e){return n.O[e](o[l])}))?o.splice(l--,1):(c=!1,r<a&&(a=r));if(c){e.splice(u--,1);var s=i();void 0!==s&&(t=s)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[o,i,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{70:"1a3510d0",75:"8c82728d",140:"abc38d67",225:"4df8875e",277:"86811336",768:"778603cf",851:"045365c9"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{75:"07d8adce",768:"30181dc3"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="lee-website:";n.l=function(o,i,r,a){if(e[o])e[o].push(i);else{var c,l;if(void 0!==r)for(var s=document.getElementsByTagName("script"),u=0;u<s.length;u++){var d=s[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+r){c=d;break}}c||(l=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",t+r),c.src=o),e[o]=[i];var f=function(t,n){c.onerror=c.onload=null,clearTimeout(m);var i=e[o];if(delete e[o],c.parentNode&&c.parentNode.removeChild(c),i&&i.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=f.bind(null,c.onerror),c.onload=f.bind(null,c.onload),l&&document.head.appendChild(c)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/lee-client/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,o,i){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var a=function(n){if(r.onerror=r.onload=null,"load"===n.type)o();else{var a=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=a,l.request=c,r.parentNode&&r.parentNode.removeChild(r),i(l)}};return r.onerror=r.onload=a,r.href=t,n?n.parentNode.insertBefore(r,n.nextSibling):document.head.appendChild(r),r},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var i=n[o],r=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(r===e||r===t))return i}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){i=a[o],r=i.getAttribute("data-href");if(r===e||r===t)return i}},o=function(o){return new Promise((function(i,r){var a=n.miniCssF(o),c=n.p+a;if(t(a,c))return i();e(o,c,null,i,r)}))},i={143:0};n.f.miniCss=function(e,t){var n={75:1,768:1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=o(e).then((function(){i[e]=0}),(function(t){throw delete i[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,o){var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)o.push(i[2]);else{var r=new Promise((function(n,o){i=e[t]=[n,o]}));o.push(i[2]=r);var a=n.p+n.u(t),c=new Error,l=function(o){if(n.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var r=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;c.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",c.name="ChunkLoadError",c.type=r,c.request=a,i[1](c)}};n.l(a,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var i,r,a=o[0],c=o[1],l=o[2],s=0;if(a.some((function(t){return 0!==e[t]}))){for(i in c)n.o(c,i)&&(n.m[i]=c[i]);if(l)var u=l(n)}for(t&&t(o);s<a.length;s++)r=a[s],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(u)},o=self["webpackChunklee_website"]=self["webpackChunklee_website"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(3632)}));o=n.O(o)})();
//# sourceMappingURL=app.9d5f64a1.js.map