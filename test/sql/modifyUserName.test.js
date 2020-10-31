const url = '/api/modify/user_name';
const bodyCreator = (userID, userName) => `userID=${userID}&userName=${userName}`;

const data = [
  ['123456', '我是谁', true],
  ['aaa', '无情的3Q人', true],
  ['admin', '管理员叔叔', true],
  ['bbb', '工具人', true],
  ['nothing', '改个名字真南', false]
];

require('./common').testCreator(
  '修改密码接口测试',
  data.map((item) => ({
    url,
    title: `修改一个用户的密码: ${item[0]}-${item[1]}(${item[2]})`,
    body: bodyCreator(item[0], item[1]),
    isTrue: item[2]
  }))
);
