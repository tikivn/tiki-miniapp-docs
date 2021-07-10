---
title: Stepper
---

## Giới thiệu

`stepper` dùng để tăng hoặc giảm giá trị hiện tại.

## Sử dụng

### Sample Code

**index.txml**

```xml
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

**index.js**

```js
Page({
  data: {
    value: 8
  },
  callBackFn(value) {
    console.log(value);
  }
});
```

### Chi tiết

| Property   | Type    | default | required | Description                                                                                     |
| ---------- | ------- | ------- | -------- | ----------------------------------------------------------------------------------------------- |
| className  | string  |         | no       | custom class cho component                                                                      |
| min        | number  | 0       | no       | giá trị nhỏ nhất                                                                                |
| max        | number  | 10000   | no       | giá trị lớn nhất                                                                                |
| value      | number  | 10      | no       | giá trị khởi tạo                                                                                |
| step       | number  | 1       | no       | giá trị mỗi lần tăng hoặc giảm, step có thể nhận giá trị kiểu double                            |
| disabled   | boolean | false   | no       | disable stepper component                                                                       |
| readOnly   | boolean | false   | no       | nếu cờ được bật lên, users không thể thay đổi giá trị của stepper                               |
| showNumber | boolean | false   | no       | nếu cờ được bật lên, hiển thị giá trị trên stepper                                              |
| inputWidth | number  | 40px    | no       | độ rộng của phần input trong stepper                                                            |
| vertical   | boolean | false   | no       | nếu cờ này được bật, stepper sẽ được hiện thị theo chiều dọc thay vì chiều ngang                |
| onChange   | event   |         |          | sự kiện được gọi khi giá trị thay đổi, với data có dạng `(value: Number, mode: String) => void` |