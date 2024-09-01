// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function i(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function n(r,e,t){var n=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+i(a):i(a)+r,n&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,i,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(i=r.arg,c=parseInt(i,10),!isFinite(c)){if(!t(i))throw new Error("invalid integer. Value: "+i);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(i=(-c).toString(e),r.precision&&(i=n(i,r.precision,r.padRight)),i="-"+i):(i=c.toString(e),c||r.precision?r.precision&&(i=n(i,r.precision,r.padRight)):i="",r.sign&&(i=r.sign+i)),16===e&&(r.alternate&&(i="0x"+i),i=r.specifier===o.call(r.specifier)?o.call(i):a.call(i)),8===e&&r.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}var l=Math.abs,s=String.prototype.toLowerCase,u=String.prototype.toUpperCase,f=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,y=/\.0$/,b=/\.0*e/,v=/(\..*[^0])0*e/;function w(r){var e,i,n=parseFloat(r.arg);if(!isFinite(n)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+i);n=r.arg}switch(r.specifier){case"e":case"E":i=n.toExponential(r.precision);break;case"f":case"F":i=n.toFixed(r.precision);break;case"g":case"G":l(n)<1e-4?((e=r.precision)>0&&(e-=1),i=n.toExponential(e)):i=n.toPrecision(r.precision),r.alternate||(i=f.call(i,v,"$1e"),i=f.call(i,b,"e"),i=f.call(i,y,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return i=f.call(i,p,"e+0$1"),i=f.call(i,g,"e-0$1"),r.alternate&&(i=f.call(i,d,"$1."),i=f.call(i,h,"$1.e")),n>=0&&r.sign&&(i=r.sign+i),i=r.specifier===u.call(r.specifier)?u.call(i):s.call(i)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var _=String.fromCharCode,E=Array.isArray;function S(r){return r!=r}function k(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function j(r){var e,t,i,a,o,l,s,u,f,p,g,d,h;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(l="",s=1,u=0;u<r.length;u++)if(i=r[u],"string"==typeof i)l+=i;else{if(e=void 0!==i.precision,!(i=k(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+i+"`.");for(i.mapping&&(s=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(a=t.charAt(f)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[s],10),s+=1,S(i.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&"*"===i.precision){if(i.precision=parseInt(arguments[s],10),s+=1,S(i.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[s],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=c(i);break;case"s":i.maxWidth=e?i.precision:-1,i.arg=String(i.arg);break;case"c":if(!S(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=S(o)?String(i.arg):_(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=w(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=n(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=(p=i.arg,g=i.width,d=i.padRight,h=void 0,(h=g-p.length)<0?p:p=d?p+m(h):m(h)+p)),l+=i.arg||"",s+=1}return l}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function I(r){var e,t,i,n;for(t=[],n=0,i=x.exec(r);i;)(e=r.slice(n,x.lastIndex-i[0].length)).length&&t.push(e),t.push(F(i)),n=x.lastIndex,i=x.exec(r);return(e=r.slice(n)).length&&t.push(e),t}function N(r){var e,t;if("string"!=typeof r)throw new TypeError(N("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[I(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return j.apply(null,e)}var T=Object.prototype,A=T.toString,O=T.__defineGetter__,V=T.__defineSetter__,P=T.__lookupGetter__,$=T.__lookupSetter__;var C=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var i,n,a,o;if("object"!=typeof r||null===r||"[object Array]"===A.call(r))throw new TypeError(N("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===A.call(t))throw new TypeError(N("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(P.call(r,e)||$.call(r,e)?(i=r.__proto__,r.__proto__=T,delete r[e],r[e]=t.value,r.__proto__=i):r[e]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&O&&O.call(r,e,t.get),o&&V&&V.call(r,e,t.set),r};function R(r,e,t){C(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function G(r){return"number"==typeof r}var Z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return Z&&"symbol"==typeof Symbol.toStringTag}var H=Object.prototype.toString;var L=Object.prototype.hasOwnProperty;var U="function"==typeof Symbol?Symbol:void 0,M="function"==typeof U?U.toStringTag:"";var X=W()?function(r){var e,t,i,n,a;if(null==r)return H.call(r);t=r[M],a=M,e=null!=(n=r)&&L.call(n,a);try{r[M]=void 0}catch(e){return H.call(r)}return i=H.call(r),e?r[M]=t:delete r[M],i}:function(r){return H.call(r)},Y=Number,z=Y.prototype.toString;var B=W();function q(r){return"object"==typeof r&&(r instanceof Y||(B?function(r){try{return z.call(r),!0}catch(r){return!1}}(r):"[object Number]"===X(r)))}function D(r){return G(r)||q(r)}R(D,"isPrimitive",G),R(D,"isObject",q);var J=Number.POSITIVE_INFINITY,K=Y.NEGATIVE_INFINITY,Q=Math.floor;function rr(r){return r<J&&r>K&&Q(e=r)===e;var e}function er(r){return G(r)&&rr(r)}function tr(r){return q(r)&&rr(r.valueOf())}function ir(r){return er(r)||tr(r)}function nr(r){return er(r)&&r>0}function ar(r){return tr(r)&&r.valueOf()>0}function or(r){return nr(r)||ar(r)}function cr(r){return r!=r}R(ir,"isPrimitive",er),R(ir,"isObject",tr),R(or,"isPrimitive",nr),R(or,"isObject",ar);var lr="function"==typeof Float64Array;var sr="function"==typeof Float64Array?Float64Array:null;var ur="function"==typeof Float64Array?Float64Array:void 0;var fr=function(){var r,e,t;if("function"!=typeof sr)return!1;try{e=new sr([1,3.14,-3.14,NaN]),t=e,r=(lr&&t instanceof Float64Array||"[object Float64Array]"===X(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?ur:function(){throw new Error("not implemented")};function pr(){var r,e=arguments,t="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}function gr(r,e,t){var i,n,a,o,c,l,s,u,f,p,g,d;if(!nr(r))throw new TypeError(pr("1Hf4b",r));if(i=new fr(2*r),g=r-1,f=0,u=-1,p=0,arguments.length>1){if(!G(e))throw new TypeError(pr("1Hf4A",e));if(!G(t))throw new TypeError(pr("1Hf4B",t));return l=e,s=t,function(e,t){var n,a;if(0===arguments.length)return 0===p?null:p<r?f/p:f/r;if(d=2*(u=(u+1)%r),cr(e)||cr(t))p=r,f=NaN;else{if(p<r)return i[d]=e,i[d+1]=t,(f+=(e-l)*(t-s))/(p+=1);if(cr(i[d])||cr(i[d+1])){for(f=0,n=0;n<r;n++)if((a=2*n)!==d){if(cr(i[a])||cr(i[a+1])){p=r,f=NaN;break}f+=(i[a]-l)*(i[a+1]-s)}}else!1===cr(f)&&(f+=(e-l)*(t-s)-(i[d]-l)*(i[d+1]-s))}return i[d]=e,i[d+1]=t,f/r}}return l=0,s=0,function(e,t){var h,y,b,v;if(0===arguments.length)return 0===p?null:1===p?0:p<r?f/(p-1):f/g;if(d=2*(u=(u+1)%r),cr(e)||cr(t))p=r,f=NaN;else{if(p<r)return i[d]=e,i[d+1]=t,l+=(a=e-l)/(p+=1),f+=a*(t-(s+=(t-s)/p)),1===p?0:f/(p-1);if(1===p)return 0;if(cr(i[d])||cr(i[d+1])){for(p=1,l=e,s=t,f=0,b=0;b<r;b++)if((v=2*b)!==d){if(h=i[v],y=i[v+1],cr(h)||cr(y)){p=r,f=NaN;break}l+=(a=h-l)/(p+=1),f+=a*(y-(s+=(y-s)/p))}}else!1===cr(f)&&(n=i[d]-l,o=i[d+1]-s,f+=(a=e-l)*(c=t-s)-n*o-(a-n)*(c-o)/r,l+=(a-n)/r,s+=(c-o)/r)}return i[d]=e,i[d+1]=t,f/g}}export{gr as default};
//# sourceMappingURL=mod.js.map
