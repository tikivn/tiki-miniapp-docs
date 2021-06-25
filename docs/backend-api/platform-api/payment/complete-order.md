---
title: Hoàn thành đơn hàng
---

#### Thông tin HTTP

| Key          | Value                                |
| ----------   | --------                             |
| Content-Type | application/json                     |
| Method       | POST                                 |
| Base URL     | https://api.tiki.vn/tiniapp-open-api |
| Path         | /order/complete                      |

**Cần tạo [chữ ký điện tử](../calculate-signature.md) khi gửi request**

#### HTTP Request

| Attribute  | Type       | Required   | Description          |
| ---------- | ---------- | ---------- | ----------           |
| order_id   | string     | Yes        | ID của đơn hàng      |
| comment    | string     | Yes        | Ghi chú cho đơn hàng |


Vi dụ về yêu cầu hoàn thành đơn hàng

```
curl --location --request POST 'https://api.tiki.vn/tiniapp-open-api/order/complete' \
--header 'Content-Type: application/json' \
--header 'X-Tiniapp-Client-Id: 8GXqhWDK3EppMwf8IyQU1GHgfq2TPADe' \
--header 'X-Tiniapp-Signature: 43bb41cb0d18eca77d4990baaddb5d7c1a1b058e97eb3a170b0abd9a8f6c87b8' \
--header 'X-Tiniapp-Timestamp: 1624558318419' \
--data-raw '{"order_id":"88062110977884170","comment":"Giao hàng thành công"}'
```

#### HTTP Response

[**Kết quả lỗi**](error-code)

| Attribute  | Type                | Required   | Description |
| ---------- | ------------------- | ---------- | ----------  |
| Data       | []**[Data](#data)** | Yes        |             |

##### Data
| Attribute  | Type                                 | Required   | Description |
| ---------- | ------------------------------------ | ---------- | ----------  |
| order      | **[Order](create-order#order)**    | Yes        |             |

Ví dụ về dữ liệu trả về

```
{
  "data": {
    "order": {
      "id": "88062110977884170",
      "status": "completed",
      "grand_total": 1000
    }
  }
}
```