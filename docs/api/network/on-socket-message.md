---
title: my.onSocketMessage
---

## Giới thiệu

**my.onSocketMessage** là API giúp lắng nghe sự kiện message nhận được từ WebSocket Server.

## Sử dụng

### Sample Code

```js
my.connectSocket({
  url: 'wes://sample',
});

my.onSocketMessage(function(res) {
  console.log('<<< message', res);
});
```

### Return value

| Attributes | Type   | Description                  |
| ---------- | ------ | ---------------------------- |
| data       | string | Message nhận được từ server. |
