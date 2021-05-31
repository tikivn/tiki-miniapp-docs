---
title: my.offSocketMessage
---

## Giới thiệu

**my.offSocketMessage** là API giúp dừng lắng nghe sự kiện message được thiết lập trước đó.

## Sử dụng

### Sample Code

```js
Page({
  onLoad() {
    this.callback = this.callback.bind(this);
    my.offSocketMessage(this.callback);
  },
  onUnload() {
    my.offSocketMessage(this.callback);
  },
  callback(res) {
  },
})
```

### API Params

- Khi gọi API kèm theo callback thì chỉ callback đó được xoá khỏi danh sách lắng nghe:

```js
my.offSocketMessage(this.callback);
```

- Khi callback không được truyền vào, tất cả các callback được xoá khỏi danh sách lắng nghe:
  
```js
my.offSocketMessage();
```