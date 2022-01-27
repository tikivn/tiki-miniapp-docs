---
title: my.openAppSetting
---

`my.openAppSetting` là API dùng để mở app cài đặt của hệ thống và hiển thị màn hình các cài đặt tuỳ biến của app hiện tại (nếu có).

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/open-app-setting/index" />

**_Khả dụng_**: Hỗ trợ từ version 1.88.3 trở lên.

## API Params

| Thuộc tính | Kiểu dữ liệu | Mô tả                                         |
| ---------- | ------------ | --------------------------------------------- |
| success    | Function     | Callback function khi thực hiện thành công.   |
| fail       | Function     | Callback function khi thực hiện thất bại.     |
| complete   | Function     | Callback function khi thực hiện hoàn tất.     |

### Sample Code

```xml
<view class="page">
  <block-header title="Usage" description="Open the system settings of the host app." />
  <view class="block-content">
    <view class="page-section-demo">
      <button type="primary" onTap="openAppSetting">Open app setting</button>
    </view>
  </view>
</view>
```

```js
Page({
  openAppSetting() {
    my.openAppSetting({
      success: (res) => {
        // do something
      },
      fail: (res) => {
        my.alert({ title: 'Fail', content: JSON.stringify(res) });
      },
    });
  },
});
```
