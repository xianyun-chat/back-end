const date = require('../date');

//用户登录
exports.login = (userID, password, callback) => {
  let sql = "select * from User where UID = '" + userID + "' and Password = '" + password + "'";

  connection.query(sql, function(error, results) {
    if (error) {
      console.log('Login: ' + error.message + date.dateNow());
      callback(false);
    } else if (results.length === 0) {
      console.log('Login: Empty Data!' + date.dateNow());
      callback(false);
    } else {
      callback(true);
    }
  });
};
