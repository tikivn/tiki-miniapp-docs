---
title: my.onSocketOpen
---

## Giới thiệu

**my.onSocketOpen** là API giúp lắng nghe sự kiện mở connection của WebSocket.

## Sử dụng

### Sample Code

```js
my.connectSocket({
  url: 'wes://sample',
});

my.onSocketOpen(function(res) {
  console.log('WebSocket is opened.');
});
```

### API Params

| Attributes | Type     | Required | Description                                                  |
| ---------- | -------- | -------- | ------------------------------------------------------------ |
| callback   | Function | No       | Callback function khi sự kiện WebSocket open được kích hoạt. |
