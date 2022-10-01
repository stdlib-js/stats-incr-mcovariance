// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function n(n,f,o){var d,m,l,a,j,h,p,u,v,g,b,N;if(!r(n))throw new TypeError(s("0dj4o",n));if(d=new i(2*n),b=n-1,v=0,u=-1,g=0,arguments.length>1){if(!e(f))throw new TypeError(s("0dj4N",f));if(!e(o))throw new TypeError(s("0dj4O",o));return h=f,p=o,w}return h=0,p=0,c;function c(r,e){var i,s,f,o;if(0===arguments.length)return 0===g?null:1===g?0:g<n?v/(g-1):v/b;if(N=2*(u=(u+1)%n),t(r)||t(e))g=n,v=NaN;else{if(g<n)return d[N]=r,d[N+1]=e,h+=(l=r-h)/(g+=1),v+=l*(e-(p+=(e-p)/g)),1===g?0:v/(g-1);if(1===g)return 0;if(t(d[N])||t(d[N+1])){for(g=1,h=r,p=e,v=0,f=0;f<n;f++)if((o=2*f)!==N){if(i=d[o],s=d[o+1],t(i)||t(s)){g=n,v=NaN;break}h+=(l=i-h)/(g+=1),v+=l*(s-(p+=(s-p)/g))}}else!1===t(v)&&(m=d[N]-h,a=d[N+1]-p,v+=(l=r-h)*(j=e-p)-m*a-(l-m)*(j-a)/n,h+=(l-m)/n,p+=(j-a)/n)}return d[N]=r,d[N+1]=e,v/b}function w(r,e){var i,s;if(0===arguments.length)return 0===g?null:g<n?v/g:v/n;if(N=2*(u=(u+1)%n),t(r)||t(e))g=n,v=NaN;else{if(g<n)return d[N]=r,d[N+1]=e,(v+=(r-h)*(e-p))/(g+=1);if(t(d[N])||t(d[N+1])){for(v=0,i=0;i<n;i++)if((s=2*i)!==N){if(t(d[s])||t(d[s+1])){g=n,v=NaN;break}v+=(d[s]-h)*(d[s+1]-p)}}else!1===t(v)&&(v+=(r-h)*(e-p)-(d[N]-h)*(d[N+1]-p))}return d[N]=r,d[N+1]=e,v/n}}export{n as default};
//# sourceMappingURL=index.mjs.map
