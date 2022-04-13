---
title: my.reLaunchMiniApp
---

## Giới thiệu

**my.reLaunchMiniApp** là API giống với `my.navigateToMiniApp` tuy nhiên thay vì được chồng lên Tiniapp cũ, Tiniapp mới sẽ replace luôn Tiniapp cũ. Cách sử dụng api này hoàn toàn giống với api `my.navigateToMiniApp`.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/navigator/index" />

## Sử dụng

### Sample Code

```xml
<view class="page">
  <view class="page__section">
    <view class="button">
      <button onTap="reLaunchMiniApp">Relaunch MiniApp</button>
    </view>
  </view>
</view>
```

```js
Page({
  reLaunchMiniApp() {
    my.reLaunchMiniApp({
      appId: 'vn.tiki.miniapp.demp',
      extraData: {
        from: 'MiniApp Demo'
      },
      success() {},
      fail(err) {}
    });
  }
});
```

### API Params

| Attributes | Type     | Required | Description                                                                                                                        |
| ---------- | -------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| appId      | String   | Yes      | appId của miniapp muốn di chuyển tới.                                                                                              |
| appMeta    | Object   | No       | appMeta của một app. Chỉ có những app được grant quyền `navigateToMiniAppWithAppMeta` mới được set thêm thuộc tính này      |
| path       | String   | No       | Đường dẫn tới màn hình muốn mở của app được chuyển tới. Nếu không được quy định thì màn hình đầu tiên sẽ được mở.                  |
| extraData  | Object   | No       | Dữ liệu cần được truyền cho app được nhảy tới.<br /> App được nhảy tới sẽ lấy thông tin qua hàm `App.onLaunch()` và `App.onShow()` |
| success    | Function | No       | Callback function khi thành công.                                                                                                  |
| fail       | Function | No       | Callback function khi thất bại.                                                                                                    |
| complete   | Function | No       | Callback function khi hoàn tất tác vụ cho dù thành công hay thất bại.                                                              |

### Các thuộc tính của `appMeta`

| Attributes             | Type   | Required | Description                                                                           |
| ---------------------- | ------ | -------- | ------------------------------------------------------------------------------------- |
| cdnBaseUrl             | String | No       | Base CDN để load các file config của Mini App. Base CDN phải là subdomain của tiki.vn |
| frameworkFilesLocation | String | No       | Framework files location phải là subdomain của Tiki                                   |