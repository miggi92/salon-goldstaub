if(!self.define){let n,e={};const u=(u,l)=>(u=new URL(u+".js",l).href,e[u]||new Promise((e=>{if("document"in self){const n=document.createElement("script");n.src=u,n.onload=e,document.head.appendChild(n)}else n=u,importScripts(u),e()})).then((()=>{let n=e[u];if(!n)throw new Error(`Module ${u} didn’t register its module`);return n})));self.define=(l,r)=>{const i=n||("document"in self?document.currentScript.src:"")||location.href;if(e[i])return;let s={};const o=n=>u(n,i),t={module:{uri:i},exports:s,require:o};e[i]=Promise.all(l.map((n=>t[n]||o(n)))).then((n=>(r(...n),s)))}}define(["./workbox-56a10583"],(function(n){"use strict";self.skipWaiting(),n.clientsClaim(),n.precacheAndRoute([{url:"_ipx/_/logo.svg",revision:"e7303f330514789c534577d1414e3c20"},{url:"_nuxt/_...slug_.7f61c26e.js",revision:null},{url:"_nuxt/_plugin-vue_export-helper.c27b6911.js",revision:null},{url:"_nuxt/about.44678a6c.js",revision:null},{url:"_nuxt/arrival.d434d787.js",revision:null},{url:"_nuxt/asyncData.b24c0227.js",revision:null},{url:"_nuxt/Button.16e9782f.js",revision:null},{url:"_nuxt/Callout.5aeaabf7.js",revision:null},{url:"_nuxt/Card.23d7718e.js",revision:null},{url:"_nuxt/Card.bf0ba101.js",revision:null},{url:"_nuxt/CardGroup.ccfcebfc.js",revision:null},{url:"_nuxt/client-db.3ef6a76a.js",revision:null},{url:"_nuxt/CodeGroup.019ac394.js",revision:null},{url:"_nuxt/Collapsible.ee58ed6c.js",revision:null},{url:"_nuxt/contact.cce14608.js",revision:null},{url:"_nuxt/ContentDoc.2abb5bc9.js",revision:null},{url:"_nuxt/ContentList.9705a482.js",revision:null},{url:"_nuxt/ContentNavigation.ffaf24b5.js",revision:null},{url:"_nuxt/ContentQuery.dd0ab0c7.js",revision:null},{url:"_nuxt/ContentRenderer.0c946946.js",revision:null},{url:"_nuxt/ContentRendererMarkdown.b907c938.js",revision:null},{url:"_nuxt/ContentRendererMarkdown.vue.580e606a.js",revision:null},{url:"_nuxt/ContentSlot.cd1f1fb1.js",revision:null},{url:"_nuxt/default.63a49031.js",revision:null},{url:"_nuxt/DocumentDrivenEmpty.628eaed7.js",revision:null},{url:"_nuxt/DocumentDrivenNotFound.332b7451.js",revision:null},{url:"_nuxt/entry.d11b89e7.js",revision:null},{url:"_nuxt/error-404.871584dc.css",revision:null},{url:"_nuxt/error-404.d5987c0d.js",revision:null},{url:"_nuxt/error-500.5504fd74.css",revision:null},{url:"_nuxt/error-500.c5480914.js",revision:null},{url:"_nuxt/Field.e104b7d4.js",revision:null},{url:"_nuxt/FieldGroup.2cd6ad27.js",revision:null},{url:"_nuxt/Icon.a7c38fda.js",revision:null},{url:"_nuxt/Icon.d532e251.css",revision:null},{url:"_nuxt/Icon.e91a3538.js",revision:null},{url:"_nuxt/IconCSS.a7c0c8e4.js",revision:null},{url:"_nuxt/IconCSS.b61fea9f.css",revision:null},{url:"_nuxt/imprint.c9c21650.js",revision:null},{url:"_nuxt/index.288f722b.js",revision:null},{url:"_nuxt/index.344f9f74.js",revision:null},{url:"_nuxt/index.4df4817c.js",revision:null},{url:"_nuxt/index.6b194dcc.js",revision:null},{url:"_nuxt/index.6bba5fce.js",revision:null},{url:"_nuxt/index.824f6a04.js",revision:null},{url:"_nuxt/index.df58e121.js",revision:null},{url:"_nuxt/Markdown.d30b2c6e.js",revision:null},{url:"_nuxt/node.e4a9c3bc.js",revision:null},{url:"_nuxt/nuxt-img.0cd33070.js",revision:null},{url:"_nuxt/nuxt-link.6bfe2433.js",revision:null},{url:"_nuxt/Page.vue.3886c1e3.js",revision:null},{url:"_nuxt/PageBody.vue.78a2e5e3.js",revision:null},{url:"_nuxt/PageHeader.vue.181fff24.js",revision:null},{url:"_nuxt/preview.84f0cf3b.js",revision:null},{url:"_nuxt/privacy.75f55ea6.js",revision:null},{url:"_nuxt/ProseA.bfc73dda.js",revision:null},{url:"_nuxt/ProseBlockquote.20952e4b.js",revision:null},{url:"_nuxt/ProseCode.86917962.js",revision:null},{url:"_nuxt/ProseCode.e63e49c6.css",revision:null},{url:"_nuxt/ProseCode.vue.d514e35b.js",revision:null},{url:"_nuxt/ProseCodeButton.9ce57317.js",revision:null},{url:"_nuxt/ProseCodeButton.vue.03b20cc2.js",revision:null},{url:"_nuxt/ProseCodeIcon.5b538515.js",revision:null},{url:"_nuxt/ProseCodeIcon.vue.11179e47.js",revision:null},{url:"_nuxt/ProseCodeInline.76c8b8eb.js",revision:null},{url:"_nuxt/ProseEm.887d8ac6.js",revision:null},{url:"_nuxt/ProseH1.cf0d0241.js",revision:null},{url:"_nuxt/ProseH2.073b69e2.js",revision:null},{url:"_nuxt/ProseH3.cb688d08.js",revision:null},{url:"_nuxt/ProseH4.ed51c6e6.js",revision:null},{url:"_nuxt/ProseH5.a45fdd45.js",revision:null},{url:"_nuxt/ProseH6.1b9489c4.js",revision:null},{url:"_nuxt/ProseHr.eba89a05.js",revision:null},{url:"_nuxt/ProseImg.9f1292b3.js",revision:null},{url:"_nuxt/ProseLi.9851f212.js",revision:null},{url:"_nuxt/ProseOl.7f53618c.js",revision:null},{url:"_nuxt/ProseP.05f44e25.js",revision:null},{url:"_nuxt/ProsePre.84f0d9fe.js",revision:null},{url:"_nuxt/ProseScript.4007bea2.js",revision:null},{url:"_nuxt/ProseStrong.e482b96e.js",revision:null},{url:"_nuxt/ProseTable.6773347f.js",revision:null},{url:"_nuxt/ProseTbody.f223ab9c.js",revision:null},{url:"_nuxt/ProseTd.0774ee25.js",revision:null},{url:"_nuxt/ProseTh.c0554292.js",revision:null},{url:"_nuxt/ProseThead.29a0e172.js",revision:null},{url:"_nuxt/ProseTr.8a2699c2.js",revision:null},{url:"_nuxt/ProseUl.d6e935ef.js",revision:null},{url:"_nuxt/query.dd0f8ec7.js",revision:null},{url:"_nuxt/services.1adce0f5.js",revision:null},{url:"_nuxt/Shortcut.71f6a145.js",revision:null},{url:"_nuxt/slot.221acbcd.js",revision:null},{url:"_nuxt/ui.config.fb005057.js",revision:null},{url:"_nuxt/use-resolve-button-type.11c2a168.js",revision:null},{url:"_nuxt/useStudio.2a7b7c1d.js",revision:null},{url:"_nuxt/useStudio.3f8f4a7a.css",revision:null},{url:"_nuxt/useUI.178dba5f.js",revision:null},{url:"_nuxt/workbox-window.prod.es5.a7b12eab.js",revision:null},{url:"200",revision:"5fdb4a89a20e471d89443cb8e1f274d6"},{url:"404",revision:"5fdb4a89a20e471d89443cb8e1f274d6"},{url:"about",revision:"4cbca5760265c817bd0691903c414049"},{url:"apple-touch-icon-180x180.png",revision:"7b602b006a52386b9b440cf4df98c211"},{url:"arrival",revision:"00f892e4891c8eede6bc871895874b5b"},{url:"contact",revision:"3e16fac264e29ea5645577e5152db3e5"},{url:"favicon.ico",revision:"58dbec51a97499eb4f2d0eaa6dfdee37"},{url:"icons/mdi_calendar_clock.png",revision:"0d241cbf26f054e43382da57e632cbd2"},{url:"icons/mdi_feed.png",revision:"b95a17e603f652bad75445e0dcd3424e"},{url:"imprint",revision:"23f3f20d934203b85cecbbd0c4932d49"},{url:"/",revision:"2105021894e5f4ae42fbecb456e16b21"},{url:"logo.svg",revision:"00c7b59cd882cb660aad099d1a3a2aa0"},{url:"maskable-icon-512x512.png",revision:"37e6a2e95361ec0043872ea5eceeb1d6"},{url:"news",revision:"6ad23d8e21ccdad5d0b06fecc5999952"},{url:"news/newwebsite",revision:"f20f187de1777792adf93b73fa796772"},{url:"privacy",revision:"e2e5c0c824be16cc724ffae02495e0e3"},{url:"pwa-192x192.png",revision:"079009d0280d03d60281e60df7c5662b"},{url:"pwa-512x512.png",revision:"0e97a85e6e56fbe890165784661b66c6"},{url:"pwa-64x64.png",revision:"e194128bd6b0cf9f57b342f6c0c8e117"},{url:"services",revision:"e3d5b387be025e05d170af7a6a072cfe"},{url:"manifest.webmanifest",revision:"01650bef6ed6bc2cddae31a454c77bce"}],{}),n.cleanupOutdatedCaches(),n.registerRoute(new n.NavigationRoute(n.createHandlerBoundToURL("/")))}));
