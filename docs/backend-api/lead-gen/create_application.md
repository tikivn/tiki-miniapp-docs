---
title: Tạo hồ sơ
---

## Giới thiệu

API này sẽ tạo một hồ sơ của khách hàng.

:::important Quan trọng

API này yêu cầu có [chữ ký điện tử](../platform-api/calculate-signature) khi gửi API request.

::: 

## Sử dụng

### API Address

POST https://api.tiki.vn/tiniapp-open-api/lead/applications

### Sandbox API Address

POST https://api.tiki.vn/tiniapp-sandbox-open-api/lead/applications

### API Params

| Thuộc tính  | Kiểu dữ liệu | Bắt buộc | Mô tả                                                                                       |
| ----------- | ------------ | :------: | ------------------------------------------------------------------------------------------- |
| customer_id | string       |    ✓     | id của Tiki User                                                                            |
| inputs      | string       |    ✓     | JSON string chứa các inputs tùy thuộc vào template mà Tini App yêu cầu đối với mỗi ứng dụng |

**Xem thêm danh sách các input template [tại đây](./input_templates.md)**

### API Response

| Thuộc tính     | Kiểu dữ liệu | Mô tả                                                                                                    |
| -------------- | ------------ | -------------------------------------------------------------------------------------------------------- |
| id             | string       | Id của hồ sơ                                                                                             |
| app_identifier | string       | **App ID** của ứng dụng tạo ra hồ sơ.                                                                    |
| customer_id    | string       | Id của Người dùng Tiki                                                                                   |
| inputs         | string       | JSON string chứa các inputs tùy thuộc vào template mà Tini App yêu cầu đối với mỗi ứng dụng              |
| is_sandbox     | boolean      | `true` nếu hồ sơ được tạo ra ở môi trường sandbox, `false` nếu hồ sơ được tạo ra ở môi trường production |
| status         | string       | Trạng thái của hồ sơ                                                                                     |
| created_at     | string       | Thời gian tạo hồ sơ                                                                                      |
| updated_at     | string       | Thời gian cập nhật hồ sơ                                                                                 |

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
