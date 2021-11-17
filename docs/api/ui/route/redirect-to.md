---
title: my.navigateTo
---

## Giới thiệu

**my.redirectTo** là API dùng để di chuyển từ màn hình hiện tại tới màn hình mong muốn trong ứng dụng.

Khác với **my.navigateTo**, **my.redirectTo** sẽ thay thế màn hình hiện tại bằng màn hình mới.

## Chú ý:

**my.redirectTo** được hỗ trợ từ framework 1.84 trở đi

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/navigator/index" />

## Sử dụng

### Sample Code

```xml
<view class="page">
  <view class="page__section">
    <view class="button">
      <button onTap="navigateTo">Navigate To</button>
    </view>
    <view class="button">
      <button onTap="navigateTo">Redirect To</button>
    </view>
    <view class="button">
      <button onTap="navigateBack">Navigate Back</button>
    </view>
    <view class="button">
      <button onTap="switchTab">Switch Tab</button>
    </view>
    <view class="button">
      <button onTap="reLaunch">reLaunch</button>
    </view>
  </view>
</view>
```

```js
Page({
  redirectTo() {
    my.redirectTo({ url: 'pages/component/view/index' });
  }
});
```

### API Params

| Attributes | Type     | Required | Description                                                                                                                                                                                                                                                                                                                                              |
| ---------- | -------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| url        | String   | Yes      | Đường dẫn (pagePath) của màn hình muốn nhảy tới. Nếu bạn chỉ định màn hình nằm trong tabbar thì màn hình đó sẽ được thêm vào stack thay việc thực hiện chuyển tab. <br /><br /> Để truyền dữ liệu giữa các màn hình bạn có thể truyền theo query string đằng sau dấu `?` của url. <br /><br />**Ví dụ:** `pages/index/index?param1=value1&param2=value2` |
| success    | Function | No       | Callback function khi thành công.                                                                                                                                                                                                                                                                                                                        |
| fail       | Function | No       | Callback function khi thất bại.                                                                                                                                                                                                                                                                                                                          |
| complete   | Function | No       | Callback function khi hoàn tất tác vụ cho dù thành công hay thất bại.                                                                                                                                                                                                                                                                                    |
