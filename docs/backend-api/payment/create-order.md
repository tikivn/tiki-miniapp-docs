---
title: Tạo đơn hàng
---

#### Thông tin HTTP

| Key          | Value                                |
| ------------ | ------------------------------------ |
| Content-Type | application/json                     |
| Method       | POST                                 |
| Base URL     | https://api.tiki.vn/tiniapp-open-api |
| Path         | /order                               |

Request gửi đi phải kèm chữ ký điện tử nhằm đảm bảo tính xác thực. Tham khảo [Cách tạo chữ ký điện tử](../platform-api/calculate-signature).

#### HTTP Request

| Thuộc tính       | Kiểu dữ liệu            | Bắt buộc | Mô tả                                                                                      |
| ---------------- | ----------------------- | :------: | ------------------------------------------------------------------------------------------ |
| customer_id      | string                  |    ✓     | ID người dùng Tiki, có thể lấy ở [đây](../exchange-auth-token#get-info-from-auth-token)    |
| items            | []**[Item](#item)**     |    ✓     | Danh sách sản phẩm                                                                         |
| shipping_address | **[Address](#address)** |    ✕     | Địa chỉ giao hàng, dùng để hiện thị trên trang thanh toán Tiki (phần thông tin khách hàng) |
| billing_address  | **[Address](#address)** |    ✕     | Địa chỉ thanh toán                                                                         |
| shipping_fee     | int64                   |    ✕     | Phí giao hàng                                                                              |
| extra            | string                  |    ✕     | Thông tin bổ sung theo định dạng  ***key=value;key=value***                                |
| reference_id     | string                  |    ✕     | ID đơn hàng của đối tác                                                                    |

#### Item

| Thuộc tính | Kiểu dữ liệu | Bắt buộc | Mô tả                                                       |
| ---------- | ------------ | :------: | ----------------------------------------------------------- |
| name       | string       |    ✓     | Tên sản phẩm                                                |
| sku        | string       |    ✓     | Mã sản phẩm ở được đăng ký trước ở Seller Center            |
| quantity   | int64        |    ✓     | Số lượng sản phẩm                                           |
| price      | int64        |    ✓     | Giá tiền sản phẩm                                           |
| extra      | string       |    ✕     | Thông tin bổ sung theo định dạng  ***key=value;key=value*** |

***Lưu ý***
> - Trong một đơn hàng, các item khác nhau thì phải có sku khác nhau.
> - Giá trị đơn hàng tối đa là mười triệu (10.000.000) đồng. Nếu muốn thay đổi thì cần yêu cầu ở [Tini Console](https://developers.tiki.vn/apps).
> - Khi đối tác tạo đơn hàng phía Tiki, không nhất thiết nó phải bao gồm toàn bộ SKU mà đối tác nhận đặt từ khách hàng; chỉ cần gồm 1 hay vài SKU để dại diện thanh toán. Điểm mấu chốt là giá trị đơn hàng phải chính xác.

#### Address

| Thuộc tính | Kiểu dữ liệu | Bắt buộc | Not Null | Mô tả                    |
| ---------- | ------------ | :------: | :------: | ------------------------ |
| name       | string       |    ✕     |    ✓     | Tên khách hàng           |
| phone      | string       |    ✕     |    ✓     | Số điện thoại khách hàng |
| email      | string       |    ✕     |    ✓     | Email khách hàng         |
| street     | string       |    ✕     |    ✓     | Địa chỉ khách hàng       |


Vi dụ về yêu cầu tạo đơn hàng

```
curl --location --request POST 'https://api.tiki.vn/tiniapp-open-api/order' \
--header 'Content-Type: application/json' \
--header 'X-Tiniapp-Client-Id: 8GXqhWDK3EppMwf8IyQU1GHgfq2TPADe' \
--header 'X-Tiniapp-Signature: a9c279edaa7845a88c63eaf7c87f89dceebbc96dbed5e1a2fc9c5ffad110ad00' \
--header 'X-Tiniapp-Timestamp: 1624552050667' \
--data-raw '{"customer_id":"100101547","items":[{"name":"Quyên góp quỹ vaccine phòng chống COVID-19","sku":"5202269287861","quantity":1,"price":1000,"extra":"field1=value1;field2=value2"}],"shipping_address":{"name":"Nguyen Van A","phone":"0900000000","email":"nguyenvana@tiki.vn","street":"285 Cách Mạng Tháng 8, quận 10, TPHCM"},"billing_address":{"name":"Nguyen Van A","phone":"0900000000","email":"nguyenvana@tiki.vn","street":"285 Cách Mạng Tháng 8, quận 10, TPHCM"},"reference_id":"16","extra":"field3=value3;field4=value4"}'
```

#### HTTP Response

[**Kết quả lỗi**](error-code)

| Thuộc tính | Kiểu dữ liệu        | Bắt buộc | Mô tả |
| ---------- | ------------------- | :------: | ----- |
| Data       | []**[Data](#data)** |    ✓     |       |

##### Data
| Thuộc tính | Kiểu dữ liệu        | Bắt buộc | Mô tả |
| ---------- | ------------------- | :------: | ----- |
| order      | **[Order](#order)** |    ✓     |       |

##### Order

| Thuộc tính      | Kiểu dữ liệu | Bắt buộc | Not Null | Mô tả                                                                                                                  |
| --------------- | ------------ | :------: | :------: | ---------------------------------------------------------------------------------------------------------------------- |
| id              | string       |    ✓     |    ✓     | ID của đơn hàng ở hệ thống Tini App. Nó đc sinh ra khi khách hàng tạo đơn hàng.                                        |
| status          | string       |    ✓     |    ✓     | [Trạng thái đơn hàng](order-status)                                                                                    |
| grand_total     | int64        |    ✓     |    ✓     | Tổng số tiền mà khách hàng dùng cần thanh toán                                                                         |
| tiki_order_id   | string       |    ✓     |    ✓     | ID của đơn hàng nằm ở hệ thống Tiki                                                                                    |
| tiki_order_code | string       |    ✓     |    ✓     | Mã đơn hàng nằm ở hệ thống Tiki dùng cho mục đích đối soát. Nó được sinh ra khi khách hàng thanh toán online đơn hàng. |

Ví dụ về dữ liệu trả về

```
{
  "data": {
    "order": {
      "id": "83429979421016087",
      "status": "draft",
      "grand_total": 25600
    }
  }
}
```

Khi khách hàng thanh toán bắt đầu thanh toán đơn hàng, JS API [my.makePayment](../../../api/open/make-payment.md) sẽ được dùng để mở màn hình thanh toán cho đơn hàng với tham số truyền vào là order ID.

