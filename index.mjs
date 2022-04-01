// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";var s=e.isPrimitive,a=r.isPrimitive,m=t,f=i,u=n;var l=function(e,r,t){var i,n,l,o,d,h,g,v,p,j,b,c;if(!s(e))throw new TypeError(u("invalid argument. First argument must be a positive integer. Value: `%s`.",e));if(i=new f(2*e),b=e-1,p=0,v=-1,j=0,arguments.length>1){if(!a(r))throw new TypeError(u("invalid argument. Second argument must be a number. Value: `%s`.",r));if(!a(t))throw new TypeError(u("invalid argument. Third argument must be a number. Value: `%s`.",t));return h=r,g=t,w}return h=0,g=0,N;function N(r,t){var s,a,f,u;if(0===arguments.length)return 0===j?null:1===j?0:j<e?p/(j-1):p/b;if(c=2*(v=(v+1)%e),m(r)||m(t))j=e,p=NaN;else{if(j<e)return i[c]=r,i[c+1]=t,h+=(l=r-h)/(j+=1),p+=l*(t-(g+=(t-g)/j)),1===j?0:p/(j-1);if(1===j)return 0;if(m(i[c])||m(i[c+1])){for(j=1,h=r,g=t,p=0,f=0;f<e;f++)if((u=2*f)!==c){if(s=i[u],a=i[u+1],m(s)||m(a)){j=e,p=NaN;break}h+=(l=s-h)/(j+=1),p+=l*(a-(g+=(a-g)/j))}}else!1===m(p)&&(n=i[c]-h,o=i[c+1]-g,p+=(l=r-h)*(d=t-g)-n*o-(l-n)*(d-o)/e,h+=(l-n)/e,g+=(d-o)/e)}return i[c]=r,i[c+1]=t,p/b}function w(r,t){var n,s;if(0===arguments.length)return 0===j?null:j<e?p/j:p/e;if(c=2*(v=(v+1)%e),m(r)||m(t))j=e,p=NaN;else{if(j<e)return i[c]=r,i[c+1]=t,(p+=(r-h)*(t-g))/(j+=1);if(m(i[c])||m(i[c+1])){for(p=0,n=0;n<e;n++)if((s=2*n)!==c){if(m(i[s])||m(i[s+1])){j=e,p=NaN;break}p+=(i[s]-h)*(i[s+1]-g)}}else!1===m(p)&&(p+=(r-h)*(t-g)-(i[c]-h)*(i[c+1]-g))}return i[c]=r,i[c+1]=t,p/e}};export{l as default};
//# sourceMappingURL=index.mjs.map
