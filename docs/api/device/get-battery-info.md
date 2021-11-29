---
title: my.getBatteryInfo
---

`my.getBatteryInfo` là API dùng để lấy thông tin pin của thiết bị.

**_Khả dụng_**: Hỗ trợ từ version 1.84.8 trở lên.

## API Params

| Thuộc tính | Kiểu dữ liệu | Mô tả                                                                                 |
| ---------- | ------------ | ------------------------------------------------------------------------------------- |
| success    | Function     | Callback function khi lấy thông tin pin thành công.                                   |
| fail       | Function     | Callback function khi lấy thông tin pin bất thành.                                    |
| complete   | Function     | Callback function khi việc lấy thông tin pin hoàn tất bất kể thành công hay thất bại. |

## Giá trị trong success callback

Khi việc gọi API thành công, framework sẽ trả về thông tin về pin như sau:

| Thuộc tính | Kiểu dữ liệu | Mô tả                                   |
| ---------- | ------------ | --------------------------------------- |
| level      | number       | Mức pin hiện tại, có giá trị từ 0 - 1.  |
| isCharging | boolean      | Trạng thái sạc pin (đang sạc bằng true) |

### Sample Code

```xml
<view>
  <block-header title="Usage" description="Get battery information" />
  <view class="block-content">
    <button onTap="getBatteryInfo">Get battery info</button>
  </view>
</view>
```

```js
Page({
  alert(message) {
    my.alert({
      title: 'response',
      content: JSON.stringify(message),
      buttonText: 'OK'
    });
  },
  getBattery() {
    my.getBatteryInfo({
      success: (success) => {
        this.alert(success);
      },
      fail: (fail) => {
        this.alert(fail);
      }
    });
  }
});
```
