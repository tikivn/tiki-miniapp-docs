---
title: checkbox-group
---

## Giới thiệu

- `checkbox-group` dùng để nhóm các [checkbox](checkbox) lại với nhau, value của `checkbox-group` sẽ là một mảng chứa value của các `checkbox` được chọn
- Các thẻ `checkbox` bên trong `checkbox-group` cần được khai báo thuộc tính `value`

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/component/basic/checkbox/index" />

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


    <checkbox-group onChange="onGroupChange">
      <view class="component-item">
        <checkbox value="check1" onChange="onChange" />
        <text>Default</text>
      </view>
      <view class="component-item">
        <checkbox value="check2" checked />
        <text>Selected</text>
      </view>
    </checkbox-group>
  </view>
</view>
```

**index.js**

```js
Page({
  onGroupChange(e) {
    console.log('onGroupChange', e);
  },
  onChange(e) {
    console.log('onChange', e);
  }
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

| Property | Type     | Description                                                                                                                                                                      |
| -------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name     | string   | Khai báo `name` khi được sử dụng trong [form](/docs/component/form/form), được sử dụng để lấy `value` cho `form`                                                                 |
| onChange | function | Sự kiện được gọi khi giá trị của các checkbox bên trong bị thay đổi, `event.detail = { value: value }`, giá trị của `value` là một mảng các `value` của các `checkbox` được chọn |
