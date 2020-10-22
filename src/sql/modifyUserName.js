const date = require('../date');

//修改用户名称
exports.modifyUserName = (userID, userName, callback) => {
  let sql = `update User set UName='${userName}' where UID='${userID}'`;

  connection.query(sql, function(error, results) {
    if (error) {
      console.log('ModifyUserName: ' + error.message + date.dateNow());
      callback(false);
    } else if (results.affectedRows === 0) {
      console.log('ModifyUserName: Nothing Changed!' + date.dateNow());
      callback(false);
    } else {
      callback(true);
    }
  });
};
