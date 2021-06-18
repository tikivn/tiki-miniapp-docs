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

curl -L -X POST 'https://api.tiki.vn/tiniapp-open-api/api/v1/oauth/auth/token' -H 'Content-Type: application/json' --data-raw '{
  "client_id":"pg94irQ2EbLV1fDV",
  "code":"aITD9SE46gloO8V7WYu2v8UO7TURKRQz73Yx69C0L_w.1fLlKBBXCzoGLRiSCBlHsm2rmjfqFp5USpKGTre_f7k",
  "timestamp":1624018243197,
  "signature":"93e925618d39eb679a5ec3540dac67c08b9ccd835377a382819869edd6244e75"
}'

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

curl -L -X POST 'https://api.tiki.vn/tiniapp-open-api/api/v1/oauth/auth/token/refresh' -H 'Content-Type: application/json' --data-raw '{
  "client_id":"pg94irQ2EbLV1fDV",
  "refresh_token":"oiOvAz5-QpU57anfgSGDvSDQqa0nG4Du_9Fu7EEIiCk.uXwSpktiDzHBSmkYORc65QBGK109fJRZo175w2JasCI",
  "timestamp":1624018489878,
  "signature":"fe8a525334d302bc56564b3d17f0d4f204a84224c23970189415ec463911cae9"
}'

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

curl -L -X POST 'https://api.tiki.vn/tiniapp-open-api/api/v1/oauth/me' -H 'Content-Type: application/json' --data-raw '{
  "access_token":"adxlbxvnqH7H-lh8ToYvXCjUXZp9aWkJvHj83eFgjlg.Kc41ZuRy9lZf9XjFfpFcBKx9uhXYviz7_OP2KrxjB5E",
  "client_id":"pg94irQ2EbLV1fDV",
  "timestamp":1624018701875,
  "signature":"1357adc78b8840d462e859b1132b86372a0b19ae74f7fcec211c384d0fa0784d"
}'

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
