---
title: my.stopAccelerometer
---

`my.stopAccelerometer` là một API dùng để stop lắng nghe các sự kiện thay đổi dữ liệu cảm biến gia tốc.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/acceleronmeter/index" />

## API Params

| Thuộc tính | Kiểu dữ liệu | Mô tả                                       |
| ---------- | ------------ | ------------------------------------------- |
| success    | Function     | Callback function khi thực hiện thành công. |
| fail       | Function     | Callback function khi thực hiện thất bại.   |
| complete   | Function     | Callback function khi thực hiện hoàn tất.   |

### Sample Code

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
  onUnload() {
    my.stopAcceleronmeter({
      success: () => {
        my.offAcceleronmeterChange(this.acceleronmeterChangeCallback);
      },
    });
  },
});
```


