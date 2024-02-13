import{aJ as $,ab as k,F as S,I as C,U as P,r as T,o as H,a6 as U}from"./entry._r6ZSgIS.js";function w(e,t,...n){if(e in t){let o=t[e];return typeof o=="function"?o(...n):o}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(o=>`"${o}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,w),r}var D=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(D||{}),R=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(R||{});function J({visible:e=!0,features:t=0,ourProps:n,theirProps:r,...o}){var i;let u=O(r,n),s=Object.assign(o,{props:u});if(e||t&2&&u.static)return b(s);if(t&1){let f=(i=u.unmount)==null||i?0:1;return w(f,{0(){return null},1(){return b({...o,props:{...u,hidden:!0,style:{display:"none"}}})}})}return b(s)}function b({props:e,attrs:t,slots:n,slot:r,name:o}){var i,u;let{as:s,...f}=L(e,["unmount","static"]),l=(i=n.default)==null?void 0:i.call(n,r),m={};if(r){let c=!1,h=[];for(let[d,p]of Object.entries(r))typeof p=="boolean"&&(c=!0),p===!0&&h.push(d);c&&(m["data-headlessui-state"]=h.join(" "))}if(s==="template"){if(l=j(l??[]),Object.keys(f).length>0||Object.keys(t).length>0){let[c,...h]=l??[];if(!N(c)||h.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${o} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(f).concat(Object.keys(t)).map(a=>a.trim()).filter((a,g,A)=>A.indexOf(a)===g).sort((a,g)=>a.localeCompare(g)).map(a=>`  - ${a}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(a=>`  - ${a}`).join(`
`)].join(`
`));let d=O((u=c.props)!=null?u:{},f),p=$(c,d);for(let a in d)a.startsWith("on")&&(p.props||(p.props={}),p.props[a]=d[a]);return p}return Array.isArray(l)&&l.length===1?l[0]:l}return k(s,Object.assign({},f,m),{default:()=>l})}function j(e){return e.flatMap(t=>t.type===S?j(t.children):[t])}function O(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let r of e)for(let o in r)o.startsWith("on")&&typeof r[o]=="function"?(n[o]!=null||(n[o]=[]),n[o].push(r[o])):t[o]=r[o];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(r=>[r,void 0])));for(let r in n)Object.assign(t,{[r](o,...i){let u=n[r];for(let s of u){if(o instanceof Event&&o.defaultPrevented)return;s(o,...i)}}});return t}function L(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}function N(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}let x=0;function B(){return++x}function V(){return B()}var M=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(M||{});function y(e){var t;return e==null||e.value==null?null:(t=e.value.$el)!=null?t:e.value}let E=Symbol("Context");var F=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(F||{});function Y(){return W()!==null}function W(){return C(E,null)}function q(e){P(E,e)}function v(e,t){if(e)return e;let n=t??"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function z(e,t){let n=T(v(e.value.type,e.value.as));return H(()=>{n.value=v(e.value.type,e.value.as)}),U(()=>{var r;n.value||y(t)&&y(t)instanceof HTMLButtonElement&&!((r=y(t))!=null&&r.hasAttribute("type"))&&(n.value="button")}),n}export{Y as C,J as H,D as N,R as S,L as T,M as a,z as b,q as c,F as l,y as o,W as p,V as t,w as u};