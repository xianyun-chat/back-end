const date = require('../date');

//创建聊天室
exports.createChatRoom = (roomName, className, userID, capacity, callback) => {
  let sql = `insert into ChatRoom(CRName, Class, Creator, Capacity)
    values('${roomName}', '${className}', '${userID}', ${capacity})`;

  connection.query(sql, function(error) {
    if (error) {
      console.log('CreateChatRoom: ' + error.message + date.dateNow());
      callback(false);
    } else {
      callback(true);
    }
  });
};
