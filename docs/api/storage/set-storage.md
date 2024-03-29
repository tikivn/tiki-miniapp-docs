---
title: my.setStorage
sidebar_custom_props:
  description: Lưu trữ dữ liệu theo key, dữ liệu mới sẽ ghi đè dữ liệu cũ nếu cùng key
---

`my.setStorage` là api để lưu trữ dữ liệu theo key, dữ liệu mới sẽ ghi đè dữ liệu cũ nếu cùng key.

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

| Thuộc tính | Kiểu dữ liệu  | Bắt buộc | Mô tả                                                                      |
| ---------- | ------------- | :------: | -------------------------------------------------------------------------- |
| key        | string        |    ✓     | Key của dữ liệu                                                            |
| data       | Object/string |    ✓     | Giá trị của dữ liệu                                                        |
| success    | Function      |          | Callback khi dữ liệu được lưu thành công                                   |
| fail       | Function      |          | Callback khi dữ liệu được lưu thất bại                                     |
| complete   | Function      |          | Callback sau khi thực hiện việc lưu dữ liệu bất kể thành công hay thất bại |

## Sample Code

```js title=index.js
Page({
  onSaveData() {
    my.setStorage({
      key: 'test',
      data: {
        title: 'Run',
        description: 'Run 5km daily'
      },
      success: function () {
        my.alert({ content: 'Saved successfully' });
      }
    });
  }
});
```
