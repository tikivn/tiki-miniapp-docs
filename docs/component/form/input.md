---
title: input
---

## Giới thiệu

Thẻ input hiển thị một vùng input box cho phép người dùng nhập giá trị

## Sử dụng

### Sample Code

**index.txml**

```xml
<view class="container">
  <view class="block">
    <text class="header">Events</text>
    <view class="item">
      <text>Events</text>
      <input
        onInput="onInput"
        onFocus="onFocus"
        onConfirm="onConfirm"
        onBlur="onBlur"
      />
    </view>
  </view>

  <view class="block">
    <text class="header">Input type</text>
    <block tiki:for="{{inputTypes}}">
      <view class="item">
        <text>{{ item }}</text>
        <input placeholder="{{item}}" type="{{item}}" />
      </view>
    </block>
  </view>

  <view class="block">
    <text class="header">Confirm type</text>
    <block tiki:for="{{confirmTypes}}">
      <view class="item">
        <text>{{ item }}</text>
        <input placeholder="{{item}}" confirm-type="{{item}}" />
      </view>
    </block>
  </view>

  <view class="block">
    <text class="header">Disabled</text>
    <view class="item">
      <text>Disabled</text>
      <input placeholder="disabled" disabled="true" />
    </view>
  </view>
</view>
```

**index.js**

```js
Page({
  data: {
    inputTypes: [
      'none',
      'text',
      'tel',
      'url',
      'email',
      'numeric',
      'decimal',
      'search'
    ],
    confirmTypes: [
      'enter',
      'done',
      'go',
      'next',
      'previous',
      'search',
      'send'
    ]
  },
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

**index.tcss**

```css
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
}

.item {
  margin: 8px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
}

.item input {
  margin-left: 16px;
}
```

### Chi tiết

| Property          | Type      | Default Value | Required | Description                                                                                                                           |
| ----------------- | --------- | ------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| type              | string    |               | Không    | Loại input. Hỗ trợ các giá trị `text/email/number/decimal/tel/search/url`                                                             |
| password          | boolean   | false         | Không    | Chỉ định loại input là password                                                                                                       |
| name              | string    |               | Không    | Khai báo `name` khi được sử dụng trong [form](/docs/component/form/form), được sử dụng để lấy `value` cho `form`                      |
| value             | string    | ''            | Không    | Giá trị khởi tạo                                                                                                                      |
| placeholder       | string    |               | Không    | Nội dung hiển thị trước khi người dùng nhập giá trị của input                                                                         |
| placeholder-class | string    |               | Không    | Class name cho placeholder                                                                                                            |
| placeholder-style | css style |               | Không    | Inline style cho placeholder                                                                                                          |
| disabled          | boolean   | false         | Không    | Disable input                                                                                                                         |
| maxlength         | number    | 140           | Không    | Giới hạn số ký tự được nhập                                                                                                           |
| focus             | boolean   | false         | Không    | Tự động focus vào input                                                                                                               |
| confirm-type      | string    | done          | Không    | Nội dung hiển thị cho phím return (Nhập) trên bàn phím (Keyboard). <br />Hỗ trợ các giá trị `enter/done/go/next/previous/search/send` |
| selection-start   | number    |               | Không    | Vị trí bắt đầu của con trỏ. Chỉ có hiệu lực trong khi focus là true                                                                   |
| selection-end     | number    |               | Không    | Vị trí kết thúc của con trỏ. Chỉ có hiệu lực khi focus là true và cần được sử dụng chung với `selection-start`                        |
| cursor            | number    |               | Không    | Vị trí bắt đầu của con trỏ khi focus là true                                                                                          |
| controlled        | boolean   | false         | Không    | Khi giá trị là `true`, nội dung value của input sẽ được điều khiển hoàn toàn thông qua hàm `setData` trong file `js`                  |
| onInput           | event     |               | Không    | Sự kiện sẽ được gọi khi nội dung của input bị thay đổi, `event.detail = { value: value }`                                             |
| onConfirm         | event     |               | Không    | Sự kiện sẽ được gọi khi nhấn nút submit (return/Nhập) , `event.detail = { value: value }`                                             |
| onFocus           | event     |               | Không    | Sự kiện sẽ được gọi khi input được focus , `event.detail = { value: value }`                                                          |
| onBlur            | event     |               | Không    | Sự kiện sẽ được gọi khi input không được focus nữa , `event.detail = { value: value }`                                                |
