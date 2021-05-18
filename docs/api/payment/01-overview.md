---
title: Thanh Toán Với Tiki
---

## Giới Thiệu

Khi bạn là một Tini App chạy trên nền tảng của Tiki. Tiki Users sẽ sử dụng dịch vụ payment của Tiki để thanh toán cho sản phẩm/dịch vụ của bạn.

## Ưu Điểm khi Thanh Toán Với Tiki?

Nếu bạn là một công ty nhỏ, việc tích hợp với cổng thanh toán sẽ không phải là dễ dàng. Chưa kể để đảm bảo được bảo mật và trải nghiệm người dùng trong quá trình thanh toán không phải là việc đơn giản. Tiki đã có sẵn luồng thanh toán quen thuộc đối với user của Tiki, và Tiki cung cấp cho bạn dịch vụ payment để có thể sử dụng ngay thay vì phải tích hợp payment với một bên thứ 3.

## Tích Hợp Payment Như Thế Nào?

Trong thời điểm này, để sử dụng được luồng thanh toán thì bạn phải đăng ký trở thành nhà bán trên Tiki để có thể tiếp cận khách hàng. Cụ thể các bước như sau

### Setup Tài Khoản

1. Trước hết, để là một pháp nhân có thể nhận được tiền thanh toán từ user trên Tiki. Bạn cần phải có account với Seller Center. Đăng ký account Seller Center ở [đây](https://sellercenter.tiki.vn/new#/user/login)

1. Sau khi có account trên Seller Center. Bạn cần tạo một SKU cho các Tini App của bạn. (SKU này có thể sử dụng chung giữa các Tini App hoặc bạn cũng có thể tạo một SKU cho mỗi Tini App của bạn)

1. Đăng nhập vào [Developer Center](https://developers.tiki.vn/apps) và thực hiện các bước theo hướng dẫn để link account Seller Center của bạn vào Developer Center

### Setup Sản Phẩm

Sản phẩm trên sản Tiki và sản phẩm do đối tác Tini App cung cấp là hai dòng sản phẩm độc lập. Do đó, bạn cần phải đăng ký sản phẩm của bạn với platform Tini App trước khi đưa đến cho Tiki User. Bạn có 2 cách để tạo sản phẩm cho Tini App

- Dùng SKU bạn đăng ký ở bước trên và gọi [platform API](../open/platform-backend) để tạo sản phẩm
- Tạo sản phẩm ngay trên UI của [Developer Center](https://developers.tiki.vn/apps)

### Gọi API để Tạo Đơn Hàng

Có hai hướng để bạn có thể sử dụng payment của Tiki như sau

- Không Có Sự Tham Gia của Tini App Backend (**NOT** RECOMMENDED): Hướng này chỉ thích hợp cho các Tini App cung cấp dịch vụ với số lượng sản phẩm cố định và giá cố định. Nếu sản phẩm/dịch vụ của bạn không có giá cố định thì bạn phải sử dụng luồng tạo đơn hàng với API backend

- Có Sự Tham Gia của Tini App Backend (**HIGHLY** RECOMMENDED): Tham khảo [platform API](../open/platform-backend) để tạo đơn hàng từ backend

Sau khi tạo được đơn hàng bạn sẽ có một Order ID. Sử dụng Order ID để gọi [my.makePayment](make-payment) để mở màn hình thanh toán

### Nhận Backend IPN Sau Khi Khách Hàng Thanh Toán

Sau khi khách hàng hoàn tất quá trình thanh toán, Tiki platform sẽ gọi API của bạn để báo cho backend của bạn về kết quả của giao dịch. Việc gọi vào endpoint nào thì bạn cần phải setup trên [Developer Center](https://developers.tiki.vn/apps)

Payload của Tiki Call sẽ có dạng như sau:
`Todo`

**Chú ý**

- Nếu IPN URL của bạn là empty thì hệ thống platform sẽ hiểu rằng bạn không muốn nhận IPN và sẽ bỏ qua lệnh gọi này.
- IPN có thể được gọi vào backend của bạn nhiều hơn 1 lần cho cùng một order. Các bạn cần chú ý handle trường hợp này để không giao hàng nhiều lần cho khách hàng.

@Long: Chú ý là mình phải keep track error rate trên IPN này để có thể notify họ khi API họ có vấn đề.

### Truy Cập Thông Tin Đơn Hàng

Sử dụng Order ID để gọi vào [platform API](../open/platform-backend) lấy thông tin đơn hàng

### Thống Kê và Đối Soát

Liên hệ với [Seller Center](https://sellercenter.tiki.vn/new#/user/login) để có thông tin chi tiết. Tham khảo https://hocvien.tiki.vn/

### Tiki Thanh Toán

Liên hệ với [Seller Center](https://sellercenter.tiki.vn/new#/user/login) để có thông tin chi tiết. Tham khảo https://hocvien.tiki.vn/
