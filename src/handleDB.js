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
this.login = require('./sql/login').login;
//用户注册
this.logon = require('./sql/logon').logon;
//修改密码
this.modifyPassword = require('./sql/modifyPassword').modifyPassword;
//修改名字
this.modifyUserName = require('./sql/modifyUserName').modifyUserName;
//创建聊天室
this.createChatRoom = require('./sql/createChatRoom').createChatRoom;
//创建消息
this.createMessage = require('./sql/createMessage').createMessage;
//通过 id 获取聊天室信息
this.getChatRoomByID = require('./sql/getChatRoomByID').getChatRoomByID;
//通过 class 获取聊天室信息
this.getChatRoomByClass = require('./sql/getChatRoomByClass').getChatRoomByClass;
//获取聊天历史记录
this.getChatHistory = require('./sql/getChatHistory').getChatHistory;
