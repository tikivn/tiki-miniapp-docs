---
title: my.navigateBack
---

`my.navigateTo` là API dùng để đóng màn hình hiện tại và trở lại màn hình trước đó.

## API Params

| Thuộc tính | Kiểu dữ liệu | Mô tả                                                                                                                                                      |
| ---------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| delta      | Number       | Số lượng giữa page hiện tại với page muốn quay lại. Ví dụ bạn muốn bỏ qua page trước đó và quay lại page trước đó nữa thì `delta = 2`. Mặc định delta = 1. |

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/navigator/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/api/navigator/index" />

## Sample Code

```xml
<view class="page">
  <view class="page__section">
    <view class="button">
      <button onTap="navigateTo">Navigate To</button>
    </view>
    <view class="button">
      <button onTap="navigateBack">Navigate Back</button>
    </view>
    <view class="button">
      <button onTap="switchTab">Switch Tab</button>
    </view>
    <view class="button">
      <button onTap="reLaunch">reLaunch</button>
    </view>
  </view>
</view>
```

```js
Page({
  navigateBack() {
    my.navigateBack();
  }
});
```
