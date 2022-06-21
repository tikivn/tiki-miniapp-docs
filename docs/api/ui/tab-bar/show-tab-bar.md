---
title: my.showTabBar
sidebar_custom_props:
  description: Hiển thị lại tab bar sau khi ẩn
---

`my.showTabBar` là API để show lại tab bar.

### Sample Code

```js
my.showTabBar({
  animation: true
});
```

## API Params

| Thuộc tính | Kiểu dữ liệu | Mô tả                                                                 |
| ---------- | ------------ | --------------------------------------------------------------------- |
| animation  | boolean      | Xác định việc ẩn Tab Bar đi có cần thực hiện với animation hay không. |
| success    | Function     | Callback function khi hiển thị Tab Barthành công.                     |
| fail       | Function     | Callback function khi hiển thị Tab Bar thất bại.                      |
| complete   | Function     | Callback function khi hoàn tất tác vụ cho dù thành công hay thất bại. |
