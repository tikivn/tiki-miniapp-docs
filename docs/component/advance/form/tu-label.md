---
title: tu-label
sidebar_custom_props:
  description: Component Tini UI - Chức năng tương tự như thẻ label nhưng hỗ trợ thêm icon, helper text và các tính năng khác.
---

- `tu-label` là component trong [tini-ui](https://www.npmjs.com/package/@tiki.vn/tini-ui) với chức năng tương tự như thẻ [label](/docs/component/basic/form/label) nhưng hỗ trợ thêm icon, helper text và một số tính năng mở rộng về giao diện.
- Để sử dụng `tu-label`, bạn cần phải cài [tini-ui](https://www.npmjs.com/package/@tiki.vn/tini-ui) từ version `0.0.18` trở lên.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/component/advance/form/label/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/component/advance/form/label/index" />

## Cài đặt `tini-ui`:

```bash
$> yarn add @tiki.vn/tini-ui
```

## Thuộc tính

| Thuộc tính | Kiểu dữ liệu | Giá trị mặc định | Mô tả                                                                                                        |
| ---------- | ------------ | ---------------- | ------------------------------------------------------------------------------------------------------------ |
| className  | string       |                  | Custom class cho label                                                                                       |
| showBadge  | boolean      | false            | Hiển thị badge trên label                                                                                    |
| icon       | string       |                  | Icon type hiển thị trên label, bạn có thể tim thêm các icon type tại [đây](/docs/component/basic/basic/icon) |
| iconColor  | string       | #808089          | Mã màu cho icon trên label                                                                                   |
| text       | string       |                  | Nội dung của label                                                                                           |
| helperText | string       |                  | Helper text hiển thị bên dưới `text`                                                                         |
| loading    | boolean      | false            | Hiển thị loading skeleton cho label                                                                          |
| disabled   | boolean      | false            | Disable label                                                                                                |

## Sample Code

```json title=index.json
{
  "defaultTitle": "Label",
  "usingComponents": {
    "list-item": "@tiki.vn/tini-ui/es/list/list-item/index",
    "textfield": "@tiki.vn/tini-ui/es/textfield/index",
    "tu-label": "@tiki.vn/tini-ui/es/tu-label/index",
    "block-header": "components/block-header/index",
    "block-variant": "components/block-variant/index"
  }
}
```

```xml title=index.txml
<view class="page">
  <block-header title="Usage" description="Usually used in input components." />

  <block-variant header="Variants">
    <view class="list-item">
      <view class="subtitle mb-8">1. Content</view>
      <view class="sub-content mb-8">With badge, with helper text, with icon</view>
      <view class="line" />

      <view class="list-item-label">
        <view class="text-desc">With badge</view>
        <tu-label showBadge text="Label" />
      </view>

      <view class="list-item-label">
        <view class="text-desc">With helper text</view>
        <tu-label helperText="Text" text="Label" />
      </view>

      <view class="list-item-label">
        <view class="text-desc">With icon</view>
        <tu-label icon="info" text="Label" />
      </view>

      <view class="list-item-label">
        <view class="text-desc">Full option</view>
        <tu-label showBadge helperText="Text" icon="info" text="Label" />
      </view>

    </view>
  </block-variant>

  <block-variant header="">
    <view class="list-item">
      <view class="subtitle mb-8">2. Statuses</view>
      <view class="sub-content mb-8">Disabled, loading</view>
      <view class="line" />

      <view class="font-bold my-medium">Disabled</view>

      <view class="list-item-label">
        <view class="text-desc">With badge</view>
        <tu-label showBadge text="Label" disabled />
      </view>

      <view class="list-item-label">
        <view class="text-desc">With helper text</view>
        <tu-label helperText="Text" text="Label" disabled />
      </view>

      <view class="list-item-label">
        <view class="text-desc">With icon</view>
        <tu-label icon="info" text="Label" disabled />
      </view>

      <view class="list-item-label">
        <view class="text-desc">Full option</view>
        <tu-label showBadge helperText="Text" icon="info" text="Label" disabled />
      </view>

      <view class="font-bold my-medium">Loading</view>

      <view class="list-item-label">
        <view class="text-desc">With badge</view>
        <tu-label showBadge text="Label" loading />
      </view>

      <view class="list-item-label">
        <view class="text-desc">With helper text</view>
        <tu-label helperText="Text" text="Label" loading />
      </view>

      <view class="list-item-label">
        <view class="text-desc">With icon</view>
        <tu-label icon="info" text="Label" loading />
      </view>

      <view class="list-item-label">
        <view class="text-desc">Full option</view>
        <tu-label showBadge helperText="Text" icon="question" text="Label" loading />
      </view>
    </view>
  </block-variant>
</view>
```

```js title=index.js
Page({
  data: {
    filled: 'Filled'
  },
  onInput(event) {
    console.log('onInput', event);
  },
  onConfirm(event) {
    console.log('onConfirm', event);
  },
  onFocus(event) {
    console.log('onFocus', event);
  },
  onBlur(event) {
    console.log('onBlur', event);
  },
  onChangeFilled(event) {
    this.setData({ filled: event.detail.value });
  }
});
```

```css title=index.tcss
.list-item-label {
  margin-bottom: 16px;
  display: flex;
  align-items: flex-start;
}

.tu-label-icon {
  display: flex;
  align-items: center;
}

.tu-label-helper-loading {
  width: 40px;
}

.text-desc {
  color: #808089;
  width: 80px;
}

.sub-content {
  color: var(--text-content-secondary);
  font-size: 12px;
}

.line {
  margin-bottom: 8px;
}

.list-item {
  display: block;
}
```
