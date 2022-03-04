// 模拟 call
Function.prototype.myCall = function(context = window, ...arg) {
  if (this === Function.prototype) {
    return undefined
  }
  context = context || window;
  const fn = Symbol();
  context[fn] = this;
  const result = context[fn](...arg)
  return result;
}

// 模拟 apply
Function.prototype.myApply = function(context = window, args) {
  if (this === Function.prototype) {
    return undefined
  }
  const fn = Symbol();
  context[fn] = this;
  let result;
  if (Array.isArray(args)) {
    result = context[fn](...args);
  } else {
    result = context[fn]();
  }
  return result
}

// 模拟实现bind
/**
 * 1.处理参数，返回一个闭包
 * 2.判断是否为构造函数调用，如果是则使用new 调用当前函数
 * 3.如果不是，使用apply,将 context 和处理好的参数传入
 */
Function.prototype.myBind = function(context, ...args1) {
  if (this === Function.prototype) {
    throw new TypeError('Error')
  }
  const _this = this;
  return function F(...args2) {
    if (this instanceof F) {
      return new _this(...args1, ...args2)
    }
    return _this.apply(context, args1.concat(args2))
  }
}
