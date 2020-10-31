const url = '/api/logon';
const bodyCreator = (userID, password) => `userID=${userID}&password=${password}`;

const data = [
  ['123456', '123456', true],
  ['aaa', 'bbb', true],
  ['666666', 'aaa', true],
  ['bbb', '888888', true],
  ['admin', 'admin', true],
  ['123456', 'ok', false]
];

require('./common').testCreator(
  '注册接口测试',
  data.map((item) => ({
    url,
    title: `注册一个用户: ${item[0]}-${item[1]}(${item[2]})`,
    body: bodyCreator(item[0], item[1]),
    isTrue: item[2]
  }))
);
