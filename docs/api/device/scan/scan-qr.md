---
title: my.scan
---

`my.scan` là API dùng để quét mã QR hoặc mã vạch (barcode)

**_Khả dụng:_** Chỉ hỗ trợ từ version 1.78.1 trở lên

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/scan-qr/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/api/scan-qr/index" />

## Sample Code

```js title=index.js
Page({
  onScan() {
    my.scan({
      success: (res) => {
        console.log(res);
        my.alert({ title: 'Found', content: res });
      },
      fail: (e) => {
        console.log(e);
      }
    });
  }
});
```

```xml title=index.txml
<view>
  <block-header title="Usage" description="Scan QR/Barcode" />
  <view class="block-content">
    <button class="button-full" onTap="onScan">Start Scan</button>
  </view>
</view>
```

## API Params

Các thuộc tính:

| Thuộc tính | Kiểu dữ liệu | Mô tả                                                                           |
| ---------- | ------------ | ------------------------------------------------------------------------------- |
| hideAlbum  | Function     | Tuỳ chọn, có ẩn nút chọn hình từ album. Chỉ cho phép scan hoàn toàn bằng camera |
| success    | Function     | Callback khi việc scan thành công                                               |
| fail       | Function     | Callback khi việc scan thất bại                                                 |
| complete   | Function     | Callback khi việc scan thành công hoặc thất bại                                 |

### Callback function payload

Response trong success callback là string của code scan được.
