const url = '/api/login';
const bodyCreator = (userID, password) => `userID=${userID}&password=${password}`;

const data = [
  ['123456', '123456', true],
  ['aaa', 'bbb', true],
  ['666666', 'aaa', true],
  ['xyz', '123456', false],
  ['666666', 'bbb', false],
  ['OOO', 'ooo', false]
];

require('./common').testCreator(
  '修改密码接口测试',
  data.map((item) => ({
    url,
    title: `用户登陆: ${item[0]}-${item[1]}(${item[2]})`,
    body: bodyCreator(item[0], item[1]),
    isTrue: item[2]
  }))
);
