---
title: search-bar
sidebar_custom_props:
  description: Component Tini UI - Hỗ trợ xây dựng component tìm kiếm
---

- `search-bar` là component trong [tini-ui](https://www.npmjs.com/package/@tiki.vn/tini-ui) hỗ trợ xây dựng component tìm kiếm.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/component/advance/form/search-bar/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/component/advance/form/search-bar/index" />

## Cài đặt `tini-ui`:

```bash
$> yarn add @tiki.vn/tini-ui
```

## Thuộc tính

| Thuộc tính       | Kiểu dữ liệu | Giá trị mặc định | Mô tả                                                                                                                     |
| ---------------- | ------------ | ---------------- | ------------------------------------------------------------------------------------------------------------------------- |
| className        | string       |                  | Custom class                                                                                                              |
| style            | string       |                  | Inline style                                                                                                              |
| loading          | boolean      | false            | Hiển thị loading skeleton                                                                                                 |
| shape            | string       | rounded          | Kiểu border radius của input. Hỗ trợ `rounded` hoặc `pill`. Mặc định là `rounded`                                         |
| maxlength        | number       | 140              | Giới hạn số ký tự được nhập                                                                                               |
| value            | string       |                  | Giá trị khởi tạo                                                                                                          |
| labelText        | string       |                  | Nội dung của label                                                                                                        |
| labelCls         | string       |                  | Custom class cho thẻ label                                                                                                |
| placeholder      | string       |                  | Nội dung hiển thị trước khi người dùng nhập giá trị của search-bar                                                        |
| placeholderClass | string       |                  | Class name cho placeholder                                                                                                |
| placeholderStyle | css style    |                  | Inline style cho placeholder                                                                                              |
| disabled         | boolean      | false            | Disable search-bar                                                                                                        |
| focus            | boolean      | false            | Tự động focus vào search-bar                                                                                              |
| hasError         | boolean      | false            | Khi giá trị là true, search-bar sẽ có viền màu đỏ (mã #ff424f), và xuất hiện icon thông báo lỗi                           |
| errorMsg         | string       |                  | Hiển thị thông báo lỗi bên dưới search-bar , cần khai báo thêm `hasError=true`                                            |
| controlled       | boolean      | false            | Khi giá trị là `true`, nội dung value của search-bar sẽ được điều khiển hoàn toàn thông qua hàm `setData` trong file `js` |
| onInput          | event        |                  | Sự kiện sẽ được gọi khi nội dung của search-bar bị thay đổi, `event.detail = { value: value }`                            |
| onFocus          | event        |                  | Sự kiện sẽ được gọi khi search-bar được focus , `event.detail = { value: value }`                                         |
| onBlur           | event        |                  | Sự kiện sẽ được gọi khi search-bar không được focus nữa , `event.detail = { value: value }`                               |
| onTapCloseIcon   | event        |                  | Sự kiện sẽ được gọi khi tap vào icon close , `event.detail = { value: value }`                                            |
| onTapSearchIcon  | event        |                  | Sự kiện sẽ được gọi khi tap vào icon search hoặc khi nhấn nút submit (return/Nhập) , `event.detail = { value: value }`    |

## Sample Code

```json title=index.json
{
  "defaultTitle": "Search bar",
  "usingComponents": {
    "search-bar": "@tiki.vn/tini-ui/es/search-bar/index"
  }
}
```

```xml title=index.txml
<search-bar
  placeholder="With label"
  onInput="onInput"
  onFocus="onFocus"
  onBlur="onBlur"
  labelText="Label"
/>
<search-bar placeholder="Without label" />
<search-bar
  placeholder="Click to type here"
  labelText="Rounded"
  shape="rounded"
/>
<search-bar
  placeholder="Click to type here"
  labelText="Pill"
  shape="pill"
/>
<search-bar
  value="{{value}}"
  labelText="Label"
  onInput="handleChangeInput"
  onTapCloseIcon="handleClearInput"
/>
<search-bar
  disabled
  labelText="Disabled"
  placeholder="Disabled"
/>
<search-bar
  loading
  placeholder="Loading"
/>

```

```js title=index.js
Page({
  data: {
    value: 'value'
  },
  onInput(event) {
    console.log('onInput', event);
  },
  onConfirm(event) {
    console.log('onConfirm', event);
  },
  onFocus(event) {
    console.log('onFocus', event);
  },
  onBlur(event) {
    console.log('onBlur', event);
  },
  handleChangeInput(event) {
    this.setData({ value: event.detail.value });
  },
  handleClearInput() {
    this.setData({ value: '' });
  }
});
```
