import{K as h,L as g,d as m,M as f,J as u,O as k,P as S,b as v,c as w,R as A,j as b,t as y,Q as x,r as C,o as z,C as E,w as $,$ as l}from"./C0jn_iP-.js";import{u as _}from"./CDeqkKPm.js";import"./BmiLHWM5.js";import{_ as j}from"./DlAUqK2U.js";import{c as O,b as I}from"./CLXQD42q.js";const M={base:"inline-flex items-center justify-center text-gray-900 dark:text-white",padding:"px-1",size:{xs:"h-4 min-w-[16px] text-[10px]",sm:"h-5 min-w-[20px] text-[11px]",md:"h-6 min-w-[24px] text-[12px]"},rounded:"rounded",font:"font-medium font-sans",background:"bg-gray-100 dark:bg-gray-800",ring:"ring-1 ring-gray-300 dark:ring-gray-700 ring-inset",default:{size:"sm"}},d=h(g.ui.strategy,g.ui.kbd,M),N=m({inheritAttrs:!1,props:{value:{type:String,default:null},size:{type:String,default:()=>d.default.size,validator(t){return Object.keys(d.size).includes(t)}},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(t){const{ui:e,attrs:a}=_("kbd",f(t,"ui"),d),s=u(()=>k(S(e.value.base,e.value.size[t.size],e.value.padding,e.value.rounded,e.value.font,e.value.background,e.value.ring),t.class));return{ui:e,attrs:a,kbdClass:s}}});function T(t,e,a,s,n,r){return v(),w("kbd",x({class:t.kbdClass},t.attrs),[A(t.$slots,"default",{},()=>[b(y(t.value),1)])],16)}const B=j(N,[["render",T]]),P=()=>{const t=u(()=>navigator&&navigator.userAgent&&navigator.userAgent.match(/Macintosh;/)),e=C(" "),a=I(),s=u(()=>{var i,c,o;const n=(i=a.value)==null?void 0:i.tagName,r=(c=a.value)==null?void 0:c.contentEditable;return n==="INPUT"||n==="TEXTAREA"||r==="true"||r==="plaintext-only"?((o=a.value)==null?void 0:o.name)||!0:!1});return z(()=>{e.value=t.value?"⌘":"Ctrl"}),{macOS:t,metaSymbol:e,activeElement:a,usingInput:s}},R=O(P),L=m({inheritAttrs:!1,__name:"Shortcut",props:{value:{type:String,required:!0},class:{type:[String,Object,Array],default:void 0}},setup(t){const e={wrapper:"!my-0 align-text-top"},a=t,{metaSymbol:s}=R(),{ui:n,attrs:r}=_("content.shortcut",void 0,e,f(a,"class"),!0),p=u(()=>a.value==="meta"?s.value:a.value);return(i,c)=>{const o=B;return v(),E(o,x({class:l(n).wrapper},l(r)),{default:$(()=>[b(y(l(p)),1)]),_:1},16,["class"])}}});export{L as default};
