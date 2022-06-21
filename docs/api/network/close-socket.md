---
title: my.closeSocket
sidebar_custom_props:
  description: Dùng để đóng một WebSocket connection được mở trước đó
---

`my.closeSocket` là API được dùng để đóng một WebSocket connection được mở trước đó.

:::important Quan trọng

Bạn cần phải thêm tên miền trong phần **Cài đặt chung** của ứng dụng trên [Tini Console](https://developer.tiki.vn/apps) trước khi sử dụng các Networking API và Webview. Xem phần hướng dẫn [tại đây](/docs/development/tini-console/whitelist-domains).

:::

## API Params

| Thuộc tính | Kiểu dữ liệu | Mô tả                                                                            |
| ---------- | ------------ | -------------------------------------------------------------------------------- |
| success    | Function     | Callback function khi việc đóng kết nối thành công.                              |
| fail       | Function     | Callback function khi việc đóng kết nối bất thành.                               |
| complete   | Function     | Callback function khi việc đóng kết nối hoàn tất bất kể thành công hay thất bại. |

## Sample Code

```js
my.onSocketOpen(function () {
  my.closeSocket();
});

my.onSocketClose(function (res) {
  console.log('WebSocket is closed！');
});
```
