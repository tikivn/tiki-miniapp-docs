---
title: Tích hợp webview cho hệ thống Tiki Vip
description: Giới thiệu và hướng dẫn cách tích hợp webview cho hệ thống Tiki Vip
---

## Giới thiệu

Tài liệu hướng dẫn và giới thiệu cách tích hợp WebView của chương trình Tiki Vip vào các đối tác thanh toán.

## Danh sách tích hợp

### Thanh toán

| # | Tiki | Đối tác                              | Mô tả |
| --- | ----------- | ------------------------------------- |--- |
| 1 | Url mở sản phẩm Tiki | N/A | Đối tác thực hiện tích hợp mở webview của Tiki| 
| 2 | Url kết quả thanh toán | N/A| Chuyển về màn hình kết quả đơn hàng của tiki   (phụ thuộc vào đối tác) |
| 3 | API kiểm tra giao dịch | N/A | Đối tác kiểm tra giao dịch tại Tiki |
| 4 | API IPN trạng thái giao dịch | N/A | Cập nhật trạng thái thanh toán sang Tiki |
| 5 | N/A | URL hoặc function để Tiki gọi qua màn hình thanh toán | Tiki sẽ thực hiện gọi từ webview để chuyển qua màn hình thanh toán của đối tác |
| 6 | N/A | API kiểm tra giao dịch | Tiki gọi API để kiểm tra các giao dịch từ đối tác + phục vụ quá trình vận hành |
| 7 | N/A | API refund (hoàn tiền từng phần + toàn phần) | Tiki gọi API để hoàn tiền cho khách hàng |

### Đối soát

Tiki hỗ trợ thực hiện đối soát tự động qua API hoặc SFPT. Hai bên cùng thống nhất template + thời gian.

## Luồng tích hợp thanh toán

![image](https://salt.tikicdn.com/ts/tiniapp/b8/75/ba/1ae7aec2b6e6184d77580fd5f1899695.jpg)

- (1): Tiki cung cấp full url + hướng dẫn truyền parameter cho đối tác.
- (2): Đối tác cung cấp cho Tiki deeplink để redirect qua màn hình thanh toán.
- (3): Tiki cung cấp cho đối tác API kiểm tra giao dịch([Xem chi tiết API](/docs/sdk/backend/ref#2-api-để-lấy-thông-tin-chi-tiết-của-transaction-trên-tiki)).
- (4): Tiki cung cấp cho đối tác API IPN ([Xem chi tiết API](docs/sdk/backend/ref#1-api-nhận-ipn-từ-đối-tác)). 
- (5): Tiki cung cấp cho đối tác deeplink để redirect sau khi thanh toán hoàn thành.

## Các bước triển khai

- url basic ~ {url_basic}

| Environment | Endpoint                              |
| ----------- | ------------------------------------- |
| Production  | https://tiki.vn/apps  |
| Sandbox     | https://beta.tala.xyz/apps |

### 1. Tiki cung cấp cho đối tác:

- `partnerCode`: là một chuỗi duy nhất gắn với từng Super App
- `clientId`: là một UUID gắn liền với Super App
- `client_secret`: key sử dụng để mã hoá signature
- `url`: url webview cho đối tác

### 2. Định nghĩa full_url

- URR format: {url_basic}/vn.tiki.vip?partnerCode={partnerCode}&clientId={clientId}&identifyCode={identifyCode}&timestamp={timestamp}&sig={sig}

| Parameter | Values |
| ----------- | ------------------------------------- |
| partnerCode | Tiki cung cấp |
| clientId | Tiki cung cấp |
| identifyCode | customer_code hoặc số điện thoại của khách hàng |
| timestamp | milliseconds hiện tại |
| sig | chuỗi mã hoá dữ liệu |

- Cách mã hoá dữ liệu (signature)

```javascript
payload = timestamp + "." + clientId + "." + "partnerCode"+ "." + identifyCode
secret = "<client_secret>" // key được cung cấp ở trên
encoded_payload = base64_safeurl_encode_no_padding(payload)
signature = HMAC_SHA256(secret, encoded_payload)
```

### 3. Callback về webview khi thanh toán hoàn thành

- URR format: {url_basic}/apps/vn.tiki.vip/callback/index?partnerCode={partnerCode}&clientId={clientId}&transactionId={transactionId}&timestamp={timestamp}&sig={sig}

| Parameter | Values |
| ----------- | ------------------------------------- |
| partnerCode | Tiki cung cấp |
| clientId | Tiki cung cấp |
| transactionId | mã giao dịch của đối tác |
| timestamp | milliseconds hiện tại |
| sig | chuỗi mã hoá dữ liệu |

- Cách mã hoá dữ liệu (signature)

```javascript
payload = timestamp + "." + clientId + "." + "partnerCode"+ "." + transactionId
secret = "<client_secret>" // key được cung cấp ở trên
encoded_payload = base64_safeurl_encode_no_padding(payload)
signature = HMAC_SHA256(secret, encoded_payload)
```