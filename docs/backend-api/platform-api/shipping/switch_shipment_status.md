---
title: Switch shipment's status
---

## Giới thiệu

**API này yêu cầu có [chữ ký điện tử](../calculate-signature.md) khi gửi API request**

API này chỉ phục vụ cho môi trường **Sandbox**, nhằm giúp developer chủ động trong việc thay đổi các trạng thái của đơn hàng vận chuyển.

Lưu ý, khi ở **trạng thái cuối cùng** thì không thể thay đổi qua các trạng thái khác.
Xem thêm về các trạng thái đơn hàng [tại đây](./status_flow).

## Sử dụng

POST https://api.tiki.vn/tiniapp-open-api/shipping/shipment_status

### API Params

| Attributes  | Type   | Required | Description              |
| ----------- | ------ | -------- | ------------------------ |
| tracking_id | string | yes      | tracking ID của shipment |
| status      | string | yes      | status mong muốn         |

### API Response

| Attributes | Type | Description                                    |
| ---------- | ---- | ---------------------------------------------- |
| status     | bool | trạng thái thành công hay thất bại của request |

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
