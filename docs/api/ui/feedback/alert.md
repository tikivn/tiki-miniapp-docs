---
title: my.alert
---

`my.alert` là API để hiển thị Alert. Có thể set được title, content, buttonText...

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/alert/index" />

## API Params

| Thuộc tính | Kiểu dữ liệu |  Mô tả                           |
| ---------- | ------------ | ------------------------------- |
| title      | string       | Title của alert box             |
| content    | string       | Content message của alert box   |
| buttonText | string       | Text của button, mặc định là OK |
| success    | Function     | Callback function khi gọi hàm thành công. |
| fail       | Function     | Callback function khi gọi hàm thất bại.    |
| complete   | Function     | Callback function khi hoàn tất gọi hàm bất kể thành công hay thất bại. |


## Sample Code

```xml title=index.txml
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

```js title=index.js
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

