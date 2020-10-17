let fs = require('fs');
let jwt = require('jsonwebtoken');
let key = fs.readFileSync('./secret.key');
let tokens = {};

//======================= 创建一个新的token ============================

exports.createToken = (userID, callback) => {
  jwt.sign(
    {
      iss: 'LiteracyApp',
      aud: userID,
      exp: Math.floor(Date.now() / 1000) + 7200
    },
    key,
    (err, token) => {
      if (err) {
        console.log(err.message);
      } else {
        tokens[userID] = token;
        callback(token);
      }
    }
  );
};

//======================= 验证用户发送的token ============================

exports.verityToken = (token, userID, callback) => {
  jwt.verify(
    token,
    key,
    {
      issuer: 'LiteracyApp',
      audience: userID
    },
    (err, decode) => {
      if (err) {
        console.log(err.message);
        callback(false);
      } else {
        callback(true);
      }
    }
  );
};

//======================= 清除已有的token ============================

exports.clearToken = ((userID, callback) => {
  for (let token in tokens) {
    if (tokens[token] === tokens[userID]) {
      delete tokens[userID];
      callback(true);
      break;
    }
  }
}).bind(this);
