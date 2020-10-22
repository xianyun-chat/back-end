const date = require('../date');

//通过分类获取聊天室信息
exports.getChatRoomByClass = (className, callback) => {
  let sql = `select * from ChatRoom where Class = '${className}'`;

  connection.query(sql, function(error, results) {
    if (error) {
      console.log('GetChatRoomByClass: ' + error.message + date.dateNow());
      callback(false);
    } else if (results.length === 0) {
      console.log('GetChatRoomByClass: Empty Data!' + date.dateNow());
      callback(false);
    } else {
      callback(results);
    }
  });
};
