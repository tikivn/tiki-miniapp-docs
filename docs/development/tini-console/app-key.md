---
title: App Key / Value
---

Trong một số trường hợp, ứng dụng của bạn sẽ cần lưu trữ hoặc truy cập một số thông tin để sử dụng ở phía frontend nhưng cần đảm bảo những thông tin này không thể bị lộ ra bên ngoài.  Do đó, Tini App cung cấp mô hình lưu trữ key / value ngay trên Tini Console. Những thông tin được lưu trữ sẽ được mã hoá và chỉ được giải mã ở phía core của Tini App nên đảm bảo về độ bảo mật dữ liệu.

Để sử dụng tính năng này, bạn chỉ cần thiết lập các cặp key / value trong phần **Cấu hình tiện ích**    trên Tini Console và truy xuất chúng trong ứng dụng bằng API [my.getAppSecret](/docs/api/basic/get-app-secret).

## Tạo mới key / value cho ứng dụng

1. Truy cập vào [Tini Console](https://developer.tiki.vn/apps).
2. Sidebar menu >> **Tiện ích của bạn**.
3. Mở ứng dụng mà bạn muốn tạo key / value cho nó.
4. Sidebar menu >> **Cài đặt** >> **Tổng quát**.
5. Ở phần **Key / Value** thuộc **Cấu hình tiện ích**, bấm vào nút **Tạo mới**.
   <img src="/img/Key-Value.png" width="800px" alt="key value" style={{ margin: '0 auto', display: 'flex' }}/>
6. Trong popup **Tạo Key / Value** nằm bên phải, bạn gõ key và value vào các ô tương ứng. Sau đó, bấm nút tạo mới.
   <img src="/img/Key-Value_Create_popup.png" width="300px" alt="key value popup" style={{ margin: '0 auto', display: 'flex' }}/>

## Xoá key / value của ứng dụng

1. Truy cập vào Tini Console.
2. Sidebar menu >> **Tiện ích của bạn**.
3. Mở ứng dụng mà bạn muốn xoá key / value.
4. Sidebar menu >> **Cài đặt** >> **Tổng quát**.
5. Ở phần **Key / Value** thuộc **Cấu hình tiện ích**, bấm **Xoá** tương ứng với cặp key / value cần xoá. 

