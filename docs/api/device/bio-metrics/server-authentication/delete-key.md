---
title: my.bioMetrics.deleteKey
sidebar_custom_props:
  description: Xoá cặp key đề cập ở my.bioMetrics.createKey
---

`my.bioMetrics.deleteKey` là API để xoá cặp key đề cập ở JSAPI [my.bioMetrics.createKey](./create-key) nếu có.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/bio-metrics/server/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/api/bio-metrics/server/index" />

**_Khả dụng_**: Hỗ trợ từ version 1.96.7 trở lên.

## API Params

| Thuộc tính | Kiểu dữ liệu | Mô tả                                            |
| ---------- | ------------ | ------------------------------------------------ |
| success    | Function     | Callback function khi việc xoá key thành công    |
| fail       | Function     | Callback function khi việc xoá key thất bại      |
| complete   | Function     | Callback function bất kể thành công hay thất bại |

## Giá trị trong success callback

Khi việc gọi API thành công, framework sẽ trả về payload là 1 biến boolean và luôn luôn là true

### Sample Code

```xml title=index.xml
<view>
  <block-header title="Usage" description="Use Biometrics to authenticate with server" />
  <view class="block-content">
    <view class="page-section-btns">
      <button type="primary" onTap="createKey">Create Key Pair</button>
      <button type="primary" onTap="keyExists">Check Key Exists</button>
      <button type="primary" onTap="deleteKey">Delete Key</button>
    </view>
  </view>
  <view class="block-content">
    <view class="page-section-btns">
      <button type="primary" onTap="createSignature">Generate Signature</button>
    </view>
  </view>
</view>
```

```js title=index.js
Page({
  deleteKey() {
    my.bioMetrics.deleteKey({
      success: () => {
        my.alert({ title: 'Success', content: `Key is deleted` });
      },
      fail: (res) => {
        my.alert({ title: 'Fail', content: JSON.stringify(res) });
      }
    });
  }
});
```
