---
title: my.onAppHide
sidebar_custom_props:
  description: Dùng để lắng nghe sự kiện app hide (app enter background), tương đương với function `onHide` trong app.js
---

## Giới thiệu

**my.onAppHide** là API dùng để lắng nghe sự kiện app hide (app enter background), tương đương với function `onHide` trong app.js

## Sử dụng

### Sample Code

**index.txml**

```xml
<button size="default" onTap="onDisableAppHide" type="primary">Off app hide event</button>
```

**index.js**

```js
Page({
  onLoad(query) {
    my.onAppHide(this.onAppHideHandler);
  },
  onDisableAppHide() {
    my.offAppHide(this.onAppHideHandler);
  },
  onAppHideHandler() {
    console.log('App hide from page');
  }
});
```

### API Params

| Attributes | Type     | Description                                 |
| ---------- | -------- | ------------------------------------------- |
| callback   | Function | Callback để catch event background của app. |
