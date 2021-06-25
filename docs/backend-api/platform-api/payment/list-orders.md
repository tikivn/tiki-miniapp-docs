---
title: Lấy danh sách thông tin đơn hàng
---

#### Thông tin HTTP

| Key          | Value                                |
| ----------   | --------                             |
| Content-Type | application/json                     |
| Method       | GET                                  |
| Base URL     | https://api.tiki.vn/tiniapp-open-api |
| Path         | /order/list                               |

#### Parameters

| Key        | Description                                             |
| ---------- | --------                                                |
| order_ids  | Danh sách của ID đơn hàng, tối đa 100, ngăn cách nhau bằng dấu phẩy (**,**) |

**Cần tạo [chữ ký điện tử](../calculate-signature.md) khi gửi request**

Vi dụ về yêu cầu lấy thông tin đơn hàng

```
curl --location --request GET 'https://api.tala.xyz/tiniapp-open-api/order/list?order_ids=84112926079713300%2C88238130968199168' \
--header 'Content-Type: application/json' \
--header 'X-Tiniapp-Client-Id: 8GXqhWDK3EppMwf8IyQU1GHgfq2TPADe' \
--header 'X-Tiniapp-Signature: 4d7bf4bc83e3e9884ce7ebfb1b2477aca66d40188df2de26053f59fe1067f4d3' \
--header 'X-Tiniapp-Timestamp: 1624613199164'
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
        "id": "84112926079713300",
        "status": "completed",
        "grand_total": 220000
      },
      {
        "id": "88238130968199168",
        "status": "completed",
        "grand_total": 1000
      }
    ]
  }
}
```