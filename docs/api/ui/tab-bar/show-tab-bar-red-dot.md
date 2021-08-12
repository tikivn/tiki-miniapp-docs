---
title: my.showTabBarRedDot
---

## Giới thiệu

**my.showTabBarRedDot** là API để hiển thị nốt đỏ ở góc trên phải của một Tab Bar Item

## Sử dụng

### Sample Code

```js
my.showTabBarRedDot({
  index: 0
});
```

### API Params

| Attributes | Type     | Required | Description                                                           |
| ---------- | -------- | -------- | --------------------------------------------------------------------- |
| index      | Number   | yes      | Index của tab page, tính từ 0, và từ trái qua phải.                   |
| success    | Function | No       | Callback function khi thành công.                                     |
| fail       | Function | No       | Callback function khi thất bại.                                       |
| complete   | Function | No       | Callback function khi hoàn tất tác vụ cho dù thành công hay thất bại. |
