---
order: 56
category:
  vi-VN: Application Level
  en-US: Application Level
title: 
  vi-VN: my.onUnhandledRejection
  en-US: my.onUnhandledRejection
---

# Giới thiệu

**my.onUnhandledRejection** là API dùng để lắng nghe sự kiện khi 1 Promise reject xảy ra nhưng không được handle, tương đương với function `onUnhandledRejection` trong app.js

# Sử dụng

## Sample Code

index.js
```js
Page({
  onLoad(query) {
    my.onUnhandledRejection((res) => {
      console.log(res.reason);
      console.log(res.promise);
    });
  },
})
```

app.js
```js
App({
  onUnhandledRejection(res) {
    console.log(res.reason);
    console.log(res.promise);
  }
})
```
## API Params

| Attributes | Type     | Description                                                           |
| ---------- | -------- | --------------------------------------------------------------------- |
| callback    | Function | Callback để catch unhandle reject của Promise. |

