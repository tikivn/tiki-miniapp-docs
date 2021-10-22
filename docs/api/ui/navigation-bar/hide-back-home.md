---
title: my.hideBackHome
---

## Giới thiệu

**my.hideBackHome** là API để ẩn đi nút back trên tile Bar.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/navigation-bar/hide-back-home/index" />

## Sử dụng

### Sample Code

```js
Page({
  onReady() {
    my.hideBackHome({ hide: true });
  }
});
```

### API Params

| Property | Type    | Required | Description                                                                     |
| -------- | ------- | -------- | ------------------------------------------------------------------------------- |
| hide     | Boolean | Yes      | set = true nếu muốn hide back button, set = false nếu muốn show lại back button |
