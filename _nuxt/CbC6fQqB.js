import{d as m,K as f,v as I,B as r,b as v,c as d,av as x}from"./CXqQQef-.js";import{r as _}from"./CvPl5tTm.js";import{_ as S}from"./DlAUqK2U.js";const y=m({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(u){f(e=>({e56a549a:p.value}));const t=I(),o=u,l=r(()=>{var e,n;return(n=(e=t.nuxtIcon)==null?void 0:e.aliases)!=null&&n[o.name]?t.nuxtIcon.aliases[o.name]:o.name}),c=r(()=>_(l.value)),p=r(()=>{var s,a;const e=(a=(s=t.nuxtIcon)==null?void 0:s.iconifyApiOptions)==null?void 0:a.url;if(e)try{new URL(e)}catch{console.warn("Nuxt IconCSS: Invalid custom Iconify API URL");return}return`url('${e||"https://api.iconify.design"}/${c.value.prefix}/${c.value.name}.svg')`}),i=r(()=>{var n,s,a;if(!o.size&&typeof((n=t.nuxtIcon)==null?void 0:n.size)=="boolean"&&!((s=t.nuxtIcon)!=null&&s.size))return;const e=o.size||((a=t.nuxtIcon)==null?void 0:a.size)||"1em";return String(Number(e))===e?`${e}px`:e});return(e,n)=>(v(),d("span",{style:x({width:i.value,height:i.value})},null,4))}}),U=S(y,[["__scopeId","data-v-02e33ac2"]]);export{U as default};