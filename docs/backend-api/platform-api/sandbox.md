---
title: Môi trường Sandbox

description: môi trường sandbox của Tiki mini app
---

### Giới thiệu

Nhằm hỗ trợ việc test nhanh các Tini App gọi platform API mà không cần phải qua thông qua bước upload buid và đợi chờ xét duyệt thì các bạn có thể sử dụng môi trường Sandbox cho mỗi Tini App.

Môi trường Sandbox cho phép bạn:

- Kiểm thử authentication/authorization
- Kiểm thử việc thanh toán trên ứng dụng của Tiki
- Kiểm thử dịch vụ shipping trên ứng dụng của Tiki

## Sử dụng môi trường Sandbox như thế nào?

Để sử dụng Sandbox, các bạn sẽ cần đến 3 thông tin sau:

- Base URL 
- Client ID/Key
- Client Secret

Mỗi Tini App sẽ đuợc cấp một cặp Key/Secret cho môi trường Sandbox cũng như một cặp môi trường Production. Bạn có thể tìm thấy Base URL của Sandbox , Key và Secret của một Tini App bằng những bước sau:

1. Truy cập vào [Tini Console](https://developer.tiki.vn/apps).
2. Sidebar menu >> **Ứng dụng của bạn**.
3. Mở ứng dụng mà mong muốn.
4. Sidebar menu >> **Cài đặt chung** >> **Quản lý chung**.

<img style={{maxWidth: 800}} alt="popup" src="/img/sandbox.png"/>

***Chú ý***: Key/Secret là chìa khoá tiếp cận việc thanh toán, vận chuyển, xác thực; thành thử bạn nên cân nhắc kỹ mỗi khi chia sẻ Key/Secret với người khác.

Khi Tini App của bạn gọi vào API của Tiki sử dụng base URL của Sandbox và cặp Key/Secret của Sandbox thì backend của Tiki sẽ tự động nhận biết là bạn đang muốn sử dụng môi trường Sandbox và sẽ cho phép bạn có thể điều chỉnh kết quả trả về mong muốn trực tiếp trên Tini Console.

## Sử dụng môi trường Sandbox để test authentication

Chỉ việc sử dụng các config cho sandbox ở backend của bạn. Nhiêu đó là đủ !!! bạn ko cần phải làm gì thêm 

## Sử dụng môi trường Sandbox để test order và payment API

1. Sử dụng các config cho Sandbox ở backend của bạn.
2. Truy cập vào Tini Console. Mở ứng dụng mong muốn. Sidebar menu >> **Cài đặt chung** >> **Thanh toán**.
3. Điền thông tin về callback URL trong hộp **IPN Callback URL** của bạn để có thể nhận được status update từ Tiki.
4. Bạn có thể thay đổi trạng thái thanh toán ('Thành công', 'Thất bại') của môi trường Sandbox bằng cách thiết lập bên dưới **Kiểm thử thanh toán trên Sandbox**.

<img style={{maxWidth: 800}} alt="popup" src="/img/sandbox-payment.png"/>

## Sử dụng môi trường Sandbox để test shipping API

1. Sử dụng các config cho sandbox ở backend của bạn.
2. Truy cập vào Tini Console. Mở ứng dụng mong muốn. Sidebar menu >> **Cài đặt chung** >> **Vận chuyển**.
3. Điền thông tin về callback URL của bạn vào hộp **Shipping Callback URL** để có thể nhận được status update từ Tiki
4. Bạn có thể chủ động thay đổi trạng thái tracking của đơn hàng bằng cách điền thông tin vào dưới **Thay đổi trạng thái Tracking ID**.  

<img style={{maxWidth: 800}} alt="popup" src="/img/sandbox-shipping.png"/>
