if(!self.define){let n,l={};const u=(u,e)=>(u=new URL(u+".js",e).href,l[u]||new Promise((l=>{if("document"in self){const n=document.createElement("script");n.src=u,n.onload=l,document.head.appendChild(n)}else n=u,importScripts(u),l()})).then((()=>{let n=l[u];if(!n)throw new Error(`Module ${u} didn’t register its module`);return n})));self.define=(e,r)=>{const i=n||("document"in self?document.currentScript.src:"")||location.href;if(l[i])return;let s={};const o=n=>u(n,i),t={module:{uri:i},exports:s,require:o};l[i]=Promise.all(e.map((n=>t[n]||o(n)))).then((n=>(r(...n),s)))}}define(["./workbox-3e911b1d"],(function(n){"use strict";self.skipWaiting(),n.clientsClaim(),n.precacheAndRoute([{url:"_ipx/_/logo.svg",revision:"e7303f330514789c534577d1414e3c20"},{url:"_nuxt/_...slug_.-pZlRpJI.js",revision:null},{url:"_nuxt/_plugin-vue_export-helper.x3n3nnut.js",revision:null},{url:"_nuxt/about.PGz6Pq_3.js",revision:null},{url:"_nuxt/arrival.PttyEOkm.js",revision:null},{url:"_nuxt/asyncData.4TlJ2Ii-.js",revision:null},{url:"_nuxt/booking.Mj7cv9--.js",revision:null},{url:"_nuxt/Button.97EQEpc6.js",revision:null},{url:"_nuxt/Callout.0JAW31DR.js",revision:null},{url:"_nuxt/Card.Gi2lOvl_.js",revision:null},{url:"_nuxt/Card.VsbDjGgx.js",revision:null},{url:"_nuxt/CardGroup.BXOkHgGW.js",revision:null},{url:"_nuxt/client-db.KcmGKDkr.js",revision:null},{url:"_nuxt/CodeGroup.uTiINdMx.js",revision:null},{url:"_nuxt/Collapsible.BqvJyc0W.js",revision:null},{url:"_nuxt/contact.bfYGNkCJ.js",revision:null},{url:"_nuxt/ContentDoc.bmONiY4k.js",revision:null},{url:"_nuxt/ContentList.LBGYld0D.js",revision:null},{url:"_nuxt/ContentNavigation.60f8WoX6.js",revision:null},{url:"_nuxt/ContentQuery._HvZ5ELy.js",revision:null},{url:"_nuxt/ContentRenderer.Qf9hmLZf.js",revision:null},{url:"_nuxt/ContentRendererMarkdown.DhGlBsI_.js",revision:null},{url:"_nuxt/ContentRendererMarkdown.vue.wa_wPTj-.js",revision:null},{url:"_nuxt/ContentSlot.cc6F9eYo.js",revision:null},{url:"_nuxt/default.Wpr6DLtU.js",revision:null},{url:"_nuxt/DocumentDrivenEmpty.roW1js3s.js",revision:null},{url:"_nuxt/DocumentDrivenNotFound.jwg156Oj.js",revision:null},{url:"_nuxt/entry.Mq-NAyDu.js",revision:null},{url:"_nuxt/error-404.TsBWxgAa.css",revision:null},{url:"_nuxt/error-404.URZ3d4rD.js",revision:null},{url:"_nuxt/error-500.pRm5WdpW.js",revision:null},{url:"_nuxt/error-500.s2VBNbvW.css",revision:null},{url:"_nuxt/Field.x7PB8qew.js",revision:null},{url:"_nuxt/FieldGroup.MS9ricvr.js",revision:null},{url:"_nuxt/Icon.25oMzK8Y.js",revision:null},{url:"_nuxt/Icon.2p9d7H8O.css",revision:null},{url:"_nuxt/Icon.3tV7QsM6.js",revision:null},{url:"_nuxt/IconCSS.GdgQB7f8.css",revision:null},{url:"_nuxt/IconCSS.S_2Y2j3T.js",revision:null},{url:"_nuxt/imprint.eyytsu5j.js",revision:null},{url:"_nuxt/index.5Jz4PfUi.js",revision:null},{url:"_nuxt/index.dA2pdGEy.js",revision:null},{url:"_nuxt/index.fuMjT_W_.js",revision:null},{url:"_nuxt/index.P7jyS_57.js",revision:null},{url:"_nuxt/index.Wme0U9j4.js",revision:null},{url:"_nuxt/index.XQnW2s_x.js",revision:null},{url:"_nuxt/Markdown.WPtFRHHa.js",revision:null},{url:"_nuxt/node.uMQX-T_c.js",revision:null},{url:"_nuxt/nuxt-img.RsNx5dvB.js",revision:null},{url:"_nuxt/nuxt-link.C3EoG-IJ.js",revision:null},{url:"_nuxt/Page.vue.u2uILwsp.js",revision:null},{url:"_nuxt/PageBody.vue.9b19tB2K.js",revision:null},{url:"_nuxt/PageHeader.vue.IH6QRtnv.js",revision:null},{url:"_nuxt/preview.-mCHzAsd.js",revision:null},{url:"_nuxt/privacy.rYpVFCk_.js",revision:null},{url:"_nuxt/ProseA.zTmGNrJp.js",revision:null},{url:"_nuxt/ProseBlockquote.Y0zarzHq.js",revision:null},{url:"_nuxt/ProseCode.eB2UUYSv.js",revision:null},{url:"_nuxt/ProseCode.nIRUQbb-.css",revision:null},{url:"_nuxt/ProseCode.vue.TH0ftniK.js",revision:null},{url:"_nuxt/ProseCodeButton.BLyyHJge.js",revision:null},{url:"_nuxt/ProseCodeButton.vue.gArhxlRl.js",revision:null},{url:"_nuxt/ProseCodeIcon.VkS0gU6x.js",revision:null},{url:"_nuxt/ProseCodeIcon.vue.Jn0z23a6.js",revision:null},{url:"_nuxt/ProseCodeInline.gVIoUyxw.js",revision:null},{url:"_nuxt/ProseEm.h4vQ5yIq.js",revision:null},{url:"_nuxt/ProseH1.ERJ_PXFW.js",revision:null},{url:"_nuxt/ProseH2.CZrE9A9A.js",revision:null},{url:"_nuxt/ProseH3.wLMRkBd4.js",revision:null},{url:"_nuxt/ProseH4._f6leWkp.js",revision:null},{url:"_nuxt/ProseH5.-4Qz8_JU.js",revision:null},{url:"_nuxt/ProseH6.4fnizEBm.js",revision:null},{url:"_nuxt/ProseHr.Q5RqvaTX.js",revision:null},{url:"_nuxt/ProseImg.aw4tGK1w.js",revision:null},{url:"_nuxt/ProseLi.nBPN-Wlw.js",revision:null},{url:"_nuxt/ProseOl.nYKeWgN-.js",revision:null},{url:"_nuxt/ProseP.jNK0uwbQ.js",revision:null},{url:"_nuxt/ProsePre.ALzzRN-P.js",revision:null},{url:"_nuxt/ProseScript.Mz-aRfsL.js",revision:null},{url:"_nuxt/ProseStrong.-Qu2_nuO.js",revision:null},{url:"_nuxt/ProseTable.PUZjKPtV.js",revision:null},{url:"_nuxt/ProseTbody.TfaeCdsp.js",revision:null},{url:"_nuxt/ProseTd.hlBURCdg.js",revision:null},{url:"_nuxt/ProseTh.jBksuFj9.js",revision:null},{url:"_nuxt/ProseThead.mzjNKpB_.js",revision:null},{url:"_nuxt/ProseTr.BI0W3HpZ.js",revision:null},{url:"_nuxt/ProseUl.xmiGKXtN.js",revision:null},{url:"_nuxt/query.2nnokHMe.js",revision:null},{url:"_nuxt/selectMenu.0QA_vHzB.js",revision:null},{url:"_nuxt/services.QBB2X8zI.js",revision:null},{url:"_nuxt/Shortcut.TBRzh3SL.js",revision:null},{url:"_nuxt/slot.DZCUIc5y.js",revision:null},{url:"_nuxt/Tabs.-1FS6x3l.js",revision:null},{url:"_nuxt/use-resolve-button-type.8UNV2ECI.js",revision:null},{url:"_nuxt/useStudio.OOHmxCca.css",revision:null},{url:"_nuxt/useStudio.tvJ_A0Yy.js",revision:null},{url:"_nuxt/useUI.BYk3_zYW.js",revision:null},{url:"_nuxt/workbox-window.prod.es5.prqDwDSL.js",revision:null},{url:"200",revision:"f83dce80b804294eeb4b3804cb42cf12"},{url:"404",revision:"f83dce80b804294eeb4b3804cb42cf12"},{url:"about",revision:"6300c759966e411814c8e014f71ae4b2"},{url:"apple-touch-icon-180x180.png",revision:"7b602b006a52386b9b440cf4df98c211"},{url:"arrival",revision:"3282c8daaae59bc7b7d230fdeef9a8a6"},{url:"booking",revision:"f71e6b23ad057234db9928ff96f3f9b9"},{url:"contact",revision:"fb1f6d1f1770cfd767bc53205fc92321"},{url:"favicon.ico",revision:"58dbec51a97499eb4f2d0eaa6dfdee37"},{url:"icons/mdi_calendar_clock.png",revision:"0d241cbf26f054e43382da57e632cbd2"},{url:"icons/mdi_feed.png",revision:"b95a17e603f652bad75445e0dcd3424e"},{url:"imprint",revision:"7cbe1a3dff888ae768dd7407892acfba"},{url:"/",revision:"746a01d3c225284df4e5f7dd281851c2"},{url:"logo.svg",revision:"00c7b59cd882cb660aad099d1a3a2aa0"},{url:"maskable-icon-512x512.png",revision:"37e6a2e95361ec0043872ea5eceeb1d6"},{url:"news",revision:"2005bfea23c0f3ec070c28d502a24c19"},{url:"news/newwebsite",revision:"7be22c6cb1048c260c7fded2b40132dd"},{url:"privacy",revision:"3f57fb866f188f002ef3d422b063579c"},{url:"pwa-192x192.png",revision:"079009d0280d03d60281e60df7c5662b"},{url:"pwa-512x512.png",revision:"0e97a85e6e56fbe890165784661b66c6"},{url:"pwa-64x64.png",revision:"e194128bd6b0cf9f57b342f6c0c8e117"},{url:"services",revision:"2593d89fe97721d6ade6aec943640c45"},{url:"_payload.json",revision:"81a4a6cf270cdd5cff58c6ecb881e836"},{url:"about/_payload.json",revision:"1e48b47981741c6d431a2d10443ead77"},{url:"arrival/_payload.json",revision:"1e48b47981741c6d431a2d10443ead77"},{url:"contact/_payload.json",revision:"1e48b47981741c6d431a2d10443ead77"},{url:"imprint/_payload.json",revision:"1c9e0b54a43a1cf1913d0504f85fccc5"},{url:"news/_payload.json",revision:"49494552cf97257bf2bdf1b94aa48619"},{url:"news/newwebsite/_payload.json",revision:"476b5bea2b47caa20429f8d719ab4784"},{url:"privacy/_payload.json",revision:"22a9e851cac750e945aab3b5c2cf4f50"},{url:"services/_payload.json",revision:"b25ef08f7e44f43d48d3fc2ecd97e7d3"},{url:"_nuxt/builds/latest.json",revision:"b714ffbe2ba6e3737bf1fb975c015aba"},{url:"_nuxt/builds/meta/9f0ee915-e58f-4d7b-a282-c61d71383dae.json",revision:null},{url:"manifest.webmanifest",revision:"eb0f371d3ed09cae8d6e629f804f6ebb"}],{}),n.cleanupOutdatedCaches(),n.registerRoute(new n.NavigationRoute(n.createHandlerBoundToURL("/")))}));
