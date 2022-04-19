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
    "tooltip": "@tiki.vn/tini-ui/es/tooltip/index"
  }
}
```

**index.txml**

```xml
<view class="wrapper">
   <tooltip class="mt-48" position="top" show theme="reverse">
    <view slot="content">
        Top
    </view>
    <view slot="operation">Text</view>
  </tooltip>

  <tooltip class="mt-48" position="top-left" show theme="reverse">
    <view slot="content">
        Top Left
    </view>
    <view slot="operation">Text</view>
  </tooltip>

  <tooltip class="mt-48" position="top-right" show theme="reverse">
    <view slot="content">
        Top Left
    </view>
    <view slot="operation">Text</view>
  </tooltip>

  <tooltip class="mt-48" position="left" show theme="reverse">
    <view slot="content">
        Left
    </view>
    <view slot="operation">Text</view>
  </tooltip>

  <tooltip class="mt-48" position="left-top" show theme="reverse">
    <view slot="content">
        Left Top
    </view>
    <view slot="operation">Text</view>
  </tooltip>

  <tooltip class="mt-48" position="left-bottom" show theme="reverse">
    <view slot="content">
        Left Bottom
    </view>
    <view slot="operation">Text</view>
  </tooltip>

  <tooltip class="mt-48" position="right" show theme="reverse">
    <view slot="content">
        Right
    </view>
    <view slot="operation">Text</view>
  </tooltip>

  <tooltip class="mt-48" position="right-top" show theme="reverse">
    <view slot="content">
        Right Top
    </view>
    <view slot="operation">Text</view>
  </tooltip>

  <tooltip class="mt-48" position="right-bottom" show theme="reverse">
    <view slot="content">
        Right Top
    </view>
    <view slot="operation">Text</view>
  </tooltip>

  <tooltip class="mt-48" position="bottom" show theme="reverse">
    <view slot="content">
        Bottom
    </view>
    <view slot="operation">Text</view>
  </tooltip>

  <tooltip class="mt-48" position="bottom-left" show theme="reverse">
    <view slot="content">
        Bottom Left
    </view>
    <view slot="operation">Text</view>
  </tooltip>

  <tooltip class="mt-48" position="bottom-right" show theme="reverse">
    <view slot="content">
        Bottom Left
    </view>
    <view slot="operation">Text</view>
  </tooltip>
  
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
| theme         | `'reverse'` \| `'default'` | 'default'       | Theme của tooltip                              |
| position      | `'top'` \| `'bottom'` \| `'left'` \| `'right'` \| `'top-left'` \| `'top-right'` \| `'left-top'` \| `'left-bottom'` \| `'right-top'` \| `'right-bottom'` \| `'bottom-left'` \| `'bottom-right'` | 'top'         | Vị trí hiển thị của tooltip                    |
| showCloseIcon | boolean               | false         | Nếu set `true` icon-close tooltip sẽ được show |
| iconSizeClose | number                | 16            | size của icon-close tooltip                    |

### slots

| Property  | Type    | Default Value | Description                             |
| --------- | ------- | ------------- | --------------------------------------- |
| content   | boolean | props.content | Render component ở nội dung content tip |
| operation | boolean | ''            | Render component ở phần hiển thị tip    |
