if(!self.define){let n,l={};const e=(e,u)=>(e=new URL(e+".js",u).href,l[e]||new Promise((l=>{if("document"in self){const n=document.createElement("script");n.src=e,n.onload=l,document.head.appendChild(n)}else n=e,importScripts(e),l()})).then((()=>{let n=l[e];if(!n)throw new Error(`Module ${e} didn’t register its module`);return n})));self.define=(u,r)=>{const i=n||("document"in self?document.currentScript.src:"")||location.href;if(l[i])return;let s={};const o=n=>e(n,i),t={module:{uri:i},exports:s,require:o};l[i]=Promise.all(u.map((n=>t[n]||o(n)))).then((n=>(r(...n),s)))}}define(["./workbox-3e911b1d"],(function(n){"use strict";self.skipWaiting(),n.clientsClaim(),n.precacheAndRoute([{url:"_ipx/_/logo.svg",revision:"e7303f330514789c534577d1414e3c20"},{url:"_nuxt/_...slug_.VwOfejfE.js",revision:null},{url:"_nuxt/_plugin-vue_export-helper.x3n3nnut.js",revision:null},{url:"_nuxt/about.kAPQRU9x.js",revision:null},{url:"_nuxt/arrival.Ni1uGF_V.js",revision:null},{url:"_nuxt/asyncData.-Wea7Ri5.js",revision:null},{url:"_nuxt/booking.oKBAwW_e.js",revision:null},{url:"_nuxt/Button.G-I5GA0k.js",revision:null},{url:"_nuxt/Callout.fSW9IMJQ.js",revision:null},{url:"_nuxt/Card.8saTCoeh.js",revision:null},{url:"_nuxt/Card.WlE7ua3g.js",revision:null},{url:"_nuxt/CardGroup.2fXahKAF.js",revision:null},{url:"_nuxt/client-db.6U3nL1eR.js",revision:null},{url:"_nuxt/CodeGroup.OjQ2vMjh.js",revision:null},{url:"_nuxt/Collapsible.HUoCpGi3.js",revision:null},{url:"_nuxt/contact.Vv9bilEP.js",revision:null},{url:"_nuxt/ContentDoc._vb57P84.js",revision:null},{url:"_nuxt/ContentList.PAUE6Z8O.js",revision:null},{url:"_nuxt/ContentNavigation.V_jm3nXY.js",revision:null},{url:"_nuxt/ContentQuery.GF3lgY03.js",revision:null},{url:"_nuxt/ContentRenderer.2G_hzaBY.js",revision:null},{url:"_nuxt/ContentRendererMarkdown.RPzZ90mU.js",revision:null},{url:"_nuxt/ContentRendererMarkdown.vue.N4WkPtwd.js",revision:null},{url:"_nuxt/ContentSlot.4ZoTqWKA.js",revision:null},{url:"_nuxt/default.Gdk71bsm.js",revision:null},{url:"_nuxt/DocumentDrivenEmpty.lYa04t1t.js",revision:null},{url:"_nuxt/DocumentDrivenNotFound.Qlz9obcG.js",revision:null},{url:"_nuxt/entry.Dx0edJy2.js",revision:null},{url:"_nuxt/error-404.D7GPWQfx.js",revision:null},{url:"_nuxt/error-404.TsBWxgAa.css",revision:null},{url:"_nuxt/error-500.mHPep5vz.js",revision:null},{url:"_nuxt/error-500.s2VBNbvW.css",revision:null},{url:"_nuxt/Field.knJpczJf.js",revision:null},{url:"_nuxt/FieldGroup.gORwiY2Z.js",revision:null},{url:"_nuxt/Icon.2p9d7H8O.css",revision:null},{url:"_nuxt/Icon.oP8R_ol2.js",revision:null},{url:"_nuxt/Icon.SR8zZh2U.js",revision:null},{url:"_nuxt/IconCSS.GdgQB7f8.css",revision:null},{url:"_nuxt/IconCSS.y5-s0fp1.js",revision:null},{url:"_nuxt/imprint.1M9FT_Y6.js",revision:null},{url:"_nuxt/index.1dSrIji7.js",revision:null},{url:"_nuxt/index.5Jz4PfUi.js",revision:null},{url:"_nuxt/index.boqdYlA0.js",revision:null},{url:"_nuxt/index.EhPfYrvc.js",revision:null},{url:"_nuxt/index.P7jyS_57.js",revision:null},{url:"_nuxt/index.RIhe6mue.js",revision:null},{url:"_nuxt/Markdown.2D2VmqW_.js",revision:null},{url:"_nuxt/node.uMQX-T_c.js",revision:null},{url:"_nuxt/nuxt-img.R32DEmDl.js",revision:null},{url:"_nuxt/nuxt-link.HjjivY6C.js",revision:null},{url:"_nuxt/Page.vue.UaI-frrH.js",revision:null},{url:"_nuxt/PageBody.vue.HJCTiwFI.js",revision:null},{url:"_nuxt/PageHeader.vue.1epdNEzC.js",revision:null},{url:"_nuxt/preview.tURNlgKH.js",revision:null},{url:"_nuxt/privacy.yfdIrV6O.js",revision:null},{url:"_nuxt/ProseA.qIUXfnAO.js",revision:null},{url:"_nuxt/ProseBlockquote.840pWkS1.js",revision:null},{url:"_nuxt/ProseCode.6YTXQDPx.js",revision:null},{url:"_nuxt/ProseCode.nIRUQbb-.css",revision:null},{url:"_nuxt/ProseCode.vue.j18sG7ex.js",revision:null},{url:"_nuxt/ProseCodeButton._i6-O-Rt.js",revision:null},{url:"_nuxt/ProseCodeButton.vue.pMJzOJQ_.js",revision:null},{url:"_nuxt/ProseCodeIcon.4VdEZY81.js",revision:null},{url:"_nuxt/ProseCodeIcon.vue.zFs6tFxz.js",revision:null},{url:"_nuxt/ProseCodeInline.a2VY0hdy.js",revision:null},{url:"_nuxt/ProseEm._Ut1ObyS.js",revision:null},{url:"_nuxt/ProseH1.6GVo49tZ.js",revision:null},{url:"_nuxt/ProseH2.lWVF_Yeb.js",revision:null},{url:"_nuxt/ProseH3.Ec3a0mjI.js",revision:null},{url:"_nuxt/ProseH4.lPCmDuUY.js",revision:null},{url:"_nuxt/ProseH5.qbi7-nhG.js",revision:null},{url:"_nuxt/ProseH6.1yNi9fEO.js",revision:null},{url:"_nuxt/ProseHr.iLImN9VU.js",revision:null},{url:"_nuxt/ProseImg.dvXbxilV.js",revision:null},{url:"_nuxt/ProseLi.ohUn9hYf.js",revision:null},{url:"_nuxt/ProseOl.zJhlVzws.js",revision:null},{url:"_nuxt/ProseP.rWi2zlUR.js",revision:null},{url:"_nuxt/ProsePre.Hxgiq0Hm.js",revision:null},{url:"_nuxt/ProseScript.eQhXf9kN.js",revision:null},{url:"_nuxt/ProseStrong.Uk0_QjUU.js",revision:null},{url:"_nuxt/ProseTable.8PfK3gAb.js",revision:null},{url:"_nuxt/ProseTbody.uzUJDZgH.js",revision:null},{url:"_nuxt/ProseTd.CBAVvF7v.js",revision:null},{url:"_nuxt/ProseTh.QZRgC-sl.js",revision:null},{url:"_nuxt/ProseThead.apjo_GPR.js",revision:null},{url:"_nuxt/ProseTr.V8xsr6h3.js",revision:null},{url:"_nuxt/ProseUl.rt1Akzcj.js",revision:null},{url:"_nuxt/query.RL-Uw1E9.js",revision:null},{url:"_nuxt/selectMenu.Qz9MCkTm.js",revision:null},{url:"_nuxt/services.JSAb48_-.js",revision:null},{url:"_nuxt/Shortcut.MaxBJtgh.js",revision:null},{url:"_nuxt/slot.i4hd4oKz.js",revision:null},{url:"_nuxt/Tabs.xgeJ0bgm.js",revision:null},{url:"_nuxt/use-resolve-button-type.doON2bju.js",revision:null},{url:"_nuxt/useStudio.LoN2UCXI.css",revision:null},{url:"_nuxt/useStudio.ls8vxtj2.js",revision:null},{url:"_nuxt/useUI.Wp3ZPw9U.js",revision:null},{url:"_nuxt/workbox-window.prod.es5.prqDwDSL.js",revision:null},{url:"200",revision:"3af9461c852fbd1ea53a681d9ec6143e"},{url:"404",revision:"3af9461c852fbd1ea53a681d9ec6143e"},{url:"about",revision:"2243c11c37b118e0a6af5e5ea126a010"},{url:"apple-touch-icon-180x180.png",revision:"7b602b006a52386b9b440cf4df98c211"},{url:"arrival",revision:"807e90ed6f72c7ed14a2f24bd552f552"},{url:"booking",revision:"f71e6b23ad057234db9928ff96f3f9b9"},{url:"contact",revision:"6758b2f9acfb741b63fcea23b58414d7"},{url:"favicon.ico",revision:"58dbec51a97499eb4f2d0eaa6dfdee37"},{url:"icons/mdi_calendar_clock.png",revision:"0d241cbf26f054e43382da57e632cbd2"},{url:"icons/mdi_feed.png",revision:"b95a17e603f652bad75445e0dcd3424e"},{url:"imprint",revision:"62574479d806658c743ff9a22fdbc0ff"},{url:"/",revision:"2363344fde3cd3600fdb9588c6db7769"},{url:"logo.svg",revision:"00c7b59cd882cb660aad099d1a3a2aa0"},{url:"maskable-icon-512x512.png",revision:"37e6a2e95361ec0043872ea5eceeb1d6"},{url:"news",revision:"464f8cac8588e23b29c7daf9854ecad8"},{url:"news/newwebsite",revision:"08d37e807f4ce3f7e03f5a610db7dbb5"},{url:"privacy",revision:"3bcdb277f3e4891cfd0217f61d11727d"},{url:"pwa-192x192.png",revision:"079009d0280d03d60281e60df7c5662b"},{url:"pwa-512x512.png",revision:"0e97a85e6e56fbe890165784661b66c6"},{url:"pwa-64x64.png",revision:"e194128bd6b0cf9f57b342f6c0c8e117"},{url:"services",revision:"1b5363848e72f1512017269639498d19"},{url:"_payload.json",revision:"cd9354bac93fa7a86fbaecd994a2aeba"},{url:"about/_payload.json",revision:"e2e94a3f4c4a0b4a4aaa5a473dc1285a"},{url:"arrival/_payload.json",revision:"155c32c1fd8c93590167cd9b1fdbca17"},{url:"contact/_payload.json",revision:"155c32c1fd8c93590167cd9b1fdbca17"},{url:"imprint/_payload.json",revision:"14eb6066a8d06f50ac6c514e62e5b034"},{url:"news/_payload.json",revision:"acf68a03a69db7c8b7bb9a658be33db3"},{url:"news/newwebsite/_payload.json",revision:"0e1b6260d2f566753e6b95fe8cdd1956"},{url:"privacy/_payload.json",revision:"155c32c1fd8c93590167cd9b1fdbca17"},{url:"services/_payload.json",revision:"47e5c370fcc93ddc433b0ea387d35202"},{url:"_nuxt/builds/latest.json",revision:"c6baa83270443ee77dd97961c4c4c453"},{url:"_nuxt/builds/meta/33cb93d9-52b9-41c1-9ae7-3ecbd689299d.json",revision:null},{url:"manifest.webmanifest",revision:"eb0f371d3ed09cae8d6e629f804f6ebb"}],{}),n.cleanupOutdatedCaches(),n.registerRoute(new n.NavigationRoute(n.createHandlerBoundToURL("/")))}));
