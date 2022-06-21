---
title: my.onSocketError
sidebar_custom_props:
  description: Lắng nghe sự kiện error trên WebSocket connection
---

`my.onSocketError` là API giúp lắng nghe sự kiện error trên WebSocket connection.

:::important Quan trọng

Bạn cần phải thêm tên miền trong phần **Cài đặt chung** của ứng dụng trên [Tini Console](https://developer.tiki.vn/apps) trước khi sử dụng các Networking API và Webview. Xem phần hướng dẫn [tại đây](/docs/development/tini-console/whitelist-domains).

:::

## API Params

| Thuộc tính | Kiểu dữ liệu | Mô tả                                                        |
| ---------- | ------------ | ------------------------------------------------------------ |
| callback   | Function     | Callback function khi sự kiện WebSocket open được kích hoạt. |

## Sample Code

```js
my.connectSocket({
  url: 'wes://sample'
});

my.onSocketError(function (res) {
  console.log('<<< error', res);
});
```
