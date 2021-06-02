---
title: switch
---

## Giới thiệu

`switch` dùng để chọn một giá trị

## Sử dụng

### Sample Code

**index.txml**

```xml
<view>
  <block-header title="Usage" description="Switches give user control over a feature or option that can be turned on or off." />

  <view class="block-content">
    <text class="title mb-8">Variants</text>
    <text class="subtitle mb-8">State</text>
    <text class="component-state">Default, Selected, Hover, Disable and Disable - Selected</text>

    <view class="component-item">
      <text>Default</text>
      <switch onChange="onChange" />
    </view>
    <view class="component-item">
      <text>Selected</text>
      <switch checked />
    </view>
    <view class="component-item">
      <text>Disable</text>
      <switch disabled />
    </view>
    <view class="component-item last">
      <text>Disable - Selected</text>
      <switch checked disabled />
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
  justify-content: space-between;
}
```

### Chi tiết

| Property   | Type    | Description                                                                                                      |
| ---------- | ------- | ---------------------------------------------------------------------------------------------------------------- |
| name       | string  | Khai báo `name` khi được sử dụng trong [form](/docs/component/form/form), được sử dụng để lấy `value` cho `form` |
| controlled | boolean | Khi giá trị là `true`, giá trị của switch sẽ được điều khiển hoàn toàn thông qua hàm `setData` trong file `js`   |
| checked    | boolean | Chỉ định giá trị của switch có được chọn hay không                                                               |
| disabled   | boolean | Disable switch component                                                                                         |
| color      | string  | Màu của component, sử dụng mã màu như trong css                                                                  |
| onChange   | event   | Sự kiện được gọi khi giá trị bị thay đổi, `event.detail = { checked: checked }`                                  |
| controlled | boolean | Nếu giá trị là true, giá trị của component chỉ thay đổi thông qua `setData`                                      |
