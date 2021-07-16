---
title: Serverless Backend với Cloud Run
---

## Giới thiệu

Cloud Run cho phép chúng ta phát triển và triển khai các ứng dụng đóng gói theo phương thức container trên nền tảng không máy chủ (serverless) - được quản lý hoàn toàn bởi Google Cloud

- **HTTPS URLs**
  Mỗi dịch vụ Cloud Run được cung cấp một điểm kết nối HTTPS ổn định để người dùng truy cập trực tiếp từ Internet.

- **Fully managed và Fast Autoscaling**
  Cloud Run loại bỏ tất cả các hoạt động quản lý cơ sở hạ tầng bằng cách tự động tăng và giảm quy mô gần như ngay lập tức, tùy thuộc vào lưu lượng truy cập. Cloud Run chỉ tính phí cho tài nguyên mà bạn sử dụng.

- **Any language, any library, any binary**
  Sử dụng ngôn ngữ lập trình hay thư viện bất kỳ, hoặc thậm chí sử dụng các tệp nhị phân của riêng bạn.

## Các đầu bài phù hợp để sử dụng Cloud Run

### Host dịch vụ websites

![Image1](https://www.gstatic.com/bricks/image/dad5a0272f27af95525b772149adfdba13a83d83d1d5f7d84d5bb722a010d5dc.svg)

### API Backend (REST hoặc gRPC)

![Image2](https://www.gstatic.com/bricks/image/ba7e4e7b69dfbdf12d02b231c54788f11e5460bf05e899aab5bc121fd8d9d741.svg)

### Pipeline xử lý data tự động

![Image4](https://lh3.googleusercontent.com/XZywI_U8VnnyVluYowhu4J5c-q0iIiTbTksqFiDYP6w7f-IOeChVzzAUZC427e1hzfJ1CFHInUxE=e14-rw-lo-sc0xffffff-h400-w953)

**Các bạn có thể xem thêm thông tin về Cloud Run [tại đây](https://cloud.google.com/run), cũng như tài liệu tham khảo documentation chi tiết [tại đây](https://cloud.google.com/run/docs/how-to)**
(Các đường dẫn đến trang Google Cloud bằng tiếng Anh)

## Ví dụ - Tutorial

### _1. Dịch vụ web HelloWorld bằng Python_

Chi tiết ví dụ này xin tham khảo trực tiếp từ trang hướng dẫn của Google Cloud [tại đây](https://cloud.google.com/run/docs/quickstarts/build-and-deploy/python)

### _2. Dịch vụ backend để thực hiện bước trao đổi auth code lấy auth token với Tini App Platform APIs_

Chi tiết [tại đây](auth-backend)

_Bài viết được đóng góp bới anh Ken Lý - Đại Diện Google Cloud Platform_
