import{_ as y}from"./nuxt-link.XV5xgCVX.js";import{_ as v}from"./Icon.0HpKpskI.js";import{d as x,s as _,J as n,M as i,a3 as d,b as a,c as w,D as s,w as C,f as l,n as p,Z as e,P as I,e as A}from"./entry.djYKtQCD.js";import{u as B}from"./useUI.2SCCV8L2.js";import{r as D}from"./slot.37hHZvv-.js";import"./Icon.IcMi31G0.js";import"./index.hPcBRl07.js";import"./_plugin-vue_export-helper.x3n3nnut.js";import"./node.uMQX-T_c.js";const L=A("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1),M=x({inheritAttrs:!1,__name:"Callout",props:{icon:{default:void 0},color:{default:"primary"},to:{default:void 0},target:{default:void 0},ui:{default:()=>({})},class:{default:void 0}},setup(u){const m=_(),g=n(()=>({wrapper:"block pl-4 pr-6 py-3 rounded-md border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm/6 my-5 last:mb-0 font-normal group relative prose-code:bg-white dark:prose-code:bg-gray-900",to:"hover:border-[--color-light] dark:hover:border-[--color-dark] hover:text-[--color-light] dark:hover:text-[--color-dark] border-dashed hover:border-solid hover:text-gray-800 dark:hover:text-gray-200",icon:{base:"w-4 h-4 mr-2 inline-flex items-center align-sub text-[--color-light] dark:text-[--color-dark]"},externalIcon:{name:m.ui.icons.external,base:"w-4 h-4 absolute right-2 top-2 text-gray-400 dark:text-gray-500 group-hover:text-[--color-light] dark:group-hover:text-[--color-dark]"}})),o=u,{ui:t,attrs:f}=B("content.callout",i(o,"ui"),g,i(o,"class"),!0),b=n(()=>{var r;return o.color==="primary"?"rgb(var(--color-primary-DEFAULT))":((r=d[o.color])==null?void 0:r["500"])||o.color}),h=n(()=>{var r;return o.color==="primary"?"rgb(var(--color-primary-DEFAULT))":((r=d[o.color])==null?void 0:r["400"])||o.color});return(r,U)=>{const k=y,c=v;return a(),w("div",I({class:[e(t).wrapper,r.to&&e(t).to]},e(f),{style:{"--color-light":e(b),"--color-dark":e(h)}}),[r.to?(a(),s(k,{key:0,to:r.to,target:r.target,class:"focus:outline-none",tabindex:"-1"},{default:C(()=>[L]),_:1},8,["to","target"])):l("",!0),r.icon?(a(),s(c,{key:1,name:r.icon,class:p(e(t).icon.base)},null,8,["name","class"])):l("",!0),r.to&&r.target==="_blank"?(a(),s(c,{key:2,name:e(t).externalIcon.name,class:p(e(t).externalIcon.base)},null,8,["name","class"])):l("",!0),D(r.$slots,"default",{unwrap:"p"})],16)}}});export{M as default};