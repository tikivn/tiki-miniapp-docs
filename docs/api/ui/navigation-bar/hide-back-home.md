---
title: my.hideBackHome
---

`my.hideBackHome` là API để ẩn đi nút back trên tile Bar.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/navigation-bar/hide-back-home/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/api/navigation-bar/hide-back-home/index" />

## API Params

| Thuộc tính | Type    | Bắt buộc | Mô tả                                                                           |
| ---------- | ------- | :------: | ------------------------------------------------------------------------------- |
| hide       | boolean |    ✓     | set = true nếu muốn hide back button, set = false nếu muốn show lại back button |

## Sample Code

```js
Page({
  onReady() {
    my.hideBackHome({ hide: true });
  }
});
```
