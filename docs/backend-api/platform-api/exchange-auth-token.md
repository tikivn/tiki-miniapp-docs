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
  "code": "FEq55lKFWxhZKgHAYptytkfFI-inPI9S0R0eAJ6Zmbs.ghJJ6iKU5eiCFeyfhTAcV7sQ_Fz5gYyZNTxkLtA5gJE",
  "client_id": "pg94irQ2EbLV1fDV",
  "timestamp": 1622678975,
  "signature": "fa729c7d06683ebc4bf3a7f8eb0d753b2f3bfe992a0941913c9fb7c5e4194adf"
}'

Response:

{
  "data": {
    "access_token": "kxvT9fhnIsMpS2ZWruNXbQnXiadDZdDwSsOnCkbUlhs.8bmqP1rsssjERWGdO2xvCEwCOg-zov09UDVLgrx7qIg",
    "expires_in": 3600,
    "refresh_token": "-xMfLgwjAKyFTm6TOngU9mEygXZKL8PLBVUImlRWKOg.EqK0YGeXBr7xxH0JMahCaAoJWNTIo8_-nkEW1jY80IM",
    "scopes": [
      "offline",
      "user_profile"
    ],
    "token_type": "bearer"
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
  "refresh_token": "-xMfLgwjAKyFTm6TOngU9mEygXZKL8PLBVUImlRWKOg.EqK0YGeXBr7xxH0JMahCaAoJWNTIo8_-nkEW1jY80IM",
  "client_id": "pg94irQ2EbLV1fDV",
  "timestamp": 1622678975,
  "signature": "6feaf61c50e51c280ab379c281e291171b72d762744b9871284cfb006443507d"
}'

Response:

{
  "data": {
    "access_token": "cXvegklVEOFLnWisSF63StGLmk9DSmphXf1HusphnA8.s3IIP4srYM7vi5eRC6IJId4_iwKDiXNJo2rZUQW4Dcc",
    "expires_in": 3599,
    "refresh_token": "cXvegklVEOFLnWisSF63StGLmk9DSmphXf1HusphnA8.s3IIP4srYM7vi5eRC6IJId4_iwKDiXNJo2rZUQW4Dcc",
    "scopes": [
        "offline",
        "user_profile"
    ],
    "token_type": "bearer"
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
