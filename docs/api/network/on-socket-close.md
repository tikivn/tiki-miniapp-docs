---
title: my.onSocketClose
---

## Giới thiệu

**my.onSocketClose** là API giúp lắng nghe sự kiện mở close của WebSocket.

## Sử dụng

### Sample Code

```js
my.connectSocket({
  url: 'wes://sample',
});

my.closeSocket();

my.onSocketClose(function(res) {
  console.log('WebSocket is closed.');
});
```

### API Params

| Attributes | Type     | Required | Description                                                   |
| ---------- | -------- | -------- | ------------------------------------------------------------- |
| callback   | Function | No       | Callback function khi sự kiện WebSocket close được kích hoạt. |
