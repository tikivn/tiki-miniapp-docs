---
title: my.navigateBackMiniApp
sidebar_custom_props:
  description: Dùng để quay lại app trước đó hoặc nhảy tới 1 app bất kỳ đã được mở trước đó
---

## Giới thiệu

`my.navigateBackMiniApp` là API dùng để quay lại app trước đó hoặc nhảy tới 1 app bất kỳ đã được mở trước đó. API chỉ gọi thành công khi app hiện tại được mở bằng jsapi `my.navigateToMiniApp`.

:::note Lưu ý

Nếu app id cần back về có nhiều app cùng id được mở trước đó, thì việc nhảy về sẽ là app dược mở cuối cùng
:::

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/navigator/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/api/navigator/index" />

## API Params

| Thuộc tính | Kiểu dữ liệu | Mô tả                                                                                                               |
| ---------- | ------------ | ------------------------------------------------------------------------------------------------------------------- |
| appId      | string       | App Id cần nhảy về. Nếu không truyền sẽ tự động nhảy về app trước đó.                                               |
| extraData  | Object       | Dữ liệu cần được truyền cho app được nhảy tới.<br /> App được nhảy tới sẽ lấy thông tin qua lifecyle `App.onShow()` |
| success    | Function     | Callback function khi thành công.                                                                                   |
| fail       | Function     | Callback function khi thất bại.                                                                                     |
| complete   | Function     | Callback function khi hoàn tất tác vụ cho dù thành công hay thất bại.                                               |

## Sample Code

```xml
<view class="page">
  <view class="page__section">
    <view class="button">
      <button title="Navigate To MiniApp" onTap="navigateToMiniApp" />
    </view>
    <view class="button">
      <button title="Navigate back MiniApp" onTap="navigateBackMiniApp" />
    </view>
  </view>
</view>
```

```js
Page({
  navigateBackMiniApp() {
    my.navigateBackMiniApp({
      extraData: {
        paymentStatus: 'success'
      },
      success() {
        alert('DONE');
      }
    });
  }
});
```
