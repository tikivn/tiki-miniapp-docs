---
title: my.setTabBarBadge
---

`my.setTabBarBadge` là API để dùng để thêm badge text vào một Tab bar item.

Badge là một vòng tròn màu đỏ xuất hiện ở góc phải trên của icon trên thiết bị di động, có chức năng báo cho người dùng biết số lượng tin nhắn chưa đọc, thông báo mới (notification), tin nhắn chat, nhắc báo, … .

## API Params

| Thuộc tính | Kiểu dữ liệu | Bắt buộc | Mô tả                                                                                                                     |
| ---------- | ------------ | :------: | ------------------------------------------------------------------------------------------------------------------------- |
| index      | number       |    ✓     | Số thứ tự của item mà bạn muốn thêm badge text vào. Các item trên Tab bar được đánh số từ trái sang phải, bắt đầu bằng 0. |
| text       | string       |    ✓     | Badge text                                                                                                                |
| success    | Function     |          | Callback function khi thành công.                                                                                         |
| fail       | Function     |          | Callback function khi thất bại.                                                                                           |
| complete   | Function     |          | Callback function khi hoàn tất tác vụ cho dù thành công hay thất bại.                                                     |


## Sample Code

```js
my.setTabBarBadge({
  index: 0,
  text: 10
});
```
