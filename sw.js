if(!self.define){let n,l={};const u=(u,i)=>(u=new URL(u+".js",i).href,l[u]||new Promise((l=>{if("document"in self){const n=document.createElement("script");n.src=u,n.onload=l,document.head.appendChild(n)}else n=u,importScripts(u),l()})).then((()=>{let n=l[u];if(!n)throw new Error(`Module ${u} didn’t register its module`);return n})));self.define=(i,r)=>{const s=n||("document"in self?document.currentScript.src:"")||location.href;if(l[s])return;let e={};const o=n=>u(n,s),t={module:{uri:s},exports:e,require:o};l[s]=Promise.all(i.map((n=>t[n]||o(n)))).then((n=>(r(...n),e)))}}define(["./workbox-3e8df8c8"],(function(n){"use strict";self.skipWaiting(),n.clientsClaim(),n.precacheAndRoute([{url:"_ipx/_/logo.svg",revision:"e7303f330514789c534577d1414e3c20"},{url:"_nuxt/0-Tg52ER.js",revision:null},{url:"_nuxt/0LwwD5bL.js",revision:null},{url:"_nuxt/76z0daXt.js",revision:null},{url:"_nuxt/8oxsMvJS.js",revision:null},{url:"_nuxt/9Wo41zon.js",revision:null},{url:"_nuxt/a-C0YmuI.js",revision:null},{url:"_nuxt/about.CHpH9MmK.css",revision:null},{url:"_nuxt/B_FzhZHc.js",revision:null},{url:"_nuxt/B-Mnsp28.js",revision:null},{url:"_nuxt/B0CA4ES-.js",revision:null},{url:"_nuxt/B8PHetGO.js",revision:null},{url:"_nuxt/B9eIud4R.js",revision:null},{url:"_nuxt/B9K5rw8f.js",revision:null},{url:"_nuxt/BD0c3BGY.js",revision:null},{url:"_nuxt/BdQAK8Gc.js",revision:null},{url:"_nuxt/BF-_fcOU.js",revision:null},{url:"_nuxt/BHGpwY_i.js",revision:null},{url:"_nuxt/BHlMbTcu.js",revision:null},{url:"_nuxt/Bhui4Upq.js",revision:null},{url:"_nuxt/BJLGZYbN.js",revision:null},{url:"_nuxt/BJm6KzHy.js",revision:null},{url:"_nuxt/BNgbW_pb.js",revision:null},{url:"_nuxt/BQg5gp6s.js",revision:null},{url:"_nuxt/BSb23L9O.js",revision:null},{url:"_nuxt/BtA34Bjq.js",revision:null},{url:"_nuxt/BvujHdck.js",revision:null},{url:"_nuxt/BwwcgGIv.js",revision:null},{url:"_nuxt/C-v3KzvZ.js",revision:null},{url:"_nuxt/C1eTqZnC.js",revision:null},{url:"_nuxt/C1FQSP1g.js",revision:null},{url:"_nuxt/C34B11kt.js",revision:null},{url:"_nuxt/Cb47G3CX.js",revision:null},{url:"_nuxt/CbKiBgla.js",revision:null},{url:"_nuxt/CCI8x8fA.js",revision:null},{url:"_nuxt/CGmLIXOE.js",revision:null},{url:"_nuxt/CizP66Zy.js",revision:null},{url:"_nuxt/CKHGsjft.js",revision:null},{url:"_nuxt/Cl4Fm8hV.js",revision:null},{url:"_nuxt/Cl8OTKUC.js",revision:null},{url:"_nuxt/CLoMnxwL.js",revision:null},{url:"_nuxt/CmAFFZZB.js",revision:null},{url:"_nuxt/CMrMCEGc.js",revision:null},{url:"_nuxt/CnuMs7cK.js",revision:null},{url:"_nuxt/CoaPuNIb.js",revision:null},{url:"_nuxt/CONflDcN.js",revision:null},{url:"_nuxt/Cp5MwZyk.js",revision:null},{url:"_nuxt/Cqt6rAoF.js",revision:null},{url:"_nuxt/CRq-UUwx.js",revision:null},{url:"_nuxt/CSb4qEBk.js",revision:null},{url:"_nuxt/CSDjnkSl.js",revision:null},{url:"_nuxt/CurWWGJK.js",revision:null},{url:"_nuxt/CXaazhNY.js",revision:null},{url:"_nuxt/CxYJgpPD.js",revision:null},{url:"_nuxt/CZ7dZsdl.js",revision:null},{url:"_nuxt/D_4FmtuE.js",revision:null},{url:"_nuxt/D4wCVQb8.js",revision:null},{url:"_nuxt/D63rkAVX.js",revision:null},{url:"_nuxt/D74wr3bB.js",revision:null},{url:"_nuxt/D8yjugWu.js",revision:null},{url:"_nuxt/DadsxNob.js",revision:null},{url:"_nuxt/DD5LmtFX.js",revision:null},{url:"_nuxt/DDMAuwzy.js",revision:null},{url:"_nuxt/DExZ0_-Y.js",revision:null},{url:"_nuxt/DiRPjPpw.js",revision:null},{url:"_nuxt/DiycnpQU.js",revision:null},{url:"_nuxt/DlAUqK2U.js",revision:null},{url:"_nuxt/DmpDh3M6.js",revision:null},{url:"_nuxt/DnC60ZJ_.js",revision:null},{url:"_nuxt/DnpMNfu4.js",revision:null},{url:"_nuxt/DpsT0-jh.js",revision:null},{url:"_nuxt/DQ1VFvxc.js",revision:null},{url:"_nuxt/DRGRTA-H.js",revision:null},{url:"_nuxt/DRkR3ivw.js",revision:null},{url:"_nuxt/DsrdnLWp.js",revision:null},{url:"_nuxt/DSrhN7jG.js",revision:null},{url:"_nuxt/DTzNGYB_.js",revision:null},{url:"_nuxt/DxVHxIIY.js",revision:null},{url:"_nuxt/DzAoVOYm.js",revision:null},{url:"_nuxt/DzXWQ2cw.js",revision:null},{url:"_nuxt/error-404.jxooAKM3.css",revision:null},{url:"_nuxt/error-500.Cu6N7BHB.css",revision:null},{url:"_nuxt/Fi57cVlx.js",revision:null},{url:"_nuxt/FQoo8jcV.js",revision:null},{url:"_nuxt/hBxGaNUI.js",revision:null},{url:"_nuxt/kHMjp1tz.js",revision:null},{url:"_nuxt/LnNBdXaI.js",revision:null},{url:"_nuxt/neDTR76E.js",revision:null},{url:"_nuxt/pLuBb5nb.js",revision:null},{url:"_nuxt/ProseCode.B_fgAJq0.css",revision:null},{url:"_nuxt/qIaroPuD.js",revision:null},{url:"_nuxt/qnqyg_eR.js",revision:null},{url:"_nuxt/rhki9Olz.js",revision:null},{url:"_nuxt/RqoUCiIh.js",revision:null},{url:"_nuxt/RThC2ApH.js",revision:null},{url:"_nuxt/s7pzv8zA.js",revision:null},{url:"_nuxt/txS0-j8R.js",revision:null},{url:"_nuxt/useStudio.BVdPl2zk.css",revision:null},{url:"_nuxt/wWrAp4dx.js",revision:null},{url:"_nuxt/ZC-_lwZz.js",revision:null},{url:"200",revision:"557eaefca849cdaf94350388b10460dc"},{url:"404",revision:"cc5bf13f0d71945a1a5ff76a311d6b2c"},{url:"about",revision:"f38281617058fb32f92b66f1168cd4a3"},{url:"apple-touch-icon-180x180.png",revision:"7b602b006a52386b9b440cf4df98c211"},{url:"arrival",revision:"23332cc5a2ead9c42a0d84b42fe93c1b"},{url:"booking",revision:"f71e6b23ad057234db9928ff96f3f9b9"},{url:"contact",revision:"335a162f2be41cb910e06b23feeee9a3"},{url:"favicon.ico",revision:"58dbec51a97499eb4f2d0eaa6dfdee37"},{url:"icons/mdi_calendar_clock.png",revision:"0d241cbf26f054e43382da57e632cbd2"},{url:"icons/mdi_feed.png",revision:"b95a17e603f652bad75445e0dcd3424e"},{url:"icons/mdi_instagram.png",revision:"db46746d03032466a03b969458871adc"},{url:"imprint",revision:"8243fc851f98a01a2f01386262380a66"},{url:"/",revision:"21f821207abd15965b29847faf2311e1"},{url:"logo.svg",revision:"00c7b59cd882cb660aad099d1a3a2aa0"},{url:"maskable-icon-512x512.png",revision:"37e6a2e95361ec0043872ea5eceeb1d6"},{url:"news",revision:"3ef89caef251f9072234a827288ed4e6"},{url:"news/newwebsite",revision:"e5e63d4931c1100075fbc2ebe609fdff"},{url:"privacy",revision:"308a270c4e388470b64fec4e2123b3b6"},{url:"pwa-192x192.png",revision:"079009d0280d03d60281e60df7c5662b"},{url:"pwa-512x512.png",revision:"0e97a85e6e56fbe890165784661b66c6"},{url:"pwa-64x64.png",revision:"e194128bd6b0cf9f57b342f6c0c8e117"},{url:"services",revision:"b6d9019360fcffa67ac807a420a7eb48"},{url:"_payload.json",revision:"8166cbf024434ff5713fffd5115a9566"},{url:"about/_payload.json",revision:"e4b609d065b4e108fd6187e8403b99f0"},{url:"arrival/_payload.json",revision:"ea89828ab1998da2d9a03c6faa688baf"},{url:"contact/_payload.json",revision:"1e5e45a7993340dcea964b82e126bf1f"},{url:"imprint/_payload.json",revision:"31c6a7b2003b0141df1f5b2a1762918c"},{url:"news/_payload.json",revision:"01eb13a07c6bedbc0f63d8bab41b0865"},{url:"news/newwebsite/_payload.json",revision:"e691a606618eda7b213fd9f9d06cb7de"},{url:"privacy/_payload.json",revision:"d1d4b0d8db725f7b6d3c3e26f9332b4f"},{url:"services/_payload.json",revision:"8f93dd4ad818fa7be8aea32e69e416c3"},{url:"_nuxt/builds/latest.json",revision:"d4ce925097ff46d6d3d16f1f7e90127c"},{url:"_nuxt/builds/meta/d8f97434-7b66-4e7d-98fc-946c017fc75b.json",revision:null},{url:"manifest.webmanifest",revision:"f38b4a931ae7eaa9880e40fae7bea010"}],{}),n.cleanupOutdatedCaches(),n.registerRoute(new n.NavigationRoute(n.createHandlerBoundToURL("/")))}));
