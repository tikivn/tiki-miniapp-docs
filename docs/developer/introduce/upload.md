---
order: 12
section: 'developer'
category:
  vi-VN: Hướng dẫn nhà phát triển 
  en-US: MiniApp Development Guide
title: 
  vi-VN: Quy trình đăng tải ứng dụng
  en-US: Upload MiniApp Process
---

## Sử dụng App ID

Sau khi [tạo ứng dụng](/docs/developer/introduce/create) với App ID mong muốn, bạn sử dụng thông tin này cho project tạo với [Tiki MiniApp Studio](/docs/ide/overview). Thông qua việc tạo project mới hoặc sửa tập tin package.json:

<img alt="Tạo project mới" src="https://salt.tikicdn.com/ts/social/a6/73/d8/c2ddf82aa64a89863e9ab9dfaeee9c3e.jpg" width="100%" />
<img alt="Sửa tập tin package.json" src="https://salt.tikicdn.com/ts/upload/cb/ca/e7/fbbf3160bfbbba86508991a1eb860ab0.jpg" width="100%" />

## Đánh số bản cập nhật

Trong tập tin package.json, có hai giá trị bạn cần lưu ý là `version` và `buildNumber`:

* `version`: Cho biết phiên bản của bản cập nhật theo định dạng `x.y.z`. Khi tải lên bản cập nhật mới, `version` của bản cập nhật mới phải lớn hơn hoặc bằng `version` hiện tại đang có trên Dev Center.
* `buildNumber`: Cho biết lượt tải lên đối với bản cập nhật. Khi tải lên bản build mới, `buildNumber` phải lớn hơn `buildNumber` của bản build trước đó. *Lưu ý: dù version có thay đổi thì buildNumber vẫn không bị reset.*

## Tải lên bản cập nhật

Khi đã hoàn thiện bản cập nhật và nhập đầy đủ thông tin cho `version` và `buildNumber`, bạn có thể đăng tải project lên Dev Center thông qua công cụ Upload App:

* Mở Command Palette `Cmd + Shift + P` tìm "Upload App"
* Hoặc menu Tools > Upload App

Lưu ý: 

* Tính năng Upload App yêu cầu bạn phải đăng nhập tài khoản Dev Center trên Studio.
* Nhớ chọn đúng Developer Account trước khi Upload App hoặc sẽ bị lỗi `invalid permission`.
* Sau khi tải bản cập nhật lên Dev Center, máy chủ sẽ mất một khoảng thời gian để tiến hành xử lý bản build trước khi trả về trạng thái `Ready`.

---

### Đăng nhập Studio bằng Developer Token (chỉ dành cho Hackathon)

Đối với trường hợp cần đăng nhập vào Studio hoặc Dev Center nhưng không thể đăng nhập trên trang tala.xyz thì bạn có thể dùng chức năng Login with Developer Token. Các bước thực hiện như sau:

1. Mở Studio từ version 1.2.6 trở lên.
1. Dùng Command Palette `Cmd + Shift + P` tìm "Login with Developer Token"
1. Nhập token được cấp và chọn Login
1. Studio sẽ mở trang Dev Center và tiến hành đăng nhập