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

| Thuộc tính   | Kiểu dữ liệu | Bắt buộc | Mô tả                                          |
| ------------ | ------------ | :------: | ---------------------------------------------- |
| order_id     | string       |    ✓     | id của Tini App order                          |
| partner_code | string       |    ✓     | giá trị được lấy từ quote, ex: GRAB            |
| service_code | string       |    ✓     | giá trị được lấy từ quote, ex: TG_EXPRESS      |
| instruction  | string       |    ✕     | hướng dẫn giao hàng, max limit 1000 characters |
| items        | array object |    ✓     | thông tin các món hàng cần được vận chuyển     |
| origin       | object       |    ✓     | thông tin về điểm lấy hàng                     |
| destination  | object       |    ✓     | thông tin về điểm nhận hàng                    |

**item** object

| Thuộc tính  | Kiểu dữ liệu | Bắt buộc | Mô tả                           |
| ----------- | ------------ | :------: | ------------------------------- |
| name        | string       |    ✓     | tên món hàng                    |
| description | string       |    ✓     | mô tả món hàng                  |
| quantity    | integer      |    ✓     | số lượng món hàng               |
| price       | float        |    ✓     | giá trị món hàng, đơn vị là VND |
| weight      | float        |    ✓     | cân nặng món hàng, đơn vị là gm |
| dimension   | object       |    ✓     | thông tin về kích cỡ món hàng   |

**dimension** object

| Thuộc tính | Kiểu dữ liệu | Bắt buộc | Mô tả                             |
| ---------- | ------------ | :------: | --------------------------------- |
| height     | float        |    ✓     | chiều dài món hàng, đơn vị là cm  |
| width      | float        |    ✓     | chiều rộng món hàng, đơn vị là cm |
| depth      | float        |    ✓     | chiều sâu món hàng, đơn vị là cm  |

**origin** object

| Thuộc tính    | Kiểu dữ liệu | Bắt buộc | Mô tả                          |
| ------------- | ------------ | :------: | ------------------------------ |
| coordinates   | object       |    ✕     | Toạ độ điểm lấy hàng           |
| contact       | object       |    ✓     | thông tin liên lạc             |
| street        | string       |    ✓     | địa chỉ đường, ví dụ: 285 CMT8 |
| ward_name     | string       |    ✓     | địa chỉ phường                 |
| district_name | string       |    ✓     | địa chỉ quận                   |
| province_name | string       |    ✓     | địa chỉ tỉnh                   |
| ward_code     | string       |    ✓     | code của phường                |

**Xem thêm cách lấy ward_code [tại đây](./get_ward_code.md)**

**destination** object

| Thuộc tính    | Kiểu dữ liệu | Bắt buộc | Mô tả                      |
| ------------- | ------------ | :------: | -------------------------- |
| coordinates   | object       |    ✕     | Toạ độ                     |
| contact       | object       |    ✓     | Thông tin người liên lạc   |
| street        | string       |    ✓     | Tên đường, ví dụ: 285 CMT8 |
| ward_name     | string       |    ✓     | Tên phường                 |
| district_name | string       |    ✓     | Tên quận                   |
| province_name | string       |    ✓     | Tên tỉnh                   |
| ward_code     | string       |    ✓     | code của phường            |

**coordinates** object

| Thuộc tính | Kiểu dữ liệu | Bắt buộc | Mô tả     |
| ---------- | ------------ | :------: | --------- |
| latitude   | float        |    ✕     | latitude  |
| longitude  | float        |    ✕     | longitude |

**contact** object

| Thuộc tính | Kiểu dữ liệu | Bắt buộc | Mô tả         |
| ---------- | ------------ | -------- | ------------- |
| first_name | string       | ✓        | tên           |
| last_name  | string       | ✕        | họ            |
| email      | string       | ✓        | email         |
| phone      | string       | ✓        | số điện thoại |

### API Response

| Thuộc tính  | Kiểu dữ liệu | Mô tả                    |
| ----------- | ------------ | ------------------------ |
| tracking_id | string       | unique code của shipment |
| quotes      | array object | danh sách các quote      |

**quote** object

| Thuộc tính         | Kiểu dữ liệu | Mô tả                                      |
| ------------------ | ------------ | ------------------------------------------ |
| estimated_timeline | object       | timeline ước chừng về việc vận chuyển hàng |
| fee                | object       | thông tin về phí vận chuyển                |
| service            | object       | loại hình vận chuyển                       |

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
