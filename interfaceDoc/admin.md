# 接口文档

## /vX/api/user/login
---
* Base Information:
API path | Method | Format | Description
/vX/api/user/login | POST | JSON | 用户登录

* Input Parameters:
Name | Type | Required | Description
username | string | Yes | 用户名
password | string | Yes | 密码

* Response Result:
Name | Type | Required | Description
code | int | Yes | status code -> 0:succeed, -1:error
msg | string | Yes | 后台返回信息
token | string | Yes | (JWT token)
data | struct | Yes | 详情见JSON

``` bash
success:
{
    "code": 0,
    "message": "登录成功!",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjMmRmOGE5YjE0YmY3MDAxMGFlY2YxZSIsInNlY3JldCI6IjA5YTE3M2Q5ZDEyMWUxNThjMTM3YTRlZWVjOTVjODZjMmEwYTc3OTdlMjJjOTZiZmU1OTBjZTRjZDhiNmY2YTMiLCJzdWIiOnsiSVRjb2RlIjoiYWRtaW4ifSwiaWF0IjoxNTQ2NTE2NjU0LCJleHAiOjE1NDY1NTk4NTR9.15keCCOHV6YKEIgfWKP_StPBBj86mbuZFqpZJzrjguY",
    "data": {
        "content": {
            "name": "admin",
            "itcode": "admin",
            "email": "admin@qq.com",
            "create_at": 1546516491911
        }
    }
}
fail:
{
    "code": -1,
    "msg": 'request failed!'
}
```
---

## /vX/api/user/get_info
---
* Base Information:
API path | Method | Format | Description
/vX/api/user/get_info | POST | JSON | 获取用户信息

* Request Header:
Name | Type | Required | Description
authorization | String | Yes | 请求头信息(JWT token)

* Input Parameters:
Name | Type | Required | Description
无 |  |  |

* Response Result:
Name | Type | Required | Description
code | int | Yes | status code -> 0:succeed, -1:error
msg | string | Yes | 后台返回信息
data | struct | Yes | 详情见JSON

``` bash
success:
{
    'code': '0',
    'msg': 'success',
    'data': {
        'id': '1',
        'itcode': 'liqm3',
        'title': 'frontend developer',
        'name': 'Li XiaoMing',
        'avatar': 'http://km.xpaas.lenovo.com/download/attachments/8659977/user-avatar',
        'tower': 'Stratege, Technology and Architecture',
        'domain': 'dddd',
        'accessRight': 't5' // 'gl', 'po', 'peer',
        'datetime': '1535367806',
        "permission": ['fbr', 'pbr', 'ss','pv','fa']  
    }
}
fail:
{
    "code": -1,
    "msg": 'request failed!'
}
```
---

## /vX/api/user/logout
---
* Base Information:
API path | Method | Format | Description
/vX/api/user/logout | POST | JSON | 用户登出

* Request Header:
Name | Type | Required | Description
authorization | String | Yes | 请求头信息(JWT token)

* Input Parameters:
* Input Parameters:
Name | Type | Required | Description
无 |  |  |

* Response Result:
Name | Type | Required | Description
code | int | Yes | 用户名
msg | string | Yes | 密码

``` bash
success:
{
    "code": 0,
    "message": "登出成功!"
}
fail:
{
    "code": -1,
    "msg": 'request failed!'
}
```
---