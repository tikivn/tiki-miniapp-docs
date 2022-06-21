---
title: my.offNetworkStatusChange
sidebar_custom_props:
  description: Huỷ nhận sự kiện thay đổi trạng thái mạng của thiết bị
---

`my.offNetworkStatusChange` là API dùng để huỷ nhận sự kiện thay đổi trạng thái mạng của thiết bị.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/network-type/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/api/network-type/index" />

**_Khả dụng_**: Hỗ trợ từ version 1.86.2 trở lên.

## API Params

| Thuộc tính | Kiểu dữ liệu | Mô tả                                                                      |
| ---------- | ------------ | -------------------------------------------------------------------------- |
| callback   | Function     | Callback function đã dùng để đăng kí nhận sự kiện thay đổi trạng thái mạng |

### Sample Code

```xml
<view>
  <view class="block-content">
    <text class="title text-full">my.offNetworkStatusChange</text>
    <text class="description text-full">Stop observing device network status</text>
    <button class="button-full" onTap="stopObservingNetworkStatusChange">
      stop observing network status
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
  stopObservingNetworkStatus() {
    my.offNetworkStatusChange(callback);
    this.setData({ liveNetworkType: null });
  }
});
```
