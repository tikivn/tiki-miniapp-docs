---
title: Hoàn thành đơn hàng
---

#### Thông tin HTTP

| Key          | Value                                |
| ------------ | ------------------------------------ |
| Content-Type | application/json                     |
| Method       | POST                                 |
| Base URL     | https://api.tiki.vn/tiniapp-open-api |
| Path         | /order/complete                      |

Request gửi đi phải kèm chữ ký điện tử nhằm đảm bảo tính xác thực. Tham khảo [Cách tạo chữ ký điện tử](../calculate-signature.md)

#### HTTP Request

| Thuộc tính | Kiểu dữ liệu | Bắt buộc | Mô tả                |
| ---------- | ------------ | :------: | -------------------- |
| order_id   | string       |    ✓     | ID của đơn hàng      |
| comment    | string       |    ✓     | Ghi chú cho đơn hàng |


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

| Thuộc tính | Kiểu dữ liệu        | Bắt buộc | Mô tả |
| ---------- | ------------------- | :------: | ----- |
| Data       | []**[Data](#data)** |    ✓     |       |

##### Data
| Thuộc tính | Kiểu dữ liệu                    | Bắt buộc | Mô tả |
| ---------- | ------------------------------- | :------: | ----- |
| order      | **[Order](create-order#order)** |    ✓     |       |

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