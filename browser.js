// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty,r=Object.prototype,n=r.toString,o=r.__defineGetter__,i=r.__defineSetter__,u=r.__lookupGetter__,f=r.__lookupSetter__,a=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,e,a){var l,c,y,p;if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof a||null===a||"[object Array]"===n.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((c="value"in a)&&(u.call(t,e)||f.call(t,e)?(l=t.__proto__,t.__proto__=r,delete t[e],t[e]=a.value,t.__proto__=l):t[e]=a.value),y="get"in a,p="set"in a,c&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(t,e,a.get),p&&i&&i.call(t,e,a.set),t};function l(t,e,r){a(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function c(t){return"number"==typeof t}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function p(){return y&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString,s=Object.prototype.hasOwnProperty,d="function"==typeof Symbol?Symbol.toStringTag:"",v=p()?function(t){var e,r,n,o,i;if(null==t)return b.call(t);r=t[d],i=d,e=null!=(o=t)&&s.call(o,i);try{t[d]=void 0}catch(e){return b.call(t)}return n=b.call(t),e?t[d]=r:delete t[d],n}:function(t){return b.call(t)},_=Number,m=_.prototype.toString,h=p();function j(t){return"object"==typeof t&&(t instanceof _||(h?function(t){try{return m.call(t),!0}catch(t){return!1}}(t):"[object Number]"===v(t)))}function g(t){return c(t)||j(t)}l(g,"isPrimitive",c),l(g,"isObject",j);var w=Number.POSITIVE_INFINITY,N=_.NEGATIVE_INFINITY,O=Math.floor;function S(t){return t<w&&t>N&&O(e=t)===e;var e}function T(t){return c(t)&&S(t)}function A(t){return j(t)&&S(t.valueOf())}function E(t){return T(t)||A(t)}function F(t){return T(t)&&t>0}function I(t){return A(t)&&t.valueOf()>0}function P(t){return F(t)||I(t)}function k(t){return t!=t}l(E,"isPrimitive",T),l(E,"isObject",A),l(P,"isPrimitive",F),l(P,"isObject",I);var V="function"==typeof Float64Array,x="function"==typeof Float64Array?Float64Array:null,G="function"==typeof Float64Array?Float64Array:void 0,C=function(){var t,e,r;if("function"!=typeof x)return!1;try{e=new x([1,3.14,-3.14,NaN]),r=e,t=(V&&r instanceof Float64Array||"[object Float64Array]"===v(r))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){t=!1}return t}()?G:function(){throw new Error("not implemented")};function Y(){var t,e=arguments,r=e[0],n="https://stdlib.io/e/"+r+"?";for(t=1;t<e.length;t++)n+="&arg[]="+encodeURIComponent(e[t]);return n}return function(t,e,r){var n,o,i,u,f,a,l,y,p,b,s,d;if(!F(t))throw new TypeError(Y("0dj4o",t));if(n=new C(2*t),s=t-1,p=0,y=-1,b=0,arguments.length>1){if(!c(e))throw new TypeError(Y("0dj4N",e));if(!c(r))throw new TypeError(Y("0dj4O",r));return a=e,l=r,_}return a=0,l=0,v;function v(e,r){var c,v,_,m;if(0===arguments.length)return 0===b?null:1===b?0:b<t?p/(b-1):p/s;if(d=2*(y=(y+1)%t),k(e)||k(r))b=t,p=NaN;else{if(b<t)return n[d]=e,n[d+1]=r,a+=(i=e-a)/(b+=1),p+=i*(r-(l+=(r-l)/b)),1===b?0:p/(b-1);if(1===b)return 0;if(k(n[d])||k(n[d+1])){for(b=1,a=e,l=r,p=0,_=0;_<t;_++)if((m=2*_)!==d){if(c=n[m],v=n[m+1],k(c)||k(v)){b=t,p=NaN;break}a+=(i=c-a)/(b+=1),p+=i*(v-(l+=(v-l)/b))}}else!1===k(p)&&(o=n[d]-a,u=n[d+1]-l,p+=(i=e-a)*(f=r-l)-o*u-(i-o)*(f-u)/t,a+=(i-o)/t,l+=(f-u)/t)}return n[d]=e,n[d+1]=r,p/s}function _(e,r){var o,i;if(0===arguments.length)return 0===b?null:b<t?p/b:p/t;if(d=2*(y=(y+1)%t),k(e)||k(r))b=t,p=NaN;else{if(b<t)return n[d]=e,n[d+1]=r,(p+=(e-a)*(r-l))/(b+=1);if(k(n[d])||k(n[d+1])){for(p=0,o=0;o<t;o++)if((i=2*o)!==d){if(k(n[i])||k(n[i+1])){b=t,p=NaN;break}p+=(n[i]-a)*(n[i+1]-l)}}else!1===k(p)&&(p+=(e-a)*(r-l)-(n[d]-a)*(n[d+1]-l))}return n[d]=e,n[d+1]=r,p/t}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).incrmcovariance=e();
//# sourceMappingURL=browser.js.map
