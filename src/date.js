//获取时间戳
exports.dateNow = () => {
  let date = new Date();

  let year = date.getFullYear();
  let month = (date.getMonth() + 1 < 10 ? '0' : '') + (date.getMonth() + 1);
  let day = (date.getDate() < 10 ? '0' : '') + date.getDate();
  let hour = (date.getHours() < 10 ? '0' : '') + date.getHours();
  let minute = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
  let second = (date.getSeconds() < 10 ? '0' : '') + date.getSeconds();

  return '\t' + year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
};

//第一个参数为延后的天数，第二个参数为基准日期（默认为当前日期）
exports.dateTime = (days, date) => {
  if (!date) {
    date = new Date();
  } else {
    date = new Date(date);
  }

  date = Date.parse(new Date(date)) / 1000;
  date += 24 * 60 * 60 * days;
  date = new Date(parseInt(date) * 1000);

  let year = date.getFullYear();
  let month = (date.getMonth() + 1 < 10 ? '0' : '') + (date.getMonth() + 1);
  let day = (date.getDate() < 10 ? '0' : '') + date.getDate();
  let hour = (date.getHours() < 10 ? '0' : '') + date.getHours();
  let minute = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
  let second = (date.getSeconds() < 10 ? '0' : '') + date.getSeconds();

  return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
};
