const date = require('../date');

//创建一条消息
exports.createMessage = (roomID, userID, content, callback) => {
  let sql = `insert into ChatHistory(CRID, UID, Content) values('${roomID}', '${userID}', '${content}')`;

  connection.query(sql, function(error) {
    if (error) {
      console.log('CreateMessage: ' + error.message + date.dateNow());
      callback(false);
    } else {
      callback(true);
    }
  });
};
