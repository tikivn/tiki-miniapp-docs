---
title: Exchange Auth Code for Auth Token
---

## Giới Thiệu

Để có thể thay user thực hiện một số tác vụ với hệ thống Tiki thì bạn cần được cấp một token với một số quyền do user đồng ý cấp. Để lấy được token này thì các bạn cần phải đi qua các bước của OAuth2 trong đó Tiki đóng vai trò authorization server. Tài liệu này mô tả các API mà bạn cần để có thể lấy được auth token sau khi đã có auth code.

Các bước để lấy auth code các bạn có thể tham khảo ở [đây](../open-api/overview)

## Exchange Auth Code for Auth Token

Sau đây là lệnh gọi mẫu bằng lệnh cURL

```bash
# Endpoint này của Tiki sử dụng RESTful API

Request:

curl -X 'POST' -d '{"code":"ZH_QKINym4lUvwyfFjazHWIYqR4TqNXX6BZpcp8Ibng.N9i1OHCsCcrLhBS4OWZrqpM85Sc_8BrDjzyuWwrjgXs"}' -H 'Content-Type: application/json' -H 'X-Tiniapp-Client-Id: 8GXqhWDK3EppMwf8IyQU1GHgfq2TPADe' -H 'X-Tiniapp-Signature: 4021f274a3c1bb4ac600cee6d0da3c7704a829d175bb0b81cee2d2ed007a50f1' -H 'X-Tiniapp-Timestamp: 1624332586655' 'https://api.tala.xyz/tiniapp-open-api/api/v1/oauth/auth/token'

Response:

{
  "data":{
    "access_token":"4Qaki2VU_IptZq3lUFXt3MWn0hH-XEKCXCsk0-i9r7o.o6aGPqgCBp3ac-0lJalWb78KJsxcNpXPBgY2poroE4E",
    "expires_in":3600,
    "refresh_token":"oiOvAz5-QpU57anfgSGDvSDQqa0nG4Du_9Fu7EEIiCk.uXwSpktiDzHBSmkYORc65QBGK109fJRZo175w2JasCI",
    "scopes":[
      "offline",
      "user_profile"
    ],
    "token_type":"bearer"
  },
  "error": null
}
```

Những lỗi có thể xảy ra có response như sau:

```bash
Invalid Code:

{
  "data": null,
  "error": {
    "code": 400,
    "reason": "invalid_code"
    "message": "invalid auth code",
  }
}

Invalid Signature:

{
  "data": null,
  "error": {
    "code": 400,
    "reason": "invalid_signature"
    "message": "invalid signature",
  }
}
```

## Refresh Auth Token

Vì auth token là token được cấp với thời gian valid ngắn. Nếu bạn có nhu cầu muốn sử dụng auth token với nhiều tác vụ thì bạn cần phải có logic backend để refresh auth token. Tốt nhất là bạn nên refresh auth token trước khi token bị hết hạn để tối ưu trải nghiệm người dùng.

Để refresh token thì các bạn gọi API như sau

```bash
# Endpoint này của Tiki sử dụng RESTful API

Request:

curl -X 'POST' -d '{"refresh_token":"bz_fFvRjA3Yo8Sp-GCdFeks8JZYvn22rZdzNS8lBsmc.RHHz3S4cps9FFjttYZCmsaLqOP4pfa1s-7xdL1r8Xbg"}' -H 'Content-Type: application/json' -H 'X-Tiniapp-Client-Id: 8GXqhWDK3EppMwf8IyQU1GHgfq2TPADe' -H 'X-Tiniapp-Signature: 5d7189cce5baa90aaa3d4b1a74ead02c953fe9156504c0c0f987c07f879bcbde' -H 'X-Tiniapp-Timestamp: 1624332740977' 'https://api.tala.xyz/tiniapp-open-api/api/v1/oauth/auth/token/refresh'

Response:

{
  "data":{
    "access_token":"adxlbxvnqH7H-lh8ToYvXCjUXZp9aWkJvHj83eFgjlg.Kc41ZuRy9lZf9XjFfpFcBKx9uhXYviz7_OP2KrxjB5E",
    "expires_in":3600,
    "refresh_token":"adxlbxvnqH7H-lh8ToYvXCjUXZp9aWkJvHj83eFgjlg.Kc41ZuRy9lZf9XjFfpFcBKx9uhXYviz7_OP2KrxjB5E",
    "scopes":[
      "offline",
      "user_profile"
    ],
    "token_type":"bearer"
  },
  "error": null
}
```

Những lỗi có thể xảy ra có response như sau:

```bash
Invalid Token:

{
  "data": null,
  "error": {
    "code": 400,
    "reason": "invalid_token"
    "message": "invalid refresh token",
  }
}

Invalid Signature:

{
  "data": null,
  "error": {
    "code": 400,
    "reason": "invalid_signature"
    "message": "invalid signature",
  }
}
```

## Get Info From Auth Token

Để lấy thông tin từ Auth Token thì các bạn gọi API như sau

```bash
# Endpoint này của Tiki sử dụng RESTful API

Request:

curl -X 'POST' -d '{"access_token":"a5lY7OEnRnLFb2JqraiiDEuo6FtC5-NDvM_g8LL18Ow.m7OZKEuPWehCktnSjPX3twvndVWLEoT6M3dLSSCKujk"}' -H 'Content-Type: application/json' -H 'X-Tiniapp-Client-Id: 8GXqhWDK3EppMwf8IyQU1GHgfq2TPADe' -H 'X-Tiniapp-Signature: 33088802bd81dd6f0282f33f35cbf87d6e9de5b97e45c8f5b979e0afcccbfdcf' -H 'X-Tiniapp-Timestamp: 1624332795944' 'https://api.tala.xyz/tiniapp-open-api/api/v1/oauth/me'

Response:

{
  "data":{
    "customer_id":1,
    "customer_name":"Ti Ni",
    "scopes":[
      "offline",
      "user_profile"
    ]
  },
  "error":null
}
```

Những lỗi có thể xảy ra có response như sau:

```bash
Invalid Token:

{
  "data": null,
  "error": {
    "code": 400,
    "reason": "invalid_token"
    "message": "invalid access token",
  },
}

Invalid Signature:

{
  "data": null,
  "error": {
    "code": 400,
    "reason": "invalid_signature"
    "message": "invalid signature",
  }
}
```
