---
title: Tổng quan về Tini SDK
description: Giới thiệu và hướng dẫn cách tích hợp Tini SDK
---

## Giới thiệu

Tini SDK là bộ công cụ thuộc **Tini Platform**. Nó giúp biến một ứng dụng bất kì trở thành một *Siêu ứng dụng* (hay *Super App*). Tini SDK đi kèm toàn bộ kho ứng dụng Tini App và hệ sinh thái của Tiki. Sau khi tích hợp Tini SDK, ứng dụng của bạn sẽ có các thành phần sau:

- **Kho ứng dụng Tini App:** Bạn hoàn toàn có thể bật/tắt hiển thị của các Tini App cho riêng ứng dụng của bạn.
- **Hệ sinh thái của Tiki như:** TikiVIP - ứng dụng mua sắm dành cho khách hàng VIP, tính năng đăng nhập, tính năng thanh toán...

Ngoài các Tini App có sẵn và hệ sinh thái của Tiki, các bạn hoàn toàn có khả năng phát triển thêm các Tini App của riêng mình thông qua các công cụ mà Tini App cung cấp:

- **[Tini App Studio](/downloads):** Bộ công cụ lập trình phát triển ứng dụng Tini App. Chi tiết [xem tại đây](/docs/development/studio/overview).
- **[Tini Console](/apps):** Công cụ quản lý và phát hành ứng dụng Tini App.

Sau khi ứng dụng Tini App của bạn được phát hành trên kho ứng dụng, chúng hoàn toàn có thể được bật trên các **Super App** đang tích hợp Tini SDK.

### Demo

<!-- <img src="/img/TiniApp_Development_to_End_users_diagram.png" width="700px" alt="Tini SDK"/> -->
<iframe width="414" height="736" style={{ margin: '0 auto', display: 'flex' }} src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FRBKId028r1sdqChrPoDpPm%2FTini-OS%3Fpage-id%3D0%253A1%26node-id%3D1%253A78586%26viewport%3D821%252C649%252C0.14%26scaling%3Dmin-zoom%26starting-point-node-id%3D1%253A78586" allowfullscreen></iframe>

## Các bước triển khai

<img src="https://salt.tikicdn.com/ts/tiniapp/0f/e5/e2/08459c104b6d21c351839c0bb7ad5df4.png"  alt="Steps to integrate with Tini SDK"/>

#### Liên hệ và đăng ký tài khoản

Bạn vui lòng gửi email đến <a href="mailto:tiniapp@tiki.vn?subject=%C4%90%C4%83ng%20k%C3%BD%20s%E1%BB%AD%20d%E1%BB%A5ng%20Tini%20App%20SDK">tiniapp@tiki.vn</a> với tiêu đề: *Đăng ký sử dụng Tini SDK*

#### Download Tini SDK

Sau khi tạo tài khoản thành công, chúng tôi sẽ gửi cho bạn link để download Tini SDK cùng các thông tin cài đặt tương ứng. Sau đó bạn làm theo hướng dẫn để tích hợp.

#### Tích hợp Tini SDK và APIs

Thiết kế một vùng hoạt động cho Tini App trên ứng dụng của bạn như: Màn hình chứa Tini App, điểm dẫn vào Tini App, ... Ví dụ về vùng hoạt động:

- Đối với iOS có thể dùng `UIViewController` ([Tại đây](https://developer.apple.com/documentation/uikit/uiviewcontroller)) để chưa một `TiniAppView`. Hoặc dùng chính TiniAppViewController trong bộ SDK để hiển thị.
- Đối với Android có thể dùng `Activity`, `Fragment` ([Tại đây](https://developer.android.com/reference/android/app/Activity)) để chứa `TiniAppView`. Hoặc dùng chính TiniAppActivity trong bộ SDK để hiển thị.

Làm theo hướng dẫn ở các bước tiếp theo để tích hợp Tini SDK vào ứng dụng của bạn. Sử dụng vùng hoạt động đã được thiết kế để hiển thị Tini App.

- [Cài đặt cho iOS](/docs/sdk/setup-for-ios)
- [Cài đặt cho Android](/docs/sdk/setup-for-android)
<!-- - [Cài đặt cho React-Native](/docs/sdk/setup-for-react-native) -->

Tini SDK cho phép tuỳ chỉnh một số thành phần để dễ dàng kết nối các tính năng trong ứng dụng của bạn vào Tini App. Các bước cần làm có thể là cấu hình và xây dựng các APIs cho Tini App như: Các bước thanh toán, đăng nhập, ... Chi tiết bạn vui lòng xem ở các tài liệu Tích hợp Tini SDK.
