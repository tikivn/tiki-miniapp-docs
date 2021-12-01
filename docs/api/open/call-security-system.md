---
title: 'my.callSecuritySystem'
---

## Giới thiệu

**my.callSecuritySystem** dùng để xác thực người dùng khi gọi các APIs lấy dữ liệu từ hệ thống Tiki.

Khi gọi API lấy dữ liệu từ hệ thống Tiki bất kì, nếu gặp lỗi 428 tức là cần xác thực người dùng từ hệ thống.

## Sử dụng

### Sample Code

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

### API Params

| Attributes  | Type     | Required | Description                                                           |
| ----------- | -------- | -------- | --------------------------------------------------------------------- |
| challengeId | String   | Yes      | Được lấy từ error response của API gặp lỗi 428                        |
| success     | Function | No       | Callback function khi thành công.                                     |
| fail        | Function | No       | Callback function khi thất bại.                                       |
| complete    | Function | No       | Callback function khi hoàn tất tác vụ cho dù thành công hay thất bại. |
