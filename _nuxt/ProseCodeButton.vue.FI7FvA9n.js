import{_ as p}from"./Button.1S2ZEy7k.js";import{u as s}from"./useUI.syq92H1-.js";import{d as l}from"./index.TNdhabbJ.js";import{m as f,d as m,r as _,b,C as v,$ as y}from"./entry.SipSossG.js";function C(){const t=f("notifications",()=>[]);function c(o){const e={id:new Date().getTime().toString(),...o};return t.value.findIndex(n=>n.id===e.id)===-1&&t.value.push(e),e}function r(o){t.value=t.value.filter(e=>e.id!==o)}return{add:c,remove:r}}function x(t={}){const{copy:c,isSupported:r}=l(),o=C();function e(i,n={},a={}){r&&c(i).then(()=>{!n.title&&!n.description||o.add({...n,...t})},function(d){o.add({...a,description:a.description||d.message,...t})})}return{copy:e}}const B=m({__name:"ProseCodeButton",props:{code:{type:String,required:!0}},setup(t){const c=t,r={icon:{copy:"i-heroicons-clipboard-document",copied:"i-heroicons-clipboard-document-check"}},{ui:o}=s("content.prose.code.button",void 0,r,void 0,!0),e=x({timeout:2e3}),i=_(o.value.icon.copy);function n(){e.copy(c.code,{title:"Copied to clipboard!"}),i.value=o.value.icon.copied,setTimeout(()=>{i.value=o.value.icon.copy},2e3)}return(a,d)=>{const u=p;return b(),v(u,{icon:y(i),color:"gray",variant:"link",size:"xs","aria-label":"Copy code to clipboard",tabindex:"-1",onClick:n},null,8,["icon"])}}});export{B as _};
