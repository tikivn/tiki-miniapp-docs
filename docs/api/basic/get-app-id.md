---
title: my.getAppIdSync
---

`my.getAppIdSync` là API dùng để lấy ID của Mini App hiện tại.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/get-app-id/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/api/get-app-id/index" />

## Sample code

```js
Page({
  onGetAppId() {
    const res = my.getAppIdSync();
    my.alert({ title: 'AppID', content: res });
  }
});
```

## Return value

| Thuộc tính | Kiểu dữ liệu | Mô tả                    |
| ---------- | ------------ | ------------------------ |
| appId      | string       | ID của Mini App hiện tại |
