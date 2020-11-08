# 进入测试目录
cd test/sql

# 自定义测试执行的顺序
mocha --reporter mochawesome logon.test.js login.test.js
mocha --reporter mochawesome login.test.js
mocha --reporter mochawesome modifyPassword.test.js
mocha --reporter mochawesome modifyUserName.test.js
mocha --reporter mochawesome createChatRoom.test.js
mocha --reporter mochawesome getChatRoomByClass.test.js
mocha --reporter mochawesome getChatRoomByID.test.js
mocha --reporter mochawesome createMessage.test.js
mocha --reporter mochawesome getChatHistory.test.js
