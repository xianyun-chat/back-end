//数据库连接/重启
(function handleConnect() {
  connection = require('mysql').createConnection({
    host: 'localhost',
    user: 'xianyun_chat',
    password: 'xianyun',
    port: '3306',
    database: 'xianyun_chat',
    useConnectionPooling: true
  });

  //连接数据库
  connection.connect((error) => {
    if (error) {
      setTimeout(() => handleConnect(), 2000);
    }
  });

  //出错时重启
  connection.on('error', (error) => {
    if (error.code === 'PROTOCOL_CONNECTION_LOST') {
      setTimeout(() => handleConnect(), 2000);
    }
  });
})();

//用户登录
this.handleLogin = require('./sql/login').handleLogin;
//用户注册
this.handleLogon = require('./sql/logon').handleLogon;
//修改密码
this.handleModifyPassword = require('./sql/modify-password').handleModifyPassword;
