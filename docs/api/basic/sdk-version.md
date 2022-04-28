---
title: my.SDKVersion
---

`my.SDKVersion` là API dùng để lấy version hiện tại của SDK.

## Sample code

```xml
<view>
  <text>{{SDKVersion}}</text>
</view>
```

```js
Page({
  data: {
    SDKVersion: ''
  },
  onLoad() {
    this.setData({ SDKVersion: my.SDKVersion });
  }
});
```

## Return value

API sẽ trả về version hiện tại của SDK kiểu chuỗi.
