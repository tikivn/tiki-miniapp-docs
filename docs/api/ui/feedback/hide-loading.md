---
title: my.hideLoading
---

`my.hideLoading` là api để hide loading.

## API Params

| Thuộc tính | Kiểu dữ liệu |  Mô tả                             |
| ---------- | ------------ |  --------------------------------- |
| success    | Function     | Callback function khi gọi hàm thành công. |
| fail       | Function     | Callback function khi gọi hàm thất bại.   |
| complete   | Function     | Callback function khi hoàn tất gọi hàm bất kể thành công hay thất bại. |


## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/loading/index" />

## Sample Code

```xml title=index.txml
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

```js title=index.js
Page({
  onLoading() {
    my.showLoading({ content: 'Loading...' });
    setTimeout(() => {
      my.hideLoading();
    }, 5000);
  }
});
```

