import{_ as C}from"./B45ipoNB.js";import{_ as S}from"./BUPu7LNV.js";import{_ as A}from"./BsHGw7Vj.js";import{r as B}from"./CsNqA9cJ.js";import{d as I,s as U,z as s,B as g,J as l,c as n,G as i,w as f,C as e,f as y,h as c,n as u,t as D,e as L,H as E}from"./CW5Gbv_A.js";import{u as N}from"./B7oWG7IA.js";import"./DXB7ZZiU.js";import"./DlAUqK2U.js";import"./C93TzNuZ.js";import"./Dnd51l0P.js";const P=I({inheritAttrs:!1,__name:"Card",props:{icon:{type:String,default:void 0},color:{type:String,default:"primary"},to:{type:String,default:void 0},target:{type:String,default:void 0},title:{type:String,default:void 0},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(o){const x=U(),h=s(()=>({wrapper:"relative group overflow-hidden flex items-center rounded-lg",to:"hover:ring-1 hover:ring-[--color-light] dark:hover:ring-[--color-dark] hover:bg-gray-100/50 dark:hover:bg-gray-800/50",icon:{base:"w-6 h-6 mb-4 inline-flex items-center text-[--color-light] dark:text-[--color-dark] pointer-events-none"},body:{base:"flex-1"},externalIcon:{name:x.ui.icons.external,base:"w-4 h-4 absolute right-2 top-2 text-gray-400 dark:text-gray-500 group-hover:text-[--color-light] dark:group-hover:text-[--color-dark]"},title:"text-gray-900 dark:text-white font-semibold text-base my-0",description:"text-[15px] text-gray-500 dark:text-gray-400 mt-1 mb-0"})),t=o,{ui:r,attrs:k}=N("content.card",g(t,"ui"),h,g(t,"class"),!0),b=s(()=>{var a;return t.color==="primary"?"rgb(var(--color-primary-DEFAULT))":((a=l[t.color])==null?void 0:a["500"])||l[t.color]||t.color}),v=s(()=>{var a;return t.color==="primary"?"rgb(var(--color-primary-DEFAULT))":((a=l[t.color])==null?void 0:a["400"])||l[t.color]||t.color}),d=s(()=>t.target||(t.to&&t.to.startsWith("http")?"_blank":void 0));return(a,m)=>{const _=C,p=S,w=A;return n(),i(w,E({class:[e(r).wrapper,o.to&&e(r).to]},e(k),{ui:e(r),style:{"--color-light":e(b),"--color-dark":e(v)}}),{default:f(()=>[o.to?(n(),i(_,{key:0,to:o.to,target:e(d),class:"focus:outline-none",tabindex:"-1"},{default:f(()=>m[0]||(m[0]=[y("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1)])),_:1},8,["to","target"])):c("",!0),o.icon?(n(),i(p,{key:1,name:o.icon,class:u(e(r).icon.base)},null,8,["name","class"])):c("",!0),o.to&&e(d)==="_blank"?(n(),i(p,{key:2,name:e(r).externalIcon.name,class:u(e(r).externalIcon.base)},null,8,["name","class"])):c("",!0),y("p",{class:u(e(r).title)},D(o.title),3),a.$slots.default?(n(),L("p",{key:3,class:u(e(r).description)},[B(a.$slots,"default",{unwrap:"p"})],2)):c("",!0)]),_:3},16,["class","ui","style"])}}});export{P as default};