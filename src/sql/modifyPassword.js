const date = require('../date');

//修改密码
exports.handleModifyPassword = (userID, passwordOld, passwordNew, callback) => {
  let sql =
    "update User set Password='" + passwordNew + "' where UID='" + userID + "' and Password='" + passwordOld + "'";

  connection.query(sql, function(error, results) {
    if (error) {
      console.log('ModifyPassword: ' + error.message + date.dateNow());
      callback(false);
    } else if (results.affectedRows === 0) {
      console.log('ModifyPassword: Nothing Changed!' + date.dateNow());
      callback(false);
    } else {
      callback(true);
    }
  });
};
