# 服务器后端API接口定义规范

* URL: http://49.235.190.178:10010
* Method: POST
* ContentType: application/x-www-form-urlencoded

> 登陆: /api/login

| 请求参数名 | 类型 | 例子 | 说明 |
| ---- | ---- | ---- | ---- |
| userID | string | '13978278212' | 用户账号/ID |
| password | string | '123456abc' | 密码 |

| 响应参数名 | 类型 | 例子 | 说明 |
| ---- | ---- | ---- | ---- |
| code | number | 200/1001  | 状态码（成功/失败） |
| message | string | 'login success!' | 提示信息 |

> 注册: /api/logon

| 请求参数名 | 类型 | 例子 | 说明 |
| ---- | ---- | ---- | ---- |
| userID | string | '13978278212' | 用户账号/ID |
| password | string | '123456abc' | 密码 |

| 响应参数名 | 类型 | 例子 | 说明 |
| ---- | ---- | ---- | ---- |
| code | number | 200/1002  | 状态码（成功/失败） |
| message | string | 'logon success!' | 提示信息 |

> 修改密码: /api/modify/password

| 请求参数名 | 类型 | 例子 | 说明 |
| ---- | ---- | ---- | ---- |
| userID | string | '13978278212' | 用户账号/ID |
| passwordOld | string | '123456abc' | 原密码 |
| passwordNew | string | '654321cba' | 新密码 |

| 响应参数名 | 类型 | 例子 | 说明 |
| ---- | ---- | ---- | ---- |
| code | number | 200/1003  | 状态码（成功/失败） |
| message | string | 'modify password success!' | 提示信息 |

> 修改用户昵称: /api/modify/user_name

| 请求参数名 | 类型 | 例子 | 说明 |
| ---- | ---- | ---- | ---- |
| userID | string | '13978278212' | 用户账号/ID |
| userName | string | '特工007' | 用户新昵称 |

| 响应参数名 | 类型 | 例子 | 说明 |
| ---- | ---- | ---- | ---- |
| code | number | 200/1004  | 状态码（成功/失败） |
| message | string | 'modify userName success!' | 提示信息 |

> 创建聊天室: /api/create/chat_room

| 请求参数名 | 类型 | 例子 | 说明 |
| ---- | ---- | ---- | ---- |
| roomName | string | '一起来聊天!' | 聊天室名称 |
| className | string | '美食' | 聊天室分类 |
| userID | string | '13978278212' | 用户账号/ID |

| 响应参数名 | 类型 | 例子 | 说明 |
| ---- | ---- | ---- | ---- |
| code | number | 200/2001  | 状态码（成功/失败） |
| message | string | 'create chatRoom success!' | 提示信息 |

> 通过ID获取聊天室信息: /api/get/chat_room/by_id

| 请求参数名 | 类型 | 例子 | 说明 |
| ---- | ---- | ---- | ---- |
| roomID | number | 1 | 聊天室ID |

| 响应参数名 | 类型 | 例子 | 说明 |
| ---- | ---- | ---- | ---- |
| code | number | 200/2002  | 状态码（成功/失败） |
| message | string | 'get chatRoom success!' | 提示信息 |
| chat_room | object | 略 | 聊天室信息（对象） |

> 通过分类获取聊天室信息: /api/get/chat_room/by_class

| 请求参数名 | 类型 | 例子 | 说明 |
| ---- | ---- | ---- | ---- |
| className | string | '美食' | 聊天室分类 |

| 响应参数名 | 类型 | 例子 | 说明 |
| ---- | ---- | ---- | ---- |
| code | number | 200/2003  | 状态码（成功/失败） |
| message | string | 'get chatRoom success!' | 提示信息 |
| chat_rooms | array\<object\> | 略 | 聊天室信息（对象数组）|
