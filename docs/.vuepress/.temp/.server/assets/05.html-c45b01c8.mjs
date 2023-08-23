import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.d4b4a16d.mjs";
import "@vuepress/shared";
import "ts-debounce";
import "vue-router";
import "@vueuse/core";
import "vuepress-shared/client";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="_05-原型链-v8是如何实现对象继承的" tabindex="-1"><a class="header-anchor" href="#_05-原型链-v8是如何实现对象继承的" aria-hidden="true">#</a> 05-原型链：V8是如何实现对象继承的</h2><p>本文介绍了JavaScript中的继承机制，其中主要介绍了基于类的继承和基于原型的继承两种方式。</p><h3 id="基于类的继承" tabindex="-1"><a class="header-anchor" href="#基于类的继承" aria-hidden="true">#</a> 基于类的继承</h3><p>C++、Java、C#等语言都是基于类的继承方式。这种方式提供了复杂的规则和关键字，如class、friend、protected、private、interface等，通过组合使用这些关键字，可以实现继承。</p><p>但是，使用基于类的继承时，如果业务复杂，需要创建大量的对象，并需要维护复杂的继承关系，导致代码过度复杂和臃肿。此外，引入了大量关键字也增加了设计复杂度。</p><h3 id="基于原型的继承" tabindex="-1"><a class="header-anchor" href="#基于原型的继承" aria-hidden="true">#</a> 基于原型的继承</h3><p>JavaScript中的继承方式和其他面向对象的继承方式有所不同。JavaScript本身不提供class实现。虽然ES2015/ES6中引入了class关键字，但这只是语法糖，JavaScript的继承仍然和基于类的继承没有任何关系。</p><p>JavaScript仅仅在对象中引入了一个原型属性，就实现了语言的继承机制。基于原型的继承省去了很多基于类继承时的繁文缛节，简洁而优美。</p><p>在JavaScript中，每个对象都有一个原型对象，该对象包含可共享的属性和方法。如果在对象自身找不到属性或方法，则会在原型对象中查找。原型对象也有自己的原型对象，从而形成了一个原型链。</p><p>V8引擎使用了一种称为隐藏类的技术来实现对象继承。当创建一个新对象时，V8会为该对象创建一个隐藏类，该类包含该对象的所有属性和方法。如果新对象与已有对象具有相同的属性和方法，则它们将共享相同的隐藏类。</p><p>当一个对象被修改时，V8会创建一个新的隐藏类，并将该对象与新隐藏类相关联。如果一个新属性被添加到该对象中，则V8会创建一个新隐藏类，并将该属性添加到该类中。</p><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3><p>JavaScript中的继承方式是基于原型的，省去了基于类继承时的繁文缛节，简洁而优美。每个对象都有一个原型对象，通过原型链查找属性和方法。V8引擎使用隐藏类技术实现对象继承，当创建新对象时会为其创建一个隐藏类，如果新对象与已有对象具有相同的属性和方法，则它们将共享相同的隐藏类。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/v8/05.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _05_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "05.html.vue"]]);
export {
  _05_html as default
};
