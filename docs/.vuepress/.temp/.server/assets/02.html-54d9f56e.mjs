import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.696937cd.mjs";
import "@vuepress/shared";
import "ts-debounce";
import "vue-router";
import "@vueuse/core";
import "vuepress-shared/client";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="_02-tcp协议-如何保证页面文件能被完整送达浏览器" tabindex="-1"><a class="header-anchor" href="#_02-tcp协议-如何保证页面文件能被完整送达浏览器" aria-hidden="true">#</a> 02-TCP协议：如何保证页面文件能被完整送达浏览器？</h2><h3 id="tcp协议-如何保证页面文件能被完整送达浏览器" tabindex="-1"><a class="header-anchor" href="#tcp协议-如何保证页面文件能被完整送达浏览器" aria-hidden="true">#</a> TCP协议：如何保证页面文件能被完整送达浏览器？</h3><p>在Web页面性能中，FP（First Paint）指标是衡量页面性能的重要指标。它直接影响用户的跳出率，更快的页面响应意味着更高的参与度、更多的PV和更高的转化率。其中一个影响FP指标的重要因素是网络加载速度。</p><p>要优化Web页面加载速度，需要对网络有充分的了解。理解网络的关键是对网络协议有深刻的认识，HTTP和WebSocket都是基于TCP/IP的。如果对这些原理有足够了解，就可以清楚如何去优化Web性能或者更轻松地定位Web问题。TCP/IP的设计思想还可以拓宽知识边界，提升对项目的理解和解决问题的能力。</p><p>这篇文章从数据包的角度，介绍了TCP/IP在Web世界中的工作原理。一个文件在网络中通常会被拆分为很多数据包来进行传输，而数据包在传输过程中有很大概率丢失或出错。如何保证页面文件能被完整地送达浏览器呢？</p><p>文章从“数据包如何送达主机”、“主机如何将数据包转交给应用”和“数据是如何被完整地送达应用程序”这三个角度，讲述了数据的传输过程。互联网中的数据是通过数据包来传输的，如果发送的数据很大，那么该数据就会被拆分为很多小数据包来传输。IP地址是计算机地址，访问任何网站实际上只是你的计算机向另外一台计算机请求信息。</p><p>TCP协议是一种可靠的协议，它使用三次握手建立连接，保证数据传输的可靠性。TCP协议还使用滑动窗口和拥塞控制等技术来优化数据传输效率。在TCP协议下，数据包从主机A发送到主机B，先经过IP层，然后通过TCP层进行传输。TCP层将数据拆分为多个数据包，并在每个数据包上添加序号和确认号等信息。当主机B收到数据包时，会发送确认信息给主机A，主机A根据确认信息调整发送窗口大小和发送速率。</p><p>总之，TCP协议保证了页面文件能够完整地送达浏览器，并且保证了数据传输的可靠性和效率。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/browser/02.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _02_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "02.html.vue"]]);
export {
  _02_html as default
};
