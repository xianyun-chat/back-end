const date = require('../date');

//用户注册
exports.handleLogon = (userID, password, callback) => {
  let sql = "insert into User(UID, Password) values ('" + userID + "', '" + password + "')";

  connection.query(sql, function(error) {
    if (error) {
      console.log('Logon: ' + error.message + date.dateNow());
      callback(false);
    } else {
      callback(true);
    }
  });
};
