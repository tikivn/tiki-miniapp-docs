---
title: Cập nhật hồ sơ
---

API này dùng để cập nhật hồ sơ của khách hàng.


:::important Quan trọng

API này yêu cầu có [chữ ký điện tử](../platform-api/calculate-signature) khi gửi API request.

:::

## Sử dụng

### API Address

PUT https://api.tiki.vn/tiniapp-open-api/lead/applications/{application_id}

### Sandbox API Address

PUT https://api.tiki.vn/tiniapp-sandbox-open-api/lead/applications/{application_id}

### API Params

| Thuộc tính | Kiểu dữ liệu | Bắt buộc | Mô tả                |
| ---------- | ------------ | :------: | -------------------- |
| status     | string       |    ✓     | Trạng thái của hồ sơ |

**Xem thêm về các trạng thái của hồ sơ [tại đây](./status.md)**

### API Response

HTTP/1.1 204 No Content

### Request Example

```
PUT https://api.tiki.vn/tiniapp-sandbox-open-api/lead/applications/141952217564315671

{
  "status":"disbursed"
}
```

### Response Example

HTTP/1.1 204 No Content
