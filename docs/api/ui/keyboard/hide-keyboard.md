---
title: my.hideKeyboard
---

`my.hideKeyboard` là API dùng để ẩn bàn phím.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/keyboard/index" />

## Sample Code

```xml title=index.txml
<view>
  <block-header
    title="Usage"
    description="The API for hiding the keyboard."
  />

  <view class="block-content">
    <text class="title mb-8">Example</text>
    <view class="component-item">
      <input
        onInput="bindHideKeyboard"
        placeholder="Enter 123 to automatically close the keyboard"
      />
    </view>
  </view>
</view>
```

```js title=index.js
Page({
  bindHideKeyboard(e) {
    if (e.detail.value === '123') {
      my.hideKeyboard();
    }
  }
});
```
