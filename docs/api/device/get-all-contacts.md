---
title: my.getAllContacts
---

`my.getAllContacts` là API dùng để lấy danh sách liên hệ.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/contact/index" />

**_Khả dụng_**: Hỗ trợ từ version v1.88.11 trở lên.

## API Params

| Thuộc tính | Kiểu dữ liệu | Bắt buộc | Mô tả                                                                                                                   |
| ---------- | ------------ | :------: | ----------------------------------------------------------------------------------------------------------------------- |
| scope      | Array        |          | Tham số truyền vào khi muốn lấy danh sách là email hay số điện thoại. Default là số điện thoại.Ví dụ: ["email","phone"] |
| success    | Function     |          | Callback function khi lấy danh sách liên hệ thành công.                                                                 |
| fail       | Function     |          | Callback function khi lấy danh sách liên hệ bất thành                                                                   |
| complete   | Function     |          | Callback function khi việc lấy danh sách liên hệ bất kể thành công hay thất bại                                         |

## Giá trị trong success callback

Khi việc gọi API thành công, framework sẽ trả về thông tin về pin như sau:

| Attributes   | Description                                                           | Type   |
| ------------ | --------------------------------------------------------------------- | ------ |
| full_name    | Tên được lưu trong Danh bạ                                            | string |
| phone_number | Số điện thoại được lưu trong Danh bạ                                  | string |
| email        | Email được lưu trong Danh bạ sẽ được trả về khi truyền tham số email. | string |

### Sample Code

```xml
<view class="block-content">
    <button onTap="getAllContacts">Get All Contacts</button>
</view>
```

```js
Page({
  getAllContacts() {
    my.getAllContacts({
      scope: ['phone'],
      success: (success) => {
        this.alert(JSON.stringify(success));
      },
      fail: (fail) => {
        this.alert(JSON.stringify(fail));
      }
    });
  }
});
```
