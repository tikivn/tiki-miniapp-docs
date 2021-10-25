---
title: my.prompt
---

## Giới thiệu

my.prompt là api để hiển thị prompt popup, để user có thể nhập giá tri vào.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/prompt/index" />

## Sử dụng

### Sample Code

**index.txml**

```xml
<view class="page">
  <view class="page-description">Confirm API</view>
  <view class="page-section">
    <view class="page-section-title">my.prompt</view>
    <view class="page-section-demo">
      <button type="primary" onTap="onPrompt">Show prompt</button>
    </view>
  </view>
</view>
```

**index.js**

```js
Page({
  onPrompt() {
    my.prompt({
      title: 'Prompt',
      message: 'This is a long message',
      placeholder: 'Input your name',
      okButtonText: 'Uhm',
      cancelButtonText: 'Ohm',
      success: (result) => {
        my.alert({
          title: JSON.stringify(result)
        });
      }
    });
  }
});
```

### Chi tiết

| Thuộc tính       | Kiểu dữ liệu | Required | Mô tả                                                |
| ---------------- | ------------ | -------- | ---------------------------------------------------- |
| title            | String       | No       | Title của prompt box                                 |
| message          | String       | No       | Content message của prompt box                       |
| placeholder      | String       | No       | Placeholder của text box                             |
| align            | String       | No       | Kiểu align cho message, "left", "center" hoặc "right |
| okButtonText     | String       | No       | Text của button ok, mặc định là OK                   |
| cancelButtonText | String       | No       | Text của button cancel, mặc định là Cancel           |
| success          | Function     | No       | Callback khi prompt box show success                 |
| fail             | Function     | No       | Callback khi prompt box show fail                    |
| complete         | Function     | No       | Callback khi prompt box đã được show                 |
