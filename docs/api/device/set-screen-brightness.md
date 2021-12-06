---
title: my.setScreenBrightness
---

`my.setScreenBrightness` là API dùng để điều chỉnh độ sáng màn hình.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/brightness/index" />

**_Khả dụng_**: Hỗ trợ từ version 1.84.19 trở lên.

## API Params

| Thuộc tính | Kiểu dữ liệu | Bắt buộc | Mô tả                                                                             |
| ---------- | ------------ | :------: | --------------------------------------------------------------------------------- |
| brightness | number       |    ✓     | Dữ liệu cần đưa vào bắt buộc phải nằm trong khoảng từ 0 - 1.                      |
| success    | Function     |          | Callback function khi điều chỉnh độ sáng thành công.                              |
| fail       | Function     |          | Callback function khi điều chỉnh độ sáng bất thành.                               |
| complete   | Function     |          | Callback function khi điều chỉnh độ sáng hoàn tất bất kể thành công hay thất bại. |

### Sample Code

```xml
<view class="page">
  <block-header title="Usage" description="Get battery information" />
  <view class="block-content">
    <view>Adjust screen brightness</view>
    <view class="page-section-demo">
      <slider value="{{brightness*100}}" onChange="sliderChange" />
    </view>
  </view>
  <view class="block-content">
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
