---
title: my.removeStorage
---

`my.removeStorage` là api để xoá dữ liệu đã được lưu theo key

:::note Lưu ý

- Mỗi tiện ích chỉ được lưu trữ không quá 6MB.
- Dữ liệu của mỗi tiện ích đã được tách biệt; tiện ích này không thể đọc được thông tin của tiện ích khác.
- Dữ liệu chỉ bị mất khi ứng dụng bị xoá hoặc thiết bị bị reset. Việc cài đè tiện ích không làm mất dữ liệu được lưu trữ.
- Trên iOS, storage hỗ trợ iTunes backup.

:::

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/storage/index" />

## Thuộc tính

| Thuộc tính | Kiểu dữ liệu | Bắt buộc | Mô tả                                       |
| ---------- | ------------ | -------- | ------------------------------------------- |
| key        | String       | ✓      | Key của dữ liệu                             |
| success    | Function     |        | Callback khi dữ liệu được xoá thành công    |
| fail       | Function     |        | Callback khi xoá dữ liệu thất bại           |
| complete   | Function     |        | Callback sau khi thực hiện việc xoá dữ liệu bất kể thành công hay thất bại |

## Sample Code

```js title=index.js
Page({
  onRemoveData() {
    my.removeStorage({
      key: 'test',
      success: function () {
        my.alert({ content: 'Remove dữ liệu thành công' });
      },
      fail: function (res) {
        my.alert({ content: res.errorMessage });
      }
    });
  }
});
```


