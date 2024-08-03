// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(a):n(a)+e,i&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(e){var r,n,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(n=(-c).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=c.toString(r),c||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===o.call(e.specifier)?o.call(n):a.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var l=Math.abs,s=String.prototype.toLowerCase,f=String.prototype.toUpperCase,u=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,y=/\.0$/,b=/\.0*e/,w=/(\..*[^0])0*e/;function v(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":l(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=u.call(n,w,"$1e"),n=u.call(n,b,"e"),n=u.call(n,y,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=u.call(n,p,"e+0$1"),n=u.call(n,g,"e-0$1"),e.alternate&&(n=u.call(n,d,"$1."),n=u.call(n,h,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===f.call(e.specifier)?f.call(n):s.call(n)}function m(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var _=String.fromCharCode,E=Array.isArray;function S(e){return e!=e}function k(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function j(e){var r,t,n,a,o,l,s,f,u,p,g,d,h;if(!E(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",s=1,f=0;f<e.length;f++)if("string"==typeof(n=e[f]))l+=n;else{if(r=void 0!==n.precision,!(n=k(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,u=0;u<t.length;u++)switch(a=t.charAt(u)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,S(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,S(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=r?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!S(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=S(o)?String(n.arg):_(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=v(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,d=n.padRight,h=void 0,(h=g-p.length)<0?p:p=d?p+m(h):m(h)+p)),l+=n.arg||"",s+=1}return l}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function F(e){var r,t,n,i;for(t=[],i=0,n=x.exec(e);n;)(r=e.slice(i,x.lastIndex-n[0].length)).length&&t.push(r),t.push(T(n)),i=x.lastIndex,n=x.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function I(e){var r,t;if("string"!=typeof e)throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[F(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return j.apply(null,r)}var N=Object.prototype,A=N.toString,O=N.__defineGetter__,V=N.__defineSetter__,P=N.__lookupGetter__,$=N.__lookupSetter__,C=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===A.call(e))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===A.call(t))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(P.call(e,r)||$.call(e,r)?(n=e.__proto__,e.__proto__=N,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&O&&O.call(e,r,t.get),o&&V&&V.call(e,r,t.set),e};function R(e,r,t){C(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function G(e){return"number"==typeof e}var Z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return Z&&"symbol"==typeof Symbol.toStringTag}var H=Object.prototype.toString,L=Object.prototype.hasOwnProperty,U="function"==typeof Symbol?Symbol:void 0,M="function"==typeof U?U.toStringTag:"",X=W()?function(e){var r,t,n,i,a;if(null==e)return H.call(e);t=e[M],a=M,r=null!=(i=e)&&L.call(i,a);try{e[M]=void 0}catch(r){return H.call(e)}return n=H.call(e),r?e[M]=t:delete e[M],n}:function(e){return H.call(e)},Y=Number,z=Y.prototype.toString,B=W();function q(e){return"object"==typeof e&&(e instanceof Y||(B?function(e){try{return z.call(e),!0}catch(e){return!1}}(e):"[object Number]"===X(e)))}function D(e){return G(e)||q(e)}R(D,"isPrimitive",G),R(D,"isObject",q);var J=Number.POSITIVE_INFINITY,K=Y.NEGATIVE_INFINITY,Q=Math.floor;function ee(e){return e<J&&e>K&&Q(r=e)===r;var r}function re(e){return G(e)&&ee(e)}function te(e){return q(e)&&ee(e.valueOf())}function ne(e){return re(e)||te(e)}function ie(e){return re(e)&&e>0}function ae(e){return te(e)&&e.valueOf()>0}function oe(e){return ie(e)||ae(e)}function ce(e){return e!=e}R(ne,"isPrimitive",re),R(ne,"isObject",te),R(oe,"isPrimitive",ie),R(oe,"isObject",ae);var le="function"==typeof Float64Array,se="function"==typeof Float64Array?Float64Array:null,fe="function"==typeof Float64Array?Float64Array:void 0,ue=function(){var e,r,t;if("function"!=typeof se)return!1;try{r=new se([1,3.14,-3.14,NaN]),t=r,e=(le&&t instanceof Float64Array||"[object Float64Array]"===X(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?fe:function(){throw new Error("not implemented")};function pe(){var e,r=arguments,t="https://stdlib.io/e/"+r[0]+"?";for(e=1;e<r.length;e++)t+="&arg[]="+encodeURIComponent(r[e]);return t}return function(e,r,t){var n,i,a,o,c,l,s,f,u,p,g,d;if(!ie(e))throw new TypeError(pe("1Hf4b",e));if(n=new ue(2*e),g=e-1,u=0,f=-1,p=0,arguments.length>1){if(!G(r))throw new TypeError(pe("1Hf4A",r));if(!G(t))throw new TypeError(pe("1Hf4B",t));return l=r,s=t,function(r,t){var i,a;if(0===arguments.length)return 0===p?null:p<e?u/p:u/e;if(d=2*(f=(f+1)%e),ce(r)||ce(t))p=e,u=NaN;else{if(p<e)return n[d]=r,n[d+1]=t,(u+=(r-l)*(t-s))/(p+=1);if(ce(n[d])||ce(n[d+1])){for(u=0,i=0;i<e;i++)if((a=2*i)!==d){if(ce(n[a])||ce(n[a+1])){p=e,u=NaN;break}u+=(n[a]-l)*(n[a+1]-s)}}else!1===ce(u)&&(u+=(r-l)*(t-s)-(n[d]-l)*(n[d+1]-s))}return n[d]=r,n[d+1]=t,u/e}}return l=0,s=0,function(r,t){var h,y,b,w;if(0===arguments.length)return 0===p?null:1===p?0:p<e?u/(p-1):u/g;if(d=2*(f=(f+1)%e),ce(r)||ce(t))p=e,u=NaN;else{if(p<e)return n[d]=r,n[d+1]=t,l+=(a=r-l)/(p+=1),u+=a*(t-(s+=(t-s)/p)),1===p?0:u/(p-1);if(1===p)return 0;if(ce(n[d])||ce(n[d+1])){for(p=1,l=r,s=t,u=0,b=0;b<e;b++)if((w=2*b)!==d){if(h=n[w],y=n[w+1],ce(h)||ce(y)){p=e,u=NaN;break}l+=(a=h-l)/(p+=1),u+=a*(y-(s+=(y-s)/p))}}else!1===ce(u)&&(i=n[d]-l,o=n[d+1]-s,u+=(a=r-l)*(c=t-s)-i*o-(a-i)*(c-o)/e,l+=(a-i)/e,s+=(c-o)/e)}return n[d]=r,n[d+1]=t,u/g}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).incrmcovariance=r();
//# sourceMappingURL=browser.js.map
