---
title: my.SDKVersion
---

`my.SDKVersion` là API dùng để lấy version hiện tại của SDK.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/sdk-version/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/api/sdk-version/index" />

## Sample code

```xml
<view>
  <text>{{SDKVersion}}</text>
</view>
```

```js
Page({
  data: {
    SDKVersion: ''
  },
  onLoad() {
    this.setData({ SDKVersion: my.SDKVersion });
  }
});
```

## Return value

API sẽ trả về version hiện tại của SDK kiểu chuỗi.
