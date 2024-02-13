import{_ as w}from"./nuxt-link.ot7f8CyZ.js";import{_ as C}from"./Icon.KhCE8red.js";import{_ as S}from"./Card.YXPjJViN.js";import{d as A,v as I,J as s,M as p,a4 as l,b as n,C as i,w as g,$ as e,f as c,n as u,t as U,e as f,c as B,Q as D}from"./entry._r6ZSgIS.js";import{u as L}from"./useUI._dB0eicC.js";import{r as $}from"./slot.__rMkMXe.js";import"./Icon.4gS2x7RY.js";import"./index.P7jyS_57.js";import"./_plugin-vue_export-helper.x3n3nnut.js";import"./selectMenu.Qz9MCkTm.js";import"./node.uMQX-T_c.js";const E=f("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1),W=A({inheritAttrs:!1,__name:"Card",props:{icon:{type:String,default:void 0},color:{type:String,default:"primary"},to:{type:String,default:void 0},target:{type:String,default:void 0},title:{type:String,default:void 0},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(o){const y=I(),x=s(()=>({wrapper:"relative group overflow-hidden flex items-center rounded-lg",to:"hover:ring-1 hover:ring-[--color-light] dark:hover:ring-[--color-dark] hover:bg-gray-100/50 dark:hover:bg-gray-800/50",icon:{base:"w-6 h-6 mb-4 inline-flex items-center text-[--color-light] dark:text-[--color-dark] pointer-events-none"},body:{base:"flex-1"},externalIcon:{name:y.ui.icons.external,base:"w-4 h-4 absolute right-2 top-2 text-gray-400 dark:text-gray-500 group-hover:text-[--color-light] dark:group-hover:text-[--color-dark]"},title:"text-gray-900 dark:text-white font-semibold text-base my-0",description:"text-[15px] text-gray-500 dark:text-gray-400 mt-1 mb-0"})),t=o,{ui:r,attrs:h}=L("content.card",p(t,"ui"),x,p(t,"class"),!0),b=s(()=>{var a;return t.color==="primary"?"rgb(var(--color-primary-DEFAULT))":((a=l[t.color])==null?void 0:a["500"])||l[t.color]||t.color}),k=s(()=>{var a;return t.color==="primary"?"rgb(var(--color-primary-DEFAULT))":((a=l[t.color])==null?void 0:a["400"])||l[t.color]||t.color}),d=s(()=>t.target||(t.to&&t.to.startsWith("http")?"_blank":void 0));return(a,N)=>{const v=w,m=C,_=S;return n(),i(_,D({class:[e(r).wrapper,o.to&&e(r).to]},e(h),{ui:e(r),style:{"--color-light":e(b),"--color-dark":e(k)}}),{default:g(()=>[o.to?(n(),i(v,{key:0,to:o.to,target:e(d),class:"focus:outline-none",tabindex:"-1"},{default:g(()=>[E]),_:1},8,["to","target"])):c("",!0),o.icon?(n(),i(m,{key:1,name:o.icon,class:u(e(r).icon.base)},null,8,["name","class"])):c("",!0),o.to&&e(d)==="_blank"?(n(),i(m,{key:2,name:e(r).externalIcon.name,class:u(e(r).externalIcon.base)},null,8,["name","class"])):c("",!0),f("p",{class:u(e(r).title)},U(o.title),3),a.$slots.default?(n(),B("p",{key:3,class:u(e(r).description)},[$(a.$slots,"default",{unwrap:"p"})],2)):c("",!0)]),_:3},16,["class","ui","style"])}}});export{W as default};