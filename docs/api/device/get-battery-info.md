---
title: my.getBatteryInfo
---

`my.getBatteryInfo` là API dùng để lấy thông tin pin của thiết bị.

**_Khả dụng_**: Hỗ trợ từ version 1.84.11 trở lên. Không hỗ trợ máy ảo.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/battery/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/api/battery/index" />

## API Params

| Thuộc tính | Kiểu dữ liệu | Mô tả                                                                                 |
| ---------- | ------------ | ------------------------------------------------------------------------------------- |
| success    | Function     | Callback function khi lấy thông tin pin thành công.                                   |
| fail       | Function     | Callback function khi lấy thông tin pin bất thành.                                    |
| complete   | Function     | Callback function khi việc lấy thông tin pin hoàn tất bất kể thành công hay thất bại. |

## Giá trị trong success callback

Khi việc gọi API thành công, framework sẽ trả về thông tin về pin như sau:

| Thuộc tính | Kiểu dữ liệu | Mô tả                                                                      |
| ---------- | ------------ | -------------------------------------------------------------------------- |
| level      | number       | Mức pin hiện tại, có giá trị từ 0 - 100.<br/>Giá trị -1 trên iOS Simulator |
| isCharging | boolean      | Trạng thái sạc pin                                                         |

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
  getBattery() {
    my.getBatteryInfo({
      success: (success) => {
        my.alert({
          title: 'Success',
          content: JSON.stringify(success)
        });
      },
      fail: (fail) => {
        my.alert({
          title: 'Fail',
          content: JSON.stringify(fail)
        });
      }
    });
  }
});
```
