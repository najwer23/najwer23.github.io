import{j as e,r as m}from"./react-jhRHcHRD.js";function _(o,r){r===void 0&&(r={});var i=r.insertAt;if(o&&typeof document<"u"){var n=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",i==="top"&&n.firstChild?n.insertBefore(t,n.firstChild):n.appendChild(t),t.styleSheet?t.styleSheet.cssText=o:t.appendChild(document.createTextNode(o))}}var M={pText:"index-module_pText__vULqQ",h1Text:"index-module_h1Text__4-aaU",h2Text:"index-module_h2Text__MaLTy",h3Text:"index-module_h3Text__DM5Du"};_("@layer n23Text{.index-module_pText__vULqQ{& p{text-wrap:balance;color:var(--n23-color-font);font-family:var(--n23-font-family);font-size:clamp(1.125rem,.664vw + .953rem,1.75rem);font-weight:var(--n23-font-weight-normal);line-height:clamp(1.688rem,.624vw + 1.526rem,2.275rem);margin-bottom:15px;margin-top:15px;max-width:900px}}.index-module_h1Text__4-aaU{& h1{text-wrap:balance;color:var(--n23-color-font);font-family:var(--n23-font-family);font-size:clamp(3.25rem,3.187vw + 2.425rem,6.25rem);font-weight:var(--n23-font-weight-bold);line-height:clamp(3.575rem,4.834vw + 2.324rem,8.125rem);margin-bottom:15px;margin-top:15px;max-width:900px}}.index-module_h2Text__MaLTy{& h2{text-wrap:balance;color:var(--n23-color-font);font-family:var(--n23-font-family);font-size:clamp(3.75rem,1.66vw + 3.32rem,5.313rem);font-weight:var(--n23-font-weight-bold);line-height:clamp(5.625rem,1.361vw + 5.273rem,6.906rem);margin-bottom:15px;margin-top:15px;max-width:900px}}.index-module_h3Text__DM5Du{& h3{text-wrap:balance;color:var(--n23-color-font);font-family:var(--n23-font-family);font-size:clamp(1.875rem,1.992vw + 1.36rem,3.75rem);font-weight:var(--n23-font-weight-bold);line-height:clamp(2.813rem,2.191vw + 2.246rem,4.875rem);margin-bottom:15px;margin-top:15px;max-width:900px}}}");const U=({kind:o,children:r})=>{const i={p:e.jsx("p",{children:r}),h1:e.jsx("h1",{children:r}),h2:e.jsx("h2",{children:r}),h3:e.jsx("h3",{children:r}),default:r};return e.jsx("div",{className:M[`${o}Text`],children:i[o??"default"]})};function w(o,r){var i={};for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&r.indexOf(n)<0&&(i[n]=o[n]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function"){var t=0;for(n=Object.getOwnPropertySymbols(o);t<n.length;t++)r.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(o,n[t])&&(i[n[t]]=o[n[t]])}return i}const j=(o,r)=>Object.keys(Object.fromEntries(Object.entries(r).filter(([,i])=>i))).map(i=>{let n;switch(i){case"empty":n=L(o);break;case"email":n=T(o);break;default:n=null}return n}).filter(i=>i!==null),L=o=>o.trim()===""||o.trim()===null?"The field cannot be empty":null,T=o=>/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(o)?null:"Incorrect email address";var z="index-module_inputWrapper__WiEXy",O="index-module_inputLabel__UF-s8",E="index-module_inputInput__GFhoE",W="index-module_inputError__U10AO";_("@layer n23Input{.index-module_inputWrapper__WiEXy{margin-bottom:18px;margin-top:0}.index-module_inputLabel__UF-s8{color:var(--n23-color-font);font-family:var(--n23-font-family);font-size:var(--n23-font-size-semi-small);font-weight:var(--n23-font-weight-semi-bold);line-height:22px}.index-module_inputInput__GFhoE{& input{border:1px solid var(--n23-color-font);box-sizing:border-box;color:var(--n23-color-font);font-family:var(--n23-font-family);font-size:var(--n23-font-size-normal);font-weight:var(--n23-font-weight-normal);height:40px;padding:20px 10px;width:100%}& ::placeholder{filter:brightness(150%);font-weight:var(--n23-font-weight-thin)}}.index-module_inputError__U10AO{color:var(--n23-color-error);font-family:var(--n23-font-family);font-size:var(--n23-font-size-small);font-weight:var(--n23-font-weight-normal);line-height:1;margin:2px}}");const C=o=>{var{name:r,placeholder:i,type:n,onBlur:t,label:l,readonly:d=!1,errorOptions:a,defaultValue:s,innerRef:h}=o,f=w(o,["name","placeholder","type","onBlur","label","readonly","errorOptions","defaultValue","innerRef"]);const[c,p]=m.useState(null);return e.jsxs("div",{className:z,children:[e.jsx("div",{className:O,children:e.jsx("label",{htmlFor:r,children:l})}),e.jsx("div",{className:E,children:e.jsx("input",Object.assign({ref:h,defaultValue:s,id:r,name:r,type:n,onBlur:v=>{if(t!==void 0){let g=!1;if(p(null),a){const y=j(v.target.value,a);y.length>0&&(p(y[0]),g=!0)}t(v,g)}},placeholder:i,readOnly:d},f))}),e.jsx("div",{className:W,children:c&&c})]})};var N="index-module_inputWrapper__62rwQ",S="index-module_inputLabel__QQ89c",$="index-module_inputInput__1EeVQ",B="index-module_inputError__mgnEr";_("@layer n23Textarea{.index-module_inputWrapper__62rwQ{margin-bottom:18px;margin-top:0}.index-module_inputLabel__QQ89c{color:var(--n23-color-font);font-family:var(--n23-font-family);font-size:var(--n23-font-size-semi-small);font-weight:var(--n23-font-weight-semi-bold);line-height:22px}.index-module_inputInput__1EeVQ{display:grid;& textarea{border:1px solid var(--n23-color-font);box-sizing:border-box;color:var(--n23-color-font);font-family:var(--n23-font-family);font-size:var(--n23-font-size-normal);font-weight:var(--n23-font-weight-normal);max-height:400px;min-height:200px;min-width:100%;padding:10px;resize:vertical;width:100%}& ::placeholder{filter:brightness(150%);font-weight:var(--n23-font-weight-thin)}}.index-module_inputError__mgnEr{color:var(--n23-color-error);font-family:var(--n23-font-family);font-size:var(--n23-font-size-small);font-weight:var(--n23-font-weight-normal);line-height:1;margin:2px}}");const I=o=>{var{name:r,placeholder:i,onBlur:n,label:t,readonly:l=!1,errorOptions:d,defaultValue:a,innerRef:s}=o,h=w(o,["name","placeholder","onBlur","label","readonly","errorOptions","defaultValue","innerRef"]);const[f,c]=m.useState(null);return e.jsxs("div",{className:N,children:[e.jsx("div",{className:S,children:e.jsx("label",{htmlFor:r,children:t})}),e.jsx("div",{className:$,children:e.jsx("textarea",Object.assign({ref:s,defaultValue:a,id:r,name:r,onBlur:p=>{if(n!==void 0){let v=!1;if(c(null),d){const g=j(p.target.value,d);g.length>0&&(c(g[0]),v=!0)}n(p,v)}},placeholder:i,readOnly:l},h))}),e.jsx("div",{className:B,children:f&&f})]})};var R={standard:"index-module_standard__meYB0"};_("@layer n23Button{.index-module_standard__meYB0{-webkit-touch-callout:none;-webkit-tap-highlight-color:rgba(0,0,0,0);background-color:var(--n23-color-primary);border:unset;border-radius:8px;color:var(--n23-color-surface);cursor:pointer;font-family:var(--n23-font-family);font-size:var(--n23-font-size-normal);font-weight:var(--n23-font-weight-normal);letter-spacing:normal;padding:10px 17px;transition:.2s;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;@media (hover:hover) and (pointer:fine){&:hover{background-color:var(--n23-color-on-primary);box-shadow:var(--n23-shadow)}}&:active{background-color:var(--n23-color-on-primary-active)}&:focus-visible{background-color:var(--n23-grey);outline:2px solid var(--n23-color-on-primary)}&:disabled{background-color:var(--n23-grey);cursor:not-allowed}}}");const b=o=>{var{ariaLabel:r,type:i,text:n,disabled:t=!1}=o,l=w(o,["ariaLabel","type","text","disabled"]);return e.jsx("button",Object.assign({type:i,className:[R.standard].join(" "),disabled:t,"aria-label":r},l,{children:n}))},k=()=>{const[o,r]=m.useState([0,0]);return m.useLayoutEffect(()=>{function i(){o[0]!=window.innerWidth&&r([window.innerWidth,window.innerHeight])}return window.addEventListener("resize",i),i(),()=>window.removeEventListener("resize",i)},[o]),o};var x={carouselStyled:"index-module_carouselStyled__eQzEN",carouselWrapper:"index-module_carouselWrapper__h-oPp",arrowLeft:"index-module_arrowLeft__LWLt-",arrowRight:"index-module_arrowRight__wkoS4",arrowShow:"index-module_arrowShow__RziHP"};_("@layer n23Carouel{.index-module_carouselStyled__eQzEN{-ms-overflow-style:none;-webkit-overflow-scrolling:touch;display:flex;flex-wrap:nowrap;gap:60px;margin-bottom:20px;overflow-x:scroll;scroll-behavior:smooth;scrollbar-width:none;&::-webkit-scrollbar{display:none}&>*{flex-shrink:0}}.index-module_carouselWrapper__h-oPp{display:grid;position:relative}.index-module_arrowLeft__LWLt-{display:none;left:20px;position:absolute;top:calc(50% - 25px);@media (max-width:767.98px){display:none}}.index-module_arrowRight__wkoS4{display:none;position:absolute;right:20px;top:calc(50% - 25px);@media (max-width:767.98px){display:none}}.index-module_arrowShow__RziHP{display:block;@media (max-width:767.98px){display:none}}}");const F=({children:o,arrowLeftIcon:r,arrowRightIcon:i})=>{const n=m.useRef(null),[t,l]=m.useState(!1),[d,a]=m.useState(!1),[s]=k(),h=()=>{var c,p;return((c=n.current)===null||c===void 0?void 0:c.scrollWidth)/(((p=n.current)===null||p===void 0?void 0:p.childNodes.length)-2)};m.useEffect(()=>{let c=setTimeout(()=>{f()},1);return()=>clearTimeout(c)},[s]);const f=()=>{n.current.scrollLeft<=0?(l(!1),n.current.scrollWidth-n.current.clientWidth!=0?a(!0):a(!1)):n.current.scrollLeft>=n.current.scrollWidth-n.current.clientWidth?(l(!0),a(!1)):(l(!0),a(!0))};return e.jsx("div",{className:x.carouselWrapper,children:e.jsxs("div",{className:x.carouselStyled,ref:n,onScroll:f,children:[e.jsx("div",{className:[x.arrowLeft,t&&x.arrowShow].join(" "),children:e.jsx(b,{text:r,ariaLabel:"move carousel left",type:"button",onClick:()=>{n.current.scrollLeft-=Math.floor(n.current.offsetWidth/h())*h()}})}),o,e.jsx("div",{className:[x.arrowRight,d&&x.arrowShow].join(" "),children:e.jsx(b,{text:i,ariaLabel:"move carousel right",type:"button",onClick:()=>{n.current.scrollLeft+=Math.floor(n.current.offsetWidth/h())*h()}})})]})})};var u={asideMenuWrapper:"index-module_asideMenuWrapper__YLCDi",asideMenu:"index-module_asideMenu__l-Oi-",asideMenuMobile:"index-module_asideMenuMobile__9kUck",open:"index-module_open__-MovH",asideMenuMobileButton:"index-module_asideMenuMobileButton__9EXG4",menuOpen:"index-module_menuOpen__AvLfk",asideMenuTitle:"index-module_asideMenuTitle__wr6hW"};_("@layer n23AsideMenu{.index-module_asideMenuWrapper__YLCDi{height:100vh;width:400px;@media (max-width:1199.98px){display:none}}.index-module_asideMenu__l-Oi-{-ms-overflow-style:none;-webkit-overflow-scrolling:touch;background-color:var(--n23-color-primary);border-right:3px solid var(--n23-color-font);overflow:auto;padding:50px;scrollbar-width:none;width:400px;&::-webkit-scrollbar{display:none}@media (max-width:1199.98px){display:none}& ul{all:unset;list-style-type:none}& ul li{border-bottom:1px solid var(--n23-color-font-asideMenu);font-size:var(--n23-font-size-big);font-weight:var(--n23-font-weight-bold);margin-bottom:20px;padding-bottom:20px;transition:.2s;& a{all:unset;color:var(--n23-color-font-asideMenu);cursor:pointer;display:inline-block;width:100%;@media (hover:hover) and (pointer:fine){&:hover{filter:brightness(85%)}}&:active{background-color:var(--n23-color-primary);filter:brightness(100%)}&:focus-visible{filter:brightness(100%);outline:2px solid var(--n23-color-on-primary)}}}& ul li:last-child{margin-bottom:100px}}.index-module_asideMenuMobile__9kUck,.index-module_asideMenu__l-Oi-{box-sizing:border-box;font-family:var(--n23-font-family);height:100vh;position:fixed}.index-module_asideMenuMobile__9kUck{background-color:var(--n23-color-on-secondary);display:none;overflow:auto;padding:100px 20px 150px;width:100vw;z-index:8;@media (min-width:576px){padding-bottom:150px;padding-left:50px;padding-right:50px;padding-top:100px}& ul{all:unset;list-style-type:none}& ul li{font-size:var(--n23-font-size-big);font-weight:var(--n23-font-weight-normal);margin-bottom:10px;padding-bottom:10px;text-align:left;transition:.2s;& a{all:unset;color:var(--n23-color-font-asideMenu);cursor:pointer;display:inline-block;width:100%;&:active{filter:brightness(85%)}&:focus-visible{filter:brightness(100%)}}}& ul li:last-child{margin-bottom:100px}}@media (max-width:1199.98px){.index-module_asideMenuMobile__9kUck.index-module_open__-MovH{display:block}}.index-module_asideMenuMobileButton__9EXG4{bottom:40px;display:none;left:calc(100% - 116px);position:fixed;right:0;z-index:9;@media (max-width:1199.98px){&{display:block}}}.index-module_menuOpen__AvLfk{overflow:hidden}.index-module_asideMenuTitle__wr6hW{color:var(--n23-color-font-asideMenu);font-family:var(--n23-font-family);font-size:var(--n23-font-size-bigger);font-weight:var(--n23-font-weight-bold);letter-spacing:4px;letter-spacing:10px;margin-bottom:40px;text-transform:uppercase;word-spacing:8px}}");const V=({menuItems:o})=>{const[r,i]=m.useState(!1),[n]=k();return m.useEffect(()=>{n>=1199.98&&(i(!1),document.body.classList.remove(u.menuOpen))},[n]),m.useEffect(()=>{r?document.body.classList.add(u.menuOpen):document.body.classList.remove(u.menuOpen)},[r]),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:[u.asideMenuWrapper].join(" "),children:e.jsx("div",{className:[u.asideMenu].join(" "),children:o&&o.map(t=>t.map(l=>e.jsxs(m.Fragment,{children:[e.jsx("div",{className:u.asideMenuTitle,children:l.menuTitle}),e.jsx("ul",{children:l.items.map(({itemLinkText:d,itemLink:a,itemLinkType:s})=>e.jsxs("li",{children:[s==="hash"&&e.jsxs("a",{href:`/#/${a}`,children:[" ",d]}),s==="link"&&e.jsxs("a",{href:`/${a}`,children:[" ",d]}),s==="linkOut"&&e.jsxs("a",{target:"_blank",rel:"noopener noreferrer",href:`${a}`,children:[" ",d]})]},`desktopMenu-${l.menuTitle}-${d}`))})]},`desktop${l.menuTitle}`)))})}),e.jsx("div",{className:[u.asideMenuMobile,r&&u.open].join(" "),children:o&&o.map(t=>t.map(l=>e.jsxs(m.Fragment,{children:[e.jsx("div",{className:u.asideMenuTitle,children:l.menuTitle}),e.jsx("ul",{children:l.items.map(({itemLinkText:d,itemLink:a,itemLinkType:s})=>e.jsxs("li",{onClick:()=>{i(!1)},children:[s==="hash"&&e.jsxs("a",{href:`/#/${a}`,children:[" ",d]}),s==="link"&&e.jsxs("a",{href:`/${a}`,children:[" ",d]}),s==="linkOut"&&e.jsxs("a",{target:"_blank",rel:"noopener noreferrer",href:`${a}`,children:[" ",d]})]},`MobileMenu-${l.menuTitle}-${d}`))})]},`mobile${l.menuTitle}`)))}),e.jsx("div",{className:[u.asideMenuMobileButton,r&&u.open].join(" "),children:e.jsx(b,{text:"Menu",type:"button",ariaLabel:r?"close menu":"open menu",onClick:()=>{i(!r)}})})]})};export{I as a,F as c,C as f,V as m,b as n,U as r};