---
order: 101
category:
  vi-VN: Tab Bar
  en-US: Tab Bar
title:
  vi-VN: my.removeTabBarBadge (chưa ready)
  en-US: my.removeTabBarBadge (chưa ready)
---

## Giới thiệu

**my.removeTabBarBadge** là API để bỏ đi badge text cho một Tab Bar Item

## Sử dụng

### Sample Code

```js
my.removeTabBarBadge({
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
