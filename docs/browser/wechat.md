### 微信公众号开发之监听返回事件 

- 项目中经常会遇到，用户填写表单之类的内容，填了一部分之后，可能会返回上一页，此时需要给用户一个提示，这就需要监听微信浏览器的返回事件，直接上代码

```js
mounted () {
    if (window.history && window.history.pushState) {
      history.pushState(null, null, document.URL)
      window.addEventListener('popstate', this.backChange, false) // false阻止默认事件
    }
  },
  destroyed () {
    window.removeEventListener('popstate', this.backChange, false) // false阻止默认事件
},
methods: {
   // 监听微信返回按钮
   backChange () {
     // const that = this
     console.log('监听到了')
     if (localStorage.getItem('reason')) {
       history.pushState(null, null, document.URL)
       // 这里是如果用户填写信息，自定义弹框显示，提示用户
       this.leaveDialog = true
     }
   },
}
```
