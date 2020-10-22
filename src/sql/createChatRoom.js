const date = require('../date');

//创建聊天室
exports.createChatRoom = (roomName, userID, className, callback) => {
  let sql = `insert into ChatRoom(CRName, Creator, Class) values('${roomName}', '${userID}', '${className}')`;

  connection.query(sql, function(error) {
    if (error) {
      console.log('CreateChatRoom: ' + error.message + date.dateNow());
      callback(false);
    } else {
      callback(true);
    }
  });
};
