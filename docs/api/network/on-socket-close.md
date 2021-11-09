---
title: my.onSocketClose
---

`my.onSocketClose` là API giúp lắng nghe sự kiện mở close của WebSocket.

***Quan trọng***: Bạn cần phải thêm tên miền trong phần **Cài đặt chung** của ứng dụng trên [Tini Console](https://developer.tiki.vn/apps) trước khi sử dụng các Networking API và Webview. Xem phần hướng dẫn [tại đây](/docs/backend-api/overview#tên-miền).

## Sample Code

```js
my.connectSocket({
  url: 'wes://sample',
});

my.closeSocket();

my.onSocketClose(function(res) {
  console.log('WebSocket is closed.');
});
```

## API Params

| Thuộc tính | Kiểu dữ liệu | Mô tả                                                         |
| ---------- | ------------ | ------------------------------------------------------------- |
| callback   | Function     | Callback function khi sự kiện WebSocket close được kích hoạt. |
