---
title: my.onNetworkStatusChange
sidebar_custom_props:
  description: Nhận sự kiện thay đổi trạng thái mạng của thiết bị
---

`my.onNetworkStatusChange` là API dùng để nhận sự kiện thay đổi trạng thái mạng của thiết bị.

**_Khả dụng_**: Hỗ trợ từ version 1.86.2 trở lên.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/network-type/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/api/network-type/index" />

## Giá trị trong callback

| Thuộc tính       | Kiểu dữ liệu | Mô tả                                                                                          |
| ---------------- | ------------ | ---------------------------------------------------------------------------------------------- | --- |
| networkAvailable | boolean      | Thiết bị có kết nối mạng hay không                                                             |
| networkType      | string       | Loại kết nối mạng, là một trong các giá trị UNKNOWN / NOTREACHABLE / WIFI / 3G / 2G / 4G / 5G. |     |

### Sample Code

```xml
<view>
  <view class="block-content">
    <text class="title text-full">my.onNetworkStatusChange</text>
    <text class="description text-full">Start observing device network status</text>
    <button class="button-full" onTap="startObservingNetworkStatusChange">
      Observe network status
    </button>
    <text class="title text-full">Live network status</text>
    <text class="description text-full">{{liveNetworkType}}</text>
  </view>
</view>
```

```js
Page({
  data: {
    liveNetworkType: null
  },
  startObservingNetworkStatus() {
    my.onNetworkStatusChange((networkType) => {
      this.setData({
        liveNetworkType: JSON.stringify(networkType)
      });
    });
  }
});
```
