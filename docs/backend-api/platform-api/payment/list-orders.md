---
title: Lấy danh sách thông tin đơn hàng
---

#### Thông tin HTTP

| Key          | Value                                |
| ----------   | --------                             |
| Content-Type | application/json                     |
| Method       | GET                                  |
| Base URL     | https://api.tiki.vn/tiniapp-open-api |
| Path         | /order                               |

#### Parameters

| Key        | Description                                             |
| ---------- | --------                                                |
| order_ids  | Danh sách của ID đơn hàng, tối đa 100, ngăn cách nhau bằng dấu phẩy (**,**) |

**Cần tạo [chữ ký điện tử](../calculate-signature.md) khi gửi request**

Vi dụ về yêu cầu lấy thông tin đơn hàng

```
curl --location --request GET 'https://api.tala.xyz/tiniapp-open-api/order?order_ids=88062110977884170,88062110977884171' \
--header 'X-Tiniapp-Client-Id: 8GXqhWDK3EppMwf8IyQU1GHgfq2TPADe' \
--header 'X-Tiniapp-Signature: aa3cea0d29a16e12b903205284a09161738740c357d5b06639f930806757f6a7' \
--header 'X-Tiniapp-Timestamp: 1624561365102'
```

#### HTTP Response

[**Kết quả lỗi**](error-code)

| Attribute  | Type                | Required   | Description |
| ---------- | ------------------- | ---------- | ----------  |
| Data       | []**[Data](#data)** | Yes        |             |

##### Data
| Attribute  | Type                                 | Required   | Description |
| ---------- | ------------------------------------ | ---------- | ----------  |
| orders     | []**[Order](create-order#order)**    | Yes        |             |

Ví dụ về dữ liệu trả về

```
{
  "data": {
    "orders": [
      {
        "id": "77062110977884170",
        "status": "canceled",
        "grand_total": 1000
      },
      {
        "id": "77062110977884171",
        "status": "completed",
        "grand_total": 100000
      }
    ]
  }
}
```