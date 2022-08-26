---
title: avatar
sidebar_custom_props:
  description: Component Tini UI - Hiển thị hình ảnh của user, tên, hoặc text giới thiệu
---

`avatar` là component dùng để hiển thị hình ảnh của user, tên, hoặc text giới thiệu.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/component/advance/navigation/avatar/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/component/advance/navigation/avatar/index" />


## Sample Code

```json title=index.json
{
  "defaultTitle": "Avatar",
  "usingComponents": {
    "avatar": "@tiki.vn/tini-ui/es/avatar/index",
    "block-header": "components/block-header/index",
    "block-variant": "components/block-variant/index"
  }
}
```

```xml title=index.txml
<view>
  <block-header
      title="Usage"
      description="Avatars represent the user behind them."
    />

  <block-variant header="Variant" title="1. Shape" description="Circle, Rounded.">
    <view class="block-variant-content-line">
      <view class="w-full flex">
        <avatar shape="square" size="72" class="mr-small"/>
        <avatar shape="circle" size="72"/>
      </view>
    </view>
  </block-variant>

  <block-variant title="2. Content" description="Image, Initials">
    <view class="block-variant-content-line">
      <view class="w-full flex">
        <avatar shape="circle" size="72" class="mr-small"/>
        <avatar shape="circle" size="72" name="W W"/>
      </view>
    </view>
  </block-variant>

  <block-variant title="3. Size" description="24, 40, 56, 72px">
    <view class="block-variant-content-line">
      <view class="w-full flex">
        <avatar shape="circle" size="24" class="mr-small"/>
        <avatar shape="circle" size="40" class="mr-small"/>
        <avatar shape="circle" size="56" class="mr-small"/>
        <avatar shape="circle" size="72" class="mr-small"/>
      </view>
    </view>
  </block-variant>

  <block-variant title="4. Border" description="With white border, without white border">
    <view class="block-variant-content-line mt-small p-small bg-black">
      <view class="w-full flex">
        <avatar shape="circle" size="24" class="mr-small"/>
        <avatar shape="circle" size="40" class="mr-small"/>
        <avatar shape="circle" size="56" class="mr-small"/>
        <avatar shape="circle" size="72" class="mr-small"/>
      </view>
    </view><view class="p-small bg-black">
      <view class="w-full flex">
        <avatar shape="circle" size="24" name="W W" showBorder={{false}} class="mr-small"/>
        <avatar shape="circle" size="40" name="W W" showBorder={{false}} class="mr-small"/>
        <avatar shape="circle" size="56" name="W W" showBorder={{false}} class="mr-small"/>
        <avatar shape="circle" size="72" name="W W" showBorder={{false}} class="mr-small"/>
      </view>
    </view>
  </block-variant>

</view>
```
## Thuộc tính

| Thuộc tính | Kiểu dữ liệu | Giá trị mặc định | Mô tả                            |
| ---------- | ------------ | ---------------- | -------------------------------- |
| size       | number       | 40               | Kích thước avatar (width x height) px|
| shape      | string       | circle           | Các giá trị: "circle", "square" |
| src        | string       | ""               | Source hình ảnh                  |
| name       | string       | ""               | Hiển thị shortname nếu không có source hình ảnh|
| lazyLoad   | boolean      | false            | Thuộc tính lazyLoad của avatar   |
| showBorder | boolean      | true             | Hiển thị border của avatar       |
| className  | string       | ""               | className của avatar             |
| style      | string       | ""               | Disabled button                  |


