---
title: Tini App Sandbox Environment
---

### Giới thiệu

Để hỗ trợ các Tini App có thể trải nghiệm hoàn chỉnh các platform API mà không cần phải qua các bước xét duyệt tính năng thì các bạn có thể sử dụng môi trường Sandbox cho mỗi Tini App.

Môi trường Sandbox cho phép bạn có thể

- Kiểm thử được phần authentication/authorization
- Kiểm thử được phần thanh toán trên ứng dụng của Tiki
- Kiểm thử được phần dịch vụ shipping trên ứng dụng của Tiki

## Sử dụng môi trường Sandbox như thế nào?

Để sử dụng Sandbox thì các bạn sẽ cần 3 thông tin sau:

- Base URL để bạn có thể thực hiện các lệnh gọi vào môi trường Sandbox của Tini App Platform
- Client ID/Key
- Client Secret

Khi Tini App của bạn gọi vào API của Tiki sử dụng base URL của Sandbox và cặp key/secret của Sandbox thì backend của Tiki sẽ tự động nhận biết là bạn đang muốn sử dụng môi trường Sandbox và sẽ cho phép bạn có thể điều chỉnh kết quả trả về mong muốn trực tiếp trên Dev Center.

<img style={{maxWidth: 800}} alt="popup" src="/img/sandbox.png"/>

## Sử dụng môi trường Sandbox để test authentication

1. Sử dụng các config cho sandbox ở backend của bạn

1. That's it! bạn ko cần phải làm gì thêm

## Sử dụng môi trường Sandbox để test order và payment API

1. Sử dụng các config cho sandbox ở backend của bạn

1. Điền thông tin về callback URL của bạn để có thể nhận được status update từ Tiki

1. Bạn hoặc QA của team bạn có thể chủ động thay đổi trạng thái thanh toán của môi trường Sandbox bằng cách thiết lập ở phần kiểm thử như trên hình nhé

<img style={{maxWidth: 800}} alt="popup" src="/img/sandbox-payment.png"/>

## Sử dụng môi trường Sandbox để test shipping API

1. Sử dụng các config cho sandbox ở backend của bạn

1. Điền thông tin về callback URL của bạn để có thể nhận được status update từ Tiki

1. Bạn hoặc QA của team bạn có thể chủ động thay đổi trạng thái tracking của đơn hàng từ giao diện của Dev Center như hình dưới

<img style={{maxWidth: 800}} alt="popup" src="/img/sandbox-shipping.png"/>
