import{_ as s}from"./BDPrbDNm.js";import{u as p}from"./B7oWG7IA.js";import{g as l}from"./gAsa0hZt.js";import{l as f,d as m,r as v,c as _,G as y,C as b}from"./CW5Gbv_A.js";function x(){const o=f("notifications",()=>[]);function r(n){const e={id:new Date().getTime().toString(),...n};return o.value.findIndex(c=>c.id===e.id)===-1&&o.value.push(e),e}function a(n){o.value=o.value.filter(e=>e.id!==n)}function t(n,e){const i=o.value.findIndex(c=>c.id===n);if(i!==-1){const c=o.value[i];o.value.splice(i,1,{...c,...e})}}function u(){o.value=[]}return{add:r,remove:a,update:t,clear:u}}function C(o={}){const{copy:r,isSupported:a}=l(),t=x();function u(n,e={},i={}){a&&r(n).then(()=>{!e.title&&!e.description||t.add({...e,...o})},function(c){t.add({...i,description:i.description||c.message,...o})})}return{copy:u}}const B=m({__name:"ProseCodeButton",props:{code:{type:String,required:!0}},setup(o){const r=o,a={icon:{copy:"i-heroicons-clipboard-document",copied:"i-heroicons-clipboard-document-check"}},{ui:t}=p("content.prose.code.button",void 0,a,void 0,!0),u=C({timeout:2e3}),n=v(t.value.icon.copy);function e(){u.copy(r.code,{title:"Copied to clipboard!"}),n.value=t.value.icon.copied,setTimeout(()=>{n.value=t.value.icon.copy},2e3)}return(i,c)=>{const d=s;return _(),y(d,{icon:b(n),color:"gray",variant:"link",size:"xs","aria-label":"Copy code to clipboard",tabindex:"-1",onClick:e},null,8,["icon"])}}});export{B as _};