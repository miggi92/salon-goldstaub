if(!self.define){let n,e={};const u=(u,l)=>(u=new URL(u+".js",l).href,e[u]||new Promise((e=>{if("document"in self){const n=document.createElement("script");n.src=u,n.onload=e,document.head.appendChild(n)}else n=u,importScripts(u),e()})).then((()=>{let n=e[u];if(!n)throw new Error(`Module ${u} didn’t register its module`);return n})));self.define=(l,r)=>{const i=n||("document"in self?document.currentScript.src:"")||location.href;if(e[i])return;let s={};const o=n=>u(n,i),t={module:{uri:i},exports:s,require:o};e[i]=Promise.all(l.map((n=>t[n]||o(n)))).then((n=>(r(...n),s)))}}define(["./workbox-56a10583"],(function(n){"use strict";self.skipWaiting(),n.clientsClaim(),n.precacheAndRoute([{url:"_ipx/_/logo.svg",revision:"e7303f330514789c534577d1414e3c20"},{url:"_nuxt/_...slug_.b5cf04c4.js",revision:null},{url:"_nuxt/_plugin-vue_export-helper.c27b6911.js",revision:null},{url:"_nuxt/about.c2208c27.js",revision:null},{url:"_nuxt/arrival.14fa132f.js",revision:null},{url:"_nuxt/asyncData.5103bb8d.js",revision:null},{url:"_nuxt/Button.98201590.js",revision:null},{url:"_nuxt/Callout.e25bea63.js",revision:null},{url:"_nuxt/Card.7466ff55.js",revision:null},{url:"_nuxt/Card.fcc70335.js",revision:null},{url:"_nuxt/CardGroup.6caf7420.js",revision:null},{url:"_nuxt/client-db.9c1ae302.js",revision:null},{url:"_nuxt/CodeGroup.d994bc67.js",revision:null},{url:"_nuxt/Collapsible.49b26504.js",revision:null},{url:"_nuxt/contact.e2777580.js",revision:null},{url:"_nuxt/ContentDoc.dbcfff03.js",revision:null},{url:"_nuxt/ContentList.31a27ec7.js",revision:null},{url:"_nuxt/ContentNavigation.2c1c9c80.js",revision:null},{url:"_nuxt/ContentQuery.837a3d8f.js",revision:null},{url:"_nuxt/ContentRenderer.5033c33c.js",revision:null},{url:"_nuxt/ContentRendererMarkdown.b1a71d53.js",revision:null},{url:"_nuxt/ContentRendererMarkdown.vue.3b2d76da.js",revision:null},{url:"_nuxt/ContentSlot.c745c6f7.js",revision:null},{url:"_nuxt/default.581c966d.js",revision:null},{url:"_nuxt/DocumentDrivenEmpty.982f430d.js",revision:null},{url:"_nuxt/DocumentDrivenNotFound.0c7339ca.js",revision:null},{url:"_nuxt/entry.12c2ad7e.js",revision:null},{url:"_nuxt/error-404.871584dc.css",revision:null},{url:"_nuxt/error-404.a255924a.js",revision:null},{url:"_nuxt/error-500.1e15901b.js",revision:null},{url:"_nuxt/error-500.5504fd74.css",revision:null},{url:"_nuxt/Field.63b50137.js",revision:null},{url:"_nuxt/FieldGroup.0eaf8f1b.js",revision:null},{url:"_nuxt/Icon.0ce1fc11.js",revision:null},{url:"_nuxt/Icon.4785ad58.js",revision:null},{url:"_nuxt/Icon.d532e251.css",revision:null},{url:"_nuxt/IconCSS.b61fea9f.css",revision:null},{url:"_nuxt/IconCSS.ea3a4d18.js",revision:null},{url:"_nuxt/imprint.14a621c3.js",revision:null},{url:"_nuxt/index.1cefb033.js",revision:null},{url:"_nuxt/index.288f722b.js",revision:null},{url:"_nuxt/index.344f9f74.js",revision:null},{url:"_nuxt/index.4df4817c.js",revision:null},{url:"_nuxt/index.70477d03.js",revision:null},{url:"_nuxt/index.7dce7981.js",revision:null},{url:"_nuxt/index.df58e121.js",revision:null},{url:"_nuxt/Markdown.b35319a2.js",revision:null},{url:"_nuxt/node.e4a9c3bc.js",revision:null},{url:"_nuxt/nuxt-img.c527258d.js",revision:null},{url:"_nuxt/nuxt-link.f03ca0a2.js",revision:null},{url:"_nuxt/Page.vue.30ced53d.js",revision:null},{url:"_nuxt/PageBody.vue.7e4ac022.js",revision:null},{url:"_nuxt/PageHeader.vue.f044a548.js",revision:null},{url:"_nuxt/preview.b4a7d1f5.js",revision:null},{url:"_nuxt/privacy.3e683c83.js",revision:null},{url:"_nuxt/ProseA.e3a64777.js",revision:null},{url:"_nuxt/ProseBlockquote.4c9279ef.js",revision:null},{url:"_nuxt/ProseCode.e3835455.js",revision:null},{url:"_nuxt/ProseCode.e63e49c6.css",revision:null},{url:"_nuxt/ProseCode.vue.206b4d9e.js",revision:null},{url:"_nuxt/ProseCodeButton.8df4aa63.js",revision:null},{url:"_nuxt/ProseCodeButton.vue.1d705fab.js",revision:null},{url:"_nuxt/ProseCodeIcon.b158ce77.js",revision:null},{url:"_nuxt/ProseCodeIcon.vue.806e216b.js",revision:null},{url:"_nuxt/ProseCodeInline.7a52bbb1.js",revision:null},{url:"_nuxt/ProseEm.767917d9.js",revision:null},{url:"_nuxt/ProseH1.f19034e0.js",revision:null},{url:"_nuxt/ProseH2.bda761eb.js",revision:null},{url:"_nuxt/ProseH3.5e64fde3.js",revision:null},{url:"_nuxt/ProseH4.61900578.js",revision:null},{url:"_nuxt/ProseH5.b23b6770.js",revision:null},{url:"_nuxt/ProseH6.3e16a78f.js",revision:null},{url:"_nuxt/ProseHr.a48684ba.js",revision:null},{url:"_nuxt/ProseImg.c317b9c1.js",revision:null},{url:"_nuxt/ProseLi.046f987c.js",revision:null},{url:"_nuxt/ProseOl.168ffa94.js",revision:null},{url:"_nuxt/ProseP.5a4b3f0d.js",revision:null},{url:"_nuxt/ProsePre.a7153b06.js",revision:null},{url:"_nuxt/ProseScript.91170a79.js",revision:null},{url:"_nuxt/ProseStrong.a4bc1213.js",revision:null},{url:"_nuxt/ProseTable.ba85f116.js",revision:null},{url:"_nuxt/ProseTbody.fe6fc1d4.js",revision:null},{url:"_nuxt/ProseTd.1e082790.js",revision:null},{url:"_nuxt/ProseTh.08a510cf.js",revision:null},{url:"_nuxt/ProseThead.30bb936f.js",revision:null},{url:"_nuxt/ProseTr.46b81018.js",revision:null},{url:"_nuxt/ProseUl.b679d551.js",revision:null},{url:"_nuxt/query.6b3b2deb.js",revision:null},{url:"_nuxt/services.88f0e7e1.js",revision:null},{url:"_nuxt/Shortcut.25e1e065.js",revision:null},{url:"_nuxt/slot.4acc85dd.js",revision:null},{url:"_nuxt/ui.config.f0fe62e5.js",revision:null},{url:"_nuxt/use-resolve-button-type.08c7ab60.js",revision:null},{url:"_nuxt/useStudio.1cde330a.js",revision:null},{url:"_nuxt/useStudio.3f8f4a7a.css",revision:null},{url:"_nuxt/useUI.c13b1b70.js",revision:null},{url:"_nuxt/workbox-window.prod.es5.a7b12eab.js",revision:null},{url:"200",revision:"18e6414f77d9bf468a2acfa870d036db"},{url:"404",revision:"18e6414f77d9bf468a2acfa870d036db"},{url:"about",revision:"0be5a4119cff2fd514ac4537cc034a8d"},{url:"apple-touch-icon-180x180.png",revision:"7b602b006a52386b9b440cf4df98c211"},{url:"arrival",revision:"fdfc26c38ea4beca3f583fb67c2d6c8d"},{url:"contact",revision:"ed13339e7a096ba04acbb280908abf03"},{url:"favicon.ico",revision:"58dbec51a97499eb4f2d0eaa6dfdee37"},{url:"icons/mdi_calendar_clock.png",revision:"0d241cbf26f054e43382da57e632cbd2"},{url:"icons/mdi_feed.png",revision:"b95a17e603f652bad75445e0dcd3424e"},{url:"imprint",revision:"446c709e1189e3c16e26c4338736f241"},{url:"/",revision:"1dbd5b7b00b0da76c3a01b81e6b4a330"},{url:"logo.svg",revision:"00c7b59cd882cb660aad099d1a3a2aa0"},{url:"maskable-icon-512x512.png",revision:"37e6a2e95361ec0043872ea5eceeb1d6"},{url:"news",revision:"9ef25e861afa6b571cb61972b95e1f7c"},{url:"news/newwebsite",revision:"40633e97cc60bb59a934b26c93fee137"},{url:"privacy",revision:"1d8ab1b4a75208cd02dab626788cded3"},{url:"pwa-192x192.png",revision:"079009d0280d03d60281e60df7c5662b"},{url:"pwa-512x512.png",revision:"0e97a85e6e56fbe890165784661b66c6"},{url:"pwa-64x64.png",revision:"e194128bd6b0cf9f57b342f6c0c8e117"},{url:"services",revision:"766d0bf83adc327db6c04a31940b16fe"},{url:"manifest.webmanifest",revision:"01650bef6ed6bc2cddae31a454c77bce"}],{}),n.cleanupOutdatedCaches(),n.registerRoute(new n.NavigationRoute(n.createHandlerBoundToURL("/")))}));
