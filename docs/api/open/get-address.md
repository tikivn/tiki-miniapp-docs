---
sidebar_position: 1
title: my.getAddress
sidebar_custom_props:
  description: Dùng để chọn một địa chỉ từ Sổ địa chỉ của Tiki. Yêu cầu người dùng phải đăng nhập trước
---

`my.getAddress` là API dùng để chọn một địa chỉ từ Sổ địa chỉ của Tiki. Yêu cầu người dùng phải đăng nhập trước

**_Khả dụng_**: Hỗ trợ từ version 1.77.14 trở lên.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/address/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/api/address/index" />

## API Params

| Thuộc tính | Kiểu dữ liệu | Mô tả                                                                                                                            |
| ---------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| success    | Function     | Callback function khi một địa chỉ từ Sổ địa chỉ được chọn                                                                        |
| fail       | Function     | Callback function khi user không chọn địa chỉ nào, hoặc có lỗi xảy ra trong quá trình chọn địa chỉ, argument sẽ là error message |
| complete   | Function     | Callback function khi việc mở màn hình kết thúc cho dù thành công hay thất bại.                                                  |

### Callback function payload

- success callback payload là 1 địa chỉ được chọn, bạn có thể xem thông tin địa chỉ bên dưới
- fail callback payload

| Thuộc tính   | Kiểu dữ liệu | Mô tả                                                                                                                                                                           |
| ------------ | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| error        | string       | error title                                                                                                                                                                     |
| errorMessage | string       | error message in detail. Các lỗi thường gặp là: `No item selected`, khi mà user không chọn địa chỉ nào hoặc `Permission denied` khi user không cấp quyền để truy cập Sổ địa chỉ |

### Thông tin địa chỉ được trả về

| Thuộc tính            | Kiểu dữ liệu   | Mô tả                                                  |
| --------------------- | -------------- | ------------------------------------------------------ |
| id                    | number         | Id của địa chỉ                                         |
| full_name             | string         | Tên người nhận                                         |
| phone_number          | string         | Số điện thoại người nhận                               |
| is_default            | boolean        | Có phải là địa chỉ mặc định trong Sổ địa chỉ hay không |
| company               | string / null  | Tên công ty của người nhận                             |
| street                | string         | Tên đường                                              |
| delivery_address_type | home / company | Loại địa chỉ: home hoặc company                        |
| country               | string         | Tên quốc gia                                           |
| country_id            | number         | Mã quốc gia                                            |
| city_id               | number         | Mã thành phố                                           |
| city                  | string         | Tên thành phố                                          |
| district_id           | number         | Mã quận/huyện                                          |
| district              | string         | Tên quận/huyện                                         |
| ward_id               | number         | Mã phường/xã                                           |
| ward                  | string         | Tên phường/xã                                          |

## Sample Code

```js title=index.js
Page({
  onLoad() {
    my.getAddress({
      success: (res) => {
        console.log('address: ', res);
      },
      fail: (res) => {}
    });
  }
});
```
