---
title: button
---

## Giới thiệu

[Tiny Button](https://www.figma.com/file/C2Nq0TcxMbe0vvuVpLY4Gh/?node-id=549%3A6274) là advanced button component được Tiny UI Design System Community phát triển.
Một button component cơ bản sẽ hiển thị đẹp trên bất kỳ nền tảng nào. Hỗ trợ các mức độ tùy chỉnh tối thiểu.

Nếu button này không phù hợp với ứng dụng của bạn, bạn có thể tạo button của riêng mình bằng cách sử dụng component này hoặc button mặc định. 
Hoặc, hãy xem các button component khác do cộng đồng xây dựng.


<img alt="Tiki Tiny Button - Tiny UI Design System Community" src="https://i.imgur.com/O4p4xQG.png"/>


## Sử dụng

### Sample Code:

Khai báo components:
> Khai báo dưới đây sẽ thay thế `<button/>` mặc định của framework. Nếu không muốn điều này xảy ra, bạn có thể sử dụng tên khác tùy ý.

```json
{
  "defaultTitle": "Tiny Button",
  "usingComponents": {
    "button": "@tikivn/mini-ui/lib/button/index"
  }
}
```
 
```xml
<button onTap="onTap">Tiny Button</button>
``` 

```js
Page({
  onTap(e) {
    my.alert({content:'Button Clicked'});
  }
});
```
 
## Props Reference
<!-- Props Reference -->
### `onTap`

Trình xử lý được gọi khi người dùng nhấn vào nút.

| Type  |
| :---- | 
| function([EventObject](/docs/framework/event/event-object)) | 

---


### `size`

Kích thước của button.

| Type                              | Default               |
| :----                             | :-------------------- |
| enum('large', 'medium', 'small')  | `large`               |

---


### `type`


Kiểu định sẵn của button.

| Type                              | Default               |
| :----                             | :-------------------- |
| enum('solid', 'outline', 'ghost')  | `solid`               |

---


### `shape`

Hình dạng định sẵn của button.

| Type                              | Default               |
| :----                             | :-------------------- |
| enum('pill', 'rounded', 'circle')  | `pill`               |

---


### `disabled`

Nếu set về `true`, tắt tất cả interactions cho button.

| Type | Default |
| :---- | :------- |
| bool | `false` |

---


### `skeleton`

Nếu set về `true`, tắt tất cả interactions cho button và hiển thị default skeleton.

| Type | Default |
| :---- | :------- |
| bool | `false` |

---


### `loading`

Nếu set về `true`, tắt tất cả interactions cho button, hiển thị loading indicator.

| Type | Default |
| :---- | :------- |
| bool | `false` |

---


### `disabled`

Nếu set về `true`, tắt tất cả interactions cho button.

| Type | Default |
| :---- | :------- |
| bool | `false` |

---


### `iconName`

Hiển thị một icon ở vị trí mặc định, icon sẽ bị ẩn nếu `loading` được đặt về `true`

| Type  |
| :---- | 
| enum([icon:type](/docs/component/basic/icon)) | 

---


### `formType`

Xem [button:`formType`](/docs/component/basic/button)

---


### `class`

Class của button.

| Type  |
| :---- | 
| string | 

---


### `style`

Inline styles cho button.

| Type  |
| :---- | 
| string | 

---

