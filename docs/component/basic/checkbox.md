---
order: 18
category:
  vi-VN: Thành phần cơ bản
  en-US: Basic components
title:
  vi-VN: checkbox
  en-US: checkbox
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

| Property | Type    | Description                                                                                                                                                       |
| -------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| value    | string  | Giá trị của checkbox                                                                                                                                              |
| checked  | boolean | Chỉ định checkbox có được chọn hay không                                                                                                                          |
| disabled | boolean | Disable checkbox component                                                                                                                                        |
| color    | string  | Màu của component, sử dụng mã màu như trong css                                                                                                                   |
| icon     | string  | Loại icon hiển thị khi checkbox được chọn. Chỉ hỗ trợ 2 loại icon là `success` và `minus` ([Xem thêm](/docs/component/basic/icon)). Giá trị mặc định là `success` |
| onChange | event   | Sự kiện được gọi khi giá trị bị thay đổi, `event.detail = { checked: checked, value: value }`                                                                     |

```__react
import image from '../../../theme/static/images/checkbox-component.png'
ReactDOM.render(<img style={{maxWidth: 414}} alt="Checkbox" src={image}/>, mountNode);
```