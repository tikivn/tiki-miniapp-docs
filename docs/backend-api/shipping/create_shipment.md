---
title: Create shipment

description: Tiki mini app tạo đơn vận chuyển hàng với phía Tiki
---

## Giới thiệu

API này sẽ tạo một đơn vận chuyển hàng.

## Sử dụng

**_Quan trọng_**: API này yêu cầu có [chữ ký điện tử](../platform-api/calculate-signature) khi gửi API request.

### API Address

POST https://api.tiki.vn/tiniapp-open-api/shipping/shipments

### API Params

| Attributes   | Type         | Required | Description                                    |
| ------------ | ------------ | -------- | ---------------------------------------------- |
| order_id     | string       | yes      | id của Tini App order                          |
| partner_code | string       | yes      | giá trị được lấy từ quote, ex: GRAB            |
| service_code | string       | yes      | giá trị được lấy từ quote, ex: TG_EXPRESS      |
| instruction  | string       | no       | hướng dẫn giao hàng, max limit 1000 characters |
| items        | array object | yes      | thông tin các món hàng cần được vận chuyển     |
| origin       | object       | yes      | thông tin về điểm lấy hàng                     |
| destination  | object       | yes      | thông tin về điểm nhận hàng                    |

**item** object

| Attributes  | Type    | Required | Description                     |
| ----------- | ------- | -------- | ------------------------------- |
| name        | string  | yes      | tên món hàng                    |
| description | string  | yes      | mô tả món hàng                  |
| quantity    | integer | yes      | số lượng món hàng               |
| price       | float   | yes      | giá trị món hàng, đơn vị là VND |
| weight      | float   | yes      | cân nặng món hàng, đơn vị là gm |
| dimension   | object  | yes      | thông tin về kích cỡ món hàng   |

**dimension** object

| Attributes | Type  | Required | Description                       |
| ---------- | ----- | -------- | --------------------------------- |
| height     | float | yes      | chiều dài món hàng, đơn vị là cm  |
| width      | float | yes      | chiều rộng món hàng, đơn vị là cm |
| depth      | float | yes      | chiều sâu món hàng, đơn vị là cm  |

**origin** object

| Attributes    | Type   | Required | Description                    |
| ------------- | ------ | -------- | ------------------------------ |
| coordinates   | object | no       | thông số toạ độ                |
| contact       | object | yes      | thông tin liên lạc             |
| street        | string | yes      | địa chỉ đường, ví dụ: 285 CMT8 |
| ward_name     | string | yes      | địa chỉ phường                 |
| district_name | string | yes      | địa chỉ quận                   |
| province_name | string | yes      | địa chỉ tỉnh                   |
| ward_code     | string | yes      | code của quận                  |

**Xem thêm cách lấy ward_code [tại đây](./get_ward_code.md)**

**destination** object

| Attributes    | Type   | Required | Description                    |
| ------------- | ------ | -------- | ------------------------------ |
| coordinates   | object | no       | thông số toạ độ                |
| contact       | object | yes      | thông tin liên lạc             |
| street        | string | yes      | địa chỉ đường, ví dụ: 285 CMT8 |
| ward_name     | string | yes      | địa chỉ phường                 |
| district_name | string | yes      | địa chỉ quận                   |
| province_name | string | yes      | địa chỉ tỉnh                   |
| ward_code     | string | yes      | code của quận                  |

**coordinates** object

| Attributes | Type  | Required | Description |
| ---------- | ----- | -------- | ----------- |
| latitude   | float | no       | latitude    |
| longitude  | float | no       | longitude   |

**contact** object

| Attributes | Type   | Required | Description   |
| ---------- | ------ | -------- | ------------- |
| first_name | string | yes      | tên           |
| last_name  | string | no       | họ            |
| email      | string | yes      | email         |
| phone      | string | yes      | số điện thoại |

### API Response

| Attributes  | Type         | Description              |
| ----------- | ------------ | ------------------------ |
| tracking_id | string       | unique code của shipment |
| quotes      | array object | danh sách các quote      |

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

### Request Example

```
{
	"client_id": "lGZ90rObDED2B128",
	"request_time": 1622623376,
  "order_id": "datdao001111",
  "partner_code": "GRAB",
  "service_code": "INSTANT",
  "items": [
    {
      "name": "Book 1",
      "quantity": 1,
      "price": 10.000,
      "dimension": {
          "height": 10,
          "width": 10,
          "depth": 10
      },
      "weight": 20
    }
  ],
  "origin": {
    "coordinates": {
      "latitude": 1.1,
      "longitude": 1.2
    },
    "contact": {
      "first_name": "dao",
      "last_name": "dat",
      "phone": "0901841890",
      "email": "dat.dao@tiki.vn"
    },
    "street": "285 CMT8",
    "ward_name": "Phường 12" ,
    "district_name": "Quận 10",
    "province_name": "Thành phố Hồ Chí Minh",
    "ward_code": "VN000000000"
  },
  "destination": {
    "coordinates": {
      "latitude": 1.1,
      "longitude": 1.2
    },
    "contact": {
    "first_name": "dao",
      "last_name": "dat",
      "phone": "0901841890",
      "email": "dat.dao@tiki.vn"
    },
    "street": "Tòa nhà Viettel 285",
    "ward_name": "Phường 12" ,
    "district_name": "Quận 10",
    "province_name": "Thành phố Hồ Chí Minh",
    "ward_code": "VN000000000"
  }
}
```

### Response Example

```
{
  "data": {
    "status": "allocating",
    "tracking_id": "GEMPMINIAPPdatdao001111",
    "quote": {
      "estimated_timeline": {
        "dropoff": "2021-06-10T10:49:21Z",
        "pickup": "2021-06-10T10:19:21Z"
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
    "error": {
      "message": ""
    }
  }
}
```
