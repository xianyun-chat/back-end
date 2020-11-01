const url = '/api/get/chat_room/by_id';
const bodyCreator = (roomID) => `roomID=${roomID}`;

const data = [
  [1, true],
  [3, true],
  [5, true],
  [888888888, false],
  [999999999, false],
  [123456789, false],
  [987654321, false]
];

require('./common').testCreator(
  '通过ID获取聊天室信息接口测试',
  data.map((item) => ({
    url,
    title: `通过ID获取聊天室: ${item[0]}(${item[1]})`,
    body: bodyCreator(item[0]),
    isTrue: item[1]
  }))
);
