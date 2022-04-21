(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(81),r=n.n(o),a=n(645),c=n.n(a)()(r());c.push([e.id,"* {\n    margin: 0px;\n    padding: 0px;\n}\n\n:root {\n    --main-color: wheat;\n    --background-color: gray;\n\n    font-size: 32px;\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n}\n\nbody {\n    min-width: 100vw;\n    min-height: 100vh;\n}\n\n#content {\n    background-color: var(--main-color);\n    min-height: inherit;\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: space-between;\n}\n\n.title {\n    text-align: center;\n    padding: 16px;\n    background-color: var(--background-color);\n    color: var(--main-color);\n}\n\n.description {\n    flex: 1;\n    background-color: var(--main-color);\n    padding: 16px;\n    display: flex;\n    flex-flow: column nowrap;\n    align-items: center;\n    gap: 32px;\n}\n\n.tabs {\n    background-color: var(--main-color);\n    border-bottom: 8px solid var(--main-color);\n    display: flex;\n    gap: 8px;\n}\n\n.tabs > button {\n    flex: 1;\n    background-color: var(--background-color);\n    border: 0px;\n    font-size: 0.8rem;\n    padding: 8px;\n    color: var(--main-color);\n}\n\n.tabs > button:hover {\n    color: black;\n    background-color: var(--main-color);\n    outline: 5px solid var(--background-color);\n}\n\n.tabs > button.chosen::before {\n    content: \"--\x3e \";\n}\n\n.tabs > button.chosen::after {\n    content: \" <--\";\n}\n\n.attribution {\n    padding: 4px;\n    text-align: center;\n    background-color: var(--background-color);\n}\n\n.attribution > a {\n    color: var(--main-color);\n}\n\n.grid {\n    background-color: var(--main-color);\n    flex: 1;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    margin-left: 64px;\n    padding: 32px;\n    row-gap: 64px;\n    column-gap: 96px;\n}\n\n.card,\n.card > img {\n    width: 300px;\n    height: auto;\n}\n\n.card:hover {\n    scale: 1.1;\n    height: auto;\n}",""]);const i=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var i=0;i<this.length;i++){var d=this[i][0];null!=d&&(c[d]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);o&&c[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),t.push(s))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},c=[],i=0;i<e.length;i++){var d=e[i],l=o.base?d[0]+o.base:d[0],s=a[l]||0,p="".concat(l," ").concat(s);a[l]=s+1;var u=n(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var h=r(m,o);o.byIndex=i,t.splice(i,0,{identifier:p,updater:h,references:1})}c.push(p)}return c}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=n(a[c]);t[i].references--}for(var d=o(e,r),l=0;l<a.length;l++){var s=n(a[l]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}a=d}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e=n(379),t=n.n(e),o=n(795),r=n.n(o),a=n(569),c=n.n(a),i=n(565),d=n.n(i),l=n(216),s=n.n(l),p=n(589),u=n.n(p),m=n(426),h={};h.styleTagTransform=u(),h.setAttributes=d(),h.insert=c().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=s(),t()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const f=n.p+"d091d85fb6e6c3200468.png",v=document.querySelector("#content");function C(){const e=document.createElement("div");e.classList.add("title");{const t=document.createElement("h1");t.textContent="At Marcel's",e.appendChild(t)}v.appendChild(e);const t=document.createElement("div");t.classList.add("description");{const e=document.createElement("img");e.src=f,t.appendChild(e);const n=document.createElement("h3");n.textContent="Best Pies In The World",t.appendChild(n);const o=document.createElement("div");{const e=document.createElement("h4");e.textContent="We Care About Our Customers",o.appendChild(e);const t=document.createElement("ul");let n=document.createElement("li");n.textContent="Best Quality",t.appendChild(n),n=document.createElement("li"),n.textContent="Fair Prices",t.appendChild(n),n=document.createElement("li"),n.textContent="Huge Selection",t.appendChild(n),n=document.createElement("li"),n.textContent="Blazingly Fast Delivery",t.appendChild(n),o.appendChild(t)}t.appendChild(o)}v.appendChild(t);const n=document.createElement("div");n.classList.add("attribution");{const e=document.createElement("a");e.href="https://www.flaticon.com/free-icons/restaurant",e.title="restaurant icons",e.textContent="Restaurant icons created by Freepik",n.appendChild(e)}v.appendChild(n)}const g=[n.p+"85f87236bae66d9af59f.jpg",n.p+"cf1d546df39c6b55e985.jpg",n.p+"8b19c4635b42e30a4ffb.jpg",n.p+"65f5611d415f2f5c4ad4.jpg",n.p+"a92551b5dd2c0c00d5a8.jpg",n.p+"7ff628645aad5b8893ab.jpg"],b=["Baked Fresh Cherry Pie","Bevs Chocolate Pie","Grandmas Lemon Meringue Pie","Key Lime Pie","Cream Pie With Banana","Out Of This World Pie"],x=document.querySelector("#content"),E=document.querySelector("#content"),y=document.querySelector("#content");function w(){Array.from(y.children).forEach((e=>{e.classList.contains("tabs")||y.removeChild(e)}))}!function(){const e=document.createElement("div");e.classList.add("tabs");{const t=document.createElement("button");t.textContent="Home",t.classList.add("chosen"),e.appendChild(t),t.addEventListener("click",(()=>{w(),C()}));const n=document.createElement("button");n.textContent="Pies",e.appendChild(n),n.addEventListener("click",(()=>{w(),function(){const e=document.createElement("div");e.classList.add("title");{const t=document.createElement("h1");t.textContent="Our Delicious Pies",e.appendChild(t)}x.appendChild(e);const t=document.createElement("div");t.classList.add("grid");for(let e in g){const n=document.createElement("div");n.classList.add("card");const o=document.createElement("img");o.src=g[e],n.appendChild(o);const r=document.createElement("div");r.textContent=b[e],n.appendChild(r),t.appendChild(n)}x.appendChild(t);const n=document.createElement("div");n.classList.add("attribution");{const e=document.createElement("a");e.href="https://www.allrecipes.com/recipes/367/desserts/pies/",e.title="pies photos",e.textContent="Pies photos taken from AllRecipes",n.appendChild(e)}x.appendChild(n)}()}));const o=document.createElement("button");o.textContent="Contact",e.appendChild(o),o.addEventListener("click",(()=>{w(),function(){const e=document.createElement("div");e.classList.add("title");{const t=document.createElement("h1");t.textContent="Contact Us",e.appendChild(t)}E.appendChild(e);const t=document.createElement("div");t.classList.add("description");{const e=document.createElement("h3");e.textContent="Our Socials",t.appendChild(e);const n=document.createElement("div");{const e=document.createElement("ul");let t=document.createElement("li");t.textContent="Twitter: @atmarcels",e.appendChild(t),t=document.createElement("li"),t.textContent="Instagram: @atmarcelspies",e.appendChild(t),t=document.createElement("li"),t.textContent="Discord: @atmarcelspeak",e.appendChild(t),n.appendChild(e)}t.appendChild(n);const o=document.createElement("h3");o.textContent="Other Contacts",t.appendChild(o);const r=document.createElement("div");{const e=document.createElement("ul");let t=document.createElement("li");t.textContent="Number: 9876954321",e.appendChild(t),t=document.createElement("li"),t.textContent="Addres: Boston, Cool Street 4",e.appendChild(t),r.appendChild(e)}t.appendChild(r)}E.appendChild(t)}()}))}y.appendChild(e)}(),C()})()})();