---
title: input
---

## Giới thiệu

Dùng để nhập giá trị

## Giới hạn

- Chưa hỗ trợ style cho placeholder bên trong class

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
      'default',
      'email-address',
      'numeric',
      'phone-pad',
      'number-pad',
      'decimal-pad',
      'ascii-capable',
      'numbers-and-punctuation',
      'url',
      'name-phone-pad',
      'twitter',
      'web-search',
      'visible-password'
    ],
    confirmTypes: [
      'done',
      'go',
      'next',
      'search',
      'send',
      'none',
      'previous',
      'default',
      'emergency-call',
      'google',
      'join',
      'route',
      'yahoo'
    ]
  },
  onPageScroll() {
    console.log('onPageScroll');
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

| Property               | Type    | Default Value | Required | Description                                                                                                                                                                                                                                                     |
| ---------------------- | ------- | ------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| value                  | string  |               | Không    | Giá trị khởi tạo                                                                                                                                                                                                                                                |
| type                   | string  |               | Không    | Loại input.<br/>**Hỗ trợ cả iOS và Android**: default/number-pad/decimal-pad/numeric/email-address/phone-pad <br/>**Chỉ hỗ trợ iOS**: ascii-capable/numbers-and-punctuation/url/name-phone-pad/twitter/web-search<br />**Chỉ hỗ trợ Android**: visible-password |
| placeholder            | string  |               | Không    | Nội dung hiển thị trước khi người dùng nhập giá trị của input                                                                                                                                                                                                   |
| placeholder-text-color | color   |               | Không    | Màu chữ của placeholder                                                                                                                                                                                                                                         |
| disabled               | boolean | false         | Không    | Disable input                                                                                                                                                                                                                                                   |
| maxlength              | number  | 14            | Không    | Giới hạn số ký tự được nhập                                                                                                                                                                                                                                     |
| focus                  | boolean | false         | Không    | Tự động focus vào input                                                                                                                                                                                                                                         |
| confirm-type           | string  | done          | Không    | Nội dung hiển thị cho phím return (Nhập). <br />**Hỗ trợ cho cả iOS và Android**: done/go/next/search/send<br/>**Chỉ hỗ trợ iOS: default/emergency-call/google/join/route/yahoo**<br/>Chỉ hỗ trợ Android: none/previous                                         |
| selection-start        | number  | -1            | Không    | Vị trí bắt đầu của con trỏ. Nó chỉ có hiệu lực trong khi focus là true và cần được sử dụng `selection-end`                                                                                                                                                      |
| selection-end          | number  | -1            | Không    | Vị trí kết thúc của con trỏ. Nó chỉ có hiệu lực khi focus là true và cần được sử dụng `selection-start`                                                                                                                                                         |
| onInput                | event   |               | Không    | Sự kiện sẽ được gọi khi nội dung của input bị thay đổi, `event.detail = { value: value }`                                                                                                                                                                       |
| onConfirm              | event   |               | Không    | Sự kiện sẽ được gọi khi nhấn nút submit (return/Nhập) , `event.detail = { value: value }`                                                                                                                                                                       |
| onFocus                | event   |               | Không    | Sự kiện sẽ được gọi khi input được focus , `event.detail = { value: value }`                                                                                                                                                                                    |
| onBlur                 | event   |               | Không    | Sự kiện sẽ được gọi khi input không được focus nữa , `event.detail = { value: value }`                                                                                                                                                                          |

<img style={{maxWidth: 414}} alt="Tab" src="/img/input-component.png"/>
