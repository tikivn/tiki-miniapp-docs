---
title: my.stopCompass
sidebar_custom_props:
  description: Dừng theo dõi dữ liệu compass
---

`my.stopCompass` là API dùng để dừng theo dõi dữ liệu compass.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/compass/index" />

<!-- ## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/api/compass/index" /> -->

## API Params

| Thuộc tính | Kiểu dữ liệu | Mô tả                                       |
| ---------- | ------------ | ------------------------------------------- |
| success    | Function     | Callback function khi thực hiện thành công. |
| fail       | Function     | Callback function khi thực hiện thất bại.   |
| complete   | Function     | Callback function khi thực hiện hoàn tất.   |

## Sample Code

```js
Page({
  onReady() {
    this.compassChangeCallback = (res) => {
      console.log(res);
    };
    my.startCompass({
      interval: 'ui',
      success: () => {
        my.onCompassChange(this.compassChangeCallback);
      },
      fail: (res) => {
        my.alert({ title: 'Fail', content: res.errorMessage });
      }
    });
  },
  onUnload() {
    my.stopCompass({
      success: () => {
        my.offCompassChange(this.compassChangeCallback);
      }
    });
  }
});
```
