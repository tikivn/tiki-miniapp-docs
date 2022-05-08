---
title: my.setTabBarItem
---

`my.setTabBarItem` là API để thay đổi các thuộc tính của một Tab bar item, bao gồm: text, icon khi item ở trạng thái bình thường, và icon ở trạng thái được chọn (selected) 

## API Params

| Thuộc tính       | Kiểu dữ liệu | Bắt buộc | Mô tả                                                                                                                                                   |
| ---------------- | ------------ | :------: | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| index            | number       |     ✓    | Số thứ tự của item. Các item trên Tab bar được đánh số từ trái sang phải, bắt đầu bằng 0.                                                               |
| text             | string       |    ✓     | Text của TabBar item.                                                                                                                                   |
| iconPath         | string       |    ✓     | Đường dẫn của icon khi item bình thường (không được chọn). Nếu đường dẫn là ảnh local, thì cần truyền vào đường dẫn tuyệt đối. Ví dụ: `images/icon.png` |
| selectedIconPath | string       |    ✓     | Đường dẫn của icon khi item được chọn (selected). Nếu đường dẫn là ảnh local, thì cần truyền vào đường dẫn tuyệt đối                                    |
| success          | Function     |          | Callback function khi việc thay đổi thành công.                                                                                                         |
| fail             | Function     |          | Callback function khi việc thay đổi bất thành.                                                                                                          |
| complete         | Function     |          | Callback function khi gọi API hoàn tất bất kể thành công hay thất bại.                                                                                  |

## Sample Code

```js
my.setTabBarItem({
  index: 0,
  text: 'text',
  iconPath: '/image/iconPath',
  selectedIconPath: '/image/selectedIconPath'
});
```


