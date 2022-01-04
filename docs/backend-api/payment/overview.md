---
title: Tổng quan

description: sơ lược về bán hàng trên Tiki mini app và tích hợp thanh toán
---

Nhắc đến Tini App là nhắc đến Tiki - một sàn thương mại điện tử có tầm cỡ. Cho nên chả có gì đáng ngạc nhiên khi nền tảng mini program này hỗ trợ tối đa các đối tác trong việc bán hàng trên ứng dụng của mình.

Nói ngắn gọn, đối tác xây dựng ứng dụng; tạo ra sản phẩm trên Seller Center; tích hợp sản phẩm vào ứng dụng.

Về phía người dùng Tiki, họ chỉ cần mở ứng dụng từ Kho tiện ích của Tiki App là họ có thể thoải mái đặt hàng. Họ sẽ thanh toán thông qua dịch vụ payment của Tiki. 

Để có thể mang hàng hoá lên Tini App của mình, điều kiện đầu tiên là bạn có 2 tài khoản:

- Tài khoản Nhà phát triển - nên là loại tài khoản Công ty vì bạn sắp sửa tiến hành khai thác kinh doanh. Tài khoản này cho phép bạn đăng ký tạo ứng dụng, quản lý phiên bản, phát hành ứng dụng trên Kho tiện ích. Tham khảo: [Đăng ký Nhà phát triển](/docs/introduce/register)
- Tài khoản Seller - cho phép bạn tạo và quản lý sản phẩm trên Tiki (SKU). Tham khảo: [Hướng dẫn đăng ký tài khoản bán hàng tại Tiki](https://hocvien.tiki.vn/faq/huong-dan-dang-ky-ban-hang-va-ky-hop-dong/)

Sau đây là các công đoạn cụ thể

## 1. Liên kết tài khoản

Xem hướng dẫn cách liên kết tài khoản tại [đây](link-accounts)

## 2. Tạo ra và đăng ký duyệt các sản phẩm trên Seller Center (tuỳ chọn)

***Quan trọng***: Bạn không nhất thiết phải tạo thủ công các SKU trên Seller Center nếu như bạn chỉ bán chúng trên Tini App mà không bán trên sàn Tiki. Vì sau khi tính năng thanh toán cho Tini App (Production) được bật lên, các SKU bán trên Tini App của bạn sẽ được hệ thống Tiki tự động tạo ra trên Seller Center.

Không phải tất cả các loại sản phẩm bán trên sàn TMĐT đều có thể bán trên Tini App. 

Nhiều Tini App của cùng một Seller có thể dùng chung một SKU.

Xem hướng dẫn tạo sản phẩm tại [đây](create-sku).

## 3. Tích hợp thanh toán cho Tini App

Sau khi tính năng thanh toán của ứng dụng được mở, bạn cần thiết lập thông tin thanh toán cho ứng dụng.

Xem hướng dẫn tạo tích hợp thanh toán tại [đây](payment-integration)

## 4. Tích hợp sản phẩm vào ứng dụng

## 5. Kiểm thử trên môi trường Sandbox

***Thận trọng:*** Hãy đảm bảo rằng bạn sử dụng đúng bộ Base URL, Key/ Secret của Sandbox khi bạn kiểm thử trên môi trường Sandbox; tránh trường hợp Key/ Secret của Sandbox nhưng lại dùng Base URL của môi trường Production hoặc ngược lại.

Xem hướng dẫn kiểm thử trên môi trường Sandbox tại [đây](../platform-api/sandbox).

## 6. Kiểm thử trên môi trường Production

Để kiểm thử việc thanh toán trên môi trường Production, bạn cần phải sử dụng Dev Assistant hoặc quét mã QR của ứng dụng. Việc thanh toán thật sẽ diễn ra.

Xem hướng dẫn kiểm thử trên môi trường Production tại [đây](../platform-api/production)

## 7. Xử lý đơn hàng

Xem [Sơ đồ xử đơn hàng](flow)  

## 8. Sao kê và đối soát

Liên hệ với [Seller Center](https://sellercenter.tiki.vn/new#) để có thông tin chi tiết. Tham khảo: https://hocvien.tiki.vn/faq/huong-dan-kiem-tra-sao-ke-va-doi-soat-giao-dich/ 

## 9. Tiki thanh toán

Liên hệ với [Seller Center](https://sellercenter.tiki.vn/new#) để có thông tin chi tiết. Tham khảo: https://hocvien.tiki.vn/faq/huong-dan-kiem-tra-sao-ke-va-doi-soat-giao-dich/ 
