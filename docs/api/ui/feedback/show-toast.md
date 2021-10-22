---
title: my.showToast
---

## Giới thiệu

`my.showToast` là api để hiển thị toast popup slide từ top và tự hide đi sau 1 khoảng thời gian được set hoặc dùng api `my.hideToast`

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/toast/index" />

## Sử dụng

### Sample Code

**index.txml**

```xml
<view class="page">
  <view class="page-description">Toast API</view>
  <view class="page-section">
    <view class="page-section-title">my.showToast</view>
    <view class="page-section-demo">
      <button type="primary" onTap="onToast">Show Toast</button>
    </view>
  </view>
</view>
```

**index.js**

```js
Page({
  onToast() {
    my.showToast({
      type: "fail",
      content: "Toast content",
      buttonText: "OK",
      duration: 3000,
      success: () => {
        my.alert({ title: "success" });
      },
      fail: (e) => {
        my.alert({ title: `${e}` });
      },
      complete: () => {
        console.log("Complete");
      },
    });
})
```

### Chi tiết

| Thuộc tính | Kiểu dữ liệu | Required | Mô tả                                       |
| ---------- | ------------ | -------- | ------------------------------------------- |
| type       | String       | No       | success hoặc fail                           |
| content    | String       | No       | Content message của toast                   |
| buttonText | String       | No       | Text của button, mặc định là rỗng           |
| duration   | Number       | No       | Thời gian để hide toast, mặc định là 3000ms |
| success    | Function     | No       | Callback khi toast show success             |
| fail       | Function     | No       | Callback khi toast show fail                |
| complete   | Function     | No       | Callback khi toast đã được show             |
