---
title: my.exitMiniApp
---

`my.exitMiniApp` là API dùng để đóng miniapp hiện tại.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/navigator/index" />

**_Khả dụng_**: Hỗ trợ từ version 1.84.13 trở lên.

## Sample code

```js
my.exitMiniApp({
  success() {
    my.alert({
      content: "App closed"
    });
  }
});
```

## Return value

| Thuộc tính | Kiểu dữ liệu     |  Mô tả                                                         |
| ---------- | -------- | --------------------------------------------------------------------- |
| success    | Function | Callback function khi thành công.                                     |
| fail       | Function | Callback function khi thất bại.                                       |
| complete   | Function | Callback function khi hoàn tất tác vụ cho dù thành công hay thất bại. |

