---
title: my.showLoading
---

`my.showLoading` là api để hiển thị Loading. Có thể manual tắt loading bằng cách dùng api `my.hideLoading`.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/loading/index" />

## API Params

| Thuộc tính | Kiểu dữ liệu |  Mô tả                             |
| ---------- | ------------ | --------------------------------- |
| content    | string       | Content message của loading box   |
| delay      | number       | Delay thời gian show loading      |
| success    | Function     | Callback function khi hiển thị loading thành công. |
| fail       | Function     | Callback function khi hiển thị loading thất bại.    |
| complete   | Function     | Callback function khi hoàn tất gọi hàm bất kể thành công hay thất bại. |

## Sample Code

```xml title=index.txml
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

```js title=index.js
Page({
  onLoading() {
    my.showLoading({ content: 'Loading...', delay: 1000 });
    setTimeout(() => {
      my.hideLoading();
    }, 5000);
  }
});
```


