---
title: Xử lý kết quả thanh toán
---

Sau khi khách hàng thanh toán trên Tiki, chúng tôi thực hiện hàm callback được đăng ký khi phía đối tác gọi [my.makePayment](../../../api/payment/make-payment.md)
Ngoài ra chúng tôi sẽ gửi một IPN message đến backend của phía đối tác

### IPN - Instant Payment Notification
Chúng tôi sẽ sử dụng _**postback url**_ được cài đặt khi đăng ký chức năng thanh toán với Tiki ở [Developer Center](https://developers.tiki.vn/apps) để gửi một HTTP request với thông tin như sau

#### Thông tin HTTP

| Key          | Value              |
| ----------   | --------           |
| Content-Type | application/json   |
| Method       | POST               |
| URL          | _**postback url**_ |


#### HTTP Request

| Attribute          | Type                | Description                                                              |
| ----------         | ----------          | ----------                                                               |
| message_id         | string              | ID của message, dùng để phân biệt các tin nhắn khác nhau                 |
| message_type       | string              | Mặc định là _**notification**_ cho tin nhắn thông báo kết quả thanh toán |
| message_created_at | string              | Thời gian gửi message (format RFC3339)                                   |
| order              | **[Order](#order)** | Thông tin đơn hàng                                                       |


#### Order

| Attribute   | Type       | Required   | Not null   | Description                               |
| ----------  | ---------- | ---------- | ---------- | ----------                                |
| id          | string     | Yes        | Yes        | ID của đơn hàng                           |
| status      | string     | Yes        | Yes        | [Trang thái đơn hàng](order-status)    |
| grand_total | int64      | Yes        | Yes        | Tổng số tiền mà người dùng cần thanh toán |


Vi dụ về IPN message request

```
curl --location --request POST 'https://partner.example.com/payment/ipn' \
--header 'Content-Type: application/json' \
--header 'X-Tiniapp-Client-Id: 8GXqhWDK3EppMwf8IyQU1GHgfq2TPADe' \
--header 'X-Tiniapp-Signature: a9c279edaa7845a88c63eaf7c87f89dceebbc96dbed5e1a2fc9c5ffad110ad00' \
--header 'X-Tiniapp-Timestamp: 1624552050667' \
--data-raw '{
  "order": {
    "id": "87452048840261656",
    "status": "canceled",
    "grand_total": 50000
  },
  "message_type": "notification",
  "message_id": "87461805848264725",
  "message_created_at": "2021-06-22T23:27:29+07:00"
}'
```

#### Gửi lại IPN message
Chúng tôi sẽ gửi lại IPN message khi:
+ Kết quả trả về có HTTP status codes từ 500 đến 599
+ Hơn 15 giây không trả về kết quả
+ Có lỗi về kết nối mạng
    
Lần thứ nhất gửi lại sau: 1m -> 5m -> 30m -> 60m -> 6h -> 12h -> 24h

#### Kiểm tra toàn vẹn dữ liệu

Dữ liệu có thể bị thay đổi trên đường truyền giữa hai hệ thống **Tiki** và **đối tác** khi giao tiếp qua đường truyền mạng, dẫn đến thông tin giao dịch có thể bị sai lệch:
+ Số tiền được thanh toán
+ Kết quả giao dịch
    

##### Lưu ý
+ Để đảm bảo thông tin giao dịch không thể bị thay đổi, đối tác cần phải **luôn luôn** kiểm tra [chữ ký điện tử](../calculate-signature.md) khi nhận IPN message từ **Tiki**

+ Sử dụng API [get order](get-order), [list orders](list-orders) để kiểm tra trạng thái giao dịch trước khi cập nhật.

+ Luôn sử dụng IPN message để xử lý kết quả giao dịch. Khắc phục trường hợp khi thanh toán app Tiki bị đóng bất ngờ

+ Vì phụ thuộc vào đường truyền mạng và hệ thống, IPN messages có thể được gửi chậm hoặc nhiều lần cho cùng một message,
 đối tác cần dựa vào 2 trường _**message_id**_ và _**message_created_at**_ để tránh xử lý 1 message nhiều lần và xử lý sai thứ tự