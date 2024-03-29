---
title: Xử lý kết quả thanh toán
---

Sau khi khách hàng thanh toán trực tuyến trên Tiki, chúng tôi thực hiện hàm callback mà đối tác đăng ký khi gọi [my.makePayment](/docs/api/open/make-payment).
Đồng thời, chúng tôi còn gửi một IPN message đến backend của phía đối tác.

:::important Quan trọng

- Nếu khách hàng chọn phương thức COD (Thanh toán tiền mặt khi nhận hàng), thì Tiki sẽ không gởi IPN message đến backend của đối tác.
- Khi thanh toán thành công, IPN sẽ được gởi ngay lập tức với status `online_paid`
- Khi thanh toán thất bại, IPN sẽ được gởi với trạng thái `canceled` trong hai trường hợp sau:
  - Khách hàng tới màn hình thanh toán và click huỷ thanh toán: IPN sẽ được gởi ngay lập tức
  - Khách hàng tới màn hình thanh toán và tắt app hoặc không làm gì cả: IPN sẽ được gởi sau đó 4 tiếng 
:::

## IPN - Instant Payment Notification

Chúng tôi sẽ sử dụng Postback Url mà đối tác cung cấp lúc đăng ký chức năng thanh toán với Tiki ở [Tini Console](https://developers.tiki.vn/apps) để gửi một HTTP request với thông tin như sau:

### Thông tin HTTP

| Key          | Value              |
| ------------ | ------------------ |
| Content-Type | application/json   |
| Method       | POST               |
| URL          | _**postback url**_ |

### HTTP Request

| Thuộc tính         | Kiểu dữ liệu        | Mô tả                                                                    |
| ------------------ | ------------------- | ------------------------------------------------------------------------ |
| message_id         | string              | Định danh duy nhất của tin nhắn                                          |
| message_type       | string              | Mặc định là _**notification**_ cho tin nhắn thông báo kết quả thanh toán |
| message_created_at | string              | Thời gian gửi tin nhắn (format RFC3339)                                  |
| order              | **[Order](#order)** | Thông tin đơn hàng                                                       |

### Order

| Thuộc tính      | Kiểu dữ liệu | Bắt buộc | Not Null | Mô tả                                                      |
| --------------- | ------------ | :------: | :------: | ---------------------------------------------------------- |
| id              | string       |    ✓     |    ✓     | ID của đơn hàng                                            |
| status          | string       |    ✓     |    ✓     | [Trạng thái đơn hàng](order-status)                        |
| grand_total     | int64        |    ✓     |    ✓     | Tổng số tiền mà người dùng cần thanh toán                  |
| tiki_order_id   | string       |    ✓     |    ✓     | ID của đơn hàng nằm ở hệ thống Tiki                        |
| tiki_order_code | string       |    ✓     |    ✓     | Mã đơn hàng nằm ở hệ thống Tiki                            |
| extra           | string       |    ✕     |    ✓     | Thông tin bổ sung theo định dạng **_key=value;key=value_** |
| reference_id    | string       |    ✕     |    ✓     | ID đơn hàng của đối tác                                    |

Vi dụ về IPN message request

```
curl --location --request POST 'https://partner.example.com/payment/ipn' \
--header 'Content-Type: application/json' \
--header 'X-Tiniapp-Client-Id: 8GXqhWDK3EppMwf8IyQU1GHgfq2TPADe' \
--header 'X-Tiniapp-Signature: a9c279edaa7845a88c63eaf7c87f89dceebbc96dbed5e1a2fc9c5ffad110ad00' \
--header 'X-Tiniapp-Timestamp: 1624552050667' \
--data-raw '{
  "order": {
    "id": "141857488587784201",
    "extra": "",
    "status": "canceled",
    "grand_total": 35000,
    "reference_id": "0",
    "tiki_order_id": "1001059779",
    "tiki_order_code": "308714458"
  },
  "message_id": "141939182305017886",
  "message_type": "notification",
  "message_created_at": "2021-12-27T21:19:33+07:00"
}'
```

## Gửi lại IPN message

Chúng tôi sẽ gửi lại IPN message khi:

- Kết quả trả về có HTTP status codes từ 500 đến 599
- Hơn 15 giây không trả về kết quả
- Xảy lỗi về kết nối mạng

Thời gian gửi lại lần lượt sẽ là: 1 phút -> 5 phút -> 30 phút -> 60 phút -> 6 giờ -> 12 giờ -> 24 giờ.

## Kiểm tra toàn vẹn dữ liệu

Dữ liệu có thể bị thay đổi trên đường truyền giữa hai hệ thống **Tiki** và **đối tác** khi giao tiếp qua đường truyền mạng, dẫn đến thông tin giao dịch có thể bị sai lệch, đặc biệt là số tiền thanh toán và kết quả giao dịch.

**Giải pháp**

- Để đảm bảo thông tin giao dịch chính xác và đầy đủ, đối tác cần KIỂM TRA [chữ ký điện tử](../platform-api/calculate-signature) mỗi lần nhận IPN message từ Tiki.
- Sử dụng request [lấy thông tin một đơn hàng](get-order), hoặc [lấy thông tin nhiều đơn hàng](list-orders) để kiểm tra trạng thái giao dịch trước khi cập nhật.
- Luôn sử dụng IPN message để xử lý kết quả giao dịch. Khắc phục trường hợp khi thanh toán app Tiki bị đóng bất ngờ.
- Vì phụ thuộc vào đường truyền mạng và hệ thống, có khả năng IPN message bị gửi chậm hoặc một message bị gửi nhiều lần. Do đó, đối tác cần dựa vào 2 trường `message_id` và `message_created_at` nhằm tránh 1 message được xử lý nhiều lần hay xử lý sai thứ tự.
