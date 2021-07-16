---
title: Cancel shipment
---

## Giới thiệu

API này huỷ một đơn vận chuyển hàng.

## Sử dụng

**API này yêu cầu có [chữ ký điện tử](../calculate-signature.md) khi gửi API request**

### API Address

DELETE https://api.tiki.vn/tiniapp-open-api/shipping/shipments

### API Params

| Attributes  | Type   | Required | Description              |
| ----------- | ------ | -------- | ------------------------ |
| tracking_id | string | yes      | tracking ID của shipment |
| client_id   | string | yes      | client ID của Tini App   |

### API Response

| Attributes | Type   | Description             |
| ---------- | ------ | ----------------------- |
| status     | string | trạng thái của đơn hàng |

### Request Example

```
{
  "tracking_id": "LOGI-101",
  "client_id": "194ffee2-8aa4-4cb8-a96a"
}
```

### Response Example

```
{
  "status": "ok"
}
```
