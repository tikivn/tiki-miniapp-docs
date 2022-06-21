---
title: my.bioMetrics.isSupported
sidebar_custom_props:
  description: Kiểm tra thiết bị có sensor của bio metrics hay không và đã cài đặt sẵn 1 trong các loại xác thực face id, touch id hoặc móng mắt (tuỳ thuộc vào thiết bị)... hay chưa
---

`my.bioMetrics.isSupported` là API để kiểm tra thiết bị có sensor của bio metrics hay không và đã cài đặt sẵn 1 trong các loại xác thực face id, touch id hoặc móng mắt (tuỳ thuộc vào thiết bị)... hay chưa.

**_Khả dụng_**: Hỗ trợ từ version 1.96.7 trở lên.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/bio-metrics/server/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/api/bio-metrics/server/index" />

## API Params

| Thuộc tính | Kiểu dữ liệu | Mô tả                                            |
| ---------- | ------------ | ------------------------------------------------ |
| success    | Function     | Callback function khi việc kiểm tra thành công   |
| fail       | Function     | Callback function khi việc kiểm tra thất bại     |
| complete   | Function     | Callback function bất kể thành công hay thất bại |

## Giá trị trong success callback

Khi việc gọi API thành công, framework sẽ trả về payload chứa các thông tin sau

| Thuộc tính  | Kiểu dữ liệu | Mô tả                                                                                                                          |
| ----------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| isSupported | Boolean      | Device có support hay không                                                                                                    |
| mode        | String       | Trên ios sẽ trả về loại xác thực là `fingerprint` hay `facial`, còn trên android thì sẽ ko trả về                              |
| error       | String       | Dùng biến này để biết được vì sao thiết bị không support việc xác thực, ví dự như không có sensor hoặc chưa đăng ký vân tay... |

### Sample Code

```xml title=index.xml
<view>
  <block-header title="Usage" description="Use Biometrics to authenticate with server" />
  <view class="block-content">
    <view class="page-section-btns">
      <button type="primary" onTap="createKey">Create Key Pair</button>
      <button type="primary" onTap="keyExists">Check Key Exists</button>
      <button type="primary" onTap="deleteKey">Delete Key</button>
      <button type="primary" onTap="isSupported">Is Supported</button>
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
  isSupported() {
    my.bioMetrics.isSupported({
      success: ({ isSupported, mode, error }) => {
        my.alert({ title: 'Success', content: 'Device already setup biometrics authentication');
      },
      fail: (res) => {
        my.alert({ title: 'Fail', content: JSON.stringify(res) });
      },
    });
  },
});
```
