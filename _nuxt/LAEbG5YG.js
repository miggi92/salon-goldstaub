import{_ as L}from"./EG2NhLo0.js";import{_ as S}from"./CBb-C0xP.js";import{d as B,z as A,A as v,B as $,c as a,e as u,D as r,i as k,w as c,f,n as l,C as n,h,g as w,t as C,F as U,E as T,G as H,H as b,S as z}from"./DZ6rfqJV.js";import{u as M}from"./Bacrq71E.js";import{_ as N}from"./DBYHzMW7.js";import{_ as V}from"./DMwfVlMC.js";import{u as j}from"./BddmUVzt.js";import{q as D}from"./CIWkn64l.js";import"./C_pcM1Iq.js";import"./aMoMu6YL.js";import"./DlAUqK2U.js";import"./iUb9Oz6z.js";import"./BtA34Bjq.js";import"./BrDauC7Y.js";const O=B({inheritAttrs:!1,__name:"LandingHero",props:{title:{type:String,default:void 0},description:{type:String,default:void 0},links:{type:Array,default:()=>[]},orientation:{type:String,default:"vertical"},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(i){const s=i,g=A(()=>{const t=v("gap-16 sm:gap-y-24",s.orientation==="vertical"&&"flex flex-col",s.orientation==="horizontal"&&"grid lg:grid-cols-2 lg:items-center"),_=s.orientation==="vertical"?"text-center":"",d=v("mt-10 flex flex-wrap gap-x-6 gap-y-3",s.orientation==="vertical"&&"justify-center");return{wrapper:"py-24 sm:py-32 md:py-40 relative",container:t,base:_,headline:"mb-10",title:"text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-7xl",description:"mt-6 text-lg tracking-tight text-gray-600 dark:text-gray-300",links:d}}),{ui:e,attrs:x}=M("landing.hero",$(s,"ui"),g,$(s,"class"),!0);return(t,_)=>{const d=L,y=S;return a(),u("div",b({class:n(e).wrapper},n(x)),[r(t.$slots,"top"),k(y,{class:l(n(e).container)},{default:c(()=>{var m;return[f("div",{class:l(n(e).base)},[t.$slots.headline?(a(),u("div",{key:0,class:l(n(e).headline)},[r(t.$slots,"headline")],2)):h("",!0),f("h1",{class:l(n(e).title)},[r(t.$slots,"title",{},()=>[w(C(i.title),1)])],2),i.description||t.$slots.description?(a(),u("div",{key:1,class:l(n(e).description)},[r(t.$slots,"description",{},()=>[w(C(i.description),1)])],2)):h("",!0),(m=i.links)!=null&&m.length||t.$slots.links?(a(),u("div",{key:2,class:l(n(e).links)},[r(t.$slots,"links",{},()=>[(a(!0),u(U,null,T(i.links,(p,o)=>(a(),H(d,b({key:o,ref_for:!0},p,{onClick:p.click}),null,16,["onClick"]))),128))])],2)):h("",!0)],2),r(t.$slots,"default")]}),_:3},8,["class"]),r(t.$slots,"bottom")],16)}}}),P=["innerHTML"],q=["src"],E=["innerHTML"],st=B({__name:"index",async setup(i){let s,g;const{data:e}=([s,g]=z(()=>j("index",()=>D("/").findOne())),s=await s,g(),s);return(x,t)=>{const _=O,d=N,y=V;return a(),H(y,null,{default:c(()=>[k(d,null,{default:c(()=>{var m,p;return[k(_,{links:(p=(m=n(e))==null?void 0:m.hero)==null?void 0:p.links,orientation:"horizontal"},{title:c(()=>{var o;return[f("span",{innerHTML:(o=n(e))==null?void 0:o.hero.title},null,8,P)]}),default:c(()=>{var o;return[f("img",{src:(o=n(e))==null?void 0:o.hero.image,alt:"Image",class:"w-full rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"},null,8,q)]}),description:c(()=>{var o;return[f("span",{innerHTML:(o=n(e))==null?void 0:o.hero.description},null,8,E)]}),_:1},8,["links"])]}),_:1})]),_:1})}}});export{st as default};
