---
title: my.startPullDownRefresh
---

## Giới thiệu

`my.startPullDownRefresh` là api để active tính năng pull down to refresh, khi được gọi sẽ có animation loading tương đương với việc manual pull down list. Hàm `onPullDownRefresh` của `page` sẽ được trigger. Sau khi đã lấy được dữ liệu, có thể gọi `my.stopPullDownRefresh` để stop loading.

Tuy nhiên hàm `my.startPullDownRefresh` chỉ hoạt động khi thoả mãn 2 điều kiện:

- Trong `app.json` `allowsBounceVertical` phải set = `YES` hoặc không cần set vì đã được set mặc định

```json
{
  "window": {
    "defaultTitle": "My App",
    "titleBarColor": "#fff",
    "backgroundColor": "#F5F7FC",
    "allowsBounceVertical": "NO"
  }
}
```

- Trong `index.json` của page phải enable `pullRefresh`

```json
{ "pullRefresh": true }
```

Vì vây muốn disable tính năng pull to refresh chỉ cần set `allowsBounceVertical` thành `NO` hoặc `pullRefresh` thành `false`

## Sử dụng

### Sample Code

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
    <view class="page-section-title">my.startPullDownRefresh</view>
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

### Chi tiết

| Thuộc tính | Kiểu dữ liệu | Required | Mô tả                                            |
| ---------- | ------------ | -------- | ------------------------------------------------ |
| success    | Function     | No       | Callback khi pull down animation trigger success |
| fail       | Function     | No       | Callback khi pull down animation trigger fail    |
| complete   | Function     | No       | Callback sau khi pull down animation trigger     |