if(!self.define){let e,l={};const i=(i,n)=>(i=new URL(i+".js",n).href,l[i]||new Promise((l=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=l,document.head.appendChild(e)}else e=i,importScripts(i),l()})).then((()=>{let e=l[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,s)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(l[r])return;let c={};const t=e=>i(e,r),u={module:{uri:r},exports:c,require:t};l[r]=Promise.all(n.map((e=>u[e]||t(e)))).then((e=>(s(...e),c)))}}define(["./workbox-6567b62a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"lee-website"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/lee-client/css/175.4c2d5192.css",revision:null},{url:"/lee-client/css/75.07d8adce.css",revision:null},{url:"/lee-client/css/app.e9198cf4.css",revision:null},{url:"/lee-client/img/banner.515acce6.jpg",revision:null},{url:"/lee-client/img/homepage.415b2fd8.jpg",revision:null},{url:"/lee-client/img/icon.237f6f95.png",revision:null},{url:"/lee-client/index.html",revision:"8c5952e56f0380c0fc5bfa2bd6624d03"},{url:"/lee-client/js/140.abc38d67.js",revision:null},{url:"/lee-client/js/175.abce7070.js",revision:null},{url:"/lee-client/js/225.4df8875e.js",revision:null},{url:"/lee-client/js/277.86811336.js",revision:null},{url:"/lee-client/js/70.1a3510d0.js",revision:null},{url:"/lee-client/js/75.8c82728d.js",revision:null},{url:"/lee-client/js/851.045365c9.js",revision:null},{url:"/lee-client/js/app.34f70fd9.js",revision:null},{url:"/lee-client/js/chunk-vendors.68e4a028.js",revision:null},{url:"/lee-client/manifest.json",revision:"3c800c60216182a687b1a2f144356ea9"},{url:"/lee-client/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
