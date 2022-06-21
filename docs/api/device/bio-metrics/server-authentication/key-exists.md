---
title: my.bioMetrics.keyExists
sidebar_custom_props:
  description: Kiểm tra thiết bị đã có lưu sẵn cặp key đề cập ở JSAPI my.bioMetrics.createKey
---

`my.bioMetrics.keyExists` là API để kiểm tra thiết bị đã có lưu sẵn cặp key đề cập ở JSAPI [my.bioMetrics.createKey](./create-key). Nếu thiết bị đã có sẵn cặp key này, chúng ta ko cần phải tạo thêm.

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
| success    | Function     | Callback function khi việc kiểm tra thành công   |
| fail       | Function     | Callback function khi việc kiểm tra thất bại     |
| complete   | Function     | Callback function bất kể thành công hay thất bại |

## Giá trị trong success callback

Khi việc gọi API thành công, framework sẽ trả về payload là 1 biến boolean để biết cặp key đã tồn tại hay không.

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
  keyExists() {
    my.bioMetrics.keyExists({
      success: (isExist) => {
        my.alert({
          title: 'Success',
          content: keyExists ? 'Key is exist' : 'No key found'
        });
      },
      fail: (res) => {
        my.alert({ title: 'Fail', content: JSON.stringify(res) });
      }
    });
  }
});
```
