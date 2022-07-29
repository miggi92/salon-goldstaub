import { a as useRoute, b as useUserStore, _ as _sfc_main$1, c as __nuxt_component_0 } from "./server.mjs";
import { defineComponent, watchEffect, resolveComponent, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import "#internal/nitro";
import "pinia";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const user = useUserStore();
    const name = route.params.id;
    watchEffect(() => {
      user.setNewName(route.params.id);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      const _component_Counter = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><div i-twemoji:waving-hand text-4xl inline-block animate-shake-x animate-duration-5000></div><h3 text-2xl font-500> Hi, </h3><div text-xl>${ssrInterpolate(unref(name))}! </div>`);
      if (unref(user).otherNames.length) {
        _push(`<p text-sm my-4><span op-50>Also as known as:</span><ul><!--[-->`);
        ssrRenderList(unref(user).otherNames, (otherName) => {
          _push(`<li>`);
          _push(ssrRenderComponent(_component_router_link, {
            to: `/hi/${otherName}`,
            replace: ""
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(otherName)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(otherName), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul></p>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_Counter, null, null, _parent));
      _push(`<div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "btn m-3 text-sm",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Back `);
          } else {
            return [
              createTextVNode(" Back ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hi/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export { _sfc_main as default };
