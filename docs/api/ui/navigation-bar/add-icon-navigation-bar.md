---
title: my.addIconsToNavigationBar
---

**my.setNavigationBar** là API để thêm icons vào navigation bar bên cạnh nút ba chấm nằm ngang (⋯) mở menu.

<img src="/img/Add_Icon_to_NavigationBar.jpg" width="400px" alt="Simulation Widget" style={{ margin: '0 auto', display: 'flex' }}/>

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/add-to-cart/index" />

## API Params

| Thuộc tính    | Kiểu dữ liệu     | Bắt buộc | Mô tả                                                                 |
| ------------- | ---------------- | :------: | --------------------------------------------------------------------- |
| icons         | Array of objects |    ✓     | Danh sách các icons thêm vào navigation bar.                          |
| padding       | number           |          | Khoảng cách giữa các icons.                                           |
| titleBarColor | HexColor         |          | Màu nền của navigation bar. Đơn vị tính pixel.                        |
| success       | Function         |          | Callback function thi thêm icon khi thành công.                       |
| fail          | Function         |          | Callback function khi thêm icon bất thành.                            |
| complete      | Function         |          | Callback function khi hoàn tất tác vụ bất kể thành công hay thất bại. |

### Các thuộc tính của icon

| Thuộc tính | Kiểu dữ liệu | Bắt buộc | Mô tả                                                              |
| ---------- | ------------ | :------: | ------------------------------------------------------------------ |
| image      | string       |    ✓     | Đường dẫn đến hình ảnh của icon. Có thể là remote link hoặc local. |
| width      | number       |          | Chiều rộng của icon. Mặc định là 24px.                             |
| height     | number       |          | Chiều dài của icon. Mặc định là 24px.                              |
| badge      | string       |          | Nội dung của badge hiển thị trên icon.                             |

## Sample Code

```js
Page({
  setNavigationBar(e) {
    my.addIconsToNavigationBar({
      icons: [
        {
          image: '/images/cart.png',
          width: 25,
          height: 25,
          badge: `${this.data.quantity}`
        }
      ],
      padding: 10,
      success: (res) => {
        console.log(res);
      },
      fail: (res) => {
        console.log(res);
      }
    });
  }
});
```
