---
title: my.setTabBarItem
---

## Giới thiệu

**my.setTabBarItem** là API để set lại text, icon, highlight icon cho 1 tab item

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
| iconPath         | String   | Yes      | Đường dẫn của icon. Nếu đường dẫn là ảnh local, thì cần truyền vào đường dẫn tuyệt đối tới ảnh ví dụ: `images/icon.png` |
| selectedIconPath | String   | Yes      | Đường dẫn của icon. Nếu đường dẫn là ảnh local, tthì cần truyền vào đường dẫn tuyệt đối tới ảnh ví dụ: `images/icon_hl.png` |
| success          | Function | No       | Callback function khi thành công.                                                         |
| fail             | Function | No       | Callback function khi thất bại.                                                           |
| complete         | Function | No       | Callback function khi hoàn tất tác vụ cho dù thành công hay thất bại.                     |
