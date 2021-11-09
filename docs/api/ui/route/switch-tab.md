---
title: my.switchTab
---

## Giới thiệu

**my.switchTab** là API dùng để nhảy về một tab ở màn hình home

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/navigator/index" />

## Sử dụng

### Sample Code

```xml
<view class="page">
  <view class="page__section">
    <view class="button">
      <button title="Switch Tab" onTap="switchTab" />
    </view>
    <view class="button">
      <button title="Navigate To" onTap="navigateTo" />
    </view>
    <view class="button">
      <button title="Navigate Back" onTap="navigateBack" />
    </view>
    <view class="button">
      <button title="Switch Tab" onTap="switchTab" />
    </view>
    <view class="button">
      <button title="reLaunch" onTap="reLaunch" />
    </view>
  </view>
</view>
```

```js
Page({
  switchTab() {
    my.switchTab({ url: 'pages/api/index' });
  }
});
```

### API Params

| Attributes | Type     | Required | Description                                                                                                     |
| ---------- | -------- | -------- | --------------------------------------------------------------------------------------------------------------- |
| url        | String   | Yes      | Đường dẫn (pagePath) của màn hình muốn nhảy tới. pagePath phải được định nghĩa trong trường tabBar của app.json |
| success    | Function | No       | Callback function khi thành công.                                                                               |
| fail       | Function | No       | Callback function khi thất bại.                                                                                 |
| complete   | Function | No       | Callback function khi hoàn tất tác vụ cho dù thành công hay thất bại.                                           |
