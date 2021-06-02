---
title: my.onSocketError
---

## Giới thiệu

**my.onSocketError** là API giúp lắng nghe sự kiện errro trên WebSocket connection.

## Sử dụng

### Sample Code

```js
my.connectSocket({
  url: 'wes://sample',
});

my.onSocketError(function(res) {
  console.log('<<< error', res);
});
```

### API Params

| Attributes | Type     | Required | Description                                                  |
| ---------- | -------- | -------- | ------------------------------------------------------------ |
| callback   | Function | No       | Callback function khi sự kiện WebSocket open được kích hoạt. |
