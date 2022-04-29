---
title: Switch shipment's status
---

## Giới thiệu

API này cho phép thay đổi trạng thái shipment. Nó chỉ phục vụ cho môi trường **Sandbox**, nhằm giúp developer chủ động trong việc thay đổi các trạng thái của đơn hàng vận chuyển.


:::important Quan trọng

- API này yêu cầu có [chữ ký điện tử](../platform-api/calculate-signature) khi gửi API request.

- Khi ở **trạng thái cuối cùng** thì không thể thay đổi qua các trạng thái khác.
Xem thêm về các trạng thái đơn hàng [tại đây](./status_flow).

:::



Lưu ý, 

## Sử dụng

POST https://api.tiki.vn/tiniapp-open-api/shipping/shipment_status

### API Params

| Thuộc tính  | Kiểu dữ liệu | Bắt buộc | Mô tả                    |
| ----------- | ------------ | :------: | ------------------------ |
| tracking_id | string       |    ✓     | Tracking ID của shipment |
| status      | string       |    ✓     | Trạng thái mong muốn     |

### API Response

| Thuộc tính | Kiểu dữ liệu | Mô tả                                          |
| ---------- | ------------ | ---------------------------------------------- |
| status     | boolean      | Trạng thái thành công hay thất bại của request |

### Request Example

```
{
  "tracking_id": "LOGI-101",
  "status": "picking"
}
```

### Response Example

```
{
  "status": "ok"
}
```
