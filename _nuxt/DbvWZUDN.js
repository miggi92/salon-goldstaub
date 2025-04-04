import{N as O,d as A,O as T,r as H,aE as Z,G as z,ac as ee,I as d,i as s,w as P,c as u,e as a,g as L,n as r,K as c,a5 as Y,A as C,t as $,R as X,Q as N,aF as te,J as w,P as E,f as ie,F as D,W as J,Y as oe}from"./Cg3XS0tK.js";import{a as se}from"./WqQav8aG.js";import{g as q}from"./COFouZdd.js";import{t as f}from"./DzuuaO7A.js";import{_ as re}from"./BSN1tRVo.js";const ae={slots:{root:"relative flex rounded-[calc(var(--ui-radius)*2)]",spotlight:"absolute inset-0 rounded-[inherit] pointer-events-none bg-(--ui-bg)/90",container:"relative flex flex-col flex-1 lg:grid gap-x-8 gap-y-4 p-4 sm:p-6",wrapper:"",header:"mb-4",body:"",footer:"mt-4",leading:"inline-flex items-center justify-center mb-2.5",leadingIcon:"size-5 shrink-0 text-(--ui-primary)",title:"text-base text-pretty font-semibold text-(--ui-text-highlighted)",description:"text-[15px] text-pretty"},variants:{orientation:{horizontal:{container:"lg:grid-cols-2 lg:items-center"},vertical:{container:""}},reverse:{true:{wrapper:"lg:order-last"}},variant:{solid:{root:"bg-(--ui-bg-inverted) text-(--ui-bg)",title:"text-(--ui-bg)",description:"text-(--ui-text-dimmed)"},outline:{root:"bg-(--ui-bg) ring ring-(--ui-border)",description:"text-(--ui-text-muted)"},soft:{root:"bg-(--ui-bg-elevated)/50",description:"text-(--ui-text-toned)"},subtle:{root:"bg-(--ui-bg-elevated)/50 ring ring-(--ui-border)",description:"text-(--ui-text-toned)"},ghost:{description:"text-(--ui-text-muted)"},naked:{container:"p-0 sm:p-0",description:"text-(--ui-text-muted)"}},to:{true:{root:["transition"]}},title:{true:{description:"mt-1"}},highlight:{true:{root:"ring-2"}},highlightColor:{primary:"",secondary:"",success:"",info:"",warning:"",error:"",neutral:""},spotlight:{true:{root:"[--spotlight-size:400px] before:absolute before:-inset-px before:pointer-events-none before:rounded-[inherit] before:bg-[radial-gradient(var(--spotlight-size)_var(--spotlight-size)_at_calc(var(--spotlight-x,0px))_calc(var(--spotlight-y,0px)),var(--spotlight-color),transparent_70%)]"}},spotlightColor:{primary:"",secondary:"",success:"",info:"",warning:"",error:"",neutral:""}},compoundVariants:[{variant:"solid",to:!0,class:{root:"hover:bg-(--ui-bg-inverted)/90"}},{variant:"outline",to:!0,class:{root:"hover:bg-(--ui-bg-elevated)/50"}},{variant:"soft",to:!0,class:{root:"hover:bg-(--ui-bg-elevated)"}},{variant:"subtle",to:!0,class:{root:"hover:bg-(--ui-bg-elevated)"}},{variant:"subtle",to:!0,highlight:!1,class:{root:"hover:ring-(--ui-border-accented)"}},{variant:"ghost",to:!0,class:{root:"hover:bg-(--ui-bg-elevated)/50"}},{highlightColor:"primary",highlight:!0,class:{root:"ring-(--ui-primary)"}},{highlightColor:"secondary",highlight:!0,class:{root:"ring-(--ui-secondary)"}},{highlightColor:"success",highlight:!0,class:{root:"ring-(--ui-success)"}},{highlightColor:"info",highlight:!0,class:{root:"ring-(--ui-info)"}},{highlightColor:"warning",highlight:!0,class:{root:"ring-(--ui-warning)"}},{highlightColor:"error",highlight:!0,class:{root:"ring-(--ui-error)"}},{highlightColor:"neutral",highlight:!0,class:{root:"ring-(--ui-border-inverted)"}},{spotlightColor:"primary",spotlight:!0,class:{root:"[--spotlight-color:var(--ui-primary)]"}},{spotlightColor:"secondary",spotlight:!0,class:{root:"[--spotlight-color:var(--ui-secondary)]"}},{spotlightColor:"success",spotlight:!0,class:{root:"[--spotlight-color:var(--ui-success)]"}},{spotlightColor:"info",spotlight:!0,class:{root:"[--spotlight-color:var(--ui-info)]"}},{spotlightColor:"warning",spotlight:!0,class:{root:"[--spotlight-color:var(--ui-warning)]"}},{spotlightColor:"error",spotlight:!0,class:{root:"[--spotlight-color:var(--ui-error)]"}},{spotlightColor:"neutral",spotlight:!0,class:{root:"[--spotlight-color:var(--ui-bg-inverted)]"}}],defaultVariants:{variant:"outline",highlightColor:"primary",spotlightColor:"primary"}},le=O;var K;const ne=f({extend:f(ae),...((K=le.uiPro)==null?void 0:K.pageCard)||{}}),ue=A({inheritAttrs:!1,__name:"PageCard",props:{as:{},icon:{},title:{},description:{},orientation:{default:"vertical"},reverse:{type:Boolean},highlight:{type:Boolean},highlightColor:{},spotlight:{type:Boolean},spotlightColor:{},variant:{},to:{},target:{},onClick:{},class:{},ui:{}},setup(y){const e=y,t=T(),n=H(),i=Z(),{elementX:l,elementY:b}=se(n,{eventFilter:i.eventFilter}),x=z(()=>e.spotlight&&(l.value>0||b.value>0));ee(()=>e.spotlight,o=>{o?i.resume():i.pause()},{immediate:!0});const g=z(()=>ne({orientation:e.orientation,reverse:e.reverse,variant:e.variant,to:!!e.to||!!e.onClick,title:!!e.title||!!t.title,highlight:e.highlight,highlightColor:e.highlightColor,spotlight:x.value,spotlightColor:e.spotlightColor})),_=z(()=>(e.title||t.title&&q(t.title())||"Card link").trim());return(o,v)=>{var I;const p=Y,k=X;return s(),d(w(E),{ref_key:"cardRef",ref:n,as:o.as,"data-orientation":o.orientation,class:r(g.value.root({class:[e.class,(I=e.ui)==null?void 0:I.root]})),style:te(x.value&&{"--spotlight-x":`${w(l)}px`,"--spotlight-y":`${w(b)}px`}),onClick:o.onClick},{default:P(()=>{var F,U,S,j,B,V,G;return[e.spotlight?(s(),u("div",{key:0,class:r(g.value.spotlight({class:(F=e.ui)==null?void 0:F.spotlight}))},null,2)):a("",!0),L("div",{class:r(g.value.container({class:(U=e.ui)==null?void 0:U.container}))},[t.header||t.body||o.icon||t.leading||o.title||t.title||o.description||t.description||t.footer?(s(),u("div",{key:0,class:r(g.value.wrapper({class:(S=e.ui)==null?void 0:S.wrapper}))},[t.header?(s(),u("div",{key:0,class:r(g.value.header({class:(j=e.ui)==null?void 0:j.header}))},[c(o.$slots,"header")],2)):a("",!0),o.icon||t.leading?(s(),u("div",{key:1,class:r(g.value.leading({class:(B=e.ui)==null?void 0:B.leading}))},[c(o.$slots,"leading",{},()=>{var m;return[o.icon?(s(),d(p,{key:0,name:o.icon,class:r(g.value.leadingIcon({class:(m=e.ui)==null?void 0:m.leadingIcon}))},null,8,["name","class"])):a("",!0)]})],2)):a("",!0),t.body||o.title||t.title||o.description||t.description?(s(),u("div",{key:2,class:r(g.value.body({class:(V=e.ui)==null?void 0:V.body}))},[c(o.$slots,"body",{},()=>{var m,h;return[o.title||t.title?(s(),u("div",{key:0,class:r(g.value.title({class:(m=e.ui)==null?void 0:m.title}))},[c(o.$slots,"title",{},()=>[C($(o.title),1)])],2)):a("",!0),o.description||t.description?(s(),u("div",{key:1,class:r(g.value.description({class:(h=e.ui)==null?void 0:h.description}))},[c(o.$slots,"description",{},()=>[C($(o.description),1)])],2)):a("",!0)]})],2)):a("",!0),t.footer?(s(),u("div",{key:3,class:r(g.value.footer({class:(G=e.ui)==null?void 0:G.footer}))},[c(o.$slots,"footer")],2)):a("",!0)],2)):a("",!0),c(o.$slots,"default")],2),o.to?(s(),d(k,N({key:1,"aria-label":_.value},{to:o.to,target:o.target,...o.$attrs},{class:"focus:outline-none peer",tabindex:"-1",raw:""}),{default:P(()=>v[0]||(v[0]=[L("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1)])),_:1},16,["aria-label"])):a("",!0)]}),_:3},8,["as","data-orientation","class","style","onClick"])}}}),Fe=Object.assign(ue,{__name:"UPageCard"}),ce={base:"relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"},ge=O;var M;const de=f({extend:f(ce),...((M=ge.uiPro)==null?void 0:M.pageGrid)||{}}),pe=A({__name:"PageGrid",props:{as:{},class:{}},setup(y){const e=y;return(t,n)=>(s(),d(w(E),{as:t.as,class:r(w(de)({class:e.class}))},{default:P(()=>[c(t.$slots,"default")]),_:3},8,["as","class"]))}}),Ue=Object.assign(pe,{__name:"UPageGrid"}),he={slots:{root:"relative",wrapper:"",leading:"inline-flex items-center justify-center",leadingIcon:"size-5 shrink-0 text-(--ui-primary)",title:"text-base text-pretty font-semibold text-(--ui-text-highlighted)",description:"text-[15px] text-pretty text-(--ui-text-muted)"},variants:{orientation:{horizontal:{root:"flex items-start gap-2.5",leading:"p-0.5"},vertical:{leading:"mb-2.5"}},title:{true:{description:"mt-1"}}}},ve=O;var Q;const me=f({extend:f(he),...((Q=ve.uiPro)==null?void 0:Q.pageFeature)||{}}),fe=A({inheritAttrs:!1,__name:"PageFeature",props:{as:{},icon:{},title:{},description:{},orientation:{default:"horizontal"},to:{},target:{},onClick:{},class:{},ui:{}},setup(y){const e=y,t=T(),n=z(()=>me({orientation:e.orientation,title:!!e.title||!!t.title})),i=z(()=>(e.title||t.title&&q(t.title())||"Feature link").trim());return(l,b)=>{var _;const x=Y,g=X;return s(),d(w(E),{as:l.as,"data-orientation":l.orientation,class:r(n.value.root({class:[e.class,(_=e.ui)==null?void 0:_.root]})),onClick:l.onClick},{default:P(()=>{var o,v;return[l.icon||t.leading?(s(),u("div",{key:0,class:r(n.value.leading({class:(o=e.ui)==null?void 0:o.leading}))},[c(l.$slots,"leading",{},()=>{var p;return[l.icon?(s(),d(x,{key:0,name:l.icon,class:r(n.value.leadingIcon({class:(p=e.ui)==null?void 0:p.leadingIcon}))},null,8,["name","class"])):a("",!0)]})],2)):a("",!0),L("div",{class:r(n.value.wrapper({class:(v=e.ui)==null?void 0:v.wrapper}))},[l.to?(s(),d(g,N({key:0,"aria-label":i.value},{to:l.to,target:l.target,...l.$attrs},{class:"focus:outline-none peer",tabindex:"-1",raw:""}),{default:P(()=>b[0]||(b[0]=[L("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1)])),_:1},16,["aria-label"])):a("",!0),c(l.$slots,"default",{},()=>{var p,k;return[l.title||t.title?(s(),u("div",{key:0,class:r(n.value.title({class:(p=e.ui)==null?void 0:p.title}))},[c(l.$slots,"title",{},()=>[C($(l.title),1)])],2)):a("",!0),l.description||t.description?(s(),u("div",{key:1,class:r(n.value.description({class:(k=e.ui)==null?void 0:k.description}))},[c(l.$slots,"description",{},()=>[C($(l.description),1)])],2)):a("",!0)]})],2)]}),_:3},8,["as","data-orientation","class","onClick"])}}}),ye=Object.assign(fe,{__name:"UPageFeature"}),be={slots:{root:"relative isolate",container:"flex flex-col lg:grid py-16 sm:py-24 lg:py-32 gap-8 sm:gap-16",wrapper:"",headline:"mb-3",leading:"flex items-center mb-6",leadingIcon:"size-10 shrink-0 text-(--ui-primary)",title:"text-3xl sm:text-4xl lg:text-5xl text-pretty tracking-tight font-bold text-(--ui-text-highlighted)",description:"text-base sm:text-lg text-(--ui-text-muted)",links:"mt-8 flex flex-wrap gap-x-6 gap-y-3",features:"mt-8 grid"},variants:{orientation:{horizontal:{container:"lg:grid-cols-2 lg:items-center",description:"text-pretty",features:"gap-4"},vertical:{container:"",headline:"justify-center",leading:"justify-center",title:"text-center",description:"text-center text-balance",links:"justify-center",features:"sm:grid-cols-2 lg:grid-cols-3 gap-8"}},reverse:{true:{wrapper:"lg:order-last"}},headline:{true:{headline:"font-semibold text-(--ui-primary) flex items-center gap-1.5"}},title:{true:{description:"mt-6"}},description:{true:""},features:{true:""}},compoundVariants:[{orientation:"vertical",title:!0,class:{features:"mt-16"}},{orientation:"vertical",description:!0,class:{features:"mt-16"}},{orientation:"vertical",features:!0,class:{links:"mt-16"}}]},ke={key:2,class:"hidden lg:block"},Ce=O;var W;const $e=f({extend:f(be),...((W=Ce.uiPro)==null?void 0:W.pageSection)||{}}),we=A({__name:"PageSection",props:{as:{default:"section"},headline:{},icon:{},title:{},description:{},links:{},features:{},orientation:{default:"vertical"},reverse:{type:Boolean},class:{},ui:{}},setup(y){const e=y,t=T(),n=z(()=>{var i;return $e({orientation:e.orientation,reverse:e.reverse,title:!!e.title||!!t.title,description:!!e.description||!!t.description,features:!!((i=e.features)!=null&&i.length)||!!t.features})});return(i,l)=>{var o;const b=Y,x=ye,g=oe,_=re;return s(),d(w(E),{as:i.as,"data-orientation":i.orientation,class:r(n.value.root({class:[e.class,(o=e.ui)==null?void 0:o.root]}))},{default:P(()=>{var v;return[c(i.$slots,"top"),ie(_,{class:r(n.value.container({class:(v=e.ui)==null?void 0:v.container}))},{default:P(()=>{var p,k,I,F,U,S,j,B,V,G,m;return[i.icon||t.leading||i.headline||t.headline||i.title||t.title||i.description||t.description||(p=i.features)!=null&&p.length||t.features||(k=i.links)!=null&&k.length||t.links?(s(),u("div",{key:0,class:r(n.value.wrapper({class:(I=e.ui)==null?void 0:I.wrapper}))},[i.icon||t.leading?(s(),u("div",{key:0,class:r(n.value.leading({class:(F=e.ui)==null?void 0:F.leading}))},[c(i.$slots,"leading",{},()=>{var h;return[i.icon?(s(),d(b,{key:0,name:i.icon,class:r(n.value.leadingIcon({class:(h=e.ui)==null?void 0:h.leadingIcon}))},null,8,["name","class"])):a("",!0)]})],2)):a("",!0),i.headline||t.headline?(s(),u("div",{key:1,class:r(n.value.headline({class:(U=e.ui)==null?void 0:U.headline,headline:!t.headline}))},[c(i.$slots,"headline",{},()=>[C($(i.headline),1)])],2)):a("",!0),i.title||t.title?(s(),u("h2",{key:2,class:r(n.value.title({class:(S=e.ui)==null?void 0:S.title}))},[c(i.$slots,"title",{},()=>[C($(i.title),1)])],2)):a("",!0),i.description||t.description?(s(),u("div",{key:3,class:r(n.value.description({class:(j=e.ui)==null?void 0:j.description}))},[c(i.$slots,"description",{},()=>[C($(i.description),1)])],2)):a("",!0),(B=i.features)!=null&&B.length||t.features?(s(),u("ul",{key:4,class:r(n.value.features({class:(V=e.ui)==null?void 0:V.features}))},[c(i.$slots,"features",{},()=>[(s(!0),u(D,null,J(i.features,(h,R)=>(s(),d(x,N({key:R,as:"li",ref_for:!0},h),null,16))),128))])],2)):a("",!0),(G=i.links)!=null&&G.length||t.links?(s(),u("div",{key:5,class:r(n.value.links({class:(m=e.ui)==null?void 0:m.links}))},[c(i.$slots,"links",{},()=>[(s(!0),u(D,null,J(i.links,(h,R)=>(s(),d(g,N({key:R,size:"lg",ref_for:!0},h),null,16))),128))])],2)):a("",!0)],2)):a("",!0),t.default?c(i.$slots,"default",{key:1}):i.orientation==="horizontal"?(s(),u("div",ke)):a("",!0)]}),_:3},8,["class"]),c(i.$slots,"bottom")]}),_:3},8,["as","data-orientation","class"])}}}),Se=Object.assign(we,{__name:"UPageSection"});export{Fe as _,Se as a,Ue as b};
