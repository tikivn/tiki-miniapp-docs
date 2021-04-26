---
title: my.hideToast
---

## Giới thiệu

my.hideToast là api để hide toast thủ công.

## Sử dụng

### Sample Code

**index.txml**

```xml
<view class="page">
  <view class="page-description">Loading API</view>
  <view class="page-section">
    <view class="page-section-title">my.hideLoading</view>
    <view class="page-section-demo">
      <button type="primary" onTap="onHideToast">Show toast and hide after 3s</button>
    </view>
  </view>
</view>
```

**index.js**

```js
Page({
  onHideToast() {
    my.showToast({
      type: 'fail',
      content: 'Toast content',
      buttonText: 'OK',
      success: () => {
        my.alert({ title: 'success' });
      },
      fail: (e) => {
        my.alert({ title: `${e}` });
      },
      complete: () => {
        console.log('Complete');
      }
    });
    setTimeout(() => {
      my.hideToast();
    }, 3000);
  }
});
```

### Chi tiết

| Thuộc tính | Kiểu dữ liệu | Required | Mô tả                           |
| ---------- | ------------ | -------- | ------------------------------- |
| success    | Function     | No       | Callback khi toast hide success |
| fail       | Function     | No       | Callback khi loading hide fail  |
| complete   | Function     | No       | Callback khi toast được hide    |
