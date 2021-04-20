---
order: 91
category:
  vi-VN: Thanh điều hướng
  en-US: Navigation Bar
title:
  vi-VN: my.hideBackHome 
  en-US: my.hideBackHome 
---

## Giới thiệu

**my.hideBackHome** là API để ẩn đi nút back trên tile Bar.

## Sử dụng

### Sample Code

```js
Page({
  onReady() {
    my.hideBackHome({hide: true});
  },
});
```

### API Params
| Property        | Type     | Required | Description                                                                                   |
| --------------- | -------- | ------------- | ---------------------------------------------------------------------------------------- |
| hide            | Boolean  |     Yes       | set = true nếu muốn hide back button, set = false nếu muốn show lại back button          |
