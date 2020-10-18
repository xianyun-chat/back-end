const date = require('../date');

//获取聊天历史
exports.handleGetChatHistory = (roomID, dataNum, callback) => {
  let sql = `select * from ChatHistory where CRID = '${roomID}' order by Timestamp DESC limit ${dataNum}`;

  connection.query(sql, function(error, results) {
    if (error) {
      console.log('GetChatHistory: ' + error.message + date.dateNow());
      callback(false);
    } else if (results.length === 0) {
      console.log('GetChatHistory: Empty Data!' + date.dateNow());
      callback(false);
    } else {
      callback(results);
    }
  });
};
