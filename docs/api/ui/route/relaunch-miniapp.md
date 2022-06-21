---
title: my.reLaunchMiniApp
sidebar_custom_props:
  description: Giống với `my.navigateToMiniApp` tuy nhiên thay vì được chồng lên Tiniapp cũ, Tiniapp mới sẽ replace luôn Tiniapp cũ
---

- `my.reLaunchMiniApp` là API giống với `my.navigateToMiniApp` tuy nhiên thay vì được chồng lên Tiniapp cũ, Tiniapp mới sẽ replace luôn Tiniapp cũ.
- Cách sử dụng API này hoàn toàn giống với api `my.navigateToMiniApp`.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/navigator/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/api/navigator/index" />

## API Params

| Thuộc tính | Kiểu dữ liệu | Bắt buộc | Mô tả                                                                                                                              |
| ---------- | ------------ | :------: | ---------------------------------------------------------------------------------------------------------------------------------- |
| appId      | String       |    ✓     | appId của miniapp muốn di chuyển tới.                                                                                              |
| appMeta    | Object       |          | appMeta của một app. Chỉ có những app được grant quyền `navigateToMiniAppWithAppMeta` mới được set thêm thuộc tính này             |
| path       | String       |          | Đường dẫn tới màn hình muốn mở của app được chuyển tới. Nếu không được quy định thì màn hình đầu tiên sẽ được mở.                  |
| extraData  | Object       |          | Dữ liệu cần được truyền cho app được nhảy tới.<br /> App được nhảy tới sẽ lấy thông tin qua hàm `App.onLaunch()` và `App.onShow()` |
| success    | Function     |          | Callback function khi gọi hàm thành công.                                                                                          |
| fail       | Function     |          | Callback function khi gọi hàm thất bại.                                                                                            |
| complete   | Function     |          | Callback function khi hoàn tất gọi hàm bất kể thành công hay thất bại.                                                             |

### Các thuộc tính của `appMeta`

| Thuộc tính             | Kiểu dữ liệu | Mô tả                                                                                 |
| ---------------------- | ------------ | ------------------------------------------------------------------------------------- |
| cdnBaseUrl             | string       | Base CDN để load các file config của Mini App. Base CDN phải là subdomain của tiki.vn |
| frameworkFilesLocation | string       | Framework files location phải là subdomain của Tiki                                   |

## Sample Code

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
