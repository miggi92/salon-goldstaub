import { d as _export_sfc, e as __nuxt_component_0, f as _sfc_main$1, g as _sfc_main$2 } from "./server.mjs";
import { useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSuspense } from "vue/server-renderer";
import "#internal/nitro";
import "pinia";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Logos = __nuxt_component_0;
  const _component_PageView = _sfc_main$1;
  const _component_InputEntry = _sfc_main$2;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Logos, { "mb-6": "" }, null, _parent));
  ssrRenderSuspense(_push, {
    fallback: () => {
      _push(`<div op50 italic><span animate-pulse>Loading...</span></div>`);
    },
    default: () => {
      _push(ssrRenderComponent(_component_PageView, null, null, _parent));
    },
    _: 1
  });
  _push(ssrRenderComponent(_component_InputEntry, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export { index as default };
