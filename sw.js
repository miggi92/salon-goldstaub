if(!self.define){let n,e={};const u=(u,l)=>(u=new URL(u+".js",l).href,e[u]||new Promise((e=>{if("document"in self){const n=document.createElement("script");n.src=u,n.onload=e,document.head.appendChild(n)}else n=u,importScripts(u),e()})).then((()=>{let n=e[u];if(!n)throw new Error(`Module ${u} didn’t register its module`);return n})));self.define=(l,r)=>{const i=n||("document"in self?document.currentScript.src:"")||location.href;if(e[i])return;let s={};const o=n=>u(n,i),t={module:{uri:i},exports:s,require:o};e[i]=Promise.all(l.map((n=>t[n]||o(n)))).then((n=>(r(...n),s)))}}define(["./workbox-56a10583"],(function(n){"use strict";self.skipWaiting(),n.clientsClaim(),n.precacheAndRoute([{url:"_ipx/_/logo.svg",revision:"e7303f330514789c534577d1414e3c20"},{url:"_nuxt/_...slug_.a6bf7074.js",revision:null},{url:"_nuxt/_plugin-vue_export-helper.c27b6911.js",revision:null},{url:"_nuxt/about.5cc1964d.js",revision:null},{url:"_nuxt/arrival.c324bf3a.js",revision:null},{url:"_nuxt/asyncData.c7a99fa0.js",revision:null},{url:"_nuxt/Button.060926bf.js",revision:null},{url:"_nuxt/Callout.bfa5175b.js",revision:null},{url:"_nuxt/Card.2592a8f9.js",revision:null},{url:"_nuxt/Card.9227c504.js",revision:null},{url:"_nuxt/CardGroup.c0c49fa1.js",revision:null},{url:"_nuxt/client-db.310d9a9e.js",revision:null},{url:"_nuxt/CodeGroup.645c6b69.js",revision:null},{url:"_nuxt/Collapsible.15a02976.js",revision:null},{url:"_nuxt/contact.f77cb6eb.js",revision:null},{url:"_nuxt/ContentDoc.8421fec9.js",revision:null},{url:"_nuxt/ContentList.cc44fd43.js",revision:null},{url:"_nuxt/ContentNavigation.87fa8b44.js",revision:null},{url:"_nuxt/ContentQuery.ad302f9b.js",revision:null},{url:"_nuxt/ContentRenderer.d0d023ed.js",revision:null},{url:"_nuxt/ContentRendererMarkdown.905cc258.js",revision:null},{url:"_nuxt/ContentRendererMarkdown.vue.c10ebfaf.js",revision:null},{url:"_nuxt/ContentSlot.a4f98e86.js",revision:null},{url:"_nuxt/default.a8765ba6.js",revision:null},{url:"_nuxt/DocumentDrivenEmpty.9b2f73fe.js",revision:null},{url:"_nuxt/DocumentDrivenNotFound.f9b7b857.js",revision:null},{url:"_nuxt/entry.b0526028.js",revision:null},{url:"_nuxt/error-404.871584dc.css",revision:null},{url:"_nuxt/error-404.e8e03c90.js",revision:null},{url:"_nuxt/error-500.380128d3.js",revision:null},{url:"_nuxt/error-500.5504fd74.css",revision:null},{url:"_nuxt/Field.d005aef6.js",revision:null},{url:"_nuxt/FieldGroup.6c2f5b61.js",revision:null},{url:"_nuxt/Icon.102a1d44.js",revision:null},{url:"_nuxt/Icon.563e6554.js",revision:null},{url:"_nuxt/Icon.d532e251.css",revision:null},{url:"_nuxt/IconCSS.b61fea9f.css",revision:null},{url:"_nuxt/IconCSS.fdbf1505.js",revision:null},{url:"_nuxt/imprint.014b4a30.js",revision:null},{url:"_nuxt/index.05573642.js",revision:null},{url:"_nuxt/index.21f09cde.js",revision:null},{url:"_nuxt/index.288f722b.js",revision:null},{url:"_nuxt/index.344f9f74.js",revision:null},{url:"_nuxt/index.4df4817c.js",revision:null},{url:"_nuxt/index.c339f2ac.js",revision:null},{url:"_nuxt/index.df58e121.js",revision:null},{url:"_nuxt/Markdown.5f581762.js",revision:null},{url:"_nuxt/node.e4a9c3bc.js",revision:null},{url:"_nuxt/nuxt-img.79b75ac3.js",revision:null},{url:"_nuxt/nuxt-link.371678b2.js",revision:null},{url:"_nuxt/Page.vue.295b5f99.js",revision:null},{url:"_nuxt/PageBody.vue.17313ec7.js",revision:null},{url:"_nuxt/PageHeader.vue.3422dd00.js",revision:null},{url:"_nuxt/preview.6ab1cc66.js",revision:null},{url:"_nuxt/privacy.01a007f2.js",revision:null},{url:"_nuxt/ProseA.63114806.js",revision:null},{url:"_nuxt/ProseBlockquote.0481e428.js",revision:null},{url:"_nuxt/ProseCode.d90a97f1.js",revision:null},{url:"_nuxt/ProseCode.e63e49c6.css",revision:null},{url:"_nuxt/ProseCode.vue.6d499957.js",revision:null},{url:"_nuxt/ProseCodeButton.e4e396ab.js",revision:null},{url:"_nuxt/ProseCodeButton.vue.dee37334.js",revision:null},{url:"_nuxt/ProseCodeIcon.3ae5c81f.js",revision:null},{url:"_nuxt/ProseCodeIcon.vue.74589a05.js",revision:null},{url:"_nuxt/ProseCodeInline.c9b00188.js",revision:null},{url:"_nuxt/ProseEm.5d2289c6.js",revision:null},{url:"_nuxt/ProseH1.4b02a76d.js",revision:null},{url:"_nuxt/ProseH2.474e9193.js",revision:null},{url:"_nuxt/ProseH3.16c5ee1f.js",revision:null},{url:"_nuxt/ProseH4.81bab1fd.js",revision:null},{url:"_nuxt/ProseH5.9ea9f03b.js",revision:null},{url:"_nuxt/ProseH6.36eafe81.js",revision:null},{url:"_nuxt/ProseHr.01a04aee.js",revision:null},{url:"_nuxt/ProseImg.7e44b8a1.js",revision:null},{url:"_nuxt/ProseLi.2bcb3a1d.js",revision:null},{url:"_nuxt/ProseOl.899780de.js",revision:null},{url:"_nuxt/ProseP.7b72f8f2.js",revision:null},{url:"_nuxt/ProsePre.957d14a0.js",revision:null},{url:"_nuxt/ProseScript.ca24caa1.js",revision:null},{url:"_nuxt/ProseStrong.c674bc73.js",revision:null},{url:"_nuxt/ProseTable.3dbc7a34.js",revision:null},{url:"_nuxt/ProseTbody.07f9051d.js",revision:null},{url:"_nuxt/ProseTd.cba89654.js",revision:null},{url:"_nuxt/ProseTh.f2818640.js",revision:null},{url:"_nuxt/ProseThead.7efbf87e.js",revision:null},{url:"_nuxt/ProseTr.492959fa.js",revision:null},{url:"_nuxt/ProseUl.5a80d431.js",revision:null},{url:"_nuxt/query.c8f48e37.js",revision:null},{url:"_nuxt/services.201499a8.js",revision:null},{url:"_nuxt/Shortcut.19fa52ed.js",revision:null},{url:"_nuxt/slot.17975ca5.js",revision:null},{url:"_nuxt/ui.config.1731e858.js",revision:null},{url:"_nuxt/use-resolve-button-type.cfe53187.js",revision:null},{url:"_nuxt/useStudio.3f8f4a7a.css",revision:null},{url:"_nuxt/useStudio.a4dec67d.js",revision:null},{url:"_nuxt/useUI.c57a9d94.js",revision:null},{url:"_nuxt/workbox-window.prod.es5.a7b12eab.js",revision:null},{url:"200",revision:"bd2494878f19f28f7bf2f10de1f4308f"},{url:"404",revision:"bd2494878f19f28f7bf2f10de1f4308f"},{url:"about",revision:"c7e3bde3e09bc06190b2519125726f4b"},{url:"apple-touch-icon-180x180.png",revision:"7b602b006a52386b9b440cf4df98c211"},{url:"arrival",revision:"0b83a89be5b30681ffe03502b4cbe209"},{url:"contact",revision:"96fc806764fe74066dd37f2507bfe513"},{url:"favicon.ico",revision:"58dbec51a97499eb4f2d0eaa6dfdee37"},{url:"icons/mdi_calendar_clock.png",revision:"0d241cbf26f054e43382da57e632cbd2"},{url:"icons/mdi_feed.png",revision:"b95a17e603f652bad75445e0dcd3424e"},{url:"imprint",revision:"99eb7b7d552bc317120377b4d046275c"},{url:"/",revision:"169e5f896e48de8d9ac3d402aaa98713"},{url:"logo.svg",revision:"00c7b59cd882cb660aad099d1a3a2aa0"},{url:"maskable-icon-512x512.png",revision:"37e6a2e95361ec0043872ea5eceeb1d6"},{url:"news",revision:"eb33b3967dced7b374b200581ff8ff1b"},{url:"news/newwebsite",revision:"18234baef3a750c797ada5450566a4b8"},{url:"privacy",revision:"bb8c05ce54ff206b3e0943c4532ba709"},{url:"pwa-192x192.png",revision:"079009d0280d03d60281e60df7c5662b"},{url:"pwa-512x512.png",revision:"0e97a85e6e56fbe890165784661b66c6"},{url:"pwa-64x64.png",revision:"e194128bd6b0cf9f57b342f6c0c8e117"},{url:"services",revision:"dfd136c6d329c3f5383378bee9e234d9"},{url:"manifest.webmanifest",revision:"eb0f371d3ed09cae8d6e629f804f6ebb"}],{}),n.cleanupOutdatedCaches(),n.registerRoute(new n.NavigationRoute(n.createHandlerBoundToURL("/")))}));
