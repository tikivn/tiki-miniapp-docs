---
title: switch
---

`switch` hoạt động như một công tắc giúp người dùng chuyển đổi giữa hai trạng thái - ON vs OFF, YES vs NO, ...

<img src="/img/switch_component.png" alt="switch component" style={{ margin: '0 auto', display: 'flex' }}/>

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/component/basic/switch/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/component/basic/switch/index" />

## Chi tiết

| Thuộc tính | Kiểu dữ liệu | Mô tả                                                                                                          |
| ---------- | ------------ | -------------------------------------------------------------------------------------------------------------- |
| name       | string       | Khai báo `name` khi được sử dụng trong [form](form), được sử dụng để lấy `value` cho `form`                    |
| controlled | boolean      | Khi giá trị là `true`, giá trị của switch sẽ được điều khiển hoàn toàn thông qua hàm `setData` trong file `js` |
| checked    | boolean      | Chỉ định giá trị của switch có được chọn hay không                                                             |
| disabled   | boolean      | Disable switch component                                                                                       |
| color      | string       | Màu của component, sử dụng mã màu như trong css                                                                |
| onChange   | event        | Sự kiện được gọi khi giá trị bị thay đổi, `event.detail = { checked: checked }`                                |
| controlled | boolean      | Nếu giá trị là true, giá trị của component chỉ thay đổi thông qua `setData`                                    |

## Sample Code

```xml title=index.txml
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

```js title=index.js
Page({
  onChange(e) {
    console.log('onChange', e);
  }
});
```

```css title=index.tcss
.component-item {
  flex-direction: row;
  justify-content: space-between;
}
```
