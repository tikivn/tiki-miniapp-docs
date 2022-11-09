---
title: Danh sách các API
---

## 1. API nhận IPN từ đối tác

Tài liệu mô tả API nhận IPN từ đối tác về các cập nhật của giao dịch

### API Endpoint

| Environment | Endpoint |
| ----------- | -------- |
| Production  |          |
| Sandbox     |          |

### Authentication

Request cần đính kèm các header được mô tả trong tài liệu [này](./api_signature)

### Body Params

| Field               | Type                                 | Required | Description                   |
| ------------------- | ------------------------------------ | -------- | ----------------------------- |
| tiki_transaction_id | application/json                     | yes      | Tiki transaction id           |
| transaction_amount  | POST                                 | yes      | Số tiền của transaction       |
| transaction_id      | https://api.tiki.vn/tiniapp-open-api | yes      | Transaction id ở phía đối tác |

### Response

#### Trường hợp thành công

##### HTTP Status 200

```json
{
  "data": {
    "status": "success"
  }
}
```

#### Trường hợp thất bại

##### HTTP Status 500

```json
{
  "data": null,
  "error": {
    "code": "1",
    "message": "invalid transaction id"
  }
}
```

## 2. API để lấy thông tin trạng thái của transaction trên Tiki
