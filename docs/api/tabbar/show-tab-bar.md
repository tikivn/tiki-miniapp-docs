---
title: my.showTabBar
---

## Giới thiệu

**my.showTabBar** là API để show lại tab bar

## Sử dụng

### Sample Code

```js
my.showTabBar({
  animation: true
});
```

### API Params

| Attributes | Type     | Required | Description                                                           |
| ---------- | -------- | -------- | --------------------------------------------------------------------- |
| animation  | Boolean  | no       | Xác định việc ẩn Tab Bar đi có cần thực hiện với animation hay không  |
| success    | Function | No       | Callback function khi thành công.                                     |
| fail       | Function | No       | Callback function khi thất bại.                                       |
| complete   | Function | No       | Callback function khi hoàn tất tác vụ cho dù thành công hay thất bại. |
