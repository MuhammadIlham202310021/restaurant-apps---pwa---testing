(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{10:function(t,r,e){"use strict";t.exports=function(t){var r=[];return r.toString=function(){return this.map((function(r){var e=function(t,r){var e=t[1]||"",n=t[3];if(!n)return e;if(r&&"function"==typeof btoa){var i=(s=n,u=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),f="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(u),"/*# ".concat(f," */")),o=n.sources.map((function(t){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(t," */")}));return[e].concat(o).concat([i]).join("\n")}var s,u,f;return[e].join("\n")}(r,t);return r[2]?"@media ".concat(r[2]," {").concat(e,"}"):e})).join("")},r.i=function(t,e,n){"string"==typeof t&&(t=[[null,t,""]]);var i={};if(n)for(var o=0;o<this.length;o++){var s=this[o][0];null!=s&&(i[s]=!0)}for(var u=0;u<t.length;u++){var f=[].concat(t[u]);n&&i[f[0]]||(e&&(f[2]?f[2]="".concat(e," and ").concat(f[2]):f[2]=e),r.push(f))}},r}},35:function(t,r,e){"use strict";e.d(r,"a",(function(){return y}));let n,i;const o=new WeakMap,s=new WeakMap,u=new WeakMap,f=new WeakMap,a=new WeakMap;let h={get(t,r,e){if(t instanceof IDBTransaction){if("done"===r)return s.get(t);if("objectStoreNames"===r)return t.objectStoreNames||u.get(t);if("store"===r)return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return p(t[r])},set:(t,r,e)=>(t[r]=e,!0),has:(t,r)=>t instanceof IDBTransaction&&("done"===r||"store"===r)||r in t};function c(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(i||(i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...r){return t.apply(g(this),r),p(o.get(this))}:function(...r){return p(t.apply(g(this),r))}:function(r,...e){const n=t.call(g(this),r,...e);return u.set(n,r.sort?r.sort():[r]),p(n)}}function l(t){return"function"==typeof t?c(t):(t instanceof IDBTransaction&&function(t){if(s.has(t))return;const r=new Promise((r,e)=>{const n=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{r(),n()},o=()=>{e(t.error||new DOMException("AbortError","AbortError")),n()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});s.set(t,r)}(t),r=t,(n||(n=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some(t=>r instanceof t)?new Proxy(t,h):t);var r}function p(t){if(t instanceof IDBRequest)return function(t){const r=new Promise((r,e)=>{const n=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{r(p(t.result)),n()},o=()=>{e(t.error),n()};t.addEventListener("success",i),t.addEventListener("error",o)});return r.then(r=>{r instanceof IDBCursor&&o.set(r,t)}).catch(()=>{}),a.set(r,t),r}(t);if(f.has(t))return f.get(t);const r=l(t);return r!==t&&(f.set(t,r),a.set(r,t)),r}const g=t=>a.get(t);function y(t,r,{blocked:e,upgrade:n,blocking:i,terminated:o}={}){const s=indexedDB.open(t,r),u=p(s);return n&&s.addEventListener("upgradeneeded",t=>{n(p(s.result),t.oldVersion,t.newVersion,p(s.transaction))}),e&&s.addEventListener("blocked",()=>e()),u.then(t=>{o&&t.addEventListener("close",()=>o()),i&&t.addEventListener("versionchange",()=>i())}).catch(()=>{}),u}const d=["get","getKey","getAll","getAllKeys","count"],w=["put","add","delete","clear"],v=new Map;function E(t,r){if(!(t instanceof IDBDatabase)||r in t||"string"!=typeof r)return;if(v.get(r))return v.get(r);const e=r.replace(/FromIndex$/,""),n=r!==e,i=w.includes(e);if(!(e in(n?IDBIndex:IDBObjectStore).prototype)||!i&&!d.includes(e))return;const o=async function(t,...r){const o=this.transaction(t,i?"readwrite":"readonly");let s=o.store;return n&&(s=s.index(r.shift())),(await Promise.all([s[e](...r),i&&o.done]))[0]};return v.set(r,o),o}h=(t=>({...t,get:(r,e,n)=>E(r,e)||t.get(r,e,n),has:(r,e)=>!!E(r,e)||t.has(r,e)}))(h)},50:function(t,r,e){"use strict";(function(t){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
var n=e(52),i=e(53),o=e(54);function s(){return f.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function u(t,r){if(s()<r)throw new RangeError("Invalid typed array length");return f.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(r)).__proto__=f.prototype:(null===t&&(t=new f(r)),t.length=r),t}function f(t,r,e){if(!(f.TYPED_ARRAY_SUPPORT||this instanceof f))return new f(t,r,e);if("number"==typeof t){if("string"==typeof r)throw new Error("If encoding is specified then the first argument must be a string");return c(this,t)}return a(this,t,r,e)}function a(t,r,e,n){if("number"==typeof r)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&r instanceof ArrayBuffer?function(t,r,e,n){if(r.byteLength,e<0||r.byteLength<e)throw new RangeError("'offset' is out of bounds");if(r.byteLength<e+(n||0))throw new RangeError("'length' is out of bounds");r=void 0===e&&void 0===n?new Uint8Array(r):void 0===n?new Uint8Array(r,e):new Uint8Array(r,e,n);f.TYPED_ARRAY_SUPPORT?(t=r).__proto__=f.prototype:t=l(t,r);return t}(t,r,e,n):"string"==typeof r?function(t,r,e){"string"==typeof e&&""!==e||(e="utf8");if(!f.isEncoding(e))throw new TypeError('"encoding" must be a valid string encoding');var n=0|g(r,e),i=(t=u(t,n)).write(r,e);i!==n&&(t=t.slice(0,i));return t}(t,r,e):function(t,r){if(f.isBuffer(r)){var e=0|p(r.length);return 0===(t=u(t,e)).length||r.copy(t,0,0,e),t}if(r){if("undefined"!=typeof ArrayBuffer&&r.buffer instanceof ArrayBuffer||"length"in r)return"number"!=typeof r.length||(n=r.length)!=n?u(t,0):l(t,r);if("Buffer"===r.type&&o(r.data))return l(t,r.data)}var n;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(t,r)}function h(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function c(t,r){if(h(r),t=u(t,r<0?0:0|p(r)),!f.TYPED_ARRAY_SUPPORT)for(var e=0;e<r;++e)t[e]=0;return t}function l(t,r){var e=r.length<0?0:0|p(r.length);t=u(t,e);for(var n=0;n<e;n+=1)t[n]=255&r[n];return t}function p(t){if(t>=s())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+s().toString(16)+" bytes");return 0|t}function g(t,r){if(f.isBuffer(t))return t.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!=typeof t&&(t=""+t);var e=t.length;if(0===e)return 0;for(var n=!1;;)switch(r){case"ascii":case"latin1":case"binary":return e;case"utf8":case"utf-8":case void 0:return N(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*e;case"hex":return e>>>1;case"base64":return z(t).length;default:if(n)return N(t).length;r=(""+r).toLowerCase(),n=!0}}function y(t,r,e){var n=!1;if((void 0===r||r<0)&&(r=0),r>this.length)return"";if((void 0===e||e>this.length)&&(e=this.length),e<=0)return"";if((e>>>=0)<=(r>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return S(this,r,e);case"utf8":case"utf-8":return P(this,r,e);case"ascii":return T(this,r,e);case"latin1":case"binary":return I(this,r,e);case"base64":return B(this,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return U(this,r,e);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function d(t,r,e){var n=t[r];t[r]=t[e],t[e]=n}function w(t,r,e,n,i){if(0===t.length)return-1;if("string"==typeof e?(n=e,e=0):e>2147483647?e=2147483647:e<-2147483648&&(e=-2147483648),e=+e,isNaN(e)&&(e=i?0:t.length-1),e<0&&(e=t.length+e),e>=t.length){if(i)return-1;e=t.length-1}else if(e<0){if(!i)return-1;e=0}if("string"==typeof r&&(r=f.from(r,n)),f.isBuffer(r))return 0===r.length?-1:v(t,r,e,n,i);if("number"==typeof r)return r&=255,f.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(t,r,e):Uint8Array.prototype.lastIndexOf.call(t,r,e):v(t,[r],e,n,i);throw new TypeError("val must be string, number or Buffer")}function v(t,r,e,n,i){var o,s=1,u=t.length,f=r.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||r.length<2)return-1;s=2,u/=2,f/=2,e/=2}function a(t,r){return 1===s?t[r]:t.readUInt16BE(r*s)}if(i){var h=-1;for(o=e;o<u;o++)if(a(t,o)===a(r,-1===h?0:o-h)){if(-1===h&&(h=o),o-h+1===f)return h*s}else-1!==h&&(o-=o-h),h=-1}else for(e+f>u&&(e=u-f),o=e;o>=0;o--){for(var c=!0,l=0;l<f;l++)if(a(t,o+l)!==a(r,l)){c=!1;break}if(c)return o}return-1}function E(t,r,e,n){e=Number(e)||0;var i=t.length-e;n?(n=Number(n))>i&&(n=i):n=i;var o=r.length;if(o%2!=0)throw new TypeError("Invalid hex string");n>o/2&&(n=o/2);for(var s=0;s<n;++s){var u=parseInt(r.substr(2*s,2),16);if(isNaN(u))return s;t[e+s]=u}return s}function b(t,r,e,n){return F(N(r,t.length-e),t,e,n)}function m(t,r,e,n){return F(function(t){for(var r=[],e=0;e<t.length;++e)r.push(255&t.charCodeAt(e));return r}(r),t,e,n)}function A(t,r,e,n){return m(t,r,e,n)}function R(t,r,e,n){return F(z(r),t,e,n)}function _(t,r,e,n){return F(function(t,r){for(var e,n,i,o=[],s=0;s<t.length&&!((r-=2)<0);++s)e=t.charCodeAt(s),n=e>>8,i=e%256,o.push(i),o.push(n);return o}(r,t.length-e),t,e,n)}function B(t,r,e){return 0===r&&e===t.length?n.fromByteArray(t):n.fromByteArray(t.slice(r,e))}function P(t,r,e){e=Math.min(t.length,e);for(var n=[],i=r;i<e;){var o,s,u,f,a=t[i],h=null,c=a>239?4:a>223?3:a>191?2:1;if(i+c<=e)switch(c){case 1:a<128&&(h=a);break;case 2:128==(192&(o=t[i+1]))&&(f=(31&a)<<6|63&o)>127&&(h=f);break;case 3:o=t[i+1],s=t[i+2],128==(192&o)&&128==(192&s)&&(f=(15&a)<<12|(63&o)<<6|63&s)>2047&&(f<55296||f>57343)&&(h=f);break;case 4:o=t[i+1],s=t[i+2],u=t[i+3],128==(192&o)&&128==(192&s)&&128==(192&u)&&(f=(15&a)<<18|(63&o)<<12|(63&s)<<6|63&u)>65535&&f<1114112&&(h=f)}null===h?(h=65533,c=1):h>65535&&(h-=65536,n.push(h>>>10&1023|55296),h=56320|1023&h),n.push(h),i+=c}return function(t){var r=t.length;if(r<=4096)return String.fromCharCode.apply(String,t);var e="",n=0;for(;n<r;)e+=String.fromCharCode.apply(String,t.slice(n,n+=4096));return e}(n)}r.Buffer=f,r.SlowBuffer=function(t){+t!=t&&(t=0);return f.alloc(+t)},r.INSPECT_MAX_BYTES=50,f.TYPED_ARRAY_SUPPORT=void 0!==t.TYPED_ARRAY_SUPPORT?t.TYPED_ARRAY_SUPPORT:function(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()&&"function"==typeof t.subarray&&0===t.subarray(1,1).byteLength}catch(t){return!1}}(),r.kMaxLength=s(),f.poolSize=8192,f._augment=function(t){return t.__proto__=f.prototype,t},f.from=function(t,r,e){return a(null,t,r,e)},f.TYPED_ARRAY_SUPPORT&&(f.prototype.__proto__=Uint8Array.prototype,f.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&f[Symbol.species]===f&&Object.defineProperty(f,Symbol.species,{value:null,configurable:!0})),f.alloc=function(t,r,e){return function(t,r,e,n){return h(r),r<=0?u(t,r):void 0!==e?"string"==typeof n?u(t,r).fill(e,n):u(t,r).fill(e):u(t,r)}(null,t,r,e)},f.allocUnsafe=function(t){return c(null,t)},f.allocUnsafeSlow=function(t){return c(null,t)},f.isBuffer=function(t){return!(null==t||!t._isBuffer)},f.compare=function(t,r){if(!f.isBuffer(t)||!f.isBuffer(r))throw new TypeError("Arguments must be Buffers");if(t===r)return 0;for(var e=t.length,n=r.length,i=0,o=Math.min(e,n);i<o;++i)if(t[i]!==r[i]){e=t[i],n=r[i];break}return e<n?-1:n<e?1:0},f.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},f.concat=function(t,r){if(!o(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return f.alloc(0);var e;if(void 0===r)for(r=0,e=0;e<t.length;++e)r+=t[e].length;var n=f.allocUnsafe(r),i=0;for(e=0;e<t.length;++e){var s=t[e];if(!f.isBuffer(s))throw new TypeError('"list" argument must be an Array of Buffers');s.copy(n,i),i+=s.length}return n},f.byteLength=g,f.prototype._isBuffer=!0,f.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<t;r+=2)d(this,r,r+1);return this},f.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<t;r+=4)d(this,r,r+3),d(this,r+1,r+2);return this},f.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<t;r+=8)d(this,r,r+7),d(this,r+1,r+6),d(this,r+2,r+5),d(this,r+3,r+4);return this},f.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?P(this,0,t):y.apply(this,arguments)},f.prototype.equals=function(t){if(!f.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===f.compare(this,t)},f.prototype.inspect=function(){var t="",e=r.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,e).match(/.{2}/g).join(" "),this.length>e&&(t+=" ... ")),"<Buffer "+t+">"},f.prototype.compare=function(t,r,e,n,i){if(!f.isBuffer(t))throw new TypeError("Argument must be a Buffer");if(void 0===r&&(r=0),void 0===e&&(e=t?t.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),r<0||e>t.length||n<0||i>this.length)throw new RangeError("out of range index");if(n>=i&&r>=e)return 0;if(n>=i)return-1;if(r>=e)return 1;if(this===t)return 0;for(var o=(i>>>=0)-(n>>>=0),s=(e>>>=0)-(r>>>=0),u=Math.min(o,s),a=this.slice(n,i),h=t.slice(r,e),c=0;c<u;++c)if(a[c]!==h[c]){o=a[c],s=h[c];break}return o<s?-1:s<o?1:0},f.prototype.includes=function(t,r,e){return-1!==this.indexOf(t,r,e)},f.prototype.indexOf=function(t,r,e){return w(this,t,r,e,!0)},f.prototype.lastIndexOf=function(t,r,e){return w(this,t,r,e,!1)},f.prototype.write=function(t,r,e,n){if(void 0===r)n="utf8",e=this.length,r=0;else if(void 0===e&&"string"==typeof r)n=r,e=this.length,r=0;else{if(!isFinite(r))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");r|=0,isFinite(e)?(e|=0,void 0===n&&(n="utf8")):(n=e,e=void 0)}var i=this.length-r;if((void 0===e||e>i)&&(e=i),t.length>0&&(e<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var o=!1;;)switch(n){case"hex":return E(this,t,r,e);case"utf8":case"utf-8":return b(this,t,r,e);case"ascii":return m(this,t,r,e);case"latin1":case"binary":return A(this,t,r,e);case"base64":return R(this,t,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return _(this,t,r,e);default:if(o)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),o=!0}},f.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function T(t,r,e){var n="";e=Math.min(t.length,e);for(var i=r;i<e;++i)n+=String.fromCharCode(127&t[i]);return n}function I(t,r,e){var n="";e=Math.min(t.length,e);for(var i=r;i<e;++i)n+=String.fromCharCode(t[i]);return n}function S(t,r,e){var n=t.length;(!r||r<0)&&(r=0),(!e||e<0||e>n)&&(e=n);for(var i="",o=r;o<e;++o)i+=j(t[o]);return i}function U(t,r,e){for(var n=t.slice(r,e),i="",o=0;o<n.length;o+=2)i+=String.fromCharCode(n[o]+256*n[o+1]);return i}function D(t,r,e){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+r>e)throw new RangeError("Trying to access beyond buffer length")}function Y(t,r,e,n,i,o){if(!f.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>i||r<o)throw new RangeError('"value" argument is out of bounds');if(e+n>t.length)throw new RangeError("Index out of range")}function L(t,r,e,n){r<0&&(r=65535+r+1);for(var i=0,o=Math.min(t.length-e,2);i<o;++i)t[e+i]=(r&255<<8*(n?i:1-i))>>>8*(n?i:1-i)}function O(t,r,e,n){r<0&&(r=4294967295+r+1);for(var i=0,o=Math.min(t.length-e,4);i<o;++i)t[e+i]=r>>>8*(n?i:3-i)&255}function x(t,r,e,n,i,o){if(e+n>t.length)throw new RangeError("Index out of range");if(e<0)throw new RangeError("Index out of range")}function C(t,r,e,n,o){return o||x(t,0,e,4),i.write(t,r,e,n,23,4),e+4}function M(t,r,e,n,o){return o||x(t,0,e,8),i.write(t,r,e,n,52,8),e+8}f.prototype.slice=function(t,r){var e,n=this.length;if((t=~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),(r=void 0===r?n:~~r)<0?(r+=n)<0&&(r=0):r>n&&(r=n),r<t&&(r=t),f.TYPED_ARRAY_SUPPORT)(e=this.subarray(t,r)).__proto__=f.prototype;else{var i=r-t;e=new f(i,void 0);for(var o=0;o<i;++o)e[o]=this[o+t]}return e},f.prototype.readUIntLE=function(t,r,e){t|=0,r|=0,e||D(t,r,this.length);for(var n=this[t],i=1,o=0;++o<r&&(i*=256);)n+=this[t+o]*i;return n},f.prototype.readUIntBE=function(t,r,e){t|=0,r|=0,e||D(t,r,this.length);for(var n=this[t+--r],i=1;r>0&&(i*=256);)n+=this[t+--r]*i;return n},f.prototype.readUInt8=function(t,r){return r||D(t,1,this.length),this[t]},f.prototype.readUInt16LE=function(t,r){return r||D(t,2,this.length),this[t]|this[t+1]<<8},f.prototype.readUInt16BE=function(t,r){return r||D(t,2,this.length),this[t]<<8|this[t+1]},f.prototype.readUInt32LE=function(t,r){return r||D(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},f.prototype.readUInt32BE=function(t,r){return r||D(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},f.prototype.readIntLE=function(t,r,e){t|=0,r|=0,e||D(t,r,this.length);for(var n=this[t],i=1,o=0;++o<r&&(i*=256);)n+=this[t+o]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*r)),n},f.prototype.readIntBE=function(t,r,e){t|=0,r|=0,e||D(t,r,this.length);for(var n=r,i=1,o=this[t+--n];n>0&&(i*=256);)o+=this[t+--n]*i;return o>=(i*=128)&&(o-=Math.pow(2,8*r)),o},f.prototype.readInt8=function(t,r){return r||D(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},f.prototype.readInt16LE=function(t,r){r||D(t,2,this.length);var e=this[t]|this[t+1]<<8;return 32768&e?4294901760|e:e},f.prototype.readInt16BE=function(t,r){r||D(t,2,this.length);var e=this[t+1]|this[t]<<8;return 32768&e?4294901760|e:e},f.prototype.readInt32LE=function(t,r){return r||D(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},f.prototype.readInt32BE=function(t,r){return r||D(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},f.prototype.readFloatLE=function(t,r){return r||D(t,4,this.length),i.read(this,t,!0,23,4)},f.prototype.readFloatBE=function(t,r){return r||D(t,4,this.length),i.read(this,t,!1,23,4)},f.prototype.readDoubleLE=function(t,r){return r||D(t,8,this.length),i.read(this,t,!0,52,8)},f.prototype.readDoubleBE=function(t,r){return r||D(t,8,this.length),i.read(this,t,!1,52,8)},f.prototype.writeUIntLE=function(t,r,e,n){(t=+t,r|=0,e|=0,n)||Y(this,t,r,e,Math.pow(2,8*e)-1,0);var i=1,o=0;for(this[r]=255&t;++o<e&&(i*=256);)this[r+o]=t/i&255;return r+e},f.prototype.writeUIntBE=function(t,r,e,n){(t=+t,r|=0,e|=0,n)||Y(this,t,r,e,Math.pow(2,8*e)-1,0);var i=e-1,o=1;for(this[r+i]=255&t;--i>=0&&(o*=256);)this[r+i]=t/o&255;return r+e},f.prototype.writeUInt8=function(t,r,e){return t=+t,r|=0,e||Y(this,t,r,1,255,0),f.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[r]=255&t,r+1},f.prototype.writeUInt16LE=function(t,r,e){return t=+t,r|=0,e||Y(this,t,r,2,65535,0),f.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8):L(this,t,r,!0),r+2},f.prototype.writeUInt16BE=function(t,r,e){return t=+t,r|=0,e||Y(this,t,r,2,65535,0),f.TYPED_ARRAY_SUPPORT?(this[r]=t>>>8,this[r+1]=255&t):L(this,t,r,!1),r+2},f.prototype.writeUInt32LE=function(t,r,e){return t=+t,r|=0,e||Y(this,t,r,4,4294967295,0),f.TYPED_ARRAY_SUPPORT?(this[r+3]=t>>>24,this[r+2]=t>>>16,this[r+1]=t>>>8,this[r]=255&t):O(this,t,r,!0),r+4},f.prototype.writeUInt32BE=function(t,r,e){return t=+t,r|=0,e||Y(this,t,r,4,4294967295,0),f.TYPED_ARRAY_SUPPORT?(this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t):O(this,t,r,!1),r+4},f.prototype.writeIntLE=function(t,r,e,n){if(t=+t,r|=0,!n){var i=Math.pow(2,8*e-1);Y(this,t,r,e,i-1,-i)}var o=0,s=1,u=0;for(this[r]=255&t;++o<e&&(s*=256);)t<0&&0===u&&0!==this[r+o-1]&&(u=1),this[r+o]=(t/s>>0)-u&255;return r+e},f.prototype.writeIntBE=function(t,r,e,n){if(t=+t,r|=0,!n){var i=Math.pow(2,8*e-1);Y(this,t,r,e,i-1,-i)}var o=e-1,s=1,u=0;for(this[r+o]=255&t;--o>=0&&(s*=256);)t<0&&0===u&&0!==this[r+o+1]&&(u=1),this[r+o]=(t/s>>0)-u&255;return r+e},f.prototype.writeInt8=function(t,r,e){return t=+t,r|=0,e||Y(this,t,r,1,127,-128),f.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[r]=255&t,r+1},f.prototype.writeInt16LE=function(t,r,e){return t=+t,r|=0,e||Y(this,t,r,2,32767,-32768),f.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8):L(this,t,r,!0),r+2},f.prototype.writeInt16BE=function(t,r,e){return t=+t,r|=0,e||Y(this,t,r,2,32767,-32768),f.TYPED_ARRAY_SUPPORT?(this[r]=t>>>8,this[r+1]=255&t):L(this,t,r,!1),r+2},f.prototype.writeInt32LE=function(t,r,e){return t=+t,r|=0,e||Y(this,t,r,4,2147483647,-2147483648),f.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8,this[r+2]=t>>>16,this[r+3]=t>>>24):O(this,t,r,!0),r+4},f.prototype.writeInt32BE=function(t,r,e){return t=+t,r|=0,e||Y(this,t,r,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),f.TYPED_ARRAY_SUPPORT?(this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t):O(this,t,r,!1),r+4},f.prototype.writeFloatLE=function(t,r,e){return C(this,t,r,!0,e)},f.prototype.writeFloatBE=function(t,r,e){return C(this,t,r,!1,e)},f.prototype.writeDoubleLE=function(t,r,e){return M(this,t,r,!0,e)},f.prototype.writeDoubleBE=function(t,r,e){return M(this,t,r,!1,e)},f.prototype.copy=function(t,r,e,n){if(e||(e=0),n||0===n||(n=this.length),r>=t.length&&(r=t.length),r||(r=0),n>0&&n<e&&(n=e),n===e)return 0;if(0===t.length||0===this.length)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(e<0||e>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-r<n-e&&(n=t.length-r+e);var i,o=n-e;if(this===t&&e<r&&r<n)for(i=o-1;i>=0;--i)t[i+r]=this[i+e];else if(o<1e3||!f.TYPED_ARRAY_SUPPORT)for(i=0;i<o;++i)t[i+r]=this[i+e];else Uint8Array.prototype.set.call(t,this.subarray(e,e+o),r);return o},f.prototype.fill=function(t,r,e,n){if("string"==typeof t){if("string"==typeof r?(n=r,r=0,e=this.length):"string"==typeof e&&(n=e,e=this.length),1===t.length){var i=t.charCodeAt(0);i<256&&(t=i)}if(void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!f.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"==typeof t&&(t&=255);if(r<0||this.length<r||this.length<e)throw new RangeError("Out of range index");if(e<=r)return this;var o;if(r>>>=0,e=void 0===e?this.length:e>>>0,t||(t=0),"number"==typeof t)for(o=r;o<e;++o)this[o]=t;else{var s=f.isBuffer(t)?t:N(new f(t,n).toString()),u=s.length;for(o=0;o<e-r;++o)this[o+r]=s[o%u]}return this};var k=/[^+\/0-9A-Za-z-_]/g;function j(t){return t<16?"0"+t.toString(16):t.toString(16)}function N(t,r){var e;r=r||1/0;for(var n=t.length,i=null,o=[],s=0;s<n;++s){if((e=t.charCodeAt(s))>55295&&e<57344){if(!i){if(e>56319){(r-=3)>-1&&o.push(239,191,189);continue}if(s+1===n){(r-=3)>-1&&o.push(239,191,189);continue}i=e;continue}if(e<56320){(r-=3)>-1&&o.push(239,191,189),i=e;continue}e=65536+(i-55296<<10|e-56320)}else i&&(r-=3)>-1&&o.push(239,191,189);if(i=null,e<128){if((r-=1)<0)break;o.push(e)}else if(e<2048){if((r-=2)<0)break;o.push(e>>6|192,63&e|128)}else if(e<65536){if((r-=3)<0)break;o.push(e>>12|224,e>>6&63|128,63&e|128)}else{if(!(e<1114112))throw new Error("Invalid code point");if((r-=4)<0)break;o.push(e>>18|240,e>>12&63|128,e>>6&63|128,63&e|128)}}return o}function z(t){return n.toByteArray(function(t){if((t=function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}(t).replace(k,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function F(t,r,e,n){for(var i=0;i<n&&!(i+e>=r.length||i>=t.length);++i)r[i+e]=t[i];return i}}).call(this,e(51))},54:function(t,r){var e={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==e.call(t)}}}]);