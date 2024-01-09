import{_ as z}from"./Icon.AeEEaEZf.js";import{_ as j}from"./nuxt-link.nfT-3Kqs.js";import{d as q,b as d,C as c,w as $,R as b,Q as k,a5 as L,aq as U,W as P,V as M,e as R,ar as A,I as G,J as l,o as Q,a as V,as as D,K as H,L as B,M as J,O as T,P as w,n as I,f as C,t as E,c as K}from"./entry.6_PEJAeW.js";import{_ as N}from"./_plugin-vue_export-helper.x3n3nnut.js";import{u as W}from"./useUI.w5h-exWx.js";import"./selectMenu.0QA_vHzB.js";const F=q({inheritAttrs:!1,props:{...j.props,as:{type:String,default:"button"},disabled:{type:Boolean,default:null},active:{type:Boolean,default:void 0},exact:{type:Boolean,default:!1},exactQuery:{type:Boolean,default:!1},exactHash:{type:Boolean,default:!1},inactiveClass:{type:String,default:void 0}},setup(e){function n(i,r,{isActive:a,isExactActive:t}){return e.exactQuery&&!A(i.query,r.query)||e.exactHash&&i.hash!==r.hash?e.inactiveClass:e.exact&&t||!e.exact&&a?e.activeClass:e.inactiveClass}return{resolveLinkClass:n}}}),X=["href","aria-disabled","role","rel","target","onClick"];function Y(e,n,i,r,a,t){const o=j;return e.to?(d(),c(o,k({key:1},e.$props,{custom:""}),{default:$(({route:u,href:f,target:h,rel:p,navigate:x,isActive:v,isExactActive:y,isExternal:g})=>[R("a",k(e.$attrs,{href:e.disabled?void 0:f,"aria-disabled":e.disabled?"true":void 0,role:e.disabled?"link":void 0,rel:p,target:h,class:e.active!==void 0?e.active?e.activeClass:e.inactiveClass:e.resolveLinkClass(u,e._.provides[U]||e.$route,{isActive:v,isExactActive:y}),onClick:m=>!g&&x(m)}),[b(e.$slots,"default",M(P({isActive:e.exact?y:v})))],16,X)]),_:3},16)):(d(),c(L(e.as),k({key:0,disabled:e.disabled},e.$attrs,{class:e.active?e.activeClass:e.inactiveClass}),{default:$(()=>[b(e.$slots,"default")]),_:3},16,["disabled","class"]))}const O=N(F,[["render",Y]]);function Z({ui:e,props:n}){const i=D();let r=i.parent,a;for(;r&&!a;){if(r.type.name==="ButtonGroup"){a=G(`group-${r.uid}`);break}r=r.parent}const t=l(()=>a==null?void 0:a.value.children.indexOf(i));return Q(()=>{a==null||a.value.register(i)}),V(()=>{a==null||a.value.unregister(i)}),{size:l(()=>(a==null?void 0:a.value.size)||n.size),rounded:l(()=>!a||t.value===-1?e.value.rounded:a.value.children.length===1?a.value.ui.rounded:t.value===0?a.value.rounded.start:t.value===a.value.children.length-1?a.value.rounded.end:"rounded-none")}}const _={base:"focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0",font:"font-medium",rounded:"rounded-md",truncate:"text-left break-all line-clamp-1",block:"w-full flex justify-center items-center",inline:"inline-flex items-center",size:{"2xs":"text-xs",xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-sm",xl:"text-base"},gap:{"2xs":"gap-x-1",xs:"gap-x-1.5",sm:"gap-x-1.5",md:"gap-x-2",lg:"gap-x-2.5",xl:"gap-x-2.5"},padding:{"2xs":"px-2 py-1",xs:"px-2.5 py-1.5",sm:"px-2.5 py-1.5",md:"px-3 py-2",lg:"px-3.5 py-2.5",xl:"px-3.5 py-2.5"},square:{"2xs":"p-1",xs:"p-1.5",sm:"p-1.5",md:"p-2",lg:"p-2.5",xl:"p-2.5"},color:{white:{solid:"shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:bg-gray-50 disabled:bg-white dark:bg-gray-900 dark:hover:bg-gray-800/50 dark:disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",ghost:"text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"},gray:{solid:"shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",ghost:"text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",link:"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"},black:{solid:"shadow-sm text-white dark:text-gray-900 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 dark:disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",link:"text-gray-900 dark:text-white underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"}},variant:{solid:"shadow-sm text-white dark:text-gray-900 bg-{color}-500 hover:bg-{color}-600 disabled:bg-{color}-500 dark:bg-{color}-400 dark:hover:bg-{color}-500 dark:disabled:bg-{color}-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-500 dark:focus-visible:outline-{color}-400",outline:"ring-1 ring-inset ring-current text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",soft:"text-{color}-500 dark:text-{color}-400 bg-{color}-50 hover:bg-{color}-100 disabled:bg-{color}-50 dark:bg-{color}-950 dark:hover:bg-{color}-900 dark:disabled:bg-{color}-950 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",ghost:"text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",link:"text-{color}-500 hover:text-{color}-600 disabled:text-{color}-500 dark:text-{color}-400 dark:hover:text-{color}-500 dark:disabled:text-{color}-400 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400"},icon:{base:"flex-shrink-0",loading:"animate-spin",size:{"2xs":"h-4 w-4",xs:"h-4 w-4",sm:"h-5 w-5",md:"h-5 w-5",lg:"h-5 w-5",xl:"h-6 w-6"}},default:{size:"sm",variant:"solid",color:"primary",loadingIcon:"i-heroicons-arrow-path-20-solid"}},s=H(B.ui.strategy,B.ui.button,_),ee=q({components:{UIcon:z,ULink:O},inheritAttrs:!1,props:{type:{type:String,default:"button"},block:{type:Boolean,default:!1},label:{type:String,default:null},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:()=>s.default.size,validator(e){return Object.keys(s.size).includes(e)}},color:{type:String,default:()=>s.default.color,validator(e){return[...B.ui.colors,...Object.keys(s.color)].includes(e)}},variant:{type:String,default:()=>s.default.variant,validator(e){return[...Object.keys(s.variant),...Object.values(s.color).flatMap(n=>Object.keys(n))].includes(e)}},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>s.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:null},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},square:{type:Boolean,default:!1},truncate:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e,{slots:n}){const{ui:i,attrs:r}=W("button",J(e,"ui"),s),{size:a,rounded:t}=Z({ui:i,props:e}),o=l(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),u=l(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),f=l(()=>e.square||!n.default&&!e.label),h=l(()=>{var m,S;const g=((S=(m=i.value.color)==null?void 0:m[e.color])==null?void 0:S[e.variant])||i.value.variant[e.variant];return T(w(i.value.base,i.value.font,t.value,i.value.size[a.value],i.value.gap[a.value],e.padded&&i.value[f.value?"square":"padding"][a.value],g==null?void 0:g.replaceAll("{color}",e.color),e.block?i.value.block:i.value.inline),e.class)}),p=l(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),x=l(()=>e.loading&&!o.value?e.loadingIcon:e.trailingIcon||e.icon),v=l(()=>w(i.value.icon.base,i.value.icon.size[a.value],e.loading&&i.value.icon.loading)),y=l(()=>w(i.value.icon.base,i.value.icon.size[a.value],e.loading&&!o.value&&i.value.icon.loading));return{ui:i,attrs:r,isLeading:o,isTrailing:u,isSquare:f,buttonClass:h,leadingIconName:p,trailingIconName:x,leadingIconClass:v,trailingIconClass:y}}});function ae(e,n,i,r,a,t){const o=z,u=O;return d(),c(u,k({type:e.type,disabled:e.disabled||e.loading,class:e.buttonClass},e.attrs),{default:$(()=>[b(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[e.isLeading&&e.leadingIconName?(d(),c(o,{key:0,name:e.leadingIconName,class:I(e.leadingIconClass),"aria-hidden":"true"},null,8,["name","class"])):C("",!0)]),b(e.$slots,"default",{},()=>[e.label?(d(),K("span",{key:0,class:I([e.truncate?e.ui.truncate:""])},E(e.label),3)):C("",!0)]),b(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[e.isTrailing&&e.trailingIconName?(d(),c(o,{key:0,name:e.trailingIconName,class:I(e.trailingIconClass),"aria-hidden":"true"},null,8,["name","class"])):C("",!0)])]),_:3},16,["type","disabled","class"])}const oe=N(ee,[["render",ae]]);export{oe as _,O as a,Z as u};
