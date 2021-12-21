---
title: my.offCompassChange
---

`my.offCompassChange` là API dùng để đóng compass.

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
      description="off compass" />
  <view class="block-content">
    <button class="button-full" onTap="offCompass">Off Compass</button>
  </view>
</view>

```

```js
Page({
  offCompass() {
    if (my.canIUse('offCompassChange')) {
      my.offCompassChange({
        fail: (e) => {
          my.alert({ title: 'Fail', content: JSON.stringify(e) });
        }
      });
    }
  }
});
```
