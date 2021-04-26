---
title: my.setTabBarItem (chưa ready)
---

## Giới thiệu

**my.setTabBarBadge** là API để bỏ đi badge text cho một Tab Bar Item

## Sử dụng

### Sample Code

```js
my.setTabBarItem({
  index: 0,
  text: 'text',
  iconPath: '/image/iconPath',
  selectedIconPath: '/image/selectedIconPath'
});
```

### API Params

| Attributes       | Type     | Required | Description                                                                               |
| ---------------- | -------- | -------- | ----------------------------------------------------------------------------------------- |
| index            | Number   | yes      | Index của tab page, tính từ 0, và từ trái qua phải.                                       |
| text             | String   | yes      | Text của TabBar Item                                                                      |
| iconPath         | String   | Yes      | Đường dẫn của icon. Nếu đường dẫn là anh local, thì ảnh này cần phải được import trước đó |
| selectedIconPath | String   | Yes      | Đường dẫn của icon. Nếu đường dẫn là anh local, thì ảnh này cần phải được import trước đó |
| success          | Function | No       | Callback function khi thành công.                                                         |
| fail             | Function | No       | Callback function khi thất bại.                                                           |
| complete         | Function | No       | Callback function khi hoàn tất tác vụ cho dù thành công hay thất bại.                     |
