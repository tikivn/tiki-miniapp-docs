---
order: 64
category:
  vi-VN: Interactive Feedback
  en-US: Interactive Feedback
title: 
  vi-VN: my.hideLoading
  en-US: my.hideLoading
---

## Giới thiệu

my.hideLoading là api để hide loading.

## Sử dụng

### Sample Code

**index.txml**

```xml
<view class="page">
  <view class="page-description">Loading API</view>
  <view class="page-section">
    <view class="page-section-title">my.hideLoading</view>
    <view class="page-section-demo">
      <button type="primary" onTap="onLoading">Show Loading and hide after 5s</button>
    </view>
  </view>
</view>
```

**index.js**

```js
Page({
  onLoading() {
    my.showLoading({ content: "Loading..." });
    setTimeout(() => {
      my.hideLoading();
    }, 5000);
  }
})
```

### Chi tiết

| Thuộc tính     | Kiểu dữ liệu  | Required | Mô tả |
| ------- | --------------- | ------- | --------------- |
| success | Function | No | Callback khi loading hide success |
| fail | Function | No | Callback khi loading hide fail |
| complete | Function | No | Callback khi loading đã được hide |
