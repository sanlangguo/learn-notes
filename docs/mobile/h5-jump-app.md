### H5 跳转应用市场

只跳转到应用市场,这种场景是最简单容易实现的

    if ('and') {
        window.location.href = 'apk link url'
    } else if ('ios') {
        window.location.href = 'https://itunes.apple.com/cn/app/xxxx'
    }

### H5 跳转 APP 原理

 首先，不管 iOS 还是 Android，浏览器都不可能预知本地是否安装了某个 APP 的。或者更严谨地说，我们不能通过浏览器来预知本地是否安装。其次，本质上浏览器是通过 URL scheme 打开 APP，一个 APP 可以设置一个或多个打开自己的 URL scheme。比如，Twitter 就注册自己能被「twitter://」打开。

### 针对 H5 跳转安卓 APP 指定页面

根据我们的需求，不同业务场景进入页面不一样，因此需要客户端和 H5 先约定，定义多个 scheme，才能跳转 app 指定页面或者打开 app, 备注：vue

    // 该组件是公共下载页面，currentUrl 是上级页面完整地址，根据我们的业务场景需要记录下,也是因为用户在微信下，从上级页面进入到当前下载页这时需要用户在浏览器打开此页面，这时就需要 currentUrl，来记录上级页面地址
    created () {
      let { type, roomNo, currentUrl } = this.$route.query;
      // currentUrl 是 H5 的地址，需要在 app 内 打开 H5 地址，encode 是对中文或者特殊符号进行转译
      currentUrl = encodeURIComponent(decodeURIComponent(currentUrl))
      let shareUrl
      const ua = navigator.userAgent
      const isAndroid = /(?:Android)/.test(ua)
      switch (type) {
        case 'A':
          shareUrl = `ytx://newapp/A?&url=${currentUrl}`
          break
        case 'B':
          shareUrl = `ytx://newapp/B?roomNo=${roomNo}`
          break
      }
     // 需要注意的是在微信环境下，不能直接跳转，这时需要引导用户到浏览器，才能唤醒 app,
     if (!this.inWechat) { // 不是微信直接打开 app
        window.location.replace(shareUrl); // 其实页面跳转，location.href 也是可以的，根据业务场景可自己调整
      }
    },

### H5 跳转 IOS APP 指定页面

sharesdk 是 ios 借助第三方平台 (mob) ，通过第三方接受 H5 传的参数，来进行页面跳转处理

    <style>
    // 隐藏 sharesdk 自定义下载样式，我们需求是单独设计的点击下载，所以要对第三方的样式禁用
    .mobLink-wrapper {
      display: none !important;
    }
    </style>
    在 index.html 中引入
    <script src="https://arao.t4m.cn/sharesdk.js"></script>
    <script>
      // 直接在下载
      fuction iosDownApp() {
         document.getElementsByClassName('mobLink-btn')[0].click()
      }
    </script>
    首页还是先约定好schemes， 和安卓一样，只不过，ios 我们是借助第三方实现。当自定义打开指定页面时，schemes 是自定义
    约定的参数。备注：vue
     mounted () {
        if (this.ios) {
          ShareSDK([
            {
              params: {
                targetAction_iOS: 'MTNWebViewController',
                targetAction_And: '',
                other: { schemes: `ytx://newapp/web?title=文章&url=${encodeURIComponent(window.location.href)}` }
              }
            }
          ])
        }
      },
