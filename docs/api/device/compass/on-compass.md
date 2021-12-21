---
title: my.onCompassChange
---

`my.onCompassChange` là API dùng để mở compass.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/compass/index" />

## API Params

| Thuộc tính | Kiểu dữ liệu | Mô tả                                       |
| ---------- | ------------ | ------------------------------------------- |
| success    | Function     | Callback function khi thực hiện thành công. |
| fail       | Function     | Callback function khi thực hiện thất bại.   |
| complete   | Function     | Callback function khi thực hiện hoàn tất.   |

### Sample Code

```xml
<view>
<block-header
      title="Usage"
      description="on compass" />
  <view class="block-content">
    <button class="button-full" onTap="onCompass">On Compass</button>
  </view>
</view>

```

```js
Page({
  onCompass() {
    if (my.canIUse('onCompassChange')) {
      my.onCompassChange({
        fail: (e) => {
          my.alert({ title: 'Fail', content: JSON.stringify(e) });
        }
      });
    }
  }
});
```
