---
order: 81
category:
  vi-VN: Pull down to refresh
  en-US: Pull down to refresh
title: 
  vi-VN: my.stopPullDownRefresh
  en-US: my.stopPullDownRefresh
---

# Giới thiệu
`my.stopPullDownRefresh` là api để stop loading khi đã gọi `my.startPullDownRefresh` hoặc manual pull down. Khi đã có được dữ liệu, phải gọi hàm này để tắt loading.
# Sample Code
**index.json**
```json
{
    "defaultTitle": "Pull down to refresh",
    "pullRefresh": true
}
```

**index.txml**
```xml
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

**index.js**
```js
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

# Chi tiết
| Thuộc tính     | Kiểu dữ liệu  | Required | Mô tả |
| ------- | --------------- | ------- | --------------- |
| success | Function | No | Callback khi stop pull down animation trigger success |
| fail | Function | No | Callback khi stop pull down animation trigger fail |
| complete | Function | No | Callback sau khi stop pull down animation  |