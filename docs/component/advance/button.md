---
title: button
---

## Giới thiệu

[Tini Button](https://www.figma.com/file/C2Nq0TcxMbe0vvuVpLY4Gh/?node-id=549%3A6274) là một button component được xây dựng dựa trên Design System của Tiki.

<img alt="Tiki Tini Button - Tini UI Design System Community" src="https://i.imgur.com/O4p4xQG.png"/>

## Sử dụng

### Sample Code

Khai báo components:

> Khai báo dưới đây sẽ thay thế `<button/>` mặc định của framework. Nếu không muốn điều này xảy ra, bạn có thể sử dụng tên khác tùy ý.

```json
{
  "defaultTitle": "Tini Button",
  "usingComponents": {
    "button": "@tikivn/mini-ui/lib/button/index"
  }
}
```

```xml
<button onTap="onTap">Tini Button</button>
```

```js
Page({
  onTap(e) {
    my.alert({ content: 'Button Clicked' });
  }
});
```

### Chi tiết

#### Props Reference

| Property | Type                                                        | Default Value | Description                                                                                                                                    |
| :------- | :---------------------------------------------------------- | :------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| onTap    | function([EventObject](/docs/framework/event/event-object)) |               | Hàm xử lý được gọi khi người dùng nhấn vào nút.                                                                                                |
| size     | enum('large', 'medium', 'small')                            | `large`       | Kích thước của button.                                                                                                                         |
| type     | enum('solid', 'outline', 'ghost')                           | `solid`       | Kiểu định sẵn của button.                                                                                                                      |
| shape    | enum('pill', 'rounded', 'circle')                           | `pill`        | Hình dạng định sẵn của button.                                                                                                                 |
| disabled | bool                                                        | `false`       | Nếu set về `true`, tắt tất cả interactions cho button.                                                                                         |
| skeleton | bool                                                        | `false`       | Nếu set về `true`, tắt tất cả interactions cho button và hiển thị default skeleton.                                                            |
| loading  | bool                                                        | `false`       | Nếu set về `true`, tắt tất cả interactions cho button, hiển thị loading indicator.                                                             |
| iconName | enum([icon:type](/docs/component/basic/icon))               |               | Hiển thị một icon ở vị trí mặc định, icon sẽ bị ẩn nếu `loading` được đặt về `true`. Xem danh sách icon [tại đây](/docs/component/basic/icon). |
| formType | [`formType`](/docs/component/basic/button)                  |               | Xem [button:`formType`](/docs/component/basic/button).                                                                                         |
| class    | string                                                      |               | Class của button.                                                                                                                              |
| style    | string                                                      |               | Inline styles cho button.                                                                                                                      |

---
