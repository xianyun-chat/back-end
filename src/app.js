let app = require('express')();
let bodyParser = require('body-parser');
let handleDB = require('./handleDB');
let handleToken = require('./handleToken');

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

//======================= 用户登录 ============================

app.post('/api/login', (req, res) => {
  let { userID, password } = req.body;

  res.set('Access-Control-Allow-Origin', '*');
  res.set('Content-Type', 'application/json');
  handleDB.handleLogin(userID, password, (result) => {
    if (result) {
      //登录成功
      handleToken.createToken(userID, (token) => {
        res.json({
          code: 200,
          message: 'login success!',
          token: token,
          expiresIn: 7200 //有效期为２小时
        });
      });
    } else {
      //登录失败
      res.json({
        code: 1001,
        message: 'login failed!'
      });
    }
  });
});

//======================= 用户注册 ============================

app.post('/api/logon', (req, res) => {
  let { userID, password } = req.body;

  res.set('Access-Control-Allow-Origin', '*');
  res.set('Content-Type', 'application/json');
  handleDB.handleLogon(userID, password, (result) => {
    if (result) {
      //注册成功
      res.json({
        code: 200,
        message: 'logon success!'
      });
    } else {
      //注册失败
      res.json({
        code: 1002,
        message: 'logon failed!'
      });
    }
  });
});

//======================= 修改密码 ============================

app.post('/api/modify/password', (req, res) => {
  let { userID, passwordOld, passwordNew } = req.body;

  res.set('Access-Control-Allow-Origin', '*');
  res.set('Content-Type', 'application/json');
  handleDB.handleModifyPassword(userID, passwordOld, passwordNew, (result) => {
    if (result) {
      //修改成功
      res.json({
        code: 200,
        message: 'modify password success!'
      });
    } else {
      //修改失败
      res.json({
        code: 1004,
        message: 'invalid password!'
      });
    }
  });
});

//启动服务
app.listen(10010);
