---
title: my.choosePhoneContact
---

## Giới thiệu

- `my.choosePhoneContact` là API dùng để chọn một liên hệ từ Danh bạ trong điện thoại của người dùng
- Chỉ hỗ trợ từ version 1.77.14 trở lên

## Sử dụng

### Sample Code

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

### API Params

Các thuộc tính:

| Attributes | Type     | Required | Description                                                                                                              |
| ---------- | -------- | -------- | ------------------------------------------------------------------------------------------------------------------------ |
| success    | Function | No       | Callback function khi một liên hệ từ Danh bạ được chọn                                                                   |
| fail       | Function | No       | Callback function khi user không chọn liên hệ nào, hoặc có lỗi xảy ra trong quá trình chọn, argument sẽ là error message |
| complete   | Function | No       | Callback function khi việc mở màn hình kết thúc cho dù thành công hay thất bại.                                          |

### Callback function payload

- success callback payload là 1 thông tin liên hệ được chọn
- fail callback payload

| Attributes   | Type   | Description                                                                                                                                                                     |
| ------------ | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| error        | string | error title                                                                                                                                                                     |
| errorMessage | string | error message in detail. Các lỗi thường gặp là: `No item selected`, khi mà user không chọn địa chỉ nào hoặc `Permission denied` khi user không cấp quyền để truy cập Sổ địa chỉ |

### Thông tin liên hệ

| Attributes   | Description                          | Type   |
| ------------ | ------------------------------------ | ------ |
| full_name    | Tên được lưu trong Danh bạ           | string |
| phone_number | Số điện thoại được lưu trong Danh bạ | string |
