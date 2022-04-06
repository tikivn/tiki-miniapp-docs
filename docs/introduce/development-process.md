---
title: Quy trình phát triển Tini App

description: các bước xây dựng một Tiki mini app trên nền tảng Tini App
---

<img src="/img/TiniApp_Development_Process.jpg" alt="Tini App Development Process" style={{ margin: '0 auto', display: 'flex' }}/>

:::note Quan trọng
Nếu bạn có bất kỳ thắc mắc hoặc trở ngại trong quá trình đăng ký Nhà phát triển hay xây dựng và phân phối Tiki mini app, hãy liên hệ với chúng tôi qua trang [Community](https://community.tiki.vn/) hoặc [Slack](https://join.slack.com/t/tini-apps/shared_invite/zt-z7ikk3ox-rCirvNmeOrSvUo_tW67D4Q).
:::

## 1. Đăng ký Nhà phát triển

Đăng ký trở thành Nhà phát triển tiện ích trên nền tảng Tiki mini app. Bạn sẽ chọn lĩnh vực kinh doanh, điền vào biểu mẫu đăng ký, tải lên các giấy tờ chứng thực pháp nhân như Giấy phép kinh doanh.

Nếu bạn muốn kinh doanh sản phẩm hay dịch vụ trong các tiện ích của mình, bạn cần tạo tài khoản trong Seller Center trên sàn Tiki. Sau đó liên kết tài khoản hai tài khoản với nhau.

<img src="/img/Developer_Registration_diagram.png" width="750px" alt="Developer Registration diagram" style={{ margin: '0 auto', display: 'flex' }}/>

## 2. Tạo và thiết lập app

Quá trình này chia thành hai công đoạn nhỏ:

### Tạo và thiết lập

Tạo tiện ích: thực chất bạn báo với Tiki rằng mình sắp sửa xây dựng một ứng dụng cụ thể và xa hơn sẽ phát hành trên Kho tiện ích.

Thiết lập cho tiện ích: bao gồm việc

- Cấp quyền truy cập cho các thành viên tham gia xây dựng ứng dụng (Admin, Programmer, Tester).
- Yêu cầu Tiki cấp quyền cần thiết cho tiện ích của bạn
- Cấu hình cho tiện ích như thanh toán, vận chuyển. 

### Phát triển

1. Tải về và cài đặt Tini Studio trên máy tính của bạn.
2. Phát triển dự án trên Tini Studio.
3. Kiểm thử ngay trên Tini Studio.
4. Tải bản build lên Tini Console.
5. Kiểm thử với thiết bị thực với Dev Assistant

<img src="/img/App_Development_diagram.png" width="750px" alt="App Development diagram" style={{ margin: '0 auto', display: 'flex' }}/>

## 3. Quản lý phiên bản và phân phối

Gửi phiên bản của ứng dụng cho bộ phận Kiểm duyệt của Tiki. Nếu bản build được chấp thuận, nó sẽ được phép phát hành trên Kho tiện ích. Người dùng có thể sử dụng.

:::note Lưu ý
Bạn nên đọc kĩ Nguyên tắc kiểm duyệt trước khi gửi kiểm duyệt. Và điền đầy đủ thông về phiên bản.  
:::

<img src="/img/Submit_Build_for_Review_diagram.png" width="400px" alt="Submit Build for Review diagram" style={{ margin: '0 auto', display: 'flex' }}/>

## 4. Vận hành

Khai thác tiện ích.