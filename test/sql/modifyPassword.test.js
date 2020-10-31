const url = '/api/modify/password';
const bodyCreator = (userID, passwordOld, passwordNew) =>
  `userID=${userID}&passwordOld=${passwordOld}&passwordNew=${passwordNew}`;

const data = [
  ['123456', '123456', '999999', true],
  ['123456', '654321', '654321', false],
  ['123456', '999999', '888888', true],
  ['aaa', 'bbb', 'ccc', true],
  ['666666', 'bbb', 'ccc', false],
  ['555555', 'bbb', 'ccc', false]
];

require('./common').testCreator(
  '修改密码接口测试',
  data.map((item) => ({
    url,
    title: `修改一个用户的密码: ${item[0]}-${item[1]}-${item[2]}(${item[3]})`,
    body: bodyCreator(item[0], item[1], item[2]),
    isTrue: item[3]
  }))
);
