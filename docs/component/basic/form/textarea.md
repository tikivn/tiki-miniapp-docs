---
title: textarea
---

Tương tự với thẻ `textarea` trên web, `textarea` component là một dạng text box cho phép bạn có thể nhập nhiều dòng vào.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/component/basic/textarea/index" />


## Thuộc tính

| Thuộc tính        | Kiểu dữ liệu | Giá trị mặc định | Mô tả                                                                                                                        |
| ----------------- | ------------ | ---------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| name              | string       |                  | Khai báo `name` khi được sử dụng trong [form](form), được sử dụng để lấy `value` cho `form`                                  |
| value             | string       | ''               | Giá trị khởi tạo                                                                                                             |
| placeholder       | string       |                  | Nội dung hiển thị trước khi người dùng nhập giá trị của textarea                                                             |
| placeholder-class | string       |                  | Class name cho placeholder                                                                                                   |
| placeholder-style | css style    |                  | Inline style cho placeholder                                                                                                 |
| disabled          | boolean      | false            | Disable textarea                                                                                                             |
| maxlength         | number       | 140              | Giới hạn số ký tự được nhập                                                                                                  |
| focus             | boolean      | false            | Tự động focus vào textarea                                                                                                   |
| auto-height       | boolean      | false            | Tự động tăng chiều cao. (Bạn không nên set `max-height` và `min-height` cho textarea nếu giá trị của thuộc tính này là true) |
| show-count        | boolean      | true             | Hiển thị số ký tự đang có của textarea                                                                                       |
| controlled        | boolean      | false            | Khi giá trị là `true`, nội dung value của textarea sẽ được điều khiển hoàn toàn thông qua hàm `setData` trong file `js`      |
| onInput           | event        |                  | Sự kiện sẽ được gọi khi nội dung của textarea bị thay đổi, `event.detail = { value: value }`                                 |
| onConfirm         | event        |                  | Sự kiện sẽ được gọi khi nhấn nút submit (return/Nhập) , `event.detail = { value: value }`                                    |
| onFocus           | event        |                  | Sự kiện sẽ được gọi khi textarea được focus , `event.detail = { value: value }`                                              |
| onBlur            | event        |                  | Sự kiện sẽ được gọi khi textarea không được focus nữa , `event.detail = { value: value }`                                    |


## Sample Code

```xml title=index.txml
<block-header title="Usage" description="textarea" />
<view class="container">
  <view class="block">
    <text class="header">Events</text>
    <textarea onInput="onInput" onFocus="onFocus" onConfirm="onConfirm" onBlur="onBlur" />
  </view>

  <view class="block">
    <text class="header">Hide count</text>
    <textarea show-count="{{false}}" />
  </view>

  <view class="block">
    <text class="header">Auto height</text>
    <textarea auto-height />
  </view>

  <view class="block">
    <text class="header">Disabled</text>
    <textarea placeholder="disabled" disabled="true" />
  </view>
</view>
```

```js title=index.js
Page({
  data: {},
  onInput(e) {
    console.log('onInput', e);
  },
  onConfirm(e) {
    console.log('onConfirm', e);
  },
  onFocus(e) {
    console.log('onFocus', e);
  },
  onBlur(e) {
    console.log('onBlur', e);
  }
});
```

```css title=index.tcss
.container {
  min-height: 100%;
  background-color: var(--gray20);
  padding: 16px;
}

.block {
  background-color: white;
  margin: 8px 0;
  padding: 16px;
  border-radius: var(--border-radius-rounded-4px);
  display: flex;
  flex-direction: column;
}
```
