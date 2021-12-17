---
title: Get shipment
---

## Giới thiệu

API này lấy ra thông tin chi tiết của đơn vận chuyển hàng.

## Sử dụng

**_Quan trọng_**: API này yêu cầu có [chữ ký điện tử](../platform-api/calculate-signature) khi gửi API request.

### API Address

GET https://api.tiki.vn/tiniapp-open-api/shipping/shipments

### API Params

| Attributes  | Type   | Required | Description              |
| ----------- | ------ | -------- | ------------------------ |
| tracking_id | string | yes      | tracking ID của shipment |

### API Response

| Attributes  | Type   | Description                |
| ----------- | ------ | -------------------------- |
| tracking_id | string | unique code của shipment   |
| status      | string | trạng thái của đơn hàng    |
| quote       | object | thông tin quote            |
| driver      | object | thông tin tài xế giao hàng |

**quote** object

| Attributes         | Type   | Description                                |
| ------------------ | ------ | ------------------------------------------ |
| estimated_timeline | object | timeline ước chừng về việc vận chuyển hàng |
| fee                | object | thông tin về phí vận chuyển                |
| service            | object | loại hình vận chuyển                       |

**estimated_timeline** object

| Attributes | Type   | Description                      |
| ---------- | ------ | -------------------------------- |
| dropoff    | string | ví dụ: 2021-05-17T21:59:59+07:00 |
| pickup     | string | ví dụ: 2021-05-17T21:59:59+07:00 |

**fee** object

| Attributes | Type   | Description     |
| ---------- | ------ | --------------- |
| amount     | float  | số tiền         |
| unit_code  | string | đơn vị, ex: VND |

**service** object

| Attributes | Type    | Description                              |
| ---------- | ------- | ---------------------------------------- |
| id         | integer |                                          |
| name       | string  | ex: TNSL-Grab Express, TNSL-NJV Standard |
| type       | string  | ex: TG_INSTANT, TG_EXPRESS, TG_STANDARD  |

**driver** object

| Attributes    | Type   | Description              |
| ------------- | ------ | ------------------------ |
| name          | string | tên tài xế               |
| phone         | string | số điện thoại của tài xế |
| license_plate | string | biển số xe               |
| photo_url     | string | avatar URL               |

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
