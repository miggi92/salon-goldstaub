if(!self.define){let n,e={};const l=(l,u)=>(l=new URL(l+".js",u).href,e[l]||new Promise((e=>{if("document"in self){const n=document.createElement("script");n.src=l,n.onload=e,document.head.appendChild(n)}else n=l,importScripts(l),e()})).then((()=>{let n=e[l];if(!n)throw new Error(`Module ${l} didn’t register its module`);return n})));self.define=(u,r)=>{const i=n||("document"in self?document.currentScript.src:"")||location.href;if(e[i])return;let s={};const o=n=>l(n,i),t={module:{uri:i},exports:s,require:o};e[i]=Promise.all(u.map((n=>t[n]||o(n)))).then((n=>(r(...n),s)))}}define(["./workbox-f3e6b16a"],(function(n){"use strict";self.skipWaiting(),n.clientsClaim(),n.precacheAndRoute([{url:"_ipx/_/logo.svg",revision:"e7303f330514789c534577d1414e3c20"},{url:"_nuxt/_...slug_.e8eb5277.js",revision:null},{url:"_nuxt/_plugin-vue_export-helper.c27b6911.js",revision:null},{url:"_nuxt/about.7634640a.js",revision:null},{url:"_nuxt/arrival.6f5066b8.js",revision:null},{url:"_nuxt/asyncData.94d1fa91.js",revision:null},{url:"_nuxt/booking.9a3100e6.js",revision:null},{url:"_nuxt/Button.e3abc47e.js",revision:null},{url:"_nuxt/Callout.bceebb91.js",revision:null},{url:"_nuxt/Card.00be0cdc.js",revision:null},{url:"_nuxt/Card.89ab110a.js",revision:null},{url:"_nuxt/CardGroup.151f4840.js",revision:null},{url:"_nuxt/client-db.c5df37f0.js",revision:null},{url:"_nuxt/CodeGroup.bc2a2487.js",revision:null},{url:"_nuxt/Collapsible.aa283e54.js",revision:null},{url:"_nuxt/contact.3a03c3f3.js",revision:null},{url:"_nuxt/ContentDoc.0eff99f9.js",revision:null},{url:"_nuxt/ContentList.cc08b603.js",revision:null},{url:"_nuxt/ContentNavigation.b39b9b99.js",revision:null},{url:"_nuxt/ContentQuery.8a134f98.js",revision:null},{url:"_nuxt/ContentRenderer.d4a4ca7d.js",revision:null},{url:"_nuxt/ContentRendererMarkdown.a2f19d29.js",revision:null},{url:"_nuxt/ContentRendererMarkdown.vue.620d2fb3.js",revision:null},{url:"_nuxt/ContentSlot.667c594c.js",revision:null},{url:"_nuxt/default.eec74943.js",revision:null},{url:"_nuxt/DocumentDrivenEmpty.246ad2e4.js",revision:null},{url:"_nuxt/DocumentDrivenNotFound.5638845d.js",revision:null},{url:"_nuxt/entry.6756220b.js",revision:null},{url:"_nuxt/error-404.871584dc.css",revision:null},{url:"_nuxt/error-404.de1503ae.js",revision:null},{url:"_nuxt/error-500.49f51692.js",revision:null},{url:"_nuxt/error-500.5504fd74.css",revision:null},{url:"_nuxt/Field.ffb97a80.js",revision:null},{url:"_nuxt/FieldGroup.345b4822.js",revision:null},{url:"_nuxt/Icon.8b3b4972.js",revision:null},{url:"_nuxt/Icon.a012c4a1.js",revision:null},{url:"_nuxt/Icon.fe4d7006.css",revision:null},{url:"_nuxt/IconCSS.8ed83daa.css",revision:null},{url:"_nuxt/IconCSS.a2d9d6df.js",revision:null},{url:"_nuxt/imprint.38fee03e.js",revision:null},{url:"_nuxt/index.344f9f74.js",revision:null},{url:"_nuxt/index.4df4817c.js",revision:null},{url:"_nuxt/index.4f08cbcb.js",revision:null},{url:"_nuxt/index.738b8576.js",revision:null},{url:"_nuxt/index.7b8156c2.js",revision:null},{url:"_nuxt/index.b0fe9fac.js",revision:null},{url:"_nuxt/index.b8fe2cb5.js",revision:null},{url:"_nuxt/Markdown.6784867d.js",revision:null},{url:"_nuxt/node.e4a9c3bc.js",revision:null},{url:"_nuxt/nuxt-img.5f26e652.js",revision:null},{url:"_nuxt/nuxt-link.d9170f62.js",revision:null},{url:"_nuxt/Page.vue.38ba49f8.js",revision:null},{url:"_nuxt/PageBody.vue.0f3ae9dd.js",revision:null},{url:"_nuxt/PageHeader.vue.e9ed9fa6.js",revision:null},{url:"_nuxt/preview.8e44ad83.js",revision:null},{url:"_nuxt/privacy.96533ca6.js",revision:null},{url:"_nuxt/ProseA.f99737c5.js",revision:null},{url:"_nuxt/ProseBlockquote.a24ff0f5.js",revision:null},{url:"_nuxt/ProseCode.1b3ce125.js",revision:null},{url:"_nuxt/ProseCode.e63e49c6.css",revision:null},{url:"_nuxt/ProseCode.vue.83d50ca1.js",revision:null},{url:"_nuxt/ProseCodeButton.c7283545.js",revision:null},{url:"_nuxt/ProseCodeButton.vue.bcd32367.js",revision:null},{url:"_nuxt/ProseCodeIcon.d9033d98.js",revision:null},{url:"_nuxt/ProseCodeIcon.vue.aa4e6c68.js",revision:null},{url:"_nuxt/ProseCodeInline.4463ce27.js",revision:null},{url:"_nuxt/ProseEm.47f9204b.js",revision:null},{url:"_nuxt/ProseH1.655d8a5f.js",revision:null},{url:"_nuxt/ProseH2.ccf38722.js",revision:null},{url:"_nuxt/ProseH3.90b20896.js",revision:null},{url:"_nuxt/ProseH4.695e37a2.js",revision:null},{url:"_nuxt/ProseH5.549773af.js",revision:null},{url:"_nuxt/ProseH6.e7228044.js",revision:null},{url:"_nuxt/ProseHr.c1029360.js",revision:null},{url:"_nuxt/ProseImg.08074de1.js",revision:null},{url:"_nuxt/ProseLi.7a65a371.js",revision:null},{url:"_nuxt/ProseOl.d22f2105.js",revision:null},{url:"_nuxt/ProseP.7be74982.js",revision:null},{url:"_nuxt/ProsePre.bba786ab.js",revision:null},{url:"_nuxt/ProseScript.7f2a7e9b.js",revision:null},{url:"_nuxt/ProseStrong.3e3fde82.js",revision:null},{url:"_nuxt/ProseTable.5d8cb71a.js",revision:null},{url:"_nuxt/ProseTbody.92562c06.js",revision:null},{url:"_nuxt/ProseTd.84d82c54.js",revision:null},{url:"_nuxt/ProseTh.5539dfec.js",revision:null},{url:"_nuxt/ProseThead.07c68f74.js",revision:null},{url:"_nuxt/ProseTr.1430d23f.js",revision:null},{url:"_nuxt/ProseUl.bbe206d3.js",revision:null},{url:"_nuxt/query.872ac90f.js",revision:null},{url:"_nuxt/selectMenu.756692e7.js",revision:null},{url:"_nuxt/services.68f1ceda.js",revision:null},{url:"_nuxt/Shortcut.cffc683a.js",revision:null},{url:"_nuxt/slot.3b77c685.js",revision:null},{url:"_nuxt/Tabs.1a7de542.js",revision:null},{url:"_nuxt/use-resolve-button-type.f82b9eb1.js",revision:null},{url:"_nuxt/useStudio.418c9244.css",revision:null},{url:"_nuxt/useStudio.6d037805.js",revision:null},{url:"_nuxt/useUI.6406199e.js",revision:null},{url:"_nuxt/workbox-window.prod.es5.a7b12eab.js",revision:null},{url:"200",revision:"e6635112ea176a9688b2567038da22b3"},{url:"404",revision:"e6635112ea176a9688b2567038da22b3"},{url:"about",revision:"74ff9b3266299c1b31d4bcce369d23df"},{url:"apple-touch-icon-180x180.png",revision:"7b602b006a52386b9b440cf4df98c211"},{url:"arrival",revision:"32f4f2a9c36edc3a4d4804f3d7d1ca14"},{url:"booking",revision:"f71e6b23ad057234db9928ff96f3f9b9"},{url:"contact",revision:"3af5c1871120674fb15fcfdad1f1f487"},{url:"favicon.ico",revision:"58dbec51a97499eb4f2d0eaa6dfdee37"},{url:"icons/mdi_calendar_clock.png",revision:"0d241cbf26f054e43382da57e632cbd2"},{url:"icons/mdi_feed.png",revision:"b95a17e603f652bad75445e0dcd3424e"},{url:"imprint",revision:"d8ecffdbcc541841632f3fc1a2f4ca2a"},{url:"/",revision:"5112945c3eb0e83fbf90474f3f77bd40"},{url:"logo.svg",revision:"00c7b59cd882cb660aad099d1a3a2aa0"},{url:"maskable-icon-512x512.png",revision:"37e6a2e95361ec0043872ea5eceeb1d6"},{url:"news",revision:"8aa576bf5d381a3341b05a54e9cd8f6b"},{url:"news/newwebsite",revision:"b8382a706c66a384d11cdec87aaa61c5"},{url:"privacy",revision:"f97c03654a8a390be8de407a25953750"},{url:"pwa-192x192.png",revision:"079009d0280d03d60281e60df7c5662b"},{url:"pwa-512x512.png",revision:"0e97a85e6e56fbe890165784661b66c6"},{url:"pwa-64x64.png",revision:"e194128bd6b0cf9f57b342f6c0c8e117"},{url:"services",revision:"22ea571171d983ebc563cadccaa38b7b"},{url:"_payload.json",revision:"cfb68311bd585979ef85a792c9f64654"},{url:"about/_payload.json",revision:"48b69f4a1d67996a1f51440583d5552b"},{url:"arrival/_payload.json",revision:"48b69f4a1d67996a1f51440583d5552b"},{url:"contact/_payload.json",revision:"48b69f4a1d67996a1f51440583d5552b"},{url:"imprint/_payload.json",revision:"ee486d61b4761eb71286b11a34aa5c79"},{url:"news/_payload.json",revision:"297e0df33dc7038ac9d637a34d099fe9"},{url:"news/newwebsite/_payload.json",revision:"be4c262b1e97305989638d8b371d18ac"},{url:"privacy/_payload.json",revision:"48b69f4a1d67996a1f51440583d5552b"},{url:"services/_payload.json",revision:"c696c3a45f1df695caa4cf23b0c1c943"},{url:"_nuxt/builds/latest.json",revision:null},{url:"_nuxt/builds/meta/3a5678be-071c-4887-9833-4cc84c9dca5a.json",revision:null},{url:"manifest.webmanifest",revision:"eb0f371d3ed09cae8d6e629f804f6ebb"}],{}),n.cleanupOutdatedCaches(),n.registerRoute(new n.NavigationRoute(n.createHandlerBoundToURL("/")))}));
