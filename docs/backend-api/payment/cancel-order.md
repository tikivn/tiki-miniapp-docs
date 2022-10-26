---
title: Hủy đơn hàng và hoàn tiền

description: Tiki mini app thông báo cho Tiki huỷ đơn hàng; tích hợp thanh toán với Tiki
---

:::important Lưu ý

- Chỉ có thể huỷ dơn hàng khi đơn hàng chưa dược hoàn thành (trạng thái của đơn hàng chưa được chuyển thành 'completed')
- Sau khi đơn hàng được huỷ thành công, khách hàng sẽ được hoàn tiền nếu khách hàng lựa chọn phương thức thanh toán online và đã thanh toán thành công

:::

#### Thông tin HTTP

| Key          | Value                                |
| ------------ | ------------------------------------ |
| Content-Type | application/json                     |
| Method       | POST                                 |
| Base URL     | https://api.tiki.vn/tiniapp-open-api |
| Path         | /order/cancel                        |

Request gửi đi phải kèm chữ ký điện tử nhằm đảm bảo tính xác thực. Tham khảo [Cách tạo chữ ký điện tử](../platform-api/calculate-signature).

#### HTTP Request

| Thuộc tính | Kiểu dữ liệu | Bắt buộc | Mô tả              |
| ---------- | ------------ | :------: | ------------------ |
| order_id   | string       |    ✓     | ID của đơn hàng    |
| comment    | string       |    ✓     | Lý do hủy đơn hàng |
| push_opts  | object       |          | Tùy chọn thông báo |

- Chi tiết thuộc tính push_opts:

  | Thuộc tính | Kiểu dữ liệu | Bắt buộc | Mô tả              |
  | ---------- | ------------ | :------: | ------------------ |
  | page_path  | string       |    ✓     | Đường dẫn đơn hàng |

Vi dụ về yêu cầu hoàn thành đơn hàng

```
curl --location --request POST 'https://api.tiki.vn/tiniapp-open-api/order/cancel' \
--header 'Content-Type: application/json' \
--header 'X-Tiniapp-Client-Id: 8GXqhWDK3EppMwf8IyQU1GHgfq2TPADe' \
--header 'X-Tiniapp-Signature: 50cc41cb0d18eca77d4990baaddb5d7c1a1b058e97eb3a170b0abd9a8f6c87b8' \
--header 'X-Tiniapp-Timestamp: 1624558318419' \
--data-raw '{"order_id":"77062110977884170","comment":"Hết hàng","pust_opts":{"page_path":"/order/detail/88062110977884170"}}'
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
      "id": "77062110977884170",
      "status": "canceled",
      "grand_total": 1000
    }
  }
}
```
