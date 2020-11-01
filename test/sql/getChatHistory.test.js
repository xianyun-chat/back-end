const url = '/api/get/chat_history';
const bodyCreator = (roomID, dataNum) => `roomID=${roomID}&dataNum=${dataNum}`;

const data = [
  [1, 3, true],
  [1, 1314, true],
  [1, 0, false],
  [2, 2, true],
  [3, 10, false],
  [999, 999, false],
  [1234, 1234, false]
];

require('./common').testCreator(
  '获取聊天历史',
  data.map((item) => ({
    url,
    title: `获取聊天历史: ${item[0]}-${item[1]}(${item[2]})`,
    body: bodyCreator(item[0], item[1]),
    isTrue: item[2]
  }))
);
