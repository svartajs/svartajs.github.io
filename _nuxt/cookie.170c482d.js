import"./index.a236b148.js";import{r as l,a as m}from"./runtime-core.esm-bundler.92c6bc06.js";const w=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,h=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,S=/^\s*["[{]|^\s*-?\d[\d.]{0,14}\s*$/;function y(e,i){if(e!=="__proto__"&&!(e==="constructor"&&i&&typeof i=="object"&&"prototype"in i))return i}function g(e,i={}){if(typeof e!="string")return e;const t=e.toLowerCase().trim();if(t==="true")return!0;if(t==="false")return!1;if(t==="null")return null;if(t==="nan")return Number.NaN;if(t==="infinity")return Number.POSITIVE_INFINITY;if(t!=="undefined"){if(!S.test(e)){if(i.strict)throw new SyntaxError("Invalid JSON");return e}try{return w.test(e)||h.test(e)?JSON.parse(e,y):JSON.parse(e)}catch(r){if(i.strict)throw r;return e}}}const x=decodeURIComponent,C=encodeURIComponent,E=/; */,u=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function k(e,i){if(typeof e!="string")throw new TypeError("argument str must be a string");let t={},r=i||{},n=e.split(E),c=r.decode||x;for(let o=0;o<n.length;o++){let s=n[o],f=s.indexOf("=");if(f<0)continue;let p=s.substr(0,f).trim(),a=s.substr(++f,s.length).trim();a[0]=='"'&&(a=a.slice(1,-1)),t[p]==null&&(t[p]=T(a,c))}return t}function d(e,i,t){let r=t||{},n=r.encode||C;if(typeof n!="function")throw new TypeError("option encode is invalid");if(!u.test(e))throw new TypeError("argument name is invalid");let c=n(i);if(c&&!u.test(c))throw new TypeError("argument val is invalid");let o=e+"="+c;if(r.maxAge!=null){let s=r.maxAge-0;if(isNaN(s)||!isFinite(s))throw new TypeError("option maxAge is invalid");o+="; Max-Age="+Math.floor(s)}if(r.domain){if(!u.test(r.domain))throw new TypeError("option domain is invalid");o+="; Domain="+r.domain}if(r.path){if(!u.test(r.path))throw new TypeError("option path is invalid");o+="; Path="+r.path}if(r.expires){if(typeof r.expires.toUTCString!="function")throw new TypeError("option expires is invalid");o+="; Expires="+r.expires.toUTCString()}if(r.httpOnly&&(o+="; HttpOnly"),r.secure&&(o+="; Secure"),r.sameSite)switch(typeof r.sameSite=="string"?r.sameSite.toLowerCase():r.sameSite){case!0:o+="; SameSite=Strict";break;case"lax":o+="; SameSite=Lax";break;case"strict":o+="; SameSite=Strict";break;case"none":o+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return o}function T(e,i){try{return i(e)}catch{return e}}const N={path:"/",watch:!0,decode:e=>g(decodeURIComponent(e)),encode:e=>encodeURIComponent(typeof e=="string"?e:JSON.stringify(e))};function O(e,i){var c;const t={...N,...i},r=b(t)||{},n=l(r[e]??((c=t.default)==null?void 0:c.call(t)));{const o=()=>{R(e,n.value,t)};t.watch?m(n,o,{deep:t.watch!=="shallow"}):o()}return n}function b(e={}){return k(document.cookie,e)}function I(e,i,t={}){return i==null?d(e,i,{...t,maxAge:-1}):d(e,i,t)}function R(e,i,t={}){document.cookie=I(e,i,t)}export{g as d,O as u};
