if(!self.define){let n,l={};const u=(u,i)=>(u=new URL(u+".js",i).href,l[u]||new Promise((l=>{if("document"in self){const n=document.createElement("script");n.src=u,n.onload=l,document.head.appendChild(n)}else n=u,importScripts(u),l()})).then((()=>{let n=l[u];if(!n)throw new Error(`Module ${u} didn’t register its module`);return n})));self.define=(i,r)=>{const s=n||("document"in self?document.currentScript.src:"")||location.href;if(l[s])return;let e={};const o=n=>u(n,s),t={module:{uri:s},exports:e,require:o};l[s]=Promise.all(i.map((n=>t[n]||o(n)))).then((n=>(r(...n),e)))}}define(["./workbox-e1498109"],(function(n){"use strict";self.skipWaiting(),n.clientsClaim(),n.precacheAndRoute([{url:"_ipx/_/logo.svg",revision:"e7303f330514789c534577d1414e3c20"},{url:"_nuxt/_xLkCLXi.js",revision:null},{url:"_nuxt/1X655VdT.js",revision:null},{url:"_nuxt/20Yx_oBH.js",revision:null},{url:"_nuxt/about.DIlihRi0.css",revision:null},{url:"_nuxt/B__-SM6U.js",revision:null},{url:"_nuxt/B_JE-gPx.js",revision:null},{url:"_nuxt/B_OdhMgL.js",revision:null},{url:"_nuxt/B54X7243.js",revision:null},{url:"_nuxt/BBGLpq7r.js",revision:null},{url:"_nuxt/BDi0tMOB.js",revision:null},{url:"_nuxt/BdryqvIP.js",revision:null},{url:"_nuxt/BE7lHWbp.js",revision:null},{url:"_nuxt/BGb9EH7Y.js",revision:null},{url:"_nuxt/bj8l-RCu.js",revision:null},{url:"_nuxt/BJW3iGE2.js",revision:null},{url:"_nuxt/BJYpNFXz.js",revision:null},{url:"_nuxt/BKSI6R_X.js",revision:null},{url:"_nuxt/Bmp6Yi5F.js",revision:null},{url:"_nuxt/BRIYsNFY.js",revision:null},{url:"_nuxt/BrtjnQAf.js",revision:null},{url:"_nuxt/BSb23L9O.js",revision:null},{url:"_nuxt/BT6w2zQN.js",revision:null},{url:"_nuxt/BtA34Bjq.js",revision:null},{url:"_nuxt/BtltBO9I.js",revision:null},{url:"_nuxt/BZQUYK6R.js",revision:null},{url:"_nuxt/C-v3KzvZ.js",revision:null},{url:"_nuxt/C4Fyjhg1.js",revision:null},{url:"_nuxt/C6Ceqjer.js",revision:null},{url:"_nuxt/C6tx5GAD.js",revision:null},{url:"_nuxt/C7SZQrJi.js",revision:null},{url:"_nuxt/CA_ECG9n.js",revision:null},{url:"_nuxt/CaTto06P.js",revision:null},{url:"_nuxt/CBCYEKKu.js",revision:null},{url:"_nuxt/CccdMAdg.js",revision:null},{url:"_nuxt/CcMrozdD.js",revision:null},{url:"_nuxt/ce1gcSEv.js",revision:null},{url:"_nuxt/CeDYQILP.js",revision:null},{url:"_nuxt/CfpnFzfS.js",revision:null},{url:"_nuxt/CKGNxNDt.js",revision:null},{url:"_nuxt/CmJmMt0T.js",revision:null},{url:"_nuxt/CpaDm6UK.js",revision:null},{url:"_nuxt/CqEwmfX-.js",revision:null},{url:"_nuxt/Cr_HCz35.js",revision:null},{url:"_nuxt/CSG3w-Js.js",revision:null},{url:"_nuxt/CtxASnwh.js",revision:null},{url:"_nuxt/CViPuJnC.js",revision:null},{url:"_nuxt/CwhRqHUG.js",revision:null},{url:"_nuxt/CxJSCQKK.js",revision:null},{url:"_nuxt/D_n-aGqN.js",revision:null},{url:"_nuxt/D4-3V-eC.js",revision:null},{url:"_nuxt/D4WcdDQ0.js",revision:null},{url:"_nuxt/D5dK2S2K.js",revision:null},{url:"_nuxt/D5gOYdM7.js",revision:null},{url:"_nuxt/D5Y0KRch.js",revision:null},{url:"_nuxt/D9Ci4vYW.js",revision:null},{url:"_nuxt/Da6uMPBg.js",revision:null},{url:"_nuxt/DbFe9HVF.js",revision:null},{url:"_nuxt/Dew4Cnzf.js",revision:null},{url:"_nuxt/Dfl-37yW.js",revision:null},{url:"_nuxt/DgfIicco.js",revision:null},{url:"_nuxt/DgtKlheM.js",revision:null},{url:"_nuxt/DK6TNnp8.js",revision:null},{url:"_nuxt/DlAUqK2U.js",revision:null},{url:"_nuxt/DLDPcYfO.js",revision:null},{url:"_nuxt/DmZxrbJT.js",revision:null},{url:"_nuxt/Dnd51l0P.js",revision:null},{url:"_nuxt/DP2QBYQy.js",revision:null},{url:"_nuxt/DRyThkG6.js",revision:null},{url:"_nuxt/duvxLkTM.js",revision:null},{url:"_nuxt/DXmtvCuB.js",revision:null},{url:"_nuxt/DxPGuMFW.js",revision:null},{url:"_nuxt/DYR_Jkrw.js",revision:null},{url:"_nuxt/error-404.E9K0eb39.css",revision:null},{url:"_nuxt/error-500.CA_WOw_J.css",revision:null},{url:"_nuxt/f-3-vARH.js",revision:null},{url:"_nuxt/gf2tKJQH.js",revision:null},{url:"_nuxt/GRewr9_q.js",revision:null},{url:"_nuxt/JBsA_vw3.js",revision:null},{url:"_nuxt/jGkQfty-.js",revision:null},{url:"_nuxt/jVskvG6O.js",revision:null},{url:"_nuxt/KePUMWD3.js",revision:null},{url:"_nuxt/l5rVoU8_.js",revision:null},{url:"_nuxt/ltoJpzB4.js",revision:null},{url:"_nuxt/M3DtTpLY.js",revision:null},{url:"_nuxt/N8fmb-LW.js",revision:null},{url:"_nuxt/nC5ZYqng.js",revision:null},{url:"_nuxt/NL9AVnNx.js",revision:null},{url:"_nuxt/oehJ5uz6.js",revision:null},{url:"_nuxt/oGnFJkLc.js",revision:null},{url:"_nuxt/PdPyd5gw.js",revision:null},{url:"_nuxt/ProseCode.B_fgAJq0.css",revision:null},{url:"_nuxt/R7L3yGho.js",revision:null},{url:"_nuxt/seZOZphg.js",revision:null},{url:"_nuxt/t4CRFf1-.js",revision:null},{url:"_nuxt/useStudio.procKYm_.css",revision:null},{url:"_nuxt/VDh-w73V.js",revision:null},{url:"_nuxt/wzqlSP85.js",revision:null},{url:"_nuxt/zlNLKofA.js",revision:null},{url:"200",revision:"994d243655d41307c259e7863857d9af"},{url:"404",revision:"4887467808fba26f4aa129bd8e1bfd3e"},{url:"about",revision:"c97358993c7937e988ca97c5d3dc79e8"},{url:"apple-touch-icon-180x180.png",revision:"7b602b006a52386b9b440cf4df98c211"},{url:"arrival",revision:"870f5a89dca3845c2c80342bd05a0c94"},{url:"booking",revision:"f71e6b23ad057234db9928ff96f3f9b9"},{url:"contact",revision:"74b3984d5e03181a726d1d267ddb5928"},{url:"favicon.ico",revision:"58dbec51a97499eb4f2d0eaa6dfdee37"},{url:"icons/mdi_calendar_clock.png",revision:"0d241cbf26f054e43382da57e632cbd2"},{url:"icons/mdi_feed.png",revision:"b95a17e603f652bad75445e0dcd3424e"},{url:"imprint",revision:"80681fc24d4a474daebd814fd147bc27"},{url:"/",revision:"4be0c095680c9a4db6eddb3fdf920f5e"},{url:"logo.svg",revision:"00c7b59cd882cb660aad099d1a3a2aa0"},{url:"maskable-icon-512x512.png",revision:"37e6a2e95361ec0043872ea5eceeb1d6"},{url:"news",revision:"7fe5cd1fd9ddbf36dd052cb98c91ae26"},{url:"news/newwebsite",revision:"c464329ed4db7504ea668eaa4df6ca65"},{url:"privacy",revision:"8e1299badeb73dfc996bea58fabdeee1"},{url:"pwa-192x192.png",revision:"079009d0280d03d60281e60df7c5662b"},{url:"pwa-512x512.png",revision:"0e97a85e6e56fbe890165784661b66c6"},{url:"pwa-64x64.png",revision:"e194128bd6b0cf9f57b342f6c0c8e117"},{url:"services",revision:"5f48d46c10c394087a8a6d79520d5edb"},{url:"_payload.json",revision:"01d79d0f88c5b4862e14372f55383482"},{url:"about/_payload.json",revision:"4688a51e102adc69d96a5ca16275339e"},{url:"arrival/_payload.json",revision:"94a07456adbb40f910c38810142190e8"},{url:"contact/_payload.json",revision:"d96068539f148eb9220189ab2ed5713c"},{url:"imprint/_payload.json",revision:"07dd75774688f5adb2f69b4fbc50b68f"},{url:"news/_payload.json",revision:"839d9746720762d2988e83ea650ef04d"},{url:"news/newwebsite/_payload.json",revision:"7200e6a94f1abaa267f483df14ee1170"},{url:"privacy/_payload.json",revision:"f0b85c1b0114c32970a015d2840b38fd"},{url:"services/_payload.json",revision:"a4958fda9e0c48c6b4807bda8dfe7843"},{url:"_nuxt/builds/latest.json",revision:"80ce0d21ced04e3d01efc14147c1b3de"},{url:"_nuxt/builds/meta/0de9bda6-89c0-4e9b-b363-dcf58e47a6c6.json",revision:null},{url:"manifest.webmanifest",revision:"eb0f371d3ed09cae8d6e629f804f6ebb"}],{}),n.cleanupOutdatedCaches(),n.registerRoute(new n.NavigationRoute(n.createHandlerBoundToURL("/")))}));
