---
title: my.getStorage
---

`my.getStorage` là api để lấy dữ liệu đã được lưu theo key

:::note Lưu ý

- Mỗi tiện ích chỉ được lưu trữ không quá 6MB.
- Dữ liệu của mỗi tiện ích đã được tách biệt; tiện ích này không thể đọc được thông tin của tiện ích khác.
- Dữ liệu chỉ bị mất khi ứng dụng bị xoá hoặc thiết bị bị reset. Việc cài đè tiện ích không làm mất dữ liệu được lưu trữ.
- Trên iOS, storage hỗ trợ iTunes backup.

:::

## API Params

| Thuộc tính | Kiểu dữ liệu | Bắt buộc | Mô tả                                                                                                |
| ---------- | ------------ | -------- | ---------------------------------------------------------------------------------------------------- |
| key        | string       | ✓     | Key của dữ liệu                                                                                      |
| success    | Function     |        | Callback khi dữ liệu được đọc thành công. Trong cấu trúc của response, `data` là field chứa dữ liêu. |
| fail       | Function     |        | Callback khi đọc dữ liệu thất bại                                                                    |
| complete   | Function     |        | Callback sau khi thực hiện việc lưu dữ liệu  bất kể thành công hay thất bại                                                        |

### Success callback

| Thuộc tính | Kiểu dữ liệu | Mô tả                                                                             |
| ---------- | ------------ | --------------------------------------------------------------------------------- |
| data       | string/Object       | Giá trị của dữ liệu được lấy ra. Giá trị của data có thể là string hoặc là object |

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/storage/index" />


## Sample Code

```js title=index.js
Page({
  onReadData() {
    my.getStorage({
      key: 'test',
      success: function (res) {
        my.alert({ content: 'Title' + res.data.title });
      },
      fail: function (res) {
        my.alert({ content: res.errorMessage });
      }
    });
  }
});
```

