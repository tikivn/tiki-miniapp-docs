---
order: 20
category:
  vi-VN: Tiki Open APIs
  en-US: Tiki Open APIs
title:
  vi-VN: my.getUserInfo
  en-US: my.getUserInfo
---

## Giới thiệu

**my.getUserInfo** là API để lấy các thông tin cơ bản của users (tên, ảnh)

## Sử dụng

### Sample Code

```js
Page({
  getTitleColor() {
    my.getUserInfo({
      success: (res) => {},
      fail: (res) => {},
    });
  },
});
```

### API Params

| Attributes | Type     | Required | Description                                                           |
| ---------- | -------- | -------- | --------------------------------------------------------------------- |
| success    | Function | No       | Callback function khi thành công.                                     |
| fail       | Function | No       | Callback function khi thất bại.                                       |
| complete   | Function | No       | Callback function khi hoàn tất tác vụ cho dù thành công hay thất bại. |

### Giá trị trong success callback

| Attributes | Type   | Description               |
| ---------- | ------ | ------------------------- |
| avatar     | String | URL ảnh đại diện của user |
| name       | String | Tên của user              |

### Giá trị trong fail callback

| Attributes | Type   | Description  |
| ---------- | ------ | ------------ |
| code       | String | Mã lỗi       |
| message    | String | Nội dung lỗi |
