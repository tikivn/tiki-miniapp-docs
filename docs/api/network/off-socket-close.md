---
title: my.offSocketClose
---

`my.offSocketClose` là API giúp dừng lắng nghe sự kiện đóng WebSocket connection trước đó.

***Quan trọng***: Bạn cần phải thêm tên miền trong phần **Cài đặt chung** của ứng dụng trên [Tini Console](https://developer.tiki.vn/apps) trước khi sử dụng các Networking API và Webview. Xem phần hướng dẫn [tại đây](/docs/backend-api/overview#tên-miền).

## API Params

- Khi gọi API kèm theo callback thì chỉ callback đó được xoá khỏi danh sách lắng nghe:

```js
my.offSocketClose(this.callback);
```

- Khi callback không được truyền vào, tất cả các callback được xoá khỏi danh sách lắng nghe:
  
```js
my.offSocketClose();
```

## Sample Code

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

