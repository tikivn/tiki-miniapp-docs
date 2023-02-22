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
  "code": 0,
  "message": "success",
  "data": {
    "transaction_id": "8A43B011-0EC9-4AA5-8D83-6FE7B2BCE4EC"
  }
}
```
##### Trường hợp thất bại
###### HTTP Status 200

```json
{
  "code": 2,
  "message": "error message"
}
```

##### Bảng chi tiết mã lỗi `code` 
| Code               | Description   | Action |
| ------------------- | ------------ | -------- |
|0|Thành công ||
|1|Request không hợp lệ |Hoàn tiền|
|2|Lỗi hệ thống    |Hoàn tiền|
|3|Giao dịch không tìm thấy   |Hoàn tiền|
|4|Giao dịch không thuộc đối tác   |Hoàn tiền|
|5|Số tiền giao dịch không hợp lệ   |Hoàn tiền|
|6|Giao dịch bị huỷ   |Hoàn tiền|

##### HTTP Status 4xx, 5xx
Lỗi về hệ thống cần liên hệ với Tiki

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
  "code": 0,
  "message": "success",
  "tiki_transaction_id": "221115TIKIVIP-235784371-1668488254",
  "partner_transaction_id": "8A43B011-0EC9-4AA5-8D83-6FE7B2BCE4EC",
  "status": "SUCCESS",
  "amount": 100000
}
```

##### Trường hợp thất bại
###### HTTP Status 200

```json
{
  "code": 2,
  "message": "error message"
}
```

##### Bảng chi tiết mã lỗi `code` 
| Code               | Description   | Action |
| ------------------- | ------------ | -------- |
|0|Thành công ||
|1|Request không hợp lệ |Kiểm tra lại request|
|2|Lỗi hệ thống    |Thực hiện lại|
|3|Giao dịch không tìm thấy   |Hoàn tiền|
|4|Giao dịch không thuộc đối tác   |Kiểm tra lại tiki transaction id|
|6|Giao dịch bị huỷ   |Hoàn tiền|

##### HTTP Status 4xx, 5xx
Lỗi về hệ thống cần liên hệ với Tiki

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


### 4. API lấy thông tin url webview

Mô tả API lấy thông tin URL webview

| Field    | Value                                            |
| -------- | ------------------------------------------------ |
| PROD URL | https://api.tiki.vn/miniapp/tikivip/webview  |
| UAT URL  | https://api.tala.xyz/miniapp/tikivip/webview |
| method   | POST                                         |

#### Body Params

| Field                    | Type   | Required | Description                   |
| ------------------------ | ------ | -------- | ----------------------------- |
| identify_code | string | yes      | mã code để xác định khách hàng           |
| identify_phone       | number | yes      | Số điện thoại của khách hàng     |
| identify_fullname           | string | no      | Họ và tên khách hàng|


#### Response

##### Trường hợp thành công


```json
{
  "code": 0,
  "message": "success",
  "data": {
    "url_open": "https://tiki.vn/apps/vn.tiki.vip?xxxxx",
    "url_checkout_result": "https://tiki.vn//apps/vn.tiki.vip/callback/index?xxxxx",
    "request_id": "8A43B011-0EC9-4AA5-8D83-6FE7B2BCE4EC"
  }
}
```
##### Trường hợp thất bại

```json
{
  "code": 2,
  "message": "error message"
}
```

##### Bảng chi tiết mã lỗi 

| Code               | Description   |
| ------------------- | ------------ |
|0|Thành công |
|1|Request không hợp lệ |
|2|Lỗi hệ thống    |

##### HTTP Status 4xx, 5xx
Lỗi về hệ thống cần liên hệ với Tiki

