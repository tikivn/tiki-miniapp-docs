---
title: my.exitMiniApp
---

## Giới thiệu

**my.exitMiniApp** là API dùng để đóng miniapp hiện tại.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/navigator/index" />

**_Khả dụng_**: Hỗ trợ từ version 1.84.13 trở lên.

## Sử dụng

### Sample code

```js
my.exitMiniApp({
  success() {
    my.alert({
      content: "App closed"
    });
  }
});
```

### Return value

| Attributes | Type     | Required | Description                                                           |
| ---------- | -------- | -------- | --------------------------------------------------------------------- |
| success    | Function | No       | Callback function khi thành công.                                     |
| fail       | Function | No       | Callback function khi thất bại.                                       |
| complete   | Function | No       | Callback function khi hoàn tất tác vụ cho dù thành công hay thất bại. |

