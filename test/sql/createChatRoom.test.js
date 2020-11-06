const url = '/api/create/chat_room';
const bodyCreator = (roomName, className, userID, capacity) =>
  `roomName=${roomName}&className=${className}&userID=${userID}&capacity=${capacity}`;

const data = [
  ['红烧鱼头', '美食', '123456', 50, true],
  ['麻辣鸡丁', '美食', '123456', 30, true],
  ['考研一定上岸！', '校园', 'aaa', 10, true],
  ['全球某工商表白墙', '校园', 'admin', 10, true],
  ['王者开黑007', '游戏', 'admin', 0, true],
  ['母猪的产后护理', '科技', 'react', false]
];

require('./common').testCreator(
  '创建聊天室接口测试',
  data.map((item) => ({
    url,
    title: `创建聊天室: ${item[0]}-${item[1]}-${item[2]}-${item[3]}(${item[4]})`,
    body: bodyCreator(...item),
    isTrue: item[4]
  }))
);
