---
title: Tích hợp thanh toán cho Tini App

---

## Yêu cầu Tiki mở tính năng thanh toán cho Tini App của bạn

1. Truy cập vào [Tini Console](https://developer.tiki.vn/apps).
2. Sidebar menu >>  **Tiện ích của bạn**.
3. Mở ứng dụng mong muốn.
4. Sidebar menu >> **Cài đặt** >> **Thanh toán**.
5. Bấm nút **Gửi yêu cầu mở tính năng** trong phần Production để yêu cầu Tiki bật tính năng thanh toán cho ứng dụng của bạn.

<img style={{ margin: '0 auto', display: 'flex' }} width="600px" src="/img/Payment_Feature_Request.png" alt="Yêu cầu duyệt"/>

Một khi Tính năng thanh toán của ứng dụng được bật lên. Giao diện trang **Thanh toán** sẽ như hình dưới đây.

<img style={{ margin: '0 auto', display: 'flex' }} width="600px" src="/img/Payment_Feature_Enabled.png" alt="Đã mở tính năng thanh toá"/>

## Thiết lập thông tin thanh toán cho ứng dụng

Việc cài đặt thông tin thanh toán của một ứng dụng sẽ được thực hiện trên trang Thanh toán của ứng dụng đó, tại Tini Console. 

Sau đây là ý nghĩa các thông số:

- **Sandbox**: môi trường dùng để kiểm thử việc thanh toán.
- **Production**: áp dụng cho việc thanh toán thực thụ.
  - **IPN Callback URL**: URL backend của ứng dụng để nhận thông báo trạng thái thanh toán của đơn hàng từ hệ thống của Tiki.
  - **Gửi mail**: cho phép Tiki gửi email xác nhận thanh toán thành công đến khách hàng. 
  - **SKU**: nhập SKU đã được duyệt trên Seller Center.
- **Phương thức thanh toán**: chọn các phương thức thanh toán mà ứng dụng muốn hỗ trợ. 