---
title: my.offSocketError
sidebar_custom_props:
  description: Dừng lắng nghe sự kiện error được tạo trước đó
---

`my.offSocketError` là API giúp dừng lắng nghe sự kiện error được tạo trước đó.

:::important Quan trọng

Bạn cần phải thêm tên miền trong phần **Cài đặt chung** của ứng dụng trên [Tini Console](https://developer.tiki.vn/apps) trước khi sử dụng các Networking API và Webview. Xem phần hướng dẫn [tại đây](/docs/development/tini-console/whitelist-domains).

:::

## API Params

- Khi gọi API kèm theo callback thì chỉ callback đó được xoá khỏi danh sách lắng nghe:

```js
my.offSocketError(this.callback);
```

- Khi callback không được truyền vào, tất cả các callback được xoá khỏi danh sách lắng nghe:

```js
my.offSocketError();
```

## Sample Code

```js
Page({
  onLoad() {
    this.callback = this.callback.bind(this);
    my.onSocketError(this.callback);
  },
  onUnload() {
    my.offSocketError(this.callback);
  },
  callback(res) {}
});
```
