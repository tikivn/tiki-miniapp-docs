---
title: my.offSocketMessage
---

`my.offSocketMessage` là API giúp dừng lắng nghe sự kiện message được thiết lập trước đó.

***Quan trọng***: Bạn cần phải thêm tên miền trong phần **Cài đặt chung** của ứng dụng trên [Tini Console](https://developer.tiki.vn/apps) trước khi sử dụng các Networking API và Webview. Xem phần hướng dẫn [tại đây](/docs/development/tini-console/whitelist-domains).

## API Params

- Khi gọi API kèm theo callback thì chỉ callback đó được xoá khỏi danh sách lắng nghe:

```js
my.offSocketMessage(this.callback);
```

- Khi callback không được truyền vào, tất cả các callback được xoá khỏi danh sách lắng nghe:
  
```js
my.offSocketMessage();
```

## Sample Code

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

