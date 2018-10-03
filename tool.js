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
    n = n.toString()
    return n[1] ? n : '0' + n
  }
  
  
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