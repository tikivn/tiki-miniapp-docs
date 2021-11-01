---
title: Chip
---

## Giới thiệu

- `chip` là component trong [tini-ui](https://www.npmjs.com/package/@tiki.vn/tini-ui) là thành phẩn nhỏ gọn diễn tả cho input, attribute, hoặc action.
- Để sử dụng `chip`, bạn cần phải cài [tini-ui](https://www.npmjs.com/package/@tiki.vn/tini-ui) từ version `0.2.1` trở lên.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/component/advance/form/chip/index" />

## Sử dụng

### Cài đặt `tini-ui`:

```bash
$> yarn add @tiki.vn/tini-ui
```

### Sample Code

**index.json**

```json
{
  "defaultTitle": "Chip",
  "usingComponents": {
    "list-item": "@tiki.vn/tini-ui/es/list/list-item/index",
    "chip": "@tiki.vn/tini-ui/es/chip/index",
    "block-header": "components/block-header/index",
    "block-variant": "components/block-variant/index"
  }
}
```

**index.txml**

```xml
<template name="variant-format">
  <block-variant header="Variant" title="1. Format"
    description="Content only, Delete action, Custom icon, Icon & Image">
    <view class="mt-medium">
      <chip class="mt-medium" content="Content only" />
      <chip class="mt-medium" content="With suffix/delete action" suffixIcon="close_glyph" />
      <chip class="mt-medium" content="With suffix/custom icon" suffixIcon="close" iconRightColor="#808089" />
      <chip class="mt-medium" content="With prefix/icon" prefixIcon="placeholder" iconLeftColor="#808089" />
      <chip class="mt-medium" content="With prefix/image"
        prefixImage="https://salt.tikicdn.com/ts/miniapp/0f/7f/84/5af725e8a6a55815a24e8e6935ef99e3.png"
        iconLeftColor="#808089" />
    </view>
  </block-variant>
</template>

<template name="variant-state">
  <block-variant title="2. State" description="Default, Hover, Disabled, Active, Active hover & Active disabled.">
    <chip class="mt-medium" content="Default" suffixIcon="close_glyph" />
    <chip class="mt-medium" content="Hover" suffixIcon="close_glyph" />
    <chip class="mt-medium" content="Disabled" suffixIcon="close_glyph" iconRightColor="#A6A6B0" disabled="{{true}}" />
    <chip class="mt-medium" content="Active" suffixIcon="close_glyph" active="{{true}}" />
    <chip class="mt-medium" content="Active hover" suffixIcon="close_glyph" active="{{true}}" />
    <chip class="mt-medium" content="Active disabled" suffixIcon="close_glyph" active="{{true}}" disabled="{{true}}"
      iconRightColor="#A6A6B0" />
  </block-variant>
</template>

<view class="page">
  <block-header title="Usage" description="Chips are elements that represent an input, attribute, or action." />
  <template is="variant-format" />
  <template is="variant-state" />
</view>
```

**index.js**

```js
Page({
  onClick(event) {
    console.log('onClick Chip', event);
  },
  onRightClick(event) {
    console.log('onRightClick Image/Icon', event);
  },
  onLeftClick(event) {
    console.log('onLeftClick Image/Icon', event);
  }
});
```

### Chi tiết

| Property       | Type    | Default Value | Description                                                 |
| -------------- | ------- | ------------- | ----------------------------------------------------------- |
| className      | string  | ''            | Custom class cho chip                                       |
| style          | string  | ''            | Style cho chip                                              |
| content        | string  | ''            | Text content của chip                                       |
| active         | boolean | false         | Nếu set `true` chip sẽ được active                          |
| suffixIcon     | string  | ''            | suffixIcon của chip                                         |
| suffixImage    | string  | ''            | suffixImage của chip                                        |
| prefixIcon     | string  | ''            | prefixIcon của chip                                         |
| prefixIcon     | string  | ''            | suffixIcon của chip                                         |
| iconLeftColor  | string  | '#1A94FF'     | suffixIcon của chip                                         |
| iconRightColor | string  | '#1A94FF'     | suffixIcon của chip                                         |
| disabled       | boolean | false         | Nếu set `true` chip sẽ bị disabled                          |
| onClick        | event   | () => void    | Trigger function này khi click vào chip                     |
| onLeftClick    | event   | () => void    | Trigger function này khi click image/icon bên trái của chip |
| onRightClick   | event   | () => void    | Trigger function này khi click image/icon bên phải của chip |
