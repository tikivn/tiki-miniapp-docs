---
title: Get shipment
---

## Giới thiệu

API này lấy ra thông tin chi tiết của đơn vận chuyển hàng.

## Sử dụng

:::important Quan trọng

API này yêu cầu có [chữ ký điện tử](../platform-api/calculate-signature) khi gửi API request.

:::

### API Address

GET https://api.tiki.vn/tiniapp-open-api/shipping/shipments

### API Params

| Thuộc tính  | Kiểu dữ liệu | Bắt buộc | Mô tả                    |
| ----------- | ------------ | :------: | ------------------------ |
| tracking_id | string       |    ✓     | tracking ID của shipment |

### API Response

| Thuộc tính  | Kiểu dữ liệu | Mô tả                      |
| ----------- | ------------ | -------------------------- |
| tracking_id | string       | unique code của shipment   |
| status      | string       | trạng thái của đơn hàng    |
| quote       | object       | thông tin quote            |
| driver      | object       | thông tin tài xế giao hàng |

**quote** object

| Thuộc tính         | Kiểu dữ liệu | Mô tả                                       |
| ------------------ | ------------ | ------------------------------------------- |
| estimated_timeline | object       | Thời gian ước chừng về việc vận chuyển hàng |
| fee                | object       | Thông tin về phí vận chuyển                 |
| service            | object       | Loại hình vận chuyển                        |

**estimated_timeline** object

| Thuộc tính | Kiểu dữ liệu | Mô tả                                                 |
| ---------- | ------------ | ----------------------------------------------------- |
| dropoff    | string       | Thời gian giao hàng. Ví dụ: 2021-05-17T21:59:59+07:00 |
| pickup     | string       | Thời giao lấy hàng. Ví dụ: 2021-05-17T21:59:59+07:00  |

**fee** object

| Thuộc tính | Kiểu dữ liệu | Mô tả           |
| ---------- | ------------ | --------------- |
| amount     | float        | số tiền         |
| unit_code  | string       | đơn vị, ex: VND |

**service** object

| Thuộc tính | Kiểu dữ liệu | Mô tả                                    |
| ---------- | ------------ | ---------------------------------------- |
| id         | integer      |                                          |
| name       | string       | ex: TNSL-Grab Express, TNSL-NJV Standard |
| type       | string       | ex: TG_INSTANT, TG_EXPRESS, TG_STANDARD  |

**driver** object

| Thuộc tính    | Kiểu dữ liệu | Mô tả                    |
| ------------- | ------------ | ------------------------ |
| name          | string       | Tên tài xế               |
| phone         | string       | Số điện thoại của tài xế |
| license_plate | string       | Biển số xe giao hàng     |
| photo_url     | string       | avatar URL               |

### Request Example

```
{
  "tracking_id": "LOGI-101"
}
```

### Response Example

```
{
  "data": {
    "tracking_id": "GEMPMINIAPPdatdao001223333",
    "status": "failed_shipment",
    "quote": {
      "estimated_timeline": {
          "dropoff": "2021-06-09T15:06:17+07:00",
          "pickup": "2021-06-09T14:36:17+07:00"
      },
      "fee": {
          "amount": 2000,
          "unit_code": "VND"
      },
      "partner_code": "GRAB",
      "service": {
          "name": "GrabExpress",
          "code": "INSTANT"
      }
    },
    "driver": {
      "name": "Nguyễn Văn A",
      "phone": "628882233",
      "license_plate": "Wave 59-3333SYY",
      "photo_url": ""
    }
  }
}
```
