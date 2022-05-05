---
title: my.showToast
---

`my.showToast` là API để hiển thị Toast từ top và tự hide đi sau 1 khoảng thời gian được set hoặc dùng `my.hideToast` api.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/toast/index" />

## API Params

| Thuộc tính | Kiểu dữ liệu | Mô tả                                       |
| ---------- | ------------ | ------------------------------------------- |
| type       | string       | success hoặc fail                           |
| content    | string       | Content message của toast                   |
| buttonText | string       | Text của button, mặc định là rỗng           |
| duration   | number       | Thời gian để hide toast, mặc định là 3000ms |
| success    | Function     | Callback function khi hiển thị toast thành công.             |
| fail       | Function     | Callback function khi hiển thị toast thất bại.                |
| complete   | Function     | Callback function khi hoàn tất gọi hàm bất kể thành công hay thất bại.         |


## Sample Code

```xml title=index.txml
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

```js title=index.js
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

