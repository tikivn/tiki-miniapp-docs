---
title: my.getTitleColor
sidebar_custom_props:
  description: Lấy background color của Navigation Bar
---

`my.getTitleColor` là API để lấy background color của Navigation Bar.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/navigation-bar/get-title-color/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/api/navigation-bar/get-title-color/index" />

## API Params

| Thuộc tính | Kiểu dữ liệu | Mô tả                                                                 |
| ---------- | ------------ | --------------------------------------------------------------------- |
| success    | Function     | Callback function khi thành công.                                     |
| fail       | Function     | Callback function khi thất bại.                                       |
| complete   | Function     | Callback function khi hoàn tất tác vụ cho dù thành công hay thất bại. |

### Giá trị trong success callback

| Thuộc tính | Kiểu dữ liệu | Mô tả                               |
| ---------- | ------------ | ----------------------------------- |
| color      | HexColor     | Background color của Navigation Bar |

### Sample Code

```xml
<view>
  <view class="page-section-demo">
    <text>Title Color</text>
    <input type="text" disabled="{{true}}" value="{{titleColor.color}}"></input>
  </view>
  <view class="page-section-btns">
    <view onTap="getTitleColor">Get Color</view>
  </view>
</view>
```

```js
Page({
  data: {
    titleColor: {}
  },
  getTitleColor() {
    my.getTitleColor({
      success: (res) => {
        this.setData({
          titleColor: res
        });
      }
    });
  }
});
```
