---
title: my.getAppIdSync
---

## Giới thiệu

**my.getAppIdSync** là API dùng để lấy ID của Mini App hiện tại

## Sử dụng

### Sample code

```js
Page({
  onGetAppId() {
    const res = my.getAppIdSync();
    my.alert({ title: 'AppID', content: res });
  }
});
```

### Return value

| Attributes | Type   | Description              |
| ---------- | ------ | ------------------------ |
| appId      | string | ID của Mini App hiện tại |
