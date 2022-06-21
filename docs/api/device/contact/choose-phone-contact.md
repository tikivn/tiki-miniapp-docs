---
title: my.choosePhoneContact
sidebar_custom_props:
  description: Dùng để chọn một liên hệ từ Danh bạ trong điện thoại của người dùng
---

- `my.choosePhoneContact` là API dùng để chọn một liên hệ từ Danh bạ trong điện thoại của người dùng.

**_Khả dụng_**: Hỗ trợ từ version 1.77.14 trở lên.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/contact/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/api/contact/index" />

## Sample Code

```js title=index.js
Page({
  onLoad() {
    my.choosePhoneContact({
      success: (res) => {
        console.log('contact: ', res);
      },
      fail: (res) => {}
    });
  }
});
```

## API Params

Các thuộc tính:

| Thuộc tính | Kiểu dữ liệu | Mô tả                                                                                                                    |
| ---------- | ------------ | ------------------------------------------------------------------------------------------------------------------------ |
| success    | Function     | Callback function khi một liên hệ từ Danh bạ được chọn                                                                   |
| fail       | Function     | Callback function khi user không chọn liên hệ nào, hoặc có lỗi xảy ra trong quá trình chọn, argument sẽ là error message |
| complete   | Function     | Callback function khi việc mở màn hình kết thúc cho dù thành công hay thất bại.                                          |

### Callback function payload

- success callback payload là 1 thông tin liên hệ được chọn
- fail callback payload

| Thuộc tính   | Kiểu dữ liệu | Mô tả                                                                                                                                                                           |
| ------------ | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| error        | string       | error title                                                                                                                                                                     |
| errorMessage | string       | error message in detail. Các lỗi thường gặp là: `No item selected`, khi mà user không chọn địa chỉ nào hoặc `Permission denied` khi user không cấp quyền để truy cập Sổ địa chỉ |

### Thông tin liên hệ

| Thuộc tính   | Kiểu dữ liệu | Mô tả                                |
| ------------ | ------------ | ------------------------------------ |
| full_name    | string       | Tên được lưu trong Danh bạ           |
| phone_number | string       | Số điện thoại được lưu trong Danh bạ |
