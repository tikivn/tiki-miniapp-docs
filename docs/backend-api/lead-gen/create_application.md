---
title: Tạo hồ sơ
---

## Giới thiệu

API này sẽ tạo một hồ sơ của khách hàng.

## Sử dụng

**_Quan trọng_**: API này yêu cầu có [chữ ký điện tử](../platform-api/calculate-signature) khi gửi API request.

### API Address

POST https://api.tiki.vn/tiniapp-open-api/lead/applications

### Sandbox API Address

POST https://api.tiki.vn/tiniapp-sandbox-open-api/lead/applications

### API Params

| Attributes  | Type   | Required | Description                                                                                 |
| ----------- | ------ | -------- | ------------------------------------------------------------------------------------------- |
| customer_id | string | yes      | id của Tiki User                                                                            |
| inputs      | string | yes      | JSON string chứa các inputs tùy thuộc vào template mà Tini App yêu cầu đối với mỗi ứng dụng |

**Xem thêm danh sách các input template [tại đây](./input_templates.md)**

### API Response

| Attributes     | Type   | Description                                                                                 |
| -------------- | ------ | ------------------------------------------------------------------------------------------- |
| id             | string | id của hồ sơ                                                                                |
| app_identifier | string | định danh ứng dụng tạo ra hồ sơ                                                             |
| customer_id    | string | id của Tiki User                                                                            |
| inputs         | string | JSON string chứa các inputs tùy thuộc vào template mà Tini App yêu cầu đối với mỗi ứng dụng |
| is_sandbox     | bool   | true nếu hồ sơ được tạo ra ở môi trường sandbox, false thì là môi trường production         |
| status         | string | trạng thái của hồ sơ                                                                        |
| created_at     | string | thời gian tạo hồ sơ                                                                         |
| updated_at     | string | thời gian cập nhật hồ sơ                                                                    |

### Request Example

```
{
  "customer_id":"1333",
  "inputs":"{\"name\":\"John\",\"phone\":\"090123443\",\"address\":\"101 Nguyen Van Cu\"}"
}
```

### Response Example

```
{
  "data": {
    "id": "141952217564315671",
    "app_identifier": "app.test",
    "customer_id": "1333",
    "inputs": "{\"address\":\"101 Nguyen Van Cu\",\"name\":\"John\",\"phone\":\"090123443\"}",
    "is_sandbox": true,
    "status": "new",
    "created_at": "2021-12-27T15:24:17.586Z",
    "updated_at": "2021-12-27T15:24:17.586Z"
  }
}
```
