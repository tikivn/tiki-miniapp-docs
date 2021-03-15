---
order: 51
category:
  vi-VN: Thiết bị
  en-US: Device
title:
  vi-VN: my.hideKeyboard
  en-US: my.hideKeyboard
---

## Giới thiệu

**my.hideKeyboard** là API dùng để ẩn bàn phím.

## Sử dụng

### Sample Code

**index.txml**

```xml
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

**index.js**

```js
Page({
  bindHideKeyboard(e) {
    if (e.detail.value === "123") {
      my.hideKeyboard();
    }
  },
})
```