const date = require('../date');

//创建聊天室
exports.createChatRoom = (roomName, className, userID, callback) => {
  let sql = `insert into ChatRoom(CRName, Class, Creator) values('${roomName}', '${className}', '${userID}')`;

  connection.query(sql, function(error) {
    if (error) {
      console.log('CreateChatRoom: ' + error.message + date.dateNow());
      callback(false);
    } else {
      callback(true);
    }
  });
};
