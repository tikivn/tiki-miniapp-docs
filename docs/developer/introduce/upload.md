---
title: Quy trình đăng tải ứng dụng
---

## Sử dụng App ID

Sau khi [tạo ứng dụng](/docs/developer/introduce/create) với App ID mong muốn, bạn sử dụng thông tin này cho project tạo với [Tini Studio](/docs/studio/overview). Thông qua việc tạo project mới hoặc sửa tập tin package.json:

<img alt="Tạo project mới" src="https://salt.tikicdn.com/ts/social/a6/73/d8/c2ddf82aa64a89863e9ab9dfaeee9c3e.jpg" width="100%" />
<img alt="Sửa tập tin package.json" src="https://salt.tikicdn.com/ts/upload/cb/ca/e7/fbbf3160bfbbba86508991a1eb860ab0.jpg" width="100%" />

## Đánh số bản cập nhật

Trong tập tin package.json, có hai giá trị bạn cần lưu ý là `version` và `buildNumber`:

- `version`: Cho biết phiên bản của bản cập nhật theo định dạng `x.y.z`. Khi tải lên bản cập nhật mới, `version` của bản cập nhật mới phải lớn hơn hoặc bằng `version` hiện tại đang có trên Dev Center.
- `buildNumber`: Cho biết lượt tải lên đối với bản cập nhật. Khi tải lên bản build mới, `buildNumber` phải lớn hơn `buildNumber` của bản build trước đó.

## Tải lên bản cập nhật

Khi đã hoàn thiện bản cập nhật và nhập đầy đủ thông tin cho `version` và `buildNumber`, bạn có thể upload app lên Dev Center thông qua công cụ Upload App:

- Mở Command Palette `Cmd + Shift + P` tìm "Upload App"
- Hoặc menu Tools > Upload App

Lưu ý:

- Tính năng Upload App yêu cầu bạn phải đăng nhập tài khoản Dev Center trên Studio.
- Nhớ chọn đúng Developer Account trước khi Upload App hoặc sẽ bị lỗi `invalid permission`.
- Sau khi tải bản cập nhật lên Dev Center, máy chủ sẽ mất một khoảng thời gian để tiến hành xử lý bản build trước khi trả về trạng thái `Ready`.
