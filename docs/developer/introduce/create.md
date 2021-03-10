---
order: 11
section: 'developer'
category:
  vi-VN: Hướng dẫn nhà phát triển 
  en-US: MiniApp Development Guide
title: 
  vi-VN: Tạo Mini App của bạn
  en-US: Create your Mini App
---

Sau khi đăng ký và xác thực tài khoản thành công, Nhà phát triển có thể tiến hành tạo mới một ứng dụng để bắt đầu quá trình phát triển bằng cách truy cập [Dev Center](/dev-center/apps).

## Tạo mới ứng dụng

Bấm nút **"Tạo ứng dụng mới"** tại góc trên bên phải

<img style="width: 100%" src="https://salt.tikicdn.com/ts/social/79/c3/16/543e3c4fb4bb2fe15a0f6f517f9de30c.png" alt="app management - empty"/>

## Điền thông tin ứng dụng

Nội dung được điền tại đây sẽ hiển thị ở phía người dùng cuối trong phần mô tả ứng dụng:

  • Tên ứng dụng: tối đa 255 ký tự, người dùng có thể tìm thấy ứng dụng thông qua tên ứng dụng
  • App ID: là chuỗi ký tự duy nhất bao gồm chữ và số tự nhiên, khuyến khích sử dụng chuỗi nghịch đảo của tên miền công ty bạn. VD: vn.tiki.miniapp
  • Hình đại diện: tối đa , tối thiểu , dung lượng tối đa: 10Mb

Mô tả ứng dụng có thể thay đổi mỗi lần phát hành phiên bản mới trừ App ID.

<img style="width: 100%" src="https://salt.tikicdn.com/ts/social/87/d8/e5/f469e85d63622f98d2bf5318352d1de9.png" alt="app management - create"/>

## Hoàn tất tạo ứng dụng

Bấm **"Hoàn tất"** để xác nhận tạo ứng dụng mới với thông tin vừa điền.

Ứng dụng sau khi tạo thành công sẽ xuất hiện tại [App Management](/dev-center/apps) với trạng thái Nháp (Draft).

## Các trạng thái của một ứng dụng

| **Trạng thái** | **Mô tả** |
| ----- | --------------- |
| Draft | • Ứng dụng chưa phát hành trên Store
| Production | • Ứng dụng đã phát hành trên Store, tất cả người dùng Tiki có thể tìm kiếm và sử dụng
| Suspended | • Ứng dụng bị Đình chỉ bởi Tiki.<br/>• Nhà phát hành phải tiến hành quy trình Kháng cáo để có thể phát hành lại ứng dụng.<br/>• Ứng dụng bị đình chỉ có 90 ngày thực hiện quy trình Kháng cáo. <br/>• Trong thời gian kháng cáo, ứng dụng vẫn ở trạng thái Đình chỉ.<br/>• Người dùng cũ và mới không thề tìm kiếm hay tiếp tục sử dụng ứng dụng đó.
| Terminated | • Sau 90 ngày kể từ ngày đỉnh chỉ, ứng dụng sẽ bị chấm dứt hoạt động vĩnh viễn.
| Unpublished | • Ứng dụng đã phát hành trên Store nhưng được chuyển về trạng thái Unpublish bởi chính Nhà phát hành.<br/>• Người dùng cũ và mới không thề tìm kiếm hay tiếp tục sử dụng ứng dụng đó.<br/>• Nhà phát hành có thể chủ động phát hánh lại ứng dụng.

