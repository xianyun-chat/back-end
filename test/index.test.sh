# 进入测试目录
cd test/sql

# 自定义测试执行的顺序
mocha logon.test.js
mocha login.test.js
mocha modifyPassword.test.js
