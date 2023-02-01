// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";function n(n,f,o){var d,m,l,a,j,h,p,u,g,v,b,N;if(!r(n))throw new TypeError(s("0dj4o",n));if(d=new i(2*n),b=n-1,g=0,u=-1,v=0,arguments.length>1){if(!e(f))throw new TypeError(s("0dj4N",f));if(!e(o))throw new TypeError(s("0dj4O",o));return h=f,p=o,w}return h=0,p=0,c;function c(r,e){var i,s,f,o;if(0===arguments.length)return 0===v?null:1===v?0:v<n?g/(v-1):g/b;if(N=2*(u=(u+1)%n),t(r)||t(e))v=n,g=NaN;else{if(v<n)return d[N]=r,d[N+1]=e,h+=(l=r-h)/(v+=1),g+=l*(e-(p+=(e-p)/v)),1===v?0:g/(v-1);if(1===v)return 0;if(t(d[N])||t(d[N+1])){for(v=1,h=r,p=e,g=0,f=0;f<n;f++)if((o=2*f)!==N){if(i=d[o],s=d[o+1],t(i)||t(s)){v=n,g=NaN;break}h+=(l=i-h)/(v+=1),g+=l*(s-(p+=(s-p)/v))}}else!1===t(g)&&(m=d[N]-h,a=d[N+1]-p,g+=(l=r-h)*(j=e-p)-m*a-(l-m)*(j-a)/n,h+=(l-m)/n,p+=(j-a)/n)}return d[N]=r,d[N+1]=e,g/b}function w(r,e){var i,s;if(0===arguments.length)return 0===v?null:v<n?g/v:g/n;if(N=2*(u=(u+1)%n),t(r)||t(e))v=n,g=NaN;else{if(v<n)return d[N]=r,d[N+1]=e,(g+=(r-h)*(e-p))/(v+=1);if(t(d[N])||t(d[N+1])){for(g=0,i=0;i<n;i++)if((s=2*i)!==N){if(t(d[s])||t(d[s+1])){v=n,g=NaN;break}g+=(d[s]-h)*(d[s+1]-p)}}else!1===t(g)&&(g+=(r-h)*(e-p)-(d[N]-h)*(d[N+1]-p))}return d[N]=r,d[N+1]=e,g/n}}export{n as default};
//# sourceMappingURL=index.mjs.map
