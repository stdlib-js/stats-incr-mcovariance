// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function i(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function n(e,r,t){var n=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+i(a):i(a)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(e){var r,i,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,c=parseInt(i,10),!isFinite(c)){if(!t(i))throw new Error("invalid integer. Value: "+i);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(i=(-c).toString(r),e.precision&&(i=n(i,e.precision,e.padRight)),i="-"+i):(i=c.toString(r),c||e.precision?e.precision&&(i=n(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===o.call(e.specifier)?o.call(i):a.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}var l=Math.abs,s=String.prototype.toLowerCase,f=String.prototype.toUpperCase,u=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,y=/\.0$/,b=/\.0*e/,w=/(\..*[^0])0*e/;function v(e){var r,i,n=parseFloat(e.arg);if(!isFinite(n)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+i);n=e.arg}switch(e.specifier){case"e":case"E":i=n.toExponential(e.precision);break;case"f":case"F":i=n.toFixed(e.precision);break;case"g":case"G":l(n)<1e-4?((r=e.precision)>0&&(r-=1),i=n.toExponential(r)):i=n.toPrecision(e.precision),e.alternate||(i=u.call(i,w,"$1e"),i=u.call(i,b,"e"),i=u.call(i,y,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=u.call(i,p,"e+0$1"),i=u.call(i,g,"e-0$1"),e.alternate&&(i=u.call(i,d,"$1."),i=u.call(i,h,"$1.e")),n>=0&&e.sign&&(i=e.sign+i),i=e.specifier===f.call(e.specifier)?f.call(i):s.call(i)}function m(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var _=String.fromCharCode,E=isNaN,S=Array.isArray;function k(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function N(e){var r,t,i,a,o,l,s,f,u,p,g,d,h;if(!S(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",s=1,f=0;f<e.length;f++)if("string"==typeof(i=e[f]))l+=i;else{if(r=void 0!==i.precision,!(i=k(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+i+"`.");for(i.mapping&&(s=i.mapping),t=i.flags,u=0;u<t.length;u++)switch(a=t.charAt(u)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[s],10),s+=1,E(i.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[s],10),s+=1,E(i.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[s],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=c(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!E(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=E(o)?String(i.arg):_(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=v(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=n(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=(p=i.arg,g=i.width,d=i.padRight,h=void 0,(h=g-p.length)<0?p:p=d?p+m(h):m(h)+p)),l+=i.arg||"",s+=1}return l}var j=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function T(e){var r,t,i,n;for(t=[],n=0,i=j.exec(e);i;)(r=e.slice(n,j.lastIndex-i[0].length)).length&&t.push(r),t.push(x(i)),n=j.lastIndex,i=j.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function F(e){var r,t;if("string"!=typeof e)throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[T(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return N.apply(null,r)}var I=Object.prototype,A=I.toString,O=I.__defineGetter__,V=I.__defineSetter__,P=I.__lookupGetter__,$=I.__lookupSetter__,C=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===A.call(e))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===A.call(t))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(P.call(e,r)||$.call(e,r)?(i=e.__proto__,e.__proto__=I,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&O&&O.call(e,r,t.get),o&&V&&V.call(e,r,t.set),e};function R(e,r,t){C(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function G(e){return"number"==typeof e}var Z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return Z&&"symbol"==typeof Symbol.toStringTag}var H=Object.prototype.toString,L=Object.prototype.hasOwnProperty,U="function"==typeof Symbol?Symbol:void 0,M="function"==typeof U?U.toStringTag:"",X=W()?function(e){var r,t,i,n,a;if(null==e)return H.call(e);t=e[M],a=M,r=null!=(n=e)&&L.call(n,a);try{e[M]=void 0}catch(r){return H.call(e)}return i=H.call(e),r?e[M]=t:delete e[M],i}:function(e){return H.call(e)},Y=Number,z=Y.prototype.toString,B=W();function q(e){return"object"==typeof e&&(e instanceof Y||(B?function(e){try{return z.call(e),!0}catch(e){return!1}}(e):"[object Number]"===X(e)))}function D(e){return G(e)||q(e)}R(D,"isPrimitive",G),R(D,"isObject",q);var J=Number.POSITIVE_INFINITY,K=Y.NEGATIVE_INFINITY,Q=Math.floor;function ee(e){return e<J&&e>K&&Q(r=e)===r;var r}function re(e){return G(e)&&ee(e)}function te(e){return q(e)&&ee(e.valueOf())}function ie(e){return re(e)||te(e)}function ne(e){return re(e)&&e>0}function ae(e){return te(e)&&e.valueOf()>0}function oe(e){return ne(e)||ae(e)}function ce(e){return e!=e}R(ie,"isPrimitive",re),R(ie,"isObject",te),R(oe,"isPrimitive",ne),R(oe,"isObject",ae);var le="function"==typeof Float64Array,se="function"==typeof Float64Array?Float64Array:null,fe="function"==typeof Float64Array?Float64Array:void 0,ue=function(){var e,r,t;if("function"!=typeof se)return!1;try{r=new se([1,3.14,-3.14,NaN]),t=r,e=(le&&t instanceof Float64Array||"[object Float64Array]"===X(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?fe:function(){throw new Error("not implemented")};function pe(){var e,r=arguments,t="https://stdlib.io/e/"+r[0]+"?";for(e=1;e<r.length;e++)t+="&arg[]="+encodeURIComponent(r[e]);return t}return function(e,r,t){var i,n,a,o,c,l,s,f,u,p,g,d;if(!ne(e))throw new TypeError(pe("1Hf4b",e));if(i=new ue(2*e),g=e-1,u=0,f=-1,p=0,arguments.length>1){if(!G(r))throw new TypeError(pe("1Hf4A",r));if(!G(t))throw new TypeError(pe("1Hf4B",t));return l=r,s=t,function(r,t){var n,a;if(0===arguments.length)return 0===p?null:p<e?u/p:u/e;if(d=2*(f=(f+1)%e),ce(r)||ce(t))p=e,u=NaN;else{if(p<e)return i[d]=r,i[d+1]=t,(u+=(r-l)*(t-s))/(p+=1);if(ce(i[d])||ce(i[d+1])){for(u=0,n=0;n<e;n++)if((a=2*n)!==d){if(ce(i[a])||ce(i[a+1])){p=e,u=NaN;break}u+=(i[a]-l)*(i[a+1]-s)}}else!1===ce(u)&&(u+=(r-l)*(t-s)-(i[d]-l)*(i[d+1]-s))}return i[d]=r,i[d+1]=t,u/e}}return l=0,s=0,function(r,t){var h,y,b,w;if(0===arguments.length)return 0===p?null:1===p?0:p<e?u/(p-1):u/g;if(d=2*(f=(f+1)%e),ce(r)||ce(t))p=e,u=NaN;else{if(p<e)return i[d]=r,i[d+1]=t,l+=(a=r-l)/(p+=1),u+=a*(t-(s+=(t-s)/p)),1===p?0:u/(p-1);if(1===p)return 0;if(ce(i[d])||ce(i[d+1])){for(p=1,l=r,s=t,u=0,b=0;b<e;b++)if((w=2*b)!==d){if(h=i[w],y=i[w+1],ce(h)||ce(y)){p=e,u=NaN;break}l+=(a=h-l)/(p+=1),u+=a*(y-(s+=(y-s)/p))}}else!1===ce(u)&&(n=i[d]-l,o=i[d+1]-s,u+=(a=r-l)*(c=t-s)-n*o-(a-n)*(c-o)/e,l+=(a-n)/e,s+=(c-o)/e)}return i[d]=r,i[d+1]=t,u/g}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).incrmcovariance=r();
//# sourceMappingURL=index.js.map
