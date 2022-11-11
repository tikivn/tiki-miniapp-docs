---
title: my.showAddToDevice
sidebar_custom_props:
  description: Hiển thị nút lưu tiện ích xuống thiết bị trên Title Bar
---

`my.showAddToDevice` là API để hiển thị nút lưu tiện ích xuống thiết bị trên Title Bar.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/navigation-bar/show-add-to-device/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/api/navigation-bar/show-add-to-device/index" />

## API Params

| Thuộc tính | Type    | Bắt buộc | Mô tả                                                                                               |
| ---------- | ------- | :------: | --------------------------------------------------------------------------------------------------- |
| show       | boolean |    ✓     | set = true nếu muốn hiển thị button lưu tiện ích xuống thiết bị, set = false nếu muốn ẩn button lưu tiện ích xuống thiết bị |

## Sample Code

```js
Page({
  onReady() {
    my.showAddToDevice({ show: true });
  }
});
```
