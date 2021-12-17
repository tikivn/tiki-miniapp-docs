---
title: Webhook
---

## Giới thiệu

Tini App dùng webhook để notify tới ứng dụng backend của developer khi có các sự kiện liên quan tới việc vận chuyển hàng xảy ra.

## Webhook Response

| Thuộc tính      | Kiểu dữ liệu | Mô tả                                                 |
| --------------- | ------------ | ----------------------------------------------------- |
| tracking_id     | string       | unique code của shipment                              |
| client_order_id | string       | order id gắn với shipment                             |
| timestamp       | string       | thời gian xảy ra sự kiện (ex: "2021-06-04T04:09:51Z") |
| partner_code    | string       | mã code của đối tác vận chuyển                        |
| service_code    | string       | mã code của loại hình vận chuyển                      |
| shipping_fee    | float        | cước phí giao hàng                                    |
| status          | string       | trạng thái của đơn hàng                               |
| reason_code     | string       | mã code lý do giao hàng thất bại                      |
| driver          | object       | thông tin tài xế giao hàng                            |

**_Lưu ý:_**

> Ở một vài trạng thái sẽ không có thông tin tài xế ví dụ allocating, canceled. Xem thêm mô tả trạng thái [tại đây](./status_flow).
>
> Mô tả các mã code lý do giao hàng thất bại:

| Code              | Description                  |
| ----------------- | ---------------------------- |
| no_longer_needed  | Khách hàng không còn nhu cầu |
| virtual_customer  | Khách hàng ảo                |
| canceled_by_3pl   | Huỷ bởi đối tác              |
| driver_not_found  | Không tìm thấy tài xế        |
| package_in_return | Đang trả kiện hàng           |
| package_returned  | Đã trả kiện hàng             |
| undefined         | Lý do không xác định         |

## Response Example

```
{
  "tracking_id": "Test101",
  "client_order_id": "11111",
  "timestamp": "2021-06-04T04:09:51Z", // RFC3339
  "partner_code": "GRAB",
  "service_code": "SAME_DAY",
  "shipping_fee": 50000,
  "status": "picking",
  "reason_code": "",
  "driver": {
      "name": "Cuong Vu",
      "phone": "0901844442",
      "license_plate": "A 3333 SYY",
      "photo_url": "https://somephotourl.com/sgdfb6gfd87",
      "current_coordinates": {
        "latitude": 1.2345678,
        "longitude": 1.2345678,
      }
    }
}
```

## Webhook Signature

Với mỗi webhook event, Tini App chèn thông tin signature thông qua các header sau:

| Header              | Description                                   |
| ------------------- | --------------------------------------------- |
| X-Tiniapp-Timestamp | Thời gian gọi request, tính bằng milliseconds |
| X-Tiniapp-Client-Id | Client id được cấp khi tạo app                |
| X-Tiniapp-Signature | Signature được tính dựa trên request body     |

Việc này cho phép đối tác xác thực được webhook event được gửi từ Tini App. Xem thêm việc tính toán và xác thực signature [tại đây](../platform-api/calculate-signature)
