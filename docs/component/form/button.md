---
title: button
---

## Giới thiệu

button

## Sử dụng

### Sample Code

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

### Chi tiết

| Property  | Type    | Default Value | Description                                                                                                                                             |
| --------- | ------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| size      | string  | "large"       | Kích thước của button (large/medium/small)                                                                                                              |
| type      | string  | "solid"       | Loại button (solid/outline/ghost)                                                                                                                       |
| loading   | boolean | false         | Hiển thị icon loading. Khi hiển thị loading, button không thể tap được                                                                                  |
| disabled  | boolean | false         | Disabled button, bạn không thể tap khi disabled là true                                                                                                 |
| form-type | string  |               | Giá trị là `submit` hoặc `reset`. Sử dụng với [form](/docs/component/form/form), khi tap vào button sẽ gọi sự kiện `onSubmit` hoặc `onReset` của `form` |
| onTap     | event   | null          | Sự kiện khi tap vào button                                                                                                                              |
