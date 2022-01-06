---
title: Lấy thông tin nhiều đơn hàng

description: lấy thông tin nhiều đơn hàng đã đặt trên Tiki mini app
---

### Thông tin HTTP

| Key          | Value                                |
| ------------ | ------------------------------------ |
| Content-Type | application/json                     |
| Method       | GET                                  |
| Base URL     | https://api.tiki.vn/tiniapp-open-api |
| Path         | /order/list                          |

### Parameters

| Key       | Description                                                           |
| --------- | --------------------------------------------------------------------- |
| order_ids | ID của các đơn hàng, tối đa 100, ngăn cách nhau bằng dấu phẩy (**,**) |

Giống như việc lấy thông tin một đơn hàng, việc lấy thông tin nhiều đơn hàng cũng đòi hỏi chữ ký điện tử phải xuất hiện trong URL. Tham khảo [Cách tạo chữ ký điện tử](../platform-api/calculate-signature)

Vi dụ về request lấy thông tin nhiều đơn hàng cùng lúc

```
curl --location --request GET 'https://api.tiki.vn/tiniapp-open-api/order/list?order_ids=84112926079713300%2C88238130968199168' \
--header 'Content-Type: application/json' \
--header 'X-Tiniapp-Client-Id: 8GXqhWDK3EppMwf8IyQU1GHgfq2TPADe' \
--header 'X-Tiniapp-Signature: 4d7bf4bc83e3e9884ce7ebfb1b2477aca66d40188df2de26053f59fe1067f4d3' \
--header 'X-Tiniapp-Timestamp: 1624613199164'
```
`%2C` đại diện cho dấu phẩy (,) trong URL

### HTTP Response

[**Kết quả lỗi**](error-code)

| Thuộc tinh | Kiểu dữ liệu        | Bắt buộc | Mô tả |
| ---------- | ------------------- | :------: | ----- |
| Data       | []**[Data](#data)** |    ✓     |       |

#### Data

| Thuộc tinh | Kiểu dữ liệu                      | Bắt buộc | Mô tả |
| ---------- | --------------------------------- | :------: | ----- |
| orders     | []**[Order](create-order#order)** |    ✓     |       |

Ví dụ về dữ liệu trả về

```
{
  "data": {
    "orders": [
      {
        "id": "141857488587784201",
        "extra": "",
        "status": "canceled",
        "grand_total": 35000,
        "reference_id": "0",
        "tiki_order_id": "1001059779",
        "tiki_order_code": "308714458"
      },
      {
        "id": "141857488587784202",
        "extra": "",
        "status": "canceled",
        "grand_total": 35000,
        "reference_id": "1",
        "tiki_order_id": "1001059721",
        "tiki_order_code": "308714451"
      }
    ]
  }
}
```