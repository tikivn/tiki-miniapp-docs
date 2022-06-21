---
sidebar_position: 4
title: my.getUserInfo
sidebar_custom_props:
  description: Lấy các thông tin cơ bản của users (tên, ảnh, số điện thoại, email và tiki user id)
---

`my.getUserInfo` là API để lấy các thông tin cơ bản của users (tên, ảnh, số điện thoại, email và tiki user id)

Để lấy được email và phone, bạn cần thêm quyền _getUserPhoneAndEmail_. Chi tiết có thể xem [tại đây](/docs/api/backend-permission)

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/get-user-info/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/api/get-user-info/index" />

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
