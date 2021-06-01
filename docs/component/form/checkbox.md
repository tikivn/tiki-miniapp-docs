---
title: checkbox
---

## Giới thiệu

`checkbox` là một component cho phép người dùng chọn một hoặt nhiều phương án

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

| Property | Type    | Description                                                                                                                                                       |
| -------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name     | string  | Khai báo `name` khi được sử dụng trong [form](/docs/component/form/form), được sử dụng để lấy `value` cho `form`                                                  |
| value    | string  | Giá trị của checkbox. Cần được khai báo khi sử dụng bên trong [checkbox-group](/docs/component/form/checkbox-group)                                               |
| checked  | boolean | Chỉ định checkbox có được chọn hay không                                                                                                                          |
| disabled | boolean | Disable checkbox, khi giá trị là true bạn sẽ không thay đổi giá trị của checkbox khi tap được                                                                     |
| color    | string  | Màu của component, sử dụng mã màu như trong css                                                                                                                   |
| icon     | string  | Loại icon hiển thị khi checkbox được chọn. Chỉ hỗ trợ 2 loại icon là `success` và `minus` ([Xem thêm](/docs/component/basic/icon)). Giá trị mặc định là `success` |
| onChange | event   | Sự kiện được gọi khi giá trị bị thay đổi, `event.detail = { value: value }`. Giá trị của `value` là true/false tùy vào `checkbox` được chọn hay không             |
