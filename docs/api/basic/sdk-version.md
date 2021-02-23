---
order: 10
category:
  vi-VN: Cơ bản 
  en-US: Basic
title: 
  vi-VN: my.SDKVersion
  en-US: my.SDKVersion
---

## Giới thiệu

**my.SDKVersion** là API dùng để lấy version hiện tại của SDK.

## Sử dụng

### Sample code

```jsx
<View>
  <Text>{data.SDKVersion}</Text>
</View>
```

```js
Page({
  data: {
    SDKVersion: null
  },
  onLoad() {
    this.setData({ SDKVersion: my.SDKVersion });
  }
})
```

### Return value

API sẽ trả về version hiện tại của SDK kiểu chuỗi.
