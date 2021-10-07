---
title: button
---

## Thuộc tính

| Thuộc tính | Kiểu dữ liệu | Giá trị măc định | Mô tả                                                                                                                                                    |
| ---------- | ------------ | ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| size       | string       | large            | Kích thước của button. Nhận các giá trị = [large \|\| medium \|\| small].                                                                                |
| type       | string       | solid            | Kiểu button. Nhận các giá trị = [solid \|\| outline \|\| ghost].                                                                                         |
| loading    | boolean      | false            | Hiển thị icon loading bên cạnh caption. Trong lúc hiển thị loading, button bị vô hiệu hoá.                                                               |
| disabled   | boolean      | false            | Vô hiệu hoá button.                                                                                                                                      |
| form-type  | string       |                  | Giá trị là `submit` hoặc `reset`, sử dụng với [form](/docs/component/form/form). Khi tap vào button, sẽ gọi sự kiện `onSubmit` hoặc `onReset` của `form` |
| onTap      | event        |                  | Sự kiện được kích hoạt khi tap vào button.                                                                                                               |

<div align="center"> ---oOo--- </div>

### Các kiểu nút

<img src="/img/solid_button.png" alt="solid button" style={{ margin: '0 auto', display: 'flex' }}/>

Các thành phần của button - caption, đường viền và màu nền - được hiển thị đầy đủ.

<img src="/img/outline_button.png" alt="outline button" style={{ margin: '0 auto', display: 'flex' }}/>

Button gồm caption và đuờng viền; màu nền thì transparent.

<img src="/img/ghost_button.png" alt="ghost button" style={{ margin: '0 auto', display: 'flex' }}/>

Button chỉ có caption; màu nền cũng như đường viền thì transparent.


## Sample Code

**index.txml**

```xml

<view class="container">
  <view class="block">
    <text>type: solid</text>
    <button type="solid" onTap="onTap">Solid</button>
    <button type="solid" disabled >Solid(disabled)</button>
    <button type="solid" size="medium">Solid(medium)</button>
    <button type="solid" size="small">Solid(small)</button>
    <button type="solid" loading>Solid(loading)</button>
  </view>

  <view class="block">
    <text>type: outline</text>
    <button type="outline">Outline</button>
    <button type="outline" disabled >Outline(disabled)</button>
    <button type="outline" size="medium">Outline(medium)</button>
    <button type="outline" size="small">Outline(small)</button>
    <button type="outline" loading>Outline(loading)</button>
  </view>

  <view class="block">
    <text>type: ghost</text>
    <button type="ghost">Ghost</button>
    <button type="ghost" disabled >Ghost(disabled)</button>
    <button type="ghost" size="medium">Ghost(medium)</button>
    <button type="ghost" size="small">Ghost(small)</button>
    <button type="ghost" loading>Ghost(loading)</button>
  </view>
</view>
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

button {
  margin-top: 8px;
  width: 100%;
}
```

**index.js**

```js
Page({
  onTap() {
    console.log('Button onTap');
  }
});
```
