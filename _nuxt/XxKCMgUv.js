import{aw as Y,ax as j,ay as B,r as g,az as L,E as V,aA as q,a1 as P,B as D,o as z,as as G}from"./CXqQQef-.js";function M(e){return j()?(B(e),!0):!1}function oe(e){let t=0,n,o;const i=()=>{t-=1,o&&t<=0&&(o.stop(),n=void 0,o=void 0)};return(...r)=>(t+=1,n||(o=Y(!0),n=o.run(()=>e(...r))),M(i),n)}function x(e){return typeof e=="function"?e():V(e)}const W=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const I=Object.prototype.toString,N=e=>I.call(e)==="[object Object]",C=()=>{};function R(e,t){function n(...o){return new Promise((i,r)=>{Promise.resolve(e(()=>t.apply(this,o),{fn:t,thisArg:this,args:o})).then(i).catch(r)})}return n}const U=e=>e();function $(e,t={}){let n,o,i=C;const r=l=>{clearTimeout(l),i(),i=C};return l=>{const u=x(e),s=x(t.maxWait);return n&&r(n),u<=0||s!==void 0&&s<=0?(o&&(r(o),o=null),Promise.resolve(l())):new Promise((a,d)=>{i=t.rejectOnCancel?d:a,s&&!o&&(o=setTimeout(()=>{n&&r(n),o=null,a(l())},s)),n=setTimeout(()=>{o&&r(o),o=null,a(l())},u)})}}function J(...e){let t=0,n,o=!0,i=C,r,c,l,u,s;!q(e[0])&&typeof e[0]=="object"?{delay:c,trailing:l=!0,leading:u=!0,rejectOnCancel:s=!1}=e[0]:[c,l=!0,u=!0,s=!1]=e;const a=()=>{n&&(clearTimeout(n),n=void 0,i(),i=C)};return v=>{const m=x(c),w=Date.now()-t,y=()=>r=v();return a(),m<=0?(t=Date.now(),y()):(w>m&&(u||!o)?(t=Date.now(),y()):l&&(r=new Promise((T,E)=>{i=s?E:T,n=setTimeout(()=>{t=Date.now(),o=!0,T(y()),a()},Math.max(0,m-w))})),!u&&!n&&(n=setTimeout(()=>o=!0,m)),o=!1,r)}}function K(e){let t;function n(){return t||(t=e()),t}return n.reset=async()=>{const o=t;t=void 0,o&&await o},n}function re(e,t=200,n={}){return R($(t,n),e)}function Q(e,t,n={}){const{eventFilter:o=U,...i}=n;return P(e,R(o,t),i)}function Z(e,t,n={}){const{immediate:o=!0}=n,i=g(!1);let r=null;function c(){r&&(clearTimeout(r),r=null)}function l(){i.value=!1,c()}function u(...s){c(),i.value=!0,r=setTimeout(()=>{i.value=!1,r=null,e(...s)},x(t))}return o&&(i.value=!0,W&&u()),M(l),{isPending:L(i),start:u,stop:l}}function ie(e,t,n={}){const{throttle:o=0,trailing:i=!0,leading:r=!0,...c}=n;return Q(e,t,{...c,eventFilter:J(o,i,r)})}function k(e){var t;const n=x(e);return(t=n==null?void 0:n.$el)!=null?t:n}const F=W?window:void 0,H=W?window.navigator:void 0;function b(...e){let t,n,o,i;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,o,i]=e,t=F):[t,n,o,i]=e,!t)return C;Array.isArray(n)||(n=[n]),Array.isArray(o)||(o=[o]);const r=[],c=()=>{r.forEach(a=>a()),r.length=0},l=(a,d,v,m)=>(a.addEventListener(d,v,m),()=>a.removeEventListener(d,v,m)),u=P(()=>[k(t),x(i)],([a,d])=>{if(c(),!a)return;const v=N(d)?{...d}:d;r.push(...n.flatMap(m=>o.map(w=>l(a,m,w,v))))},{immediate:!0,flush:"post"}),s=()=>{u(),c()};return M(s),s}function ue(e={}){var t;const{window:n=F,deep:o=!0}=e,i=(t=e.document)!=null?t:n==null?void 0:n.document,r=()=>{var u;let s=i==null?void 0:i.activeElement;if(o)for(;s!=null&&s.shadowRoot;)s=(u=s==null?void 0:s.shadowRoot)==null?void 0:u.activeElement;return s},c=g(),l=()=>{c.value=r()};return n&&(b(n,"blur",u=>{u.relatedTarget===null&&l()},!0),b(n,"focus",l,!0)),l(),c}function ee(){const e=g(!1),t=G();return t&&z(()=>{e.value=!0},t),e}function X(e){const t=ee();return D(()=>(t.value,!!e()))}function O(e,t={}){const{controls:n=!1,navigator:o=H}=t,i=X(()=>o&&"permissions"in o);let r;const c=typeof e=="string"?{name:e}:e,l=g(),u=()=>{r&&(l.value=r.state)},s=K(async()=>{if(i.value){if(!r)try{r=await o.permissions.query(c),b(r,"change",u),u()}catch{l.value="prompt"}return r}});return s(),n?{state:l,isSupported:i,query:s}:l}function se(e={}){const{navigator:t=H,read:n=!1,source:o,copiedDuring:i=1500,legacy:r=!1}=e,c=X(()=>t&&"clipboard"in t),l=O("clipboard-read"),u=O("clipboard-write"),s=D(()=>c.value||r),a=g(""),d=g(!1),v=Z(()=>d.value=!1,i);function m(){c.value&&E(l.value)?t.clipboard.readText().then(p=>{a.value=p}):a.value=T()}s.value&&n&&b(["copy","cut"],m);async function w(p=x(o)){s.value&&p!=null&&(c.value&&E(u.value)?await t.clipboard.writeText(p):y(p),a.value=p,d.value=!0,v.start())}function y(p){const h=document.createElement("textarea");h.value=p??"",h.style.position="absolute",h.style.opacity="0",document.body.appendChild(h),h.select(),document.execCommand("copy"),h.remove()}function T(){var p,h,A;return(A=(h=(p=document==null?void 0:document.getSelection)==null?void 0:p.call(document))==null?void 0:h.toString())!=null?A:""}function E(p){return p==="granted"||p==="prompt"}return{isSupported:s,text:a,copied:d,copy:w}}const _=new Map;function le(e){const t=j();function n(l){var u;const s=_.get(e)||new Set;s.add(l),_.set(e,s);const a=()=>i(l);return(u=t==null?void 0:t.cleanups)==null||u.push(a),a}function o(l){function u(...s){i(u),l(...s)}return n(u)}function i(l){const u=_.get(e);u&&(u.delete(l),u.size||r())}function r(){_.delete(e)}function c(l,u){var s;(s=_.get(e))==null||s.forEach(a=>a(l,u))}return{on:n,once:o,off:i,emit:c,reset:r}}const te={page:e=>[e.pageX,e.pageY],client:e=>[e.clientX,e.clientY],screen:e=>[e.screenX,e.screenY],movement:e=>e instanceof Touch?null:[e.movementX,e.movementY]};function ae(e={}){const{type:t="page",touch:n=!0,resetOnTouchEnds:o=!1,initialValue:i={x:0,y:0},window:r=F,target:c=r,scroll:l=!0,eventFilter:u}=e;let s=null;const a=g(i.x),d=g(i.y),v=g(null),m=typeof t=="function"?t:te[t],w=f=>{const S=m(f);s=f,S&&([a.value,d.value]=S,v.value="mouse")},y=f=>{if(f.touches.length>0){const S=m(f.touches[0]);S&&([a.value,d.value]=S,v.value="touch")}},T=()=>{if(!s||!r)return;const f=m(s);s instanceof MouseEvent&&f&&(a.value=f[0]+r.scrollX,d.value=f[1]+r.scrollY)},E=()=>{a.value=i.x,d.value=i.y},p=u?f=>u(()=>w(f),{}):f=>w(f),h=u?f=>u(()=>y(f),{}):f=>y(f),A=u?()=>u(()=>T(),{}):()=>T();if(c){const f={passive:!0};b(c,["mousemove","dragover"],p,f),n&&t!=="movement"&&(b(c,["touchstart","touchmove"],h,f),o&&b(c,"touchend",E,f)),l&&t==="page"&&b(r,"scroll",A,{passive:!0})}return{x:a,y:d,sourceType:v}}export{k as a,re as b,oe as c,F as d,le as e,ue as f,se as g,ae as u,ie as w};