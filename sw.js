if(!self.define){let n,u={};const l=(l,e)=>(l=new URL(l+".js",e).href,u[l]||new Promise((u=>{if("document"in self){const n=document.createElement("script");n.src=l,n.onload=u,document.head.appendChild(n)}else n=l,importScripts(l),u()})).then((()=>{let n=u[l];if(!n)throw new Error(`Module ${l} didn’t register its module`);return n})));self.define=(e,r)=>{const i=n||("document"in self?document.currentScript.src:"")||location.href;if(u[i])return;let s={};const o=n=>l(n,i),t={module:{uri:i},exports:s,require:o};u[i]=Promise.all(e.map((n=>t[n]||o(n)))).then((n=>(r(...n),s)))}}define(["./workbox-3e911b1d"],(function(n){"use strict";self.skipWaiting(),n.clientsClaim(),n.precacheAndRoute([{url:"_ipx/_/logo.svg",revision:"e7303f330514789c534577d1414e3c20"},{url:"_nuxt/_...slug_.A2xAH7t8.js",revision:null},{url:"_nuxt/_plugin-vue_export-helper.x3n3nnut.js",revision:null},{url:"_nuxt/about.r_ac6Lgw.js",revision:null},{url:"_nuxt/arrival.W-6hFSnH.js",revision:null},{url:"_nuxt/asyncData.bX8IQQW7.js",revision:null},{url:"_nuxt/booking.hpFn5XUK.js",revision:null},{url:"_nuxt/Button.zl8YhNAq.js",revision:null},{url:"_nuxt/Callout.2K02ydzu.js",revision:null},{url:"_nuxt/Card.55uT_OrF.js",revision:null},{url:"_nuxt/Card.XuO-5mTS.js",revision:null},{url:"_nuxt/CardGroup.nNbuzTtR.js",revision:null},{url:"_nuxt/client-db.8ENfJN9b.js",revision:null},{url:"_nuxt/CodeGroup._IAhf-65.js",revision:null},{url:"_nuxt/Collapsible.Mgf7ZqHh.js",revision:null},{url:"_nuxt/contact.AmKPrp1v.js",revision:null},{url:"_nuxt/ContentDoc.3MmTqwVf.js",revision:null},{url:"_nuxt/ContentList.r9PQ2lS-.js",revision:null},{url:"_nuxt/ContentNavigation.wmVxyEmz.js",revision:null},{url:"_nuxt/ContentQuery.MZQVm685.js",revision:null},{url:"_nuxt/ContentRenderer.HGRQapnj.js",revision:null},{url:"_nuxt/ContentRendererMarkdown.bHDH6uYd.js",revision:null},{url:"_nuxt/ContentRendererMarkdown.vue.3Do4Y4h0.js",revision:null},{url:"_nuxt/ContentSlot.SO683s_t.js",revision:null},{url:"_nuxt/default.uMup8nQM.js",revision:null},{url:"_nuxt/DocumentDrivenEmpty.DfMlOls9.js",revision:null},{url:"_nuxt/DocumentDrivenNotFound.JTGtYohv.js",revision:null},{url:"_nuxt/entry.bE9np90g.js",revision:null},{url:"_nuxt/error-404.TsBWxgAa.css",revision:null},{url:"_nuxt/error-404.umHSV-Si.js",revision:null},{url:"_nuxt/error-500.HveGEvJw.js",revision:null},{url:"_nuxt/error-500.s2VBNbvW.css",revision:null},{url:"_nuxt/Field.Fa9JuwOQ.js",revision:null},{url:"_nuxt/FieldGroup.gPNBHeSj.js",revision:null},{url:"_nuxt/Icon.2p9d7H8O.css",revision:null},{url:"_nuxt/Icon.3dtiKYw8.js",revision:null},{url:"_nuxt/Icon.FR4jmMQH.js",revision:null},{url:"_nuxt/IconCSS.dG4zY4mJ.js",revision:null},{url:"_nuxt/IconCSS.GdgQB7f8.css",revision:null},{url:"_nuxt/imprint.V0E0e1VB.js",revision:null},{url:"_nuxt/index.5Jz4PfUi.js",revision:null},{url:"_nuxt/index.L96ltGlK.js",revision:null},{url:"_nuxt/index.P7jyS_57.js",revision:null},{url:"_nuxt/index.S8AixSQ5.js",revision:null},{url:"_nuxt/index.u13RivcF.js",revision:null},{url:"_nuxt/index.Wme0U9j4.js",revision:null},{url:"_nuxt/Markdown.r2jDSsvk.js",revision:null},{url:"_nuxt/node.uMQX-T_c.js",revision:null},{url:"_nuxt/nuxt-img.ppvT7818.js",revision:null},{url:"_nuxt/nuxt-link.aUDSR0SE.js",revision:null},{url:"_nuxt/Page.vue.bka_QvaH.js",revision:null},{url:"_nuxt/PageBody.vue.RsSL0ke2.js",revision:null},{url:"_nuxt/PageHeader.vue.2lQesVV9.js",revision:null},{url:"_nuxt/preview.YE_CTJ2J.js",revision:null},{url:"_nuxt/privacy.C4IACaxo.js",revision:null},{url:"_nuxt/ProseA.xO4nsxrF.js",revision:null},{url:"_nuxt/ProseBlockquote.MleHtjk2.js",revision:null},{url:"_nuxt/ProseCode.nIRUQbb-.css",revision:null},{url:"_nuxt/ProseCode.PJDF8j-_.js",revision:null},{url:"_nuxt/ProseCode.vue.AiiqOVjb.js",revision:null},{url:"_nuxt/ProseCodeButton.nal3q6NX.js",revision:null},{url:"_nuxt/ProseCodeButton.vue.kNo-5Zq7.js",revision:null},{url:"_nuxt/ProseCodeIcon.9-PcUXAn.js",revision:null},{url:"_nuxt/ProseCodeIcon.vue.735lvF3L.js",revision:null},{url:"_nuxt/ProseCodeInline.KGkyzNVh.js",revision:null},{url:"_nuxt/ProseEm.58yGZh9t.js",revision:null},{url:"_nuxt/ProseH1.0FSX9NO2.js",revision:null},{url:"_nuxt/ProseH2.to6uEf2q.js",revision:null},{url:"_nuxt/ProseH3.HGGpvGDR.js",revision:null},{url:"_nuxt/ProseH4.qntQ6D8o.js",revision:null},{url:"_nuxt/ProseH5.50DzDm5t.js",revision:null},{url:"_nuxt/ProseH6.HCXjhb12.js",revision:null},{url:"_nuxt/ProseHr.UymGLwW4.js",revision:null},{url:"_nuxt/ProseImg.44wZcqQG.js",revision:null},{url:"_nuxt/ProseLi.Phs9X7oK.js",revision:null},{url:"_nuxt/ProseOl.hQokjgFO.js",revision:null},{url:"_nuxt/ProseP.2frrr3h4.js",revision:null},{url:"_nuxt/ProsePre.7qDQTHD-.js",revision:null},{url:"_nuxt/ProseScript.lAbqam9p.js",revision:null},{url:"_nuxt/ProseStrong.zad1Aj9W.js",revision:null},{url:"_nuxt/ProseTable.ElXw5bw5.js",revision:null},{url:"_nuxt/ProseTbody.bmjoxPT0.js",revision:null},{url:"_nuxt/ProseTd.XxqMtcxM.js",revision:null},{url:"_nuxt/ProseTh.0_ee9Ihd.js",revision:null},{url:"_nuxt/ProseThead.vI478O0U.js",revision:null},{url:"_nuxt/ProseTr.hiLA3_Bm.js",revision:null},{url:"_nuxt/ProseUl.XoJfHFKc.js",revision:null},{url:"_nuxt/query.hGcMmL2m.js",revision:null},{url:"_nuxt/selectMenu.0QA_vHzB.js",revision:null},{url:"_nuxt/services.fTVX7fHv.js",revision:null},{url:"_nuxt/Shortcut._3MGlguO.js",revision:null},{url:"_nuxt/slot.M2ZiKWfh.js",revision:null},{url:"_nuxt/Tabs.2vJsqX9q.js",revision:null},{url:"_nuxt/use-resolve-button-type.8FVFrZ7o.js",revision:null},{url:"_nuxt/useStudio.OOHmxCca.css",revision:null},{url:"_nuxt/useStudio.Vgw4RkmX.js",revision:null},{url:"_nuxt/useUI.wcm-E1iC.js",revision:null},{url:"_nuxt/workbox-window.prod.es5.prqDwDSL.js",revision:null},{url:"200",revision:"1efb5bdaa0455a50613880dbe263fc01"},{url:"404",revision:"1efb5bdaa0455a50613880dbe263fc01"},{url:"about",revision:"60f685d2c38ce4bd7082594dce06cb72"},{url:"apple-touch-icon-180x180.png",revision:"7b602b006a52386b9b440cf4df98c211"},{url:"arrival",revision:"e9efc22594e46df238b6507e14bb6814"},{url:"booking",revision:"f71e6b23ad057234db9928ff96f3f9b9"},{url:"contact",revision:"9f34329fe81ed5e561beb76f91bdd7af"},{url:"favicon.ico",revision:"58dbec51a97499eb4f2d0eaa6dfdee37"},{url:"icons/mdi_calendar_clock.png",revision:"0d241cbf26f054e43382da57e632cbd2"},{url:"icons/mdi_feed.png",revision:"b95a17e603f652bad75445e0dcd3424e"},{url:"imprint",revision:"247177d23fcf8959969a39866853809f"},{url:"/",revision:"eadb6f03628dccab4acfffdc7effbc73"},{url:"logo.svg",revision:"00c7b59cd882cb660aad099d1a3a2aa0"},{url:"maskable-icon-512x512.png",revision:"37e6a2e95361ec0043872ea5eceeb1d6"},{url:"news",revision:"f74645aafbe4043e39bbcfa332df24e3"},{url:"news/newwebsite",revision:"224e0f378c9a4b51e37cae2ae4917fec"},{url:"privacy",revision:"4738d3a2ca2f18c58f649501704db0e8"},{url:"pwa-192x192.png",revision:"079009d0280d03d60281e60df7c5662b"},{url:"pwa-512x512.png",revision:"0e97a85e6e56fbe890165784661b66c6"},{url:"pwa-64x64.png",revision:"e194128bd6b0cf9f57b342f6c0c8e117"},{url:"services",revision:"1e4efb3839b39c2c8aadb090953a71ae"},{url:"_payload.json",revision:"cc0a1b008eaf87d2becdea3e4fd28c87"},{url:"about/_payload.json",revision:"bac57382b1bdfdc2a432a35cabd5323a"},{url:"arrival/_payload.json",revision:"bac57382b1bdfdc2a432a35cabd5323a"},{url:"contact/_payload.json",revision:"bac57382b1bdfdc2a432a35cabd5323a"},{url:"imprint/_payload.json",revision:"b0bc4fd9ac11e9823ab168caeb5b13bc"},{url:"news/_payload.json",revision:"908e5ff04f859357080474dd8d512d96"},{url:"news/newwebsite/_payload.json",revision:"74cafc98c41937e71408f9ce4b2aa023"},{url:"privacy/_payload.json",revision:"b3e046a36e3febfd00fb6b1195cd79c9"},{url:"services/_payload.json",revision:"765231b23957fd360c4cb21a33d369ad"},{url:"_nuxt/builds/latest.json",revision:"ef81e8d8a84a907dda61502a9a4e490d"},{url:"_nuxt/builds/meta/10f49221-6ffd-46ab-9be9-7aabe11e1651.json",revision:null},{url:"manifest.webmanifest",revision:"eb0f371d3ed09cae8d6e629f804f6ebb"}],{}),n.cleanupOutdatedCaches(),n.registerRoute(new n.NavigationRoute(n.createHandlerBoundToURL("/")))}));
