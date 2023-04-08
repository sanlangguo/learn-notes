/**
 * 格式化时间戳
 */

export function formatTimestamp(timestamp, isStr) {
  const date = new Date(parseInt(timestamp));
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  
  if (isStr) {
    return `${year}年${month}月${day}日`;
  } else {
    return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':');
  }
}
  
const formatNumber = n => {
  n = n.toString();
  return n[1] ? n : '0' + n;
};
  
  
// 秒转分||时
export function secondFormatToMinute(value) {
  let secondTime = parseInt(value); // 秒
  let minuteTime = 0; // 分
  let hourTime = 0; // 小时
  if (secondTime > 60) {
    minuteTime = parseInt((secondTime / 60).toString());
    secondTime = parseInt((secondTime % 60).toString());
    if (secondTime < 10) {
      secondTime = `0${secondTime}`;
    }
    if (minuteTime > 60) {
      hourTime = parseInt((minuteTime / 60).toString());
      minuteTime = parseInt((minuteTime % 60).toString());
    }
  }
  let result = `${parseInt(secondTime)}`;
  if ((minuteTime > 0) && (minuteTime < 60)) {
    result = `${parseInt(minuteTime)}分${result}秒`;
  } else {
    result = `${parseInt(secondTime)}秒`;
  }
  if (hourTime > 0) {
    result = `${parseInt(hourTime)}时${result}`;
  }
  value = result;
  return result;
}

//数字补0 
//（9=09）
function pad(num) {
  var len = num.toString().length;
  while (len < 2) {
    num = '0' + num;
    len++;
  }
  return num;
}

// 数组深拷贝
//[{}],[1,2]
function copy(ary) {
  let newAry = [];
  for (const item of ary) {
    let value = item;
    if (Object.prototype.toString.call(value) === '[object Object]') value = copyObj(value);
    if (Object.prototype.toString.call(value) === '[object Array]') value = copyAry(value);
    newAry.push(value);
  }
  return newAry;
}

function copyObj(obj) {
  let newObj = {};
  for (const key in obj) {
    let value = obj[key];
    if (Object.prototype.toString.call(value) === '[object Object]') value = copyObj(value);
    if (Object.prototype.toString.call(value) === '[object Array]') value = copyAry(value);
    newObj[key] = value;
  }
  return newObj;
}

