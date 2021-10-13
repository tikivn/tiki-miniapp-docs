---
title: my.onSocketError
---

`my.onSocketError` là API giúp lắng nghe sự kiện error trên WebSocket connection.

***Quan trọng***: Bạn cần phải thêm tên miền trong phần **Cài đặt chung** của ứng dụng trên Dev Center trước khi sử dụng các Networking API và Webview. Xem phần hướng dẫn [tại đây](/docs/backend-api/overview#tên-miền).

## Sample Code

```js
my.connectSocket({
  url: 'wes://sample',
});

my.onSocketError(function(res) {
  console.log('<<< error', res);
});
```

## API Params

| Attributes | Type     | Required | Description                                                  |
| ---------- | -------- | -------- | ------------------------------------------------------------ |
| callback   | Function | No       | Callback function khi sự kiện WebSocket open được kích hoạt. |
