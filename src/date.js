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

//输入课程的起止日期和上课时间，生成课程每周的时间数据
exports.dateCourse = (begYear, begMonth, begDay, endYear, endMonth, endDay, begHour, begMinute, endHour, endMinute) => {
  let weeks = 16;
  let datetimes = [];
  let startTime = new Date(begYear, begMonth - 1, begDay, begHour, begMinute, 0);
  let endTime = new Date(begYear, begMonth - 1, begDay, endHour, endMinute, 0);
  let endDate = new Date(endYear, endMonth - 1, endDay, 23, 59, 59);

  while (weeks > 0) {
    if (endTime.getTime() > endDate.getTime()) break;

    datetimes.push({
      startTime: this.dateTime(0, startTime),
      endTime: this.dateTime(0, endTime)
    });

    startTime = Date.parse(startTime) + 7 * 24 * 60 * 60 * 1000;
    startTime = new Date(parseInt(startTime));
    endTime = Date.parse(endTime) + 7 * 24 * 60 * 60 * 1000;
    endTime = new Date(parseInt(endTime));
    weeks = weeks - 1;
  }

  return datetimes;
};
