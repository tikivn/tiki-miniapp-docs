---
title: input
---

`input`, tên đầy đủ là input box, cho phép người dùng nhập thông tin dạng text.  

## Thuộc tính

| Thuộc tính        | Kiểu dữ liệu | Giá trị mặc định | Mô tả                                                                                                                                                                                                                                                                   |
| ----------------- | ------------ | ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type              | string       |                  | Quy định định dạng dữ liệu (format) được nhập vào input. Nhận các giá trị =[text \|\| email \|\| number \|\| decimal \|\| tel \|\| search \|\|url ]. <br/> ***Lưu ý***: một số type sẽ không có hiệu lực trên Simulator của Studio mà bạn phải chạy trên thiết bị thật. |
| password          | boolean      | false            | Chỉ định input dùng để nhập mật khẩu. Mỗi ký tự người dùng nhập vào sẽ được đại diện bằng chấm tròn  (•)                                                                                                                                                                |
| name              | string       |                  | Khai báo `name` khi được sử dụng trong [form](/docs/component/form/form), được sử dụng để lấy `value` cho `form`                                                                                                                                                        |
| value             | string       | ''               | Giá trị khởi tạo.                                                                                                                                                                                                                                                       |
| placeholder       | string       |                  | Nội dung hiển thị trước khi người dùng nhập giá trị của input                                                                                                                                                                                                           |
| placeholder-class | string       |                  | CSS class cho placeholder                                                                                                                                                                                                                                               |
| placeholder-style | css style    |                  | Inline style cho placeholder                                                                                                                                                                                                                                            |
| disabled          | boolean      | false            | Vô hiệu hoá input                                                                                                                                                                                                                                                       |
| maxlength         | number       | 140              | Giới hạn số ký tự được nhập.                                                                                                                                                                                                                                            |
| focus             | boolean      | false            | Tự động focus vào input                                                                                                                                                                                                                                                 |
| confirm-type      | string       | done             | Quy định nhãn hiển thị (title) cho phím return (Nhập) trên bàn phím ảo.  Nhận các giá trị = [ enter \|\| done \|\| go \|\| next \|\| previous \|\| search \|\| send ]                                                                                                   |
| selection-start   | number       |                  | Vị trí bắt đầu khi select nội dung trong input. Chỉ có hiệu lực trong input đang được focus  true                                                                                                                                                                       |
| selection-end     | number       |                  | Vị trí kết thúc khi select con trỏ trong input. Chỉ có hiệu lực khi `focus="true"` và cần được sử dụng chung với `selection-start`                                                                                                                                      |
| cursor            | number       |                  | Vị trí bắt đầu của con trỏ khi đang được focus.                                                                                                                                                                                                                         |
| controlled        | boolean      | false            | Nếu giá trị là `true`, nội dung value của input sẽ được điều khiển hoàn toàn thông qua hàm `setData` trong file `js`                                                                                                                                                    |
| onInput           | event        |                  | Sự kiện sẽ được kích hoạt khi nội dung của input bị thay đổi, `event.detail = { value: value }`                                                                                                                                                                         |
| onConfirm         | event        |                  | Sự kiện sẽ được kích hoạt khi nhấn nút submit (return/Nhập) , `event.detail = { value: value }`                                                                                                                                                                         |
| onFocus           | event        |                  | Sự kiện sẽ được kích hoạt khi input được focus , `event.detail = { value: value }`                                                                                                                                                                                      |
| onBlur            | event        |                  | Sự kiện sẽ được kích hoạt khi input không được focus nữa , `event.detail = { value: value }`                                                                                                                                                                            |

## Sample Code

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
