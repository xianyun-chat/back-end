# 后端接口一览

* 后端服务地址: http://49.235.190.178:10010
* method: POST
* ContentType: application/x-www-form-urlencoded

### 登陆: /api/login

| 参数名 | 类型 | 例子 | 说明 |
| ---- | ---- | ---- | ---- |
| userID | string | 'account' | 用户账号/ID |
| password | string | 'password' | 密码 |

### 注册: /api/logon

| 参数名 | 类型 | 例子 | 说明 |
| ---- | ---- | ---- | ---- |
| userID | string | 'account' | 用户账号/ID |
| password | string | 'password' | 密码 |

### 修改密码: /api/logon

| 参数名 | 类型 | 例子 | 说明 |
| ---- | ---- | ---- | ---- |
| userID | string | 'account' | 用户账号/ID |
| passwordOld | string | 'oldPassword' | 原密码 |
| passwordNew | string | 'newPassword' | 新密码 |
