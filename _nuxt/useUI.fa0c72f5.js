import{an as y,v as C,M as p,ao as c,O as d}from"./entry.f17a23bd.js";function v(n,s){const o={...n};for(const t of s)delete o[t];return o}function N(n,s,o){typeof s=="string"&&(s=s.split(".").map(r=>{const e=Number(r);return isNaN(e)?r:e}));let t=n;for(const r of s){if(t==null)return o;t=t[r]}return t!==void 0?t:o}const A=(n,s,o,t,r=!1)=>{const e=y(),i=C(),g=p(()=>{var f;const u=c(s),m=c(o),a=c(t);return d((u==null?void 0:u.strategy)||((f=i.ui)==null?void 0:f.strategy),a?{wrapper:a}:{},u||{},r?N(i.ui,n,{}):{},m||{})}),l=p(()=>v(e,["class"]));return{ui:g,attrs:l}};export{A as u};
