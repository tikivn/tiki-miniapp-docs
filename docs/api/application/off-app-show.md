---
order: 53
category:
  vi-VN: Application Level
  en-US: Application Level
title: 
  vi-VN: my.offAppShow
  en-US: my.offAppShow
---

# Giới thiệu

**my.offAppShow** là API dùng để remove listener của event `onAppShow` từ trước

# Sử dụng

## Sample Code

index.txml
```xml
<button size="default" onTap="onDisableAppShow" type="primary">Off app hide event</button>
```

index.js
```js
Page({
  onLoad(query) {
    my.onAppShow(this.onAppShowHandler)
  },
  onDisableAppShow() {
    my.offAppShow(this.onAppShowHandler)
  },
  onAppShowHandler() {
    console.log("App show from page")
  },
})
```

## API Params

| Attributes | Type     | Description                                                           |
| ---------- | -------- | --------------------------------------------------------------------- |
| callback    | Function | Callback đã đăng ký event `onAppShow` của app.                          |

