## Backend

### Vì sao phải cần auth code ?

Việc sử dụng access token thông thường sẽ có bảo mật không tốt và dễ dẫn đến tình trạng lộ thông tin tài khoản của users.

> :pushpin: [Xem thêm](/docs/backend-api/platform-api/auth-code)

### Vì sao cần tạo Tini Order ?

Nhắc đến Tini App là nhắc đến Tiki - một sàn thương mại điện tử có tầm cỡ. Cho nên chả có gì đáng ngạc nhiên khi nền tảng mini program này hỗ trợ tối đa các đối tác trong việc bán hàng trên ứng dụng của mình.

Nói ngắn gọn, đối tác xây dựng ứng dụng; tích hợp sản phẩm vào ứng dụng. Các sản phẩm sẽ tự động được tạo ra trên Seller Center cho mục đích sao kê, đối soát.

Về phía người dùng Tiki, họ chỉ cần mở ứng dụng từ Kho tiện ích của Tiki App là họ có thể thoải mái đặt hàng. Họ sẽ thanh toán thông qua dịch vụ payment của Tiki.

Có thể hiểu rằng, ứng dụng của bạn chưa có dịch vụ thanh toán thì việc "mượn" dịch vụ thanh toán của tiki là một giải pháp cực kỳ hiểu quả. Tuy nhiên để tiki có thể thực hiện thanh toán, sao kê, đối soát và trả tiền từ những thanh toán của users cho ứng dụng dịch vụ, sản phẩm của đối tác về cho đối tác thì cần có một cơ sở để làm được điều này, ở đây chính là các Tini Order.

Vì vậy, khi users tạo order trên ứng dụng Mini App của đối tác thì ngoài việc tạo một order riêng trong hệ thống của đối tác, đối tác cần phải tạo thêm một Tini Orders.

> :pushpin: [Xem thêm](/docs/backend-api/payment/overview)

### Khi khách hàng thanh toán thành công, hủy thanh toán thì backend của đối tác có được biết không ?

Khi khách hàng thanh toán thành công, hủy thanh toán thì backend của đối tác có hoàn toàn có thể biết được thông qua IPN - Instant Payment Notification.

Đối tác có có thể hiểu đây chính là webhook mà đối tác cung cấp để Tiki có thể gửi trạng thái thanh toán của khách hàng về cho backend của phía đối tác.

Lưu ý rằng, để đối tác có thể biết IPN gửi cho đối tác thuộc về tiki order nào thì đối tác cần phải lưu tiki_order_id trong cơ sở dữ liệu của mình.
