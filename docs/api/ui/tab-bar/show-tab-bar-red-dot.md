---
title: my.showTabBarRedDot
---

`my.showTabBarRedDot` là API để hiển thị nốt đỏ ở góc trên phải của một Tab Bar Item.



## Sample Code

```js
my.showTabBarRedDot({
  index: 0
});
```

## API Params

| Thuộc tính | Kiểu dữ liệu     | Bắt buộc | Mô tả                                                            |
| ---------- | -------- | :------: | --------------------------------------------------------------------- |
| index      | number   | ✓     | Index của tab page, tính từ 0, và từ trái qua phải.                   |
| success    | Function |        | Callback function khi hiển thị chấm đỏ thành công.                                     |
| fail       | Function |        | Callback function khi hiển thị chấm đỏ thất bại.                                       |
| complete   | Function |        | Callback function khi hoàn tất việc gọi hàm bất kể thành công hay thất bại. |
