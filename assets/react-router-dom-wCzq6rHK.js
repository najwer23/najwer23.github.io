import{r,a as M}from"./react-jhRHcHRD.js";import{R as k}from"./react-dom-TKT-5Ts1.js";import{m as z,D as A,a as N,R as B,u as Y}from"./react-router-q2-PW7Oz.js";import{c as q,b as G,E as J}from"./@remix-run-a-qAAUSd.js";/**
 * React Router DOM v6.21.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function E(){return E=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t},E.apply(this,arguments)}function oe(t,n){return q({basename:n==null?void 0:n.basename,future:E({},n==null?void 0:n.future,{v7_prependBasename:!0}),history:G({window:n==null?void 0:n.window}),hydrationData:(n==null?void 0:n.hydrationData)||K(),routes:t,mapRouteProperties:z,window:n==null?void 0:n.window}).initialize()}function K(){var t;let n=(t=window)==null?void 0:t.__staticRouterHydrationData;return n&&n.errors&&(n=E({},n,{errors:Q(n.errors)})),n}function Q(t){if(!t)return null;let n=Object.entries(t),e={};for(let[a,i]of n)if(i&&i.__type==="RouteErrorResponse")e[a]=new J(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let l=window[i.__subType];if(typeof l=="function")try{let u=new l(i.message);u.stack="",e[a]=u}catch{}}if(e[a]==null){let l=new Error(i.message);l.stack="",e[a]=l}}else e[a]=i;return e}const W=r.createContext({isTransitioning:!1}),X=r.createContext(new Map),Z="startTransition",D=M[Z],$="flushSync",I=k[$];function ee(t){D?D(t):t()}function S(t){I?I(t):t()}class te{constructor(){this.status="pending",this.promise=new Promise((n,e)=>{this.resolve=a=>{this.status==="pending"&&(this.status="resolved",n(a))},this.reject=a=>{this.status==="pending"&&(this.status="rejected",e(a))}})}}function le(t){let{fallbackElement:n,router:e,future:a}=t,[i,l]=r.useState(e.state),[u,T]=r.useState(),[m,h]=r.useState({isTransitioning:!1}),[o,b]=r.useState(),[p,y]=r.useState(),[w,L]=r.useState(),g=r.useRef(new Map),{v7_startTransition:C}=a||{},R=r.useCallback(s=>{C?ee(s):s()},[C]),P=r.useCallback((s,f)=>{let{deletedFetchers:c,unstable_flushSync:F,unstable_viewTransitionOpts:d}=f;c.forEach(v=>g.current.delete(v)),s.fetchers.forEach((v,H)=>{v.data!==void 0&&g.current.set(H,v.data)});let j=e.window==null||typeof e.window.document.startViewTransition!="function";if(!d||j){F?S(()=>l(s)):R(()=>l(s));return}if(F){S(()=>{p&&(o&&o.resolve(),p.skipTransition()),h({isTransitioning:!0,flushSync:!0,currentLocation:d.currentLocation,nextLocation:d.nextLocation})});let v=e.window.document.startViewTransition(()=>{S(()=>l(s))});v.finished.finally(()=>{S(()=>{b(void 0),y(void 0),T(void 0),h({isTransitioning:!1})})}),S(()=>y(v));return}p?(o&&o.resolve(),p.skipTransition(),L({state:s,currentLocation:d.currentLocation,nextLocation:d.nextLocation})):(T(s),h({isTransitioning:!0,flushSync:!1,currentLocation:d.currentLocation,nextLocation:d.nextLocation}))},[e.window,p,o,g,R]);r.useLayoutEffect(()=>e.subscribe(P),[e,P]),r.useEffect(()=>{m.isTransitioning&&!m.flushSync&&b(new te)},[m]),r.useEffect(()=>{if(o&&u&&e.window){let s=u,f=o.promise,c=e.window.document.startViewTransition(async()=>{R(()=>l(s)),await f});c.finished.finally(()=>{b(void 0),y(void 0),T(void 0),h({isTransitioning:!1})}),y(c)}},[R,u,o,e.window]),r.useEffect(()=>{o&&u&&i.location.key===u.location.key&&o.resolve()},[o,p,i.location,u]),r.useEffect(()=>{!m.isTransitioning&&w&&(T(w.state),h({isTransitioning:!0,flushSync:!1,currentLocation:w.currentLocation,nextLocation:w.nextLocation}),L(void 0))},[m.isTransitioning,w]),r.useEffect(()=>{},[]);let x=r.useMemo(()=>({createHref:e.createHref,encodeLocation:e.encodeLocation,go:s=>e.navigate(s),push:(s,f,c)=>e.navigate(s,{state:f,preventScrollReset:c==null?void 0:c.preventScrollReset}),replace:(s,f,c)=>e.navigate(s,{replace:!0,state:f,preventScrollReset:c==null?void 0:c.preventScrollReset})}),[e]),_=e.basename||"/",V=r.useMemo(()=>({router:e,navigator:x,static:!1,basename:_}),[e,x,_]);return r.createElement(r.Fragment,null,r.createElement(A.Provider,{value:V},r.createElement(N.Provider,{value:i},r.createElement(X.Provider,{value:g.current},r.createElement(W.Provider,{value:m},r.createElement(B,{basename:_,location:i.location,navigationType:i.historyAction,navigator:x,future:{v7_relativeSplatPath:e.future.v7_relativeSplatPath}},i.initialized||e.future.v7_partialHydration?r.createElement(ne,{routes:e.routes,future:e.future,state:i}):n))))),null)}function ne(t){let{routes:n,future:e,state:a}=t;return Y(n,void 0,a,e)}var O;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(O||(O={}));var U;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(U||(U={}));export{le as R,oe as c};