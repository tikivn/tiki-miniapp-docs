---
title: my.offAcceleronmeterChange
sidebar_custom_props:
  description: Dừng việc theo dõi dữ liệu acceleronmeter
---

`my.offAcceleronmeterChange` là API giúp dừng việc theo dõi dữ liệu acceleronmeter.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/acceleronmeter/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/api/acceleronmeter/index" />

## API Params

- Khi gọi API kèm theo callback thì chỉ event callback đó được xoá:

```js
my.offAcceleronmeterChange(this.callback);
```

- Khi callback không được truyền vào, tất cả các event callback được xoá:

```js
my.offAcceleronmeterChange();
```

## Sample Code

```js
Page({
  onLoad() {
    this.callback = this.callback.bind(this);
    my.offAcceleronmeterChange(this.callback);
  },
  onUnload() {
    my.offAcceleronmeterChange(this.callback);
  },
  callback(res) {}
});
```
