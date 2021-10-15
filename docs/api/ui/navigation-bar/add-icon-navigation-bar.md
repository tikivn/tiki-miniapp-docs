---
title: my.addIconsToNavigationBar
---

## Giới thiệu

**my.setNavigationBar** là API để thêm icons vào navigation bar sát bên option menu.

## Sử dụng

### Sample Code

```js
Page({
  setNavigationBar(e) {
    my.addIconsToNavigationBar({
      icons: [
        {
          image: '/images/cart.png',
          width: 25,
          height: 25,
          badge: `${this.data.quantity}`,
        },
      ],
      padding: 10,
      success: (res) => {
        console.log(res);
      },
      fail: (res) => {
        console.log(res);
      },
    });
  },
});
```

### API Params

| Attributes        | Type     | Required | Description                    |
| ----------------- | -------- | -------- | ------------------------------ 
| icons             | Array    |    ✓     | Mảng các icons cần add vào navigation bar.                  |
| padding           | Number   |          | Padding giữa các icons                                      |
| titleBarColor     | HexColor |          | Background color của Navigation                             |
| success           | Function |          | Callback function khi thành công.                           |
| fail              | Function |          | Callback function khi thất bại.                             |
| complete          | Function |          | Callback function khi hoàn tất tác vụ cho dù thành công hay thất bại.                               |

### Icons Attribute
Các thuộc tính của object icon

| Attributes   | Type     | Required | Description                                   |
| ----------   | -------- | ---------| --------------------------------------------- |
| image        | string   |   ✓      | Đường dẫn của image. Có thể là link remote hoặc local    |
| width        | number   |          | Chiều rộng của icon. Mặc định là 24px    |
| height       | number   |          | Chiều dài của icon. Mặc định là 24px     |
| badge        | string   |          | Text của badge nếu muốn hiển thị badge   |