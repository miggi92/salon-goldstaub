if(!self.define){let n,l={};const u=(u,i)=>(u=new URL(u+".js",i).href,l[u]||new Promise((l=>{if("document"in self){const n=document.createElement("script");n.src=u,n.onload=l,document.head.appendChild(n)}else n=u,importScripts(u),l()})).then((()=>{let n=l[u];if(!n)throw new Error(`Module ${u} didn’t register its module`);return n})));self.define=(i,r)=>{const s=n||("document"in self?document.currentScript.src:"")||location.href;if(l[s])return;let e={};const o=n=>u(n,s),t={module:{uri:s},exports:e,require:o};l[s]=Promise.all(i.map((n=>t[n]||o(n)))).then((n=>(r(...n),e)))}}define(["./workbox-3e8df8c8"],(function(n){"use strict";self.skipWaiting(),n.clientsClaim(),n.precacheAndRoute([{url:"_ipx/_/logo.svg",revision:"e7303f330514789c534577d1414e3c20"},{url:"_nuxt/0p-sbF0_.js",revision:null},{url:"_nuxt/1R-CCJ_b.js",revision:null},{url:"_nuxt/4HwdMjaC.js",revision:null},{url:"_nuxt/739-whBC.js",revision:null},{url:"_nuxt/91g682ce.js",revision:null},{url:"_nuxt/about.d-E6nXXa.css",revision:null},{url:"_nuxt/Awnut4gL.js",revision:null},{url:"_nuxt/B75Q_HNc.js",revision:null},{url:"_nuxt/B9K5rw8f.js",revision:null},{url:"_nuxt/BAoMEaBu.js",revision:null},{url:"_nuxt/Basmh7ZY.js",revision:null},{url:"_nuxt/BB78KMx1.js",revision:null},{url:"_nuxt/BCaEn6N-.js",revision:null},{url:"_nuxt/BcmEJuPX.js",revision:null},{url:"_nuxt/BdEn1Rsu.js",revision:null},{url:"_nuxt/BeJrjZRc.js",revision:null},{url:"_nuxt/BI75RDNC.js",revision:null},{url:"_nuxt/BJWke4Ri.js",revision:null},{url:"_nuxt/Bl391aPY.js",revision:null},{url:"_nuxt/Boofb9D3.js",revision:null},{url:"_nuxt/Bqn7syjr.js",revision:null},{url:"_nuxt/BQVt1gCL.js",revision:null},{url:"_nuxt/BsaF0GGv.js",revision:null},{url:"_nuxt/BSb23L9O.js",revision:null},{url:"_nuxt/BtA34Bjq.js",revision:null},{url:"_nuxt/BTtsT6m3.js",revision:null},{url:"_nuxt/BumvsHME.js",revision:null},{url:"_nuxt/Bus8k5t4.js",revision:null},{url:"_nuxt/BweGuacj.js",revision:null},{url:"_nuxt/BXxQOAhu.js",revision:null},{url:"_nuxt/ByHybwso.js",revision:null},{url:"_nuxt/BYY_Af3W.js",revision:null},{url:"_nuxt/C-v3KzvZ.js",revision:null},{url:"_nuxt/C2MvQTWd.js",revision:null},{url:"_nuxt/C3-RZRti.js",revision:null},{url:"_nuxt/C3E-73fs.js",revision:null},{url:"_nuxt/C8zpOCUL.js",revision:null},{url:"_nuxt/C9SwaAs8.js",revision:null},{url:"_nuxt/CB-fiLPj.js",revision:null},{url:"_nuxt/CcRdlTxc.js",revision:null},{url:"_nuxt/CCSjzg9H.js",revision:null},{url:"_nuxt/CFU-Iezp.js",revision:null},{url:"_nuxt/CgyeQk46.js",revision:null},{url:"_nuxt/Cj-iiarY.js",revision:null},{url:"_nuxt/CLpsA6C1.js",revision:null},{url:"_nuxt/CNSp7-X5.js",revision:null},{url:"_nuxt/CQFxy-tM.js",revision:null},{url:"_nuxt/CSl-Tl_H.js",revision:null},{url:"_nuxt/CURKRIaY.js",revision:null},{url:"_nuxt/CwPXm9Jh.js",revision:null},{url:"_nuxt/CX_67-J1.js",revision:null},{url:"_nuxt/CxYJgpPD.js",revision:null},{url:"_nuxt/CYwIwh1Z.js",revision:null},{url:"_nuxt/D_22i5HJ.js",revision:null},{url:"_nuxt/D4hXCPlr.js",revision:null},{url:"_nuxt/D4q9-ZQv.js",revision:null},{url:"_nuxt/D5Ekv3NV.js",revision:null},{url:"_nuxt/D6c-NIVQ.js",revision:null},{url:"_nuxt/d7VTpn_T.js",revision:null},{url:"_nuxt/D9f9T416.js",revision:null},{url:"_nuxt/DBzeILRm.js",revision:null},{url:"_nuxt/DCF0I0_m.js",revision:null},{url:"_nuxt/Dd73nQ2S.js",revision:null},{url:"_nuxt/ddgWS3BU.js",revision:null},{url:"_nuxt/DDNetwnN.js",revision:null},{url:"_nuxt/DEpCbDep.js",revision:null},{url:"_nuxt/DF-at4-z.js",revision:null},{url:"_nuxt/DFbC_bKj.js",revision:null},{url:"_nuxt/DFxA3iBx.js",revision:null},{url:"_nuxt/DgA7ze2H.js",revision:null},{url:"_nuxt/DHJpUs8D.js",revision:null},{url:"_nuxt/DIAtjSMF.js",revision:null},{url:"_nuxt/DivdZKSI.js",revision:null},{url:"_nuxt/DjxEXwme.js",revision:null},{url:"_nuxt/DkL3TieP.js",revision:null},{url:"_nuxt/DlAUqK2U.js",revision:null},{url:"_nuxt/DOu_qPxD.js",revision:null},{url:"_nuxt/DoWHSwl5.js",revision:null},{url:"_nuxt/DQCx4RXp.js",revision:null},{url:"_nuxt/DQQZ-YOI.js",revision:null},{url:"_nuxt/DSWftk7-.js",revision:null},{url:"_nuxt/DUfxDDUZ.js",revision:null},{url:"_nuxt/dVJdJ15Q.js",revision:null},{url:"_nuxt/DvTXGLxm.js",revision:null},{url:"_nuxt/Dxhia_FQ.js",revision:null},{url:"_nuxt/EEkQkKRr.js",revision:null},{url:"_nuxt/error-404.C3Dg1Ro7.css",revision:null},{url:"_nuxt/error-500.C00r1BBY.css",revision:null},{url:"_nuxt/GjYrEb4G.js",revision:null},{url:"_nuxt/jkUNGKIA.js",revision:null},{url:"_nuxt/mwd2h2D4.js",revision:null},{url:"_nuxt/nvICGv0M.js",revision:null},{url:"_nuxt/pMuXIXgv.js",revision:null},{url:"_nuxt/ProseCode.B_fgAJq0.css",revision:null},{url:"_nuxt/QxNVL1fE.js",revision:null},{url:"_nuxt/RqoUCiIh.js",revision:null},{url:"_nuxt/sv0bUCSD.js",revision:null},{url:"_nuxt/useStudio.BVdPl2zk.css",revision:null},{url:"_nuxt/Xj_RkFmr.js",revision:null},{url:"200",revision:"6ec10672a093869088f2813333928706"},{url:"404",revision:"409d3b46cc8bc791006f4bd2bbd58ab2"},{url:"about",revision:"4d196a540097da7d1b63ea4cc41bcaf3"},{url:"apple-touch-icon-180x180.png",revision:"7b602b006a52386b9b440cf4df98c211"},{url:"arrival",revision:"a93dd9b486ce7276149dd7c63241a18c"},{url:"booking",revision:"f71e6b23ad057234db9928ff96f3f9b9"},{url:"contact",revision:"395c1f7c4b274119a4a6f3239d1a33b4"},{url:"favicon.ico",revision:"58dbec51a97499eb4f2d0eaa6dfdee37"},{url:"icons/mdi_calendar_clock.png",revision:"0d241cbf26f054e43382da57e632cbd2"},{url:"icons/mdi_feed.png",revision:"b95a17e603f652bad75445e0dcd3424e"},{url:"icons/mdi_instagram.png",revision:"db46746d03032466a03b969458871adc"},{url:"imprint",revision:"f6434e55d65bd933256587163fd94275"},{url:"/",revision:"3351e5b2ba175439ac4abe3031e7e308"},{url:"logo.svg",revision:"00c7b59cd882cb660aad099d1a3a2aa0"},{url:"maskable-icon-512x512.png",revision:"37e6a2e95361ec0043872ea5eceeb1d6"},{url:"news",revision:"e598ca05d70da1cc4875667fd9598f8e"},{url:"news/newwebsite",revision:"31874ad6d01540aa803ad273e99146db"},{url:"privacy",revision:"12127a2c813dc4e2a51b8b221a08253f"},{url:"pwa-192x192.png",revision:"079009d0280d03d60281e60df7c5662b"},{url:"pwa-512x512.png",revision:"0e97a85e6e56fbe890165784661b66c6"},{url:"pwa-64x64.png",revision:"e194128bd6b0cf9f57b342f6c0c8e117"},{url:"services",revision:"1255df036a038e79eda67b1f58265029"},{url:"_payload.json",revision:"fd2acbc799433d5aeaad63c717d01f4a"},{url:"about/_payload.json",revision:"76394f0b90313f54a04b97bfab320aa6"},{url:"arrival/_payload.json",revision:"eee66392e59e9fa9b2ed2cdfb43c52ff"},{url:"contact/_payload.json",revision:"dd341bd5c14739e05f2cf7ebccf7bf1c"},{url:"imprint/_payload.json",revision:"b06961b13088bc70d180c0b5606aceb9"},{url:"news/_payload.json",revision:"0cfa6fdbd69721592db1ce71af30de7c"},{url:"news/newwebsite/_payload.json",revision:"f7c4e5a058872e9b955f6c0343ec6058"},{url:"privacy/_payload.json",revision:"bef9b4895631de7a4385785eef41e5e5"},{url:"services/_payload.json",revision:"976e0b2d86872efd72b42dff1d939a84"},{url:"_nuxt/builds/latest.json",revision:"0ee0d730cafe31d14da4c7c822948a80"},{url:"_nuxt/builds/meta/8364ed32-54c6-45c3-8303-a51278341c8b.json",revision:null},{url:"manifest.webmanifest",revision:"f38b4a931ae7eaa9880e40fae7bea010"}],{}),n.cleanupOutdatedCaches(),n.registerRoute(new n.NavigationRoute(n.createHandlerBoundToURL("/")))}));
