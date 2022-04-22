(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(81),o=t.n(r),a=t(645),c=t.n(a)()(o());c.push([e.id,"* {\n    margin: 0px;\n    padding: 0px;\n}\n\n:root {\n    --main-color: wheat;\n    --background-color: gray;\n\n    font-size: 32px;\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n}\n\nbody {\n    min-width: 100vw;\n    min-height: 100vh;\n}\n\n#content {\n    background-color: var(--main-color);\n    min-height: inherit;\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: space-between;\n}\n\n.title {\n    text-align: center;\n    padding: 16px;\n    background-color: var(--background-color);\n    color: var(--main-color);\n}\n\n.description {\n    flex: 1;\n    background-color: var(--main-color);\n    padding: 16px;\n    display: flex;\n    flex-flow: column nowrap;\n    align-items: center;\n    gap: 32px;\n}\n\n.tabs {\n    background-color: var(--main-color);\n    border-bottom: 8px solid var(--main-color);\n    display: flex;\n    gap: 8px;\n}\n\n.tabs > button {\n    flex: 1;\n    background-color: var(--background-color);\n    border: 0px;\n    font-size: 0.8rem;\n    padding: 8px;\n    color: var(--main-color);\n}\n\n.tabs > button:hover {\n    color: black;\n    background-color: var(--main-color);\n    outline: 5px solid var(--background-color);\n}\n\n.tabs > button.chosen::before {\n    content: \"--\x3e \";\n}\n\n.tabs > button.chosen::after {\n    content: \" <--\";\n}\n\n.attribution {\n    padding: 4px;\n    text-align: center;\n    background-color: var(--background-color);\n}\n\n.attribution > a {\n    color: var(--main-color);\n}\n\n.grid {\n    background-color: var(--main-color);\n    flex: 1;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    margin-left: 64px;\n    padding: 32px;\n    row-gap: 64px;\n    column-gap: 96px;\n}\n\n.card,\n.card > img {\n    width: 300px;\n    height: auto;\n}\n\n.card:hover {\n    scale: 1.1;\n    height: auto;\n}",""]);const i=c},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],d=r.base?s[0]+r.base:s[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var f=o(m,r);r.byIndex=i,n.splice(i,0,{identifier:p,updater:f,references:1})}c.push(p)}return c}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=t(a[c]);n[i].references--}for(var s=r(e,o),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),c=t.n(a),i=t(565),s=t.n(i),d=t(216),l=t.n(d),p=t(589),u=t.n(p),m=t(426),f={};f.styleTagTransform=u(),f.setAttributes=s(),f.insert=c().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h=t.p+"d091d85fb6e6c3200468.png",v=document.querySelector("#content");function g(e,n,t){const r=document.createElement("div"),o=document.createElement("h4");o.textContent=n,r.appendChild(o);const a=document.createElement("div"),c=document.createElement("ul");for(let e in t){let n=document.createElement("li");n.textContent=t[e],c.appendChild(n)}a.appendChild(c),r.appendChild(a),e.appendChild(r)}function b(e,n){const t=document.createElement("div");t.classList.add("title");{const e=document.createElement("h1");e.textContent=n,t.appendChild(e)}e.appendChild(t)}function x(e,n,t){const r=document.createElement("div");r.classList.add("attribution");{const e=document.createElement("a");e.href=n,e.textContent=t,r.appendChild(e)}e.appendChild(r)}const y=[{name:"Baked Fresh Cherry Pie",path:t.p+"85f87236bae66d9af59f.jpg"},{name:"Bevs Chocolate Pie",path:t.p+"cf1d546df39c6b55e985.jpg"},{name:"Grandmas Lemon Meringue Pie",path:t.p+"8b19c4635b42e30a4ffb.jpg"},{name:"Key Lime Pie",path:t.p+"65f5611d415f2f5c4ad4.jpg"},{name:"Cream Pie With Banana",path:t.p+"a92551b5dd2c0c00d5a8.jpg"},{name:"Out Of This World Pie",path:t.p+"7ff628645aad5b8893ab.jpg"}],C=document.querySelector("#content"),w=document.querySelector("#content"),E=document.querySelector("#content");let k,S=[{name:"Home",show:function(){b(v,"At Marcel's");const e=document.createElement("div");e.classList.add("description");{const n=document.createElement("img");n.src=h,e.appendChild(n);const t=document.createElement("h3");t.textContent="Best Pies In The World",e.appendChild(t),g(e,"We Care About Our Customers",["Best Quality","Fair Prices","Huge Selection","Blazingly Fast Delivery"])}v.appendChild(e),x(v,"https://www.flaticon.com/free-icons/restaurant","Restaurant icons created by Freepik")}},{name:"Pies",show:function(){b(C,"Our Pies");const e=document.createElement("div");e.classList.add("grid");for(let n in y){const t=document.createElement("div");t.classList.add("card");const r=document.createElement("img");r.src=y[n].path,t.appendChild(r);const o=document.createElement("div");o.textContent=y[n].name,t.appendChild(o),e.appendChild(t)}C.appendChild(e),x(C,"https://www.allrecipes.com/recipes/367/desserts/pies/","Pies photos taken from AllRecipes")}},{name:"Contact",show:function(){b(w,"Contact Us");const e=document.createElement("div");e.classList.add("description"),g(e,"Our Socials",["Twitter: @atmarcels","Instagram: @atmarcelspies","Discord: @atmarcelspeak"]),g(e,"Other Contacts",["Number: 9876954321","Addres: Boston, Cool Street 4"]),w.appendChild(e)}}],L=[];!function(){const e=document.createElement("div");e.classList.add("tabs");for(let n in S){const t=document.createElement("button");t.textContent=S[n].name,e.appendChild(t),L.push(t),0==n&&(t.classList.add("chosen"),k=L[n]),t.addEventListener("click",(()=>{k!=t&&(k.classList.remove("chosen"),Array.from(E.children).forEach((e=>{e.classList.contains("tabs")||E.removeChild(e)})),S[n].show(),t.classList.add("chosen"),k=t)}))}E.appendChild(e),S[0].show()}()})()})();