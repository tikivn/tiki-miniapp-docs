---
title: my.callSecuritySystem
sidebar_custom_props:
  description: Xác thực người dùng khi gọi các APIs lấy dữ liệu từ hệ thống Tiki
---

`my.callSecuritySystem` dùng để xác thực người dùng khi gọi các APIs lấy dữ liệu từ hệ thống Tiki.

Khi gọi API lấy dữ liệu từ hệ thống Tiki bất kì, nếu gặp lỗi 428 tức là cần xác thực người dùng từ hệ thống.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/call-security-system/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/api/call-security-system/index" />

## API Params

| Thuộc tính  | Kiểu dữ liệu | Bắt buộc | Mô tả                                                                 |
| ----------- | ------------ | :------: | --------------------------------------------------------------------- |
| challengeId | string       |    ✓     | Được lấy từ error response của API gặp lỗi 428                        |
| success     | Function     |          | Callback function khi thành công.                                     |
| fail        | Function     |          | Callback function khi thất bại.                                       |
| complete    | Function     |          | Callback function khi hoàn tất tác vụ cho dù thành công hay thất bại. |

## Sample Code

```js
Page({
  callSecuritySystem() {
    my.callSecuritySystem({
      challengeId: 'YOUR_CHALLENGE_ID',
      success: (res) => {},
      fail: (res) => {}
    });
  }
});
```
