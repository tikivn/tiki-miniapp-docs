---
title: List quotes
---

## Giới thiệu

API này hỗ trợ lấy báo giá(quote) của một đơn vận chuyển hàng.

Ví dụ: một đơn vận chuyển hàng từ "2 Hải Triều, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh" đến "285 Cách Mạng Tháng Tám, Phường 12, Quận 10" sẽ có báo giá như sau:

1. Loại hình vận chuyển TNSL-Grab Express, phí vận chuyển 100.000 VND, dự kiến lấy hàng 2021-05-17T10:59:59+07:00, dự kiến giao hàng 2021-05-17T21:59:59+07:00
2. Loại hình vận chuyển TNSL-NJV Standard, phí vận chuyển 50.000 VND, dự kiến lấy hàng 2021-05-17T11:59:59+07:00, dự kiến giao hàng 2021-05-17T18:59:59+07:00

***Lưu ý:*** 

> - Trong response trả về, giá trị của quotes[].service.code và quotes[].partner_code sẽ được dùng khi tạo shipment.
> - API này yêu cầu có [chữ ký điện tử](../platform-api/calculate-signature) khi gửi API request.

## Sử dụng

### API Address

POST https://api.tiki.vn/tiniapp-open-api/shipping/quotes

### API Params

| Thuộc tính  | Kiểu dữ liệu | Bắt buộc | Mô ta                                      |
| ----------- | ------------ | :------: | ------------------------------------------ |
| items       | array object |    ✓     | Thông tin các món hàng cần được vận chuyển |
| origin      | object       |    ✓     | Địa chỉ điểm lấy hàng                      |
| destination | object       |    ✓     | Địa chỉ điểm giao hàng                     |

**item** object

| Thuộc tính  | Kiểu dữ liệu | Bắt buộc | Mô tả                           |
| ----------- | ------------ | :------: | ------------------------------- |
| name        | string       |    ✓     | Tên món hàng                    |
| description | string       |    ✓     | Mô tả món hàng                  |
| quantity    | integer      |    ✓     | Số lượng món hàng               |
| price       | float        |    ✓     | Giá trị món hàng, đơn vị là VND |
| weight      | float        |    ✓     | Cân nặng món hàng, đơn vị là gm |
| dimension   | object       |    ✓     | Thông tin về kích cỡ món hàng   |

**dimension** object

| Thuộc tính | Kiểu dữ liệu | Bắt buộc | Mô tả                             |
| ---------- | ------------ | :------: | --------------------------------- |
| height     | float        |    ✓     | Chiều dài món hàng, đơn vị là cm  |
| width      | float        |    ✓     | Chiều rộng món hàng, đơn vị là cm |
| depth      | float        |    ✓     | Chiều sâu món hàng, đơn vị là cm  |

**origin** object
Địa chỉ điểm lấy hàng

| Thuộc tính    | Kiểu dữ liệu | Bắt buộc | Mô tả                          |
| ------------- | ------------ | :------: | ------------------------------ |
| coordinates   | object       |    ✕     | Toạ độ điểm lấy hàng           |
| street        | string       |    ✓     | Địa chỉ đường, ví dụ: 285 CMT8 |
| ward_name     | string       |    ✓     | Tên phường                     |
| district_name | string       |    ✓     | Tên quận                       |
| province_name | string       |    ✓     | Tên tỉnh/thành                 |
| ward_code     | string       |    ✓     | Mã phường                      |

**Xem thêm cách lấy ward_code [tại đây](./get_ward_code.md)**

**destination** object
Địa chỉ điểm giao hàng

| Thuộc tính    | Kiểu dữ liệu | Bắt buộc | Mô tả                                  |
| ------------- | ------------ | :------: | -------------------------------------- |
| coordinates   | object       |    ✕     | thông số toạ độ                        |
| street        | string       |    ✓     | số nhà cùng với đường, ví dụ: 285 CMT8 |
| ward_name     | string       |    ✓     | địa chỉ phường                         |
| district_name | string       |    ✓     | địa chỉ quận                           |
| province_name | string       |    ✓     | địa chỉ tỉnh                           |
| ward_code     | string       |    ✓     | Mã phường                              |

**coordinates** object

| Thuộc tính | Kiểu dữ liệu | Bắt buộc | Mô tả   |
| ---------- | ------------ | -------- | ------- |
| latitude   | float        | ✕        | Vĩ độ   |
| longitude  | float        | ✕        | Kinh độ |

### API Response

| Thuộc tính | Kiểu dữ liệu | Mô tả               |
| ---------- | ------------ | ------------------- |
| quotes     | array object | danh sách các quote |

**quote** object

| Thuộc tính         | Kiểu dữ liệu | Mô tả                                      |
| ------------------ | ------------ | ------------------------------------------ |
| estimated_timeline | object       | timeline ước chừng về việc vận chuyển hàng |
| fee                | object       | thông tin về phí vận chuyển                |
| partner_code       | string       | mã code của đối tác vận chuyển             |
| service            | object       | loại hình vận chuyển                       |

**estimated_timeline** object

| Thuộc tính | Kiểu dữ liệu | Mô tả                                                 |
| ---------- | ------------ | ----------------------------------------------------- |
| dropoff    | string       | Thời gian lấy hàng. Ví dụ: 2021-05-17T21:59:59+07:00  |
| pickup     | string       | Thời gian giao hàng. Ví dụ: 2021-05-17T21:59:59+07:00 |

**fee** object

| Thuộc tính | Kiểu dữ liệu | Mô tả                      |
| ---------- | ------------ | -------------------------- |
| amount     | float        | Số tiền                    |
| unit_code  | string       | Đơn vị tiền tệ. Ví dụ: VND |

**service** object

| Thuộc tính | Kiểu dữ liệu | Mô tả                                                              |
| ---------- | ------------ | ------------------------------------------------------------------ |
| name       | string       | Tên dịch vụ vận chuyển.Ví dụ: TNSL-Grab Express, TNSL-NJV Standard |
| code       | string       | Mã dịch vụ vận chuyển. Ví dụ: TG_INSTANT, TG_EXPRESS, TG_STANDARD  |

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
            "name": "GrabExpress",
            "code": "BULK"
        }
      }
    ]
  }
}
```
