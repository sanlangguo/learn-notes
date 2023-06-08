
/**
 * 测试 codenium
 * @param {*} phone 手机号
 * @returns 返回中间4位用 * 掩码 手机号
 */
function maskPhone(phone) {
  return phone.replace(/^(\d{3})(\d{4})(\d{4})$/, '$1****$3');
}


// export get local storage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

// export set local storage
export function setLocalStorage(key, value) {
  return localStorage.setItem(key, JSON.stringify(value));
}

// 清楚浏览器所以本地缓存
export function clearLocalStorage() {
  localStorage.clear();
}

// 设置 session 缓存
export function setSessionStorage(key, value) {
  return sessionStorage.setItem(key, JSON.stringify(value));
}

// 获取 session 缓存
export function getSessionStorage(key) {
  return JSON.parse(sessionStorage.getItem(key));
}

// 清除 session 缓存
export function clearSessionStorage() {
  sessionStorage.clear();
}

// 节流
export function throttle(fn, delay) {
  let timer = null;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

// 数组去重
export function unique(arr) {
  return Array.from(new Set(arr));
}

// 数组 json 根据 id 去重
export function uniqueId(arr) {
  return Array.from(new Set(arr.map(item => item.id)));
}

// 获取当天时间戳
export function getTimeStamp() {
  return new Date().getTime();
}