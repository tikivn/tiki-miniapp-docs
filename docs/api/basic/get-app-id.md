---
title: my.getAppIdSync
---

`my.getAppIdSync` là API dùng để lấy ID của Mini App hiện tại

## Sample code

```js
Page({
  onGetAppId() {
    const res = my.getAppIdSync();
    my.alert({ title: 'AppID', content: res });
  }
});
```

## Return value

| Thuộc tính | Kiểu dữ liệu   | Mô tả              |
| ---------- | ------ | ------------------------ |
| appId      | string | ID của Mini App hiện tại |
