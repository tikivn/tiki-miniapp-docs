---
title: my.setKeepScreenOn
---

`my.setKeepScreenOn` my.setKeepScreenOn là một API dùng để giữ màn hình luôn sáng.

**_Khả dụng_**: Hỗ trợ từ version 1.84.21 trở lên.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/brightness/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/api/brightness/index" />

## API Params

| Thuộc tính   | Kiểu dữ liệu | Bắt buộc | Mô tả                                                                                              |
| ------------ | ------------ | :------: | -------------------------------------------------------------------------------------------------- |
| keepScreenOn | boolean      |    ✓     | Nếu mang giá trị `true`, màn hình sẽ luôn bật sáng. Còn `false` là tắt chức năng giữ sáng màn hình |
| success      | Function     |          | Callback function khi bật/tắt giữ màn hình thành công.                                             |
| fail         | Function     |          | Callback function khi bật/tắt giữ màn hình bất thành.                                              |
| complete     | Function     |          | Callback function khi bật/tắt giữ màn hình bất kể thành công hay thất bại.                         |

## Sample Code

```xml
<view class="page">
  <block-header title="Usage" description="Get/set brightness and keep screen on" />
  <view class="block-content">
    <view>Keep screen on</view>
    <view class="page-section-demo">
      <switch checked="{{status}}" onChange="switchKeepScreenOn"/>
    </view>
  </view>
  <view class="block-content">
    <view>Adjust screen brightness</view>
    <view class="page-section-demo">
      <slider value="{{brightness*100}}" onChange="sliderChange" />
    </view>
  </view>
  <view class="block-content">
    <view></view>
    <view class="page-section-demo">
      <button type="primary" onTap="onGetBrightness">Get screen brightness</button>
    </view>
  </view>
</view>
```

```js
Page({
  data: {
    status: false,
    brightness: 0
  },
  onLoad() {
    my.getScreenBrightness({
      success: (res) =>
        this.setData({
          brightness: res.brightness
        })
    });
  },
  switchKeepScreenOn(e) {
    my.setKeepScreenOn({
      keepScreenOn: e.detail.value,
      success: () => {
        this.setData({
          status: e.detail.value
        });
      },
      fail: (res) => {
        my.alert({ title: 'Fail', content: JSON.stringify(res) });
      }
    });
  },
  sliderChange(e) {
    const _value = e.detail.value / 100;
    my.setScreenBrightness({
      brightness: _value,
      success: (res) => {
        this.setData({
          brightness: _value
        });
      }
    });
  },
  onGetBrightness() {
    my.getScreenBrightness({
      success: (res) => {
        my.alert({
          title: 'Success',
          content: 'Độ sáng màn hình hiện tại:' + res.brightness
        });
      },
      fail: (res) => {
        my.alert({ title: 'Fail', content: JSON.stringify(res) });
      }
    });
  }
});
```
