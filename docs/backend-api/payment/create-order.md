---
title: Tạo đơn hàng

description: Tiki mini app tạo đơn hàng; tích hợp thanh toán với Tiki
---

## Thông tin HTTP

| Key          | Value                                |
| ------------ | ------------------------------------ |
| Content-Type | application/json                     |
| Method       | POST                                 |
| Base URL     | https://api.tiki.vn/tiniapp-open-api |
| Path         | /order                               |

Request gửi đi phải kèm chữ ký điện tử nhằm đảm bảo tính xác thực. Tham khảo [Cách tạo chữ ký điện tử](../platform-api/calculate-signature).

## HTTP Request

| Thuộc tính       | Kiểu dữ liệu            | Bắt buộc | Mô tả                                                                                                |
| ---------------- | ----------------------- | :------: | ---------------------------------------------------------------------------------------------------- |
| customer_id      | string                  |    ✓     | ID người dùng Tiki, có thể lấy ở [đây](../platform-api/exchange-auth-token#get-info-from-auth-token) |
| items            | [\]**[Item](#item)**    |    ✓     | Danh sách sản phẩm                                                                                   |
| customer_info    | CustomerInfo            |   ✕      | Thông tin khách hàng, dùng để hiện thị trên trang thanh toán Tiki (phần Thông tin khách hàng)        |
| shipping_fee     | int64                   |    ✕     | Phí giao hàng                                                                                        |
| extra            | string                  |    ✕     | Thông tin bổ sung theo định dạng **_key=value; key=value_**                                           |
| reference_id     | string                  |    ✕     | ID đơn hàng của đối tác                                                                              |

:::note Lưu ý

- Giá trị đơn hàng tối đa là mười triệu (10.000.000) đồng. Nếu muốn thay đổi thì cần yêu cầu ở [Tini Console](https://developers.tiki.vn/apps).
- Khi đối tác tạo đơn hàng phía Tiki, không nhất thiết nó phải bao gồm toàn bộ SKU mà đối tác nhận đặt từ khách hàng; chỉ cần gồm 1 hay vài SKU để dại diện thanh toán. Điểm mấu chốt là giá trị đơn hàng phải chính xác.

:::

### CustomerInfo

| Thuộc tính | Kiểu dữ liệu | Bắt buộc | Not Null | Mô tả                    |
| ---------- | ------------ | :------: | :------: | ------------------------ |
| name       | string       |    ✕     |    ✓     | Tên khách hàng           |
| phone      | string       |    ✕     |    ✓     | Số điện thoại khách hàng |
| email      | string       |    ✕     |    ✓     | Email khách hàng         |
| street     | string       |    ✕     |    ✓     | Địa chỉ khách hàng       |

### Item

| Thuộc tính | Kiểu dữ liệu | Bắt buộc | Mô tả                                                      |
| ---------- | ------------ | :------: | ---------------------------------------------------------- |
| name       | string       |    ✓     | Tên sản phẩm                                               |
| quantity   | int64        |    ✓     | Số lượng sản phẩm                                          |
| image_url  | string       |   ✕      | Đường dẫn URL của ảnh sản phẩm                              |
| price      | int64        |    ✓     | Giá tiền sản phẩm                                           |
| extra      | string       |    ✕     | Thông tin bổ sung theo định dạng **_key=value; key=value_** |
| metadata   | **[Metadata](#metadata)**  |   ✕   | Các thông tin chi tiết liên quan đến sản phẩm   |

#### Metadata

Metadata gồm nhiều section.

| Thuộc tính | Kiểu dữ liệu | Bắt buộc | Mô tả                                                      |
| ---------- | ------------ | :------: | ---------------------------------------------------------- |
| sections | [\]**[Section](#section)** | ✓ | Danh sách các section |

#### Section

Mỗi section sẽ gồm một header, một hoặc nhiều field.

| Thuộc tính | Kiểu dữ liệu |  Mô tả                                                      |
| ---------- | ------------ |  ---------------------------------------------------------- |
| header     | string       |  Tiêu đề của section    |
| fields     | [\]**[Field](#field)** | Danh sách field nằm trong section đó |

#### Field

Field tương đương một thuộc tính tuỳ biến liên quan đến sản phẩm do đối tác định nghĩa. Sau đây là các thuộc tính của field:

| Thuộc tính | Kiểu dữ liệu |  Mô tả                                                      |
| ---------- | ------------ | ---------------------------------------------------------- |
| type| string |  Kiểu dữ liệu của field  |
| name | string | Tên field |
| value | Any | Giá trị của field |

Ví dụ về metadata  

```json
{
  "metadata": {
    "sections": [
      {
        "header": "Thông tin bên gửi",
        "fields": [
          {
            "type": "text",
            "name": "Địa chỉ",
            "value": "285 Cách Mạng Tháng 8, Phường 12 , Quận 10, TP Hồ Chí Minh."
          },
          {
            "type": "text",
            "name": "Người gửi",
            "value": "Nguyễn Văn A"
          },
          {
            "type": "text",
            "name": "Số điện thoại",
            "value": "0761234567"
          }
        ]
      },
      {
        "header": "Thông tin bên nhận",
        "fields": [
          {
            "type": "text",
            "name": "Địa chỉ",
            "value": "52 Út Tịch, Phường 4, Quận Tân Bình, TP Hồ Chí Minh"
          },
          {
            "type": "text",
            "name": "Người nhận",
            "value": "Trần Văn B"
          },
          {
            "type": "text",
            "name": "Số điện thoại",
            "value": "0961234567"
          }
        ]
      },

      {
        "header": "Thông tin món hàng",
        "fields": [
          {
            "type": "text",
            "name": "Khối lượng",
            "value": "4kg"
          },
          {
            "type": "text",
            "name": "Dài x Rộng x Cao",
            "value": "12x30x49cm"
          },
          {
            "type": "text",
            "name": "Loại hàng hóa",
            "value": "Thực phẩm, Quần áo"
          },
          {
            "type": "text",
            "name": "Giá trị gói hàng",
            "value": "1.000.000 đ"
          },
          {
            "type": "images",
            "name": "Hình ảnh gói hàng",
            "value": [
              "https://salt.tikicdn.com/ts/tiniapp/f9/43/12/d49e6bcba1441f7f985e549e36ad7d83.png",
              "https://salt.tikicdn.com/ts/tiniapp/1c/c5/06/a19549329bf09a63711bce03a0d58575.png",
              "https://salt.tikicdn.com/ts/tiniapp/26/e2/08/fa7635a27d45fd3f9463a22645a2687b.png"
            ]
          }
        ]
      }
    ]
  }
}
```
<img src="/img/TiniOrder_metadata01.png" width="300px" alt="Bank Transfer UML" style={{ margin: '0 auto', display: 'flex' }}/>

Ví dụ về metadata với type = action

```json
{
  "metadata": {
    "sections": [
      {
        "header": "",
        "fields": [
          {
            "type": "action",
            "name": "Giấy chứng nhận điện tử",
            "value": {
              "button_name": "Xem",
              "link": "https://salt.tikicdn.com/ts/tiniapp/b2/6e/d1/2ab2d72f0502596b32c10036a50b54dd.png:"
            }
          }
        ]
      }
    ]
  }
}
```
<img src="/img/TiniOrder_metadata02.png" width="300px" alt="Bank Transfer UML" style={{ margin: '0 auto', display: 'flex' }}/>

Ví dụ về yêu cầu tạo đơn hàng

```
curl --location --request POST 'https://api.tiki.vn/tiniapp-open-api/order/multi-sku' \
--header 'Content-Type: application/json' \
--header 'X-Tiniapp-Client-Id: 8GXqhWDK3EppMwf8IyQU1GHgfq2TPADe' \
--header 'X-Tiniapp-Signature: b1bf71b9519227be3c7cfe2ce7291d07efb7346d0b9917f3e665bd915e09bf3e' \
--header 'X-Tiniapp-Timestamp: 1647507922833' \
--data-raw '{"customer_id":"100102261","items":[{"name":"Dịch vụ Tini Ship","image_url":"https://salt.tikicdn.com/ts/tiniapp/bb/ca/34/128ace153520571b94013f5fdf5fb982.png","quantity":1,"price":220000,"extra":"a=1;b=2","metadata":{"sections":[{"header":"Thông tin bên gửi","fields":[{"type":"text","name":"Địa chỉ","value":"285 Cách Mạng Tháng 8, phường 12, quận 10, TPHCM"},{"type":"text","name":"Người gửi","value":"Tú Bùi"},{"type":"text","name":"Số điện thoại","value":"0901020000"}]},{"header":"Thông tin bên nhận","fields":[{"type":"text","name":"Địa chỉ","value":"Chung cư Tôn Thất Thuyết, phường 1, quận 4, TPHCM"},{"type":"text","name":"Người nhận","value":"Long Nguyễn"},{"type":"text","name":"Số điện thoại","value":"0901021111"}]},{"header":"Thông tin món hàng","fields":[{"type":"text","name":"Khối lường","value":"1kg"},{"type":"text","name":"Dài x Rộng x Cao","value":"12 x 30 x 49 cm"},{"type":"text","name":"Loại hàng hóa","value":"Thực phẩm, Quần áo"},{"type":"text","name":"Giá trị món hàng","value":"1.000.000đ"},{"type":"images","name":"Hình ảnh","value":["https://salt.tikicdn.com/ts/tiniapp/96/ca/8a/f9ca90000a3417e9735a1866ce9f2472.png","https://salt.tikicdn.com/ts/tiniapp/38/e0/27/741bca845eff19cbabdb7588d648364c.png","https://salt.tikicdn.com/ts/tiniapp/e0/72/5d/2c6ff108b9ddec2902dfb47dea6e2695.png"]}]}]}}],"customer_info":{"name":"Tú Bùi","phone":"0901020000","email":"tu.bui@tiki.vn","street":"285 CMT8"},"shipping_fee":0,"extra":"coupon=ABC;note=test","reference_id":"51"}'

```

<div align="center"> ---oOo--- </div>

## HTTP Response

[**Kết quả lỗi**](error-code)

| Thuộc tính | Kiểu dữ liệu        | Bắt buộc | Mô tả |
| ---------- | ------------------- | :------: | ----- |
| Data       | []**[Data](#data)** |    ✓     |       |

##### Data

| Thuộc tính | Kiểu dữ liệu        | Bắt buộc | Mô tả |
| ---------- | ------------------- | :------: | ----- |
| order      | **[Order](#order)** |    ✓     |       |

##### Order

| Thuộc tính      | Kiểu dữ liệu | Bắt buộc | Not Null | Mô tả                                                                                                                  |
| --------------- | ------------ | :------: | :------: | ---------------------------------------------------------------------------------------------------------------------- |
| id              | string       |    ✓     |    ✓     | ID của đơn hàng ở hệ thống Tini App. Nó đc sinh ra khi khách hàng tạo đơn hàng.                                        |
| status          | string       |    ✓     |    ✓     | [Trạng thái đơn hàng](order-status)                                                                                    |
| grand_total     | int64        |    ✓     |    ✓     | Tổng số tiền mà khách hàng dùng cần thanh toán                                                                         |
| tiki_order_id   | string       |    ✓     |    ✓     | ID của đơn hàng nằm ở hệ thống Tiki                                                                                    |
| tiki_order_code | string       |    ✓     |    ✓     | Mã đơn hàng nằm ở hệ thống Tiki dùng cho mục đích đối soát. Nó được sinh ra khi khách hàng thanh toán online đơn hàng. |
| extra           | string       |    ✓     |    ✓     | Thông tin bổ sung theo định dạng **_key=value;key=value_**                                                             |
| reference_id    | string       |    ✓     |    ✓     | ID đơn hàng của đối tác                                                                                                |

Ví dụ về dữ liệu trả về

```
{
  "data": {
    "order": {
      "id": "141857488587784201",
      "extra": "",
      "status": "draft",
      "grand_total": 35000,
      "reference_id": "0",
      "tiki_order_id": "",
      "tiki_order_code": ""
    }
  }
}
```

Khi khách hàng thanh toán bắt đầu thanh toán đơn hàng, JS API [my.makePayment](/docs/api/open/make-payment) sẽ được dùng để mở màn hình thanh toán cho đơn hàng với tham số truyền vào là order ID.
