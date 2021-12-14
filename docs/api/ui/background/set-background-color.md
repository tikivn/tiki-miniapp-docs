---
title: my.setBackgroundColor
---

`my.setBackgroundColor` là API để thay đổi màu nền của page.

## API Params

| Thuộc tính      | Kiểu dữ liệu | Bắt buộc | Mô tả                                                                  |
| --------------- | ------------ | :------: | ---------------------------------------------------------------------- |
| backgroundColor | string       |    ✓     | Màu nền của page                                                       |
| success         | Function     |          | Callback function khi việc thay đổi thành công.                        |
| fail            | Function     |          | Callback function khi việc thay đổi bất thành.                         |
| complete        | Function     |          | Callback function khi gọi API hoàn tất bất kể thành công hay thất bại. |

## Sample Code

```js
my.setBackgroundColor({
  backgroundColor: '#ff0000'
});
```


