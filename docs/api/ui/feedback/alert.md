---
title: my.alert
---

## Giới thiệu

my.alert là api để hiển thị Alert. Có thể set được title, content, buttonText...

## Sử dụng

### Sample Code

**index.txml**

```xml
<view class="page">
  <view class="page-description">Alert API</view>
  <view class="page-section">
    <view class="page-section-title">my.alert</view>
    <view class="page-section-demo">
      <button type="primary" onTap="onAlert">Show alert</button>
    </view>
  </view>
</view>
```

**index.js**

```js
Page({
  onAlert() {
    my.alert({
      title: 'Alert title',
      content: 'Alert content',
      buttonText: 'Alert Button',
      success: () => {
        console.log('Success');
      },
      fail: () => {
        console.log('Fail');
      },
      complete: () => {
        console.log('Complete');
      }
    });
  }
});
```

### Chi tiết

| Thuộc tính | Kiểu dữ liệu | Required | Mô tả                           |
| ---------- | ------------ | -------- | ------------------------------- |
| title      | String       | No       | Title của alert box             |
| content    | String       | No       | Content message của alert box   |
| buttonText | String       | No       | Text của button, mặc định là OK |
| success    | Function     | No       | Callback khi alert show success |
| fail       | Function     | No       | Callback khi alert show fail    |
| complete   | Function     | No       | Callback khi alert đã được show |
