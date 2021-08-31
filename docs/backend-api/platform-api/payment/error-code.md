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

| Thuộc tính | Kiểu dữ liệu | Bắt buộc | Not Null | Mô tả                                                                  |
| ---------- | ------------ | :------: | :------: | ---------------------------------------------------------------------- |
| code       | int          |    ✓     |    ✓     | [HTTP Code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status ) |
| message    | string       |    ✓     |    ✓     | Nội dung lỗi                                                           |
| reason     | string       |    ✕     |    ✓     | Chi tiết lỗi                                                           |
| metadata   | **Metadata** |    ✕     |    ✕     | Phục vụ cho mục đích debug khi cần thiết                               |


### Reason

| Lý do                       | Giải thích                                          |
| --------------------------- | --------------------------------------------------- |
| ORDER_AMOUNT_LIMIT_EXCEEDED | Giá trị đơn hàng vượt quá quy định                  |
| DUPLICATE_ITEMS             | Một sku xuất hiện nhiều lần trong một đơn hàng      |
| PRODUCT_NOT_FOUND           | Sản phẩm không tồn tại, hết hàng hoặc không còn bán |
| SELLER_NOT_FOUND            | Tài khoản seller đã liên kết không hợp lệ           |
| INVALID_ITEM                | sku không thuộc tài khoản Seller đã liên kết        |

