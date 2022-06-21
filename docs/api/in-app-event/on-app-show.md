---
title: my.onAppShow
sidebar_custom_props:
  description: dùng để lắng nghe sự kiện app show, tương đương với function `onShow` trong app.js
---

## Giới thiệu

**my.onAppShow** là API dùng để lắng nghe sự kiện app show, tương đương với function `onShow` trong app.js

## Sử dụng

### Sample Code

**index.txml**

```xml
<button size="default" onTap="onDisableAppShow" type="primary">Off app show event</button>
```

**index.js**

```js
Page({
  onLoad(query) {
    my.offAppShow(this.onAppShowHandler);
  },
  onDisableAppShow() {
    my.offAppShow(this.onAppShowHandler);
  },
  onAppShowHandler() {
    console.log('App show from page');
  }
});
```

### API Params

| Attributes | Type     | Description                                 |
| ---------- | -------- | ------------------------------------------- |
| callback   | Function | Callback để catch event foreground của app. |
