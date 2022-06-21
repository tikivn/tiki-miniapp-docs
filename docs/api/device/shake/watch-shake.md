---
title: my.watchShake
sidebar_custom_props:
  description: Dùng để nhận sự kiện lắc thiết bị
---

`my.watchShake` là API dùng để nhận sự kiện lắc thiết bị. Success callback chỉ được gọi một lần khi thiết bị được lắc sau khi API đã được gọi. Cần gọi lại API này nếu muốn nhận sự kiện thiết bị lắc ở lần sau.

**_Khả dụng_**: Hỗ trợ từ version 1.86.3 trở lên.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/shake/index" />

## API Params

| Thuộc tính | Kiểu dữ liệu | Mô tả                                     |
| ---------- | ------------ | ----------------------------------------- |
| success    | Function     | Callback function khi thiết bị được lắc.  |
| fail       | Function     | Callback function khi có lỗi xảy ra.      |
| complete   | Function     | Callback function khi thực hiện hoàn tất. |

### Sample Code

```xml
<view>
  <block-header title="Usage" description="Receive a single callback when device is shaked." />
  <view class="block-content">
    <button class="button-full" onTap="onWatchShake">Watch shake</button>
  </view>
</view>
```

```js
Page({
  data: {
    isWatchingShake: false
  },
  onWatchShake() {
    if (!this.data.isWatchingShake) {
      my.watchShake({
        success: () => {
          this.setData({ isWatchingShake: false });
          my.alert({
            title: 'Success',
            content: 'Device is shaked'
          });
        },
        fail: (e) => {
          this.setData({ isWatchingShake: false });
          my.alert({ title: 'Fail', content: JSON.stringify(e) });
        }
      });

      this.setData({ isWatchingShake: true });
    }
  }
});
```
