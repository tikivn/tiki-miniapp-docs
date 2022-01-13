---
title: my.vibrateShort
---

`my.vibrateShort` là API dùng để làm rung thiết bị, với thời gian rung 40ms.

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

### Sample Code

```xml
<view>
  <block-header title="Usage" description="Vibrate the device" />
  <view class="block-content">
    <text class="title mb-8">my.vibrateShort</text>
    <button class="button-full" onTap="onVibrateShort">Vibrate Short (40ms)</button>
  </view>
</view>
```

```js
Page({
  onVibrateShort() {
    my.vibrateShort({
      fail: (e) => {
        my.alert({ title: 'Fail', content: JSON.stringify(e) });
      },
    });
  },
});
```
