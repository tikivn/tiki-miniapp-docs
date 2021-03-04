---
order: 20
category:
  vi-VN: Tiki Open APIs
  en-US: Tiki Open APIs
title:
  vi-VN: my.getAuthCode
  en-US: my.getAuthCode
---

## Giới thiệu

**my.getAuthCode** là API để lấy ra auth code của một user.

Thông qua việc sử dụng auth code, lập trình viên của Mini App có thể gọi tới các Open API của Tiki để
sử dụng các tính năng phức tạp hơn.

## Sử dụng

### Sample Code

```js
Page({
  getAuthCode() {
    my.getAuthCode({
      success: (res) => {},
      fail: (res) => {},
    });
  },
});
```

### API Params

| Attributes | Type           | Required | Description                                                           |
| ---------- | -------------- | -------- | --------------------------------------------------------------------- |
| scopes     | String / Array | no       | Danh sách các scopes, mặc định là []                                  |
| success    | Function       | No       | Callback function khi thành công.                                     |
| fail       | Function       | No       | Callback function khi thất bại.                                       |
| complete   | Function       | No       | Callback function khi hoàn tất tác vụ cho dù thành công hay thất bại. |

### Giá trị trong success callback

| Attributes        | Type      | Description                              |
| ----------------- | --------- | ---------------------------------------- |
| authCode          | String    | URL ảnh đại diện của user                |
| authErrorScopes   | Key-Value | Key là tên scope, value là error code    |
| authSuccessScopes | Array     | Danh sách các scopes được users cho phép |

Error code là một chuỗi, có thể nhận các giá trị

| Error code | Ý nghĩa                                |
| ---------- | -------------------------------------- |
| 1          | Mini App không có quyền xin scopes này |
| 2          | Users không cho phép lấy auth code     |
