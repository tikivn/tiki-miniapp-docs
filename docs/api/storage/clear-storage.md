---
title: my.clearStorage
---

## Giới thiệu

`my.clearStorage` là api để xoá toàn bộ dữ liệu của app.

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

### Chi tiết

| Thuộc tính | Kiểu dữ liệu | Required | Mô tả                                       |
| ---------- | ------------ | -------- | ------------------------------------------- |
| success    | Function     | No       | Callback khi dữ liệu được xoá thành công    |
| fail       | Function     | No       | Callback khi xoá dữ liệu thất bại           |
| complete   | Function     | No       | Callback sau khi thực hiện việc xoá dữ liệu |
