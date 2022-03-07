---
title: my.offUserCaptureScreen
---

`my.offUserCaptureScreen` là API giúp dừng việc lắng nghe các sự kiện chụp màn hình.

### Sample Code

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
  onTapOnUserCaptureScreen() {
    my.onUserCaptureScreen({
      success: () => {
        this.setData({ condition: true });
      }
    });
  },
  onTapOffUserCaptureScreen() {
    my.offUserCaptureScreen({
      success: () => {
        this.setData({ condition: false });
      }
    });
  }
});
```

## API Params

- Khi gọi API kèm theo callback thì chỉ event callback đó được xoá:

```js
my.offUserCaptureScreen(this.callback);
```

- Khi callback không được truyền vào, tất cả các event callback được xoá:

```js
my.offUserCaptureScreen();
```
