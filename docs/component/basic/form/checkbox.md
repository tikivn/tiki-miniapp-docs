---
title: checkbox
---

`checkbox` là một component cho phép người dùng chọn một hoặc nhiều phương án.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/component/basic/checkbox/index" />


## Thuộc tính

| Thuộc tính | Kiểu dữ liệu | Mô tả                                                                                                                                                                  |
| ---------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name       | string       | Tên của checkbox khi được sử dụng trong [form](form), được sử dụng để lấy `value` cho `form`                                                                           |
| value      | string       | Giá trị của checkbox. Cần được khai báo khi sử dụng bên trong [checkbox-group](checkbox-group)                                                                         |
| checked    | boolean      | Quy định checkbox có được mặc định chọn hay không                                                                                                                      |
| disabled   | boolean      | Disable checkbox, Nếu giá trị là true, người dùng sẽ không thay đổi giá trị của checkbox bằng cách tap vào nó                                                          |
| color      | string       | Màu của component checkbox, sử dụng mã màu như trong css                                                                                                               |
| icon       | string       | Loại icon hiển thị khi checkbox được chọn. Chỉ hỗ trợ 2 loại icon là `success` và `minus`, [Xem thêm](/docs/component/basic/basic/icon). Giá trị mặc định là `success` |
| onChange   | event        | Sự kiện được gọi khi giá trị bị thay đổi, `event.detail = { value: value }`. Giá trị của `value` là `true`/`false` tùy vào `checkbox` được chọn hay không              |

## Sample Code 


```xml title=index.txml
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
  align-items: center;
}
```


