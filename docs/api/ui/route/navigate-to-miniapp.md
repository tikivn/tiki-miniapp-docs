---
title: my.navigateToMiniApp
---

`my.navigateToMiniApp` là API dùng để di chuyển giữa các app.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/navigator/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/api/navigator/index" />

## API Params

| Thuộc tính | Kiểu dữ liệu | Bắt buộc | Mô tả                                                                                                                              |
| ---------- | ------------ | :------: | ---------------------------------------------------------------------------------------------------------------------------------- |
| appId      | string       |    ✓     | appId của miniapp muốn di chuyển tới.                                                                                              |
| appMeta    | Object       |          | appMeta của một app.                                                                                                               |
| path       | string       |          | Đường dẫn tới màn hình muốn mở của app được chuyển tới. Nếu không được quy định thì màn hình đầu tiên sẽ được mở.                  |
| extraData  | Object       |          | Dữ liệu cần được truyền cho app được nhảy tới.<br /> App được nhảy tới sẽ lấy thông tin qua hàm `App.onLaunch()` và `App.onShow()` |
| success    | Function     |          | Callback function khi thành công.                                                                                                  |
| fail       | Function     |          | Callback function khi thất bại.                                                                                                    |
| complete   | Function     |          | Callback function khi hoàn tất tác vụ cho dù thành công hay thất bại.                                                              |

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
      <button onTap="navigateToMiniApp">Navigate To MiniApp</button>
    </view>
    <view class="button">
      <button onTap="navigateBackMiniApp">Navigate back MiniApp</button>
    </view>
  </view>
</view>
```

```js
Page({
  navigateToMiniApp() {
    my.navigateToMiniApp({
      appId: '1234567890',
      path: 'pages/tabBar/component/index',
      extraData: {
        from: 'MiniApp Demo'
      },
      success() {},
      fail(err) {}
    });
  }
});
```
