---
title: my.hideToast
sidebar_custom_props:
  description: Ẩn toast
---

`my.hideToast` là API để hide toast thủ công.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/toast/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/api/toast/index" />

## API Params

| Thuộc tính | Kiểu dữ liệu | Mô tả                                                                  |
| ---------- | ------------ | ---------------------------------------------------------------------- |
| success    | Function     | Callback function ẩn toast hàm thành công.                             |
| fail       | Function     | Callback function khi ẩn toast thất bại.                               |
| complete   | Function     | Callback function khi hoàn tất gọi hàm bất kể thành công hay thất bại. |

## Sample Code

```xml title=index.txml
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

```js title=index.js
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
