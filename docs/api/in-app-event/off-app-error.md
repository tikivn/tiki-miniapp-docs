---
title: my.offAppError
---

## Giới thiệu

**my.offAppError** là API dùng để remove listener của event `onAppError` từ trước

## Sử dụng

### Sample Code

**index.txml**

```xml
<button size="default" onTap="onTriggerError" type="primary">Trigger app error</button>
<button size="default" onTap="onDisableAppError" type="primary">Off app error event</button>
```

**index.js**

```js
Page({
  onLoad(query) {
    my.onAppError(this.onAppErrorHandler);
  },
  onDisableAppError() {
    my.offAppError(this.onAppErrorHandler);
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

| Attributes | Type     | Description                                  |
| ---------- | -------- | -------------------------------------------- |
| callback   | Function | Callback đã đăng ký event `onError` của app. |
