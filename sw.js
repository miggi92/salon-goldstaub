if(!self.define){let n,l={};const u=(u,i)=>(u=new URL(u+".js",i).href,l[u]||new Promise((l=>{if("document"in self){const n=document.createElement("script");n.src=u,n.onload=l,document.head.appendChild(n)}else n=u,importScripts(u),l()})).then((()=>{let n=l[u];if(!n)throw new Error(`Module ${u} didn’t register its module`);return n})));self.define=(i,r)=>{const s=n||("document"in self?document.currentScript.src:"")||location.href;if(l[s])return;let e={};const o=n=>u(n,s),v={module:{uri:s},exports:e,require:o};l[s]=Promise.all(i.map((n=>v[n]||o(n)))).then((n=>(r(...n),e)))}}define(["./workbox-3e8df8c8"],(function(n){"use strict";self.skipWaiting(),n.clientsClaim(),n.precacheAndRoute([{url:"_ipx/_/logo.svg",revision:"e7303f330514789c534577d1414e3c20"},{url:"_nuxt/56DxRpDo.js",revision:null},{url:"_nuxt/7D_vMHfE.js",revision:null},{url:"_nuxt/about.550L-IkL.css",revision:null},{url:"_nuxt/B-HLhcTU.js",revision:null},{url:"_nuxt/B59F1XYD.js",revision:null},{url:"_nuxt/B5iTExpI.js",revision:null},{url:"_nuxt/B6VGAM-s.js",revision:null},{url:"_nuxt/B7GofNYx.js",revision:null},{url:"_nuxt/B9K5rw8f.js",revision:null},{url:"_nuxt/Ba_AukPH.js",revision:null},{url:"_nuxt/BA-ZbfGM.js",revision:null},{url:"_nuxt/Bc1hIpLD.js",revision:null},{url:"_nuxt/BDOOF81C.js",revision:null},{url:"_nuxt/BDVer6ey.js",revision:null},{url:"_nuxt/BFNqVKZx.js",revision:null},{url:"_nuxt/BIrwVSJD.js",revision:null},{url:"_nuxt/BkCMxTc2.js",revision:null},{url:"_nuxt/BlRhkrN0.js",revision:null},{url:"_nuxt/BlXB4UXF.js",revision:null},{url:"_nuxt/BMVxiIhl.js",revision:null},{url:"_nuxt/BrVugYUP.js",revision:null},{url:"_nuxt/BSb23L9O.js",revision:null},{url:"_nuxt/BsSTl_Ry.js",revision:null},{url:"_nuxt/BvBQ-II5.js",revision:null},{url:"_nuxt/C-v3KzvZ.js",revision:null},{url:"_nuxt/C1615aQ9.js",revision:null},{url:"_nuxt/C4Ur9krN.js",revision:null},{url:"_nuxt/C5JQKRZN.js",revision:null},{url:"_nuxt/C6b4xO2G.js",revision:null},{url:"_nuxt/C7tvpKdC.js",revision:null},{url:"_nuxt/caaCS_F-.js",revision:null},{url:"_nuxt/CAgOc0-C.js",revision:null},{url:"_nuxt/Cbmktx5a.js",revision:null},{url:"_nuxt/CD-yHfc4.js",revision:null},{url:"_nuxt/CDbgJwmI.js",revision:null},{url:"_nuxt/Cdq89b0G.js",revision:null},{url:"_nuxt/Chf3mgbI.js",revision:null},{url:"_nuxt/CjwX65EG.js",revision:null},{url:"_nuxt/CNtGtSDw.js",revision:null},{url:"_nuxt/CP7epz1Q.js",revision:null},{url:"_nuxt/CQkHzHWq.js",revision:null},{url:"_nuxt/CS2IbsNm.js",revision:null},{url:"_nuxt/CTjDMxrK.js",revision:null},{url:"_nuxt/Ctz9P11C.js",revision:null},{url:"_nuxt/Cvs46pxQ.js",revision:null},{url:"_nuxt/CvZr5GRf.js",revision:null},{url:"_nuxt/CwugpHvl.js",revision:null},{url:"_nuxt/CxhpCHoJ.js",revision:null},{url:"_nuxt/CxYJgpPD.js",revision:null},{url:"_nuxt/CywRIsAI.js",revision:null},{url:"_nuxt/CZCmWLrV.js",revision:null},{url:"_nuxt/D_c5eA_c.js",revision:null},{url:"_nuxt/D_y2ROM1.js",revision:null},{url:"_nuxt/D2fmDuUa.js",revision:null},{url:"_nuxt/D5UNq1kq.js",revision:null},{url:"_nuxt/D7kzVw1p.js",revision:null},{url:"_nuxt/D7QiLq8A.js",revision:null},{url:"_nuxt/D8lMkX-W.js",revision:null},{url:"_nuxt/DadGccsP.js",revision:null},{url:"_nuxt/DC_REmD2.js",revision:null},{url:"_nuxt/DC6cA1C4.js",revision:null},{url:"_nuxt/DephHg7N.js",revision:null},{url:"_nuxt/DgUixTea.js",revision:null},{url:"_nuxt/DHJbnOxq.js",revision:null},{url:"_nuxt/DHsTRrAn.js",revision:null},{url:"_nuxt/Dj8lgNIS.js",revision:null},{url:"_nuxt/DJPgRnRV.js",revision:null},{url:"_nuxt/Dk5AIPWk.js",revision:null},{url:"_nuxt/DlAUqK2U.js",revision:null},{url:"_nuxt/DLivpJ2o.js",revision:null},{url:"_nuxt/DNtN89Mb.js",revision:null},{url:"_nuxt/DpVqtHPK.js",revision:null},{url:"_nuxt/DtAc0BiE.js",revision:null},{url:"_nuxt/DTj71ycv.js",revision:null},{url:"_nuxt/DupGhhID.js",revision:null},{url:"_nuxt/DUthU11V.js",revision:null},{url:"_nuxt/DuXI-yG2.js",revision:null},{url:"_nuxt/Dy6nsgHk.js",revision:null},{url:"_nuxt/DYRiuMfp.js",revision:null},{url:"_nuxt/DzyNQPuH.js",revision:null},{url:"_nuxt/eObsZx5b.js",revision:null},{url:"_nuxt/error-404.Bn3MLqvo.css",revision:null},{url:"_nuxt/error-500.DvdIulrD.css",revision:null},{url:"_nuxt/iwhC4jfI.js",revision:null},{url:"_nuxt/leInqLjV.js",revision:null},{url:"_nuxt/mWu8_sFz.js",revision:null},{url:"_nuxt/NMxShRFR.js",revision:null},{url:"_nuxt/oiiHuvL5.js",revision:null},{url:"_nuxt/OWF_VB9u.js",revision:null},{url:"_nuxt/pR1haHzh.js",revision:null},{url:"_nuxt/PrLYp0Bf.js",revision:null},{url:"_nuxt/ProseCode.B_fgAJq0.css",revision:null},{url:"_nuxt/q46pcLhk.js",revision:null},{url:"_nuxt/Q4xCEG1E.js",revision:null},{url:"_nuxt/TLjyS5l5.js",revision:null},{url:"_nuxt/useStudio.CCLDAoj_.css",revision:null},{url:"_nuxt/xxKWSCC-.js",revision:null},{url:"_nuxt/YyRmccNv.js",revision:null},{url:"_nuxt/ZHOnjVkn.js",revision:null},{url:"200",revision:"6697610300849d5b542e5214af1fc434"},{url:"404",revision:"2129eb6999b1457ed934484f7709d2d9"},{url:"about",revision:"146d0542904a9d3b343f432583b6d275"},{url:"apple-touch-icon-180x180.png",revision:"7b602b006a52386b9b440cf4df98c211"},{url:"arrival",revision:"aed1ec7cdee7866f3ca692bb4f117975"},{url:"booking",revision:"f71e6b23ad057234db9928ff96f3f9b9"},{url:"contact",revision:"712877951d5cc21f6566baa60dd09e66"},{url:"favicon.ico",revision:"58dbec51a97499eb4f2d0eaa6dfdee37"},{url:"icons/mdi_calendar_clock.png",revision:"0d241cbf26f054e43382da57e632cbd2"},{url:"icons/mdi_feed.png",revision:"b95a17e603f652bad75445e0dcd3424e"},{url:"icons/mdi_instagram.png",revision:"db46746d03032466a03b969458871adc"},{url:"imprint",revision:"f6a7453a3014939250887cb61f0cd52d"},{url:"/",revision:"dd4c6613a085f720fc74e95a8ac98f37"},{url:"logo.svg",revision:"00c7b59cd882cb660aad099d1a3a2aa0"},{url:"maskable-icon-512x512.png",revision:"37e6a2e95361ec0043872ea5eceeb1d6"},{url:"news",revision:"aaafd14fa3e5fb7ba756f0593ddb6f11"},{url:"news/newwebsite",revision:"ebf26cc9c81b0e0628dee6cb3e9c7aad"},{url:"privacy",revision:"b03102dc87aab422979c373595a1c84b"},{url:"pwa-192x192.png",revision:"079009d0280d03d60281e60df7c5662b"},{url:"pwa-512x512.png",revision:"0e97a85e6e56fbe890165784661b66c6"},{url:"pwa-64x64.png",revision:"e194128bd6b0cf9f57b342f6c0c8e117"},{url:"services",revision:"04a6073ab02d4869ae618baded08e191"},{url:"_payload.json",revision:"7888aab8e520c97f95846fea9858ab2f"},{url:"about/_payload.json",revision:"ebdf82ac0f9f1b991946ca5bfa9744bb"},{url:"arrival/_payload.json",revision:"dac9b74c73e3cf97a7e669336d38955b"},{url:"contact/_payload.json",revision:"e412ad60a4cc388f1b0b1c56fcde3e27"},{url:"imprint/_payload.json",revision:"52ee111e82185dcd2012eec6608f923b"},{url:"news/_payload.json",revision:"550ee97a60de14b1625501472af84ff4"},{url:"news/newwebsite/_payload.json",revision:"f07a1ed54c3265a08b375509e801cf53"},{url:"privacy/_payload.json",revision:"88ce65f629bfa4e2a441e68a41598ee4"},{url:"services/_payload.json",revision:"bb8a503910a09c6256e962d231e93659"},{url:"_nuxt/builds/latest.json",revision:"20226817c10a491cff54cd7ed2bf83c7"},{url:"_nuxt/builds/meta/8af7abba-6efe-46a8-8fb8-d080a7d39304.json",revision:null},{url:"manifest.webmanifest",revision:"f38b4a931ae7eaa9880e40fae7bea010"}],{}),n.cleanupOutdatedCaches(),n.registerRoute(new n.NavigationRoute(n.createHandlerBoundToURL("/")))}));
