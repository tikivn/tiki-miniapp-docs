---
title: my.removeTabBarBadge
sidebar_custom_props:
  description: Bỏ đi badge text cho một Tab Bar Item
---

## Giới thiệu

`my.removeTabBarBadge` là API để bỏ đi badge text cho một Tab Bar Item

## API Params

| Thuộc tính | Kiểu dữ liệu | Bắt buộc | Mô tả                                                                 |
| ---------- | ------------ | -------- | --------------------------------------------------------------------- |
| index      | Number       | ✓        | Index của tab page, tính từ 0, và từ trái qua phải.                   |
| success    | Function     |          | Callback function khi thành công.                                     |
| fail       | Function     |          | Callback function khi thất bại.                                       |
| complete   | Function     |          | Callback function khi hoàn tất tác vụ cho dù thành công hay thất bại. |

### Sample Code

```js
my.removeTabBarBadge({
  index: 0
});
```
