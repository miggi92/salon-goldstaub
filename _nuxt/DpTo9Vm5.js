import{_ as L}from"./CWgoboGh.js";import{_ as A}from"./ByudH04o.js";import{d as N,c as d,G as c,w as I,D as f,Z as j,$ as O,H as k,a6 as R,f as H,aq as D,ar as M,Y as Q,R as P,z as l,o as V,b as T,as as E,S as J,U as q,B as Y,L as Z,A as B,n as S,h as C,e as F,t as K}from"./Do0M-HLG.js";import{_ as G}from"./DlAUqK2U.js";import{u as W}from"./Bv-5vDTa.js";import"./C93TzNuZ.js";const m={to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1}},X={as:{type:String,default:"button"},type:{type:String,default:"button"},disabled:{type:Boolean,default:null},active:{type:Boolean,default:void 0},exact:{type:Boolean,default:!1},exactQuery:{type:Boolean,default:!1},exactHash:{type:Boolean,default:!1},inactiveClass:{type:String,default:void 0}},_=e=>Object.keys(m).reduce((a,r)=>(e[r]!==void 0&&(a[r]=e[r]),a),{}),fe=e=>[...Object.keys(m),...Object.keys(X),"ariaLabel"].reduce((a,r)=>(e[r]!==void 0&&(a[r]=e[r]),a),{}),ee=N({inheritAttrs:!1,props:{...m,as:{type:String,default:"button"},type:{type:String,default:"button"},disabled:{type:Boolean,default:null},active:{type:Boolean,default:void 0},exact:{type:Boolean,default:!1},exactQuery:{type:Boolean,default:!1},exactHash:{type:Boolean,default:!1},inactiveClass:{type:String,default:void 0}},setup(e){function n(a,r,{isActive:t,isExactActive:i}){return e.exactQuery&&!M(a.query,r.query)||e.exactHash&&a.hash!==r.hash?e.inactiveClass:e.exact&&i||!e.exact&&t?e.activeClass:e.inactiveClass}return{resolveLinkClass:n}}}),ae=["href","aria-disabled","role","rel","target","tabindex","onClick"];function ie(e,n,a,r,t,i){const s=A;return e.to?(d(),c(s,k({key:1},e.$props,{custom:""}),{default:I(({route:u,href:b,target:p,rel:h,navigate:x,isActive:v,isExactActive:y,isExternal:w})=>[H("a",k(e.$attrs,{href:e.disabled?void 0:b,"aria-disabled":e.disabled?"true":void 0,role:e.disabled?"link":void 0,rel:h,target:p,class:e.active!==void 0?e.active?e.activeClass:e.inactiveClass:e.resolveLinkClass(u,e._.provides[D]||e.$route,{isActive:v,isExactActive:y}),tabindex:e.disabled?-1:void 0,onClick:g=>!w&&!e.disabled&&x(g)}),[f(e.$slots,"default",j(O({isActive:e.active!==void 0?e.active:e.exact?y:v})))],16,ae)]),_:3},16)):(d(),c(R(e.as),k({key:0,type:e.type,disabled:e.disabled},e.$attrs,{class:e.active?e.activeClass:e.inactiveClass}),{default:I(()=>[f(e.$slots,"default",j(O({isActive:e.active})))]),_:3},16,["type","disabled","class"]))}const U=G(ee,[["render",ie]]);function re({ui:e,props:n}){const a=E();if(Q("ButtonGroupContextConsumer",!0),P("ButtonGroupContextConsumer",!1))return{size:l(()=>n.size),rounded:l(()=>e.value.rounded)};let t=a.parent,i;for(;t&&!i;){if(t.type.name==="ButtonGroup"){i=P(`group-${t.uid}`);break}t=t.parent}const s=l(()=>i==null?void 0:i.value.children.indexOf(a));return V(()=>{i==null||i.value.register(a)}),T(()=>{i==null||i.value.unregister(a)}),{size:l(()=>i!=null&&i.value?(i==null?void 0:i.value.size)??e.value.default.size:n.size),rounded:l(()=>!i||s.value===-1?e.value.rounded:i.value.children.length===1?i.value.ui.rounded:s.value===0?i.value.rounded.start:s.value===i.value.children.length-1?i.value.rounded.end:"rounded-none")}}const te={base:"focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0",font:"font-medium",rounded:"rounded-md",truncate:"text-left break-all line-clamp-1",block:"w-full flex justify-center items-center",inline:"inline-flex items-center",size:{"2xs":"text-xs",xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-sm",xl:"text-base"},gap:{"2xs":"gap-x-1",xs:"gap-x-1.5",sm:"gap-x-1.5",md:"gap-x-2",lg:"gap-x-2.5",xl:"gap-x-2.5"},padding:{"2xs":"px-2 py-1",xs:"px-2.5 py-1.5",sm:"px-2.5 py-1.5",md:"px-3 py-2",lg:"px-3.5 py-2.5",xl:"px-3.5 py-2.5"},square:{"2xs":"p-1",xs:"p-1.5",sm:"p-1.5",md:"p-2",lg:"p-2.5",xl:"p-2.5"},color:{white:{solid:"shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:bg-gray-50 disabled:bg-white aria-disabled:bg-white dark:bg-gray-900 dark:hover:bg-gray-800/50 dark:disabled:bg-gray-900 dark:aria-disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",ghost:"text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"},gray:{solid:"shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 aria-disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 dark:aria-disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",ghost:"text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",link:"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"},black:{solid:"shadow-sm text-white dark:text-gray-900 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 aria-disabled:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 dark:disabled:bg-white dark:aria-disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",link:"text-gray-900 dark:text-white underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"}},variant:{solid:"shadow-sm text-white dark:text-gray-900 bg-{color}-500 hover:bg-{color}-600 disabled:bg-{color}-500 aria-disabled:bg-{color}-500 dark:bg-{color}-400 dark:hover:bg-{color}-500 dark:disabled:bg-{color}-400 dark:aria-disabled:bg-{color}-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-500 dark:focus-visible:outline-{color}-400",outline:"ring-1 ring-inset ring-current text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent aria-disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",soft:"text-{color}-500 dark:text-{color}-400 bg-{color}-50 hover:bg-{color}-100 disabled:bg-{color}-50 aria-disabled:bg-{color}-50 dark:bg-{color}-950 dark:hover:bg-{color}-900 dark:disabled:bg-{color}-950 dark:aria-disabled:bg-{color}-950 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",ghost:"text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent aria-disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",link:"text-{color}-500 hover:text-{color}-600 disabled:text-{color}-500 aria-disabled:text-{color}-500 dark:text-{color}-400 dark:hover:text-{color}-500 dark:disabled:text-{color}-400 dark:aria-disabled:text-{color}-400 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400"},icon:{base:"flex-shrink-0",loading:"animate-spin",size:{"2xs":"h-4 w-4",xs:"h-4 w-4",sm:"h-5 w-5",md:"h-5 w-5",lg:"h-5 w-5",xl:"h-6 w-6"}},default:{size:"sm",variant:"solid",color:"primary",loadingIcon:"i-heroicons-arrow-path-20-solid"}},o=J(q.ui.strategy,q.ui.button,te),le=N({components:{UIcon:L,ULink:U},inheritAttrs:!1,props:{...m,type:{type:String,default:"button"},block:{type:Boolean,default:!1},label:{type:String,default:null},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:()=>o.default.size,validator(e){return Object.keys(o.size).includes(e)}},color:{type:String,default:()=>o.default.color,validator(e){return[...q.ui.colors,...Object.keys(o.color)].includes(e)}},variant:{type:String,default:()=>o.default.variant,validator(e){return[...Object.keys(o.variant),...Object.values(o.color).flatMap(n=>Object.keys(n))].includes(e)}},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>o.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:null},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},square:{type:Boolean,default:!1},truncate:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e,{slots:n}){const{ui:a,attrs:r}=W("button",Y(e,"ui"),o),{size:t,rounded:i}=re({ui:a,props:e}),s=l(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),u=l(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),b=l(()=>e.square||!n.default&&!e.label),p=l(()=>{var $,z;const g=((z=($=a.value.color)==null?void 0:$[e.color])==null?void 0:z[e.variant])||a.value.variant[e.variant];return Z(B(a.value.base,a.value.font,i.value,a.value.size[t.value],a.value.gap[t.value],e.padded&&a.value[b.value?"square":"padding"][t.value],g==null?void 0:g.replaceAll("{color}",e.color),e.block?a.value.block:a.value.inline),e.class)}),h=l(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),x=l(()=>e.loading&&!s.value?e.loadingIcon:e.trailingIcon||e.icon),v=l(()=>B(a.value.icon.base,a.value.icon.size[t.value],e.loading&&a.value.icon.loading)),y=l(()=>B(a.value.icon.base,a.value.icon.size[t.value],e.loading&&!s.value&&a.value.icon.loading)),w=l(()=>_(e));return{ui:a,attrs:r,isLeading:s,isTrailing:u,isSquare:b,buttonClass:p,leadingIconName:h,trailingIconName:x,leadingIconClass:v,trailingIconClass:y,linkProps:w}}});function ne(e,n,a,r,t,i){const s=L,u=U;return d(),c(u,k({type:e.type,disabled:e.disabled||e.loading,class:e.buttonClass},{...e.linkProps,...e.attrs}),{default:I(()=>[f(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[e.isLeading&&e.leadingIconName?(d(),c(s,{key:0,name:e.leadingIconName,class:S(e.leadingIconClass),"aria-hidden":"true"},null,8,["name","class"])):C("",!0)]),f(e.$slots,"default",{},()=>[e.label?(d(),F("span",{key:0,class:S([e.truncate?e.ui.truncate:""])},K(e.label),3)):C("",!0)]),f(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[e.isTrailing&&e.trailingIconName?(d(),c(s,{key:0,name:e.trailingIconName,class:S(e.trailingIconClass),"aria-hidden":"true"},null,8,["name","class"])):C("",!0)])]),_:3},16,["type","disabled","class"])}const be=G(le,[["render",ne]]);export{be as _,U as a,fe as b,_ as g,m as n,re as u};