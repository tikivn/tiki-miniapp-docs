---
title: Bật tính năng mobile web
---

Tini App đã hỗ trợ nền tảng mobile web, giờ đây người dùng đã có thể truy cập ứng dụng của bạn thông qua website của Tiki khi truy cập địa chỉ của ứng dụng tại https://tiki.vn/apps/&lt;appId&gt;.

## Bật tính năng mobile web

Để mở tính năng mobile cho ứng dụng của bạn, hãy làm theo hướng dẫn sau:

**Bước 1**: Truy cập [Tini Console](https://developers.tiki.vn/apps/) và vào ứng dụng mà bạn muốn bật tính năng mobile web.

**Bước 2**: Vào trang Tiện ích của bạn / Cài đặt / Tổng quát, ở mục Nền tảng, bạn bật toggle Mweb / Mobile web.

![Tini Console - Cài đặt tổng quát](https://salt.tikicdn.com/ts/tiniapp/68/09/c5/e6ea7d61ac01149ec2f179ee87d5aa5b.png)

**Bước 3**: Tải lên một bản build (không cần thay đổi code) và tạo một version mới cho ứng dụng của bạn từ phiên bản mới nhất của [Tini Studio](https://developers.tiki.vn/downloads).

**Bước 4**: Vào trang Tiện ích của bạn / Release, chọn version có build mà bạn vừa tải. Ở mục Nền tảng trong phần thông tin version, bạn bật toggle Mweb / Mobile web.

![Tini Console - Bật mobile web cho phiên bản](https://salt.tikicdn.com/ts/tiniapp/d3/f6/01/213d9a042bc6669a5e6ee231c42cc0cb.png)

**Bước 5**: Gửi version đi kiểm duyệt và đợi chấp thuận từ đội ngũ vận hành.

:::info Thông tin

Bạn chỉ cần thực hiện các bước trên một lần. Từ những lần sau, ứng dụng mặc định được bật sẵn việc hỗ trợ mobile web.

:::

:::warning Lưu ý

Do sự khác biệt môi trường giữa nền tảng iOS/Android và mobile web, một số JS API có thể không hoạt động hoặc có hành vi khác. Bạn vui lòng kiểm tra lại các tính năng trên phiên bản mobile web của ứng dụng để đảm bảo trải nghiệm người dùng được tốt nhất.

:::

## Tắt tính năng mobile web

Để tắt tính năng mobile web khi ứng dụng đang chạy trên website Tiki, bạn có thể vào trang Cài đặt / Tổng quát và tắt toggle Mweb / Mobile web ở mục Nền tảng.

:::note Ghi chú

Tuỳ chỉnh trong trang Cài đặt / Tổng quát sẽ ghi đè tuỳ chỉnh version của ứng dụng.

:::