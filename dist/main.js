(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(81),o=n.n(r),a=n(645),c=n.n(a)()(o());c.push([e.id,"* {\n    margin: 0px;\n    padding: 0px;\n}\n\n:root {\n    --main-color: wheat;\n    --background-color: gray;\n\n    font-size: 28px;\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n}\n\nbody {\n    width: 100vw;\n    height: 100vh;\n}\n\n#content {\n    height: inherit;\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: space-between;\n}\n\n#content > div {\n    display: flex;\n    justify-content: center;\n}\n\n.title {\n    padding: 16px;\n    background-color: var(--background-color);\n    color: var(--main-color);\n}\n\n.description {\n    flex: 1;\n    background-color: var(--main-color);\n    padding: 16px;\n    display: flex;\n    flex-flow: column nowrap;\n    align-items: center;\n    gap: 32px;\n}\n\n.attribution {\n    padding: 4px;\n    background-color: var(--background-color);\n}\n\n.attribution > a {\n    color: var(--main-color);\n}",""]);const i=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&c[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],l=r.base?s[0]+r.base:s[0],d=a[l]||0,p="".concat(l," ").concat(d);a[l]=d+1;var u=n(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)t[u].references++,t[u].updater(f);else{var m=o(f,r);r.byIndex=i,t.splice(i,0,{identifier:p,updater:m,references:1})}c.push(p)}return c}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=n(a[c]);t[i].references--}for(var s=r(e,o),l=0;l<a.length;l++){var d=n(a[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),a=n(569),c=n.n(a),i=n(565),s=n.n(i),l=n(216),d=n.n(l),p=n(589),u=n.n(p),f=n(426),m={};m.styleTagTransform=u(),m.setAttributes=s(),m.insert=c().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=d(),t()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const h=n.p+"d091d85fb6e6c3200468.png",v=document.querySelector("#content"),g=document.createElement("div");g.classList.add("title");{const e=document.createElement("h1");e.textContent="At Marcel's",g.appendChild(e)}v.appendChild(g);const y=document.createElement("div");y.classList.add("description");{const e=document.createElement("img");e.src=h,y.appendChild(e);const t=document.createElement("h3");t.textContent="Best Pies In The World",y.appendChild(t);const n=document.createElement("div");{const e=document.createElement("h4");e.textContent="We Care About Our Customers",n.appendChild(e);const t=document.createElement("ul");let r=document.createElement("li");r.textContent="Best Quality",t.appendChild(r),r=document.createElement("li"),r.textContent="Fair Prices",t.appendChild(r),r=document.createElement("li"),r.textContent="Huge Selection",t.appendChild(r),r=document.createElement("li"),r.textContent="Blazingly Fast Delivery",t.appendChild(r),n.appendChild(t)}y.appendChild(n)}v.appendChild(y);const b=document.createElement("div");b.classList.add("attribution");{const e=document.createElement("a");e.href="https://www.flaticon.com/free-icons/restaurant",e.title="restaurant icons",e.textContent="Restaurant icons created by Freepik",b.appendChild(e)}v.appendChild(b)})()})();