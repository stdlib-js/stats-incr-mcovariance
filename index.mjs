// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function n(n,f,o){var m,l,d,a,h,u,p,j,v,b,g,c;if(!r(n))throw new TypeError(s("1Hf4b,Ht",n));if(m=new i(2*n),g=n-1,v=0,j=-1,b=0,arguments.length>1){if(!e(f))throw new TypeError(s("1Hf4A,Hr",f));if(!e(o))throw new TypeError(s("1Hf4B,Hu",o));return u=f,p=o,w}return u=0,p=0,N;function N(r,e){var i,s,f,o;if(0===arguments.length)return 0===b?null:1===b?0:b<n?v/(b-1):v/g;if(c=2*(j=(j+1)%n),t(r)||t(e))b=n,v=NaN;else{if(b<n)return m[c]=r,m[c+1]=e,u+=(d=r-u)/(b+=1),v+=d*(e-(p+=(e-p)/b)),1===b?0:v/(b-1);if(1===b)return 0;if(t(m[c])||t(m[c+1])){for(b=1,u=r,p=e,v=0,f=0;f<n;f++)if((o=2*f)!==c){if(i=m[o],s=m[o+1],t(i)||t(s)){b=n,v=NaN;break}u+=(d=i-u)/(b+=1),v+=d*(s-(p+=(s-p)/b))}}else!1===t(v)&&(l=m[c]-u,a=m[c+1]-p,v+=(d=r-u)*(h=e-p)-l*a-(d-l)*(h-a)/n,u+=(d-l)/n,p+=(h-a)/n)}return m[c]=r,m[c+1]=e,v/g}function w(r,e){var i,s;if(0===arguments.length)return 0===b?null:b<n?v/b:v/n;if(c=2*(j=(j+1)%n),t(r)||t(e))b=n,v=NaN;else{if(b<n)return m[c]=r,m[c+1]=e,(v+=(r-u)*(e-p))/(b+=1);if(t(m[c])||t(m[c+1])){for(v=0,i=0;i<n;i++)if((s=2*i)!==c){if(t(m[s])||t(m[s+1])){b=n,v=NaN;break}v+=(m[s]-u)*(m[s+1]-p)}}else!1===t(v)&&(v+=(r-u)*(e-p)-(m[c]-u)*(m[c+1]-p))}return m[c]=r,m[c+1]=e,v/n}}export{n as default};
//# sourceMappingURL=index.mjs.map
