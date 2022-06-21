---
title: my.hideNavigationBarLoading
sidebar_custom_props:
  description: Ẩn đi loading animation trên thanh Navigation Bar của page hiện tại
---

`my.hideNavigationBarLoading` là API để ẩn đi loading animation trên thanh Navigation Bar của page hiện tại

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/navigation-bar/loading/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/api/navigation-bar/loading/index" />

## Sample Code

```xml title=index.txml
<view>
  <view class="block-content">
    <button class="button-full" onTap="showLoading">Show navigation bar loading</button>
    <button class="button-full" onTap="hideLoading">Hide navigation bar loading</button>
  </view>
</view>
```

```js title=index.js
Page({
  showLoading() {
    my.showNavigationBarLoading();
  },
  hideLoading() {
    my.hideNavigationBarLoading();
  }
});
```
