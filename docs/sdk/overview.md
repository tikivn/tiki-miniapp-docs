---
title: Tổng quan về Tini App SDK
---

<!-- <img src="/img/TiniApp_Development_to_End_users_diagram.png" width="700px" alt="Tini App SDK"/> -->
<iframe  width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FRBKId028r1sdqChrPoDpPm%2F%255BPublic%255D-Tini-OS%3Fembed_host%3Dshare%26kind%3D%26node-id%3D1%253A78586%26page-id%3D0%25253A1%26scaling%3Dscale-down%26starting-point-node-id%3D1%253A78586" allowfullscreen></iframe>

## Giới thiệu



Tini App SDK là bộ công cụ thuộc sản phẩm `Tini App OS`. Được cài đặt để biến bất kì ứng dụng nào trở thành một `Super App`; bao gồm toàn bộ kho ứng dụng Tini App và hệ sinh thái của Tiki. Sau khi tích hợp Tini App SDK, ứng dụng của bạn sẽ có các thành phần sau:

- **Kho ứng dụng Tini App:** Bạn hoàn toàn bật/tắt hiện thị của các Tini App trên riêng ứng dụng của bạn
- **Hệ sinh thái của Tiki như:** TikiVIP, đăng nhập, thanh toán, ...

Ngoài các Tini App có sẵn và hệ sinh thái của Tiki, các bạn hoàn toàn có khả năng phát triển thêm các Tini App của mình, thông qua các công cụ mà Tini App cung cấp:

- **Tini App Studio:** Công cụ lập trình phát triển ứng dụng Tini App
- **Tini Console:** Công cụ quản lý và phát hành ứng dụng Tini App của bạn; quản lí sự hiển thị các ứng dụng Tini App trên kho ứng dụng
- Chi tiết [xem tại đây](https://developers.tiki.vn/docs/development/studio/overview).

Sau khi ứng dụng Tini App của bạn được phát hành trên kho ứng dụng, mặc nhiên sẽ có trên tất cả các `Super App` đang tích hợp Tini App SDK.

## Các bước triển khai

<img src="/img/sdk/tini-app-sdk-step.png"  alt="Tini App SDK"/>

#### Tạo tài khoản nhà phát triển

Liên hệ với chúng tôi để tạo một tài khoản hỗ trợ tích hợp Tini App SDK

- Gửi email cho chúng tôi tại tiniapp@tiki.vn với tiêu đề: Đăng ký sử dụng Tini App SDK
- Hoặc truy cập [community.tiki.vn](https://community.tiki.vn) đặt câu hỏi cho chúng tôi về Tini App SDK

#### Thiết kế vùng hoạt động

Thiết kế một vùng hoạt động cho Tini App trên ứng dụng của bạn như: Màn hình chứa Tini App, điểm dẫn vào Tini App, ... Ví dụ về vùng hoạt động:

- Đối với iOS có thể dùng `UIViewController` ([Tại đây](https://developer.apple.com/documentation/uikit/uiviewcontroller)) để chưa một `TiniAppView`. Hoặc dùng chính TiniAppViewController trong bộ SDK để hiển thị.
- Đối với Android có thể dùng `Activity`, `Fragment` ([Tại đây](https://developer.android.com/reference/android/app/Activity)) để chứa `TiniAppView`. Hoặc dùng chính TiniAppActivity trong bộ SDK để hiển thị.

#### Tích hợp Tini App SDK

Làm theo hướng dẫn ở các bước tiếp theo để tích hợp Tini App SDK vào ứng dụng của bạn. Sử dụng vùng hoạt động đã được thiết kế để hiển thị Tini App.

- [Cài đặt cho iOS](/docs/sdk/setup-for-ios)
- [Cài đặt cho Android](/docs/sdk/setup-for-android)
<!-- - [Cài đặt cho React-Native](/docs/sdk/setup-for-react-native) -->

#### Xây dựng các APIs hỗ trợ cho Tini App

Tini App SDK cho phép tuỳ chỉnh một số thành phần để dễ dàng kết nối các tính năng trong ứng dụng của bạn vào Tini App. Các bước cần làm có thể là cấu hình và xây dựng các APIs cho Tini App như: Các bước thanh toán, đăng nhập, ... Chi tiết bạn vui lòng xem ở các tài liệu Tích hợp Tini App SDK.
