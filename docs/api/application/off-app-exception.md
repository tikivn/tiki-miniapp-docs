---
title: my.offUnhandledRejection
---

## Giới thiệu

**my.offUnhandledRejection** là API dùng để remove listener của event `onUnhandledRejection` từ trước

## Sử dụng

### Sample Code

**index.js**

```js
Page({
  onLoad(query) {
    const handleRejection = (res) => {
      console.log(res.reason);
      console.log(res.promise);
    };
    my.onUnhandledRejection(handleRejection);
    my.offUnhandledRejection(handleRejection);
  }
});
```

**app.js**

```js
App({
  onShow(options) {
    const handleRejection = (res) => {
      console.log(res.reason);
      console.log(res.promise);
    };
    my.onUnhandledRejection(handleRejection);
    my.offUnhandledRejection(handleRejection);
  }
});
```

### API Params

| Attributes | Type     | Description                                               |
| ---------- | -------- | --------------------------------------------------------- |
| callback   | Function | Callback đã đăng ký event `onUnhandledRejection` của app. |
