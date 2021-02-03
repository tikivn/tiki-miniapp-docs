---
order: 52
category:
  vi-VN: Application Level
  en-US: Application Level
title: 
  vi-VN: my.offAppHide
  en-US: my.offAppHide
---

# Gới thiệu

**my.offAppHide** là API dùng để remove listener của event `onAppHide` từ trước

# Sử dụng

## Sample Code

index.txml
```xml
<button size="default" onTap="onDisableAppHide" type="primary">Off app hide event</button>
```

index.js
```js
Page({
  onLoad(query) {
    my.offAppHide(this.onAppHideHandler)
  },
  onDisableAppHide() {
    my.offAppHide(this.onAppHideHandler)
  },
  onAppHideHandler() {
    console.log("App hide from page")
  },
})
```

## API Params

| Attributes | Type     | Description                                                           |
| ---------- | -------- | --------------------------------------------------------------------- |
| callback    | Function | Callback đã đăng ký event background của app.                          |

