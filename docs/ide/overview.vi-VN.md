---
order: 0
title: Tổng quan về MiniApp Studio
---

## Giới thiệu

Tiki MiniApp Studio (hoặc Tiki IDE) là công cụ dùng để phát triển mini app trên nền tảng Tiki MiniApp. Công cụ này cung cấp các tính năng như quản lý mini app, phát triển, trình giả lập, debug, và upload app lên Tiki Developer Center.

Hiện tại bạn có thể tải Tiki MiniApp Studio [tại đây](https://dev-tikiscp.tbox.vn/miniapps/studio/0.4.3/tiki_mini_app_studio_0.4.3.dmg).

## Tính năng

### Quản lý các dự án mini app

Tương tự như các công cụ phát triển quen thuộc như Visual Studio Code, Atom..., Tiki MiniApp Studio hỗ trợ tạo các dự án mini app, quản lý các tập tin mã nguồn, công cụ git và quản lý npm package.

### Phát triển

Trong quá trình phát triển, nhà phát triển sẽ làm việc với các công cụ:

* Trình soạn thảo: Hỗ trợ syntax highlight cho các ngôn ngữ chuyên biệt như TXML/TCSS và các JS API của Tiki MiniApp.
* Autocomplete: Tăng tốc độ code khi tự động đề xuất cú pháp và hàm của TXML/TCSS và APIs.
* Linting: Kiểm tra nhanh các lỗi cú pháp trong quá trình phát triển.

### Trình giả lập

Giả lập quá trình chạy mini app ngay trên máy mà không cần phải upload app lên Tiki Developer Center.

* Live preview: Xem trực tiếp các thay đổi trong quá trình phát triển.
* Giả lập thiết bị: Một số thiết bị iOS và Android được giả lập sẵn để nhà phát triển xem trước hành vi của mini app.
* Giả lập tính năng thiết bị: Giả lập các tính năng của thiết bị di động như location, camera, record...

### Debug

Tiki MiniApp Studio cung cấp một số công cụ để nhà phát triển có thể dễ dàng debug mini app:

* Trình giả lập: Các lỗi xảy ra trong quá trình giả lập sẽ được hiển thị ngay trên trình giả lập.
* DevTools: Các lỗi liên quan đến network, storage có thể được debug thông qua công cụ DevTools.
* Remote debug: Chạy thử ứng dụng trên thiết bị di động để debug các lỗi liên quan đến thiết bị.

### Upload app

Sau khi hoàn thành việc phát triển tính năng, nhà phát triển có thể upload mini app lên Tiki Developer Center để publish lên Tiki App Store.
