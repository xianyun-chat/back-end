# 进入测试目录
cd test/sql

# 自定义测试执行的顺序
mocha logon.test.js
mocha login.test.js
mocha modifyPassword.test.js
mocha modifyUserName.test.js
mocha createChatRoom.test.js
mocha getChatRoomByClass.test.js
mocha getChatRoomByID.test.js
mocha createMessage.test.js
mocha getChatHistory.test.js
