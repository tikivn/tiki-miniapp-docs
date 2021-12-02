---
title: my.getScreenBrightness
---

`my.getScreenBrightness` là API dùng để lấy thông tin độ sáng màn hình.

**_Khả dụng_**: Hỗ trợ từ version 1.84.19 trở lên.

## API Params

| Thuộc tính | Kiểu dữ liệu | Mô tả                                                                                    |
| ---------- | ------------ | ---------------------------------------------------------------------------------------- |
| success    | Function     | Callback function khi lấy thông tin độ sáng màn hình thành công.                         |
| fail       | Function     | Callback function khi lấy thông tin độ sáng màn hình bất thành.                          |
| complete   | Function     | Callback function khi việc lấy độ sáng màn hình hoàn tất bất kể thành công hay thất bại. |

## Giá trị trong success callback

Khi việc gọi API thành công, framework sẽ trả về thông tin về độ sáng màn hình như sau:

| Thuộc tính | Kiểu dữ liệu | Mô tả                                          |
| ---------- | ------------ | ---------------------------------------------- |
| brightness | number       | Độ sáng màn hình hiện tại, có giá trị từ 0 - 1 |

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
