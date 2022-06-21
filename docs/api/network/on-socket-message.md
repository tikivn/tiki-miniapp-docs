---
title: my.onSocketMessage
sidebar_custom_props:
  description: Lắng nghe sự kiện message nhận được từ WebSocket Server
---

`my.onSocketMessage` là API giúp lắng nghe sự kiện message nhận được từ WebSocket Server.

:::important Quan trọng

Bạn cần phải thêm tên miền trong phần **Cài đặt chung** của ứng dụng trên [Tini Console](https://developer.tiki.vn/apps) trước khi sử dụng các Networking API và Webview. Xem phần hướng dẫn [tại đây](/docs/development/tini-console/whitelist-domains).

:::

## Sample Code

```js
my.connectSocket({
  url: 'wes://sample'
});

my.onSocketMessage(function (res) {
  console.log('<<< message', res);
});
```

## Return value

| Thuộc tính | Kiểu dữ liệu | Mô tả                        |
| ---------- | ------------ | ---------------------------- |
| data       | string       | Message nhận được từ server. |
