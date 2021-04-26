---
title: my.onAppError
---

## Giới thiệu

**my.onAppError** là API dùng để lắng nghe sự kiện app error khi có error xảy ra trong lúc gọi api, tương đương với function `onError` trong app.js

## Sử dụng

### Sample Code

**index.txml**

```xml
<button size="default" onTap="onTriggerError" type="primary">Trigger app error event</button>
```

**index.js**

```js
Page({
  onLoad(query) {
    my.onAppError(this.onAppErrorHandler);
  },
  onTriggerError() {
    // call o function is not exits
    my.blabla();
  },
  onAppErrorHandler(error) {
    console.log('App error', error);
  }
});
```

### API Params

| Attributes | Type     | Description                                                                          |
| ---------- | -------- | ------------------------------------------------------------------------------------ |
| callback   | Function | Callback để catch event app error của. Argument `error` là error message kiểu string |
