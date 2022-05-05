---
title: my.hideBackHome
---

`my.hideBackHome` là API để ẩn đi nút back trên tile Bar.

## API Params

| Thuộc tính  | Type    | Bắt buộc | Mô tả                                                                     |
| -------- | ------- | :------: | ------------------------------------------------------------------------------- |
| hide     | boolean | ✓      | set = true nếu muốn hide back button, set = false nếu muốn show lại back button |

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/navigation-bar/hide-back-home/index" />

## Sample Code

```js
Page({
  onReady() {
    my.hideBackHome({ hide: true });
  }
});
```


