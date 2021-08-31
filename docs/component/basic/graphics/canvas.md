---
title: canvas
---
Canvas là một vùng hình chữ nhật phục vụ cho mục đích chứa đồ hoạ. Theo mặc định, nó không có đường viền cũng như nội dung; bạn sẽ sử dụng JavaScript để kết xuất đồ hoạ.

## Thuộc tính

| Thuộc tính     | Kiểu dữ liệu | Giá trị mặc định | Mô tả                                                                                 |
| -------------- | ------------ | ---------------- | ------------------------------------------------------------------------------------- |
| id             | string       |                  | Định danh duy nhất của canvas                                                         |
| style          | string       |                  |                                                                                       |
| class          | string       |                  |                                                                                       |
| width          | number       | 300              | Chiều rộng của canvas                                                                 |
| height         | number       | 225              | Chiều cao của canvas                                                                  |
| disable-scroll | boolean      | false            | Không cho canvas scroll                                                               |
| type           | string       |                  | Kiểu Render đồ hoạ - 2d hay webgl.                                                    |
| onTap          | event        |                  | Sự kiện được kích hoạt khi touch vào canvas                                           |
| onTouchStart   | event        |                  | Sự kiện được kích hoạt khi ngón tay bắt đầu touch vào canvas.                         |
| onTouchMove    | event        |                  | Sự kiện được kích hoạt khi ngón tay di chuyển trên canvas.                            |
| onTouchEnd     | event        |                  | Sự kiện được kích hoạt khi ngón tay rút khỏi canvas.                                  |
| onTouchCancel  | event        |                  | Sự kiện được hoạt khi hành động touch bị gián đoạn bởi một cuộc gọi hay popup window. |
| onLongTap      | event        |                  | Sự kiện được kích hoạt khi thời gian ngón tay nhấn vào canvas lâu hơn 500 mili giây.  |
| onReady        | event        |                  | Sự kiện được kích hoạt khi canvas được khởi tạo thành công và sẵn sàng hoạt động.     |

## Sample Code
