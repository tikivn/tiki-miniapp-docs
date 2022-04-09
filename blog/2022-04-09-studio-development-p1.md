---
title: Quá trình xây dựng IDE cho Tini App (Phần 1)
---

# Quá trình xây dựng IDE cho Tini App (Phần 1)

![Tini App Studio](https://raw.githubusercontent.com/tikivn/tiki-miniapp-docs/master/static/img/studio-development.jpg)

Với sự phát triển không ngừng của ngành công nghiệp 4.0 và quá trình chuyển đổi số của các doanh nghiệp đang ngày càng tăng. Các khái niệm mới bắt đầu ra đời, điển hình như: AI, Big Data, IoT, Cloud, Blockchain, … Chắc hẳn các cụm từ này không còn quá xa lạ với các bạn, nó hầu như được đề cập khắp mọi nơi, ở các sản phẩm công nghệ đang có trên thị trường.

Cùng với sự phát triển đó, các doanh nghiệp công nghệ đang dần xoay chuyển để trở thành một hệ sinh thái đa dịch vụ, nơi mà khách hàng có thể tìm kiếm và sử dụng được nhiều loại hình dịch vụ khác nhau trên cùng một nền tảng ứng dụng. Ví dụ như Tiki, ngoài việc mua các sản phẩm và dịch vụ do Tiki cung cấp, khách hàng có thể lựa chọn các loại hình dịch vụ khác từ các đối tác bên ngoài như: Đặt vé máy bay, mua bảo hiểm, dịch vụ tài chính điện tử, hay thậm chí có thể đặt lịch cắt tóc trên Tiki.

Với việc xoay chuyển để trở thành một hệ sinh thái đa dịch vụ, trong thế giới của các nhà phát triển ứng dụng công nghệ có một khái niệm mới được ra đời, đó là Super App (Siêu ứng dụng).

Ở nội dung của chuỗi bài viết ***“Quá trình xây dựng IDE cho Tini App”*** chúng ta sẽ đề cập tới Super App là gì; những khó khăn trong việc phát triển Super App; Tini App ra đời như thế nào và có mối liên hệ gì với Super App; để phát triển Tini App đạt hiệu quả tốt nhất ta cần xây dựng những gì. Ta cũng dành thời gian để đi sâu hơn về công nghệ và kiến trúc của IDE cho Tini App.

<br/>

**Nội dung bao gồm:**

1. Phần mở đầu *(Bạn đang đọc bài này)*
2. Sơ lược về Tini App và tại sao phải xây dựng IDE?
3. Ngôn ngữ cho Tini App và công cụ compiler
4. Chọn giải pháp và xây dựng editor
5. Giả lập môi trường ứng dụng Tini App và các cộng cụ debug
6. Xây dựng các công cụ Tini Console và định hướng phát triển trong tương lai

<br/>

*Lưu ý: Bài viết được viết dưới góc nhìn của một người làm sản phẩm. Tập trung chủ yếu vào mục tiêu tìm kiếm giải pháp xây dựng hiệu quả. Không nhằm mục đích đánh giá hay so sánh bất kì công nghệ nào.*
