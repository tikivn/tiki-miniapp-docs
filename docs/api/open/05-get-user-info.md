---
title: 'my.getUserInfo'
---

**my.getUserInfo** là API để lấy các thông tin cơ bản của users (tên, ảnh, số điện thoại, email và tiki user id)

Để sử dụng **my.getUserInfo** bạn cần có quyền _getAuthCode_, để lấy được email và phone, bạn cần thêm quyền _getUserPhoneAndEmail_. Chi tiết có thể xem [tại đây](/docs/api/backend-permission)

## API Params

| Thuộc tính | Kiểu dữ liệu | Mô tả                                                                 |
| ---------- | ------------ | --------------------------------------------------------------------- |
| success    | Function     | Callback function khi thành công.                                     |
| fail       | Function     | Callback function khi thất bại.                                       |
| complete   | Function     | Callback function khi hoàn tất tác vụ cho dù thành công hay thất bại. |

## Giá trị trong success callback

| Thuộc tính | Kiểu dữ liệu | Mô tả                                                    |
| ---------- | ------------ | -------------------------------------------------------- |
| customerId | String       | Tiki user id                                             |
| avatar     | String       | URL ảnh đại diện của user                                |
| name       | String       | Tên của user                                             |
| email      | String       | Email của user. Cần quyền _getUserPhoneAndEmail_         |
| phone      | String       | Số điện thoại của user .Cần quyền _getUserPhoneAndEmail_ |

## Giá trị trong fail callback

| Thuộc tính | Kiểu dữ liệu | Mô tả        |
| ---------- | ------------ | ------------ |
| code       | String       | Mã lỗi       |
| message    | String       | Nội dung lỗi |

### Sample Code

```js
Page({
  getTitleColor() {
    my.getUserInfo({
      success: (res) => {},
      fail: (res) => {}
    });
  }
});
```
