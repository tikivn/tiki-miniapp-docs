---
title: Exchange Auth Code for Auth Token
---

## Giới Thiệu

Để có thể thay user thực hiện một số tác vụ với hệ thống Tiki thì bạn cần được cấp một token với một số quyền do user đồng ý cấp. Để lấy được token này thì các bạn cần phải đi qua các bước của OAuth2 trong đó Tiki đóng vai trò authorization server. Tài liệu này mô tả các API mà bạn cần để có thể lấy được auth token sau khi đã có auth code.

Các bước để lấy auth code các bạn có thể tham khảo ở [đây](../open-api/overview)

## Exchange Auth Code for Auth Token

Sau đây là lệnh gọi mẫu bằng lệnh cURL

```bash
# Endpoint này của Tiki sử dụng GraphQL API

Request:

curl 'https://api.tiki.vn/tiniapp/api/graphql/query' \
    -H 'Content-Type: application/json' \
    --data-binary '{"query":"query {\n  get_auth_access_token(input: {\n    code: \"THUxTF3HmbPpGxmvDieTCX4kXcb601njUriFUET0RvY.eCZa27znIuM8JGC-IUSM-S_G_YrgP7OH8BTGdba706E\"\n    client_id: \"a1qvgyRzP9pMj0n5ulOG04fdelIHuNqB\"\n    timestamp: 1620470539433\n    signature: \"3ef20afed474d9368371fc8eaf4a529b39a7025b4863e1afbc13bdb6db8cc5f1\"\n  }) {\n    access_token\n    refresh_token\n    expires_in\n    scopes\n  }\n}"}' --compressed


Response:
{
  "data": {
    "get_auth_access_token": {
      "access_token": "GWzA42jrwaFyJ-bGKyBk2IpqPpP5Ehey5tY5iCwzfRw.l81CLG5R6azx4LLqIRAGj-A-Bu2Rgz8ppMKyX_NJGdo",
      "refresh_token": "ouCuOd72UUpc-Rpvu5HaZ88MgAJSHKXlKD71QDutQXo.8jFMWYcdZ1mW9vvDmoXjlg31rbaxAF6ZuLnaRocIbhk",
      "expires_in": 3599,
      "scopes": [
        "offline",
        "user_profile"
      ]
    }
  }
}
```

## Refresh Auth Token

Vì auth token là token được cấp với thời gian valid ngắn. Nếu bạn có nhu cầu muốn sử dụng auth token với nhiều tác vụ thì bạn cần phải có logic backend để refresh auth token. Tốt nhất là bạn nên refresh auth token trước khi token bị hết hạn để tối ưu trải nghiệm người dùng.

Để refresh token thì các bạn gọi API như sau

```bash
# Endpoint này của Tiki sử dụng GraphQL API

Request:
curl 'https://api.tiki.vn/tiniapp/api/graphql/query' \
    -H 'Content-Type: application/json' \
    --data-binary '{"query":"query {\n  refresh_auth_access_token(input: {\n    refresh_token: \"ouCuOd72UUpc-Rpvu5HaZ88MgAJSHKXlKD71QDutQXo.8jFMWYcdZ1mW9vvDmoXjlg31rbaxAF6ZuLnaRocIbhk\"\n    client_id: \"a1qvgyRzP9pMj0n5ulOG04fdelIHuNqB\"\n    timestamp: 1620470539433\n    signature: \"6cdc51b21641d4fa5237e4a9a9810a7002aa0749a9cfd8d4c8f5d348098a3830\"\n  }) {\n    access_token\n    refresh_token\n    expires_in\n    scopes\n  }\n}"}' --compressed

Response:
{
  "data": {
    "refresh_auth_access_token": {
      "access_token": "Tz8wWPFhvUITkyTWpPBueDncMEQLVti8rz6rn7ML5Uo.C_bF66fCkHvN1zMJmd_yzth1-j3PwZQxhV-jS_VEYlg",
      "refresh_token": "ruGaqO2JE3mtczeRb-BUhruFOkNYEWpqqN9q8oQjcVo.XwH8IHwvE_iDJi5XJdovDLbH3ZuJ6mGHxIfhfSvEiRc",
      "expires_in": 3600,
      "scopes": [
        "offline",
        "user_profile"
      ]
    }
  }
}
```
