import{d as m,aE as f,s as _,G as a,b as d,c as I,aC as v}from"./entry.be23bc79.js";import{r as x}from"./index.df58e121.js";import{_ as S}from"./_plugin-vue_export-helper.c27b6911.js";const y=m({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(u){f(e=>({"3f28f670":p.value}));const t=_(),o=u,l=a(()=>{var e,n;return(n=(e=t.nuxtIcon)==null?void 0:e.aliases)!=null&&n[o.name]?t.nuxtIcon.aliases[o.name]:o.name}),c=a(()=>x(l.value)),p=a(()=>{var s,r;const e=(r=(s=t.nuxtIcon)==null?void 0:s.iconifyApiOptions)==null?void 0:r.url;if(e)try{new URL(e)}catch{console.warn("Nuxt IconCSS: Invalid custom Iconify API URL");return}return`url('${e||"https://api.iconify.design"}/${c.value.prefix}/${c.value.name}.svg')`}),i=a(()=>{var n,s,r;if(!o.size&&typeof((n=t.nuxtIcon)==null?void 0:n.size)=="boolean"&&!((s=t.nuxtIcon)!=null&&s.size))return;const e=o.size||((r=t.nuxtIcon)==null?void 0:r.size)||"1em";return String(Number(e))===e?`${e}px`:e});return(e,n)=>(d(),I("span",{style:v({width:i.value,height:i.value})},null,4))}});const h=S(y,[["__scopeId","data-v-82edb119"]]);export{h as default};