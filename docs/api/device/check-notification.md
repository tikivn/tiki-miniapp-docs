---
title: my.checkNotification
---

`my.checkNotification` là API dùng để kiểm tra người dùng đã bật notification cho Tiki app hay chưa.


## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/check-notification/index" />


***Khả dụng***: hỗ trợ từ version 1.83.20 trở lên.

## API Params

| Thuộc tính | Kiểu dữ liệu | Mô tả                                                                        |
| ---------- | ------------ | ---------------------------------------------------------------------------- |
| success    | Function     | Callback function khi việc kiểm tra thành công.                              |
| fail       | Function     | Callback function khi việc kiểm tra bất thành.                               |
| complete   | Function     | Callback function khi việc kiểm tra hoàn tất bất kể thành công hay thất bại. |

## Callback function payload

| Thuộc tính        | Kiểu dữ liệu | Mô tả                                         |
| ----------------- | ------------ | --------------------------------------------- |
| permission_status | string       | Trạng thái hiện tại của việc bật notification |

## Permission Status

| Giá trị | Mô tả                                         |
| ------- | --------------------------------------------- |
| granted | Notification của Tiki app đã đuuợc bật lên.   |
| denied  | Notification của Tiki app không được bật lên. |


## Sample Code

```js title=index.js
Page({
  onCheckNotification() {
    my.checkNotification({
      success: (res) => {
        my.alert({ content: JSON.stringify(res) });
      },
      fail: (res) => {
        my.alert({ content: JSON.stringify(res) });
      },
    });
  },
});
```

```xml title=index.txml
<view>
  <block-header title="Usage" description="Check notification permission on device" />
  <view class="block-content">
    <button class="button-full" onTap="onCheckNotification">Check Notification Permission</button>
  </view>
</view>
```

