---
title: my.getStorageInfo
---

`my.getStorageInfo` là api để đọc ra thông tin storage của tiện ích như dung lượng sử dụng hiện tại, giới hạn, các keys đã được lưu.

:::note Lưu ý

- Mỗi tiện ích chỉ được lưu trữ không quá 6MB.
- Dữ liệu của mỗi tiện ích đã được tách biệt; tiện ích này không thể đọc được thông tin của tiện ích khác.
- Dữ liệu chỉ bị mất khi ứng dụng bị xoá hoặc thiết bị bị reset. Việc cài đè tiện ích không làm mất dữ liệu được lưu trữ.
- Trên iOS, storage hỗ trợ iTunes backup.

:::

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/storage/index" />

## Chi tiết

| Thuộc tính | Kiểu dữ liệu | Mô tả                                              |
| ---------- | ------------ | -------- | -------------------------------------------------- |
| success    | Function     |  Callback khi thông tin dữ liệu được đọc thành công |
| fail       | Function     |  Callback khi thông tin dữ liệu được đọc thất bại   |
| complete   | Function     | Callback sau khi thực hiện việc đọc dữ liệu bất kể thành công hay thất bại        |

### Success callback

| Thuộc tính  | Kiểu dữ liệu | Mô tả                                       |
| ----------- | ------------ | ------------------------------------------- |
| keys        | array of strings  | Chứa toàn bộ các keys đã được lưu |
| currentSize | number       | Dung lượng đã sử dụng, đơn vị là KB         |
| limitSize   | number       |  Dung lượng giới hạn, đơn vị là KB           |

## Sample Code

```js title=index.js
Page({
  onGetData() {
    my.getStorageInfo({
      success: function (res) {
        console.log(res.keys);
        console.log(res.currentSize);
        console.log(res.limitSize);
      }
    });
  }
});
```


