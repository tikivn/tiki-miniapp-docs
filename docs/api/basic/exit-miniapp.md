---
title: my.exitMiniApp
sidebar_custom_props:
  description: Đóng miniapp hiện tại
---

`my.exitMiniApp` là API dùng để đóng miniapp hiện tại.

**_Khả dụng_**: Hỗ trợ từ version 1.84.13 trở lên.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/navigator/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/api/navigator/index" />

## Sample code

```js
my.exitMiniApp({
  success() {
    my.alert({
      content: 'App closed'
    });
  }
});
```

## Return value

| Thuộc tính | Kiểu dữ liệu | Mô tả                                                                 |
| ---------- | ------------ | --------------------------------------------------------------------- |
| success    | Function     | Callback function khi thành công.                                     |
| fail       | Function     | Callback function khi thất bại.                                       |
| complete   | Function     | Callback function khi hoàn tất tác vụ cho dù thành công hay thất bại. |
