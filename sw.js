if(!self.define){let n,l={};const u=(u,i)=>(u=new URL(u+".js",i).href,l[u]||new Promise((l=>{if("document"in self){const n=document.createElement("script");n.src=u,n.onload=l,document.head.appendChild(n)}else n=u,importScripts(u),l()})).then((()=>{let n=l[u];if(!n)throw new Error(`Module ${u} didn’t register its module`);return n})));self.define=(i,r)=>{const s=n||("document"in self?document.currentScript.src:"")||location.href;if(l[s])return;let e={};const o=n=>u(n,s),t={module:{uri:s},exports:e,require:o};l[s]=Promise.all(i.map((n=>t[n]||o(n)))).then((n=>(r(...n),e)))}}define(["./workbox-e1498109"],(function(n){"use strict";self.skipWaiting(),n.clientsClaim(),n.precacheAndRoute([{url:"_ipx/_/logo.svg",revision:"e7303f330514789c534577d1414e3c20"},{url:"_nuxt/0Zlcb69v.js",revision:null},{url:"_nuxt/1ddTHERT.js",revision:null},{url:"_nuxt/1ffml2nS.js",revision:null},{url:"_nuxt/1UPdButJ.js",revision:null},{url:"_nuxt/4oZzSdlv.js",revision:null},{url:"_nuxt/61rFFZ8b.js",revision:null},{url:"_nuxt/8qcnV22K.js",revision:null},{url:"_nuxt/9yk242Co.js",revision:null},{url:"_nuxt/about.D7sfdsLC.css",revision:null},{url:"_nuxt/B-D4nKcq.js",revision:null},{url:"_nuxt/B5DHVdvb.js",revision:null},{url:"_nuxt/B5h4xtfi.js",revision:null},{url:"_nuxt/B6TfI4hC.js",revision:null},{url:"_nuxt/B96qpm4w.js",revision:null},{url:"_nuxt/B9NnWqh2.js",revision:null},{url:"_nuxt/B9xwOEVL.js",revision:null},{url:"_nuxt/BaTB6x6u.js",revision:null},{url:"_nuxt/BBrLd0nj.js",revision:null},{url:"_nuxt/BdDGHOOK.js",revision:null},{url:"_nuxt/BGhKcI5X.js",revision:null},{url:"_nuxt/Bhq7lYuY.js",revision:null},{url:"_nuxt/Bhx-6XFt.js",revision:null},{url:"_nuxt/BIe9DdOm.js",revision:null},{url:"_nuxt/BLQrzFmz.js",revision:null},{url:"_nuxt/BO4KfKNR.js",revision:null},{url:"_nuxt/BSb23L9O.js",revision:null},{url:"_nuxt/BV4RWhtp.js",revision:null},{url:"_nuxt/C-v3KzvZ.js",revision:null},{url:"_nuxt/C5o3xdvf.js",revision:null},{url:"_nuxt/C93TzNuZ.js",revision:null},{url:"_nuxt/CD4frCY5.js",revision:null},{url:"_nuxt/CDx1Ab7u.js",revision:null},{url:"_nuxt/CEdzlpjB.js",revision:null},{url:"_nuxt/CeQJU7lG.js",revision:null},{url:"_nuxt/CF3NOiUn.js",revision:null},{url:"_nuxt/CFx20MXt.js",revision:null},{url:"_nuxt/Ch9_uPzZ.js",revision:null},{url:"_nuxt/ChcCBJPE.js",revision:null},{url:"_nuxt/CjIjRXSw.js",revision:null},{url:"_nuxt/Cl_KoZMw.js",revision:null},{url:"_nuxt/ClQRrzl2.js",revision:null},{url:"_nuxt/CmAlk-EU.js",revision:null},{url:"_nuxt/CncwyBPk.js",revision:null},{url:"_nuxt/CNpVC7CJ.js",revision:null},{url:"_nuxt/Co2ROuqn.js",revision:null},{url:"_nuxt/CO56FENx.js",revision:null},{url:"_nuxt/CPuyzt91.js",revision:null},{url:"_nuxt/CRLpSqsI.js",revision:null},{url:"_nuxt/CRUp13w1.js",revision:null},{url:"_nuxt/CUpHBcUT.js",revision:null},{url:"_nuxt/CUytGCUh.js",revision:null},{url:"_nuxt/CVdCJLFB.js",revision:null},{url:"_nuxt/CyvwJEKY.js",revision:null},{url:"_nuxt/D-ep64G6.js",revision:null},{url:"_nuxt/D0r7tNQ-.js",revision:null},{url:"_nuxt/D1Dw3O-7.js",revision:null},{url:"_nuxt/D2MBUhSq.js",revision:null},{url:"_nuxt/D3-YeSBC.js",revision:null},{url:"_nuxt/D4RWPVgZ.js",revision:null},{url:"_nuxt/D5gOYdM7.js",revision:null},{url:"_nuxt/D6ojPJ19.js",revision:null},{url:"_nuxt/DASRiSTa.js",revision:null},{url:"_nuxt/DCEQNgKZ.js",revision:null},{url:"_nuxt/DDXWSwmV.js",revision:null},{url:"_nuxt/De1AQbI9.js",revision:null},{url:"_nuxt/DK08Uosg.js",revision:null},{url:"_nuxt/DKsG0XIq.js",revision:null},{url:"_nuxt/Dl109w-V.js",revision:null},{url:"_nuxt/DlAUqK2U.js",revision:null},{url:"_nuxt/Dlgy5NTx.js",revision:null},{url:"_nuxt/DLT0AXjl.js",revision:null},{url:"_nuxt/Dnd51l0P.js",revision:null},{url:"_nuxt/DODdJBUj.js",revision:null},{url:"_nuxt/DQ46Xoke.js",revision:null},{url:"_nuxt/Dr2yNLO2.js",revision:null},{url:"_nuxt/dUfG2toh.js",revision:null},{url:"_nuxt/DylWO5SP.js",revision:null},{url:"_nuxt/DzQ_Fm2_.js",revision:null},{url:"_nuxt/Dzzm_Wy8.js",revision:null},{url:"_nuxt/error-404.DMhzmX-W.css",revision:null},{url:"_nuxt/error-500.B1VY1GvW.css",revision:null},{url:"_nuxt/eSMtUbBx.js",revision:null},{url:"_nuxt/hmCVHqus.js",revision:null},{url:"_nuxt/iu4Q6qkR.js",revision:null},{url:"_nuxt/ProseCode.CchFRBtv.css",revision:null},{url:"_nuxt/QWgdY8xJ.js",revision:null},{url:"_nuxt/R6rUib0B.js",revision:null},{url:"_nuxt/r9gz75y3.js",revision:null},{url:"_nuxt/t6Em6lvl.js",revision:null},{url:"_nuxt/UPmys_eF.js",revision:null},{url:"_nuxt/useStudio.CDJQZIEN.css",revision:null},{url:"_nuxt/wBepR3lH.js",revision:null},{url:"_nuxt/wk9Q1Opy.js",revision:null},{url:"_nuxt/X6KP_B3l.js",revision:null},{url:"_nuxt/XtImycKk.js",revision:null},{url:"_nuxt/zIVYcqjq.js",revision:null},{url:"_nuxt/ZOYVscu3.js",revision:null},{url:"_nuxt/Zr61dd9D.js",revision:null},{url:"200",revision:"1abd1fe4c80f5b85c5917270b8f4b618"},{url:"404",revision:"33b9f1ddb89b101d712a2ea1c586ae9c"},{url:"about",revision:"7171772b6d79bdf3043414cd9854a490"},{url:"apple-touch-icon-180x180.png",revision:"7b602b006a52386b9b440cf4df98c211"},{url:"arrival",revision:"472b1a3450b3e40029cfd4c04e6bc4e4"},{url:"booking",revision:"f71e6b23ad057234db9928ff96f3f9b9"},{url:"contact",revision:"8d820b288a1b58f030831098c4a0fa85"},{url:"favicon.ico",revision:"58dbec51a97499eb4f2d0eaa6dfdee37"},{url:"icons/mdi_calendar_clock.png",revision:"0d241cbf26f054e43382da57e632cbd2"},{url:"icons/mdi_feed.png",revision:"b95a17e603f652bad75445e0dcd3424e"},{url:"imprint",revision:"5e4ae121aaeb387afdb6944e468c6c47"},{url:"/",revision:"4953a17a192a8404e854cb6931541a79"},{url:"logo.svg",revision:"00c7b59cd882cb660aad099d1a3a2aa0"},{url:"maskable-icon-512x512.png",revision:"37e6a2e95361ec0043872ea5eceeb1d6"},{url:"news",revision:"bd4edaf8771f4c5bab4c314f16400241"},{url:"news/newwebsite",revision:"bad7d1703f82a88982cf0b16f1243c9f"},{url:"privacy",revision:"fe08bd8d463a230ec34c1571f6fdaccd"},{url:"pwa-192x192.png",revision:"079009d0280d03d60281e60df7c5662b"},{url:"pwa-512x512.png",revision:"0e97a85e6e56fbe890165784661b66c6"},{url:"pwa-64x64.png",revision:"e194128bd6b0cf9f57b342f6c0c8e117"},{url:"services",revision:"0e49ef28aa7f747559d63d388e9c195f"},{url:"_payload.json",revision:"4cd7bb0bbe3e7887283bc4d70e225bc4"},{url:"about/_payload.json",revision:"8b5e09f2b9b6c502a9e8b9b876eb3905"},{url:"arrival/_payload.json",revision:"f221e5cdd381f0bd5129f855180caab6"},{url:"contact/_payload.json",revision:"27a6544f2f6c4169a350cec27d1ea72a"},{url:"imprint/_payload.json",revision:"3f83922215c5802e4d09ad8904a8beb9"},{url:"news/_payload.json",revision:"27db9b445b65a9d780f8fc562e01266d"},{url:"news/newwebsite/_payload.json",revision:"65370b87e0ca5c6b76a920ae7f488f2e"},{url:"privacy/_payload.json",revision:"bc426c59645267adb7ecd2053f1860bf"},{url:"services/_payload.json",revision:"c7eac1bc8eef0a3b44088bf75acd6b9a"},{url:"_nuxt/builds/latest.json",revision:"970c795bd63250b7593b2c038e3dd3cb"},{url:"_nuxt/builds/meta/66b5ec88-25d0-4f5f-81d6-ba942c6512b0.json",revision:null},{url:"manifest.webmanifest",revision:"eb0f371d3ed09cae8d6e629f804f6ebb"}],{}),n.cleanupOutdatedCaches(),n.registerRoute(new n.NavigationRoute(n.createHandlerBoundToURL("/")))}));
