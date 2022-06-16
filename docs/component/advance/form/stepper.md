---
title: Stepper
---

`stepper` dùng để tăng hoặc giảm giá trị hiện tại.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/component/advance/form/stepper/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/component/advance/form/stepper/index" />

## Cài đặt `tini-ui`:

```bash
$> yarn add @tiki.vn/tini-ui
```

## Thuộc tính

| Thuộc tính | Kiểu dữ liệu | Giá trị mặc định | Mô tả                                                                                           |
| ---------- | ------------ | ---------------- | ----------------------------------------------------------------------------------------------- |
| className  | string       |                  | Custom class cho component                                                                      |
| min        | number       | 0                | Giá trị nhỏ nhất                                                                                |
| max        | number       | 10000            | Giá trị lớn nhất                                                                                |
| value      | number       | 10               | Giá trị khởi tạo                                                                                |
| step       | number       | 1                | Giá trị mỗi lần tăng hoặc giảm, step có thể nhận giá trị kiểu double                            |
| disabled   | boolean      | false            | Disable stepper component                                                                       |
| readOnly   | boolean      | false            | Nếu cờ được bật lên, users không thể thay đổi giá trị của stepper                               |
| showNumber | boolean      | false            | Nếu cờ được bật lên, hiển thị giá trị trên stepper                                              |
| inputWidth | number       | 40px             | Độ rộng của phần input trong stepper                                                            |
| vertical   | boolean      | false            | Nếu cờ này được bật, stepper sẽ được hiện thị theo chiều dọc thay vì chiều ngang                |
| onChange   | event        |                  | Sự kiện được gọi khi giá trị thay đổi, với data có dạng `(value: Number, mode: String) => void` |

## Sample Code

```xml title=index.txml
<view class="container">
  <stepper
    onChange="callBackFn"
    step="{{1}}"
    showNumber
    value="{{value}}"
    inputWidth="60px"
    min="{{2}}" />
</view>
```

```js title=index.js
Page({
  data: {
    value: 8
  },
  callBackFn(value) {
    console.log(value);
  }
});
```
