const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./CfpbdkSz.js","./Dj0MOPjA.js","./rbkanzug.js"])))=>i.map(i=>d[i]);
import{d as j,z as B,A as H,B as L,c as n,e as s,f as F,n as a,C as t,D as g,i as h,h as d,g as M,t as x,F as z,E as U,G as P,H as S,r as T,I as V,J as E,K as G,w as $,s as K,L as R,M as W,_ as X}from"./rbkanzug.js";import{_ as Y}from"./CAYWL2dT.js";import{_ as D}from"./D1eKHNJx.js";import{_ as N,n as Z,g as J}from"./yaiVVoyw.js";import{u as _}from"./Dp8YjJ6F.js";import{_ as q}from"./BwmPh8Oo.js";import{_ as Q}from"./B8Org6gm.js";import{_ as ee}from"./B1S97EOn.js";import{g as te}from"./BSb23L9O.js";import{c as ne,u as ie,d as O,w as se,a as re}from"./Dw9-BP4f.js";import{_ as ae}from"./DlAUqK2U.js";import{_ as le}from"./qDAUnnmg.js";import{_ as oe}from"./BvmQtQzM.js";import{_ as ce}from"./CUt_6X96.js";import"./WAx7H5Pk.js";import"./C93TzNuZ.js";const de={key:2},ue=j({inheritAttrs:!1,__name:"PageHero",props:{title:{type:String,default:void 0},description:{type:String,default:void 0},icon:{type:String,default:void 0},links:{type:Array,default:()=>[]},align:{type:String,default:"left"},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(e){const l=e,p=B(()=>{const o=H("gap-8 sm:gap-y-16",l.align==="center"?"flex flex-col":"grid lg:grid-cols-2 lg:items-center"),i=H("",l.align==="center"&&"text-center flex flex-col items-center",l.align==="right"&&"lg:order-last"),y=H("mt-8 flex flex-wrap gap-x-3 gap-y-1.5",l.align==="center"&&"justify-center");return{wrapper:"py-8 sm:py-16",container:o,base:i,icon:{wrapper:"flex mb-4",base:"w-10 h-10 flex-shrink-0 text-primary"},title:"text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl",description:"mt-4 text-lg text-gray-500 dark:text-gray-400",links:y}}),{ui:m,attrs:r}=_("page.hero",L(l,"ui"),p,L(l,"class"),!0);return(o,i)=>{var f,b;const y=D,w=N;return n(),s("div",S({class:t(m).wrapper},t(r)),[F("div",{class:a(t(m).container)},[e.icon||o.$slots.icon||e.title||o.$slots.title||e.description||o.$slots.description||(f=e.links)!=null&&f.length||o.$slots.links?(n(),s("div",{key:0,class:a(t(m).base)},[e.icon||o.$slots.icon?(n(),s("div",{key:0,class:a(t(m).icon.wrapper)},[g(o.$slots,"icon",{},()=>[h(y,{name:e.icon,class:a(t(m).icon.base)},null,8,["name","class"])])],2)):d("",!0),F("h1",{class:a(t(m).title)},[g(o.$slots,"title",{},()=>[M(x(e.title),1)])],2),e.description||o.$slots.description?(n(),s("div",{key:1,class:a(t(m).description)},[g(o.$slots,"description",{},()=>[M(x(e.description),1)])],2)):d("",!0),(b=e.links)!=null&&b.length||o.$slots.links?(n(),s("div",{key:2,class:a(t(m).links)},[g(o.$slots,"links",{},()=>[(n(!0),s(z,null,U(e.links,(k,v)=>(n(),P(w,S({key:v,ref_for:!0},k,{onClick:k.click}),null,16,["onClick"]))),128))])],2)):d("",!0)],2)):d("",!0),o.$slots.default?g(o.$slots,"default",{key:1}):e.align==="right"?(n(),s("div",de)):d("",!0)],2)],16)}}}),ge=ne(ie);function me(e,l={}){const{x:p,y:m}=ge(l),r=T(e??(window==null?void 0:window.document.body)),o=T(0),i=T(0);return O&&se([r,p,m],()=>{var v;const y=re(r);if(!y)return;const{left:w,top:f}=y.getBoundingClientRect(),b=p.value-(w+O.scrollX),k=m.value-(f+O.scrollY);Math.abs(b)>1500||Math.abs(k)>1500||((v=O.screen)==null?void 0:v.width)<=800||(o.value=b,i.value=k)},{immediate:!0,throttle:50}),{x:p,y:m,elementX:o,elementY:i}}const fe=j({inheritAttrs:!1,__name:"LandingCard",props:{...Z,title:{type:String,default:void 0},description:{type:String,default:void 0},icon:{type:String,default:void 0},color:{type:String,default:"primary"},orientation:{type:String,default:"vertical"},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(e){V(c=>({c87915e8:t(p),aba84e80:t(m)}));const l=e,p=B(()=>{var c;return l.color==="primary"?"rgb(var(--color-primary-DEFAULT))":((c=E[l.color])==null?void 0:c["500"])||E[l.color]||l.color}),m=B(()=>{var c;return l.color==="primary"?"rgb(var(--color-primary-DEFAULT))":((c=E[l.color])==null?void 0:c["400"])||E[l.color]||l.color}),r=B(()=>({wrapper:"relative group isolate rounded-xl background-gradient ring-1 ring-gray-200 dark:ring-gray-800 before:hidden before:lg:block before:absolute before:-inset-[2px] before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:z-[-1] before:rounded-[13px] flex-1 flex flex-col shadow",to:"transition-shadow duration-200",base:"flex-1 flex flex-col overflow-hidden",container:"",body:{base:H("gap-x-8 gap-y-4 rounded-xl flex-1",l.orientation==="vertical"&&"flex flex-col",!!i.default&&l.orientation==="horizontal"&&"grid lg:grid-cols-2 lg:items-center")},background:"bg-white dark:bg-gray-900 hover:bg-opacity-90 dark:hover:bg-opacity-90 transition-[background-opacity]",ring:"",rounded:"rounded-xl",shadow:"",icon:{wrapper:"mb-2 pointer-events-none",base:"w-8 h-8 flex-shrink-0 text-gray-900 dark:text-white"},title:"text-gray-900 dark:text-white text-base font-bold truncate",description:"text-[15px] text-gray-500 dark:text-gray-400 mt-1"})),o=T(),i=G(),{elementX:y,elementY:w}=me(o),{ui:f,attrs:b}=_("landing.card",L(l,"ui"),r,L(l,"class"),!0),k=B(()=>J(l)),v=B(()=>(l.title||i.title&&te(i.title())||"Card link").trim());return(c,A)=>{const C=Q,u=D,I=ee;return n(),s("div",S({ref_key:"el",ref:o,style:{"--x":`${t(y)}px`,"--y":`${t(w)}px`},class:[t(f).wrapper,c.to&&[t(f).to,"to"]]},t(b)),[h(I,{ui:t(f)},{default:$(()=>[F("div",{class:a(t(f).container)},[c.to?(n(),P(C,S({key:0,"aria-label":t(v)},t(k),{class:"focus:outline-none",tabindex:"-1"}),{default:$(()=>A[0]||(A[0]=[F("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1)])),_:1},16,["aria-label"])):d("",!0),e.icon||c.$slots.icon?(n(),s("div",{key:1,class:a(t(f).icon.wrapper)},[g(c.$slots,"icon",{},()=>[h(u,{name:e.icon,class:a(t(f).icon.base)},null,8,["name","class"])],!0)],2)):d("",!0),e.title||c.$slots.title?(n(),s("p",{key:2,class:a(t(f).title)},[g(c.$slots,"title",{},()=>[M(x(e.title),1)],!0)],2)):d("",!0),e.description||c.$slots.description?(n(),s("div",{key:3,class:a(t(f).description)},[g(c.$slots,"description",{},()=>[M(x(e.description),1)],!0)],2)):d("",!0),g(c.$slots,"container",{},void 0,!0)],2),c.$slots.default?g(c.$slots,"default",{key:0},void 0,!0):d("",!0)]),_:3},8,["ui"])],16)}}}),pe=ae(fe,[["__scopeId","data-v-86e61bcf"]]),he=j({inheritAttrs:!1,__name:"LandingGrid",props:{class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(e){const l={wrapper:"flex flex-col lg:grid gap-8 lg:grid-cols-12 relative"},p=e,{ui:m,attrs:r}=_("landing.grid",L(p,"ui"),l,L(p,"class"),!0);return(o,i)=>(n(),s("div",S({class:t(m).wrapper},t(r)),[g(o.$slots,"default")],16))}}),ye={key:0},ke={key:2},be={key:0},we=j({inheritAttrs:!1,__name:"LandingSection",props:{icon:{type:String,default:void 0},headline:{type:String,default:void 0},title:{type:String,default:void 0},description:{type:String,default:void 0},features:{type:Array,default:()=>[]},links:{type:Array,default:()=>[]},slot:{type:String,default:void 0},align:{type:String,default:"center"},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(e){const l=K(),p=e,m=B(()=>{const i=H("gap-16 sm:gap-y-24",p.align==="center"?"flex flex-col":"grid lg:grid-cols-2 lg:items-center"),y=H("",p.align==="center"&&"text-center flex flex-col items-center",p.align==="right"&&"lg:order-last");return{wrapper:"py-24 sm:py-32",container:i,base:y,icon:{wrapper:"flex mb-6",base:"w-10 h-10 flex-shrink-0 text-primary"},headline:"mb-2 text-base/7 font-semibold text-primary",title:"text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl",description:"mt-6 text-lg/8 text-gray-600 dark:text-gray-300",links:"mt-8 flex flex-wrap gap-x-3 gap-y-1.5",features:{wrapper:{base:"mt-6 leading-7",list:"space-y-4",grid:"grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16"},base:"relative pl-8",name:"font-semibold text-gray-900 dark:text-white",description:"text-gray-500 dark:text-gray-400 leading-6",icon:{base:"absolute left-0 top-1 h-5 w-5 text-primary",name:l.ui.icons.check}}}}),{ui:r,attrs:o}=_("landing.section",L(p,"ui"),m,L(p,"class"),!0);return(i,y)=>{const w=D,f=N,b=le;return n(),s("div",S({class:t(r).wrapper},t(o)),[g(i.$slots,"top"),h(b,{class:a(t(r).container)},{default:$(()=>{var k,v,c,A,C;return[e.icon||i.$slots.icon||e.headline||i.$slots.headline||e.title||i.$slots.title||e.description||i.$slots.description||(k=e.links)!=null&&k.length||i.$slots.links?(n(),s("div",{key:0,class:a(t(r).base)},[e.icon||i.$slots.icon?(n(),s("div",{key:0,class:a(t(r).icon.wrapper)},[g(i.$slots,"icon",{},()=>[h(w,{name:e.icon,class:a(t(r).icon.base)},null,8,["name","class"])])],2)):e.headline||i.$slots.headline?(n(),s("div",{key:1,class:a(t(r).headline)},[g(i.$slots,"headline",{},()=>[M(x(e.headline),1)])],2)):d("",!0),e.title||i.$slots.title?(n(),s("h2",{key:2,class:a(t(r).title)},[g(i.$slots,"title",{},()=>[M(x(e.title),1)])],2)):d("",!0),e.description||i.$slots.description?(n(),s("div",{key:3,class:a(t(r).description)},[g(i.$slots,"description",{},()=>[M(x(e.description),1)])],2)):d("",!0),e.align!=="center"&&((v=e.features)!=null&&v.length)?(n(),s("dl",{key:4,class:a([t(r).features.wrapper.base,t(r).features.wrapper.list])},[(n(!0),s(z,null,U(e.features,u=>(n(),s("div",{key:u.name,class:a(t(r).features.base)},[F("dt",{class:a(t(r).features.name)},[h(w,{name:u.icon||t(r).features.icon.name,class:a(t(r).features.icon.base),"aria-hidden":"true"},null,8,["name","class"]),u.name?(n(),s("span",ye,x(u.name),1)):d("",!0)],2),u.description?(n(),s("dd",{key:0,class:a(t(r).features.description)},x(u.description),3)):d("",!0)],2))),128))],2)):d("",!0),e.align!=="center"&&((c=e.links)!=null&&c.length||i.$slots.links)?(n(),s("div",{key:5,class:a(t(r).links)},[g(i.$slots,"links",{},()=>[(n(!0),s(z,null,U(e.links,(u,I)=>(n(),P(f,S({key:I,ref_for:!0},u,{onClick:u.click}),null,16,["onClick"]))),128))])],2)):d("",!0)],2)):d("",!0),i.$slots[e.slot||"default"]?g(i.$slots,e.slot||"default",{key:1}):e.align==="right"?(n(),s("div",ke)):d("",!0),e.align==="center"&&((A=e.features)!=null&&A.length)?(n(),s("dl",{key:3,class:a([t(r).features.wrapper.base,t(r).features.wrapper.grid])},[(n(!0),s(z,null,U(e.features,u=>(n(),s("div",{key:u.name,class:a(t(r).features.base)},[F("dt",{class:a(t(r).features.name)},[h(w,{name:u.icon||t(r).features.icon.name,class:a(t(r).features.icon.base),"aria-hidden":"true"},null,8,["name","class"]),u.name?(n(),s("span",be,x(u.name),1)):d("",!0)],2),u.description?(n(),s("dd",{key:0,class:a(t(r).features.description)},x(u.description),3)):d("",!0)],2))),128))],2)):d("",!0),e.align==="center"&&((C=e.links)!=null&&C.length||i.$slots.links)?(n(),s("div",{key:4,class:a(t(R)(t(r).links,"mt-0 justify-center"))},[g(i.$slots,"links",{},()=>[(n(!0),s(z,null,U(e.links,(u,I)=>(n(),P(f,S({key:I,ref_for:!0},u,{onClick:u.click}),null,16,["onClick"]))),128))])],2)):d("",!0)]}),_:3},8,["class"]),g(i.$slots,"bottom")],16)}}}),ve=W(()=>X(()=>import("./CfpbdkSz.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(e=>e.default||e)),Oe=j({__name:"about",setup(e){const l=[{title:"Ausbildung im Salon D´Ostuni Heilbronn",description:"D´Ostuni ist mehrmaliger Landesmeister im Bereich Herrenhaarschnitt",class:"col-span-4 row-span-1",icon:"i-mdi-school"},{title:"Meisterschule „Zieger Akademie“ am Bodensee",description:"Besuch der renommierten Meisterschule „Zieger Akademie“ am Bodensee mit Abschluss als Friseurmeisterin.Trainiert und geschult wurde ich unter anderem von Natalie Zieger, Friseurweltmeisterin",class:"col-span-5 row-span-1",icon:"i-mdi-school"},{title:"Laufende Fort- und Weiterbildung",description:"z. B. ein Seminar speziell zu der schwierigen Farbe blond. Als Blond-Expertin habe ich eine große Erfahrung mit dieser Farbe",class:"col-span-4 row-span-1",icon:"i-mdi-school"},{title:"Spezielles Training",description:"Spezielles Training auf die Farben Illumina Color von Wella Auszeichnungen",class:"col-span-3 row-span-1",icon:"i-mdi-school"},{title:"IHK Auszeichnung",description:" Bei der Gesellenprüfung unter den 10 Besten im Kammerbezirk Heilbronn, Urkunde und goldene Schere für besondere Leistung",class:"col-span-3 row-span-1",icon:"i-mdi-trophy-award"},{title:"3. Platz bei der Südwestdeutschen Meisterschaft",description:" 3. Platz bei der Südwestdeutschen Meisterschaft für Gesellen in den Bereichen Herrenhaarschnitt und Styling",class:"col-span-5 row-span-1",icon:"i-mdi-trophy"}],p=[{title:"Hochzeits-Komplettservice",description:"meine Stärke im Hochzeits-Komplettservice",class:"col-span-3 row-span-1",icon:"i-mdi-cake-layered"},{title:"Flecht- und Hochsteckfrisuren",description:"meine Leidenschaft für Flecht- und Hochsteckfrisuren",class:"col-span-4 row-span-1",icon:"i-game-icons-knot"},{title:"Make-ups",description:" meine typgerechten Tages- und Abend-Make-ups",class:"col-span-3 row-span-1",icon:"i-streamline-make-up-brush"},{title:"Shading-Service",description:"mein schneller und wirkungsvoller Shading-Service für Männer, die Anti-Grau-Sofort-Schattierung ohne zu Färben",class:"col-span-3 row-span-1",icon:"i-mdi-format-color-fill"}];return(m,r)=>{const o=Y,i=ve,y=ue,w=q,f=pe,b=he,k=we,v=oe,c=ce;return n(),P(c,null,{default:$(()=>[h(o,{title:"Über uns"}),h(v,null,{default:$(()=>[h(y,{title:"Meisterfriseurin",description:"Gestatten, Elena Köse, Ihre Meisterfriseurin.",align:"left"},{default:$(()=>[h(i,{src:"/pictures/bild_meisterfriseurin.jpg",alt:"Meisterfriseurin",class:"w-full rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"})]),_:1}),h(w,{quote:"Mein Beruf ist meine Berufung, nichts verfolge ich mit mehr Leidenschaft als diesen. Und ich liebe schönes Haar und die Arbeit mit Menschen. Deshalb fühlen sich auch Kinder richtig wohl bei mir.",card:""}),h(k,{title:"Vitae",description:"Hier nun die wichtigsten Stationen meiner beruflichen Vitae",align:"center"},{default:$(()=>[h(b,null,{default:$(()=>[(n(),s(z,null,U(l,(A,C)=>h(f,S({key:C,ref_for:!0},A),null,16)),64))]),_:1})]),_:1}),h(k,{title:"Was mich noch auszeichnet",description:"",align:"center"},{default:$(()=>[h(b,null,{default:$(()=>[(n(),s(z,null,U(p,(A,C)=>h(f,S({key:C,ref_for:!0},A),null,16)),64))]),_:1})]),_:1})]),_:1})]),_:1})}}});export{Oe as default};
