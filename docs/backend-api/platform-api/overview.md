---
title: Tini App Platform APIs
---

## Giới Thiệu

Ngoài các APIs mà Tini App có thể thay mặt user gọi cho Tiki thì còn có một tập API thiết kế riêng cho backend của Tini App có thể gọi vào Tiki. Các API đó sẽ được gọi chung Tini App Platform APIs

## Access Platform APIs Như Thế Nào?

Các APIs của platform được thiết kế để gọi từ backend-2-backend. Để gọi được các API này thì bạn cần có client ID và client secret của Tini App của bạn. Hai thông tin này sẽ được lưu ở backend của bạn và dùng để gọi cho platform backend. Team Tini App platform chủ yếu sử dụng GraphQL APIs. Bạn có thể tìm hiểu thêm về GraphQL qua phần References ở dưới.

_Khác với [Open APIs](../open-api/overview), platform API phải được gọi trực tiếp từ backend của Tini App vì chỉ có backend của Tini App mới có thể có secret để ký các request giữa Tini App Backend và platform backend_

### Chú ý

- **Không chia sẻ thông tin client ID và client secret của bạn cho bất cứ ai**
- **Không gửi client secret từ backend lên frontend vì frontend không thể bảo mật được secret**

### Chi Tiết

Để gọi platform API các bạn cần đi theo các bước sau:

1. Xác định schema của API đó thông qua công cụ inspection của GraphQL

1. Biết cách sign request của bạn với client secret

Ví dụ [GraphQL API](https://graphql.org/) để lấy access token sẽ có dạng

```graphql
query {
  get_auth_access_token(
    input: {
      code: "THUxTF3HmbPpGxmvDieTCX4kXcb601njUriFUET0RvY.eCZa27znIuM8JGC-IUSM-S_G_YrgP7OH8BTGdba706E"
      client_id: "a1qvgyRzP9pMj0n5ulOG04fdelIHuNqB"
      timestamp: 1620470539433
      signature: "3ef20afed474d9368371fc8eaf4a529b39a7025b4863e1afbc13bdb6db8cc5f1"
    }
  ) {
    access_token
    refresh_token
    expires_in
    scopes
  }
}
```

Khi gọi API này với cURL sẽ như sau:

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

### References

- Tham khảo cách gọi Open APIs ở [đây](../open-api/overview)
- Tham khảo cách tính signature ở [đây](calculate-signature)
- Tham khảo về GraphQL ở [đây](https://graphql.org/)

## Danh Sách Platform APIs

Bạn có thể introspect các platform APIs cho Tini App ở [đây](https://api.tiki.vn/tiniapp/api/graphql/)
