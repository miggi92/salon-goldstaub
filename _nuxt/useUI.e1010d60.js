import{an as y,s as C,K as p,ao as c,M as d}from"./entry.81cff137.js";function N(n,s){const o={...n};for(const t of s)delete o[t];return o}function v(n,s,o){typeof s=="string"&&(s=s.split(".").map(r=>{const e=Number(r);return isNaN(e)?r:e}));let t=n;for(const r of s){if(t==null)return o;t=t[r]}return t!==void 0?t:o}const A=(n,s,o,t,r=!1)=>{const e=y(),i=C(),g=p(()=>{var f;const u=c(s),m=c(o),a=c(t);return d((u==null?void 0:u.strategy)||((f=i.ui)==null?void 0:f.strategy),a?{wrapper:a}:{},u||{},r?v(i.ui,n,{}):{},m||{})}),l=p(()=>N(e,["class"]));return{ui:g,attrs:l}};export{A as u};
