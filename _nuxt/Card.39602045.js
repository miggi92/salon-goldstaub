import{_ as x}from"./nuxt-link.3f302425.js";import{_ as w}from"./Icon.cd3bf1a7.js";import{_ as C}from"./Card.113d0e98.js";import{d as D,s as I,J as i,M as p,a1 as u,b as a,D as n,w as m,f as s,n as l,X as t,e as d,t as U,c as A,P as B}from"./entry.42fba3af.js";import{u as L}from"./useUI.5053ee30.js";import{r as E}from"./slot.a343b00d.js";import"./Icon.59e1e6fa.js";import"./index.df58e121.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./selectMenu.efd4f3a5.js";import"./node.e4a9c3bc.js";const N=d("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1),q=D({inheritAttrs:!1,__name:"Card",props:{icon:{default:void 0},color:{default:"primary"},to:{default:void 0},target:{default:void 0},title:{default:void 0},ui:{default:()=>({})},class:{default:void 0}},setup(f){const g=I(),h=i(()=>({wrapper:"relative group overflow-hidden flex items-center rounded-lg",to:"hover:ring-1 hover:ring-[--color-light] dark:hover:ring-[--color-dark] hover:bg-gray-100/50 dark:hover:bg-gray-800/50",icon:{base:"w-6 h-6 mb-4 inline-flex items-center text-[--color-light] dark:text-[--color-dark] pointer-events-none"},body:{base:"flex-1"},externalIcon:{name:g.ui.icons.external,base:"w-4 h-4 absolute right-2 top-2 text-gray-400 dark:text-gray-500 group-hover:text-[--color-light] dark:group-hover:text-[--color-dark]"},title:"text-gray-900 dark:text-white font-semibold text-base my-0",description:"text-[15px] text-gray-500 dark:text-gray-400 mt-1 mb-0"})),e=f,{ui:r,attrs:k}=L("content.card",p(e,"ui"),h,p(e,"class"),!0),y=i(()=>{var o;return e.color==="primary"?"rgb(var(--color-primary-DEFAULT))":((o=u[e.color])==null?void 0:o["500"])||e.color}),_=i(()=>{var o;return e.color==="primary"?"rgb(var(--color-primary-DEFAULT))":((o=u[e.color])==null?void 0:o["400"])||e.color});return(o,$)=>{const b=x,c=w,v=C;return a(),n(v,B({class:[t(r).wrapper,o.to&&t(r).to]},t(k),{ui:t(r),style:{"--color-light":t(y),"--color-dark":t(_)}}),{default:m(()=>[o.to?(a(),n(b,{key:0,to:o.to,target:o.target,class:"focus:outline-none",tabindex:"-1"},{default:m(()=>[N]),_:1},8,["to","target"])):s("",!0),o.icon?(a(),n(c,{key:1,name:o.icon,class:l(t(r).icon.base)},null,8,["name","class"])):s("",!0),o.to&&o.target==="_blank"?(a(),n(c,{key:2,name:t(r).externalIcon.name,class:l(t(r).externalIcon.base)},null,8,["name","class"])):s("",!0),d("p",{class:l(t(r).title)},U(o.title),3),o.$slots.default?(a(),A("p",{key:3,class:l(t(r).description)},[E(o.$slots,"default",{unwrap:"p"})],2)):s("",!0)]),_:3},16,["class","ui","style"])}}});export{q as default};
