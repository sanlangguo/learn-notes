import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.3b32e088.mjs";
import "@vuepress/shared";
import "ts-debounce";
import "vue-router";
import "@vueuse/core";
import "vuepress-shared/client";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="_08-如何构建和使用v8的调试工具d8" tabindex="-1"><a class="header-anchor" href="#_08-如何构建和使用v8的调试工具d8" aria-hidden="true">#</a> 08-如何构建和使用V8的调试工具d8</h2><p>本文主要介绍如何构建和使用V8的调试工具d8，d8可以用来查看V8在执行JavaScript过程中的各种中间数据，包括作用域、AST、字节码、优化的二进制代码、垃圾回收的状态等，并可以使用d8提供的私有API查看一些内部信息。</p><h3 id="构建d8" tabindex="-1"><a class="header-anchor" href="#构建d8" aria-hidden="true">#</a> 构建d8</h3><p>要构建d8，需要先下载V8的源码并生成工程文件，然后再编译V8的工程并生成d8。具体步骤如下：</p><ul><li>下载V8的源码，需要使用VPN；</li><li>下下载编译工具链depot_tools，并将其解压到本地路径中，并将该路径添加到环境变量中；</li><li>下在系统环境变量中添加变量DEPOT_TOOLS_WIN_TOOLCHAIN，值设为0；</li><li>下使用gclient下载V8源码；</li><li>下使用gn生成工程文件；</li><li>下使用ninja编译生成d8。</li></ul><h3 id="使用d8" tabindex="-1"><a class="header-anchor" href="#使用d8" aria-hidden="true">#</a> 使用d8</h3><p>使用d8可以查看V8在执行JavaScript过程中的各种中间数据，包括作用域、AST、字节码、优化的二进制代码、垃圾回收的状态等，并可以使用d8提供的私有API查看一些内部信息。具体步骤如下：</p><h3 id="运行d8命令-进入d8的交互式环境" tabindex="-1"><a class="header-anchor" href="#运行d8命令-进入d8的交互式环境" aria-hidden="true">#</a> 运行d8命令，进入d8的交互式环境；</h3><ul><li>下使用--help命令查看d8支持的参数和命令；</li><li>下使用--print-ast命令打印JavaScript代码的AST（抽象语法树）；</li><li>下使用--print-bytecode命令打印JavaScript代码的字节码；</li><li>下使用--print-opt-code命令打印JavaScript代码的优化二进制代码；</li><li>下使用--trace-gc命令跟踪垃圾回收状态；</li><li>下使用--allow-natives-syntax命令调用V8的私有API查看一些内部信息。</li></ul><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3><p>本文介绍了如何构建和使用V8的调试工具d8，通过d8可以查看V8在执行JavaScript过程中的各种中间数据，并可以使用d8提供的私有API查看一些内部信息。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/v8/08.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _08_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "08.html.vue"]]);
export {
  _08_html as default
};
