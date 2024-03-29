---
title: form
sidebar_custom_props:
  description: Dùng để lưu trữ giá trị của các components input, switch, checkbox, radio, picker
---

## Giới thiệu

- Form dùng để lưu trữ giá trị của các components [input](input), [switch](switch), [checkbox](checkbox), [radio](radio), [picker](picker).
- Các component bên trong form cần khai báo thuộc tính `name`
- Giá trị của form chỉ có thể được lấy thông qua hàm `onSubmit` và chỉ được gọi thông qua sự kiện tap của [button](button) với `form-type="submit"`

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/component/basic/form/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/component/basic/form/index" />

## Thuộc tính

| Thuộc tính | Kiểu dữ liệu | Mô tả                                                                                                                                                                                          |
| ---------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| onSubmit   | event        | Sự kiện được gọi khi `button` bên trong form với `form-type="submit"` được tap vào, `event.detail = { value }`, trong đó value là một object chứa các giá trị của các component bên trong form |
| onReset    | event        | Sự kiện được gọi khi `button` bên trong form với `form-type="reset"` được tap vào, khi đó giá trị của các component trong form sẽ bị đưa về giá trị ban đầu                                    |

## Sample Code

```xml title=index.txml
<view class="container">
  <form onSubmit="onSubmit" onReset="onReset">
    <view class="block">
      <label>
        <text class="header">Input</text>
        <input name="input" placeholder="Input" />
      </label>
    </view>
    <view class="block">
      <text class="header">Radio</text>
      <radio-group name="radio">
        <label class="flex">
          <radio value="radio1" checked />
          <text>Radio 1</text>
        </label>
        <label class="flex">
          <radio value="radio2" />
          <text>Radio 2</text>
        </label>
      </radio-group>
    </view>
    <view class="block">
      <text class="header">Checkbox</text>
      <checkbox-group name="checkbox">
        <label class="flex">
          <checkbox value="checkbox1" />
          <text>Checkbox 1</text>
        </label>
        <label class="flex">
          <checkbox value="checkbox2" />
          <text>Checkbox 2</text>
        </label>
      </checkbox-group>
    </view>
    <view class="block buttons">
      <button form-type="submit">Submit</button>
      <button form-type="reset" type="outline">Reset</button>
    </view>
  </form>
</view>
```

```css title=index.tcss
.header {
  display: flex;
}

label {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

button {
  width: 100%;
}

.flex {
  display: flex;
  flex-direction: row;
  margin-bottom: 4px;
}

.flex text {
  margin-left: 8px;
}

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

```js title=index.js
Page({
  onSubmit(e) {
    console.log('onSubmit', e);
    my.alert({
      content: `Form value：${JSON.stringify(e.detail.value)}`
    });
  },
  onReset(e) {
    console.log('onReset', e);
  }
});
```
