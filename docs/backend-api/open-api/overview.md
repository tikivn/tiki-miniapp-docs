---
title: Tiki Open APIs
---

## Giới Thiệu

Khi bạn xây dựng Tini App để phục vụ cho user của Tiki. Sẽ có nhiều trường hợp bạn sẽ cần phải đại diện cho user để lấy thông tin hoặc thực hiện một số tác vụ thay cho user trên hệ thống của Tiki. Các APIs mà Tiki đã public ra để các bạn có thể hiện thực các tác vụ này thuộc nhóm Open APIs của Tiki.

Trong thời gian tới, Tiki sẽ tiếp tục bổ sung tập Open API này để các bạn có thể tích hợp sâu hơn nữa với các tính năng mà Tiki cung cấp.

## Access Open APIs Như Thế Nào?

Vì các bạn sẽ đại diện cho user để gọi các API này trên Tiki, nên các bạn cần phải có sự đồng ý của user bằng cách gọi API `my.getAuthCode`. Nếu user đồng ý cho access thì các bạn sẽ được cấp một auth code. Sau khi có auth code này rồi các bạn có thể dùng để exchange một auth token. Sau đó, bạn có thể dùng auth token này để gọi các Open APIs.

_Khác với [Platform APIs](../platform-api/overview), bạn có thể gọi Tiki Open APIs từ cả frontend và backend của Tini App_

### Overview

_Điều kiện cần:_

- Cần biết key và secret cấp cho Tini App của bạn trên Dev Center
- Cần biết Open API mà bạn muốn gọi sẽ cần scope nào
- Cần có được sự đồng ý của người dùng để lấy data với các scope khác nhau
- Cần có một backend của bạn để có thể thực hiện bước trao đổi auth code lấy auth token với [Platform APIs](../platform-api/exchange-auth-token)

### Chi Tiết

#### Các Bước Lấy Auth Token

1. Xác định Open API bạn muốn gọi sẽ cần các scope nào
1. Ở Tini App bạn sử dụng JS API [`my.getAuthCode`](../../api/open/get-auth-code) và truyền vào các scope mà bạn cần.
1. Nếu user đồng ý, Tini App framework sẽ trả về cho bạn một auth code có dạng như sau:

   `CDKJfdkj4528KJ.eCZa27znIuM8JGC-IUSM-S_G_YrgP7OH8BTGdba706E`

1. Bạn cần phải gửi auth code này về backend của bạn
1. Backend của bạn sẽ gọi [Platform APIs](../platform-api/exchange-auth-token) của Tiki để exchange auth code này thành 1 auth token
1. Sau khi có auth token thì bạn có thể sử dụng để gọi vào các open APIs mà Tiki cung cấp

### References

- Tham khảo cách gọi platform APIs ở [đây](../platform-api/overview)
- Tham khảo cách tính signature ở [đây](../platform-api/calculate-signature)
- Tham khảo về GraphQL ở [đây](https://graphql.org/)
- Tham khảo một backend ngôn ngữ Go ở [đây](https://github.com/tikivn/tiniapp-backend-oauth-sample)
