const __vite__fileDeps=["./DsOvotZ7.js","./BRnnFOsn.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{d as j,B,C as _,D as C,c as n,e as s,f as H,n as a,E as t,G as g,h,g as d,k as M,t as w,F as U,H as z,I as F,J as $,r as E,K as V,L as O,M as G,w as x,p as K,j as R,x as W,N as X,O as Y,_ as Z}from"./BRnnFOsn.js";import{_ as J}from"./tE_THl24.js";import{_ as D}from"./CRxx8BWt.js";import{_ as N,n as q,g as Q}from"./5Qnlps74.js";import{u as T}from"./DJrugtA8.js";import{_ as ee}from"./Bx7yadx5.js";import{_ as te}from"./CiArpO2y.js";import{_ as ne}from"./CTuDeNF7.js";import{c as ie,u as se,d as P,w as re,a as ae}from"./vVKd8L8a.js";import{g as le}from"./BSb23L9O.js";import{_ as oe}from"./DlAUqK2U.js";import{_ as ce}from"./CPqsrtqO.js";import{_ as de}from"./yb9tUdlU.js";import{_ as ue}from"./CpuHhuBA.js";import"./CsX4YB_2.js";import"./CvPl5tTm.js";import"./C93TzNuZ.js";const ge={key:2},me=j({inheritAttrs:!1,__name:"PageHero",props:{title:{type:String,default:void 0},description:{type:String,default:void 0},icon:{type:String,default:void 0},links:{type:Array,default:()=>[]},align:{type:String,default:"left"},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(e){const l=e,f=B(()=>{const o=_("gap-8 sm:gap-y-16",l.align==="center"?"flex flex-col":"grid lg:grid-cols-2 lg:items-center"),i=_("",l.align==="center"&&"text-center flex flex-col items-center",l.align==="right"&&"lg:order-last"),y=_("mt-8 flex flex-wrap gap-x-3 gap-y-1.5",l.align==="center"&&"justify-center");return{wrapper:"py-8 sm:py-16",container:o,base:i,icon:{wrapper:"flex mb-4",base:"w-10 h-10 flex-shrink-0 text-primary"},title:"text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl",description:"mt-4 text-lg text-gray-500 dark:text-gray-400",links:y}}),{ui:m,attrs:r}=T("page.hero",C(l,"ui"),f,C(l,"class"),!0);return(o,i)=>{var p,b;const y=D,v=N;return n(),s("div",$({class:t(m).wrapper},t(r)),[H("div",{class:a(t(m).container)},[e.icon||o.$slots.icon||e.title||o.$slots.title||e.description||o.$slots.description||(p=e.links)!=null&&p.length||o.$slots.links?(n(),s("div",{key:0,class:a(t(m).base)},[e.icon||o.$slots.icon?(n(),s("div",{key:0,class:a(t(m).icon.wrapper)},[g(o.$slots,"icon",{},()=>[h(y,{name:e.icon,class:a(t(m).icon.base)},null,8,["name","class"])])],2)):d("",!0),H("h1",{class:a(t(m).title)},[g(o.$slots,"title",{},()=>[M(w(e.title),1)])],2),e.description||o.$slots.description?(n(),s("div",{key:1,class:a(t(m).description)},[g(o.$slots,"description",{},()=>[M(w(e.description),1)])],2)):d("",!0),(b=e.links)!=null&&b.length||o.$slots.links?(n(),s("div",{key:2,class:a(t(m).links)},[g(o.$slots,"links",{},()=>[(n(!0),s(U,null,z(e.links,(k,S)=>(n(),F(v,$({key:S,ref_for:!0},k,{onClick:k.click}),null,16,["onClick"]))),128))])],2)):d("",!0)],2)):d("",!0),o.$slots.default?g(o.$slots,"default",{key:1}):e.align==="right"?(n(),s("div",ge)):d("",!0)],2)],16)}}}),pe=ie(se);function fe(e,l={}){const{x:f,y:m}=pe(l),r=E(e??(window==null?void 0:window.document.body)),o=E(0),i=E(0);return P&&re([r,f,m],()=>{const y=ae(r);if(!y)return;const{left:v,top:p}=y.getBoundingClientRect(),b=f.value-(v+P.scrollX),k=m.value-(p+P.scrollY);Math.abs(b)>1500||Math.abs(k)>1500||P.screen.width<=800||(o.value=b,i.value=k)},{immediate:!0,throttle:50}),{x:f,y:m,elementX:o,elementY:i}}const he=e=>(K("data-v-6de6d317"),e=e(),R(),e),ye=he(()=>H("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1)),ke=j({inheritAttrs:!1,__name:"LandingCard",props:{...q,title:{type:String,default:void 0},description:{type:String,default:void 0},icon:{type:String,default:void 0},color:{type:String,default:"primary"},orientation:{type:String,default:"vertical"},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(e){V(c=>({"20d12006":t(f),"853788a2":t(m)}));const l=e,f=B(()=>{var c;return l.color==="primary"?"rgb(var(--color-primary-DEFAULT))":((c=O[l.color])==null?void 0:c["500"])||O[l.color]||l.color}),m=B(()=>{var c;return l.color==="primary"?"rgb(var(--color-primary-DEFAULT))":((c=O[l.color])==null?void 0:c["400"])||O[l.color]||l.color}),r=B(()=>({wrapper:"relative group isolate rounded-xl background-gradient ring-1 ring-gray-200 dark:ring-gray-800 before:hidden before:lg:block before:absolute before:-inset-[2px] before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:z-[-1] before:rounded-[13px] flex-1 flex flex-col shadow",to:"hover:ring-primary-500 dark:hover:ring-primary-400 transition-shadow duration-200",base:"flex-1 flex flex-col overflow-hidden",container:"",body:{base:_("gap-x-8 gap-y-4 rounded-xl flex-1",l.orientation==="vertical"&&"flex flex-col",!!i.default&&l.orientation==="horizontal"&&"grid lg:grid-cols-2 lg:items-center")},background:"bg-white dark:bg-gray-900 hover:bg-opacity-90 dark:hover:bg-opacity-90 transition-[background-opacity]",ring:"",rounded:"rounded-xl",shadow:"",icon:{wrapper:"mb-2 pointer-events-none",base:"w-8 h-8 flex-shrink-0 text-gray-900 dark:text-white"},title:"text-gray-900 dark:text-white text-base font-bold truncate",description:"text-[15px] text-gray-500 dark:text-gray-400 mt-1"})),o=E(),i=G(),{elementX:y,elementY:v}=fe(o),{ui:p,attrs:b}=T("landing.card",C(l,"ui"),r,C(l,"class"),!0),k=B(()=>Q(l)),S=B(()=>(l.title||i.title&&le(i.title())||"Card link").trim());return(c,L)=>{const A=te,u=D,I=ne;return n(),s("div",$({ref_key:"el",ref:o,style:{"--x":`${t(y)}px`,"--y":`${t(v)}px`},class:[t(p).wrapper,c.to&&t(p).to]},t(b)),[h(I,{ui:t(p)},{default:x(()=>[H("div",{class:a(t(p).container)},[c.to?(n(),F(A,$({key:0,"aria-label":t(S)},t(k),{class:"focus:outline-none",tabindex:"-1"}),{default:x(()=>[ye]),_:1},16,["aria-label"])):d("",!0),e.icon||c.$slots.icon?(n(),s("div",{key:1,class:a(t(p).icon.wrapper)},[g(c.$slots,"icon",{},()=>[h(u,{name:e.icon,class:a(t(p).icon.base)},null,8,["name","class"])],!0)],2)):d("",!0),e.title||c.$slots.title?(n(),s("p",{key:2,class:a(t(p).title)},[g(c.$slots,"title",{},()=>[M(w(e.title),1)],!0)],2)):d("",!0),e.description||c.$slots.description?(n(),s("div",{key:3,class:a(t(p).description)},[g(c.$slots,"description",{},()=>[M(w(e.description),1)],!0)],2)):d("",!0),g(c.$slots,"container",{},void 0,!0)],2),c.$slots.default?g(c.$slots,"default",{key:0},void 0,!0):d("",!0)]),_:3},8,["ui"])],16)}}}),be=oe(ke,[["__scopeId","data-v-6de6d317"]]),ve=j({inheritAttrs:!1,__name:"LandingGrid",props:{class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(e){const l={wrapper:"flex flex-col lg:grid gap-8 lg:grid-cols-12 relative"},f=e,{ui:m,attrs:r}=T("landing.grid",C(f,"ui"),l,C(f,"class"),!0);return(o,i)=>(n(),s("div",$({class:t(m).wrapper},t(r)),[g(o.$slots,"default")],16))}}),we={key:0},xe={key:2},$e={key:0},Se=j({inheritAttrs:!1,__name:"LandingSection",props:{icon:{type:String,default:void 0},headline:{type:String,default:void 0},title:{type:String,default:void 0},description:{type:String,default:void 0},features:{type:Array,default:()=>[]},links:{type:Array,default:()=>[]},slot:{type:String,default:void 0},align:{type:String,default:"center"},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(e){const l=W(),f=e,m=B(()=>{const i=_("gap-16 sm:gap-y-24",f.align==="center"?"flex flex-col":"grid lg:grid-cols-2 lg:items-center"),y=_("",f.align==="center"&&"text-center flex flex-col items-center",f.align==="right"&&"lg:order-last");return{wrapper:"py-24 sm:py-32",container:i,base:y,icon:{wrapper:"flex mb-6",base:"w-10 h-10 flex-shrink-0 text-primary"},headline:"mb-2 text-base/7 font-semibold text-primary",title:"text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl",description:"mt-6 text-lg/8 text-gray-600 dark:text-gray-300",links:"mt-8 flex flex-wrap gap-x-3 gap-y-1.5",features:{wrapper:{base:"mt-6 leading-7",list:"space-y-4",grid:"grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16"},base:"relative pl-8",name:"font-semibold text-gray-900 dark:text-white",description:"text-gray-500 dark:text-gray-400 leading-6",icon:{base:"absolute left-0 top-1 h-5 w-5 text-primary",name:l.ui.icons.check}}}}),{ui:r,attrs:o}=T("landing.section",C(f,"ui"),m,C(f,"class"),!0);return(i,y)=>{const v=D,p=N,b=ce;return n(),s("div",$({class:t(r).wrapper},t(o)),[g(i.$slots,"top"),h(b,{class:a(t(r).container)},{default:x(()=>{var k,S,c,L,A;return[e.icon||i.$slots.icon||e.headline||i.$slots.headline||e.title||i.$slots.title||e.description||i.$slots.description||(k=e.links)!=null&&k.length||i.$slots.links?(n(),s("div",{key:0,class:a(t(r).base)},[e.icon||i.$slots.icon?(n(),s("div",{key:0,class:a(t(r).icon.wrapper)},[g(i.$slots,"icon",{},()=>[h(v,{name:e.icon,class:a(t(r).icon.base)},null,8,["name","class"])])],2)):e.headline||i.$slots.headline?(n(),s("div",{key:1,class:a(t(r).headline)},[g(i.$slots,"headline",{},()=>[M(w(e.headline),1)])],2)):d("",!0),e.title||i.$slots.title?(n(),s("h2",{key:2,class:a(t(r).title)},[g(i.$slots,"title",{},()=>[M(w(e.title),1)])],2)):d("",!0),e.description||i.$slots.description?(n(),s("div",{key:3,class:a(t(r).description)},[g(i.$slots,"description",{},()=>[M(w(e.description),1)])],2)):d("",!0),e.align!=="center"&&((S=e.features)!=null&&S.length)?(n(),s("dl",{key:4,class:a([t(r).features.wrapper.base,t(r).features.wrapper.list])},[(n(!0),s(U,null,z(e.features,u=>(n(),s("div",{key:u.name,class:a(t(r).features.base)},[H("dt",{class:a(t(r).features.name)},[h(v,{name:u.icon||t(r).features.icon.name,class:a(t(r).features.icon.base),"aria-hidden":"true"},null,8,["name","class"]),u.name?(n(),s("span",we,w(u.name),1)):d("",!0)],2),u.description?(n(),s("dd",{key:0,class:a(t(r).features.description)},w(u.description),3)):d("",!0)],2))),128))],2)):d("",!0),e.align!=="center"&&((c=e.links)!=null&&c.length||i.$slots.links)?(n(),s("div",{key:5,class:a(t(r).links)},[g(i.$slots,"links",{},()=>[(n(!0),s(U,null,z(e.links,(u,I)=>(n(),F(p,$({key:I,ref_for:!0},u,{onClick:u.click}),null,16,["onClick"]))),128))])],2)):d("",!0)],2)):d("",!0),i.$slots[e.slot||"default"]?g(i.$slots,e.slot||"default",{key:1}):e.align==="right"?(n(),s("div",xe)):d("",!0),e.align==="center"&&((L=e.features)!=null&&L.length)?(n(),s("dl",{key:3,class:a([t(r).features.wrapper.base,t(r).features.wrapper.grid])},[(n(!0),s(U,null,z(e.features,u=>(n(),s("div",{key:u.name,class:a(t(r).features.base)},[H("dt",{class:a(t(r).features.name)},[h(v,{name:u.icon||t(r).features.icon.name,class:a(t(r).features.icon.base),"aria-hidden":"true"},null,8,["name","class"]),u.name?(n(),s("span",$e,w(u.name),1)):d("",!0)],2),u.description?(n(),s("dd",{key:0,class:a(t(r).features.description)},w(u.description),3)):d("",!0)],2))),128))],2)):d("",!0),e.align==="center"&&((A=e.links)!=null&&A.length||i.$slots.links)?(n(),s("div",{key:4,class:a(t(X)(t(r).links,"mt-0 justify-center"))},[g(i.$slots,"links",{},()=>[(n(!0),s(U,null,z(e.links,(u,I)=>(n(),F(p,$({key:I,ref_for:!0},u,{onClick:u.click}),null,16,["onClick"]))),128))])],2)):d("",!0)]}),_:3},8,["class"]),g(i.$slots,"bottom")],16)}}}),Ae=Y(()=>Z(()=>import("./DsOvotZ7.js"),__vite__mapDeps([0,1]),import.meta.url).then(e=>e.default||e)),Ve=j({__name:"about",setup(e){const l=[{title:"Ausbildung im Salon D´Ostuni Heilbronn",description:"D´Ostuni ist mehrmaliger Landesmeister im Bereich Herrenhaarschnitt",class:"col-span-4 row-span-1",icon:"i-mdi-school"},{title:"Meisterschule „Zieger Akademie“ am Bodensee",description:"Besuch der renommierten Meisterschule „Zieger Akademie“ am Bodensee mit Abschluss als Friseurmeisterin.Trainiert und geschult wurde ich unter anderem von Natalie Zieger, Friseurweltmeisterin",class:"col-span-5 row-span-1",icon:"i-mdi-school"},{title:"Laufende Fort- und Weiterbildung",description:"z. B. ein Seminar speziell zu der schwierigen Farbe blond. Als Blond-Expertin habe ich eine große Erfahrung mit dieser Farbe",class:"col-span-4 row-span-1",icon:"i-mdi-school"},{title:"Spezielles Training",description:"Spezielles Training auf die Farben Illumina Color von Wella Auszeichnungen",class:"col-span-3 row-span-1",icon:"i-mdi-school"},{title:"IHK Auszeichnung",description:" Bei der Gesellenprüfung unter den 10 Besten im Kammerbezirk Heilbronn, Urkunde und goldene Schere für besondere Leistung",class:"col-span-3 row-span-1",icon:"i-mdi-trophy-award"},{title:"3. Platz bei der Südwestdeutschen Meisterschaft",description:" 3. Platz bei der Südwestdeutschen Meisterschaft für Gesellen in den Bereichen Herrenhaarschnitt und Styling",class:"col-span-5 row-span-1",icon:"i-mdi-trophy"}],f=[{title:"Hochzeits-Komplettservice",description:"meine Stärke im Hochzeits-Komplettservice",class:"col-span-3 row-span-1",icon:"i-mdi-cake-layered"},{title:"Flecht- und Hochsteckfrisuren",description:"meine Leidenschaft für Flecht- und Hochsteckfrisuren",class:"col-span-4 row-span-1",icon:"i-game-icons-knot"},{title:"Make-ups",description:" meine typgerechten Tages- und Abend-Make-ups",class:"col-span-3 row-span-1",icon:"i-streamline-make-up-brush"},{title:"Shading-Service",description:"mein schneller und wirkungsvoller Shading-Service für Männer, die Anti-Grau-Sofort-Schattierung ohne zu Färben",class:"col-span-3 row-span-1",icon:"i-mdi-format-color-fill"}];return(m,r)=>{const o=J,i=Ae,y=me,v=ee,p=be,b=ve,k=Se,S=de,c=ue;return n(),F(c,null,{default:x(()=>[h(o,{title:"Über uns"}),h(S,null,{default:x(()=>[h(y,{title:"Meisterfriseurin",description:"Gestatten, Elena Köse, Ihre Meisterfriseurin.",align:"left"},{default:x(()=>[h(i,{src:"/pictures/bild_meisterfriseurin.jpg",alt:"Meisterfriseurin",class:"w-full rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"})]),_:1}),h(v,{quote:"Mein Beruf ist meine Berufung, nichts verfolge ich mit mehr Leidenschaft als diesen. Und ich liebe schönes Haar und die Arbeit mit Menschen. Deshalb fühlen sich auch Kinder richtig wohl bei mir.",card:""}),h(k,{title:"Vitae",description:"Hier nun die wichtigsten Stationen meiner beruflichen Vitae",align:"center"},{default:x(()=>[h(b,null,{default:x(()=>[(n(),s(U,null,z(l,(L,A)=>h(p,$({key:A,ref_for:!0},L),null,16)),64))]),_:1})]),_:1}),h(k,{title:"Was mich noch auszeichnet",description:"",align:"center"},{default:x(()=>[h(b,null,{default:x(()=>[(n(),s(U,null,z(f,(L,A)=>h(p,$({key:A,ref_for:!0},L),null,16)),64))]),_:1})]),_:1})]),_:1})]),_:1})}}});export{Ve as default};
