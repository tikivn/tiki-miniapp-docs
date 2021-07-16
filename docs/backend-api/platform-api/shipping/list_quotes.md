---
title: List quotes
---

## Giới thiệu

API này hỗ trợ lấy báo giá(quote) của một đơn vận chuyển hàng.

Ví dụ: một đơn vận chuyển hàng từ "2 Hải Triều, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh" đến "285 Cách Mạng Tháng Tám, Phường 12, Quận 10" sẽ có báo giá như sau:

1. Loại hình vận chuyển TNSL-Grab Express, phí vận chuyển 100.000 VND, dự kiến lấy hàng 2021-05-17T10:59:59+07:00, dự kiến giao hàng 2021-05-17T21:59:59+07:00
2. Loại hình vận chuyển TNSL-NJV Standard, phí vận chuyển 50.000 VND, dự kiến lấy hàng 2021-05-17T11:59:59+07:00, dự kiến giao hàng 2021-05-17T18:59:59+07:00

Lưu ý: trong response trả về, giá trị của quotes[].service.code và quotes[].partner_code sẽ được dùng khi tạo shipment.

## Sử dụng

**API này yêu cầu có [chữ ký điện tử](../calculate-signature.md) khi gửi API request**

### API Address

POST https://api.tiki.vn/tiniapp-open-api/shipping/quotes

### API Params

| Attributes  | Type         | Required | Description                                |
| ----------- | ------------ | -------- | ------------------------------------------ |
| items       | array object | yes      | thông tin các món hàng cần được vận chuyển |
| origin      | object       | yes      | thông tin về điểm lấy hàng                 |
| destination | object       | yes      | thông tin về điểm nhận hàng                |

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
| coordinates   | object | yes      | thông số toạ độ                |
| street        | string | yes      | địa chỉ đường, ví dụ: 285 CMT8 |
| ward_name     | string | no       | địa chỉ phường                 |
| district_name | string | no       | địa chỉ quận                   |
| province_name | string | no       | địa chỉ tỉnh                   |
| ward_code     | string | no       | code của quận                  |

**Xem thêm cách lấy ward_code [tại đây](./get_ward_code.md)**

**destination** object

| Attributes    | Type   | Required | Description                    |
| ------------- | ------ | -------- | ------------------------------ |
| coordinates   | object | yes      | thông số toạ độ                |
| street        | string | yes      | địa chỉ đường, ví dụ: 285 CMT8 |
| ward_name     | string | no       | địa chỉ phường                 |
| district_name | string | no       | địa chỉ quận                   |
| province_name | string | no       | địa chỉ tỉnh                   |
| ward_code     | string | yes      | code của quận                  |

**coordinates** object

| Attributes | Type  | Required | Description |
| ---------- | ----- | -------- | ----------- |
| latitude   | float | yes      | latitude    |
| longitude  | float | yes      | longitude   |

### API Response

| Attributes | Type         | Description         |
| ---------- | ------------ | ------------------- |
| quotes     | array object | danh sách các quote |

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
    "street": "285 CMT8",
    "ward_name": "Phường 12" ,
    "district_name": "Quận 10",
    "province_name": "Thành phố Hồ Chí Minh",
    "ward_code": "VN000000000"
  },
  "destination": {
    "street": "Tòa nhà Viettel 285",
    "ward_name": "Phường 12" ,
    "district_name": "Quận 10",
    "province_name": "Thành phố Hồ Chí Minh",
    "ward_code": "VN000000000"
  },
  "client_id": "194ffee2-8aa4-4cb8-a96a"
}
```

### Response Example

```
{
  "data": {
    "quotes": [
      {
        "estimated_timeline": {
            "dropoff": "2021-06-10T10:41:14Z",
            "pickup": "2021-06-10T10:11:14Z"
        },
        "fee": {
            "amount": 2000,
            "unit_code": "VND"
        },
        "partner_code": "GRAB",
        "service": {
            "id": 0,
            "name": "GrabExpress",
            "code": "INSTANT"
        }
      },
      {
        "estimated_timeline": {
            "dropoff": "2021-06-10T10:41:14Z",
            "pickup": "2021-06-10T10:11:14Z"
        },
        "fee": {
            "amount": 2001,
            "unit_code": "VND"
        },
        "partner_code": "GRAB",
        "service": {
            "id": 0,
            "name": "GrabExpress",
            "code": "SAME_DAY"
        }
      },
      {
        "estimated_timeline": {
            "dropoff": "2021-06-10T10:41:14Z",
            "pickup": "2021-06-10T10:11:14Z"
        },
        "fee": {
            "amount": 2002,
            "unit_code": "VND"
        },
        "partner_code": "GRAB",
        "service": {
            "id": 0,
            "name": "GrabExpress",
            "code": "BULK"
        }
      }
    ]
  }
}
```
