---
title: my.startAccelerometer
sidebar_custom_props:
  description: Lắng nghe các sự kiện thay đổi dữ liệu cảm biến gia tốc
---

`my.startAccelerometer` là một API dùng để start lắng nghe các sự kiện thay đổi dữ liệu cảm biến gia tốc.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/acceleronmeter/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/api/acceleronmeter/index" />

## API Params

| Thuộc tính | Kiểu dữ liệu | Bắt buộc | Mô tả                                                                            |
| ---------- | ------------ | :------: | -------------------------------------------------------------------------------- |
| interval   | string       |    ✓     | Tham số dùng để giám sát tần suất gọi lại dữ liệu. Giá trị mặc định là 'normal'. |
| success    | Function     |          | Callback function khi thực hiện thành công.                                      |
| fail       | Function     |          | Callback function khi thực hiện thất bại.                                        |
| complete   | Function     |          | Callback function khi thực hiện hoàn tất.                                        |

### Interval Params

| Giá trị | Mô tả                                                     |
| ------- | --------------------------------------------------------- |
| game    | Tần suất gọi lại để cập nhật dữ liệu là khoảng 20ms/lần.  |
| ui      | Tần suất gọi lại để cập nhật dữ liệu là khoảng 60ms/lần.  |
| normal  | Tần suất gọi lại để cập nhật dữ liệu là khoảng 200ms/lần. |

## Sample Code

```js
Page({
  onReady() {
    this.acceleronmeterChangeCallback = (res) => {
      console.log(res);
    };
    my.startAcceleronmeter({
      interval: 'ui',
      success: () => {
        my.onAcceleronmeterChange(
          this.acceleronmeterChangeCallback
        );
      },
      fail: (res) => {
        my.alert({ title: 'Fail', content: res.errorMessage });
      }
    });
  }
});
```
