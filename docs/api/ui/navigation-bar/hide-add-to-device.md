---
title: my.hideAddToDevice
sidebar_custom_props:
  description: Ẩn đi nút lưu tiện ích xuống thiết bị trên Title Bar
---

`my.hideAddToDevice` là API để ẩn đi nút lưu tiện ích xuống thiết bị Title Bar.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/navigation-bar/hide-add-to-device/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/api/navigation-bar/hide-add-to-device/index" />

## API Params

| Thuộc tính | Type    | Bắt buộc | Mô tả                                                                                               |
| ---------- | ------- | :------: | --------------------------------------------------------------------------------------------------- |
| hide       | boolean |    ✓     | set = true nếu muốn hide save to device button, set = false nếu muốn show lại save to device button |

## Sample Code

```js
Page({
  onReady() {
    my.hideAddToDevice({ hide: true });
  }
});
```
