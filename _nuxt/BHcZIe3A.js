import{_ as L}from"./BbueabOF.js";import{_ as A}from"./DlMgFISb.js";import{d as N,b as d,I as g,w as S,G as f,$ as j,a0 as O,J as k,a6 as R,e as V,aq as D,ar as H,Z as M,U as P,B as l,o as Q,a as J,as as T,V as E,W as q,D as W,N as Z,C,n as w,f as I,c as F,t as K}from"./3vhjU5V7.js";import{_ as G}from"./DlAUqK2U.js";import{u as X}from"./CMmUEzt7.js";import"./BmiLHWM5.js";const m={to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1}},Y={as:{type:String,default:"button"},type:{type:String,default:"button"},disabled:{type:Boolean,default:null},active:{type:Boolean,default:void 0},exact:{type:Boolean,default:!1},exactQuery:{type:Boolean,default:!1},exactHash:{type:Boolean,default:!1},inactiveClass:{type:String,default:void 0}},_=e=>Object.keys(m).reduce((a,t)=>(e[t]!==void 0&&(a[t]=e[t]),a),{}),fe=e=>[...Object.keys(m),...Object.keys(Y)].reduce((a,t)=>(e[t]!==void 0&&(a[t]=e[t]),a),{}),ee=N({inheritAttrs:!1,props:{...m,as:{type:String,default:"button"},type:{type:String,default:"button"},disabled:{type:Boolean,default:null},active:{type:Boolean,default:void 0},exact:{type:Boolean,default:!1},exactQuery:{type:Boolean,default:!1},exactHash:{type:Boolean,default:!1},inactiveClass:{type:String,default:void 0}},setup(e){function n(a,t,{isActive:r,isExactActive:i}){return e.exactQuery&&!H(a.query,t.query)||e.exactHash&&a.hash!==t.hash?e.inactiveClass:e.exact&&i||!e.exact&&r?e.activeClass:e.inactiveClass}return{resolveLinkClass:n}}}),ae=["href","aria-disabled","role","rel","target","onClick"];function ie(e,n,a,t,r,i){const o=A;return e.to?(d(),g(o,k({key:1},e.$props,{custom:""}),{default:S(({route:u,href:v,target:p,rel:h,navigate:x,isActive:b,isExactActive:y,isExternal:B})=>[V("a",k(e.$attrs,{href:e.disabled?void 0:v,"aria-disabled":e.disabled?"true":void 0,role:e.disabled?"link":void 0,rel:h,target:p,class:e.active!==void 0?e.active?e.activeClass:e.inactiveClass:e.resolveLinkClass(u,e._.provides[D]||e.$route,{isActive:b,isExactActive:y}),onClick:c=>!B&&!e.disabled&&x(c)}),[f(e.$slots,"default",j(O({isActive:e.active!==void 0?e.active:e.exact?y:b})))],16,ae)]),_:3},16)):(d(),g(R(e.as),k({key:0,type:e.type,disabled:e.disabled},e.$attrs,{class:e.active?e.activeClass:e.inactiveClass}),{default:S(()=>[f(e.$slots,"default",j(O({isActive:e.active})))]),_:3},16,["type","disabled","class"]))}const U=G(ee,[["render",ie]]);function te({ui:e,props:n}){const a=T();if(M("ButtonGroupContextConsumer",!0),P("ButtonGroupContextConsumer",!1))return{size:l(()=>n.size),rounded:l(()=>e.value.rounded)};let r=a.parent,i;for(;r&&!i;){if(r.type.name==="ButtonGroup"){i=P(`group-${r.uid}`);break}r=r.parent}const o=l(()=>i==null?void 0:i.value.children.indexOf(a));return Q(()=>{i==null||i.value.register(a)}),J(()=>{i==null||i.value.unregister(a)}),{size:l(()=>(i==null?void 0:i.value.size)||n.size),rounded:l(()=>!i||o.value===-1?e.value.rounded:i.value.children.length===1?i.value.ui.rounded:o.value===0?i.value.rounded.start:o.value===i.value.children.length-1?i.value.rounded.end:"rounded-none")}}const re={base:"focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0",font:"font-medium",rounded:"rounded-md",truncate:"text-left break-all line-clamp-1",block:"w-full flex justify-center items-center",inline:"inline-flex items-center",size:{"2xs":"text-xs",xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-sm",xl:"text-base"},gap:{"2xs":"gap-x-1",xs:"gap-x-1.5",sm:"gap-x-1.5",md:"gap-x-2",lg:"gap-x-2.5",xl:"gap-x-2.5"},padding:{"2xs":"px-2 py-1",xs:"px-2.5 py-1.5",sm:"px-2.5 py-1.5",md:"px-3 py-2",lg:"px-3.5 py-2.5",xl:"px-3.5 py-2.5"},square:{"2xs":"p-1",xs:"p-1.5",sm:"p-1.5",md:"p-2",lg:"p-2.5",xl:"p-2.5"},color:{white:{solid:"shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:bg-gray-50 disabled:bg-white dark:bg-gray-900 dark:hover:bg-gray-800/50 dark:disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",ghost:"text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"},gray:{solid:"shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",ghost:"text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",link:"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"},black:{solid:"shadow-sm text-white dark:text-gray-900 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 dark:disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",link:"text-gray-900 dark:text-white underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"}},variant:{solid:"shadow-sm text-white dark:text-gray-900 bg-{color}-500 hover:bg-{color}-600 disabled:bg-{color}-500 dark:bg-{color}-400 dark:hover:bg-{color}-500 dark:disabled:bg-{color}-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-500 dark:focus-visible:outline-{color}-400",outline:"ring-1 ring-inset ring-current text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",soft:"text-{color}-500 dark:text-{color}-400 bg-{color}-50 hover:bg-{color}-100 disabled:bg-{color}-50 dark:bg-{color}-950 dark:hover:bg-{color}-900 dark:disabled:bg-{color}-950 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",ghost:"text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",link:"text-{color}-500 hover:text-{color}-600 disabled:text-{color}-500 dark:text-{color}-400 dark:hover:text-{color}-500 dark:disabled:text-{color}-400 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400"},icon:{base:"flex-shrink-0",loading:"animate-spin",size:{"2xs":"h-4 w-4",xs:"h-4 w-4",sm:"h-5 w-5",md:"h-5 w-5",lg:"h-5 w-5",xl:"h-6 w-6"}},default:{size:"sm",variant:"solid",color:"primary",loadingIcon:"i-heroicons-arrow-path-20-solid"}},s=E(q.ui.strategy,q.ui.button,re),le=N({components:{UIcon:L,ULink:U},inheritAttrs:!1,props:{...m,type:{type:String,default:"button"},block:{type:Boolean,default:!1},label:{type:String,default:null},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:()=>s.default.size,validator(e){return Object.keys(s.size).includes(e)}},color:{type:String,default:()=>s.default.color,validator(e){return[...q.ui.colors,...Object.keys(s.color)].includes(e)}},variant:{type:String,default:()=>s.default.variant,validator(e){return[...Object.keys(s.variant),...Object.values(s.color).flatMap(n=>Object.keys(n))].includes(e)}},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>s.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:null},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},square:{type:Boolean,default:!1},truncate:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e,{slots:n}){const{ui:a,attrs:t}=X("button",W(e,"ui"),s),{size:r,rounded:i}=te({ui:a,props:e}),o=l(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),u=l(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),v=l(()=>e.square||!n.default&&!e.label),p=l(()=>{var $,z;const c=((z=($=a.value.color)==null?void 0:$[e.color])==null?void 0:z[e.variant])||a.value.variant[e.variant];return Z(C(a.value.base,a.value.font,i.value,a.value.size[r.value],a.value.gap[r.value],e.padded&&a.value[v.value?"square":"padding"][r.value],c==null?void 0:c.replaceAll("{color}",e.color),e.block?a.value.block:a.value.inline),e.class)}),h=l(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),x=l(()=>e.loading&&!o.value?e.loadingIcon:e.trailingIcon||e.icon),b=l(()=>C(a.value.icon.base,a.value.icon.size[r.value],e.loading&&a.value.icon.loading)),y=l(()=>C(a.value.icon.base,a.value.icon.size[r.value],e.loading&&!o.value&&a.value.icon.loading)),B=l(()=>_(e));return{ui:a,attrs:t,isLeading:o,isTrailing:u,isSquare:v,buttonClass:p,leadingIconName:h,trailingIconName:x,leadingIconClass:b,trailingIconClass:y,linkProps:B}}});function ne(e,n,a,t,r,i){const o=L,u=U;return d(),g(u,k({type:e.type,disabled:e.disabled||e.loading,class:e.buttonClass},{...e.linkProps,...e.attrs}),{default:S(()=>[f(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[e.isLeading&&e.leadingIconName?(d(),g(o,{key:0,name:e.leadingIconName,class:w(e.leadingIconClass),"aria-hidden":"true"},null,8,["name","class"])):I("",!0)]),f(e.$slots,"default",{},()=>[e.label?(d(),F("span",{key:0,class:w([e.truncate?e.ui.truncate:""])},K(e.label),3)):I("",!0)]),f(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[e.isTrailing&&e.trailingIconName?(d(),g(o,{key:0,name:e.trailingIconName,class:w(e.trailingIconClass),"aria-hidden":"true"},null,8,["name","class"])):I("",!0)])]),_:3},16,["type","disabled","class"])}const ve=G(le,[["render",ne]]);export{ve as _,U as a,fe as b,_ as g,m as n,te as u};
