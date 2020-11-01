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

//普通查询接口
const createCommonAPI = ({orderedParameterList, handleFunction, onSuccess, onFailed}) => (req, res) => {
  const parameters = orderedParameterList.map((parameterName) => req.body[parameterName]);

  res.set('Access-Control-Allow-Origin', '*');
  res.set('Content-Type', 'application/json');
  handleFunction(...parameters, (result) => {
    if (result) {
      res.json(onSuccess(result));
    } else {
      res.json(onFailed());
    }
  });
};

//用户登录
app.post('/api/login', (req, res) => {
  let {userID, password} = req.body;

  res.set('Access-Control-Allow-Origin', '*');
  res.set('Content-Type', 'application/json');
  handleDB.login(userID, password, (result) => {
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

//用户注册
app.post(
  '/api/logon',
  createCommonAPI({
    orderedParameterList: ['userID', 'password'],
    handleFunction: handleDB.logon,
    onSuccess: () => ({
      code: 200,
      message: 'logon success!'
    }),
    onFailed: () => ({
      code: 1002,
      message: 'logon failed!'
    })
  })
);

//修改密码
app.post(
  '/api/modify/password',
  createCommonAPI({
    orderedParameterList: ['userID', 'passwordOld', 'passwordNew'],
    handleFunction: handleDB.modifyPassword,
    onSuccess: () => ({
      code: 200,
      message: 'modify password success!'
    }),
    onFailed: () => ({
      code: 1003,
      message: 'modify password failed!'
    })
  })
);

//修改用户名
app.post(
  '/api/modify/user_name',
  createCommonAPI({
    orderedParameterList: ['userID', 'userName'],
    handleFunction: handleDB.modifyUserName,
    onSuccess: () => ({
      code: 200,
      message: 'modify userName success!'
    }),
    onFailed: () => ({
      code: 1004,
      message: 'modify userName failed!'
    })
  })
);

//创建聊天室
app.post(
  '/api/create/chat_room',
  createCommonAPI({
    orderedParameterList: ['roomName', 'className', 'userID'],
    handleFunction: handleDB.createChatRoom,
    onSuccess: () => ({
      code: 200,
      message: 'create chatRoom success!'
    }),
    onFailed: () => ({
      code: 2001,
      message: 'create chatRoom failed!'
    })
  })
);

//通过ID获取聊天室信息
app.post(
  '/api/get/chat_room/by_id',
  createCommonAPI({
    orderedParameterList: ['roomID'],
    handleFunction: handleDB.getChatRoomByID,
    onSuccess: (result) => ({
      code: 200,
      message: 'get chatRoom success!',
      chat_room: result[0]
    }),
    onFailed: () => ({
      code: 2002,
      message: 'get chatRoom failed!'
    })
  })
);

//通过分类获取聊天室信息
app.post(
  '/api/get/chat_room/by_class',
  createCommonAPI({
    orderedParameterList: ['className'],
    handleFunction: handleDB.getChatRoomByClass,
    onSuccess: (result) => ({
      code: 200,
      message: 'get chatRoom success!',
      chat_rooms: result
    }),
    onFailed: () => ({
      code: 2003,
      message: 'get chatRoom failed!'
    })
  })
);

//启动服务
app.listen(10010);
