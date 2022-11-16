---
title: Danh sách các API
---

## API Endpoint

| Environment | Endpoint                              |
| ----------- | ------------------------------------- |
| Production  | https://api.tiki.vn/miniapp/tikivip/  |
| Sandbox     | https://api.tala.xyz/miniapp/tikivip/ |

## Authentication

Để có thể tích hợp với Backend của Tini App, sau khi đăng ký tài khoản tích hợp, bạn cần sử dụng cặp key `api_key` và `api_secret`.

Chú ý rằng cặp key này cần gắn với cặp `partner_code` và `client_id` bạn đã sử dụng khi tích hợp ở client. Việc sử dụng sai các key sẽ dẫn tới dữ liệu sai và tích hợp bị sai.

Mọi request gọi tới backend của Tiki đều cần phải có signature.
Chi tiết việc tính signature được mô tả trong tài liệu [tính signature](/docs/sdk/backend/api_signature)

## Danh sách các API

### 1. API nhận IPN từ đối tác

Tài liệu mô tả API nhận IPN từ đối tác về các cập nhật của giao dịch

| Field    | Value                                    |
| -------- | ---------------------------------------- |
| PROD URL |                                          |
| UAT URL  | https://api.tala.xyz/miniapp/tikivip/ipn |
| method   | POST                                     |

#### Body Params

| Field               | Type   | Required | Description                   |
| ------------------- | ------ | -------- | ----------------------------- |
| tiki_transaction_id | string | yes      | Tiki transaction id           |
| transaction_amount  | number | yes      | Số tiền của transaction       |
| transaction_id      | string | yes      | Transaction id ở phía đối tác |

#### Response

##### Trường hợp thành công

###### HTTP Status 200

```json
{
  "data": {
    "status": "success"
  }
}
```

##### Trường hợp thất bại

###### HTTP Status 500

```json
{
  "data": null,
  "error": {
    "code": "1",
    "message": "invalid transaction id"
  }
}
```

### 2. API để lấy thông tin chi tiết của transaction trên Tiki

Mô tả API lấy thông tin chi tiết của transaction

| Field    | Value                                             |
| -------- | ------------------------------------------------- |
| PROD URL |                                                   |
| UAT URL  | https://api.tala.xyz/miniapp/tikivip/transactions |
| method   | GET                                               |


#### Params

| Field              | Type   | Required | Description         |
| ------------------ | ------ | -------- | ------------------- |
| tik_transaction_id | string | yes      | Tiki transaction id |

#### Response
| Field                  | Type   | Description                |
| ---------------------- | ------ | -------------------------- |
| tik_transaction_id     | string | Tiki transaction id        |
| partner_transaction_id | string | Transaction id của đối tác |
| status                 | string | Trạng thái transaction     |
| amount                 | number | Số tiền của transaction    |

##### Trường hợp thành công

HTTP Status 200


##### Trường hợp thất bại

HTTP Status 500

Các trạng thái của transaction

| Field   | Value                 |
| ------- | --------------------- |
| PENDING | đang chờ thanh toán   |
| SUCCESS | thanh toán thành công |
| FAILURE | thanh toán thất bại   |


### 3. Refund API

Mô tả request từ Tiki sẽ gọi tới API của đối tác, thông báo hoàn tiền một giao dịch.

Để đảm bảo bảo mật, trong API gọi tới đối tác, Tiki cũng sẽ gửi kèm các header và signature được mô tả như trong tài liệu [tính signature](/docs/sdk/backend/api_signature)

#### Body Params

Method POST

| Field               | Type   | Required | Description                                   |
| ------------------- | ------ | -------- | --------------------------------------------- |
| tiki_transaction_id | string | yes      | Tiki transaction id                           |
| transaction_amount  | number | yes      | Số tiền hoàn của transaction                  |
| transaction_id      | string | yes      | Transaction id ở phía đối tác                 |
| reason              | string | yes      | Lý do hoàn tiền                               |
| request_id          | string | yes      | Request id, API đối tác cần hỗ trợ idempotent |

#### Response

##### Trường hợp thành công

HTTP Status 200

##### Trường hợp thất bại

HTTP Status 500