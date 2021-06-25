---
title: Tạo đơn hàng
---

#### Thông tin HTTP

| Key          | Value                                |
| ----------   | --------                             |
| Content-Type | application/json                     |
| Method       | POST                                 |
| Base URL     | https://api.tiki.vn/tiniapp-open-api |
| Path         | /order                               |

**Cần tạo [chữ ký điện tử](../calculate-signature.md) khi gửi request**

#### HTTP Request

| Attribute        | Type                    | Required   | Description                                                    |
| ----------       | ----------              | ---------- | ----------                                                     |
| customer_id      | string                  | Yes        | ID người dùng Tiki                                             |
| items            | []**[Item](#item)**     | Yes        | Danh sách sản phẩm                                             |
| shipping_address | **[Address](#address)** | No         | Địa chỉ giao hàng, dùng để hiện thỉ trên trang thanh toán Tiki |
| billing_address  | **[Address](#address)** | No         | Địa chỉ thanh toán                                             |
| extra            | string                  | No         | Thông tin bổ sung theo định dạng  ***key=value;key=value***    |
| reference_id     | string                  | No         | ID đơn hàng của đối tác                                        |

#### Item

| Attribute  | Type       | Required   | Description                                                 |
| ---------- | ---------- | ---------- | ----------                                                  |
| name       | string     | Yes        | Tên sản phẩm                                                |
| sku        | string     | Yes        | Mã sản phẩm ở được đăng ký trước ở Seller Center            |
| quantity   | int64      | Yes        | Số lượng sản phẩm                                           |
| price      | int64      | Yes        | Giá tiền sản phẩm                                           |
| extra      | string     | No         | Thông tin bổ sung theo định dạng  ***key=value;key=value*** |

##### Lưu ý
    1. Trong một đơn hàng, các items khác nhau thì phải có sku khác nhau
    2. Giá trị đơn hàng tối đa là mười triệu (10000000) đồng, nếu muốn thay đổi thì cần yêu cầu ở [Developer Center](https://developers.tiki.vn/apps)

#### Address

| Attribute  | Type       | Required   | Not null   | Description   |
| ---------- | ---------- | ---------- | ---------- | ----------    |
| name       | string     | No         | Yes        | Tên           |
| phone      | string     | No         | Yes        | Số điện thoại |
| email      | string     | No         | Yes        | Địa chỉ email |
| street     | string     | No         | Yes        | Địa chỉ       |


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

| Attribute  | Type                | Required   | Description |
| ---------- | ------------------- | ---------- | ----------  |
| Data       | []**[Data](#data)** | Yes        |             |

##### Data
| Attribute  | Type                                 | Required   | Description |
| ---------- | ------------------------------------ | ---------- | ----------  |
| order      | **[Order](#order)** | Yes        |             |

##### Order

| Attribute   | Type       | Required   | Not null   | Description                               |
| ----------  | ---------- | ---------- | ---------- | ----------                                |
| id          | string     | Yes        | Yes        | ID của đơn hàng                           |
| status      | string     | Yes        | Yes        | [Trang thái đơn hàng](order-status)    |
| grand_total | int64      | Yes        | Yes        | Tổng số tiền mà người dùng cần thanh toán |

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

Sau khi tạo được đơn hàng bạn sẽ có một Order ID, bạn có thể gọi JS API [my.makePayment](../../../api/payment/make-payment.md) để mở màn hình thanh toán cho đơn hàng
