if(!self.define){let n,l={};const u=(u,i)=>(u=new URL(u+".js",i).href,l[u]||new Promise((l=>{if("document"in self){const n=document.createElement("script");n.src=u,n.onload=l,document.head.appendChild(n)}else n=u,importScripts(u),l()})).then((()=>{let n=l[u];if(!n)throw new Error(`Module ${u} didn’t register its module`);return n})));self.define=(i,r)=>{const s=n||("document"in self?document.currentScript.src:"")||location.href;if(l[s])return;let e={};const o=n=>u(n,s),t={module:{uri:s},exports:e,require:o};l[s]=Promise.all(i.map((n=>t[n]||o(n)))).then((n=>(r(...n),e)))}}define(["./workbox-e1498109"],(function(n){"use strict";self.skipWaiting(),n.clientsClaim(),n.precacheAndRoute([{url:"_ipx/_/logo.svg",revision:"e7303f330514789c534577d1414e3c20"},{url:"_nuxt/-5mjQPPC.js",revision:null},{url:"_nuxt/06VqteLp.js",revision:null},{url:"_nuxt/5Qnlps74.js",revision:null},{url:"_nuxt/7tI_uPZy.js",revision:null},{url:"_nuxt/about.BJ0wLx40.css",revision:null},{url:"_nuxt/auVnm2e-.js",revision:null},{url:"_nuxt/B_6ZbSQi.js",revision:null},{url:"_nuxt/B8ayPuyP.js",revision:null},{url:"_nuxt/BDFgqHLK.js",revision:null},{url:"_nuxt/BE9T3M3w.js",revision:null},{url:"_nuxt/Bk1ppHjy.js",revision:null},{url:"_nuxt/BMrezDD7.js",revision:null},{url:"_nuxt/BmwcE1Ll.js",revision:null},{url:"_nuxt/BNHfJF4y.js",revision:null},{url:"_nuxt/Bo6Y2NKC.js",revision:null},{url:"_nuxt/BOZGsxht.js",revision:null},{url:"_nuxt/Bp69QQPH.js",revision:null},{url:"_nuxt/BPhV7u2R.js",revision:null},{url:"_nuxt/Bpnq8Ig6.js",revision:null},{url:"_nuxt/BRnnFOsn.js",revision:null},{url:"_nuxt/BSb23L9O.js",revision:null},{url:"_nuxt/BSJ98V5z.js",revision:null},{url:"_nuxt/BW4WRIyp.js",revision:null},{url:"_nuxt/Bx0N3gJe.js",revision:null},{url:"_nuxt/Bx7yadx5.js",revision:null},{url:"_nuxt/By0L7Fm1.js",revision:null},{url:"_nuxt/Bya6bl6x.js",revision:null},{url:"_nuxt/BZ4fVrov.js",revision:null},{url:"_nuxt/C_BsE9Jh.js",revision:null},{url:"_nuxt/C_KxtJj1.js",revision:null},{url:"_nuxt/C-v3KzvZ.js",revision:null},{url:"_nuxt/C2h2duco.js",revision:null},{url:"_nuxt/C2mrNiXO.js",revision:null},{url:"_nuxt/C93TzNuZ.js",revision:null},{url:"_nuxt/CADUdOul.js",revision:null},{url:"_nuxt/CCk2UNkq.js",revision:null},{url:"_nuxt/CEdSmAzo.js",revision:null},{url:"_nuxt/CF3NOiUn.js",revision:null},{url:"_nuxt/CFaz200t.js",revision:null},{url:"_nuxt/CFe_bwRa.js",revision:null},{url:"_nuxt/CiArpO2y.js",revision:null},{url:"_nuxt/CJBY4Q1c.js",revision:null},{url:"_nuxt/Cky445r-.js",revision:null},{url:"_nuxt/Ckz58KZ-.js",revision:null},{url:"_nuxt/CnCTbm0_.js",revision:null},{url:"_nuxt/CPK5fMm4.js",revision:null},{url:"_nuxt/CPqsrtqO.js",revision:null},{url:"_nuxt/CpuHhuBA.js",revision:null},{url:"_nuxt/CRiuYiqa.js",revision:null},{url:"_nuxt/CRxx8BWt.js",revision:null},{url:"_nuxt/CsX4YB_2.js",revision:null},{url:"_nuxt/Ct1v_QXX.js",revision:null},{url:"_nuxt/CTB-HabP.js",revision:null},{url:"_nuxt/CTuDeNF7.js",revision:null},{url:"_nuxt/CUrg_P6A.js",revision:null},{url:"_nuxt/CvjcR6AU.js",revision:null},{url:"_nuxt/CvPl5tTm.js",revision:null},{url:"_nuxt/CW3_d4Rp.js",revision:null},{url:"_nuxt/D0je8uLb.js",revision:null},{url:"_nuxt/D5gOYdM7.js",revision:null},{url:"_nuxt/D9oihe_b.js",revision:null},{url:"_nuxt/Db7o_y_S.js",revision:null},{url:"_nuxt/DbxcSent.js",revision:null},{url:"_nuxt/DbyZ4ceK.js",revision:null},{url:"_nuxt/DefpbxTH.js",revision:null},{url:"_nuxt/DFu9bCaG.js",revision:null},{url:"_nuxt/DfyIv1Zw.js",revision:null},{url:"_nuxt/diZsqhT6.js",revision:null},{url:"_nuxt/DJrugtA8.js",revision:null},{url:"_nuxt/DlAUqK2U.js",revision:null},{url:"_nuxt/DmBcETsX.js",revision:null},{url:"_nuxt/DMZlTlYI.js",revision:null},{url:"_nuxt/DN57CgOb.js",revision:null},{url:"_nuxt/Dnd51l0P.js",revision:null},{url:"_nuxt/DNpEftZm.js",revision:null},{url:"_nuxt/DphtYsuh.js",revision:null},{url:"_nuxt/Dpse7fkk.js",revision:null},{url:"_nuxt/DrzLM4RT.js",revision:null},{url:"_nuxt/DsOvotZ7.js",revision:null},{url:"_nuxt/DtRJC670.js",revision:null},{url:"_nuxt/DUPvY94q.js",revision:null},{url:"_nuxt/error-404.CJ2cadAJ.css",revision:null},{url:"_nuxt/error-500.CtnQl6jR.css",revision:null},{url:"_nuxt/G3bbq8ZJ.js",revision:null},{url:"_nuxt/hjLy8HiP.js",revision:null},{url:"_nuxt/Icon.CH7xNoOR.css",revision:null},{url:"_nuxt/IconCSS.BrhZjySK.css",revision:null},{url:"_nuxt/j71HAR2h.js",revision:null},{url:"_nuxt/n1eFZhEb.js",revision:null},{url:"_nuxt/nXXobCx9.js",revision:null},{url:"_nuxt/NYPidQsW.js",revision:null},{url:"_nuxt/pg4vUtfB.js",revision:null},{url:"_nuxt/PLCeQn_-.js",revision:null},{url:"_nuxt/ProseCode.CchFRBtv.css",revision:null},{url:"_nuxt/Q_gTdn-w.js",revision:null},{url:"_nuxt/Ql9M0mhR.js",revision:null},{url:"_nuxt/sPTL7ZtO.js",revision:null},{url:"_nuxt/ssY_NMCV.js",revision:null},{url:"_nuxt/tE_THl24.js",revision:null},{url:"_nuxt/useStudio.ZKNs4fSY.css",revision:null},{url:"_nuxt/v2ZuF6Jc.js",revision:null},{url:"_nuxt/vVKd8L8a.js",revision:null},{url:"_nuxt/yb9tUdlU.js",revision:null},{url:"200",revision:"683b1f91d2a2862116a71f1f53d58cb5"},{url:"404",revision:"683b1f91d2a2862116a71f1f53d58cb5"},{url:"about",revision:"c5a12911aac63bfa9e7a01bd65abd90e"},{url:"apple-touch-icon-180x180.png",revision:"7b602b006a52386b9b440cf4df98c211"},{url:"arrival",revision:"8fe39ca5e1eb885c9109f8ba217fb906"},{url:"booking",revision:"f71e6b23ad057234db9928ff96f3f9b9"},{url:"contact",revision:"30d99debbe2510267f0ba0531492bc87"},{url:"favicon.ico",revision:"58dbec51a97499eb4f2d0eaa6dfdee37"},{url:"icons/mdi_calendar_clock.png",revision:"0d241cbf26f054e43382da57e632cbd2"},{url:"icons/mdi_feed.png",revision:"b95a17e603f652bad75445e0dcd3424e"},{url:"imprint",revision:"ce671f9de7333bc35939225d5e9b045c"},{url:"/",revision:"6798bb00d91a69ea997a78e743bbb880"},{url:"logo.svg",revision:"00c7b59cd882cb660aad099d1a3a2aa0"},{url:"maskable-icon-512x512.png",revision:"37e6a2e95361ec0043872ea5eceeb1d6"},{url:"news",revision:"e5bfd82cc8adfd0366fd053cf218ed1a"},{url:"news/newwebsite",revision:"e4d72455bef5847eee6832c62227170a"},{url:"privacy",revision:"daee1e6ef00c1faa570d0b6b1b993d34"},{url:"pwa-192x192.png",revision:"079009d0280d03d60281e60df7c5662b"},{url:"pwa-512x512.png",revision:"0e97a85e6e56fbe890165784661b66c6"},{url:"pwa-64x64.png",revision:"e194128bd6b0cf9f57b342f6c0c8e117"},{url:"services",revision:"5ee542ff1e2ab1a1729cd3a7dd80dd62"},{url:"_payload.json",revision:"f15ea35d1338278ebdb21ee8afb48b61"},{url:"about/_payload.json",revision:"c456b41c7e05854c4aa6c4436944ffe0"},{url:"arrival/_payload.json",revision:"30fdd7c9e67b20fa5cd5422b0833921d"},{url:"contact/_payload.json",revision:"f274d6ca8eb025d8222141adaee026d0"},{url:"imprint/_payload.json",revision:"61fc324d1b7ea064293aa80a6272b0e2"},{url:"news/_payload.json",revision:"a1b24937ae63bcbfb4d66a2627ab0a70"},{url:"news/newwebsite/_payload.json",revision:"65b0b7811159344258cdcf3eee4331f5"},{url:"privacy/_payload.json",revision:"2a24eb71759051b35ba905c8091fbf91"},{url:"services/_payload.json",revision:"fc1a74f731b2e976f264426b9fe5b835"},{url:"_nuxt/builds/latest.json",revision:"e06afff4f99916b8a618a6da9db8f90f"},{url:"_nuxt/builds/meta/1c530080-6e84-42b1-a02e-8ce6f11a2e14.json",revision:null},{url:"manifest.webmanifest",revision:"eb0f371d3ed09cae8d6e629f804f6ebb"}],{}),n.cleanupOutdatedCaches(),n.registerRoute(new n.NavigationRoute(n.createHandlerBoundToURL("/")))}));
