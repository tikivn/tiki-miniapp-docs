---
title: my.offSocketClose
---

## Giới thiệu

**my.offSocketClose** là API giúp dừng lắng nghe sự kiện đóng WebSocket connection trước đó.

## Sử dụng

### Sample Code

```js
Page({
  onLoad() {
    this.callback = this.callback.bind(this);
    my.offSocketClose(this.callback);
  },
  onUnload() {
    my.offSocketClose(this.callback);
  },
  callback(res) {
  },
})
```

### API Params

- Khi gọi API kèm theo callback thì chỉ callback đó được xoá khỏi danh sách lắng nghe:

```js
my.offSocketClose(this.callback);
```

- Khi callback không được truyền vào, tất cả các callback được xoá khỏi danh sách lắng nghe:
  
```js
my.offSocketClose();
```