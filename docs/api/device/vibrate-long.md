---
title: my.vibrateLong
---

`my.vibrateLong` là API dùng để làm rung thiết bị, với thời gian rung 400ms.

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
    <text class="title mb-8">my.vibrateLong</text>
    <button class="button-full" onTap="onVibrateLong">Vibrate Long (400ms)</button>
  </view>
</view>
```

```js
Page({
  onVibrateLong() {
    my.vibrateLong({
      fail: (e) => {
        my.alert({ title: 'Fail', content: JSON.stringify(e) });
      },
    });
  },
});
```
