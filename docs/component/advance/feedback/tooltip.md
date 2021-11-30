---
title: Tooltip
---

## Giới thiệu

- `tooltip` là component trong [tini-ui](https://www.npmjs.com/package/@tiki.vn/tini-ui) là thành phẩn nhỏ gọn hiển thị nội dung dưới dạng như mẹo, gợi ý hoặc thủ thuật.
- Để sử dụng `tooltip`, bạn cần phải cài [tini-ui](https://www.npmjs.com/package/@tiki.vn/tini-ui) từ version `0.2.1` trở lên.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/component/advance/form/tooltip/index" />

## Sử dụng

### Cài đặt `tini-ui`:

```bash
$> yarn add @tiki.vn/tini-ui
```

### Sample Code

**index.json**

```json
{
  "defaultTitle": "Tooltip",
  "usingComponents": {
    "tooltip": "@tiki.vn/tini-ui/es/tooltip/index",
    "block-header": "components/block-header/index",
    "block-variant": "components/block-variant/index"
  }
}
```

**index.txml**

```xml
<template name="variant-format">
  <block-variant header="Variant" title="1. Format" description="Position & Theme">
    <view class="mt-48 bg-white" style="height: 55vh">
      <tooltip class="mt-48" show theme="light" content="Text Light">
        <view slot="operation"></view>
      </tooltip>

      <tooltip class="mt-48" show theme="light" onClose="onClose" showCloseIcon>
        <view slot="content">
          Text Light With Close
        </view>
        <view slot="operation"></view>
      </tooltip>

      <tooltip class="mt-48" show theme="light">
        <view slot="content">
          Top Light
        </view>
        <view slot="operation"></view>
      </tooltip>

      <tooltip position="bottom" show theme="light">
        <view slot="content">
          Bottom Light
        </view>
        <view slot="operation"></view>
      </tooltip>

      <tooltip class="mt-48" show position="bottom" theme="dark">
        <view slot="content">
          Text Dark
        </view>
        <view slot="operation"></view>
      </tooltip>

      <tooltip class="mt-48" show position="bottom" theme="dark" onClose="onClose" showCloseIcon>
        <view slot="content">
          Text Dark With Close
        </view>
        <view slot="operation"></view>
      </tooltip>

      <tooltip class="mt-48" show position="bottom" position="bottom" theme="dark">
        <view slot="content">
          Bottom Dark
        </view>
        <view slot="operation"></view>
      </tooltip>
    </view>
  </block-variant>
</template>

<view class="page">
  <block-header title="Usage" description="Tooltips are elements that display informative text as tips or tricks" />
  <template is="variant-format" />
</view>
```

**index.js**

```js
Page({
  onClose(event) {
    console.log('onClose tip', event);
  }
});
```

### Chi tiết

| Property      | Type                  | Default Value | Description                                    |
| ------------- | --------------------- | ------------- | ---------------------------------------------- |
| className     | string                | ''            | Custom class cho tooltip                       |
| style         | string                | ''            | Style cho tooltip                              |
| content       | string                | ''            | Text content của tooltip                       |
| show          | boolean               | false         | Nếu set `true` tooltip sẽ được show            |
| theme         | `'light'` \| `'dark'` | 'light'       | Theme của tooltip                              |
| position      | `'top'` \| `'bottom'` | 'top'         | Vị trí hiển thị của tooltip                    |
| showCloseIcon | boolean               | false         | Nếu set `true` icon-close tooltip sẽ được show |
| iconSizeClose | number                | 16            | size của icon-close tooltip                    |

### slots

| Property  | Type    | Default Value | Description                             |
| --------- | ------- | ------------- | --------------------------------------- |
| content   | boolean | props.content | Render component ở nội dung content tip |
| operation | boolean | ''            | Render component ở phần hiển thị tip    |
