---
title: Tích hợp webview cho hệ thống Tiki Vip
description: Giới thiệu và hướng dẫn cách tích hợp webview cho hệ thống Tiki Vip
---

## Giới thiệu

Tài liệu hướng dẫn và giới thiệu cách tích hợp WebView của chương trình Tiki Vip vào các đối tác thanh toán.

## Danh sách tích hợp

### Thanh toán

| # | Tiki | Đối tác                              | Mô tả |  |
| --- | ----------- | ------------------------------------- |--- |--- |
| 1 | Phương pháp Authentication  | N/A | Đối tác thực hiện khi gọi webview/api của Tiki |  |
| 2 | API lấy thông tin url để mở webview | N/A | Đối tác thực hiện tích hợp mở webview của Tiki|  [Xem chi tiết URL](https://developers.tiki.vn/en/docs/sdk/backend/ref#4-api-l%E1%BA%A5y-th%C3%B4ng-tin-url-webview)|
| 3 | URL kết quả thanh toán (api lấy thông tin url | N/A| Chuyển về màn hình kết quả đơn hàng của tiki   (phụ thuộc vào đối tác) |  [Xem chi tiết URL](https://developers.tiki.vn/en/docs/sdk/backend/ref#4-api-l%E1%BA%A5y-th%C3%B4ng-tin-url-webview) |
| 4 | API kiểm tra giao dịch | N/A | Đối tác kiểm tra giao dịch tại Tiki | [Xem chi tiết API](https://developers.tiki.vn/en/docs/sdk/backend/ref#2-api-%C4%91%E1%BB%83-l%E1%BA%A5y-th%C3%B4ng-tin-chi-ti%E1%BA%BFt-c%E1%BB%A7a-transaction-tr%C3%AAn-tiki) |
| 5 | API IPN trạng thái giao dịch | N/A | Cập nhật trạng thái thanh toán sang Tiki | [Xem chi tiết API](https://developers.tiki.vn/en/docs/sdk/backend/ref#1-api-nh%E1%BA%ADn-ipn-t%E1%BB%AB-%C4%91%E1%BB%91i-t%C3%A1c) |
| 6 | N/A |  Phương pháp Authentication | Tiki thực hiện khi gọi sang đối tác | |
| 7 | N/A | URL (hoặc function) để Tiki gọi qua màn hình thanh toán | Tiki sẽ thực hiện gọi từ webview để chuyển qua màn hình thanh toán của đối tác | |
| 8 | N/A | API tạo giao dịch | Tiki gọi API để tạo giao dịch khi chuyển qua màn hình thanh toán của đối tác (phụ thuộc vào đối tác) | |
| 9 | N/A | API kiểm tra giao dịch | Tiki gọi API để kiểm tra các giao dịch từ đối tác + phục vụ quá trình vận hành | |
| 10 | N/A | API refund (hoàn tiền từng phần + toàn phần) | Tiki gọi API để hoàn tiền cho khách hàng | |

### Đối soát

Tiki hỗ trợ thực hiện đối soát tự động qua API hoặc SFPT. Hai bên cùng thống nhất template + thời gian.

## Luồng tích hợp thanh toán

![image](https://salt.tikicdn.com/ts/tiniapp/6f/aa/b9/76e292976b31650a12d0d526d971d309.png)

- (1): Tiki cung cấp cho đối tác API lấy url để mở webview
- (2): Đối tác cung cấp cho Tiki API tạo giao dịch
- (3): Đối tác cung cấp cho Tiki cách mở màn hình thanh toán của đối tác
- (4): Tiki cung cấp cho đối tác API IPN ([Xem chi tiết API](docs/sdk/backend/ref#1-api-nhận-ipn-từ-đối-tác)). hoặc đối tác gửi qui định về API IPN (cập nhật kết quả giao dịch)
- (5): Tiki cung cấp cho đối tác url để chuyển qua màn hình kết quả giao dịch của Tiki

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

### 2. Đối tác thực hiện tích hợp theo workflow ở trên

`Nếu có thắc mắc hoặc thay đổi đối tác có thể trao đổi tực tiếp với Tiki`