---
title: my.closeSocket
---

`my.closeSocket`  là API được dùng để đóng một kết nối WebSocket được mở trước đó.

***Quan trọng***: Bạn cần phải thêm tên miền trong phần **Cài đặt chung** của ứng dụng trên Dev Center trước khi sử dụng các Networking API và Webview. Xem phần hướng dẫn [tại đây](/docs/backend-api/overview#tên-miền)

## Sample Code

```js
my.onSocketOpen(function() {
  my.closeSocket()
})

my.onSocketClose(function(res) {
  console.log('WebSocket is closed！')
})
```

## API Params

Để cấu hình đóng kết nối WebSocket cần truyền các thuộc tính sau:

| Attributes | Type     | Required | Description                                                                      |
| ---------- | -------- | -------- | -------------------------------------------------------------------------------- |
| success    | Function | No       | Callback function khi việc đóng kết nối thành công.                              |
| fail       | Function | No       | Callback function khi việc đóng kết nối thất bại.                                |
| complete   | Function | No       | Callback function khi việc đóng kết nối kết thúc cho dù thành công hay thất bại. |
