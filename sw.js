if(!self.define){let n,e={};const u=(u,l)=>(u=new URL(u+".js",l).href,e[u]||new Promise((e=>{if("document"in self){const n=document.createElement("script");n.src=u,n.onload=e,document.head.appendChild(n)}else n=u,importScripts(u),e()})).then((()=>{let n=e[u];if(!n)throw new Error(`Module ${u} didn’t register its module`);return n})));self.define=(l,r)=>{const i=n||("document"in self?document.currentScript.src:"")||location.href;if(e[i])return;let s={};const o=n=>u(n,i),t={module:{uri:i},exports:s,require:o};e[i]=Promise.all(l.map((n=>t[n]||o(n)))).then((n=>(r(...n),s)))}}define(["./workbox-3e911b1d"],(function(n){"use strict";self.skipWaiting(),n.clientsClaim(),n.precacheAndRoute([{url:"_ipx/_/logo.svg",revision:"e7303f330514789c534577d1414e3c20"},{url:"_nuxt/_...slug_.LaZsFe1g.js",revision:null},{url:"_nuxt/_plugin-vue_export-helper.x3n3nnut.js",revision:null},{url:"_nuxt/about.GATaPQVU.js",revision:null},{url:"_nuxt/arrival.OO0vGK_x.js",revision:null},{url:"_nuxt/asyncData.KXDQTcM5.js",revision:null},{url:"_nuxt/booking.8gs7yaeE.js",revision:null},{url:"_nuxt/Button.WmTTmZYM.js",revision:null},{url:"_nuxt/Callout._jTVijtM.js",revision:null},{url:"_nuxt/Card.BuqIt3pY.js",revision:null},{url:"_nuxt/Card.JK2KMTgj.js",revision:null},{url:"_nuxt/CardGroup.SZXbpmrO.js",revision:null},{url:"_nuxt/client-db.ST2iSEU2.js",revision:null},{url:"_nuxt/CodeGroup.8-j1mPWY.js",revision:null},{url:"_nuxt/Collapsible.Lu0Fblog.js",revision:null},{url:"_nuxt/contact.TRmOBMU6.js",revision:null},{url:"_nuxt/ContentDoc.ffqZQmSI.js",revision:null},{url:"_nuxt/ContentList.yPq4oeaf.js",revision:null},{url:"_nuxt/ContentNavigation.G2Rvuqxl.js",revision:null},{url:"_nuxt/ContentQuery.6c3NXeiT.js",revision:null},{url:"_nuxt/ContentRenderer.4-ahYIVt.js",revision:null},{url:"_nuxt/ContentRendererMarkdown.lD5MJ_gS.js",revision:null},{url:"_nuxt/ContentRendererMarkdown.vue.lq_tXIaF.js",revision:null},{url:"_nuxt/ContentSlot.22-bveGA.js",revision:null},{url:"_nuxt/default.VFUoK7wT.js",revision:null},{url:"_nuxt/DocumentDrivenEmpty.fXnzCSUM.js",revision:null},{url:"_nuxt/DocumentDrivenNotFound.7_PJ4-z_.js",revision:null},{url:"_nuxt/entry.IT2Alqwt.js",revision:null},{url:"_nuxt/error-404.0CaCcwSN.js",revision:null},{url:"_nuxt/error-404.TsBWxgAa.css",revision:null},{url:"_nuxt/error-500.LrrI_U5F.js",revision:null},{url:"_nuxt/error-500.s2VBNbvW.css",revision:null},{url:"_nuxt/Field.YJd1nxtZ.js",revision:null},{url:"_nuxt/FieldGroup.JIqd6oNX.js",revision:null},{url:"_nuxt/Icon.-EoQI9t5.js",revision:null},{url:"_nuxt/Icon.2p9d7H8O.css",revision:null},{url:"_nuxt/Icon.dWSA63pS.js",revision:null},{url:"_nuxt/IconCSS.dfoeZ3zb.js",revision:null},{url:"_nuxt/IconCSS.GdgQB7f8.css",revision:null},{url:"_nuxt/id.oKeiv2Xw.js",revision:null},{url:"_nuxt/imprint.yrMlHiDm.js",revision:null},{url:"_nuxt/index.1dSrIji7.js",revision:null},{url:"_nuxt/index.5Jz4PfUi.js",revision:null},{url:"_nuxt/index.BSUh4J97.js",revision:null},{url:"_nuxt/index.dAPn0iSF.js",revision:null},{url:"_nuxt/index.P7jyS_57.js",revision:null},{url:"_nuxt/index.ygfqlYCu.js",revision:null},{url:"_nuxt/keyboard.T9uKY19K.js",revision:null},{url:"_nuxt/Markdown.lIV778FF.js",revision:null},{url:"_nuxt/node.uMQX-T_c.js",revision:null},{url:"_nuxt/nuxt-img.gfA-vtuh.js",revision:null},{url:"_nuxt/nuxt-link.M91vE6my.js",revision:null},{url:"_nuxt/Page.vue.iFxIxsA5.js",revision:null},{url:"_nuxt/PageBody.vue.J0uERIgP.js",revision:null},{url:"_nuxt/PageHeader.vue.Hwq7EKnL.js",revision:null},{url:"_nuxt/preview.HNk8T_Rq.js",revision:null},{url:"_nuxt/privacy.DwI6DOGm.js",revision:null},{url:"_nuxt/ProseA.YCJfpRTj.js",revision:null},{url:"_nuxt/ProseBlockquote.7a7aOz1b.js",revision:null},{url:"_nuxt/ProseCode.nIRUQbb-.css",revision:null},{url:"_nuxt/ProseCode.v4ltcPjO.js",revision:null},{url:"_nuxt/ProseCode.vue.Lha3x7oE.js",revision:null},{url:"_nuxt/ProseCodeButton.3TzUgOE3.js",revision:null},{url:"_nuxt/ProseCodeButton.vue.hvRgsgMs.js",revision:null},{url:"_nuxt/ProseCodeIcon.e03vpIIu.js",revision:null},{url:"_nuxt/ProseCodeIcon.vue.Zq2UETNj.js",revision:null},{url:"_nuxt/ProseCodeInline.9L9Nbwnt.js",revision:null},{url:"_nuxt/ProseEm.MDYViSQp.js",revision:null},{url:"_nuxt/ProseH1.e6ZtsDLw.js",revision:null},{url:"_nuxt/ProseH2.Zdsph3fr.js",revision:null},{url:"_nuxt/ProseH3.X3BVFzv4.js",revision:null},{url:"_nuxt/ProseH4.99rEh6wv.js",revision:null},{url:"_nuxt/ProseH5.YoDgUO3Y.js",revision:null},{url:"_nuxt/ProseH6.zc5aJ54G.js",revision:null},{url:"_nuxt/ProseHr.bMk9oLtq.js",revision:null},{url:"_nuxt/ProseImg.nWFhvhzM.js",revision:null},{url:"_nuxt/ProseLi.Sp2ay5tH.js",revision:null},{url:"_nuxt/ProseOl.O07uOrqw.js",revision:null},{url:"_nuxt/ProseP.ssSSkLtW.js",revision:null},{url:"_nuxt/ProsePre.WV-Co7Sy.js",revision:null},{url:"_nuxt/ProseScript.WqJkJ52p.js",revision:null},{url:"_nuxt/ProseStrong.ZHk7Y4oJ.js",revision:null},{url:"_nuxt/ProseTable.ceHkVM9x.js",revision:null},{url:"_nuxt/ProseTbody.ze_1tzDZ.js",revision:null},{url:"_nuxt/ProseTd.Lz38LJG4.js",revision:null},{url:"_nuxt/ProseTh.17JvwNEp.js",revision:null},{url:"_nuxt/ProseThead.w1njhjJ3.js",revision:null},{url:"_nuxt/ProseTr.BuCOD5HA.js",revision:null},{url:"_nuxt/ProseUl.Nd01KAeV.js",revision:null},{url:"_nuxt/query.BFHj7akl.js",revision:null},{url:"_nuxt/selectMenu.3vujxadx.js",revision:null},{url:"_nuxt/services.So0Pi7V6.js",revision:null},{url:"_nuxt/Shortcut.H6ImnB8R.js",revision:null},{url:"_nuxt/slot.rpM-izeo.js",revision:null},{url:"_nuxt/Tabs.uX5dht15.js",revision:null},{url:"_nuxt/useStudio.OpfD6eTa.js",revision:null},{url:"_nuxt/useStudio.ZkI3hmS7.css",revision:null},{url:"_nuxt/useUI.eZM-AB8a.js",revision:null},{url:"_nuxt/workbox-window.prod.es5.prqDwDSL.js",revision:null},{url:"200",revision:"c2808b9cca6f41e9d5e1c337907544e3"},{url:"404",revision:"c2808b9cca6f41e9d5e1c337907544e3"},{url:"about",revision:"6f4104d02eaffb1e67fdfd15859b5877"},{url:"apple-touch-icon-180x180.png",revision:"7b602b006a52386b9b440cf4df98c211"},{url:"arrival",revision:"1f503a9c9d5045e71d929939a754630a"},{url:"booking",revision:"f71e6b23ad057234db9928ff96f3f9b9"},{url:"contact",revision:"110d14827949b114eab095dbee414288"},{url:"favicon.ico",revision:"58dbec51a97499eb4f2d0eaa6dfdee37"},{url:"icons/mdi_calendar_clock.png",revision:"0d241cbf26f054e43382da57e632cbd2"},{url:"icons/mdi_feed.png",revision:"b95a17e603f652bad75445e0dcd3424e"},{url:"imprint",revision:"7cfb50834da6cb08fc52710ed2cba086"},{url:"/",revision:"ae2cf2b8b408f9326273e1c939265795"},{url:"logo.svg",revision:"00c7b59cd882cb660aad099d1a3a2aa0"},{url:"maskable-icon-512x512.png",revision:"37e6a2e95361ec0043872ea5eceeb1d6"},{url:"news",revision:"f78e22a416ad7eaba41172e7bce331d8"},{url:"news/newwebsite",revision:"c20e0569a93874cb51fc0bca02cb1407"},{url:"privacy",revision:"a1f6064ef309cc43e256b613cf02c900"},{url:"pwa-192x192.png",revision:"079009d0280d03d60281e60df7c5662b"},{url:"pwa-512x512.png",revision:"0e97a85e6e56fbe890165784661b66c6"},{url:"pwa-64x64.png",revision:"e194128bd6b0cf9f57b342f6c0c8e117"},{url:"services",revision:"22c4b6eb001a00c7bd0cf75f088e3679"},{url:"_payload.json",revision:"307d656bbd42d2de28ea8717bb809b60"},{url:"about/_payload.json",revision:"888fe123161c201f46df068e26c04223"},{url:"arrival/_payload.json",revision:"77fad786854f9c2e815de7c98030a4e8"},{url:"contact/_payload.json",revision:"77fad786854f9c2e815de7c98030a4e8"},{url:"imprint/_payload.json",revision:"4ed5e8b300a624ff6031662b77864b9d"},{url:"news/_payload.json",revision:"6880ddab2d59cf9b0b1709d3b93db0c2"},{url:"news/newwebsite/_payload.json",revision:"49ea33e4e18652feea56ac3be1797caa"},{url:"privacy/_payload.json",revision:"77fad786854f9c2e815de7c98030a4e8"},{url:"services/_payload.json",revision:"114ce54278da37f12a69a8ed4fa287a4"},{url:"_nuxt/builds/latest.json",revision:"66bbc455751c8801b5eb62c416b6da05"},{url:"_nuxt/builds/meta/ab3745ec-8986-46ac-a4d9-5ed49d42e823.json",revision:null},{url:"manifest.webmanifest",revision:"eb0f371d3ed09cae8d6e629f804f6ebb"}],{}),n.cleanupOutdatedCaches(),n.registerRoute(new n.NavigationRoute(n.createHandlerBoundToURL("/")))}));
