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

| Field    | Value                                            |
| -------- | ------------------------------------------------ |
| PROD URL | https://api.tiki.vn/miniapp/tikivip/payment/ipn  |
| UAT URL  | https://api.tala.xyz/miniapp/tikivip/payment/ipn |
| method   | POST                                             |

#### Body Params

| Field                    | Type   | Required | Description                   |
| ------------------------ | ------ | -------- | ----------------------------- |
| reference_transaction_id | string | yes      | Tiki transaction id           |
| transaction_amount       | number | yes      | Số tiền của transaction       |
| transaction_id           | string | yes      | Transaction id ở phía đối tác |
| status                   | string | yes      | SUCCESS / FAILURE / PENDING   |

#### Response

##### Trường hợp thành công

###### HTTP Status 200

```json
{
  "data": {
    "transaction_id": "8A43B011-0EC9-4AA5-8D83-6FE7B2BCE4EC"
  }
}
```

##### Trường hợp thất bại

###### HTTP Status 400, 404, 403, 500

```json
{
  "error": "error message"
}
```

### 2. API để lấy thông tin chi tiết của transaction trên Tiki

Mô tả API lấy thông tin chi tiết của transaction

| Field    | Value                                            |
| -------- | ------------------------------------------------ |
| PROD URL | https://api.tiki.vn/miniapp/tikivip/transaction  |
| UAT URL  | https://api.tala.xyz/miniapp/tikivip/transaction |
| method   | GET                                              |


#### Params

| Field               | Type   | Required | Description         |
| ------------------- | ------ | -------- | ------------------- |
| tiki_transaction_id | string | yes      | Tiki transaction id |

#### Response
| Field                  | Type   | Description                |
| ---------------------- | ------ | -------------------------- |
| tiki_transaction_id    | string | Tiki transaction id        |
| partner_transaction_id | string | Transaction id của đối tác |
| status                 | string | Trạng thái transaction     |
| amount                 | number | Số tiền của transaction    |

##### Trường hợp thành công

HTTP Status 200


##### Trường hợp thất bại

HTTP Status 400, 404, 403, 500

Các trạng thái của transaction

| Field   | Value                 |
| ------- | --------------------- |
| PENDING | đang chờ thanh toán   |
| SUCCESS | thanh toán thành công |
| FAILURE | thanh toán thất bại   |


#### Response

##### Trường hợp thành công

###### HTTP Status 200

```json
{
  "tiki_transaction_id": "221115TIKIVIP-235784371-1668488254",
  "partner_transaction_id": "8A43B011-0EC9-4AA5-8D83-6FE7B2BCE4EC",
  "status": "SUCCESS",
  "amount": 100000
}
```

##### Trường hợp thất bại

###### HTTP Status 400, 404, 403, 500

```json
{
  "error": "error message"
}
```

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
