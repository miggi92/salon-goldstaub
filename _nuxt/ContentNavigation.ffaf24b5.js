import{u as f}from"./asyncData.b24c0227.js";import{k as v,_ as g,d,a3 as l,G as h,l as _,Y as y,a2 as r}from"./entry.d11b89e7.js";import{h as p}from"./index.344f9f74.js";import{q as C,w as c,e as w,s as P,j as $,u as N}from"./query.dd0f8ec7.js";import{u as j}from"./preview.84f0cf3b.js";import{_ as T}from"./nuxt-link.6bfe2433.js";const D=async e=>{const{content:t}=v().public;typeof(e==null?void 0:e.params)!="function"&&(e=C(e));const a=e.params(),s=t.experimental.stripQueryParameters?c(`/navigation/${`${p(a)}.${t.integrity}`}/${w(a)}.json`):c(`/navigation/${p(a)}.${t.integrity}.json`);if(P())return(await g(()=>import("./client-db.3ef6a76a.js"),["./client-db.3ef6a76a.js","./entry.d11b89e7.js","./query.dd0f8ec7.js","./index.344f9f74.js","./preview.84f0cf3b.js","./index.288f722b.js"],import.meta.url).then(o=>o.generateNavigation))(a);const n=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:$(a),previewToken:j().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n},E=d({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=l(e),a=h(()=>{var n;return typeof((n=t.value)==null?void 0:n.params)=="function"?t.value.params():t.value});if(!a.value&&_("dd-navigation").value){const{navigation:n}=N();return{navigation:n}}const{data:s}=await f(`content-navigation-${p(a.value)}`,()=>D(a.value));return{navigation:s}},render(e){const t=y(),{navigation:a}=e,s=o=>r(T,{to:o._path},()=>o.title),n=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),n(i.children,u+1)]):r("li",null,s(i)))),m=o=>n(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):m(a)}}),S=E;export{S as default};
