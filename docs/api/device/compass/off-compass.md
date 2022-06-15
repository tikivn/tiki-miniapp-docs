---
title: my.offCompassChange
---

`my.offCompassChange` là API giúp dừng việc theo dõi dữ liệu compass.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/compass/index" />

<!-- ## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/api/compass/index" /> -->

## API Params

- Khi gọi API kèm theo callback thì chỉ event callback đó được xoá:

```js
my.offCompassChange(this.callback);
```

- Khi callback không được truyền vào, tất cả các event callback được xoá:

```js
my.offCompassChange();
```

## Sample Code

```js
Page({
  onLoad() {
    this.callback = this.callback.bind(this);
    my.offCompassChange(this.callback);
  },
  onUnload() {
    my.offCompassChange(this.callback);
  },
  callback(res) {}
});
```
