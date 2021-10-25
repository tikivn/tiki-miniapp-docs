---
title: my.removeStorage
---

## Giới thiệu

`my.removeStorage` là api để delete dữ liệu đã được lưu theo key

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/storage/index" />

## Lưu ý:

- Mỗi app chỉ được lưu trữ không quá 6MB.
- Dữ liệu của mỗi app đã được tách biệt, ứng dụng này không thể đọc được thông tin của ứng dụng khác.
- Dữ liệu chỉ bị mất khi ứng dụng bị xoá hoặc reset devices. Việc cài đè ứng dụng ko làm mất dữ liệu được lưu trữ.
- Trên ios, storage có hỗ trợ Itunes backup.

## Sử dụng

### Sample Code

**index.js**

```js
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

### Chi tiết

| Thuộc tính | Kiểu dữ liệu | Required | Mô tả                                       |
| ---------- | ------------ | -------- | ------------------------------------------- |
| key        | String       | Yes      | Key của dữ liệu                             |
| success    | Function     | No       | Callback khi dữ liệu được xoá thành công    |
| fail       | Function     | No       | Callback khi xoá dữ liệu thất bại           |
| complete   | Function     | No       | Callback sau khi thực hiện việc xoá dữ liệu |
