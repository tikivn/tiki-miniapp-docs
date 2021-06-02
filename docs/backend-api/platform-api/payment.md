---
title: Thanh Toán Với Tiki
---

## Giới Thiệu

Khi bạn là một Tini App chạy trên nền tảng của Tiki. Tiki Users sẽ sử dụng dịch vụ payment của Tiki để thanh toán cho sản phẩm/dịch vụ của bạn.

## Tích Hợp Payment Như Thế Nào?

Để sử dụng được tính năng thanh toán thì bạn phải đăng ký trở thành nhà bán trên Tiki để có thể tiếp cận khách hàng. Cụ thể các bước như sau

### Tạo Tài Khoản

1. Trước hết, để là một pháp nhân có thể nhận được tiền thanh toán từ user trên Tiki. Bạn cần phải có account với Seller Center. Đăng ký account Seller Center ở [đây](https://sellercenter.tiki.vn/new/#/register)

1. Sau khi có account trên Seller Center. Bạn cần tạo SKUs để cho các Tini App sử dụng (SKU này có thể sử dụng chung giữa các Tini App hoặc bạn cũng có thể tạo một SKU cho mỗi Tini App của bạn)

1. Đăng nhập vào [Developer Center](https://developers.tiki.vn/apps) và thực hiện các bước theo hướng dẫn để link account Seller Center của bạn vào Developer Center

### Đăng Ký Sản Phẩm

Sản phẩm trên sản TMDT của Tiki và sản phẩm do đối tác cung cấp qua Tini App là hai dòng sản phẩm độc lập. Do đó, bạn cần phải đăng ký sản phẩm của bạn với platform Tini App. Bạn có 2 cách để đăng ký sản phẩm cho Tini App

- Đăng ký sản phẩm sử dụng [Developer Center](https://developers.tiki.vn/apps)
- Dùng SKU bạn đăng ký ở bước trên và gọi API `product_create` [platform API](../open-api/overview) để tạo sản phẩm

### Gọi API để Tạo Đơn Hàng

Có hai trường hợp để bạn có thể sử dụng payment của Tiki như sau

- Không Có Sự Tham Gia của Tini App Backend (**NOT** RECOMMENDED): Hướng này chỉ thích hợp cho các Tini App cung cấp dịch vụ với số lượng sản phẩm cố định và giá cố định.

- Có Sự Tham Gia của Tini App Backend (**HIGHLY** RECOMMENDED): Tham khảo [platform API](../open-api/overview) để tạo đơn hàng từ backend

Sau khi tạo được đơn hàng bạn sẽ có một Order ID, bạn có thể gọi JS API [my.makePayment](make-payment) để mở màn hình thanh toán cho đơn hàng

### Nhận Backend IPN Sau Khi Khách Hàng Thanh Toán

Sau khi khách hàng hoàn tất quá trình thanh toán, Tiki platform sẽ gọi backend API của bạn để thông báo về kết quả của giao dịch. Bạn có thể thiết lập URL mà bạn muốn Tiki Platform gọi ở [Developer Center](https://developers.tiki.vn/apps)

**Chú ý**

- Nếu IPN URL của bạn là empty thì Tiki platform sẽ hiểu rằng bạn không muốn nhận IPN.
- IPN có thể được gọi vào backend của bạn nhiều hơn 1 lần cho cùng một order. Bạn cần chú ý xử lý trường hợp này để không xác nhận một đơn hàng nhiều lần.

### Truy Cập Thông Tin Đơn Hàng

Sử dụng Order ID để gọi vào [platform API](../open-api/overview) lấy thông tin đơn hàng

### Thống Kê và Đối Soát

Liên hệ với [Seller Center](https://sellercenter.tiki.vn/new#/user/login) để có thông tin chi tiết. Tham khảo https://hocvien.tiki.vn/

### Tiki Thanh Toán

Liên hệ với [Seller Center](https://sellercenter.tiki.vn/new#/user/login) để có thông tin chi tiết. Tham khảo https://hocvien.tiki.vn/
