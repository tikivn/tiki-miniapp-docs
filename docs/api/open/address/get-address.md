---
title: my.getAddress
---

## Giới thiệu

- **my.getAddress** là API dùng để chọn một địa chỉ từ Sổ địa chỉ của Tiki. Yêu cầu người dùng phải đăng nhập trước
- Chỉ hỗ trợ từ version 1.77.14 trở lên

## Sử dụng

### Sample Code

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

### API Params

Các thuộc tính:

| Attributes | Type     | Required | Description                                                                                                                      |
| ---------- | -------- | -------- | -------------------------------------------------------------------------------------------------------------------------------- |
| success    | Function | No       | Callback function khi một địa chỉ từ Sổ địa chỉ được chọn                                                                        |
| fail       | Function | No       | Callback function khi user không chọn địa chỉ nào, hoặc có lỗi xảy ra trong quá trình chọn địa chỉ, argument sẽ là error message |
| complete   | Function | No       | Callback function khi việc mở màn hình kết thúc cho dù thành công hay thất bại.                                                  |

### Callback function payload

- success callback payload là 1 địa chỉ được chọn, bạn có thể xem thông tin địa chỉ bên dưới
- fail callback payload

| Attributes   | Type   | Description                                                                                                                                                                     |
| ------------ | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| error        | string | error title                                                                                                                                                                     |
| errorMessage | string | error message in detail. Các lỗi thường gặp là: `No item selected`, khi mà user không chọn địa chỉ nào hoặc `Permission denied` khi user không cấp quyền để truy cập Sổ địa chỉ |

### Thông tin địa chỉ được trả về

| Attributes            | Description                                            | Type           |
| --------------------- | ------------------------------------------------------ | -------------- |
| id                    | Id của địa chỉ                                         | number         |
| full_name             | Tên người nhận                                         | string         |
| phone_number          | Số điện thoại người nhận                               | string         |
| is_default            | Có phải là địa chỉ mặc định trong Sổ địa chỉ hay không | boolean        |
| company               | Tên công ty của người nhận                             | string / null  |
| street                | Tên đường                                              | string         |
| delivery_address_type | Loại địa chỉ: home hoặc company                        | home / company |
| country               | Tên quốc gia                                           | string         |
| country_id            | Mã quốc gia                                            | number         |
| city_id               | Mã thành phố                                           | number         |
| city                  | Tên thành phố                                          | string         |
| district_id           | Mã quận/huyện                                          | number         |
| district              | Tên quận/huyện                                         | string         |
| ward_id               | Mã phường/xã                                           | number         |
| ward                  | Tên phường/xã                                          | string         |
