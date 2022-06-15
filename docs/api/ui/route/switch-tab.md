---
title: my.switchTab
---

`my.switchTab` là API dùng để nhảy về một tab ở màn hình home

## API Params

| Thuộc tính | Kiểu dữ liệu | Bắt buộc | Mô tả                                                                                                           |
| ---------- | ------------ | :------: | --------------------------------------------------------------------------------------------------------------- |
| url        | String       |    ✓     | Đường dẫn (pagePath) của màn hình muốn nhảy tới. pagePath phải được định nghĩa trong trường tabBar của app.json |
| success    | Function     |          | Callback function khi gọi hàm thành công.                                                                       |
| fail       | Function     |          | Callback function khi gọi hàm thất bại.                                                                         |
| complete   | Function     |          | Callback function khi hoàn tất gọi hàm bất kể thành công hay thất bại.                                          |

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/navigator/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/api/navigator/index" />

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
