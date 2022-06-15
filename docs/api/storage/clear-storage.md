---
title: my.clearStorage
---

`my.clearStorage` là api để xoá toàn bộ dữ liệu của app.

:::note Lưu ý

- Mỗi tiện ích chỉ được lưu trữ không quá 6MB.
- Dữ liệu của mỗi tiện ích đã được tách biệt; tiện ích này không thể đọc được thông tin của tiện ích khác.
- Dữ liệu chỉ bị mất khi ứng dụng bị xoá hoặc thiết bị bị reset. Việc cài đè tiện ích không làm mất dữ liệu được lưu trữ.
- Trên iOS, storage hỗ trợ iTunes backup.

:::

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/storage/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/api/storage/index" />

## API Params

| Thuộc tính | Kiểu dữ liệu | Mô tả                                                                               |
| ---------- | ------------ | ----------------------------------------------------------------------------------- |
| success    | Function     | Callback function khi dữ liệu được xoá thành công                                   |
| fail       | Function     | Callback function khi xoá dữ liệu thất bại                                          |
| complete   | Function     | Callback function sau khi thực hiện việc xoá dữ liệu bất kể thành công hay thất bại |

## Sample Code

```js title=index.js
Page({
  onClearData() {
    my.clearStorage({
      success: function () {
        my.alert({ content: 'Xoá dữ liệu thành công' });
      },
      fail: function (res) {
        my.alert({ content: res.errorMessage });
      }
    });
  }
});
```
