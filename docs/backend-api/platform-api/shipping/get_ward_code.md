---
title: Get ward code
---

## Giới thiệu

API này lấy ra thông tin **tiki_code** của [phường/xã](#api-list-wards), đây là giá trị tương ứng với parameter **ward_code** của hai API List Quotes và Create Shipment.

## Sử dụng

### Base URL

GET https://api.tiki.vn/directory

Lưu ý nếu dùng cho môi trường **Sandbox** thì sử dụng địa chỉ dưới đây:

GET https://api.tala.xyz/directory

### API List Regions

#### API Address

GET /v1/countries/VN/regions

#### API Response

| Attributes | Type   | Description  |
| ---------- | ------ | ------------ |
| id         | int    | id của vùng  |
| name       | string | tên của vùng |
| tiki_code  | string | mã tiki code |

### API List Districts

#### API Address

GET /v1/countries/VN/regions/{region id}/districts

#### API Response

| Attributes | Type   | Description  |
| ---------- | ------ | ------------ |
| id         | int    | id của quận  |
| name       | string | tên của quận |
| tiki_code  | string | mã tiki code |

### API List Wards

#### API Address

GET /v1/countries/VN/regions/{region id}/districts/{district id}

#### API Response

| Attributes | Type   | Description       |
| ---------- | ------ | ----------------- |
| id         | int    | id của phường/xã  |
| name       | string | tên của phường/xã |
| tiki_code  | string | mã tiki code      |

### Request Example

Lấy ra danh sách phường của quận 5, thành phố Hồ Chí Minh
https://api.tiki.vn/directory/v1/countries/VN/regions/294/districts/493/wards

### Response Example

```
{
  "data": [
    {
      "id": 10389,
      "name": "Phường 01",
      "tiki_code": "VN039007001"
    },
    {
      "id": 10390,
      "name": "Phường 02",
      "tiki_code": "VN039007002"
    },
    {
      "id": 10391,
      "name": "Phường 03",
      "tiki_code": "VN039007003"
    },
    {
      "id": 10392,
      "name": "Phường 04",
      "tiki_code": "VN039007004"
    },
    {
      "id": 10393,
      "name": "Phường 05",
      "tiki_code": "VN039007005"
    },
    {
      "id": 10394,
      "name": "Phường 06",
      "tiki_code": "VN039007006"
    },
    {
      "id": 10395,
      "name": "Phường 07",
      "tiki_code": "VN039007007"
    },
    {
      "id": 10396,
      "name": "Phường 08",
      "tiki_code": "VN039007008"
    },
    {
      "id": 10397,
      "name": "Phường 09",
      "tiki_code": "VN039007009"
    },
    {
      "id": 10398,
      "name": "Phường 10",
      "tiki_code": "VN039007010"
    },
    {
      "id": 10399,
      "name": "Phường 11",
      "tiki_code": "VN039007011"
    },
    {
      "id": 10400,
      "name": "Phường 12",
      "tiki_code": "VN039007012"
    },
    {
      "id": 10401,
      "name": "Phường 13",
      "tiki_code": "VN039007013"
    },
    {
      "id": 10402,
      "name": "Phường 14",
      "tiki_code": "VN039007014"
    },
    {
      "id": 10403,
      "name": "Phường 15",
      "tiki_code": "VN039007015"
    }
  ]
}
```
