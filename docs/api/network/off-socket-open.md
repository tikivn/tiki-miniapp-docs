---
title: my.offSocketOpen
---

## Giới thiệu

**my.offSocketOpen** là API giúp dừng lắng nghe sự kiện mở WebSocket connection trước đó.

## Sử dụng

### Sample Code

```js
Page({
  onLoad() {
    this.callback = this.callback.bind(this);
    my.onSocketOpen(this.callback);
  },
  onUnload() {
    my.offSocketOpen(this.callback);
  },
  callback(res) {
  },
})
```

### API Params

- Khi gọi API kèm theo callback thì chỉ callback đó được xoá khỏi danh sách lắng nghe:

```js
my.offSocketOpen(this.callback);
```

- Khi callback không được truyền vào, tất cả các callback được xoá khỏi danh sách lắng nghe:
  
```js
my.offSocketOpen();
```