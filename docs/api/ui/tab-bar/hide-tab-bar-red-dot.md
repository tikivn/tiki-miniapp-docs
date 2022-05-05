---
title: my.hideTabBarRedDot
---

`my.hideTabBar` là API để ẩn đi nút đỏ ở góc trên bên phải của một Tab Bar Item

## API Params

| Thuộc tính | Kiểu dữ liệu     | Bắt buộc  | Mô tả                                                          |
| ---------- | -------- | :------: | --------------------------------------------------------------------- |
| index      | number   | ✓      | Index của tab page, tính từ 0, và từ trái qua phải.                   |
| success    | Function |          | Callback function khi thành công.                                     |
| fail       | Function |          | Callback function khi thất bại.                                       |
| complete   | Function |          | Callback function khi hoàn tất tác vụ cho dù thành công hay thất bại. |

## Sample Code

```js
my.hideTabBarRedDot({
  index: 0
});
```


