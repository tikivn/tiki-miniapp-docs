---
title: Hoàn trả giao dịch
---


Tài liệu mô tả request từ Tiki sẽ gọi tới API của đối tác, thông báo  hoàn tiền một giao dịch

### Authentication

Request sẽ đính kèm các header được mô tả trong tài liệu [này](./api_signature)

### Body Params
Method POST

| Field               | Type   | Required | Description                                   |
| ------------------- | ------ | -------- | --------------------------------------------- |
| tiki_transaction_id | string | yes      | Tiki transaction id                           |
| transaction_amount  | number | yes      | Số tiền hoàn của transaction                  |
| transaction_id      | string | yes      | Transaction id ở phía đối tác                 |
| reason              | string | yes      | Lý do hoàn tiền                               |
| request_id          | string | yes      | Request id, API đối tác cần hỗ trợ idempotent |

### Response

#### Trường hợp thành công

HTTP Status 200


#### Trường hợp thất bại

HTTP Status 500

