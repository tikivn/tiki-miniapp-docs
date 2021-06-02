---
title: User Profile
---

## Giới Thiệu

Để lấy thông tin cơ bản của user từ Tini App bạn có thể sử dụng API [my.getUserInfo](../../api/open/get-user-info). Tuy nhiên để backend của bạn có thể định danh user thì bạn sử dụng Open API.

## Chi Tiết

Bạn cần phải có auth token với scope `user_profile` để gọi có thể gọi API này.

Các thông tin để call API này như sau

- Type: RESTful
- Endpoint: https://openapi.tiki.vn/ecom/v1/customers/profile
- Authorization: Bearer {token}

Sau đây là lệnh call mẫu sử dụng cURL

```bash
curl https://openapi.tiki.vn/ecom/v1/customers/profile \
-H 'Authorization: Bearer u61Po3FdluZubZ4v0lKb3kohLLGI6Rkm25AWc0zqa4k'
```
