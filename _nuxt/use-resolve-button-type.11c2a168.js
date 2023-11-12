import{aD as $,a2 as k,F as S,E as C,N as P,r as T,o as D,Z as H}from"./entry.d11b89e7.js";function w(e,t,...n){if(e in t){let o=t[e];return typeof o=="function"?o(...n):o}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(o=>`"${o}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,w),r}var U=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(U||{}),N=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(N||{});function Y({visible:e=!0,features:t=0,ourProps:n,theirProps:r,...o}){var i;let u=O(r,n),s=Object.assign(o,{props:u});if(e||t&2&&u.static)return y(s);if(t&1){let f=(i=u.unmount)==null||i?0:1;return w(f,{0(){return null},1(){return y({...o,props:{...u,hidden:!0,style:{display:"none"}}})}})}return y(s)}function y({props:e,attrs:t,slots:n,slot:r,name:o}){var i,u;let{as:s,...f}=R(e,["unmount","static"]),l=(i=n.default)==null?void 0:i.call(n,r),m={};if(r){let c=!1,h=[];for(let[d,p]of Object.entries(r))typeof p=="boolean"&&(c=!0),p===!0&&h.push(d);c&&(m["data-headlessui-state"]=h.join(" "))}if(s==="template"){if(l=j(l??[]),Object.keys(f).length>0||Object.keys(t).length>0){let[c,...h]=l??[];if(!L(c)||h.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${o} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(f).concat(Object.keys(t)).map(a=>a.trim()).filter((a,g,A)=>A.indexOf(a)===g).sort((a,g)=>a.localeCompare(g)).map(a=>`  - ${a}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(a=>`  - ${a}`).join(`
`)].join(`
`));let d=O((u=c.props)!=null?u:{},f),p=$(c,d);for(let a in d)a.startsWith("on")&&(p.props||(p.props={}),p.props[a]=d[a]);return p}return Array.isArray(l)&&l.length===1?l[0]:l}return k(s,Object.assign({},f,m),{default:()=>l})}function j(e){return e.flatMap(t=>t.type===S?j(t.children):[t])}function O(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let r of e)for(let o in r)o.startsWith("on")&&typeof r[o]=="function"?(n[o]!=null||(n[o]=[]),n[o].push(r[o])):t[o]=r[o];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(r=>[r,void 0])));for(let r in n)Object.assign(t,{[r](o,...i){let u=n[r];for(let s of u){if(o instanceof Event&&o.defaultPrevented)return;s(o,...i)}}});return t}function R(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}function L(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}let x=0;function B(){return++x}function Z(){return B()}var M=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(M||{});function b(e){var t;return e==null||e.value==null?null:(t=e.value.$el)!=null?t:e.value}let E=Symbol("Context");var F=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(F||{});function q(){return W()!==null}function W(){return C(E,null)}function z(e){P(E,e)}function v(e,t){if(e)return e;let n=t??"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function G(e,t){let n=T(v(e.value.type,e.value.as));return D(()=>{n.value=v(e.value.type,e.value.as)}),H(()=>{var r;n.value||b(t)&&b(t)instanceof HTMLButtonElement&&!((r=b(t))!=null&&r.hasAttribute("type"))&&(n.value="button")}),n}export{q as C,Y as H,U as N,N as S,R as T,M as a,G as b,z as c,F as l,b as o,W as p,Z as t,w as u};
