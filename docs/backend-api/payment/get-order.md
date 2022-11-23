---
title: Lấy thông tin một đơn hàng
---

### Thông tin HTTP

| Key          | Value                                |
| ------------ | ------------------------------------ |
| Content-Type | application/json                     |
| Method       | GET                                  |
| Base URL     | https://api.tiki.vn/tiniapp-open-api |
| Path         | /order                               |

### Parameters

| Key      | Description     |
| -------- | --------------- |
| order_id | ID của đơn hàng |

Request gửi đi phải kèm chữ ký điện tử nhằm đảm bảo tính xác thực. Tham khảo [Cách tạo chữ ký điện tử](../platform-api/calculate-signature)

Ví dụ về request lấy thông tin một đơn hàng

```
curl --location --request GET 'https://api.tiki.vn/tiniapp-open-api/order?order_id=88062110977884170' \
--header 'X-Tiniapp-Client-Id: 8GXqhWDK3EppMwf8IyQU1GHgfq2TPADe' \
--header 'X-Tiniapp-Signature: 0df76a0d29a16e12b903205284a09161738740c357d5b06639f930806757f6a7' \
--header 'X-Tiniapp-Timestamp: 1624561365102'
```

### HTTP Response

[**Kết quả lỗi**](error-code)

| Thuộc tính | Kiểu dữ liệu        | Bắt buộc | Mô tả |
| ---------- | ------------------- | :------: | ----- |
| Data       | []**[Data](#data)** |    ✓     |       |

#### Data
| Thuộc tính | Kiểu dữ liệu                    | Bắt buộc | Mô tả |
| ---------- | ------------------------------- | :------: | ----- |
| order      | **[Order](create-order#order)** |    ✓     |       |

Ví dụ về dữ liệu trả về

```
{
  "data": {
    "order": {
      "id": "141857488587784201",
      "extra": "",
      "status": "canceled",
      "grand_total": 35000,
      "reference_id": "0",
      "tiki_order_id": "1001059779",
      "tiki_order_code": "308714458"
    }
  }
}
```

:::note Lưu ý

- Trường thông tin **tiki_order_id** và **tiki_order_code** chỉ có giá trị khi khách hàng tiến hành thanh toán

:::