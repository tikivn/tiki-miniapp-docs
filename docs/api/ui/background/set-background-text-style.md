---
title: my.setBackgroundTextStyle
sidebar_custom_props:
  description: Thay đổi font và color của text khi pull down để refresh
---

`my.setBackgroundTextStyle` là API để thay đổi font và color của text khi pull down để refresh.

## API Params

| Thuộc tính | Kiểu dữ liệu | Bắt buộc | Mô tả                                                                        |
| ---------- | ------------ | :------: | ---------------------------------------------------------------------------- |
| textStyle  | String       |    ✓     | Style của text. Chỉ có thể gán bằng 1 trong 2 giá trị là `dark` hoặc `light` |
| success    | Function     |          | Callback function khi việc thay đổi thành công.                              |
| fail       | Function     |          | Callback function khi việc thay đổi bất thành.                               |
| complete   | Function     |          | Callback function khi gọi API hoàn tất bất kể thành công hay thất bại.       |

## Sample Code

```js
my.setBackgroundTextStyle({ textStyle: 'light' });
```
