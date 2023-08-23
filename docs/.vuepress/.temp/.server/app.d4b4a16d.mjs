var _a;
import { defineAsyncComponent, ref, readonly, reactive, defineComponent, onMounted, computed, h, inject, Transition, mergeProps, useSSRContext, provide, watch, onUnmounted, resolveComponent, toRefs, unref, withCtx, renderSlot, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, createCommentVNode, withDirectives, Fragment, renderList, vShow, nextTick, onBeforeUnmount, createSSRApp } from "vue";
import { isString, isArray, dedupeHead, resolveLocalePath, isLinkHttp, removeLeadingSlash, isFunction, isPlainObject, isLinkMailto, isLinkTel, removeEndingSlash } from "@vuepress/shared";
import { debounce } from "ts-debounce";
import { useRouter, useRoute, RouterView, createRouter, START_LOCATION, createMemoryHistory } from "vue-router";
import { ssrRenderAttrs, ssrRenderSlot, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderSlotInner, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { usePreferredDark, useStorage, useToggle, computedEager } from "@vueuse/core";
import { useLocaleConfig, VPLink, startsWith, keys, endsWith, hasGlobalComponent } from "vuepress-shared/client";
const pagesData$1 = {
  // path: /
  "v-8daa1a0e": () => import(
    /* webpackChunkName: "v-8daa1a0e" */
    "./assets/index.html-d1e11dc3.mjs"
  ).then(({ data }) => data),
  // path: /js/base-ts.html
  "v-2f7b5caa": () => import(
    /* webpackChunkName: "v-2f7b5caa" */
    "./assets/base-ts.html-9e51343e.mjs"
  ).then(({ data }) => data),
  // path: /js/js.html
  "v-51df5a23": () => import(
    /* webpackChunkName: "v-51df5a23" */
    "./assets/js.html-8229a8f5.mjs"
  ).then(({ data }) => data),
  // path: /browser/01.html
  "v-6f622f78": () => import(
    /* webpackChunkName: "v-6f622f78" */
    "./assets/01.html-422d2b45.mjs"
  ).then(({ data }) => data),
  // path: /browser/02.html
  "v-71170817": () => import(
    /* webpackChunkName: "v-71170817" */
    "./assets/02.html-71b22359.mjs"
  ).then(({ data }) => data),
  // path: /browser/03.html
  "v-72cbe0b6": () => import(
    /* webpackChunkName: "v-72cbe0b6" */
    "./assets/03.html-91543ae0.mjs"
  ).then(({ data }) => data),
  // path: /browser/04.html
  "v-7480b955": () => import(
    /* webpackChunkName: "v-7480b955" */
    "./assets/04.html-7eaaa9ed.mjs"
  ).then(({ data }) => data),
  // path: /browser/05.html
  "v-763591f4": () => import(
    /* webpackChunkName: "v-763591f4" */
    "./assets/05.html-234dcbd5.mjs"
  ).then(({ data }) => data),
  // path: /browser/06.html
  "v-77ea6a93": () => import(
    /* webpackChunkName: "v-77ea6a93" */
    "./assets/06.html-9baa787f.mjs"
  ).then(({ data }) => data),
  // path: /browser/07.html
  "v-799f4332": () => import(
    /* webpackChunkName: "v-799f4332" */
    "./assets/07.html-694f5951.mjs"
  ).then(({ data }) => data),
  // path: /browser/08.html
  "v-7b541bd1": () => import(
    /* webpackChunkName: "v-7b541bd1" */
    "./assets/08.html-fb5405a1.mjs"
  ).then(({ data }) => data),
  // path: /browser/09.html
  "v-7d08f470": () => import(
    /* webpackChunkName: "v-7d08f470" */
    "./assets/09.html-6ef52204.mjs"
  ).then(({ data }) => data),
  // path: /browser/10.html
  "v-bad8dbcc": () => import(
    /* webpackChunkName: "v-bad8dbcc" */
    "./assets/10.html-f729196c.mjs"
  ).then(({ data }) => data),
  // path: /browser/11.html
  "v-b76f2a8e": () => import(
    /* webpackChunkName: "v-b76f2a8e" */
    "./assets/11.html-20103a9b.mjs"
  ).then(({ data }) => data),
  // path: /browser/12.html
  "v-b4057950": () => import(
    /* webpackChunkName: "v-b4057950" */
    "./assets/12.html-77064cc4.mjs"
  ).then(({ data }) => data),
  // path: /browser/13.html
  "v-b09bc812": () => import(
    /* webpackChunkName: "v-b09bc812" */
    "./assets/13.html-5699eaa0.mjs"
  ).then(({ data }) => data),
  // path: /browser/14.html
  "v-ad3216d4": () => import(
    /* webpackChunkName: "v-ad3216d4" */
    "./assets/14.html-d18f5162.mjs"
  ).then(({ data }) => data),
  // path: /browser/15.html
  "v-a9c86596": () => import(
    /* webpackChunkName: "v-a9c86596" */
    "./assets/15.html-02319362.mjs"
  ).then(({ data }) => data),
  // path: /browser/16.html
  "v-a65eb458": () => import(
    /* webpackChunkName: "v-a65eb458" */
    "./assets/16.html-6c116b1c.mjs"
  ).then(({ data }) => data),
  // path: /browser/17.html
  "v-a2f5031a": () => import(
    /* webpackChunkName: "v-a2f5031a" */
    "./assets/17.html-953d40f6.mjs"
  ).then(({ data }) => data),
  // path: /browser/18.html
  "v-9f8b51dc": () => import(
    /* webpackChunkName: "v-9f8b51dc" */
    "./assets/18.html-d6613ea9.mjs"
  ).then(({ data }) => data),
  // path: /browser/19.html
  "v-9c21a09e": () => import(
    /* webpackChunkName: "v-9c21a09e" */
    "./assets/19.html-05a5e88e.mjs"
  ).then(({ data }) => data),
  // path: /browser/20.html
  "v-510c654a": () => import(
    /* webpackChunkName: "v-510c654a" */
    "./assets/20.html-c3fdb193.mjs"
  ).then(({ data }) => data),
  // path: /browser/21.html
  "v-4da2b40c": () => import(
    /* webpackChunkName: "v-4da2b40c" */
    "./assets/21.html-b93a6b39.mjs"
  ).then(({ data }) => data),
  // path: /browser/22.html
  "v-4a3902ce": () => import(
    /* webpackChunkName: "v-4a3902ce" */
    "./assets/22.html-fa66bba1.mjs"
  ).then(({ data }) => data),
  // path: /browser/23.html
  "v-46cf5190": () => import(
    /* webpackChunkName: "v-46cf5190" */
    "./assets/23.html-03fbe444.mjs"
  ).then(({ data }) => data),
  // path: /browser/24.html
  "v-4365a052": () => import(
    /* webpackChunkName: "v-4365a052" */
    "./assets/24.html-3941a146.mjs"
  ).then(({ data }) => data),
  // path: /browser/25.html
  "v-3ffbef14": () => import(
    /* webpackChunkName: "v-3ffbef14" */
    "./assets/25.html-73b690ef.mjs"
  ).then(({ data }) => data),
  // path: /browser/26.html
  "v-3c923dd6": () => import(
    /* webpackChunkName: "v-3c923dd6" */
    "./assets/26.html-b427ca32.mjs"
  ).then(({ data }) => data),
  // path: /browser/27.html
  "v-39288c98": () => import(
    /* webpackChunkName: "v-39288c98" */
    "./assets/27.html-b4f2567b.mjs"
  ).then(({ data }) => data),
  // path: /browser/28.html
  "v-35bedb5a": () => import(
    /* webpackChunkName: "v-35bedb5a" */
    "./assets/28.html-4458eb41.mjs"
  ).then(({ data }) => data),
  // path: /browser/29.html
  "v-32552a1c": () => import(
    /* webpackChunkName: "v-32552a1c" */
    "./assets/29.html-3eb0e81d.mjs"
  ).then(({ data }) => data),
  // path: /browser/30.html
  "v-0c60089c": () => import(
    /* webpackChunkName: "v-0c60089c" */
    "./assets/30.html-a4f2c42c.mjs"
  ).then(({ data }) => data),
  // path: /browser/31.html
  "v-0e14e13b": () => import(
    /* webpackChunkName: "v-0e14e13b" */
    "./assets/31.html-81579d94.mjs"
  ).then(({ data }) => data),
  // path: /browser/32.html
  "v-0fc9b9da": () => import(
    /* webpackChunkName: "v-0fc9b9da" */
    "./assets/32.html-23d2c55a.mjs"
  ).then(({ data }) => data),
  // path: /browser/33.html
  "v-117e9279": () => import(
    /* webpackChunkName: "v-117e9279" */
    "./assets/33.html-e559c46d.mjs"
  ).then(({ data }) => data),
  // path: /browser/34.html
  "v-13336b18": () => import(
    /* webpackChunkName: "v-13336b18" */
    "./assets/34.html-4fba7ef6.mjs"
  ).then(({ data }) => data),
  // path: /browser/35.html
  "v-14e843b7": () => import(
    /* webpackChunkName: "v-14e843b7" */
    "./assets/35.html-17663c0d.mjs"
  ).then(({ data }) => data),
  // path: /browser/36.html
  "v-169d1c56": () => import(
    /* webpackChunkName: "v-169d1c56" */
    "./assets/36.html-5a2db022.mjs"
  ).then(({ data }) => data),
  // path: /node/%E5%AD%A6%E4%B9%A0node%E7%9F%A5%E8%AF%86%E6%A1%86%E6%9E%B6.html
  "v-53ca0971": () => import(
    /* webpackChunkName: "v-53ca0971" */
    "./assets/学习node知识框架.html-35fdc09b.mjs"
  ).then(({ data }) => data),
  // path: /node/%E6%A8%A1%E5%9D%97%E5%8C%96%E4%BB%8B%E7%BB%8D.html
  "v-2a50d1fa": () => import(
    /* webpackChunkName: "v-2a50d1fa" */
    "./assets/模块化介绍.html-fd36d65f.mjs"
  ).then(({ data }) => data),
  // path: /mobile/h5-jump-app.html
  "v-434a106a": () => import(
    /* webpackChunkName: "v-434a106a" */
    "./assets/h5-jump-app.html-eba0613e.mjs"
  ).then(({ data }) => data),
  // path: /nav/list.html
  "v-2b876a94": () => import(
    /* webpackChunkName: "v-2b876a94" */
    "./assets/list.html-9a898185.mjs"
  ).then(({ data }) => data),
  // path: /react/contrast.html
  "v-671ee2ee": () => import(
    /* webpackChunkName: "v-671ee2ee" */
    "./assets/contrast.html-c070bc3f.mjs"
  ).then(({ data }) => data),
  // path: /tools/tl-list.html
  "v-d97aef5a": () => import(
    /* webpackChunkName: "v-d97aef5a" */
    "./assets/tl-list.html-c52c3b3c.mjs"
  ).then(({ data }) => data),
  // path: /tools/user-tools.html
  "v-05276d93": () => import(
    /* webpackChunkName: "v-05276d93" */
    "./assets/user-tools.html-6ae91f1d.mjs"
  ).then(({ data }) => data),
  // path: /ts/AppendArgument.html
  "v-5d9b6c6a": () => import(
    /* webpackChunkName: "v-5d9b6c6a" */
    "./assets/AppendArgument.html-03155f3b.mjs"
  ).then(({ data }) => data),
  // path: /ts/Combination.html
  "v-0d0ea581": () => import(
    /* webpackChunkName: "v-0d0ea581" */
    "./assets/Combination.html-9396b9d6.mjs"
  ).then(({ data }) => data),
  // path: /ts/Concat.html
  "v-8ed5a464": () => import(
    /* webpackChunkName: "v-8ed5a464" */
    "./assets/Concat.html-4fe787ab.mjs"
  ).then(({ data }) => data),
  // path: /ts/Exclude.html
  "v-f2d45654": () => import(
    /* webpackChunkName: "v-f2d45654" */
    "./assets/exclude.html-28f03ce8.mjs"
  ).then(({ data }) => data),
  // path: /ts/Omit.html
  "v-58df4e8e": () => import(
    /* webpackChunkName: "v-58df4e8e" */
    "./assets/Omit.html-0639b722.mjs"
  ).then(({ data }) => data),
  // path: /ts/pick.html
  "v-041cf341": () => import(
    /* webpackChunkName: "v-041cf341" */
    "./assets/pick.html-88b8e6e7.mjs"
  ).then(({ data }) => data),
  // path: /ts/readonly.html
  "v-5f2a4540": () => import(
    /* webpackChunkName: "v-5f2a4540" */
    "./assets/readonly.html-fb41b63c.mjs"
  ).then(({ data }) => data),
  // path: /ts/type.html
  "v-78b56bc8": () => import(
    /* webpackChunkName: "v-78b56bc8" */
    "./assets/type.html-53029238.mjs"
  ).then(({ data }) => data),
  // path: /vue/devise-realization.html
  "v-c5fb03d0": () => import(
    /* webpackChunkName: "v-c5fb03d0" */
    "./assets/devise-realization.html-a28672f0.mjs"
  ).then(({ data }) => data),
  // path: /vue/v2-v3.html
  "v-4362318d": () => import(
    /* webpackChunkName: "v-4362318d" */
    "./assets/v2-v3.html-333a123b.mjs"
  ).then(({ data }) => data),
  // path: /vue/vue.html
  "v-13c9aef5": () => import(
    /* webpackChunkName: "v-13c9aef5" */
    "./assets/vue.html-6262b06a.mjs"
  ).then(({ data }) => data),
  // path: /v8/01.html
  "v-2cc1cca4": () => import(
    /* webpackChunkName: "v-2cc1cca4" */
    "./assets/01.html-881d2ee3.mjs"
  ).then(({ data }) => data),
  // path: /v8/02.html
  "v-2e76a543": () => import(
    /* webpackChunkName: "v-2e76a543" */
    "./assets/02.html-3fa85b9a.mjs"
  ).then(({ data }) => data),
  // path: /v8/03.html
  "v-302b7de2": () => import(
    /* webpackChunkName: "v-302b7de2" */
    "./assets/03.html-4e671d51.mjs"
  ).then(({ data }) => data),
  // path: /v8/04.html
  "v-31e05681": () => import(
    /* webpackChunkName: "v-31e05681" */
    "./assets/04.html-e983b98a.mjs"
  ).then(({ data }) => data),
  // path: /v8/05.html
  "v-33952f20": () => import(
    /* webpackChunkName: "v-33952f20" */
    "./assets/05.html-dccc3edc.mjs"
  ).then(({ data }) => data),
  // path: /v8/06.html
  "v-354a07bf": () => import(
    /* webpackChunkName: "v-354a07bf" */
    "./assets/06.html-fa8595fe.mjs"
  ).then(({ data }) => data),
  // path: /v8/07.html
  "v-36fee05e": () => import(
    /* webpackChunkName: "v-36fee05e" */
    "./assets/07.html-2e781a08.mjs"
  ).then(({ data }) => data),
  // path: /v8/08.html
  "v-38b3b8fd": () => import(
    /* webpackChunkName: "v-38b3b8fd" */
    "./assets/08.html-2d41bd91.mjs"
  ).then(({ data }) => data),
  // path: /v8/09.html
  "v-3a68919c": () => import(
    /* webpackChunkName: "v-3a68919c" */
    "./assets/09.html-251c7830.mjs"
  ).then(({ data }) => data),
  // path: /v8/10.html
  "v-5ff32f46": () => import(
    /* webpackChunkName: "v-5ff32f46" */
    "./assets/10.html-f8b22665.mjs"
  ).then(({ data }) => data),
  // path: /v8/11.html
  "v-61a807e5": () => import(
    /* webpackChunkName: "v-61a807e5" */
    "./assets/11.html-022d9fb8.mjs"
  ).then(({ data }) => data),
  // path: /v8/12.html
  "v-635ce084": () => import(
    /* webpackChunkName: "v-635ce084" */
    "./assets/12.html-9b306de6.mjs"
  ).then(({ data }) => data),
  // path: /v8/13.html
  "v-6511b923": () => import(
    /* webpackChunkName: "v-6511b923" */
    "./assets/13.html-37d67860.mjs"
  ).then(({ data }) => data),
  // path: /v8/14.html
  "v-66c691c2": () => import(
    /* webpackChunkName: "v-66c691c2" */
    "./assets/14.html-ec600ded.mjs"
  ).then(({ data }) => data),
  // path: /v8/15.html
  "v-687b6a61": () => import(
    /* webpackChunkName: "v-687b6a61" */
    "./assets/15.html-50dc154b.mjs"
  ).then(({ data }) => data),
  // path: /v8/16.html
  "v-6a304300": () => import(
    /* webpackChunkName: "v-6a304300" */
    "./assets/16.html-bae081bf.mjs"
  ).then(({ data }) => data),
  // path: /v8/17.html
  "v-6be51b9f": () => import(
    /* webpackChunkName: "v-6be51b9f" */
    "./assets/17.html-0592825e.mjs"
  ).then(({ data }) => data),
  // path: /v8/18.html
  "v-6d99f43e": () => import(
    /* webpackChunkName: "v-6d99f43e" */
    "./assets/18.html-2a8960c7.mjs"
  ).then(({ data }) => data),
  // path: /v8/19.html
  "v-6f4eccdd": () => import(
    /* webpackChunkName: "v-6f4eccdd" */
    "./assets/19.html-40325a57.mjs"
  ).then(({ data }) => data),
  // path: /v8/20.html
  "v-d64d2af2": () => import(
    /* webpackChunkName: "v-d64d2af2" */
    "./assets/20.html-972c1324.mjs"
  ).then(({ data }) => data),
  // path: /v8/21.html
  "v-d2e379b4": () => import(
    /* webpackChunkName: "v-d2e379b4" */
    "./assets/21.html-e737d63a.mjs"
  ).then(({ data }) => data),
  // path: /v8/22.html
  "v-cf79c876": () => import(
    /* webpackChunkName: "v-cf79c876" */
    "./assets/22.html-91554554.mjs"
  ).then(({ data }) => data),
  // path: /v8/23.html
  "v-cc101738": () => import(
    /* webpackChunkName: "v-cc101738" */
    "./assets/23.html-5aa581a2.mjs"
  ).then(({ data }) => data),
  // path: /%E9%9A%8F%E6%89%8B%E8%AE%B0/%E5%A6%82%E4%BD%95%E7%B3%BB%E7%BB%9F%E5%AD%A6%E4%B9%A0%E4%B8%80%E4%B8%AA%E6%96%B0%E7%9F%A5%E8%AF%86.html
  "v-5f355e84": () => import(
    /* webpackChunkName: "v-5f355e84" */
    "./assets/如何系统学习一个新知识.html-292daef4.mjs"
  ).then(({ data }) => data),
  // path: /404.html
  "v-3706649a": () => import(
    /* webpackChunkName: "v-3706649a" */
    "./assets/404.html-d1da943c.mjs"
  ).then(({ data }) => data),
  // path: /js/
  "v-2d0a9a6d": () => import(
    /* webpackChunkName: "v-2d0a9a6d" */
    "./assets/index.html-ecccf2da.mjs"
  ).then(({ data }) => data),
  // path: /browser/
  "v-24e1b800": () => import(
    /* webpackChunkName: "v-24e1b800" */
    "./assets/index.html-7aab4475.mjs"
  ).then(({ data }) => data),
  // path: /node/
  "v-15051314": () => import(
    /* webpackChunkName: "v-15051314" */
    "./assets/index.html-76976ba3.mjs"
  ).then(({ data }) => data),
  // path: /mobile/
  "v-99e61298": () => import(
    /* webpackChunkName: "v-99e61298" */
    "./assets/index.html-bd108956.mjs"
  ).then(({ data }) => data),
  // path: /nav/
  "v-744a49e5": () => import(
    /* webpackChunkName: "v-744a49e5" */
    "./assets/index.html-1aaf0979.mjs"
  ).then(({ data }) => data),
  // path: /react/
  "v-dc3b2a6e": () => import(
    /* webpackChunkName: "v-dc3b2a6e" */
    "./assets/index.html-4603d306.mjs"
  ).then(({ data }) => data),
  // path: /tools/
  "v-d440f426": () => import(
    /* webpackChunkName: "v-d440f426" */
    "./assets/index.html-d421a85d.mjs"
  ).then(({ data }) => data),
  // path: /ts/
  "v-2d0abff7": () => import(
    /* webpackChunkName: "v-2d0abff7" */
    "./assets/index.html-3bdf1415.mjs"
  ).then(({ data }) => data),
  // path: /vue/
  "v-744e35e2": () => import(
    /* webpackChunkName: "v-744e35e2" */
    "./assets/index.html-1b56df3e.mjs"
  ).then(({ data }) => data),
  // path: /v8/
  "v-2d0ac054": () => import(
    /* webpackChunkName: "v-2d0ac054" */
    "./assets/index.html-5f9fb39b.mjs"
  ).then(({ data }) => data),
  // path: /%E9%9A%8F%E6%89%8B%E8%AE%B0/
  "v-daaaecb4": () => import(
    /* webpackChunkName: "v-daaaecb4" */
    "./assets/index.html-d41ee2d5.mjs"
  ).then(({ data }) => data)
};
const siteData$1 = JSON.parse('{"base":"/learn-notes/","lang":"en-US","title":"三郎过","description":"","head":[["link",{"rel":"icon","href":"/img/logo.jpg"}]],"locales":{"/":{"lang":"zh-CN"}}}');
const pagesComponents = {
  // path: /
  "v-8daa1a0e": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-8daa1a0e" */
    "./assets/index.html-ccf9bf42.mjs"
  )),
  // path: /js/base-ts.html
  "v-2f7b5caa": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-2f7b5caa" */
    "./assets/base-ts.html-a277f323.mjs"
  )),
  // path: /js/js.html
  "v-51df5a23": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-51df5a23" */
    "./assets/js.html-b7fb4fe6.mjs"
  )),
  // path: /browser/01.html
  "v-6f622f78": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-6f622f78" */
    "./assets/01.html-914d157c.mjs"
  )),
  // path: /browser/02.html
  "v-71170817": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-71170817" */
    "./assets/02.html-5eedcb0a.mjs"
  )),
  // path: /browser/03.html
  "v-72cbe0b6": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-72cbe0b6" */
    "./assets/03.html-825b52a2.mjs"
  )),
  // path: /browser/04.html
  "v-7480b955": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-7480b955" */
    "./assets/04.html-678265fa.mjs"
  )),
  // path: /browser/05.html
  "v-763591f4": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-763591f4" */
    "./assets/05.html-ed1365c9.mjs"
  )),
  // path: /browser/06.html
  "v-77ea6a93": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-77ea6a93" */
    "./assets/06.html-541005ec.mjs"
  )),
  // path: /browser/07.html
  "v-799f4332": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-799f4332" */
    "./assets/07.html-2a5beb57.mjs"
  )),
  // path: /browser/08.html
  "v-7b541bd1": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-7b541bd1" */
    "./assets/08.html-fcc1dd69.mjs"
  )),
  // path: /browser/09.html
  "v-7d08f470": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-7d08f470" */
    "./assets/09.html-36ef0f56.mjs"
  )),
  // path: /browser/10.html
  "v-bad8dbcc": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-bad8dbcc" */
    "./assets/10.html-00bde10c.mjs"
  )),
  // path: /browser/11.html
  "v-b76f2a8e": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-b76f2a8e" */
    "./assets/11.html-8702399c.mjs"
  )),
  // path: /browser/12.html
  "v-b4057950": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-b4057950" */
    "./assets/12.html-054f6673.mjs"
  )),
  // path: /browser/13.html
  "v-b09bc812": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-b09bc812" */
    "./assets/13.html-a0071645.mjs"
  )),
  // path: /browser/14.html
  "v-ad3216d4": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-ad3216d4" */
    "./assets/14.html-2a955037.mjs"
  )),
  // path: /browser/15.html
  "v-a9c86596": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-a9c86596" */
    "./assets/15.html-7e0a2342.mjs"
  )),
  // path: /browser/16.html
  "v-a65eb458": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-a65eb458" */
    "./assets/16.html-f3bc4d28.mjs"
  )),
  // path: /browser/17.html
  "v-a2f5031a": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-a2f5031a" */
    "./assets/17.html-0aaf628b.mjs"
  )),
  // path: /browser/18.html
  "v-9f8b51dc": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-9f8b51dc" */
    "./assets/18.html-25c36420.mjs"
  )),
  // path: /browser/19.html
  "v-9c21a09e": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-9c21a09e" */
    "./assets/19.html-33814268.mjs"
  )),
  // path: /browser/20.html
  "v-510c654a": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-510c654a" */
    "./assets/20.html-0128e60b.mjs"
  )),
  // path: /browser/21.html
  "v-4da2b40c": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-4da2b40c" */
    "./assets/21.html-61234fb2.mjs"
  )),
  // path: /browser/22.html
  "v-4a3902ce": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-4a3902ce" */
    "./assets/22.html-29c1b040.mjs"
  )),
  // path: /browser/23.html
  "v-46cf5190": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-46cf5190" */
    "./assets/23.html-60b63ba7.mjs"
  )),
  // path: /browser/24.html
  "v-4365a052": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-4365a052" */
    "./assets/24.html-713c8937.mjs"
  )),
  // path: /browser/25.html
  "v-3ffbef14": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-3ffbef14" */
    "./assets/25.html-b0e87bcb.mjs"
  )),
  // path: /browser/26.html
  "v-3c923dd6": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-3c923dd6" */
    "./assets/26.html-00902de9.mjs"
  )),
  // path: /browser/27.html
  "v-39288c98": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-39288c98" */
    "./assets/27.html-941dc683.mjs"
  )),
  // path: /browser/28.html
  "v-35bedb5a": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-35bedb5a" */
    "./assets/28.html-90a9a833.mjs"
  )),
  // path: /browser/29.html
  "v-32552a1c": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-32552a1c" */
    "./assets/29.html-9b38071d.mjs"
  )),
  // path: /browser/30.html
  "v-0c60089c": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-0c60089c" */
    "./assets/30.html-920704ca.mjs"
  )),
  // path: /browser/31.html
  "v-0e14e13b": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-0e14e13b" */
    "./assets/31.html-37f1de4d.mjs"
  )),
  // path: /browser/32.html
  "v-0fc9b9da": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-0fc9b9da" */
    "./assets/32.html-47da80f9.mjs"
  )),
  // path: /browser/33.html
  "v-117e9279": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-117e9279" */
    "./assets/33.html-3b9a6859.mjs"
  )),
  // path: /browser/34.html
  "v-13336b18": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-13336b18" */
    "./assets/34.html-f64ef0ec.mjs"
  )),
  // path: /browser/35.html
  "v-14e843b7": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-14e843b7" */
    "./assets/35.html-1969b3ec.mjs"
  )),
  // path: /browser/36.html
  "v-169d1c56": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-169d1c56" */
    "./assets/36.html-337dd2ae.mjs"
  )),
  // path: /node/%E5%AD%A6%E4%B9%A0node%E7%9F%A5%E8%AF%86%E6%A1%86%E6%9E%B6.html
  "v-53ca0971": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-53ca0971" */
    "./assets/学习node知识框架.html-e11daae2.mjs"
  )),
  // path: /node/%E6%A8%A1%E5%9D%97%E5%8C%96%E4%BB%8B%E7%BB%8D.html
  "v-2a50d1fa": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-2a50d1fa" */
    "./assets/模块化介绍.html-a57f9769.mjs"
  )),
  // path: /mobile/h5-jump-app.html
  "v-434a106a": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-434a106a" */
    "./assets/h5-jump-app.html-e6d4707a.mjs"
  )),
  // path: /nav/list.html
  "v-2b876a94": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-2b876a94" */
    "./assets/list.html-9b75aa78.mjs"
  )),
  // path: /react/contrast.html
  "v-671ee2ee": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-671ee2ee" */
    "./assets/contrast.html-206183b8.mjs"
  )),
  // path: /tools/tl-list.html
  "v-d97aef5a": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-d97aef5a" */
    "./assets/tl-list.html-233183e5.mjs"
  )),
  // path: /tools/user-tools.html
  "v-05276d93": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-05276d93" */
    "./assets/user-tools.html-bc9de86b.mjs"
  )),
  // path: /ts/AppendArgument.html
  "v-5d9b6c6a": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-5d9b6c6a" */
    "./assets/AppendArgument.html-b78e81e6.mjs"
  )),
  // path: /ts/Combination.html
  "v-0d0ea581": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-0d0ea581" */
    "./assets/Combination.html-87ee706d.mjs"
  )),
  // path: /ts/Concat.html
  "v-8ed5a464": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-8ed5a464" */
    "./assets/Concat.html-6c6e3f0d.mjs"
  )),
  // path: /ts/Exclude.html
  "v-f2d45654": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-f2d45654" */
    "./assets/exclude.html-7263576a.mjs"
  )),
  // path: /ts/Omit.html
  "v-58df4e8e": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-58df4e8e" */
    "./assets/Omit.html-04bc0467.mjs"
  )),
  // path: /ts/pick.html
  "v-041cf341": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-041cf341" */
    "./assets/pick.html-588b20d0.mjs"
  )),
  // path: /ts/readonly.html
  "v-5f2a4540": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-5f2a4540" */
    "./assets/readonly.html-1f6effcd.mjs"
  )),
  // path: /ts/type.html
  "v-78b56bc8": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-78b56bc8" */
    "./assets/type.html-0cc2ee54.mjs"
  )),
  // path: /vue/devise-realization.html
  "v-c5fb03d0": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-c5fb03d0" */
    "./assets/devise-realization.html-27b93dd0.mjs"
  )),
  // path: /vue/v2-v3.html
  "v-4362318d": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-4362318d" */
    "./assets/v2-v3.html-f2a357f8.mjs"
  )),
  // path: /vue/vue.html
  "v-13c9aef5": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-13c9aef5" */
    "./assets/vue.html-93c8290c.mjs"
  )),
  // path: /v8/01.html
  "v-2cc1cca4": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-2cc1cca4" */
    "./assets/01.html-ae4d146b.mjs"
  )),
  // path: /v8/02.html
  "v-2e76a543": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-2e76a543" */
    "./assets/02.html-a9e73940.mjs"
  )),
  // path: /v8/03.html
  "v-302b7de2": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-302b7de2" */
    "./assets/03.html-5ac6ae4b.mjs"
  )),
  // path: /v8/04.html
  "v-31e05681": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-31e05681" */
    "./assets/04.html-03f58159.mjs"
  )),
  // path: /v8/05.html
  "v-33952f20": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-33952f20" */
    "./assets/05.html-c45b01c8.mjs"
  )),
  // path: /v8/06.html
  "v-354a07bf": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-354a07bf" */
    "./assets/06.html-509fc847.mjs"
  )),
  // path: /v8/07.html
  "v-36fee05e": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-36fee05e" */
    "./assets/07.html-fa88ec1b.mjs"
  )),
  // path: /v8/08.html
  "v-38b3b8fd": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-38b3b8fd" */
    "./assets/08.html-39c38554.mjs"
  )),
  // path: /v8/09.html
  "v-3a68919c": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-3a68919c" */
    "./assets/09.html-0f1dbf3d.mjs"
  )),
  // path: /v8/10.html
  "v-5ff32f46": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-5ff32f46" */
    "./assets/10.html-1a03349f.mjs"
  )),
  // path: /v8/11.html
  "v-61a807e5": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-61a807e5" */
    "./assets/11.html-57fe50b0.mjs"
  )),
  // path: /v8/12.html
  "v-635ce084": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-635ce084" */
    "./assets/12.html-336ccefe.mjs"
  )),
  // path: /v8/13.html
  "v-6511b923": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-6511b923" */
    "./assets/13.html-ee5009d6.mjs"
  )),
  // path: /v8/14.html
  "v-66c691c2": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-66c691c2" */
    "./assets/14.html-84c90e41.mjs"
  )),
  // path: /v8/15.html
  "v-687b6a61": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-687b6a61" */
    "./assets/15.html-93dc7dfa.mjs"
  )),
  // path: /v8/16.html
  "v-6a304300": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-6a304300" */
    "./assets/16.html-f8019a3a.mjs"
  )),
  // path: /v8/17.html
  "v-6be51b9f": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-6be51b9f" */
    "./assets/17.html-f9a73c74.mjs"
  )),
  // path: /v8/18.html
  "v-6d99f43e": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-6d99f43e" */
    "./assets/18.html-f8f72299.mjs"
  )),
  // path: /v8/19.html
  "v-6f4eccdd": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-6f4eccdd" */
    "./assets/19.html-39140a12.mjs"
  )),
  // path: /v8/20.html
  "v-d64d2af2": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-d64d2af2" */
    "./assets/20.html-c7488463.mjs"
  )),
  // path: /v8/21.html
  "v-d2e379b4": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-d2e379b4" */
    "./assets/21.html-5f1c6f8f.mjs"
  )),
  // path: /v8/22.html
  "v-cf79c876": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-cf79c876" */
    "./assets/22.html-e8a45ef0.mjs"
  )),
  // path: /v8/23.html
  "v-cc101738": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-cc101738" */
    "./assets/23.html-f316e230.mjs"
  )),
  // path: /%E9%9A%8F%E6%89%8B%E8%AE%B0/%E5%A6%82%E4%BD%95%E7%B3%BB%E7%BB%9F%E5%AD%A6%E4%B9%A0%E4%B8%80%E4%B8%AA%E6%96%B0%E7%9F%A5%E8%AF%86.html
  "v-5f355e84": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-5f355e84" */
    "./assets/如何系统学习一个新知识.html-c12f5873.mjs"
  )),
  // path: /404.html
  "v-3706649a": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-3706649a" */
    "./assets/404.html-63266c8a.mjs"
  )),
  // path: /js/
  "v-2d0a9a6d": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-2d0a9a6d" */
    "./assets/index.html-0558fa17.mjs"
  )),
  // path: /browser/
  "v-24e1b800": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-24e1b800" */
    "./assets/index.html-9d5c35a0.mjs"
  )),
  // path: /node/
  "v-15051314": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-15051314" */
    "./assets/index.html-b44adead.mjs"
  )),
  // path: /mobile/
  "v-99e61298": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-99e61298" */
    "./assets/index.html-df309856.mjs"
  )),
  // path: /nav/
  "v-744a49e5": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-744a49e5" */
    "./assets/index.html-5e2f50c2.mjs"
  )),
  // path: /react/
  "v-dc3b2a6e": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-dc3b2a6e" */
    "./assets/index.html-9433e6f3.mjs"
  )),
  // path: /tools/
  "v-d440f426": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-d440f426" */
    "./assets/index.html-9e06b390.mjs"
  )),
  // path: /ts/
  "v-2d0abff7": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-2d0abff7" */
    "./assets/index.html-c0b862e3.mjs"
  )),
  // path: /vue/
  "v-744e35e2": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-744e35e2" */
    "./assets/index.html-552b8d88.mjs"
  )),
  // path: /v8/
  "v-2d0ac054": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-2d0ac054" */
    "./assets/index.html-7673eef1.mjs"
  )),
  // path: /%E9%9A%8F%E6%89%8B%E8%AE%B0/
  "v-daaaecb4": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-daaaecb4" */
    "./assets/index.html-96387f1e.mjs"
  ))
};
var layoutsSymbol = Symbol(
  ""
);
var pagesData = ref(pagesData$1);
var pageDataEmpty = readonly({
  key: "",
  path: "",
  title: "",
  lang: "",
  frontmatter: {},
  headers: []
});
var pageData = ref(pageDataEmpty);
var usePageData = () => pageData;
var pageFrontmatterSymbol = Symbol(
  ""
);
var usePageFrontmatter = () => {
  const pageFrontmatter = inject(pageFrontmatterSymbol);
  if (!pageFrontmatter) {
    throw new Error("usePageFrontmatter() is called without provider.");
  }
  return pageFrontmatter;
};
var pageHeadSymbol = Symbol(
  ""
);
var usePageHead = () => {
  const pageHead = inject(pageHeadSymbol);
  if (!pageHead) {
    throw new Error("usePageHead() is called without provider.");
  }
  return pageHead;
};
var pageHeadTitleSymbol = Symbol(
  ""
);
var pageLangSymbol = Symbol(
  ""
);
var usePageLang = () => {
  const pageLang = inject(pageLangSymbol);
  if (!pageLang) {
    throw new Error("usePageLang() is called without provider.");
  }
  return pageLang;
};
var pageLayoutSymbol = Symbol(
  ""
);
var usePageLayout = () => {
  const pageLayout = inject(pageLayoutSymbol);
  if (!pageLayout) {
    throw new Error("usePageLayout() is called without provider.");
  }
  return pageLayout;
};
var routeLocaleSymbol = Symbol(
  ""
);
var useRouteLocale = () => {
  const routeLocale = inject(routeLocaleSymbol);
  if (!routeLocale) {
    throw new Error("useRouteLocale() is called without provider.");
  }
  return routeLocale;
};
var siteData = ref(siteData$1);
var useSiteData = () => siteData;
var siteLocaleDataSymbol = Symbol(
  ""
);
var useSiteLocaleData = () => {
  const siteLocaleData = inject(siteLocaleDataSymbol);
  if (!siteLocaleData) {
    throw new Error("useSiteLocaleData() is called without provider.");
  }
  return siteLocaleData;
};
var LAYOUT_NAME_DEFAULT = "Layout";
var LAYOUT_NAME_NOT_FOUND = "NotFound";
var resolvers = reactive({
  /**
   * Resolve layouts component map
   */
  resolveLayouts: (clientConfigs2) => clientConfigs2.reduce(
    (prev, item) => ({
      ...prev,
      ...item.layouts
    }),
    {}
  ),
  /**
   * Resolve page data according to page key
   */
  resolvePageData: async (pageKey) => {
    const pageDataResolver = pagesData.value[pageKey];
    const pageData2 = await (pageDataResolver == null ? void 0 : pageDataResolver());
    return pageData2 ?? pageDataEmpty;
  },
  /**
   * Resolve page frontmatter from page data
   */
  resolvePageFrontmatter: (pageData2) => pageData2.frontmatter,
  /**
   * Merge the head config in frontmatter and site locale
   *
   * Frontmatter should take priority over site locale
   */
  resolvePageHead: (headTitle, frontmatter, siteLocale) => {
    const description = isString(frontmatter.description) ? frontmatter.description : siteLocale.description;
    const head = [
      ...isArray(frontmatter.head) ? frontmatter.head : [],
      ...siteLocale.head,
      ["title", {}, headTitle],
      ["meta", { name: "description", content: description }]
    ];
    return dedupeHead(head);
  },
  /**
   * Resolve the content of page head title
   *
   * It would be used as the content of the `<title>` tag
   */
  resolvePageHeadTitle: (page, siteLocale) => [page.title, siteLocale.title].filter((item) => !!item).join(" | "),
  /**
   * Resolve page language from page data
   *
   * It would be used as the `lang` attribute of `<html>` tag
   */
  resolvePageLang: (page, siteLocale) => page.lang || siteLocale.lang || "en-US",
  /**
   * Resolve layout component of current page
   */
  resolvePageLayout: (page, layouts) => {
    let layoutName;
    if (page.path) {
      const frontmatterLayout = page.frontmatter.layout;
      if (isString(frontmatterLayout)) {
        layoutName = frontmatterLayout;
      } else {
        layoutName = LAYOUT_NAME_DEFAULT;
      }
    } else {
      layoutName = LAYOUT_NAME_NOT_FOUND;
    }
    return layouts[layoutName];
  },
  /**
   * Resolve locale path according to route path and locales config
   */
  resolveRouteLocale: (locales2, routePath) => resolveLocalePath(locales2, routePath),
  /**
   * Resolve site data for specific locale
   *
   * It would merge the locales fields to the root fields
   */
  resolveSiteLocaleData: (site, routeLocale) => ({
    ...site,
    ...site.locales[routeLocale]
  })
});
var ClientOnly = defineComponent({
  name: "ClientOnly",
  setup(_, ctx) {
    const isMounted = ref(false);
    onMounted(() => {
      isMounted.value = true;
    });
    return () => {
      var _a2, _b;
      return isMounted.value ? (_b = (_a2 = ctx.slots).default) == null ? void 0 : _b.call(_a2) : null;
    };
  }
});
var Content = defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Content",
  props: {
    pageKey: {
      type: String,
      required: false,
      default: ""
    }
  },
  setup(props) {
    const page = usePageData();
    const pageComponent = computed(
      () => pagesComponents[props.pageKey || page.value.key]
    );
    return () => pageComponent.value ? (
      // use page component
      h(pageComponent.value)
    ) : (
      // fallback content
      h(
        "div",
        "404 Not Found"
      )
    );
  }
});
var defineClientConfig = (clientConfig = {}) => clientConfig;
var withBase = (url) => {
  if (isLinkHttp(url))
    return url;
  return `${"/learn-notes/"}${removeLeadingSlash(url)}`;
};
const clientConfig0 = defineClientConfig({
  setup() {
    return;
  }
});
const getScrollTop = () => window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
const vars$3 = "";
const backToTop = "";
const BackToTop = defineComponent({
  name: "BackToTop",
  setup() {
    const scrollTop = ref(0);
    const show = computed(() => scrollTop.value > 300);
    const onScroll = debounce(() => {
      scrollTop.value = getScrollTop();
    }, 100);
    onMounted(() => {
      scrollTop.value = getScrollTop();
      window.addEventListener("scroll", () => onScroll());
    });
    const backToTopEl = h("div", { class: "back-to-top", onClick: scrollToTop });
    return () => h(Transition, {
      name: "back-to-top"
    }, () => show.value ? backToTopEl : null);
  }
});
const clientConfig1 = defineClientConfig({
  rootComponents: [BackToTop]
});
const vars$2 = "";
const externalLinkIcon = "";
const svg = h("svg", {
  "class": "external-link-icon",
  "xmlns": "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  "focusable": "false",
  "x": "0px",
  "y": "0px",
  "viewBox": "0 0 100 100",
  "width": "15",
  "height": "15"
}, [
  h("path", {
    fill: "currentColor",
    d: "M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
  }),
  h("polygon", {
    fill: "currentColor",
    points: "45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
  })
]);
const ExternalLinkIcon = defineComponent({
  name: "ExternalLinkIcon",
  props: {
    locales: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  setup(props) {
    const routeLocale = useRouteLocale();
    const locale = computed(() => props.locales[routeLocale.value] ?? {
      openInNewWindow: "open in new window"
    });
    return () => h("span", [
      svg,
      h("span", {
        class: "external-link-icon-sr-only"
      }, locale.value.openInNewWindow)
    ]);
  }
});
const locales = { "/": { "openInNewWindow": "open in new window" } };
const clientConfig2 = defineClientConfig({
  enhance({ app }) {
    app.component("ExternalLinkIcon", h(ExternalLinkIcon, { locales }));
  }
});
const vars$1 = "";
const mediumZoom = "";
const clientConfig3 = defineClientConfig({
  enhance({ app, router }) {
    return;
  }
});
/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT
 */
const nprogress$1 = {
  settings: {
    minimum: 0.08,
    easing: "ease",
    speed: 200,
    trickle: true,
    trickleRate: 0.02,
    trickleSpeed: 800,
    barSelector: '[role="bar"]',
    parent: "body",
    template: '<div class="bar" role="bar"></div>'
  },
  status: null,
  set: (n2) => {
    const started = nprogress$1.isStarted();
    n2 = clamp(n2, nprogress$1.settings.minimum, 1);
    nprogress$1.status = n2 === 1 ? null : n2;
    const progress = nprogress$1.render(!started);
    const bar = progress.querySelector(nprogress$1.settings.barSelector);
    const speed = nprogress$1.settings.speed;
    const ease = nprogress$1.settings.easing;
    progress.offsetWidth;
    queue((next) => {
      css(bar, {
        transform: "translate3d(" + toBarPerc(n2) + "%,0,0)",
        transition: "all " + speed + "ms " + ease
      });
      if (n2 === 1) {
        css(progress, {
          transition: "none",
          opacity: "1"
        });
        progress.offsetWidth;
        setTimeout(function() {
          css(progress, {
            transition: "all " + speed + "ms linear",
            opacity: "0"
          });
          setTimeout(function() {
            nprogress$1.remove();
            next();
          }, speed);
        }, speed);
      } else {
        setTimeout(() => next(), speed);
      }
    });
    return nprogress$1;
  },
  isStarted: () => typeof nprogress$1.status === "number",
  start: () => {
    if (!nprogress$1.status)
      nprogress$1.set(0);
    const work = () => {
      setTimeout(() => {
        if (!nprogress$1.status)
          return;
        nprogress$1.trickle();
        work();
      }, nprogress$1.settings.trickleSpeed);
    };
    if (nprogress$1.settings.trickle)
      work();
    return nprogress$1;
  },
  done: (force) => {
    if (!force && !nprogress$1.status)
      return nprogress$1;
    return nprogress$1.inc(0.3 + 0.5 * Math.random()).set(1);
  },
  inc: (amount) => {
    let n2 = nprogress$1.status;
    if (!n2) {
      return nprogress$1.start();
    }
    if (typeof amount !== "number") {
      amount = (1 - n2) * clamp(Math.random() * n2, 0.1, 0.95);
    }
    n2 = clamp(n2 + amount, 0, 0.994);
    return nprogress$1.set(n2);
  },
  trickle: () => nprogress$1.inc(Math.random() * nprogress$1.settings.trickleRate),
  render: (fromStart) => {
    if (nprogress$1.isRendered()) {
      return document.getElementById("nprogress");
    }
    addClass(document.documentElement, "nprogress-busy");
    const progress = document.createElement("div");
    progress.id = "nprogress";
    progress.innerHTML = nprogress$1.settings.template;
    const bar = progress.querySelector(nprogress$1.settings.barSelector);
    const perc = fromStart ? "-100" : toBarPerc(nprogress$1.status || 0);
    const parent = document.querySelector(nprogress$1.settings.parent);
    css(bar, {
      transition: "all 0 linear",
      transform: "translate3d(" + perc + "%,0,0)"
    });
    if (parent !== document.body) {
      addClass(parent, "nprogress-custom-parent");
    }
    parent == null ? void 0 : parent.appendChild(progress);
    return progress;
  },
  remove: () => {
    removeClass(document.documentElement, "nprogress-busy");
    removeClass(document.querySelector(nprogress$1.settings.parent), "nprogress-custom-parent");
    const progress = document.getElementById("nprogress");
    progress && removeElement(progress);
  },
  isRendered: () => !!document.getElementById("nprogress")
};
const clamp = (n2, min, max) => {
  if (n2 < min)
    return min;
  if (n2 > max)
    return max;
  return n2;
};
const toBarPerc = (n2) => (-1 + n2) * 100;
const queue = function() {
  const pending = [];
  function next() {
    const fn = pending.shift();
    if (fn) {
      fn(next);
    }
  }
  return function(fn) {
    pending.push(fn);
    if (pending.length === 1)
      next();
  };
}();
const css = function() {
  const cssPrefixes = ["Webkit", "O", "Moz", "ms"];
  const cssProps = {};
  function camelCase(string) {
    return string.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(match, letter) {
      return letter.toUpperCase();
    });
  }
  function getVendorProp(name) {
    const style = document.body.style;
    if (name in style)
      return name;
    let i = cssPrefixes.length;
    const capName = name.charAt(0).toUpperCase() + name.slice(1);
    let vendorName;
    while (i--) {
      vendorName = cssPrefixes[i] + capName;
      if (vendorName in style)
        return vendorName;
    }
    return name;
  }
  function getStyleProp(name) {
    name = camelCase(name);
    return cssProps[name] ?? (cssProps[name] = getVendorProp(name));
  }
  function applyCss(element, prop, value) {
    prop = getStyleProp(prop);
    element.style[prop] = value;
  }
  return function(element, properties) {
    for (const prop in properties) {
      const value = properties[prop];
      if (value !== void 0 && Object.prototype.hasOwnProperty.call(properties, prop))
        applyCss(element, prop, value);
    }
  };
}();
const hasClass = (element, name) => {
  const list = typeof element === "string" ? element : classList(element);
  return list.indexOf(" " + name + " ") >= 0;
};
const addClass = (element, name) => {
  const oldList = classList(element);
  const newList = oldList + name;
  if (hasClass(oldList, name))
    return;
  element.className = newList.substring(1);
};
const removeClass = (element, name) => {
  const oldList = classList(element);
  if (!hasClass(element, name))
    return;
  const newList = oldList.replace(" " + name + " ", " ");
  element.className = newList.substring(1, newList.length - 1);
};
const classList = (element) => {
  return (" " + (element.className || "") + " ").replace(/\s+/gi, " ");
};
const removeElement = (element) => {
  element && element.parentNode && element.parentNode.removeChild(element);
};
const vars = "";
const nprogress = "";
const useNprogress = () => {
  onMounted(() => {
    const router = useRouter();
    const loadedPages = /* @__PURE__ */ new Set();
    loadedPages.add(router.currentRoute.value.path);
    router.beforeEach((to) => {
      if (!loadedPages.has(to.path)) {
        nprogress$1.start();
      }
    });
    router.afterEach((to) => {
      loadedPages.add(to.path);
      nprogress$1.done();
    });
  });
};
const clientConfig4 = defineClientConfig({
  setup() {
    useNprogress();
  }
});
const themeData$1 = JSON.parse(`{"logo":"/img/logo.jpg","sidebarType":"right","navbar":[{"text":"首页","link":"/nav/list.md"},{"text":"JS","children":[{"text":"TS入门学习记录","link":"/js/base-ts.md"},{"text":"TS 使用指南","link":"/ts/readonly.md"}]},{"text":"前端框架","children":[{"text":"vue3","link":"/vue/v2-v3.md"},{"text":"vue3设计与实现","link":"/vue/devise-realization.md"},{"text":"react系统知识梳理","link":"/react/contrast.md"}]},{"text":"构建工具","children":[{"text":"webpack","link":"https://xxpromise.gitee.io/webpack5-docs/"}]},{"text":"常用工具","children":[{"text":"前端学习常用网站","link":"/tools/tl-list.md"},{"text":"工作中常用工具网站","link":"/tools/user-tools.md"}]},{"text":"浏览器","link":"/browser/01.md","children":[{"text":"浏览器原理(极客时间)","link":"/browser/01.md"},{"text":"V8原理(极客时间)","link":"/v8/01.md"}]},{"text":"github","link":"https://github.com/sanlangguo/learn-notes"}],"sidebar":{"/tools/":[{"text":"常用工具","link":"/tools/tl-list.md"}],"/js/":[{"text":"TS入门学习记录","link":"/js/base-ts.md"}],"/ts/":[{"text":"TS API 使用指南","children":[{"text":"readonly","link":"/ts/readonly.md"},{"text":"pick","link":"/ts/pick.md"},{"text":"type 和 interface 区别","link":"/ts/type.md"},{"text":"Exclude","link":"/ts/Exclude.md"},{"text":"Omit","link":"/ts/Omit.md"},{"text":"AppendArgument","link":"/ts/AppendArgument.md"},{"text":"Combination","link":"/ts/Combination.md"},{"text":"合并Concat","link":"/ts/Concat.md"}]}],"/browser/":[{"text":"浏览器原理学习笔记","children":[{"text":"仅仅打开了1个页面，为什么有4个进程","link":"/browser/01.md"},{"text":"如何保证页面文件能被完整送达浏览器","link":"/browser/02.md"},{"text":"为什么很多站点第二次打开速度会很快","link":"/browser/03.md"},{"text":"从输入URL到页面展示，这中间发生了什么","link":"/browser/04.md"},{"text":"渲染流程（上）：HTML、CSS和JavaScript，是如何变成页面的","link":"/browser/05.md"},{"text":"渲染流程（下）：HTML、CSS和JavaScript，是如何变成页面的","link":"/browser/06.md"},{"text":"变量提升：JavaScript代码是按顺序执行的吗","link":"/browser/07.md"},{"text":"调用栈：为什么JavaScript代码会出现栈溢出","link":"/browser/08.md"},{"text":"块级作用域：var缺陷以及为什么要引入let和const","link":"/browser/09.md"},{"text":"作用域链和闭包：代码中出现相同的变量，JavaScript引擎是如何选择的","link":"/browser/10.md"},{"text":"this：从JavaScript执行上下文的视角讲清楚this","link":"/browser/11.md"},{"text":"栈空间和堆空间：数据是如何存储的","link":"/browser/12.md"},{"text":"垃圾回收：垃圾数据是如何自动回收的","link":"/browser/13.md"},{"text":"编译器和解释器：V8是如何执行一段JavaScript代码的","link":"/browser/14.md"},{"text":"消息队列和事件循环：页面是怎么“活”起来的","link":"/browser/15.md"},{"text":"WebAPI：setTimeout是如何实现的","link":"/browser/16.md"},{"text":"WebAPI：XMLHttpRequest是怎么实现的","link":"/browser/17.md"},{"text":"宏任务和微任务：不是所有任务都是一个待遇","link":"/browser/18.md"},{"text":"Promise：使用Promise，告别回调函数","link":"/browser/19.md"},{"text":"async-await：使用同步的方式去写异步代码","link":"/browser/20.md"},{"text":"Chrome开发者工具：利用网络面板做性能分析","link":"/browser/21.md"},{"text":"DOM树：JavaScript是如何影响DOM树构建的","link":"/browser/22.md"},{"text":"渲染流水线：CSS如何影响首次加载时的白屏时间","link":"/browser/23.md"},{"text":"分层和合成机制：为什么CSS动画比JavaScript高效","link":"/browser/24.md"},{"text":"页面性能：如何系统地优化页面","link":"/browser/25.md"},{"text":"虚拟DOM：虚拟DOM和实际的DOM有何不同","link":"/browser/26.md"},{"text":"渐进式网页应用（PWA）：它究竟解决了Web应用的哪些问题","link":"/browser/27.md"},{"text":"WebComponent：像搭积木一样构建Web应用","link":"/browser/28.md"},{"text":"HTTP1：HTTP性能优化","link":"/browser/29.md"},{"text":"HTTP2：如何提升网络速度","link":"/browser/30.md"},{"text":"HTTP3：甩掉TCP、TLS的包袱，构建高效网络","link":"/browser/31.md"},{"text":"同源策略：为什么XMLHttpRequest不能跨域请求资源","link":"/browser/32.md"},{"text":"跨站脚本攻击（XSS）：为什么Cookie中有HttpOnly属性","link":"/browser/33.md"},{"text":"CSRF攻击：陌生链接不要随便点","link":"/browser/34.md"},{"text":"安全沙箱：页面和系统之间的隔离墙","link":"/browser/35.md"},{"text":"HTTPS：让数据传输更安全","link":"/browser/36.md"}]}],"/v8/":[{"text":"v8学习笔记","children":[{"text":"V8是如何执行一段JavaScript代码的","link":"/v8/01.md"},{"text":"函数即对象：一篇文章彻底搞懂JavaScript的函数特点","link":"/v8/02.md"},{"text":"快属性和慢属性：V8是怎样提升对象属性访问速度的","link":"/v8/03.md"},{"text":"函数表达式：涉及大量概念，函数表达式到底该怎么学","link":"/v8/04.md"},{"text":"原型链：V8是如何实现对象继承的","link":"/v8/05.md"},{"text":"作用域链：V8是如何查找变量的","link":"/v8/06.md"},{"text":"类型转换：V8是怎么实现1-“2”的","link":"/v8/07.md"},{"text":"如何构建和使用V8的调试工具d8","link":"/v8/08.md"},{"text":"运行时环境：运行JavaScript代码的基石","link":"/v8/09.md"},{"text":"机器代码：二进制机器码究竟是如何被CPU执行的","link":"/v8/10.md"},{"text":"堆和栈：函数调用是如何影响到内存布局的","link":"/v8/11.md"},{"text":"延迟解析：V8是如何实现闭包的","link":"/v8/12.md"},{"text":"字节码（一）：V8为什么又重新引入字节码","link":"/v8/13.md"},{"text":"字节码（二）：解释器是如何解释执行字节码的","link":"/v8/14.md"},{"text":"隐藏类：如何在内存中快速查找对象属性","link":"/v8/15.md"},{"text":"V8是怎么通过内联缓存来提升函数执行效率的","link":"/v8/16.md"},{"text":"消息队列：V8是怎么实现回调函数的","link":"/v8/17.md"},{"text":"异步编程（一）：V8是如何实现微任务的","link":"/v8/18.md"},{"text":"异步编程（二）：V8是如何实现async-await的","link":"/v8/19.md"},{"text":"垃圾回收（一）：V8的两个垃圾回收器是如何工作的","link":"/v8/20.md"},{"text":"垃圾回收（二）：V8是如何优化垃圾回收器执行效率的","link":"/v8/21.md"},{"text":"几种常见内存问题的解决策略","link":"/v8/22.md"},{"text":"前端学习踩坑史","link":"/v8/23.md"}]}]},"locales":{"/":{"selectLanguageName":"English"}},"colorMode":"auto","colorModeSwitch":true,"repo":null,"selectLanguageText":"Languages","selectLanguageAriaLabel":"Select language","sidebarDepth":2,"editLink":true,"editLinkText":"Edit this page","lastUpdated":true,"lastUpdatedText":"Last Updated","contributors":true,"contributorsText":"Contributors","notFound":["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."],"backToHome":"Take me home","openInNewWindow":"open in new window","toggleColorMode":"toggle color mode","toggleSidebar":"toggle sidebar"}`);
const themeData = ref(themeData$1);
const useThemeData$1 = () => themeData;
const themeLocaleDataSymbol = Symbol("");
const useThemeLocaleData$1 = () => {
  const themeLocaleData = inject(themeLocaleDataSymbol);
  if (!themeLocaleData) {
    throw new Error("useThemeLocaleData() is called without provider.");
  }
  return themeLocaleData;
};
const resolveThemeLocaleData = (theme, routeLocale) => {
  const { locales: locales2, ...baseOptions } = theme;
  return {
    ...baseOptions,
    ...locales2 == null ? void 0 : locales2[routeLocale]
  };
};
const clientConfig5 = defineClientConfig({
  enhance({ app }) {
    const themeData2 = useThemeData$1();
    const routeLocale = app._context.provides[routeLocaleSymbol];
    const themeLocaleData = computed(() => resolveThemeLocaleData(themeData2.value, routeLocale.value));
    app.provide(themeLocaleDataSymbol, themeLocaleData);
    Object.defineProperties(app.config.globalProperties, {
      $theme: {
        get() {
          return themeData2.value;
        }
      },
      $themeLocale: {
        get() {
          return themeLocaleData.value;
        }
      }
    });
  }
});
const _sfc_main$o = /* @__PURE__ */ defineComponent({
  __name: "Badge",
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      required: false,
      default: "tip"
    },
    text: {
      type: String,
      required: false,
      default: ""
    },
    vertical: {
      type: String,
      required: false,
      default: void 0
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({
        class: ["badge", __props.type],
        style: {
          verticalAlign: __props.vertical
        }
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        _push(`${ssrInterpolate(__props.text)}`);
      }, _push, _parent);
      _push(`</span>`);
    };
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/global/Badge.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const Badge = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["__file", "Badge.vue"]]);
const CodeGroup = defineComponent({
  name: "CodeGroup",
  slots: Object,
  setup(_, { slots }) {
    const activeIndex = ref(-1);
    const tabRefs = ref([]);
    const activateNext = (i = activeIndex.value) => {
      if (i < tabRefs.value.length - 1) {
        activeIndex.value = i + 1;
      } else {
        activeIndex.value = 0;
      }
      tabRefs.value[activeIndex.value].focus();
    };
    const activatePrev = (i = activeIndex.value) => {
      if (i > 0) {
        activeIndex.value = i - 1;
      } else {
        activeIndex.value = tabRefs.value.length - 1;
      }
      tabRefs.value[activeIndex.value].focus();
    };
    const keyboardHandler = (event, i) => {
      if (event.key === " " || event.key === "Enter") {
        event.preventDefault();
        activeIndex.value = i;
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        activateNext(i);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        activatePrev(i);
      }
    };
    return () => {
      var _a2;
      const items = (((_a2 = slots.default) == null ? void 0 : _a2.call(slots)) || []).filter((vnode) => vnode.type.name === "CodeGroupItem").map((vnode) => {
        if (vnode.props === null) {
          vnode.props = {};
        }
        return vnode;
      });
      if (items.length === 0) {
        return null;
      }
      if (activeIndex.value < 0 || activeIndex.value > items.length - 1) {
        activeIndex.value = items.findIndex((vnode) => vnode.props.active === "" || vnode.props.active === true);
        if (activeIndex.value === -1) {
          activeIndex.value = 0;
        }
      } else {
        items.forEach((vnode, i) => {
          vnode.props.active = i === activeIndex.value;
        });
      }
      return h("div", { class: "code-group" }, [
        h("div", { class: "code-group__nav" }, h("ul", { class: "code-group__ul" }, items.map((vnode, i) => {
          const isActive = i === activeIndex.value;
          return h("li", { class: "code-group__li" }, h("button", {
            ref: (element) => {
              if (element) {
                tabRefs.value[i] = element;
              }
            },
            class: {
              "code-group__nav-tab": true,
              "code-group__nav-tab-active": isActive
            },
            ariaPressed: isActive,
            ariaExpanded: isActive,
            onClick: () => activeIndex.value = i,
            onKeydown: (e) => keyboardHandler(e, i)
          }, vnode.props.title));
        }))),
        items
      ]);
    };
  }
});
const __default__$1 = defineComponent({
  name: "CodeGroupItem"
});
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["code-group-item", { "code-group-item__active": __props.active }],
        "aria-selected": __props.active
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/global/CodeGroupItem.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const CodeGroupItem = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["__file", "CodeGroupItem.vue"]]);
const useThemeData = () => useThemeData$1();
const useThemeLocaleData = () => useThemeLocaleData$1();
const darkModeSymbol = Symbol("");
const useDarkMode = () => {
  const isDarkMode = inject(darkModeSymbol);
  if (!isDarkMode) {
    throw new Error("useDarkMode() is called without provider.");
  }
  return isDarkMode;
};
const setupDarkMode = () => {
  const themeLocale = useThemeLocaleData();
  const isDarkPreferred = usePreferredDark();
  const darkStorage = useStorage("vuepress-color-scheme", themeLocale.value.colorMode);
  const isDarkMode = computed({
    get() {
      if (!themeLocale.value.colorModeSwitch) {
        return themeLocale.value.colorMode === "dark";
      }
      if (darkStorage.value === "auto") {
        return isDarkPreferred.value;
      }
      return darkStorage.value === "dark";
    },
    set(val) {
      if (val === isDarkPreferred.value) {
        darkStorage.value = "auto";
      } else {
        darkStorage.value = val ? "dark" : "light";
      }
    }
  });
  provide(darkModeSymbol, isDarkMode);
  updateHtmlDarkClass(isDarkMode);
};
const updateHtmlDarkClass = (isDarkMode) => {
  const update = (value = isDarkMode.value) => {
    const htmlEl = window == null ? void 0 : window.document.querySelector("html");
    htmlEl == null ? void 0 : htmlEl.classList.toggle("dark", value);
  };
  onMounted(() => {
    watch(isDarkMode, update, { immediate: true });
  });
  onUnmounted(() => update());
};
const useResolveRouteWithRedirect = (...args) => {
  const router = useRouter();
  const route = router.resolve(...args);
  const lastMatched = route.matched[route.matched.length - 1];
  if (!(lastMatched == null ? void 0 : lastMatched.redirect)) {
    return route;
  }
  const { redirect } = lastMatched;
  const resolvedRedirect = isFunction(redirect) ? redirect(route) : redirect;
  const resolvedRedirectObj = isString(resolvedRedirect) ? { path: resolvedRedirect } : resolvedRedirect;
  return useResolveRouteWithRedirect({
    hash: route.hash,
    query: route.query,
    params: route.params,
    ...resolvedRedirectObj
  });
};
const useNavLink = (item) => {
  const resolved = useResolveRouteWithRedirect(encodeURI(item));
  return {
    text: resolved.meta.title || item,
    link: resolved.name === "404" ? item : resolved.fullPath
  };
};
let promise = null;
let promiseResolve = null;
const scrollPromise = {
  wait: () => promise,
  pending: () => {
    promise = new Promise((resolve) => promiseResolve = resolve);
  },
  resolve: () => {
    promiseResolve == null ? void 0 : promiseResolve();
    promise = null;
    promiseResolve = null;
  }
};
const useScrollPromise = () => scrollPromise;
const sidebarItemsSymbol = Symbol("sidebarItems");
const useSidebarItems = () => {
  const sidebarItems = inject(sidebarItemsSymbol);
  if (!sidebarItems) {
    throw new Error("useSidebarItems() is called without provider.");
  }
  return sidebarItems;
};
const setupSidebarItems = () => {
  const themeLocale = useThemeLocaleData();
  const frontmatter = usePageFrontmatter();
  const sidebarItems = computed(() => resolveSidebarItems(frontmatter.value, themeLocale.value));
  provide(sidebarItemsSymbol, sidebarItems);
};
const resolveSidebarItems = (frontmatter, themeLocale) => {
  const sidebarConfig = frontmatter.sidebar ?? themeLocale.sidebar ?? "auto";
  const sidebarDepth = frontmatter.sidebarDepth ?? themeLocale.sidebarDepth ?? 2;
  if (frontmatter.home || sidebarConfig === false) {
    return [];
  }
  if (sidebarConfig === "auto") {
    return resolveAutoSidebarItems(sidebarDepth);
  }
  if (isArray(sidebarConfig)) {
    return resolveArraySidebarItems(sidebarConfig, sidebarDepth);
  }
  if (isPlainObject(sidebarConfig)) {
    return resolveMultiSidebarItems(sidebarConfig, sidebarDepth);
  }
  return [];
};
const headerToSidebarItem = (header, sidebarDepth) => ({
  text: header.title,
  link: header.link,
  children: headersToSidebarItemChildren(header.children, sidebarDepth)
});
const headersToSidebarItemChildren = (headers, sidebarDepth) => sidebarDepth > 0 ? headers.map((header) => headerToSidebarItem(header, sidebarDepth - 1)) : [];
const resolveAutoSidebarItems = (sidebarDepth) => {
  const page = usePageData();
  return [
    {
      text: page.value.title,
      children: headersToSidebarItemChildren(page.value.headers, sidebarDepth)
    }
  ];
};
const resolveArraySidebarItems = (sidebarConfig, sidebarDepth) => {
  const route = useRoute();
  const page = usePageData();
  const handleChildItem = (item) => {
    var _a2;
    let childItem;
    if (isString(item)) {
      childItem = useNavLink(item);
    } else {
      childItem = item;
    }
    if (childItem.children) {
      return {
        ...childItem,
        children: childItem.children.map((item2) => handleChildItem(item2))
      };
    }
    if (childItem.link === route.path) {
      const headers = ((_a2 = page.value.headers[0]) == null ? void 0 : _a2.level) === 1 ? page.value.headers[0].children : page.value.headers;
      return {
        ...childItem,
        children: headersToSidebarItemChildren(headers, sidebarDepth)
      };
    }
    return childItem;
  };
  return sidebarConfig.map((item) => handleChildItem(item));
};
const resolveMultiSidebarItems = (sidebarConfig, sidebarDepth) => {
  const route = useRoute();
  const sidebarPath = resolveLocalePath(sidebarConfig, route.path);
  const matchedSidebarConfig = sidebarConfig[sidebarPath] ?? [];
  return resolveArraySidebarItems(matchedSidebarConfig, sidebarDepth);
};
const mobile = "719px";
const cssVars = {
  mobile
};
var DeviceType;
(function(DeviceType2) {
  DeviceType2["MOBILE"] = "mobile";
})(DeviceType || (DeviceType = {}));
const DeviceTypeMap = {
  [DeviceType.MOBILE]: Number.parseInt((_a = cssVars.mobile) == null ? void 0 : _a.replace("px", ""), 10)
};
const useUpdateDeviceStatus = (deviceType, callback) => {
  const width = DeviceTypeMap[deviceType];
  if (!Number.isInteger(width)) {
    return;
  }
  onMounted(() => {
    callback(width);
    window.addEventListener("resize", () => callback(width), false);
    window.addEventListener("orientationchange", () => callback(width), false);
  });
};
const _sfc_main$m = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Content = resolveComponent("Content");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "theme-default-content" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Content, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/HomeContent.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const HomeContent = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["ssrRender", _sfc_ssrRender], ["__file", "HomeContent.vue"]]);
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "HomeFeatures",
  __ssrInlineRender: true,
  setup(__props) {
    const frontmatter = usePageFrontmatter();
    const features = computed(() => {
      if (isArray(frontmatter.value.features)) {
        return frontmatter.value.features;
      }
      return [];
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (features.value.length) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "features" }, _attrs))}><!--[-->`);
        ssrRenderList(features.value, (feature) => {
          _push(`<div class="feature"><h2>${ssrInterpolate(feature.title)}</h2><p>${ssrInterpolate(feature.details)}</p></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/HomeFeatures.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const HomeFeatures = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["__file", "HomeFeatures.vue"]]);
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "HomeFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const frontmatter = usePageFrontmatter();
    const footer = computed(() => frontmatter.value.footer);
    const footerHtml = computed(() => frontmatter.value.footerHtml);
    return (_ctx, _push, _parent, _attrs) => {
      if (footer.value) {
        _push(`<!--[--><!-- eslint-disable-next-line vue/no-v-html -->`);
        if (footerHtml.value) {
          _push(`<div class="footer">${footer.value}</div>`);
        } else {
          _push(`<div class="footer">${ssrInterpolate(footer.value)}</div>`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/HomeFooter.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const HomeFooter = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__file", "HomeFooter.vue"]]);
const __default__ = defineComponent({
  inheritAttrs: false
});
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "AutoLink",
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const route = useRoute();
    const site = useSiteData();
    const { item } = toRefs(props);
    const hasHttpProtocol = computed(() => isLinkHttp(item.value.link));
    const hasNonHttpProtocol = computed(
      () => isLinkMailto(item.value.link) || isLinkTel(item.value.link)
    );
    const linkTarget = computed(() => {
      if (hasNonHttpProtocol.value)
        return void 0;
      if (item.value.target)
        return item.value.target;
      if (hasHttpProtocol.value)
        return "_blank";
      return void 0;
    });
    const isBlankTarget = computed(() => linkTarget.value === "_blank");
    const isRouterLink = computed(
      () => !hasHttpProtocol.value && !hasNonHttpProtocol.value && !isBlankTarget.value
    );
    const linkRel = computed(() => {
      if (hasNonHttpProtocol.value)
        return void 0;
      if (item.value.rel)
        return item.value.rel;
      if (isBlankTarget.value)
        return "noopener noreferrer";
      return void 0;
    });
    const linkAriaLabel = computed(() => item.value.ariaLabel || item.value.text);
    const shouldBeActiveInSubpath = computed(() => {
      const localeKeys = Object.keys(site.value.locales);
      if (localeKeys.length) {
        return !localeKeys.some((key) => key === item.value.link);
      }
      return item.value.link !== "/";
    });
    const isActiveInSubpath = computed(() => {
      if (!shouldBeActiveInSubpath.value) {
        return false;
      }
      return route.path.startsWith(item.value.link);
    });
    const isActive = computed(() => {
      if (!isRouterLink.value) {
        return false;
      }
      if (item.value.activeMatch) {
        return new RegExp(item.value.activeMatch).test(route.path);
      }
      return isActiveInSubpath.value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_AutoLinkExternalIcon = resolveComponent("AutoLinkExternalIcon");
      if (isRouterLink.value) {
        _push(ssrRenderComponent(_component_RouterLink, mergeProps({
          class: { "router-link-active": isActive.value },
          to: unref(item).link,
          "aria-label": linkAriaLabel.value
        }, _ctx.$attrs, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "before", {}, null, _push2, _parent2, _scopeId);
              _push2(` ${ssrInterpolate(unref(item).text)} `);
              ssrRenderSlot(_ctx.$slots, "after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "before"),
                createTextVNode(
                  " " + toDisplayString(unref(item).text) + " ",
                  1
                  /* TEXT */
                ),
                renderSlot(_ctx.$slots, "after")
              ];
            }
          }),
          _: 3
          /* FORWARDED */
        }, _parent));
      } else {
        _push(`<a${ssrRenderAttrs(mergeProps({
          class: "external-link",
          href: unref(item).link,
          rel: linkRel.value,
          target: linkTarget.value,
          "aria-label": linkAriaLabel.value
        }, _ctx.$attrs, _attrs))}>`);
        ssrRenderSlot(_ctx.$slots, "before", {}, null, _push, _parent);
        _push(` ${ssrInterpolate(unref(item).text)} `);
        if (isBlankTarget.value) {
          _push(ssrRenderComponent(_component_AutoLinkExternalIcon, null, null, _parent));
        } else {
          _push(`<!---->`);
        }
        ssrRenderSlot(_ctx.$slots, "after", {}, null, _push, _parent);
        _push(`</a>`);
      }
    };
  }
});
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/AutoLink.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const AutoLink = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["__file", "AutoLink.vue"]]);
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "HomeHero",
  __ssrInlineRender: true,
  setup(__props) {
    const frontmatter = usePageFrontmatter();
    const siteLocale = useSiteLocaleData();
    const isDarkMode = useDarkMode();
    const heroImage = computed(() => {
      if (isDarkMode.value && frontmatter.value.heroImageDark !== void 0) {
        return frontmatter.value.heroImageDark;
      }
      return frontmatter.value.heroImage;
    });
    const heroAlt = computed(
      () => frontmatter.value.heroAlt || heroText.value || "hero"
    );
    const heroHeight = computed(() => frontmatter.value.heroHeight || 280);
    const heroText = computed(() => {
      if (frontmatter.value.heroText === null) {
        return null;
      }
      return frontmatter.value.heroText || siteLocale.value.title || "Hello";
    });
    const tagline = computed(() => {
      if (frontmatter.value.tagline === null) {
        return null;
      }
      return frontmatter.value.tagline || siteLocale.value.description || "Welcome to your VuePress site";
    });
    const actions = computed(() => {
      if (!isArray(frontmatter.value.actions)) {
        return [];
      }
      return frontmatter.value.actions.map(({ text, link, type = "primary" }) => ({
        text,
        link,
        type
      }));
    });
    const HomeHeroImage = () => {
      if (!heroImage.value)
        return null;
      const img = h("img", {
        src: withBase(heroImage.value),
        alt: heroAlt.value,
        height: heroHeight.value
      });
      if (frontmatter.value.heroImageDark === void 0) {
        return img;
      }
      return h(ClientOnly, () => img);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "hero" }, _attrs))}>`);
      _push(ssrRenderComponent(HomeHeroImage, null, null, _parent));
      if (heroText.value) {
        _push(`<h1 id="main-title">${ssrInterpolate(heroText.value)}</h1>`);
      } else {
        _push(`<!---->`);
      }
      if (tagline.value) {
        _push(`<p class="description">${ssrInterpolate(tagline.value)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (actions.value.length) {
        _push(`<p class="actions"><!--[-->`);
        ssrRenderList(actions.value, (action) => {
          _push(ssrRenderComponent(AutoLink, {
            key: action.text,
            class: ["action-button", [action.type]],
            item: action
          }, null, _parent));
        });
        _push(`<!--]--></p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header>`);
    };
  }
});
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/HomeHero.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const HomeHero = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__file", "HomeHero.vue"]]);
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "Home",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "home" }, _attrs))}>`);
      _push(ssrRenderComponent(HomeHero, null, null, _parent));
      _push(ssrRenderComponent(HomeFeatures, null, null, _parent));
      _push(ssrRenderComponent(HomeContent, null, null, _parent));
      _push(ssrRenderComponent(HomeFooter, null, null, _parent));
      _push(`</main>`);
    };
  }
});
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/Home.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const Home = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__file", "Home.vue"]]);
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "NavbarBrand",
  __ssrInlineRender: true,
  setup(__props) {
    const routeLocale = useRouteLocale();
    const siteLocale = useSiteLocaleData();
    const themeLocale = useThemeLocaleData();
    const isDarkMode = useDarkMode();
    const navbarBrandLink = computed(
      () => themeLocale.value.home || routeLocale.value
    );
    const navbarBrandTitle = computed(() => siteLocale.value.title);
    const navbarBrandLogo = computed(() => {
      if (isDarkMode.value && themeLocale.value.logoDark !== void 0) {
        return themeLocale.value.logoDark;
      }
      return themeLocale.value.logo;
    });
    const NavbarBrandLogo = () => {
      if (!navbarBrandLogo.value)
        return null;
      const img = h("img", {
        class: "logo",
        src: withBase(navbarBrandLogo.value),
        alt: navbarBrandTitle.value
      });
      if (themeLocale.value.logoDark === void 0) {
        return img;
      }
      return h(ClientOnly, () => img);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      _push(ssrRenderComponent(_component_RouterLink, mergeProps({ to: navbarBrandLink.value }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(NavbarBrandLogo, null, null, _parent2, _scopeId));
            if (navbarBrandTitle.value) {
              _push2(`<span class="${ssrRenderClass([{ "can-hide": navbarBrandLogo.value }, "site-name"])}"${_scopeId}>${ssrInterpolate(navbarBrandTitle.value)}</span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(NavbarBrandLogo),
              navbarBrandTitle.value ? (openBlock(), createBlock(
                "span",
                {
                  key: 0,
                  class: ["site-name", { "can-hide": navbarBrandLogo.value }]
                },
                toDisplayString(navbarBrandTitle.value),
                3
                /* TEXT, CLASS */
              )) : createCommentVNode("v-if", true)
            ];
          }
        }),
        _: 1
        /* STABLE */
      }, _parent));
    };
  }
});
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/NavbarBrand.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const NavbarBrand = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__file", "NavbarBrand.vue"]]);
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "DropdownTransition",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSlotInner(_ctx.$slots, "default", {}, null, _push, _parent, null, true);
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/DropdownTransition.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const DropdownTransition = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__file", "DropdownTransition.vue"]]);
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "NavbarDropdown",
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const { item } = toRefs(props);
    const dropdownAriaLabel = computed(
      () => item.value.ariaLabel || item.value.text
    );
    const open = ref(false);
    const route = useRoute();
    watch(
      () => route.path,
      () => {
        open.value = false;
      }
    );
    const isLastItemOfArray = (item2, arr) => arr[arr.length - 1] === item2;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["navbar-dropdown-wrapper", { open: open.value }]
      }, _attrs))}><button class="navbar-dropdown-title" type="button"${ssrRenderAttr("aria-label", dropdownAriaLabel.value)}><span class="title">${ssrInterpolate(unref(item).text)}</span><span class="arrow down"></span></button><button class="navbar-dropdown-title-mobile" type="button"${ssrRenderAttr("aria-label", dropdownAriaLabel.value)}><span class="title">${ssrInterpolate(unref(item).text)}</span><span class="${ssrRenderClass([open.value ? "down" : "right", "arrow"])}"></span></button>`);
      _push(ssrRenderComponent(DropdownTransition, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<ul style="${ssrRenderStyle(open.value ? null : { display: "none" })}" class="navbar-dropdown"${_scopeId}><!--[-->`);
            ssrRenderList(unref(item).children, (child) => {
              _push2(`<li class="navbar-dropdown-item"${_scopeId}>`);
              if (child.children) {
                _push2(`<!--[--><h4 class="navbar-dropdown-subtitle"${_scopeId}>`);
                if (child.link) {
                  _push2(ssrRenderComponent(AutoLink, {
                    item: child,
                    onFocusout: ($event) => isLastItemOfArray(child, unref(item).children) && child.children.length === 0 && (open.value = false)
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<span${_scopeId}>${ssrInterpolate(child.text)}</span>`);
                }
                _push2(`</h4><ul class="navbar-dropdown-subitem-wrapper"${_scopeId}><!--[-->`);
                ssrRenderList(child.children, (grandchild) => {
                  _push2(`<li class="navbar-dropdown-subitem"${_scopeId}>`);
                  _push2(ssrRenderComponent(AutoLink, {
                    item: grandchild,
                    onFocusout: ($event) => isLastItemOfArray(grandchild, child.children) && isLastItemOfArray(child, unref(item).children) && (open.value = false)
                  }, null, _parent2, _scopeId));
                  _push2(`</li>`);
                });
                _push2(`<!--]--></ul><!--]-->`);
              } else {
                _push2(ssrRenderComponent(AutoLink, {
                  item: child,
                  onFocusout: ($event) => isLastItemOfArray(child, unref(item).children) && (open.value = false)
                }, null, _parent2, _scopeId));
              }
              _push2(`</li>`);
            });
            _push2(`<!--]--></ul>`);
          } else {
            return [
              withDirectives(createVNode(
                "ul",
                { class: "navbar-dropdown" },
                [
                  (openBlock(true), createBlock(
                    Fragment,
                    null,
                    renderList(unref(item).children, (child) => {
                      return openBlock(), createBlock("li", {
                        key: child.text,
                        class: "navbar-dropdown-item"
                      }, [
                        child.children ? (openBlock(), createBlock(
                          Fragment,
                          { key: 0 },
                          [
                            createVNode("h4", { class: "navbar-dropdown-subtitle" }, [
                              child.link ? (openBlock(), createBlock(AutoLink, {
                                key: 0,
                                item: child,
                                onFocusout: ($event) => isLastItemOfArray(child, unref(item).children) && child.children.length === 0 && (open.value = false)
                              }, null, 8, ["item", "onFocusout"])) : (openBlock(), createBlock(
                                "span",
                                { key: 1 },
                                toDisplayString(child.text),
                                1
                                /* TEXT */
                              ))
                            ]),
                            createVNode("ul", { class: "navbar-dropdown-subitem-wrapper" }, [
                              (openBlock(true), createBlock(
                                Fragment,
                                null,
                                renderList(child.children, (grandchild) => {
                                  return openBlock(), createBlock("li", {
                                    key: grandchild.link,
                                    class: "navbar-dropdown-subitem"
                                  }, [
                                    createVNode(AutoLink, {
                                      item: grandchild,
                                      onFocusout: ($event) => isLastItemOfArray(grandchild, child.children) && isLastItemOfArray(child, unref(item).children) && (open.value = false)
                                    }, null, 8, ["item", "onFocusout"])
                                  ]);
                                }),
                                128
                                /* KEYED_FRAGMENT */
                              ))
                            ])
                          ],
                          64
                          /* STABLE_FRAGMENT */
                        )) : (openBlock(), createBlock(AutoLink, {
                          key: 1,
                          item: child,
                          onFocusout: ($event) => isLastItemOfArray(child, unref(item).children) && (open.value = false)
                        }, null, 8, ["item", "onFocusout"]))
                      ]);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ],
                512
                /* NEED_PATCH */
              ), [
                [vShow, open.value]
              ])
            ];
          }
        }),
        _: 1
        /* STABLE */
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/NavbarDropdown.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const NavbarDropdown = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__file", "NavbarDropdown.vue"]]);
const normalizePath = (path) => decodeURI(path).replace(/#.*$/, "").replace(/(index)?\.(md|html)$/, "");
const isActiveLink = (link, route) => {
  if (route.hash === link) {
    return true;
  }
  const currentPath = normalizePath(route.path);
  const targetPath = normalizePath(link);
  return currentPath === targetPath;
};
const isActiveSidebarItem = (item, route) => {
  if (item.link && isActiveLink(item.link, route)) {
    return true;
  }
  if (item.children) {
    return item.children.some((child) => isActiveSidebarItem(child, route));
  }
  return false;
};
const resolveRepoType = (repo) => {
  if (!isLinkHttp(repo) || /github\.com/.test(repo))
    return "GitHub";
  if (/bitbucket\.org/.test(repo))
    return "Bitbucket";
  if (/gitlab\.com/.test(repo))
    return "GitLab";
  if (/gitee\.com/.test(repo))
    return "Gitee";
  return null;
};
const editLinkPatterns = {
  GitHub: ":repo/edit/:branch/:path",
  GitLab: ":repo/-/edit/:branch/:path",
  Gitee: ":repo/edit/:branch/:path",
  Bitbucket: ":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"
};
const resolveEditLinkPatterns = ({ docsRepo, editLinkPattern }) => {
  if (editLinkPattern) {
    return editLinkPattern;
  }
  const repoType = resolveRepoType(docsRepo);
  if (repoType !== null) {
    return editLinkPatterns[repoType];
  }
  return null;
};
const resolveEditLink = ({ docsRepo, docsBranch, docsDir, filePathRelative, editLinkPattern }) => {
  if (!filePathRelative)
    return null;
  const pattern = resolveEditLinkPatterns({ docsRepo, editLinkPattern });
  if (!pattern)
    return null;
  return pattern.replace(/:repo/, isLinkHttp(docsRepo) ? docsRepo : `https://github.com/${docsRepo}`).replace(/:branch/, docsBranch).replace(/:path/, removeLeadingSlash(`${removeEndingSlash(docsDir)}/${filePathRelative}`));
};
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "NavbarItems",
  __ssrInlineRender: true,
  setup(__props) {
    const useNavbarSelectLanguage = () => {
      const router = useRouter();
      const routeLocale = useRouteLocale();
      const site = useSiteData();
      const siteLocale = useSiteLocaleData();
      const theme = useThemeData();
      const themeLocale = useThemeLocaleData();
      return computed(() => {
        const localePaths = Object.keys(site.value.locales);
        if (localePaths.length < 2) {
          return [];
        }
        const currentPath = router.currentRoute.value.path;
        const currentFullPath = router.currentRoute.value.fullPath;
        const languageDropdown = {
          text: `${themeLocale.value.selectLanguageText}`,
          ariaLabel: `${themeLocale.value.selectLanguageAriaLabel ?? themeLocale.value.selectLanguageText}`,
          children: localePaths.map((targetLocalePath) => {
            var _a2, _b;
            const targetSiteLocale = ((_a2 = site.value.locales) == null ? void 0 : _a2[targetLocalePath]) ?? {};
            const targetThemeLocale = ((_b = theme.value.locales) == null ? void 0 : _b[targetLocalePath]) ?? {};
            const targetLang = `${targetSiteLocale.lang}`;
            const text = targetThemeLocale.selectLanguageName ?? targetLang;
            let link;
            if (targetLang === siteLocale.value.lang) {
              link = currentFullPath;
            } else {
              const targetLocalePage = currentPath.replace(
                routeLocale.value,
                targetLocalePath
              );
              if (router.getRoutes().some((item) => item.path === targetLocalePage)) {
                link = currentFullPath.replace(currentPath, targetLocalePage);
              } else {
                link = targetThemeLocale.home ?? targetLocalePath;
              }
            }
            return {
              text,
              link
            };
          })
        };
        return [languageDropdown];
      });
    };
    const useNavbarRepo = () => {
      const themeLocale = useThemeLocaleData();
      const repo = computed(() => themeLocale.value.repo);
      const repoType = computed(
        () => repo.value ? resolveRepoType(repo.value) : null
      );
      const repoLink = computed(() => {
        if (repo.value && !isLinkHttp(repo.value)) {
          return `https://github.com/${repo.value}`;
        }
        return repo.value;
      });
      const repoLabel = computed(() => {
        if (!repoLink.value)
          return null;
        if (themeLocale.value.repoLabel)
          return themeLocale.value.repoLabel;
        if (repoType.value === null)
          return "Source";
        return repoType.value;
      });
      return computed(() => {
        if (!repoLink.value || !repoLabel.value) {
          return [];
        }
        return [
          {
            text: repoLabel.value,
            link: repoLink.value
          }
        ];
      });
    };
    const resolveNavbarItem = (item) => {
      if (isString(item)) {
        return useNavLink(item);
      }
      if (item.children) {
        return {
          ...item,
          children: item.children.map(resolveNavbarItem)
        };
      }
      return item;
    };
    const useNavbarConfig = () => {
      const themeLocale = useThemeLocaleData();
      return computed(() => (themeLocale.value.navbar || []).map(resolveNavbarItem));
    };
    const isMobile = ref(false);
    const navbarConfig = useNavbarConfig();
    const navbarSelectLanguage = useNavbarSelectLanguage();
    const navbarRepo = useNavbarRepo();
    const navbarLinks = computed(() => [
      ...navbarConfig.value,
      ...navbarSelectLanguage.value,
      ...navbarRepo.value
    ]);
    useUpdateDeviceStatus(
      DeviceType.MOBILE,
      (mobileDesktopBreakpoint) => {
        if (window.innerWidth < mobileDesktopBreakpoint) {
          isMobile.value = true;
        } else {
          isMobile.value = false;
        }
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      if (navbarLinks.value.length) {
        _push(`<nav${ssrRenderAttrs(mergeProps({ class: "navbar-items" }, _attrs))}><!--[-->`);
        ssrRenderList(navbarLinks.value, (item) => {
          _push(`<div class="navbar-item">`);
          if (item.children) {
            _push(ssrRenderComponent(NavbarDropdown, {
              item,
              class: isMobile.value ? "mobile" : ""
            }, null, _parent));
          } else {
            _push(ssrRenderComponent(AutoLink, { item }, null, _parent));
          }
          _push(`</div>`);
        });
        _push(`<!--]--></nav>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/NavbarItems.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const NavbarItems = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__file", "NavbarItems.vue"]]);
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "ToggleColorModeButton",
  __ssrInlineRender: true,
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    const isDarkMode = useDarkMode();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        class: "toggle-color-mode-button",
        title: unref(themeLocale).toggleColorMode
      }, _attrs))}><svg style="${ssrRenderStyle(!unref(isDarkMode) ? null : { display: "none" })}" class="icon" focusable="false" viewBox="0 0 32 32"><path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path></svg><svg style="${ssrRenderStyle(unref(isDarkMode) ? null : { display: "none" })}" class="icon" focusable="false" viewBox="0 0 32 32"><path d="M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z" fill="currentColor"></path></svg></button>`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/ToggleColorModeButton.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const ToggleColorModeButton = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__file", "ToggleColorModeButton.vue"]]);
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "ToggleSidebarButton",
  __ssrInlineRender: true,
  emits: ["toggle"],
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "toggle-sidebar-button",
        title: unref(themeLocale).toggleSidebar,
        "aria-expanded": "false",
        role: "button",
        tabindex: "0"
      }, _attrs))}><div class="icon" aria-hidden="true"><span></span><span></span><span></span></div></div>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/ToggleSidebarButton.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const ToggleSidebarButton = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__file", "ToggleSidebarButton.vue"]]);
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "Navbar",
  __ssrInlineRender: true,
  emits: ["toggle-sidebar"],
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    const navbar = ref(null);
    const navbarBrand = ref(null);
    const linksWrapperMaxWidth = ref(0);
    const linksWrapperStyle = computed(() => {
      if (!linksWrapperMaxWidth.value) {
        return {};
      }
      return {
        maxWidth: linksWrapperMaxWidth.value + "px"
      };
    });
    useUpdateDeviceStatus(
      DeviceType.MOBILE,
      (mobileDesktopBreakpoint) => {
        var _a2;
        const navbarHorizontalPadding = getCssValue(navbar.value, "paddingLeft") + getCssValue(navbar.value, "paddingRight");
        if (window.innerWidth < mobileDesktopBreakpoint) {
          linksWrapperMaxWidth.value = 0;
        } else {
          linksWrapperMaxWidth.value = navbar.value.offsetWidth - navbarHorizontalPadding - (((_a2 = navbarBrand.value) == null ? void 0 : _a2.offsetWidth) || 0);
        }
      }
    );
    function getCssValue(el, property) {
      var _a2, _b, _c;
      const val = (_c = (_b = (_a2 = el == null ? void 0 : el.ownerDocument) == null ? void 0 : _a2.defaultView) == null ? void 0 : _b.getComputedStyle(el, null)) == null ? void 0 : _c[property];
      const num = Number.parseInt(val, 10);
      return Number.isNaN(num) ? 0 : num;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NavbarSearch = resolveComponent("NavbarSearch");
      _push(`<header${ssrRenderAttrs(mergeProps({
        ref_key: "navbar",
        ref: navbar,
        class: "navbar"
      }, _attrs))}>`);
      _push(ssrRenderComponent(ToggleSidebarButton, {
        onToggle: ($event) => _ctx.$emit("toggle-sidebar")
      }, null, _parent));
      _push(`<span>`);
      _push(ssrRenderComponent(NavbarBrand, null, null, _parent));
      _push(`</span><div class="navbar-items-wrapper" style="${ssrRenderStyle(linksWrapperStyle.value)}">`);
      ssrRenderSlot(_ctx.$slots, "before", {}, null, _push, _parent);
      _push(ssrRenderComponent(NavbarItems, { class: "can-hide" }, null, _parent));
      ssrRenderSlot(_ctx.$slots, "after", {}, null, _push, _parent);
      if (unref(themeLocale).colorModeSwitch) {
        _push(ssrRenderComponent(ToggleColorModeButton, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_NavbarSearch, null, null, _parent));
      _push(`</div></header>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/Navbar.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const Navbar = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__file", "Navbar.vue"]]);
const global = "";
const _sfc_main$9 = {
  __name: "sub-menu",
  __ssrInlineRender: true,
  props: {
    menuInfo: {
      type: Object,
      default: true
    }
  },
  setup(__props) {
    const props = __props;
    const route = useRoute();
    const router = useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_sub_menu = resolveComponent("sub-menu", true);
      _push(`<li${ssrRenderAttrs(mergeProps({
        class: [
          "level",
          "level-" + props.menuInfo.level
        ]
      }, _attrs))}><div class="${ssrRenderClass({ active: unref(route).hash === `#${props.menuInfo.slug}` })}">${ssrInterpolate(props.menuInfo.title)}</div><ul class="menu"><!--[-->`);
      ssrRenderList(props.menuInfo.children, (item, index2) => {
        _push(`<!--[-->`);
        if (item.children.length > 0 && item.level !== 3) {
          _push(ssrRenderComponent(_component_sub_menu, {
            key: item.key,
            "menu-info": item,
            route: unref(route),
            router: unref(router)
          }, null, _parent));
        } else {
          _push(`<li class="${ssrRenderClass(["level", "level-" + item.level, { active: unref(route).hash === `#${item.slug}` }])}">${ssrInterpolate(item.title)}</li>`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></ul></li>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/vuepress-theme-sidebar/components/anchor-right/sub-menu.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const SubMenu = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__file", "sub-menu.vue"]]);
const index_vue_vue_type_style_index_0_scoped_b4a30246_lang = "";
const _sfc_main$8 = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    useRouter();
    const page = usePageData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "anchor-right" }, _attrs))} data-v-b4a30246><div class="anchor-right-content" data-v-b4a30246><ul data-v-b4a30246><!--[-->`);
      ssrRenderList(unref(page).headers, (item, index2) => {
        _push(`<!--[-->`);
        if (item.children.length > 0) {
          _push(ssrRenderComponent(SubMenu, {
            key: item.key,
            "menu-info": item
          }, null, _parent));
        } else {
          _push(`<li class="${ssrRenderClass(["level", "level-" + item.level, { active: unref(route).hash === `#${item.slug}` }])}" data-v-b4a30246>${ssrInterpolate(item.title)}</li>`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></ul></div></div>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/vuepress-theme-sidebar/components/anchor-right/index.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const AnchorRight = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-b4a30246"], ["__file", "index.vue"]]);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "PageMeta",
  __ssrInlineRender: true,
  setup(__props) {
    const useEditNavLink = () => {
      const themeLocale2 = useThemeLocaleData();
      const page = usePageData();
      const frontmatter = usePageFrontmatter();
      return computed(() => {
        const showEditLink = frontmatter.value.editLink ?? themeLocale2.value.editLink ?? true;
        if (!showEditLink) {
          return null;
        }
        const {
          repo,
          docsRepo = repo,
          docsBranch = "main",
          docsDir = "",
          editLinkText
        } = themeLocale2.value;
        if (!docsRepo)
          return null;
        const editLink = resolveEditLink({
          docsRepo,
          docsBranch,
          docsDir,
          filePathRelative: page.value.filePathRelative,
          editLinkPattern: frontmatter.value.editLinkPattern ?? themeLocale2.value.editLinkPattern
        });
        if (!editLink)
          return null;
        return {
          text: editLinkText ?? "Edit this page",
          link: editLink
        };
      });
    };
    const useLastUpdated = () => {
      const themeLocale2 = useThemeLocaleData();
      const page = usePageData();
      const frontmatter = usePageFrontmatter();
      return computed(() => {
        var _a2, _b;
        const showLastUpdated = frontmatter.value.lastUpdated ?? themeLocale2.value.lastUpdated ?? true;
        if (!showLastUpdated)
          return null;
        if (!((_a2 = page.value.git) == null ? void 0 : _a2.updatedTime))
          return null;
        const updatedDate = new Date((_b = page.value.git) == null ? void 0 : _b.updatedTime);
        return updatedDate.toLocaleString();
      });
    };
    const useContributors = () => {
      const themeLocale2 = useThemeLocaleData();
      const page = usePageData();
      const frontmatter = usePageFrontmatter();
      return computed(() => {
        var _a2;
        const showContributors = frontmatter.value.contributors ?? themeLocale2.value.contributors ?? true;
        if (!showContributors)
          return null;
        return ((_a2 = page.value.git) == null ? void 0 : _a2.contributors) ?? null;
      });
    };
    const themeLocale = useThemeLocaleData();
    const editNavLink = useEditNavLink();
    const lastUpdated = useLastUpdated();
    const contributors = useContributors();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = resolveComponent("ClientOnly");
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "page-meta" }, _attrs))}>`);
      if (unref(editNavLink)) {
        _push(`<div class="meta-item edit-link">`);
        _push(ssrRenderComponent(AutoLink, {
          class: "meta-item-label",
          item: unref(editNavLink)
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(lastUpdated)) {
        _push(`<div class="meta-item last-updated"><span class="meta-item-label">${ssrInterpolate(unref(themeLocale).lastUpdatedText)}: </span>`);
        _push(ssrRenderComponent(_component_ClientOnly, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="meta-item-info"${_scopeId}>${ssrInterpolate(unref(lastUpdated))}</span>`);
            } else {
              return [
                createVNode(
                  "span",
                  { class: "meta-item-info" },
                  toDisplayString(unref(lastUpdated)),
                  1
                  /* TEXT */
                )
              ];
            }
          }),
          _: 1
          /* STABLE */
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(contributors) && unref(contributors).length) {
        _push(`<div class="meta-item contributors"><span class="meta-item-label">${ssrInterpolate(unref(themeLocale).contributorsText)}: </span><span class="meta-item-info"><!--[-->`);
        ssrRenderList(unref(contributors), (contributor, index2) => {
          _push(`<!--[--><span class="contributor"${ssrRenderAttr("title", `email: ${contributor.email}`)}>${ssrInterpolate(contributor.name)}</span>`);
          if (index2 !== unref(contributors).length - 1) {
            _push(`<!--[-->, <!--]-->`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</footer>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/PageMeta.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const PageMeta = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__file", "PageMeta.vue"]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "PageNav",
  __ssrInlineRender: true,
  setup(__props) {
    const resolveFromFrontmatterConfig = (conf) => {
      if (conf === false) {
        return null;
      }
      if (isString(conf)) {
        return useNavLink(conf);
      }
      if (isPlainObject(conf)) {
        return conf;
      }
      return false;
    };
    const resolveFromSidebarItems = (sidebarItems2, currentPath, offset) => {
      const index2 = sidebarItems2.findIndex((item) => item.link === currentPath);
      if (index2 !== -1) {
        const targetItem = sidebarItems2[index2 + offset];
        if (!(targetItem == null ? void 0 : targetItem.link)) {
          return null;
        }
        return targetItem;
      }
      for (const item of sidebarItems2) {
        if (item.children) {
          const childResult = resolveFromSidebarItems(
            item.children,
            currentPath,
            offset
          );
          if (childResult) {
            return childResult;
          }
        }
      }
      return null;
    };
    const frontmatter = usePageFrontmatter();
    const sidebarItems = useSidebarItems();
    const route = useRoute();
    const prevNavLink = computed(() => {
      const prevConfig = resolveFromFrontmatterConfig(frontmatter.value.prev);
      if (prevConfig !== false) {
        return prevConfig;
      }
      return resolveFromSidebarItems(sidebarItems.value, route.path, -1);
    });
    const nextNavLink = computed(() => {
      const nextConfig = resolveFromFrontmatterConfig(frontmatter.value.next);
      if (nextConfig !== false) {
        return nextConfig;
      }
      return resolveFromSidebarItems(sidebarItems.value, route.path, 1);
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (prevNavLink.value || nextNavLink.value) {
        _push(`<nav${ssrRenderAttrs(mergeProps({ class: "page-nav" }, _attrs))}><p class="inner">`);
        if (prevNavLink.value) {
          _push(`<span class="prev">`);
          _push(ssrRenderComponent(AutoLink, { item: prevNavLink.value }, null, _parent));
          _push(`</span>`);
        } else {
          _push(`<!---->`);
        }
        if (nextNavLink.value) {
          _push(`<span class="next">`);
          _push(ssrRenderComponent(AutoLink, { item: nextNavLink.value }, null, _parent));
          _push(`</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</p></nav>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/PageNav.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const PageNav = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__file", "PageNav.vue"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Page",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Content = resolveComponent("Content");
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "top", {}, null, _push, _parent);
      _push(`<div class="theme-default-content">`);
      _push(ssrRenderComponent(AnchorRight, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "content-top", {}, null, _push, _parent);
      _push(ssrRenderComponent(_component_Content, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "content-bottom", {}, null, _push, _parent);
      _push(`</div>`);
      _push(ssrRenderComponent(PageMeta, null, null, _parent));
      _push(ssrRenderComponent(PageNav, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "bottom", {}, null, _push, _parent);
      _push(`</main>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/vuepress-theme-sidebar/components/Page.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Page = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__file", "Page.vue"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "SidebarItem",
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      required: true
    },
    depth: {
      type: Number,
      required: false,
      default: 0
    }
  },
  setup(__props) {
    const props = __props;
    const { item, depth } = toRefs(props);
    const route = useRoute();
    const router = useRouter();
    const isActive = computed(() => isActiveSidebarItem(item.value, route));
    const itemClass = computed(() => ({
      "sidebar-item": true,
      "sidebar-heading": depth.value === 0,
      "active": isActive.value,
      "collapsible": item.value.collapsible
    }));
    const isOpenDefault = computed(
      () => item.value.collapsible ? isActive.value : true
    );
    const [isOpen, toggleIsOpen] = useToggle(isOpenDefault.value);
    const unregisterRouterHook = router.afterEach((to) => {
      nextTick(() => {
        isOpen.value = isOpenDefault.value;
      });
    });
    onBeforeUnmount(() => {
      unregisterRouterHook();
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      const _component_SidebarItem = resolveComponent("SidebarItem", true);
      _push(`<li${ssrRenderAttrs(_attrs)}>`);
      if (unref(item).link) {
        _push(ssrRenderComponent(AutoLink, {
          class: itemClass.value,
          item: unref(item)
        }, null, _parent));
      } else {
        _push(`<p tabindex="0" class="${ssrRenderClass(itemClass.value)}">${ssrInterpolate(unref(item).text)} `);
        if (unref(item).collapsible) {
          _push(`<span class="${ssrRenderClass([unref(isOpen) ? "down" : "right", "arrow"])}"></span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</p>`);
      }
      if ((_a2 = unref(item).children) == null ? void 0 : _a2.length) {
        _push(ssrRenderComponent(DropdownTransition, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<ul style="${ssrRenderStyle(unref(isOpen) ? null : { display: "none" })}" class="sidebar-item-children"${_scopeId}><!--[-->`);
              ssrRenderList(unref(item).children, (child) => {
                _push2(ssrRenderComponent(_component_SidebarItem, {
                  style: unref(depth) < 2 ? null : { display: "none" },
                  key: `${unref(depth)}${child.text}${child.link}`,
                  item: child,
                  depth: unref(depth) + 1
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></ul>`);
            } else {
              return [
                withDirectives(createVNode(
                  "ul",
                  { class: "sidebar-item-children" },
                  [
                    (openBlock(true), createBlock(
                      Fragment,
                      null,
                      renderList(unref(item).children, (child) => {
                        return withDirectives((openBlock(), createBlock(_component_SidebarItem, {
                          key: `${unref(depth)}${child.text}${child.link}`,
                          item: child,
                          depth: unref(depth) + 1
                        }, null, 8, ["item", "depth"])), [
                          [vShow, unref(depth) < 2]
                        ]);
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ],
                  512
                  /* NEED_PATCH */
                ), [
                  [vShow, unref(isOpen)]
                ])
              ];
            }
          }),
          _: 1
          /* STABLE */
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</li>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/vuepress-theme-sidebar/components/SidebarItem.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const SidebarItem = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__file", "SidebarItem.vue"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "SidebarItems",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const sidebarItems = useSidebarItems();
    onMounted(() => {
      watch(
        () => route.hash,
        (hash) => {
          const sidebar = document.querySelector(".sidebar");
          if (!sidebar)
            return;
          const activeSidebarItem = document.querySelector(
            `.sidebar a.sidebar-item[href="${route.path}${hash}"]`
          );
          if (!activeSidebarItem)
            return;
          const { top: sidebarTop, height: sidebarHeight } = sidebar.getBoundingClientRect();
          const { top: activeSidebarItemTop, height: activeSidebarItemHeight } = activeSidebarItem.getBoundingClientRect();
          if (activeSidebarItemTop < sidebarTop) {
            activeSidebarItem.scrollIntoView(true);
          } else if (activeSidebarItemTop + activeSidebarItemHeight > sidebarTop + sidebarHeight) {
            activeSidebarItem.scrollIntoView(false);
          }
        }
      );
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(sidebarItems).length) {
        _push(`<ul${ssrRenderAttrs(mergeProps({ class: "sidebar-items" }, _attrs))}><!--[-->`);
        ssrRenderList(unref(sidebarItems), (item) => {
          _push(ssrRenderComponent(SidebarItem, {
            key: `${item.text}${item.link}`,
            item
          }, null, _parent));
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/SidebarItems.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const SidebarItems = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__file", "SidebarItems.vue"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Sidebar",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<aside${ssrRenderAttrs(mergeProps({ class: "sidebar" }, _attrs))}>`);
      _push(ssrRenderComponent(NavbarItems, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "top", {}, null, _push, _parent);
      _push(ssrRenderComponent(SidebarItems, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "bottom", {}, null, _push, _parent);
      _push(`</aside>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/Sidebar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Sidebar = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__file", "Sidebar.vue"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Layout",
  __ssrInlineRender: true,
  setup(__props) {
    const page = usePageData();
    const frontmatter = usePageFrontmatter();
    const themeLocale = useThemeLocaleData();
    const shouldShowNavbar = computed(
      () => frontmatter.value.navbar !== false && themeLocale.value.navbar !== false
    );
    const sidebarItems = useSidebarItems();
    const isSidebarOpen = ref(false);
    const toggleSidebar = (to) => {
      isSidebarOpen.value = typeof to === "boolean" ? to : !isSidebarOpen.value;
    };
    const containerClass = computed(() => [
      {
        "no-navbar": !shouldShowNavbar.value,
        "no-sidebar": !sidebarItems.value.length,
        "sidebar-open": isSidebarOpen.value
      },
      frontmatter.value.pageClass
    ]);
    let unregisterRouterHook;
    onMounted(() => {
      const router = useRouter();
      unregisterRouterHook = router.afterEach(() => {
        toggleSidebar(false);
      });
    });
    onUnmounted(() => {
      unregisterRouterHook();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["theme-container", containerClass.value]
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "navbar", {}, () => {
        if (shouldShowNavbar.value) {
          _push(ssrRenderComponent(Navbar, { onToggleSidebar: toggleSidebar }, {
            before: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                ssrRenderSlot(_ctx.$slots, "navbar-before", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  renderSlot(_ctx.$slots, "navbar-before")
                ];
              }
            }),
            after: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                ssrRenderSlot(_ctx.$slots, "navbar-after", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  renderSlot(_ctx.$slots, "navbar-after")
                ];
              }
            }),
            _: 3
            /* FORWARDED */
          }, _parent));
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
      _push(`<div class="sidebar-mask"></div>`);
      ssrRenderSlot(_ctx.$slots, "sidebar", {}, () => {
        _push(ssrRenderComponent(Sidebar, null, {
          top: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "sidebar-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "sidebar-top")
              ];
            }
          }),
          bottom: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "sidebar-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "sidebar-bottom")
              ];
            }
          }),
          _: 3
          /* FORWARDED */
        }, _parent));
      }, _push, _parent);
      ssrRenderSlot(_ctx.$slots, "page", {}, () => {
        if (unref(frontmatter).home) {
          _push(ssrRenderComponent(Home, null, null, _parent));
        } else {
          _push(ssrRenderComponent(Page, {
            key: unref(page).path
          }, {
            top: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                ssrRenderSlot(_ctx.$slots, "page-top", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  renderSlot(_ctx.$slots, "page-top")
                ];
              }
            }),
            "content-top": withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                ssrRenderSlot(_ctx.$slots, "page-content-top", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  renderSlot(_ctx.$slots, "page-content-top")
                ];
              }
            }),
            "content-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                ssrRenderSlot(_ctx.$slots, "page-content-bottom", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  renderSlot(_ctx.$slots, "page-content-bottom")
                ];
              }
            }),
            bottom: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                ssrRenderSlot(_ctx.$slots, "page-bottom", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  renderSlot(_ctx.$slots, "page-bottom")
                ];
              }
            }),
            _: 3
            /* FORWARDED */
          }, _parent));
        }
      }, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Layout = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "Layout.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "NotFound",
  __ssrInlineRender: true,
  setup(__props) {
    const routeLocale = useRouteLocale();
    const themeLocale = useThemeLocaleData();
    const messages = themeLocale.value.notFound ?? ["Not Found"];
    const getMsg = () => messages[Math.floor(Math.random() * messages.length)];
    const homeLink = themeLocale.value.home ?? routeLocale.value;
    const homeText = themeLocale.value.backToHome ?? "Back to home";
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "theme-container" }, _attrs))}><main class="page"><div class="theme-default-content"><h1>404</h1><blockquote>${ssrInterpolate(getMsg())}</blockquote>`);
      _push(ssrRenderComponent(_component_RouterLink, { to: unref(homeLink) }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(homeText))}`);
          } else {
            return [
              createTextVNode(
                toDisplayString(unref(homeText)),
                1
                /* TEXT */
              )
            ];
          }
        }),
        _: 1
        /* STABLE */
      }, _parent));
      _push(`</div></main></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/layouts/NotFound.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const NotFound = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "NotFound.vue"]]);
const index = "";
const clientConfig6 = defineClientConfig({
  enhance({ app, router }) {
    app.component("Badge", Badge);
    app.component("CodeGroup", CodeGroup);
    app.component("CodeGroupItem", CodeGroupItem);
    app.component("AutoLinkExternalIcon", () => {
      const ExternalLinkIcon2 = app.component("ExternalLinkIcon");
      if (ExternalLinkIcon2) {
        return h(ExternalLinkIcon2);
      }
      return null;
    });
    app.component("NavbarSearch", () => {
      const SearchComponent = app.component("Docsearch") || app.component("SearchBox");
      if (SearchComponent) {
        return h(SearchComponent);
      }
      return null;
    });
    const scrollBehavior = router.options.scrollBehavior;
    router.options.scrollBehavior = async (...args) => {
      await useScrollPromise().wait();
      return scrollBehavior(...args);
    };
  },
  setup() {
    setupDarkMode();
    setupSidebarItems();
  },
  layouts: {
    Layout,
    NotFound
  }
});
const hopeInject = "";
const clientConfig7 = {};
const autoCatalog = "";
let t = () => null;
const n = Symbol(""), c = () => inject(n), l = (o) => {
  o.provide(n, t);
};
var N = defineComponent({ name: "AutoCatalog", props: { base: { type: String, default: "" }, level: { type: Number, default: 3 }, index: Boolean }, setup(r) {
  const u = c(), f = useLocaleConfig({ "/": { "title": "目录", "empty": "暂无目录" } }), _ = usePageData(), T = useRouter(), E = useSiteData(), O = (s) => {
    const p = s["index"];
    return typeof p > "u" || p;
  }, b = () => {
    const s = r.base || _.value.path.replace(/\/[^/]+$/, "/"), p = T.getRoutes(), h2 = [];
    return p.filter(({ meta: t2, path: l2 }) => {
      if (!startsWith(l2, s) || l2 === s)
        return false;
      if (s === "/") {
        const a = keys(E.value.locales).filter((n2) => n2 !== "/");
        if (l2 === "/404.html" || a.some((n2) => startsWith(l2, n2)))
          return false;
      }
      return (endsWith(l2, ".html") && !endsWith(l2, "/index.html") || endsWith(l2, "/")) && O(t2);
    }).map(({ path: t2, meta: l2 }) => {
      const a = t2.substring(s.length).split("/").length;
      return { title: l2["title"] || "", icon: l2["icon"], base: t2.replace(/\/[^/]+\/?$/, "/"), order: l2["order"] || null, level: endsWith(t2, "/") ? a - 1 : a, path: t2 };
    }).filter(({ title: t2, level: l2 }) => t2 && l2 <= r.level).sort(({ title: t2, level: l2, path: a, order: n2 }, { title: c2, level: o, path: d, order: i }) => l2 - o || (endsWith(a, "/index.html") ? -1 : endsWith(d, "/index.html") ? 1 : n2 === null ? i === null ? t2.localeCompare(c2) : i : i === null ? n2 : n2 > 0 ? i > 0 ? n2 - i : -1 : i < 0 ? n2 - i : 1)).forEach((t2) => {
      var l2;
      const { base: a, level: n2 } = t2;
      switch (n2) {
        case 1:
          h2.push(t2);
          break;
        case 2: {
          const c2 = h2.find((o) => o.path === a);
          c2 && (c2.children ?? (c2.children = [])).push(t2);
          break;
        }
        default: {
          const c2 = h2.find((o) => o.path === a.replace(/\/[^/]+\/$/, "/"));
          if (c2) {
            const o = (l2 = c2.children) == null ? void 0 : l2.find((d) => d.path === a);
            o && (o.children ?? (o.children = [])).push(t2);
          }
        }
      }
    }), h2;
  }, A = computed(() => b());
  return () => h("div", { class: "vp-catalog" }, [h("h2", { class: "vp-catalog-main-title" }, f.value.title), A.value.length ? A.value.map(({ children: s = [], icon: p, path: h$1, title: t2 }, l2) => [h("h3", { id: t2, class: ["vp-catalog-child-title", { "has-children": s.length }] }, [h("a", { href: `#${t2}`, class: "header-anchor", "aria-hidden": true }, "#"), h(VPLink, { class: "vp-catalog-title", to: h$1 }, () => [r.index ? `${l2 + 1}.` : null, p && u ? h(u, { icon: p }) : null, t2 || h$1])]), s.length ? h("ul", { class: "vp-catalog-child-catalogs" }, s.map(({ children: a = [], icon: n2, path: c2, title: o }, d) => h("li", { class: "vp-child-catalog" }, [h("div", { class: ["vp-catalog-sub-title", { "has-children": a.length }] }, [h("a", { href: `#${o}`, class: "header-anchor" }, "#"), h(VPLink, { class: "vp-catalog-title", to: c2 }, () => [r.index ? `${l2 + 1}.${d + 1}` : null, n2 && u ? h(u, { icon: n2 }) : null, o || c2])]), a.length ? h("div", { class: "v-sub-catalogs" }, a.map(({ icon: i, path: v, title: $ }, L) => h(VPLink, { class: "vp-sub-catalog", to: v }, () => [r.index ? `${l2 + 1}.${d + 1}.${L + 1}` : null, i && u ? h(u, { icon: i }) : null, $ || v]))) : null]))) : null]) : h("p", { class: "vp-empty-catalog" }, f.value.empty)]);
} }), S = defineClientConfig({ enhance: ({ app: r }) => {
  l(r), hasGlobalComponent("AutoCatalog", r) || r.component("AutoCatalog", N);
} });
const clientConfigs = [
  clientConfig0,
  clientConfig1,
  clientConfig2,
  clientConfig3,
  clientConfig4,
  clientConfig5,
  clientConfig6,
  clientConfig7,
  S
];
const pagesRoutes = [
  ["v-8daa1a0e", "/", { "title": "学习笔记" }, ["/README.md"]],
  ["v-2f7b5caa", "/js/base-ts.html", { "title": "TS 学习笔记" }, [":md"]],
  ["v-51df5a23", "/js/js.html", { "title": "### Array 有哪些方法" }, [":md"]],
  ["v-6f622f78", "/browser/01.html", { "title": "" }, [":md"]],
  ["v-71170817", "/browser/02.html", { "title": "" }, [":md"]],
  ["v-72cbe0b6", "/browser/03.html", { "title": "" }, [":md"]],
  ["v-7480b955", "/browser/04.html", { "title": "" }, [":md"]],
  ["v-763591f4", "/browser/05.html", { "title": "" }, [":md"]],
  ["v-77ea6a93", "/browser/06.html", { "title": "" }, [":md"]],
  ["v-799f4332", "/browser/07.html", { "title": "" }, [":md"]],
  ["v-7b541bd1", "/browser/08.html", { "title": "" }, [":md"]],
  ["v-7d08f470", "/browser/09.html", { "title": "" }, [":md"]],
  ["v-bad8dbcc", "/browser/10.html", { "title": "" }, [":md"]],
  ["v-b76f2a8e", "/browser/11.html", { "title": "" }, [":md"]],
  ["v-b4057950", "/browser/12.html", { "title": "" }, [":md"]],
  ["v-b09bc812", "/browser/13.html", { "title": "" }, [":md"]],
  ["v-ad3216d4", "/browser/14.html", { "title": "" }, [":md"]],
  ["v-a9c86596", "/browser/15.html", { "title": "" }, [":md"]],
  ["v-a65eb458", "/browser/16.html", { "title": "" }, [":md"]],
  ["v-a2f5031a", "/browser/17.html", { "title": "" }, [":md"]],
  ["v-9f8b51dc", "/browser/18.html", { "title": "" }, [":md"]],
  ["v-9c21a09e", "/browser/19.html", { "title": "" }, [":md"]],
  ["v-510c654a", "/browser/20.html", { "title": "" }, [":md"]],
  ["v-4da2b40c", "/browser/21.html", { "title": "" }, [":md"]],
  ["v-4a3902ce", "/browser/22.html", { "title": "" }, [":md"]],
  ["v-46cf5190", "/browser/23.html", { "title": "" }, [":md"]],
  ["v-4365a052", "/browser/24.html", { "title": "" }, [":md"]],
  ["v-3ffbef14", "/browser/25.html", { "title": "" }, [":md"]],
  ["v-3c923dd6", "/browser/26.html", { "title": "" }, [":md"]],
  ["v-39288c98", "/browser/27.html", { "title": "" }, [":md"]],
  ["v-35bedb5a", "/browser/28.html", { "title": "" }, [":md"]],
  ["v-32552a1c", "/browser/29.html", { "title": "" }, [":md"]],
  ["v-0c60089c", "/browser/30.html", { "title": "" }, [":md"]],
  ["v-0e14e13b", "/browser/31.html", { "title": "" }, [":md"]],
  ["v-0fc9b9da", "/browser/32.html", { "title": "" }, [":md"]],
  ["v-117e9279", "/browser/33.html", { "title": "" }, [":md"]],
  ["v-13336b18", "/browser/34.html", { "title": "" }, [":md"]],
  ["v-14e843b7", "/browser/35.html", { "title": "" }, [":md"]],
  ["v-169d1c56", "/browser/36.html", { "title": "" }, [":md"]],
  ["v-53ca0971", "/node/%E5%AD%A6%E4%B9%A0node%E7%9F%A5%E8%AF%86%E6%A1%86%E6%9E%B6.html", { "title": "" }, ["/node/学习node知识框架.html", "/node/学习node知识框架.md", ":md"]],
  ["v-2a50d1fa", "/node/%E6%A8%A1%E5%9D%97%E5%8C%96%E4%BB%8B%E7%BB%8D.html", { "title": "" }, ["/node/模块化介绍.html", "/node/模块化介绍.md", ":md"]],
  ["v-434a106a", "/mobile/h5-jump-app.html", { "title": "" }, [":md"]],
  ["v-2b876a94", "/nav/list.html", { "title": "知识汇总" }, [":md"]],
  ["v-671ee2ee", "/react/contrast.html", { "title": "" }, [":md"]],
  ["v-d97aef5a", "/tools/tl-list.html", { "title": "自学前端程序工具和网站" }, [":md"]],
  ["v-05276d93", "/tools/user-tools.html", { "title": "300+编程实用工具" }, [":md"]],
  ["v-5d9b6c6a", "/ts/AppendArgument.html", { "title": "" }, [":md"]],
  ["v-0d0ea581", "/ts/Combination.html", { "title": "" }, [":md"]],
  ["v-8ed5a464", "/ts/Concat.html", { "title": "" }, [":md"]],
  ["v-f2d45654", "/ts/Exclude.html", { "title": "" }, [":md"]],
  ["v-58df4e8e", "/ts/Omit.html", { "title": "" }, [":md"]],
  ["v-041cf341", "/ts/pick.html", { "title": "" }, [":md"]],
  ["v-5f2a4540", "/ts/readonly.html", { "title": "" }, [":md"]],
  ["v-78b56bc8", "/ts/type.html", { "title": "" }, [":md"]],
  ["v-c5fb03d0", "/vue/devise-realization.html", { "title": "Vue.js 设计与实现" }, [":md"]],
  ["v-4362318d", "/vue/v2-v3.html", { "title": "" }, [":md"]],
  ["v-13c9aef5", "/vue/vue.html", { "title": "" }, [":md"]],
  ["v-2cc1cca4", "/v8/01.html", { "title": "" }, [":md"]],
  ["v-2e76a543", "/v8/02.html", { "title": "" }, [":md"]],
  ["v-302b7de2", "/v8/03.html", { "title": "" }, [":md"]],
  ["v-31e05681", "/v8/04.html", { "title": "" }, [":md"]],
  ["v-33952f20", "/v8/05.html", { "title": "" }, [":md"]],
  ["v-354a07bf", "/v8/06.html", { "title": "" }, [":md"]],
  ["v-36fee05e", "/v8/07.html", { "title": "" }, [":md"]],
  ["v-38b3b8fd", "/v8/08.html", { "title": "" }, [":md"]],
  ["v-3a68919c", "/v8/09.html", { "title": "" }, [":md"]],
  ["v-5ff32f46", "/v8/10.html", { "title": "" }, [":md"]],
  ["v-61a807e5", "/v8/11.html", { "title": "" }, [":md"]],
  ["v-635ce084", "/v8/12.html", { "title": "" }, [":md"]],
  ["v-6511b923", "/v8/13.html", { "title": "" }, [":md"]],
  ["v-66c691c2", "/v8/14.html", { "title": "" }, [":md"]],
  ["v-687b6a61", "/v8/15.html", { "title": "" }, [":md"]],
  ["v-6a304300", "/v8/16.html", { "title": "" }, [":md"]],
  ["v-6be51b9f", "/v8/17.html", { "title": "" }, [":md"]],
  ["v-6d99f43e", "/v8/18.html", { "title": "" }, [":md"]],
  ["v-6f4eccdd", "/v8/19.html", { "title": "" }, [":md"]],
  ["v-d64d2af2", "/v8/20.html", { "title": "" }, [":md"]],
  ["v-d2e379b4", "/v8/21.html", { "title": "" }, [":md"]],
  ["v-cf79c876", "/v8/22.html", { "title": "" }, [":md"]],
  ["v-cc101738", "/v8/23.html", { "title": "" }, [":md"]],
  ["v-5f355e84", "/%E9%9A%8F%E6%89%8B%E8%AE%B0/%E5%A6%82%E4%BD%95%E7%B3%BB%E7%BB%9F%E5%AD%A6%E4%B9%A0%E4%B8%80%E4%B8%AA%E6%96%B0%E7%9F%A5%E8%AF%86.html", { "title": "" }, ["/随手记/如何系统学习一个新知识.html", "/随手记/如何系统学习一个新知识.md", ":md"]],
  ["v-3706649a", "/404.html", { "title": "" }, []],
  ["v-2d0a9a6d", "/js/", { "title": "Js" }, []],
  ["v-24e1b800", "/browser/", { "title": "Browser" }, []],
  ["v-15051314", "/node/", { "title": "Node" }, []],
  ["v-99e61298", "/mobile/", { "title": "Mobile" }, []],
  ["v-744a49e5", "/nav/", { "title": "Nav" }, []],
  ["v-dc3b2a6e", "/react/", { "title": "React" }, []],
  ["v-d440f426", "/tools/", { "title": "Tools" }, []],
  ["v-2d0abff7", "/ts/", { "title": "Ts" }, []],
  ["v-744e35e2", "/vue/", { "title": "Vue" }, []],
  ["v-2d0ac054", "/v8/", { "title": "V8" }, []],
  ["v-daaaecb4", "/%E9%9A%8F%E6%89%8B%E8%AE%B0/", { "title": "随手记" }, ["/随手记/"]]
];
var Vuepress = defineComponent({
  name: "Vuepress",
  setup() {
    const layout = usePageLayout();
    return () => h(layout.value);
  }
});
var createRoutes = () => pagesRoutes.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta
      },
      {
        path: path.endsWith("/") ? (
          // redirect from `/index.html` to `/`
          path + "index.html"
        ) : (
          // redirect from `/foo` to `/foo.html`
          path.substring(0, path.length - 5)
        ),
        redirect: path
      },
      ...redirects.map((item) => ({
        path: item === ":md" ? (
          // redirect from `/foo.md` to `/foo.html`
          path.substring(0, path.length - 5) + ".md"
        ) : item,
        redirect: path
      }))
    );
    return result;
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress
    }
  ]
);
var historyCreator = createMemoryHistory;
var createVueRouter = () => {
  const router = createRouter({
    // it might be an issue of vue-router that have to remove the ending slash
    history: historyCreator(removeEndingSlash("/learn-notes/")),
    routes: createRoutes(),
    scrollBehavior: (to, from, savedPosition) => {
      if (savedPosition)
        return savedPosition;
      if (to.hash)
        return { el: to.hash };
      return { top: 0 };
    }
  });
  router.beforeResolve(async (to, from) => {
    var _a2;
    if (to.path !== from.path || from === START_LOCATION) {
      [pageData.value] = await Promise.all([
        resolvers.resolvePageData(to.name),
        (_a2 = pagesComponents[to.name]) == null ? void 0 : _a2.__asyncLoader()
      ]);
    }
  });
  return router;
};
var setupGlobalComponents = (app) => {
  app.component("ClientOnly", ClientOnly);
  app.component("Content", Content);
};
var setupGlobalComputed = (app, router, clientConfigs2) => {
  const layouts = computed(() => resolvers.resolveLayouts(clientConfigs2));
  const routePath = computedEager(() => router.currentRoute.value.path);
  const routeLocale = computedEager(
    () => resolvers.resolveRouteLocale(siteData.value.locales, routePath.value)
  );
  const siteLocaleData = computed(
    () => resolvers.resolveSiteLocaleData(siteData.value, routeLocale.value)
  );
  const pageFrontmatter = computed(
    () => resolvers.resolvePageFrontmatter(pageData.value)
  );
  const pageHeadTitle = computed(
    () => resolvers.resolvePageHeadTitle(pageData.value, siteLocaleData.value)
  );
  const pageHead = computed(
    () => resolvers.resolvePageHead(
      pageHeadTitle.value,
      pageFrontmatter.value,
      siteLocaleData.value
    )
  );
  const pageLang = computed(
    () => resolvers.resolvePageLang(pageData.value, siteLocaleData.value)
  );
  const pageLayout = computed(
    () => resolvers.resolvePageLayout(pageData.value, layouts.value)
  );
  app.provide(layoutsSymbol, layouts);
  app.provide(pageFrontmatterSymbol, pageFrontmatter);
  app.provide(pageHeadTitleSymbol, pageHeadTitle);
  app.provide(pageHeadSymbol, pageHead);
  app.provide(pageLangSymbol, pageLang);
  app.provide(pageLayoutSymbol, pageLayout);
  app.provide(routeLocaleSymbol, routeLocale);
  app.provide(siteLocaleDataSymbol, siteLocaleData);
  Object.defineProperties(app.config.globalProperties, {
    $frontmatter: { get: () => pageFrontmatter.value },
    $head: { get: () => pageHead.value },
    $headTitle: { get: () => pageHeadTitle.value },
    $lang: { get: () => pageLang.value },
    $page: { get: () => pageData.value },
    $routeLocale: { get: () => routeLocale.value },
    $site: { get: () => siteData.value },
    $siteLocale: { get: () => siteLocaleData.value },
    $withBase: { get: () => withBase }
  });
  return {
    layouts,
    pageData,
    pageFrontmatter,
    pageHead,
    pageHeadTitle,
    pageLang,
    pageLayout,
    routeLocale,
    siteData,
    siteLocaleData
  };
};
var setupUpdateHead = () => {
  const head = usePageHead();
  const lang = usePageLang();
  {
    const ssrContext = useSSRContext();
    if (ssrContext) {
      ssrContext.head = head.value;
      ssrContext.lang = lang.value;
    }
    return;
  }
};
var appCreator = createSSRApp;
var createVueApp = async () => {
  var _a2;
  const app = appCreator({
    name: "VuepressApp",
    setup() {
      var _a3;
      setupUpdateHead();
      for (const clientConfig of clientConfigs) {
        (_a3 = clientConfig.setup) == null ? void 0 : _a3.call(clientConfig);
      }
      return () => [
        h(RouterView),
        ...clientConfigs.flatMap(
          ({ rootComponents = [] }) => rootComponents.map((component) => h(component))
        )
      ];
    }
  });
  const router = createVueRouter();
  setupGlobalComponents(app);
  setupGlobalComputed(app, router, clientConfigs);
  for (const clientConfig of clientConfigs) {
    await ((_a2 = clientConfig.enhance) == null ? void 0 : _a2.call(clientConfig, { app, router, siteData }));
  }
  app.use(router);
  return {
    app,
    router
  };
};
export {
  _export_sfc as _,
  createVueApp
};
