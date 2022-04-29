---
title: Cancel shipment

description: Tiki mini app huỷ đơn vận chuyển hàng với phía Tiki
---

## Giới thiệu

API này huỷ một đơn vận chuyển hàng.

:::important Quan trọng

API này yêu cầu có [chữ ký điện tử](../platform-api/calculate-signature) khi gửi API request.

:::

## Sử dụng

### API Address

DELETE https://api.tiki.vn/tiniapp-open-api/shipping/shipments

### API Params

| Thuộc tính  | Kiểu dữ liệu | Bắt buộc | Mô tả                    |
| ----------- | ------------ | -------- | ------------------------ |
| tracking_id | string       | yes      | tracking ID của shipment |

### API Response

| Thuộc tính | Kiểu dữ liệu | Mô tả                   |
| ---------- | ------------ | ----------------------- |
| status     | string       | trạng thái của đơn hàng |

### Request Example

```
{
  "tracking_id": "LOGI-101"
}
```

### Response Example

```
{
  "status": "ok"
}
```
