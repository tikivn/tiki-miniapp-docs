---
title: my.hideTabBar
sidebar_custom_props:
  description: Ẩn đi thanh Tab Bar
---

`my.hideTabBar` là API để ẩn đi thanh Tab Bar

## API Params

| Thuộc tính | Kiểu dữ liệu | Mô tả                                                                 |
| ---------- | ------------ | --------------------------------------------------------------------- |
| animation  | boolean      | Xác định việc ẩn Tab Bar đi có cần thực hiện với animation hay không  |
| success    | Function     | Callback function khi ẩn Tab Bar thành công.                          |
| fail       | Function     | Callback function khi ẩn Tab Bar thất bại.                            |
| complete   | Function     | Callback function khi hoàn tất tác vụ cho dù thành công hay thất bại. |

## Sample Code

```js
my.hideTabBar({
  animation: true
});
```
