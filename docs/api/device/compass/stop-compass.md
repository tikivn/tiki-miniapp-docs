---
title: my.stopCompass
---

`my.stopCompass` là API dùng để stop theo dõi dữ liệu compass.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/compass/index" />

### Sample Code

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

## API Params

| Thuộc tính | Kiểu dữ liệu | Mô tả                                       |
| ---------- | ------------ | ------------------------------------------- |
| success    | Function     | Callback function khi thực hiện thành công. |
| fail       | Function     | Callback function khi thực hiện thất bại.   |
| complete   | Function     | Callback function khi thực hiện hoàn tất.   |
