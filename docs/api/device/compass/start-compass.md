---
title: my.startCompass
---

`my.startCompass` là API dùng để start theo dõi dữ liệu compass.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/compass/index" />

<!-- ## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/api/compass/index" /> -->

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
  }
});
```

## API Params

| Thuộc tính | Kiểu dữ liệu | Bắt buộc | Mô tả                                                                            |
| ---------- | ------------ | -------- | -------------------------------------------------------------------------------- |
| interval   | string       | ✓        | Tham số dùng để giám sát tần suất gọi lại dữ liệu. Giá trị mặc định là 'normal'. |
| success    | Function     |          | Callback function khi thực hiện thành công.                                      |
| fail       | Function     |          | Callback function khi thực hiện thất bại.                                        |
| complete   | Function     |          | Callback function khi thực hiện hoàn tất.                                        |

### Interval Param

| Giá trị | Mô tả                                                     |
| ------- | --------------------------------------------------------- |
| game    | Tần suất gọi lại để cập nhật dữ liệu là khoảng 20ms/lần.  |
| ui      | Tần suất gọi lại để cập nhật dữ liệu là khoảng 60ms/lần.  |
| normal  | Tần suất gọi lại để cập nhật dữ liệu là khoảng 200ms/lần. |
