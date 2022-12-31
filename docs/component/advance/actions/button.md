---
title: button
sidebar_custom_props:
  description: Component Tini UI - Button theo Design System của Tiki
---

[Tini Button](https://www.figma.com/file/C2Nq0TcxMbe0vvuVpLY4Gh/?node-id=549%3A6274) là một button component được xây dựng dựa trên Design System của Tiki.

<img alt="Tiki Tini Button - Tini UI Design System Community" src="https://i.imgur.com/O4p4xQG.png"/>

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/component/advance/actions/button/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/component/advance/actions/button/index" />

## Thuộc tính

| Thuộc tính | Kiểu dữ liệu                                                 | Giá trị mặc định | Mô tả                                                                                                                                                |
| :--------- | :----------------------------------------------------------- | :--------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| onTap      | function([EventObject](/docs/framework/event/event-object))  |                  | Hàm xử lý được gọi khi người dùng tap vào nút.                                                                                                       |
| variant    | enum('brand', 'brand-reverse', 'neutral', 'neutral-reverse') | `brand`          | Kiểu variant của button.                                                                                                                             |
| size       | enum('large', 'medium', 'small')                             | `large`          | Kích thước của button.                                                                                                                               |
| type       | enum('solid', 'outline', 'ghost')                            | `solid`          | Kiểu định sẵn của button.                                                                                                                            |
| shape      | enum('pill', 'rounded')                                      | `pill`           | Hình dạng định sẵn của button.                                                                                                                       |
| disabled   | bool                                                         | `false`          | Nếu set về `true`, tắt tất cả interactions cho button.                                                                                               |
| skeleton   | bool                                                         | `false`          | Nếu set về `true`, tắt tất cả interactions cho button và hiển thị default skeleton.                                                                  |
| loading    | bool                                                         | `false`          | Nếu set về `true`, tắt tất cả interactions cho button, hiển thị loading indicator.                                                                   |
| iconName   | enum(icon:type)                                              |                  | Hiển thị một icon ở vị trí mặc định, icon sẽ bị ẩn nếu `loading` được đặt về `true`. Xem danh sách icon [tại đây](/docs/component/basic/basic/icon). |
| formType   | formType                                                     |                  | Xem thêm [button:`formType`](/docs/component/basic/form/button).                                                                                     |
| class      | string                                                       |                  | Class của button.                                                                                                                                    |
| style      | string                                                       |                  | Inline styles cho button.                                                                                                                            |

## Sample Code

Khai báo components:

> Khai báo dưới đây sẽ thay thế `<button/>` mặc định của framework. Nếu không muốn điều này xảy ra, bạn có thể sử dụng tên khác tùy ý.

```json
{
  "defaultTitle": "Tini Button",
  "usingComponents": {
    "button": "@tiki.vn/tini-ui/es/tu-button/index"
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
