---
title: my.offSocketError
---

## Giới thiệu

**my.offSocketError** là API giúp dừng lắng nghe sự kiện error được tạo trước đó.

## Sử dụng

### Sample Code

```js
Page({
  onLoad() {
    this.callback = this.callback.bind(this);
    my.onSocketError(this.callback);
  },
  onUnload() {
    my.offSocketError(this.callback);
  },
  callback(res) {
  },
})
```

### API Params

- Khi gọi API kèm theo callback thì chỉ callback đó được xoá khỏi danh sách lắng nghe:

```js
my.offSocketError(this.callback);
```

- Khi callback không được truyền vào, tất cả các callback được xoá khỏi danh sách lắng nghe:
  
```js
my.offSocketError();
```