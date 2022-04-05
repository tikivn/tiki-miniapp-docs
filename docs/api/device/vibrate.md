---
title: my.vibrate
---

`my.vibrate` là API dùng để làm rung thiết bị, với thời gian rung 200ms.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/vibration/index" />

**_Khả dụng_**: Hỗ trợ từ version 1.85.9 trở lên.

## API Params

| Thuộc tính | Kiểu dữ liệu | Mô tả                                                                                 |
| ---------- | ------------ | ------------------------------------------------------------------------------------- |
| success    | Function     | Callback function khi thực hiện thành công.                                           |
| fail       | Function     | Callback function khi thực hiện thất bại.                                             |
| complete   | Function     | Callback function khi thực hiện hoàn tất.                                             |

## Sample Code

```xml
<view>
  <block-header title="Usage" description="Vibrate the device" />
  <view class="block-content">
    <text class="title mb-8">my.vibrate</text>
    <button class="button-full" onTap="onVibrate">Vibrate (200ms)</button>
  </view>
</view>
```

```js
Page({
  onVibrate() {
    my.vibrate({
      fail: (e) => {
        my.alert({ title: 'Fail', content: JSON.stringify(e) });
      },
    });
  },
});
```
