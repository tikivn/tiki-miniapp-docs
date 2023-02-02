---
title: Tích hợp webview cho hệ thống Tiki Vip
description: Giới thiệu và hướng dẫn cách tích hợp webview cho hệ thống Tiki Vip
---

## Giới thiệu

Tài liệu hướng dẫn và giới thiệu cách tích hợp WebView của chương trình Tiki Vip vào các đối tác thanh toán.


## Các bước triển khai

1. Tiki cung cấp cho đối tác:

- `partner_code`: là một chuỗi duy nhất gắn với từng Super App
- `client_id`: là một UUID gắn liền với Super App
- `client_secret`: key sử dụng để mã hoá signature
- `url`: url webview cho đối tác

2. Định nghĩa full_url

- URL basic(url): https://tiki.vn/apps/vn.tiki.vip?partner_code={partner_code}&client_id={client_id}&identify_code={identify_code}&timestamp={timestamp}&sig={sig}

| Parameter | Values |
| partner_code | Tiki cung cấp |
| client_id | Tiki cung cấp |
| identify_code | customer_code hoặc số điện thoại của khách hàng |
| timestamp | milliseconds hiện tại |
| sig | chuỗi mã hoá dữ liệu |

- Cách mã hoá dữ liệu (signature)

```javascript
payload = timestamp + "." + client_id + "." + "partner_code"+ "." + identify_code
secret = "<client_secret>" // key được cung cấp ở trên
encoded_payload = base64_safeurl_encode_no_padding(payload)
signature = HMAC_SHA256(secret, encoded_payload)
```

3. Tích hợp lúc thanh toán

4. Callback về webview khi thanh toán hoàn thành