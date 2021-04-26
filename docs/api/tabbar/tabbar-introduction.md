---
sidebar_position: 1
title: Giới thiệu
---

## Giới thiệu

Tiki Mini App cho phép lập trình viên có thể thay đổi cấu hình của tabBar trong khi app đang chạy.

Mini App có thể cấu hình Tab Bar với những trường

| Property        | Type     | Default Value | Description                                            |
| --------------- | -------- | ------------- | ------------------------------------------------------ |
| textColor       | HexColor | "#000000"     | Quy định màu sắc của text trong tab bar item.          |
| selectedColor   | HexColor | "#000000"     | Màu sắc của text trong tab bar item khi được lựa chọn. |
| backgroundColor | HexColor | "#FFFFFF"     | Màu nền của tab bar.                                   |
| items           | Array    | required      | Cấu hình từng item trong tab bar.                      |

Với mỗi tab bar item có thể cấu hình với các thuộc tính sau:

| Property   | Type   | Default Value | Description                                 |
| ---------- | ------ | ------------- | ------------------------------------------- |
| pagePath   | String | required      | Đường dẫn tới page.                         |
| name       | String | required      | Tên hiển thị của item.                      |
| icon       | String | null          | Đường dẫn tới icon khi item chưa được chọn. |
| activeIcon | String | null          | Đường dẫn tới icon khi item được chọn.      |

Để hiển thị tối ưu, bạn nên chọn hình cho icon với kích cỡ 60x60 px.
