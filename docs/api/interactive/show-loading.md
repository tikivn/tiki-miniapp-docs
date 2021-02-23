---
order: 63
category:
  vi-VN: Interactive Feedback
  en-US: Interactive Feedback
title: 
  vi-VN: my.showLoading
  en-US: my.showLoading
---

## Giới thiệu

`my.showLoading` là api để hiển thị Loading. Có thể manual tắt loading bằng cách dùng api `my.hideLoading`.

## Sử dụng

### Sample Code

**index.txml**

```xml
<view class="page">
  <view class="page-description">Loading API</view>
  <view class="page-section">
    <view class="page-section-title">my.showLoading</view>
    <view class="page-section-demo">
      <button type="primary" onTap="onLoading">Show Loading</button>
    </view>
  </view>
</view>
```

**index.js**

```js
Page({
  onLoading() {
    my.showLoading({ content: "Loading...", delay: 1000 });
    setTimeout(() => {
      my.hideLoading();
    }, 5000);
  }
})
```

### Chi tiết

| Thuộc tính     | Kiểu dữ liệu  | Required | Mô tả |
| ------- | --------------- | ------- | --------------- |
| content | String | No | Content message của loading box |
| delay | Number | No | Delay thời gian show loading |
| success | Function | No | Callback khi loading show success |
| fail | Function | No | Callback khi loading show fail |
| complete | Function | No | Callback khi loading đã được show |
