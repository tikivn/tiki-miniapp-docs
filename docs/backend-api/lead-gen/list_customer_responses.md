---
title: Lấy thông tin user phản hồi về form của đối tác

description: Lấy thông tin user phản hồi về form của đối tác
---

### Thông tin HTTP

| Key          | Value                                |
| ------------ |--------------------------------------|
| Content-Type | application/json                     |
| Method       | GET                                  |
| Base URL     | https://api.tiki.vn/tiniapp-open-api |
| Path         | /lead/customer-response/list         |

### Parameters

| Key       | Bắt buộc | Description                                                                                                            |
|-----------|----------|------------------------------------------------------------------------------------------------------------------------|
| form_ids  |     ✓     | ID của các các form mà đối tác cần lấy phản hồi từ user, ngăn cách nhau bằng dấu phẩy (**,**)                          |
| size      |     ✓     | Số lượng phản hồi mà đối tác cần lấy trong lần gửi request. Min = 1, Max = 500                                         |
| lt_id     |     ✕     | ID lớn nhất của phản hồi mà đối tác không cần lấy trong lần gửi request.                                               |
| from_time |     ✕     | Thời gian bắt đầu mà đối tác cần lọc để lấy phản hồi trong lần request. Giá trị là unix timestamp tính tới giây ở UTC  |
| to_time   |     ✕     | Thời gian kết thúc mà đối tác cần lọc để lấy phản hồi trong lần request. Giá trị là unix timestamp tính tới giây ở UTC |

:::note Lưu ý

- Lấy thông tin phản hồi của người dùng cũng đòi hỏi chữ ký điện tử. Tham
  khảo [Cách tạo chữ ký điện tử](../platform-api/calculate-signature)
- Data sẽ được trả về theo id giảm dần, tương ứng là những phản hồi gần nhất so với thời điểm mà đối tác gửi request
  :::

Vi dụ về request lấy thông tin phản hồi của user ở production

```
curl --location --request GET 'https://api.tiki.vn/tiniapp-open-api/lead/customer-response/list?form_ids=84112926079713300%2C88238130968199168&size=100' \
--header 'Content-Type: application/json' \
--header 'X-Tiniapp-Client-Id: 8GXqhWDK3EppMwf8IyQU1GHgfq2TPADe' \
--header 'X-Tiniapp-Signature: 4d7bf4bc83e3e9884ce7ebfb1b2477aca66d40188df2de26053f59fe1067f4d3' \
--header 'X-Tiniapp-Timestamp: 1624613199164'
```

Vi dụ về request lấy thông tin phản hồi của user ở sandbox

```
curl --location --request GET 'https://api.tiki.vn/tiniapp-sandbox-open-api/lead/customer-response/list?form_ids=1&size=100' \
--header 'Content-Type: application/json' \
--header 'X-Tiniapp-Client-Id: 8GXqhWDK3EppMwf8IyQU1GHgfq2TPADe' \
--header 'X-Tiniapp-Signature: 4d7bf4bc83e3e9884ce7ebfb1b2477aca66d40188df2de26053f59fe1067f4d3' \
--header 'X-Tiniapp-Timestamp: 1624613199164'
```

:::note Lưu ý

- `%2C` đại diện cho dấu phẩy (,) trong URL
- Khi đối tác sử dụng thử ở sandbox, vui lòng không thay đổi `form_ids` ở URL để luôn nhận được data.
- Trường `inputs` trong data sandbox chỉ là data mẫu để đối tác tham khảo. Mỗi đối tác sẽ được gắn với những form khác nhau, với những câu hỏi và trường dữ liệu khác nhau
:::

### HTTP Response

[**Kết quả lỗi**](error-code)

| Thuộc tinh | Kiểu dữ liệu        | Bắt buộc | Mô tả |
| ---------- | ------------------- | :------: | ----- |
| Data       | []**[Data](#data)** |    ✓     |       |

#### Data

| Thuộc tinh         | Kiểu dữ liệu                     | Bắt buộc | Mô tả                                        |
|--------------------|----------------------------------| :------: |----------------------------------------------|
| total              | int64                            |    ✓     | Tổng số lượng phản hồi theo query của đối tác |
| customer_responses | []**[Customer Response](#data)** |    ✓     |                                              |

#### Customer Response

| Thuộc tinh | Kiểu dữ liệu | Bắt buộc | Mô tả                        |
|------------|--------------| :------: |------------------------------|
| id         | string       |    ✓     |                              |
| created_at | string       |    ✓     | format: YYYY-MM-DDThh:mm:ssZ |
| form_id    | string       |    ✓     |                              |
| inputs     | JSON object  |    ✓     |                              |

Ví dụ về dữ liệu trả về

```
{
    "data": {
        "total": 10,
        "data": [
            {
                "created_at": "2021-12-16T17:43:51Z",
                "form_id": "1",
                "id": "998",
                "inputs": {
                    "address": "880 CMT8, Phường 12, Quận 10, TPHCM",
                    "age": 23,
                    "avatar": "https://salt.tikicdn.com/ts/tiniapp/f7/a0/73/2d203498a7fff724255d67ed47577c6e.png",
                    "birthday": "3/10/1993",
                    "hobbies": [
                        "Đọc sách",
                        "Đá banh"
                    ],
                    "gender": "female",
                    "name": "Tini app lead gen 657"
                }
            },
            {
                "created_at": "2021-12-16T04:42:50Z",
                "form_id": "1",
                "id": "997",
                "inputs": {
                    "address": "374 CMT8, Phường 12, Quận 10, TPHCM",
                    "age": 40,
                    "avatar": "https://salt.tikicdn.com/ts/tiniapp/f7/a0/73/2d203498a7fff724255d67ed47577c6e.png",
                    "birthday": "4/11/1994",
                    "hobbies": [
                        "Đọc sách",
                        "Đá banh"
                    ],
                    "gender": "other",
                    "name": "Tini app lead gen 272"
                }
            },
            {
                "created_at": "2021-12-15T15:41:49Z",
                "form_id": "1",
                "id": "996",
                "inputs": {
                    "address": "276 CMT8, Phường 12, Quận 10, TPHCM",
                    "age": 22,
                    "avatar": "https://salt.tikicdn.com/ts/tiniapp/f7/a0/73/2d203498a7fff724255d67ed47577c6e.png",
                    "birthday": "11/9/1993",
                    "hobbies": [
                        "Đọc sách",
                        "Đá banh"
                    ],
                    "gender": "male",
                    "name": "Tini app lead gen 478"
                }
            }
        ]
    }
}
```