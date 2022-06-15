---
title: my.onUserCaptureScreen
---

`my.onUserCaptureScreen` là một API để lắng nghe các sự kiện chụp màn hình đang hoạt động do người dùng khởi tạo. Bạn có thể nhận thông báo sự kiện ảnh chụp màn hình từ hệ thống và các công cụ ảnh chụp màn hình của bên thứ ba. Bạn có thể dùng my.offUserCaptureScreen() để hủy lắng nghe các sự kiện.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/user-screenshot-event/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/api/user-screenshot-event/index" />

## Sample Code

```xml
<view>
  <block-header
      title="Usage"
      description="User Screenshot Event API " />
  <view class="block-content">
    <view> Current status: {{ condition ? "Monitoring has been enabled" : 'Monitoring has been canceled' }} </view>
  </view>
  <view class="block-content">
    <button class="button-full" onTap="onTapOffUserCaptureScreen">Cancel listening for screen events</button>
    <button class="button-full" onTap="onTapOnUserCaptureScreen">Enable listening for screen events</button>
  </view>
</view>
```

```js
Page({
  data: {
    condition: false
  },
  onReady() {
    this.callback = () => {
      my.alert({
        content: 'Receive a screenshot from the user'
      });
    };
    my.onUserCaptureScreen(this.callback);
  },
  onTapOnUserCaptureScreen() {
    my.onUserCaptureScreen(this.callback);
    this.setData({ condition: true });
  },
  onTapOffUserCaptureScreen() {
    my.offUserCaptureScreen();
    this.setData({ condition: false });
  }
});
```
