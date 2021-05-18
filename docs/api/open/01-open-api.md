---
title: Tiki Open APIs
---

## Giới Thiệu

Khi bạn xây dựng Tini App để phục vụ cho user của Tiki. Sẽ có nhiều trường hợp bạn sẽ cần phải đại diện cho user để lấy thông tin hoặc thực hiện một số tác vụ thay cho user trên hệ thống của Tiki. Các APIs mà Tiki đã public ra để các bạn có thể hiện thực các tác vụ này thuộc nhóm Open APIs của Tiki.

## Access Open APIs Như Thế Nào?

Vì các bạn sẽ đại diện cho user để gọi các API này trên Tiki, nên các bạn cần phải có sự đồng ý của user bằng cách gọi API `my.getAuthCode`. Nếu user đồng ý cho access thì các bạn sẽ được cấp một auth code. Sau khi có auth code này rồi các bạn có thể dùng để exchange một auth token. Sau đó, bạn có thể dùng auth token này để gọi các Open APIs.

_Khác với [Platform APIs](platform-backend), bạn có thể gọi Tiki Open APIs từ cả frontend và backend của Tini App sử dụng auth token mà bạn được cấp._

### Overview

_Điều kiện cần:_

- Cần biết key và secret cấp cho Tini App của bạn trên Dev Center
- Cần biết Open API mà bạn muốn gọi sẽ cần scope nào
- Cần có được sự đồng ý của người dùng để sử dụng các scope ở trên, tương đương với auth code
- Cần có một backend của bạn để có thể thực hiện bước trao đổi auth code lấy auth token với [Platform APIs](platform-backend)

### Chi Tiết

#### Luồng Lấy Auth Token

1. Xác định Open API bạn muốn gọi sẽ cần các scope nào
1. Ở Tini App bạn sử dụng JS API [`my.getAuthCode`](get-auth-code) và truyền vào các scope của bạn cần.
1. Nếu user đồng ý, bạn sẽ nhận được auth code. Auth code trả về sẽ có dạng như sau:

   `CDKJfdkj4528KJ.eCZa27znIuM8JGC-IUSM-S_G_YrgP7OH8BTGdba706E`

1. Gửi auth code này xuống backend của bạn
1. Backend của bạn sẽ gọi [Platform APIs](platform-backend) của Tiki để exchange auth code này thành 1 auth token
1. Sau khi có auth token thì bạn có thể sử dụng để gọi vào các open APIs mà Tiki cung cấp

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

#### Luồng Để Refresh Token

Vì auth token là token được cấp với thời gian valid ngắn. Nếu bạn có nhu cầu muốn sử dụng auth token với nhiều tác vụ thì bạn cần phải có logic backend để refresh auth token. Tốt nhất là bạn nên refresh auth token trước khi bị hết hạn để tối ưu trải nghiệm người dùng.

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

### References

- Tham khảo cách gọi platform APIs ở [đây](platform-backend)
- Tham khảo cách tính signature ở [đây](calculate-signature)
- Tham khảo về GraphQL ở [đây](https://graphql.org/)
- Tham khảo luồng lấy auth token bằng backend Go ở [đây](https://github.com/tikivn/tiniapp-backend-oauth-sample)

## Danh Sách Open APIs

Sau đây là danh sách các Open APIs mà bạn có thể gọi sử dụng auth token được cấp ở trên

### API Lấy Thông Tin Của Người Dùng

Bạn cần phải có auth token để gọi API này

```bash
curl https://openapi.tiki.vn/ecom/v1/customers/profile \
-H 'Authorization: Bearer u61Po3FdluZubZ4v0lKb3kohLLGI6Rkm25AWc0zqa4k'
```
