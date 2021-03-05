---
order: 18
category:
  vi-VN: Thành phần cơ bản
  en-US: Basic components
title:
  vi-VN: checkbox-group
  en-US: checkbox-group
---

## Giới thiệu

`checkbox-group` dùng để nhóm các `checkbox` lại với nhau, value của `checkbox-group` sẽ chứa các value của các `checkbox` được chọn

## Sử dụng

### Sample Code

**index.txml**

```xml
<view>
  <block-header title="Usage" description="Checkboxes are used to let a user choose one or more options from a limited number of options." />

  <view class="block-content">
    <text class="title mb-8">Variants</text>
    <text class="subtitle mb-8">State</text>
    <text class="component-state">Default, Selected, Disable and Disable - Selected</text>

    <view class="component-item">
      <checkbox onChange="onChange" />
      <text>Default</text>
    </view>
    <view class="component-item">
      <checkbox checked />
      <text>Selected</text>
    </view>
    <view class="component-item">
      <checkbox disabled />
      <text>Disable</text>
    </view>
    <view class="component-item last">
      <checkbox checked disabled />
      <text>Disable - Selected</text>
    </view>
  </view>
</view>
```

**index.js**

```js
Page({
  onChange(e) {
    console.log('onChange', e);
  },
});
```

**index.tcss**

```css
.component-item {
  flex-direction: row;
  align-items: center;
}
```

### Chi tiết

| Property | Type  | Description                                                                                                                                                            |
| -------- | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| onChange | event | Sự kiện được gọi khi giá trị của các checkbox bị thay đổi, `event.detail = { value: value }`, giá trị của `value` là một mảng các `value` của các `checkbox` được chọn |
