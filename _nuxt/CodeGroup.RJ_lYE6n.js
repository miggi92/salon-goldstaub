import{_ as x}from"./ProseCodeIcon.vue.Vp0z204B.js";import{u as C}from"./useUI._dB0eicC.js";import{d as B,a3 as $,M as w,r as I,J as b,b as i,c as p,e as f,F as S,a2 as A,n as m,$ as e,g as D,t as F,C as G,a5 as N,Q as P}from"./entry._r6ZSgIS.js";import"./Icon.KhCE8red.js";import"./Icon.4gS2x7RY.js";import"./index.P7jyS_57.js";import"./_plugin-vue_export-helper.x3n3nnut.js";const V=["onClick"],R=B({inheritAttrs:!1,__name:"CodeGroup",props:{class:{type:[String,Object,Array],default:void 0}},setup(g,{expose:v}){const y={wrapper:"relative [&>div:last-child]:!my-0 [&>div:last-child]:!static my-5",header:"flex items-center gap-1 border border-gray-200 dark:border-gray-700 border-b-0 rounded-t-md overflow-hidden p-2",tab:{base:"px-2 py-1.5 focus:outline-none text-gray-700 dark:text-gray-200 text-sm rounded-md flex items-center gap-1.5",active:"bg-gray-100 dark:bg-gray-800",inactive:"hover:bg-gray-50 dark:hover:bg-gray-800/50",icon:{base:""}}},_=g,l=$(),{ui:r,attrs:h}=C("content.codeGroup",void 0,y,w(_,"class"),!0),n=I(0);v({selectedIndex:n});const u=b(()=>{var c;return((c=l.default)==null?void 0:c.call(l).map((a,d)=>{var s,t,o;return{label:((s=a.props)==null?void 0:s.filename)||((t=a.props)==null?void 0:t.label)||`${d}`,icon:(o=a.props)==null?void 0:o.icon,component:a}}))||[]}),k=b(()=>u.value.find((c,a)=>a===n.value));return(c,a)=>{var s;const d=x;return i(),p("div",P({class:e(r).wrapper},e(h)),[f("div",{class:m(e(r).header)},[(i(!0),p(S,null,A(e(u),(t,o)=>(i(),p("button",{key:o,tabindex:"-1",class:m([e(r).tab.base,e(n)===o?e(r).tab.active:e(r).tab.inactive]),onClick:j=>n.value=o},[D(d,{icon:t.icon,filename:t.label,class:m(e(r).tab.icon.base)},null,8,["icon","filename","class"]),f("span",null,F(t.label),1)],10,V))),128))],2),(i(),G(N((s=e(k))==null?void 0:s.component),{"hide-header":""}))],16)}}});export{R as default};