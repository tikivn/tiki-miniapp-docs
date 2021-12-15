---
title: my.getNetworkType
---

`my.getNetworkType` là API dùng để lấy thông tin kết nối mạng của thiết bị.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/network-type/index" />

**_Khả dụng_**: Hỗ trợ từ version 1.85.7 trở lên.

## API Params

| Thuộc tính | Kiểu dữ liệu | Mô tả                                                                                 |
| ---------- | ------------ | ------------------------------------------------------------------------------------- |
| success    | Function     | Callback function khi lấy thông tin thành công.                                       |
| fail       | Function     | Callback function khi lấy thông tin thất bại.                                         |
| complete   | Function     | Callback function khi lấy thông tin hoàn tất.                                         |

## Giá trị trong success callback

Khi việc gọi API thành công, framework sẽ trả về thông tin như sau:

| Thuộc tính            | Kiểu dữ liệu | Mô tả                                                                      |
| --------------------- | -------------| -------------------------------------------------------------------------- |
| networkAvailable      | boolean      | Thiết bị có kết nối mạng hay không                                      |
| networkType           | string       | Loại kết nối mạng, là một trong các giá trị UNKNOWN / NOTREACHABLE / WIFI / 3G / 2G / 4G / 5G.  |

### Sample Code

```xml
<view>
  <block-header title="Usage" description="Get device current network type" />
  <view class="block-content">
    <button class="button-full" onTap="onGetNetworkType">Get Network Type</button>
  </view>
</view>
```

```js
Page({
  data: {
    networkType: undefined,
  },
  onGetNetworkType() {
    my.getNetworkType({
      success: (res) => {
        this.setData({ networkType: res });
        my.alert({ title: 'Success', content: JSON.stringify(res) });
      },
      fail: (e) => {
        console.log(e);
        my.alert({ title: 'Fail', content: JSON.stringify(e) });
      },
    });
  },
});
```
