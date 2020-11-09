# 进入测试目录
cd test/sql

# 自定义测试执行的顺序
mocha --reporter mochawesome logon.test.js login.test.js modifyPassword.test.js modifyUserName.test.js createChatRoom.test.js getChatRoomByClass.test.js getChatRoomByID.test.js createMessage.test.js getChatHistory.test.js
