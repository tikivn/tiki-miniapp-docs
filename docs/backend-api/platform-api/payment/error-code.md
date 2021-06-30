---
title: Mã lỗi
---

### Định dạng kết quả lỗi

```
{
  data: null,
  error: {
    "code": 400,
    "message": "invalid parameters",
    "reason": "",
    "metadata": {
      "service_code": "00002",
      "request_id": "5cfe825ec1d76ed0a37e9acb3dad60ae"
    }
  }
}
```

| Attribute  | Type         | Required   | Not null   | Description                                                            |
| ---------- | ----------   | ---------- | ---------- | ----------                                                             |
| code       | int          | Yes        | Yes        | [HTTP Code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status ) |
| message    | string       | Yes        | Yes        | Nội dung lỗi                                                           |
| reason     | string       | No         | Yes        | Chi tiết lỗi                                                           |
| metadata   | **Metadata** | No         | No         | Dùng để debug khi cần thiết                                            |


### Reason

| Name                        | Description                                    |
| ----------                  | ----------                                     |
| ORDER_AMOUNT_LIMIT_EXCEEDED | Giá trị đơn hàng vượt quá quy định             |
| DUPLICATE_ITEMS             | Một sku xuất hiện nhiều lần trong một đơn hàng |
| PRODUCT_NOT_FOUND           | Sản phẩm không tồn tại hoặc bị tắt             |
| SELLER_NOT_FOUND            | Tài khoản seller đã liên kết không hợp lệ      |
| INVALID_ITEM                | sku không thuộc tài khoản seller đã liên kết   |

