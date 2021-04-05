---
order: 101
category:
  vi-VN: Tab Bar
  en-US: Tab Bar
title:
  vi-VN: my.hideTabBarRedDot
  en-US: my.hideTabBarRedDot
---

## Giới thiệu

**my.hideTabBar** là API để ẩn đi nút đỏ ở góc trên bên phải của một Tab Bar Item

## Sử dụng

### Sample Code

```js
my.hideTabBarRedDot({
  index: 0,
});
```

### API Params

| Attributes | Type     | Required | Description                                                           |
| ---------- | -------- | -------- | --------------------------------------------------------------------- |
| index      | Number   | yes      | Index của tab page, tính từ 0, và từ trái qua phải.                   |
| success    | Function | No       | Callback function khi thành công.                                     |
| fail       | Function | No       | Callback function khi thất bại.                                       |
| complete   | Function | No       | Callback function khi hoàn tất tác vụ cho dù thành công hay thất bại. |
