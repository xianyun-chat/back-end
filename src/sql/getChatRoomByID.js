const date = require('../date');

//通过ID获取聊天室信息
exports.getChatRoomByID = (roomID, callback) => {
  let sql = `select * from ChatRoom where CRID = '${roomID}'`;

  connection.query(sql, function(error, results) {
    if (error) {
      console.log('GetChatRoomByID: ' + error.message + date.dateNow());
      callback(false);
    } else if (results.length === 0) {
      console.log('GetChatRoomByID: Empty Data!' + date.dateNow());
      callback(false);
    } else {
      callback(results);
    }
  });
};
