if(!self.define){let n,l={};const u=(u,e)=>(u=new URL(u+".js",e).href,l[u]||new Promise((l=>{if("document"in self){const n=document.createElement("script");n.src=u,n.onload=l,document.head.appendChild(n)}else n=u,importScripts(u),l()})).then((()=>{let n=l[u];if(!n)throw new Error(`Module ${u} didn’t register its module`);return n})));self.define=(e,r)=>{const i=n||("document"in self?document.currentScript.src:"")||location.href;if(l[i])return;let s={};const o=n=>u(n,i),t={module:{uri:i},exports:s,require:o};l[i]=Promise.all(e.map((n=>t[n]||o(n)))).then((n=>(r(...n),s)))}}define(["./workbox-3e911b1d"],(function(n){"use strict";self.skipWaiting(),n.clientsClaim(),n.precacheAndRoute([{url:"_ipx/_/logo.svg",revision:"e7303f330514789c534577d1414e3c20"},{url:"_nuxt/_...slug_.Nq6BXlp7.js",revision:null},{url:"_nuxt/_plugin-vue_export-helper.x3n3nnut.js",revision:null},{url:"_nuxt/about.2DDv5Iy5.js",revision:null},{url:"_nuxt/arrival.72_CilEz.js",revision:null},{url:"_nuxt/asyncData.E2Mi0ezX.js",revision:null},{url:"_nuxt/booking.wno8JUeQ.js",revision:null},{url:"_nuxt/Button.vsL9xUIL.js",revision:null},{url:"_nuxt/Callout.3wOvuiBP.js",revision:null},{url:"_nuxt/Card.1i_bpt0W.js",revision:null},{url:"_nuxt/Card.BAnEnZd5.js",revision:null},{url:"_nuxt/CardGroup.mRdhwLLY.js",revision:null},{url:"_nuxt/client-db.Ntj2Jj3-.js",revision:null},{url:"_nuxt/CodeGroup.iO0FE3LJ.js",revision:null},{url:"_nuxt/Collapsible.InY4np0j.js",revision:null},{url:"_nuxt/contact.-JZk03ob.js",revision:null},{url:"_nuxt/ContentDoc.PwZXwHAE.js",revision:null},{url:"_nuxt/ContentList.6OgRdxzi.js",revision:null},{url:"_nuxt/ContentNavigation.7VPsOgJs.js",revision:null},{url:"_nuxt/ContentQuery.nTnZae4L.js",revision:null},{url:"_nuxt/ContentRenderer.K9QN_TyK.js",revision:null},{url:"_nuxt/ContentRendererMarkdown.IFJFGDzr.js",revision:null},{url:"_nuxt/ContentRendererMarkdown.vue.099zRe8p.js",revision:null},{url:"_nuxt/ContentSlot.JTDbxUol.js",revision:null},{url:"_nuxt/default.NCmQSCU5.js",revision:null},{url:"_nuxt/DocumentDrivenEmpty.3JB2HpqV.js",revision:null},{url:"_nuxt/DocumentDrivenNotFound.zb0Ou6_p.js",revision:null},{url:"_nuxt/entry.0Zer8bfb.js",revision:null},{url:"_nuxt/error-404.S9jue8ga.js",revision:null},{url:"_nuxt/error-404.TsBWxgAa.css",revision:null},{url:"_nuxt/error-500.s2VBNbvW.css",revision:null},{url:"_nuxt/error-500.XMDQXWc-.js",revision:null},{url:"_nuxt/Field.zE2sVkMJ.js",revision:null},{url:"_nuxt/FieldGroup.-7mfyGm-.js",revision:null},{url:"_nuxt/Icon.2p9d7H8O.css",revision:null},{url:"_nuxt/Icon.6TzSHpI2.js",revision:null},{url:"_nuxt/Icon.RFXFy7q5.js",revision:null},{url:"_nuxt/IconCSS.GdgQB7f8.css",revision:null},{url:"_nuxt/IconCSS.j5gS0FOt.js",revision:null},{url:"_nuxt/id.5opF47bq.js",revision:null},{url:"_nuxt/imprint.j8jFAH5v.js",revision:null},{url:"_nuxt/index.1dSrIji7.js",revision:null},{url:"_nuxt/index.5Jz4PfUi.js",revision:null},{url:"_nuxt/index.AFZE1BJC.js",revision:null},{url:"_nuxt/index.oni7t4oS.js",revision:null},{url:"_nuxt/index.P7jyS_57.js",revision:null},{url:"_nuxt/index.qDBKdi9h.js",revision:null},{url:"_nuxt/keyboard.ke0R3qMS.js",revision:null},{url:"_nuxt/Markdown.21w0ZPw4.js",revision:null},{url:"_nuxt/node.uMQX-T_c.js",revision:null},{url:"_nuxt/nuxt-img.dcRPJ5oe.js",revision:null},{url:"_nuxt/nuxt-link.laytnQvG.js",revision:null},{url:"_nuxt/Page.vue.k7TlxHd7.js",revision:null},{url:"_nuxt/PageBody.vue._N_m2WIu.js",revision:null},{url:"_nuxt/PageHeader.vue.NLDa5K9y.js",revision:null},{url:"_nuxt/preview.gyqh_57t.js",revision:null},{url:"_nuxt/privacy.SFkVZ6LC.js",revision:null},{url:"_nuxt/ProseA.ujnUzT6X.js",revision:null},{url:"_nuxt/ProseBlockquote.Ld-S0Lqa.js",revision:null},{url:"_nuxt/ProseCode.cLS7BLCR.js",revision:null},{url:"_nuxt/ProseCode.nIRUQbb-.css",revision:null},{url:"_nuxt/ProseCode.vue.dtvGrq-a.js",revision:null},{url:"_nuxt/ProseCodeButton.N7pNozK8.js",revision:null},{url:"_nuxt/ProseCodeButton.vue.GfXl26o2.js",revision:null},{url:"_nuxt/ProseCodeIcon.byeQSPLN.js",revision:null},{url:"_nuxt/ProseCodeIcon.vue.LE0vGxp2.js",revision:null},{url:"_nuxt/ProseCodeInline.6z4eNuuQ.js",revision:null},{url:"_nuxt/ProseEm.eJtElMQA.js",revision:null},{url:"_nuxt/ProseH1.IoTXcYcd.js",revision:null},{url:"_nuxt/ProseH2.HnCLooYu.js",revision:null},{url:"_nuxt/ProseH3.stiSiarg.js",revision:null},{url:"_nuxt/ProseH4.jSBB054m.js",revision:null},{url:"_nuxt/ProseH5.kK8j_Ekg.js",revision:null},{url:"_nuxt/ProseH6.v5ByDlBQ.js",revision:null},{url:"_nuxt/ProseHr.sZYIyPak.js",revision:null},{url:"_nuxt/ProseImg.WOCwLCXw.js",revision:null},{url:"_nuxt/ProseLi.57DortGA.js",revision:null},{url:"_nuxt/ProseOl.vKPc5G51.js",revision:null},{url:"_nuxt/ProseP.OT-0y2Uw.js",revision:null},{url:"_nuxt/ProsePre.BJFQlI6E.js",revision:null},{url:"_nuxt/ProseScript.5SzsLu4g.js",revision:null},{url:"_nuxt/ProseStrong.PDVBsdsN.js",revision:null},{url:"_nuxt/ProseTable.S_E9K4ra.js",revision:null},{url:"_nuxt/ProseTbody.sYAO-crE.js",revision:null},{url:"_nuxt/ProseTd.jhUnbmA-.js",revision:null},{url:"_nuxt/ProseTh.9yY-ipgx.js",revision:null},{url:"_nuxt/ProseThead.zboY6Zdq.js",revision:null},{url:"_nuxt/ProseTr.sLYJ1iTd.js",revision:null},{url:"_nuxt/ProseUl.MQjOL-SZ.js",revision:null},{url:"_nuxt/query.nPEQA9SL.js",revision:null},{url:"_nuxt/selectMenu.3vujxadx.js",revision:null},{url:"_nuxt/services.l7p2R1Qs.js",revision:null},{url:"_nuxt/Shortcut.6yXkcpv1.js",revision:null},{url:"_nuxt/slot.QkXJyyiO.js",revision:null},{url:"_nuxt/Tabs.JiD_4QSi.js",revision:null},{url:"_nuxt/useStudio.BS-MiI4w.js",revision:null},{url:"_nuxt/useStudio.ZkI3hmS7.css",revision:null},{url:"_nuxt/useUI.PmQZleTM.js",revision:null},{url:"_nuxt/workbox-window.prod.es5.prqDwDSL.js",revision:null},{url:"200",revision:"6a7226d015c03b6ed07663770d8253f4"},{url:"404",revision:"6a7226d015c03b6ed07663770d8253f4"},{url:"about",revision:"bf41ee78b5d81211509174a90c5c5b2c"},{url:"apple-touch-icon-180x180.png",revision:"7b602b006a52386b9b440cf4df98c211"},{url:"arrival",revision:"f5c65599274bea8b96b789769cfb7063"},{url:"booking",revision:"f71e6b23ad057234db9928ff96f3f9b9"},{url:"contact",revision:"b729e9c4bd9a953709cc66b06ce91054"},{url:"favicon.ico",revision:"58dbec51a97499eb4f2d0eaa6dfdee37"},{url:"icons/mdi_calendar_clock.png",revision:"0d241cbf26f054e43382da57e632cbd2"},{url:"icons/mdi_feed.png",revision:"b95a17e603f652bad75445e0dcd3424e"},{url:"imprint",revision:"68cb262efa244412c48d7d8ece11a744"},{url:"/",revision:"5486f44a37821ce94ea9233a3c5e9e9a"},{url:"logo.svg",revision:"00c7b59cd882cb660aad099d1a3a2aa0"},{url:"maskable-icon-512x512.png",revision:"37e6a2e95361ec0043872ea5eceeb1d6"},{url:"news",revision:"fc5994612836e09f3cb3f1fadcd62bd7"},{url:"news/newwebsite",revision:"044da99e944c5df92e3fc825db20d86f"},{url:"privacy",revision:"06e1f98fa707828429f982cd5eadeedd"},{url:"pwa-192x192.png",revision:"079009d0280d03d60281e60df7c5662b"},{url:"pwa-512x512.png",revision:"0e97a85e6e56fbe890165784661b66c6"},{url:"pwa-64x64.png",revision:"e194128bd6b0cf9f57b342f6c0c8e117"},{url:"services",revision:"71f1d7864c149baf1b94175e8e4b59bc"},{url:"_payload.json",revision:"a1b191b942a07843c883fe420a4c3807"},{url:"about/_payload.json",revision:"bb09b6e677031be7020e73dbc59108c9"},{url:"arrival/_payload.json",revision:"bb09b6e677031be7020e73dbc59108c9"},{url:"contact/_payload.json",revision:"bb09b6e677031be7020e73dbc59108c9"},{url:"imprint/_payload.json",revision:"e76c235efb0a3b39d606d27c2c82855d"},{url:"news/_payload.json",revision:"c3d4254a08795e7cbf42fa38071b37f2"},{url:"news/newwebsite/_payload.json",revision:"f0337b36b2f27907dd1c6e01af4687b5"},{url:"privacy/_payload.json",revision:"1823c5841161c8c6690f22e88fa1e329"},{url:"services/_payload.json",revision:"08a0f8ea415d752f393a22a6520a46f5"},{url:"_nuxt/builds/latest.json",revision:"e0c16aafe19d90097949a0f062476b26"},{url:"_nuxt/builds/meta/d65f68ab-86d0-481c-84fb-1abb66ea4c72.json",revision:null},{url:"manifest.webmanifest",revision:"eb0f371d3ed09cae8d6e629f804f6ebb"}],{}),n.cleanupOutdatedCaches(),n.registerRoute(new n.NavigationRoute(n.createHandlerBoundToURL("/")))}));
