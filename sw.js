if(!self.define){let n,l={};const u=(u,i)=>(u=new URL(u+".js",i).href,l[u]||new Promise((l=>{if("document"in self){const n=document.createElement("script");n.src=u,n.onload=l,document.head.appendChild(n)}else n=u,importScripts(u),l()})).then((()=>{let n=l[u];if(!n)throw new Error(`Module ${u} didn’t register its module`);return n})));self.define=(i,r)=>{const s=n||("document"in self?document.currentScript.src:"")||location.href;if(l[s])return;let e={};const o=n=>u(n,s),v={module:{uri:s},exports:e,require:o};l[s]=Promise.all(i.map((n=>v[n]||o(n)))).then((n=>(r(...n),e)))}}define(["./workbox-e1498109"],(function(n){"use strict";self.skipWaiting(),n.clientsClaim(),n.precacheAndRoute([{url:"_ipx/_/logo.svg",revision:"e7303f330514789c534577d1414e3c20"},{url:"_nuxt/0O95Gly_.js",revision:null},{url:"_nuxt/2naXkdRf.js",revision:null},{url:"_nuxt/3lT0bAZd.js",revision:null},{url:"_nuxt/50IHKZLh.js",revision:null},{url:"_nuxt/638qhulG.js",revision:null},{url:"_nuxt/8KAYn5F1.js",revision:null},{url:"_nuxt/about.E2co_h6A.css",revision:null},{url:"_nuxt/B-ibXgqs.js",revision:null},{url:"_nuxt/B1VEsT-j.js",revision:null},{url:"_nuxt/B2IRkZn8.js",revision:null},{url:"_nuxt/Baarmtd4.js",revision:null},{url:"_nuxt/BBCIbszx.js",revision:null},{url:"_nuxt/BGfCoL0L.js",revision:null},{url:"_nuxt/BhAiw1wJ.js",revision:null},{url:"_nuxt/BkF6JuFm.js",revision:null},{url:"_nuxt/BLyMVpuk.js",revision:null},{url:"_nuxt/BNN6lcAE.js",revision:null},{url:"_nuxt/Bnw-eCLv.js",revision:null},{url:"_nuxt/BoULRQCF.js",revision:null},{url:"_nuxt/BSb23L9O.js",revision:null},{url:"_nuxt/BTi1IetW.js",revision:null},{url:"_nuxt/BU_n09zo.js",revision:null},{url:"_nuxt/Bv-5vDTa.js",revision:null},{url:"_nuxt/ByudH04o.js",revision:null},{url:"_nuxt/C-v3KzvZ.js",revision:null},{url:"_nuxt/C11U1FwZ.js",revision:null},{url:"_nuxt/C4WVXyaO.js",revision:null},{url:"_nuxt/C61g2VMs.js",revision:null},{url:"_nuxt/C93TzNuZ.js",revision:null},{url:"_nuxt/CbijGXb_.js",revision:null},{url:"_nuxt/CbM_j85o.js",revision:null},{url:"_nuxt/CF3NOiUn.js",revision:null},{url:"_nuxt/Cg8PLBq3.js",revision:null},{url:"_nuxt/ChFlEjuo.js",revision:null},{url:"_nuxt/CHk0I_CP.js",revision:null},{url:"_nuxt/CIufaa0U.js",revision:null},{url:"_nuxt/CjjzjQjc.js",revision:null},{url:"_nuxt/CKHgP_V5.js",revision:null},{url:"_nuxt/CpypwzoI.js",revision:null},{url:"_nuxt/CqTmxPIw.js",revision:null},{url:"_nuxt/CSbgtp_2.js",revision:null},{url:"_nuxt/CUiHlDfZ.js",revision:null},{url:"_nuxt/CW7DTfHR.js",revision:null},{url:"_nuxt/CwAM4QlP.js",revision:null},{url:"_nuxt/CWgoboGh.js",revision:null},{url:"_nuxt/D_i6pcUL.js",revision:null},{url:"_nuxt/D-Un29Ty.js",revision:null},{url:"_nuxt/D07FuZq3.js",revision:null},{url:"_nuxt/D0NuGrlL.js",revision:null},{url:"_nuxt/D5gOYdM7.js",revision:null},{url:"_nuxt/D65VwCGV.js",revision:null},{url:"_nuxt/D75NRcLw.js",revision:null},{url:"_nuxt/D8r4rNXl.js",revision:null},{url:"_nuxt/DA11YWi7.js",revision:null},{url:"_nuxt/DBYtoXtb.js",revision:null},{url:"_nuxt/Dc8K8j3B.js",revision:null},{url:"_nuxt/DDe9c0Ub.js",revision:null},{url:"_nuxt/Dhdnxpvc.js",revision:null},{url:"_nuxt/DJqE_Bni.js",revision:null},{url:"_nuxt/DlAUqK2U.js",revision:null},{url:"_nuxt/DLgmcnhd.js",revision:null},{url:"_nuxt/DlP_Lkh_.js",revision:null},{url:"_nuxt/Dnd51l0P.js",revision:null},{url:"_nuxt/DnHSgUDY.js",revision:null},{url:"_nuxt/Do0M-HLG.js",revision:null},{url:"_nuxt/Do9vhxsW.js",revision:null},{url:"_nuxt/DOHuY82D.js",revision:null},{url:"_nuxt/DpTo9Vm5.js",revision:null},{url:"_nuxt/DPzV0S8W.js",revision:null},{url:"_nuxt/DQgFBMah.js",revision:null},{url:"_nuxt/DR5X1lf-.js",revision:null},{url:"_nuxt/DRfkG8uq.js",revision:null},{url:"_nuxt/DYAPF3Ca.js",revision:null},{url:"_nuxt/DZY-DzyC.js",revision:null},{url:"_nuxt/edS-OBns.js",revision:null},{url:"_nuxt/error-404.Cw3wqBdM.css",revision:null},{url:"_nuxt/error-500.Dv4T7DCL.css",revision:null},{url:"_nuxt/eYaJvWdd.js",revision:null},{url:"_nuxt/ezwDUah2.js",revision:null},{url:"_nuxt/F9EpGUIH.js",revision:null},{url:"_nuxt/JYrjmV-l.js",revision:null},{url:"_nuxt/kaCeTMRq.js",revision:null},{url:"_nuxt/kO2CgLgd.js",revision:null},{url:"_nuxt/M3EIuVIn.js",revision:null},{url:"_nuxt/MkFrHKDb.js",revision:null},{url:"_nuxt/mQj5-u8_.js",revision:null},{url:"_nuxt/nKADYFc6.js",revision:null},{url:"_nuxt/P5ZFD37i.js",revision:null},{url:"_nuxt/PNUs6mU_.js",revision:null},{url:"_nuxt/PpyJCM30.js",revision:null},{url:"_nuxt/ProseCode.CchFRBtv.css",revision:null},{url:"_nuxt/PTAucfjI.js",revision:null},{url:"_nuxt/pyy3lqmf.js",revision:null},{url:"_nuxt/useStudio.kY7SC8Od.css",revision:null},{url:"_nuxt/uXBjMpGz.js",revision:null},{url:"_nuxt/whim0c0B.js",revision:null},{url:"_nuxt/yc_0EBpi.js",revision:null},{url:"_nuxt/YSoRgrRT.js",revision:null},{url:"200",revision:"564080ba5f07a6c237adcbfdfdd15516"},{url:"404",revision:"c405b15a44fa24f72886fa2ccc954b3f"},{url:"about",revision:"1c877ee8b3aeee6909ef39d4bb79909b"},{url:"apple-touch-icon-180x180.png",revision:"7b602b006a52386b9b440cf4df98c211"},{url:"arrival",revision:"3cec013edb4755309570d1e71f47f8ef"},{url:"booking",revision:"f71e6b23ad057234db9928ff96f3f9b9"},{url:"contact",revision:"e3c0ec7cd3c2ee76073ef37d3e66c880"},{url:"favicon.ico",revision:"58dbec51a97499eb4f2d0eaa6dfdee37"},{url:"icons/mdi_calendar_clock.png",revision:"0d241cbf26f054e43382da57e632cbd2"},{url:"icons/mdi_feed.png",revision:"b95a17e603f652bad75445e0dcd3424e"},{url:"imprint",revision:"886582e0697d700ac3e2f07b309b2a26"},{url:"/",revision:"35ac79d975b3c61919e4b861f881392c"},{url:"logo.svg",revision:"00c7b59cd882cb660aad099d1a3a2aa0"},{url:"maskable-icon-512x512.png",revision:"37e6a2e95361ec0043872ea5eceeb1d6"},{url:"news",revision:"22db847058dc87a57e9b3fcc51736095"},{url:"news/newwebsite",revision:"5c6a44ad43d15a2a7c1695386817423f"},{url:"privacy",revision:"48210d47764f0f0e3f99e62093c288dd"},{url:"pwa-192x192.png",revision:"079009d0280d03d60281e60df7c5662b"},{url:"pwa-512x512.png",revision:"0e97a85e6e56fbe890165784661b66c6"},{url:"pwa-64x64.png",revision:"e194128bd6b0cf9f57b342f6c0c8e117"},{url:"services",revision:"c383996dfc49c8bf62818f38ef5de38a"},{url:"_payload.json",revision:"a6aac0e91f73c8704addfe4e5d9dd524"},{url:"about/_payload.json",revision:"6bd9299cbeb8a013a855e01edf3a5cb5"},{url:"arrival/_payload.json",revision:"59737133335eed219cd62dff0ec1a131"},{url:"contact/_payload.json",revision:"b412e9c6d3319b337bb1343656467ae7"},{url:"imprint/_payload.json",revision:"2f784a7d250d765e865572cb4a796af7"},{url:"news/_payload.json",revision:"3ba407162aaad4389f7e48d2827f00f5"},{url:"news/newwebsite/_payload.json",revision:"4bd36a414ac97e1027f55ac8e8bf468e"},{url:"privacy/_payload.json",revision:"bff2d53fd46a3442e4558f06b6196c18"},{url:"services/_payload.json",revision:"81a1ff85ccab875a09afdd851f4facd1"},{url:"_nuxt/builds/latest.json",revision:"fc200b8959c9202d9c918734e961d595"},{url:"_nuxt/builds/meta/0d5a9e70-7b2e-410d-904d-edb32cdbf226.json",revision:null},{url:"manifest.webmanifest",revision:"eb0f371d3ed09cae8d6e629f804f6ebb"}],{}),n.cleanupOutdatedCaches(),n.registerRoute(new n.NavigationRoute(n.createHandlerBoundToURL("/")))}));
