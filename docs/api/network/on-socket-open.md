---
title: my.onSocketOpen
---

`my.onSocketOpen` là API giúp lắng nghe sự kiện mở connection của WebSocket.

***Quan trọng***: Bạn cần phải thêm tên miền trong phần **Cài đặt chung** của ứng dụng trên [Tini Console](https://developer.tiki.vn/apps) trước khi sử dụng các Networking API và Webview. Xem phần hướng dẫn [tại đây](/docs/backend-api/overview#tên-miền).

## Sample Code

```js
my.connectSocket({
  url: 'wes://sample',
});

my.onSocketOpen(function(res) {
  console.log('WebSocket is opened.');
});
```

## API Params

| Attributes | Type     | Required | Description                                                  |
| ---------- | -------- | -------- | ------------------------------------------------------------ |
| callback   | Function | No       | Callback function khi sự kiện WebSocket open được kích hoạt. |
