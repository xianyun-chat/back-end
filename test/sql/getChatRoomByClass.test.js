const url = '/api/get/chat_room/by_class';
const bodyCreator = (className) => `className=${className}`;

const data = [
  ['美食', true],
  ['校园', true],
  ['游戏', true],
  ['', false],
  ['科技', false],
  ['这是一个不存在的分类', false],
  ['abcdedghijklmn', false]
];

require('./common').testCreator(
  '通过分类获取聊天室信息接口测试',
  data.map((item) => ({
    url,
    title: `通过分类获取聊天室: ${item[0]}(${item[1]})`,
    body: bodyCreator(item[0]),
    isTrue: item[1]
  }))
);
