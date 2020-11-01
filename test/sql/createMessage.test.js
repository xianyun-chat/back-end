const {assert} = require('chai');
const io = require('socket.io-client');

const socket = io('http://localhost:10020', {
  reconnectionDelayMax: 100000
});

const data = [
  [1, '123456', '今天干什么', true],
  [1, 'bbb', '在家里躺了一天', true],
  [1, 'aaa', '好巧, 我也是', true],
  [2, '123456', '爆料，aaa和bbb在家里躺了一天什么也没做', true],
  [2, 'admin', '收到', true],
  [2, 'nothing', '不存在的用户', false],
  [888, 'admin', '不存在的房间', false]
];

describe('发送信息接口测试', () => {
  it(`发送 ${data.length} 条消息`, (done) => {
    let count = 0;
    socket.on('serverToClient', (message) => {
      const isTrue = data[message.extra.index][3];
      isTrue && assert.equal(message.code, undefined);
      !isTrue && assert.notEqual(message.code, 200);
      if (++count === data.length) {
        socket.disconnect();
        done();
      }
    });
    data.forEach((item, i) => {
      socket.emit('subscribe', {roomID: item[0]});
      socket.emit('clientToServer', {
        roomID: item[0],
        userID: item[1],
        content: item[2],
        extra: {index: i}
      });
    });
  });
});
