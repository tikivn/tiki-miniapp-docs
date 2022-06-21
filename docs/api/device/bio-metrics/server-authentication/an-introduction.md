---
title: Giới thiệu
---

Một trong những ứng dụng của việc sử dụng xác thực sinh trắc học là xác thực người dùng.
Đôi khi việc nhớ mật khẩu tưởng đơn giản nhưng lại làm khó 1 số người. Việc sử dụng tròng mắt, dấu vân tay hoặc khuôn mặt sẽ giúp việc xác thực trở nên dễ dàng hơn nhiều so với việc nhập username/password.
Vì vậy nếu như áp dụng xác thực sinh trắc học kèm với lưu trữ ở server thì việc xác thực người dùng sẽ đơn giản và bảo mật hơn.

Việc xác thực sẽ diễn ra theo luồng như sau.
![Luồng authentication](../../../../../static/img/biometrics/biometrics-server-auth.png)

- Server yêu cầu client phải xác thực người dùng.
- Client của Tiniapp sẽ sử dụng jsapi [my.bioMetrics.createKey](./create-key) tạo ra 1 cặp key pair private và public key nếu chưa có sẵn.
  - Client của Tiniapp gửi public key lên server để lưu trữ.
- Client TiniApp sử dụng JSAPI [my.bioMetrics.createSignature](./create-signature) để tạo ra signature từ challenge ví dụ email/password
  - Tiki App sẽ prompt user xác thực sinh trắc học trên device ví dụ vân tay, face id để lấy ra private key
  - Challenge sẽ được encrypt bằng thuật toán SHA256 RSA chuẩn PKCS#1v1.5 thành chuỗi signature
- Client TiniApp dùng chuỗi signature này để gửi lên server.
- Server của TiniApp dùng public key đã lưu trước đó để decrypt signature, lấy ra thông tin challenge và tiến hành kiểm tra, trả kết quả về cho client.

Như vậy theo luồng trên đối với người dùng, họ chỉ cần dùng vân tay hoặc face id là có thể authenticate vào hệ thống của TiniApp, rất dễ dàng và tiện dụng.
