---
title: movable-area
sidebar_custom_props:
  description: Component quy định phạm di chuyển của các movable-view nằm trong nó
---

`movable-area` là thành phần quy định phạm di chuyển của các [movable-view](movable-view) nằm trong nó.

<!-- ## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/component/basic/movable-area/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/component/basic/movable-area/index" /> -->

## Thuộc tính

| Thuộc tính | Kiểu dữ liệu | Giá trị mặc định | Mô tả                                                                                                                        |
| ---------- | ------------ | ---------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| scale-area | boolean      | false            | Khi các movable-view cho phép scaling. Bạn có thể dùng thuộc tính này để tắt việc scaling của tất cả component ở trong area. |

## Sample Code

```xml title=index.txml
<view>
  <block-header title="Usage" description="A movable view container. It can be dragged to move on a page. " />
  <view class="block-content">
    <view onTap="onTap">movable-view is smaller than movable-area</view>
    <movable-area>
      <movable-view direction="all">text</movable-view>
    </movable-area>
  </view>

  <view class="block-content">
    <text>movable-view is larger than movable-area</text>
    <movable-area>
      <movable-view class="max" direction="all">text</movable-view>
    </movable-area>
  </view>

  <view class="block-content">
    <text>movable-view can move horizontally</text>
    <movable-area>
      <movable-view direction="horizontal">text</movable-view>
    </movable-area>
  </view>

  <view class="block-content">
    <text>movable-view can move vertically</text>
    <movable-area>
      <movable-view direction="vertical">text</movable-view>
    </movable-area>
  </view>

  <view class="block-content">
    <text>movable-view can move after the view container is out of the movable area</text>
    <movable-area>
      <movable-view direction="all" out-of-bounds>text</movable-view>
    </movable-area>
  </view>

  <view class="block-content">
    <text>movable-view has inertia</text>
    <movable-area>
      <movable-view direction="all" inertia>text</movable-view>
    </movable-area>
  </view>

  <view class="block-content">
    <text>two-finger scaling</text>
    <movable-area scale-area>
      <movable-view direction="all" scale scale-min="0.5" scale-max="4">text</movable-view>
    </movable-area>
  </view>
</view>
```
