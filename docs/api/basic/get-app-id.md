---
title: my.getAppId
---

## Giới thiệu

**my.getAppId** là API dùng để lấy ID của Mini App hiện tại

## Sử dụng

### Sample code

```js
Page({
  onGetAppId() {
    const res = my.getAppId();
    my.alert({ title: 'AppID', content: res });
  }
});
```

### Return value

| Attributes | Type   | Description              |
| ---------- | ------ | ------------------------ |
| appId      | string | ID của Mini App hiện tại |
