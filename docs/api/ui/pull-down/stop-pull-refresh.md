---
title: my.stopPullDownRefresh
---

`my.stopPullDownRefresh` là api để stop loading khi đã gọi `my.startPullDownRefresh` hoặc manual pull down. Khi đã có được dữ liệu, phải gọi hàm này để tắt loading.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/pull-refresh/index" />


## API Params

| Thuộc tính | Kiểu dữ liệu | Mô tả                                                 |
| ---------- | ------------ | ----------------------------------------------------- |
| success    | Function     | Callback function khi gọi hàm thành công. |
| fail       | Function     | Callback function khi gọi hàm thất bại.    |
| complete   | Function     | Callback function khi hoàn tất gọi hàm bất kể thành công hay thất bại.             |


## Sample Code

```json title=index.json
{
  "defaultTitle": "Pull down to refresh",
  "pullRefresh": true
}
```

```xml title=index.txml
<view class="page">
  <view class="page-description">Pull down to refresh API</view>
  <view class="page-section">
    <view class="page-section-title">my.stopPullDownRefresh</view>
    <view class="page-section-demo">
      <button type="primary" onTap="onStartPullDown">Start refreshing</button>
      <button type="primary" onTap="onStopPullDown">Stop refreshing</button>
    </view>
  </view>
</view>
```

```js title=index.js
Page({
  onPullDownRefresh() {
    //do load data here
    console.log('onPullDownRefresh is triggered');
  },
  onStartPullDown() {
    my.startPullDownRefresh();
  }
  onStopPullDown() {
    my.stopPullDownRefresh();
  }
})
```


