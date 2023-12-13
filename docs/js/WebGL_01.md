### 初识 WebGL

### WebGL 基本概念

WebGL（Web 图形库）是一个 JavaScript API，可在任何兼容的 Web 浏览器中渲染高性能的交互式 3D 和 2D 图形，而无需使用插件。WebGL 通过引入一个与 OpenGL ES 2.0 非常一致的 API 来做到这一点，该 API 可以在 HTML5 `<canvas>` 元素中使用。这种一致性使 API 可以利用用户设备提供的硬件图形加速。

### 浏览器兼容性

目前支持 WebGL 的浏览器有：Firefox 4+, Google Chrome 9+, Opera 12+, Safari 5.1+, Internet Explorer 11+ 和 Microsoft Edge build 10240+；然而，WebGL 一些特性也需要用户的硬件设备支持。

WebGL 2 API 引入了对大部分的 OpenGL ES 3.0 功能集的支持; 它是通过WebGL2RenderingContext界面提供的。

![image-20231213225624930](/img/webgl-use.png)



### OpenGL

了解WebGL，我们先介绍下OpenGL，因为WebGL 是基于 OpenGL 的。OpenGL（Open Graphics Library）是一个用于渲染2D和3D图形的跨平台编程接口。它提供了一组函数，允许开发人员直接与图形硬件交互，从而实现高性能的图形渲染。

OpenGL具有以下特点：

- 跨平台：OpenGL可以在多个操作系统上运行，包括Windows、macOS和Linux等。
- 硬件加速：OpenGL利用图形硬件的功能，通过并行处理和硬件加速来实现高效的图形渲染。
- 可编程性：OpenGL支持可编程渲染管线，允许开发人员根据自己的需求自定义图形渲染过程。
- 多功能性：OpenGL支持2D和3D图形渲染，可以绘制各种几何图形、纹理映射、光照效果等。
- 开放性：OpenGL是一个开放标准，由Khronos Group组织负责维护和发展。











待完善。。。



#### 参考

[WebGL_API](https://developer.mozilla.org/zh-CN/docs/Web/API/WebGL_API)