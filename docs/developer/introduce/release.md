---
title: Quy trình kiểm duyệt, phát hành và vận hành
---

## Giới thiệu

Trạng thái phát hành của một ứng dụng cho biết tình trạng mà ứng dụng đó được phân phối đến người dùng cuối. Đây là thông tin mà Nhà phát triển cần quan tâm khi lần đầu phát hành ứng dụng ra thị trường.

Trạng thái phát hành ứng dụng **khác hoàn toàn** với trạng thái phát hành của bản cập nhật.

## Trạng thái phát hành

Có hai loại trạng thái phát hành:

- **Trạng thái của ứng dụng** - giúp bạn biết được tình trạng phát hành của ứng dụng đến người dùng cuối.
- **Trạng thái của bản cập nhật** - giúp bạn biết được tình trạng phát hành của bản cập nhật mới nhất. Bản cập nhật là phiên bản có chứa ít nhất một thay đổi bất kể thay đổi về chức năng hay thông tin mô tả đi kèm.

## Trạng thái của ứng dụng

| **Trạng thái** | **Mô tả**                                                                                                                                                                                                                                                                                                                                            |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Draft          | • Ứng dụng chưa phát hành trên Store                                                                                                                                                                                                                                                                                                                 |
| Published      | • Ứng dụng đã phát hành trên Store, tất cả người dùng Tiki có thể tìm kiếm và sử dụng                                                                                                                                                                                                                                                                |
| Suspended      | • Ứng dụng bị Đình chỉ bởi Tiki.<br/>• Nhà phát hành phải tiến hành quy trình Kháng cáo để có thể phát hành lại ứng dụng.<br/>• Ứng dụng bị đình chỉ có 90 ngày thực hiện quy trình Kháng cáo. <br/>• Trong thời gian kháng cáo, ứng dụng vẫn ở trạng thái Đình chỉ.<br/>• Người dùng cũ và mới không thề tìm kiếm hay tiếp tục sử dụng ứng dụng đó. |
| Terminated     | • Ứng dụng bị Đình chỉ sau 90 ngày mà không có kháng cáo, ứng dụng sẽ bị chấm dứt hoạt động vĩnh viễn. <br/>• Ứng dụng vi phạm quy Điều khoản và Chính sách của Tini App Platform.                                                                                                                                                                   |
| Unpublished    | • Ứng dụng đã phát hành trên Store nhưng được chuyển về trạng thái Unpublish bởi chính Nhà phát hành.<br/>• Người dùng cũ và mới không thề tìm kiếm hay tiếp tục sử dụng ứng dụng đó.<br/>• Nhà phát hành có thể chủ động phát hánh lại ứng dụng.                                                                                                    |

## Trạng thái của bản cập nhật

Bên cạnh trạng thái của bản cập nhật sẽ có thêm thông tin phụ cho biết tình trạng đăng tải của các Builds. Một bản cập nhật có thể có nhiều builds và chỉ một build duy nhất được phân bối đến người dùng cuối.

### App Version

| Trạng thái         | Mô tả                                                                                                                                                      |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Draft              | Bản cập nhật vừa tạo được thành. công                                                                                                                      |
| Waiting for Review | Bản cập nhật đang chờ kiểm duyệt.                                                                                                                          |
| In review          | Bản cập nhật đang được kiểm duyệt.                                                                                                                         |
| Update Rejected    | • Một trong các hạng mục thay đổi của Bản cập nhật không tuân thủ theo Chính sách của Tiki. <br/> • Nhà phát triển có thể chỉnh sửa và gửi kiểm duyệt lại. |
| Approved           | Bản cập nhật đã được duyệt.                                                                                                                                |
| Available          | Bản cập nhật đang hiện diện trên Store. Người dùng có thể sử dụng phiên bản này.                                                                           |
| Previous           | Bản cập nhật đã từng phát hành trên Store trước đây.                                                                                                       |

### Build Status

| Trạng thái  | Mô tả                                                      |
| ----------- | ---------------------------------------------------------- |
| Queued      | Đã upload thành công và chờ compile.                       |
| In Progress | Build đang được compile.                                   |
| Ready       | Build đã được compile thành công và có thể gửi kiểm duyệt. |
| Failed      | Build compile không thành công.                            |

## Phát hành một bản cập nhật mới

B1: Tại trang chi tiết của một ứng dụng, chọn xem chi tiết một phiên bản bằng cách bấm **Xem**

<img style={{width: "100%"}} src="https://salt.tikicdn.com/ts/upload/19/d6/c2/0a4b6f53dd4fe8bed130daa316ebd19c.png" />

B2: Tại trang chi tiết của một bản cập nhật, liệt kê các bản Builds đã được đăng tải bao gồm: Build number, Trạng thái đăng tải, Người đăng tải...

<img style={{width: "100%"}} src="https://salt.tikicdn.com/ts/upload/73/64/1c/a65373c67e8a1ae6465234e562b01089.png" />

B3 (optional): Nhập thông tin mô tả (nếu có) cho ứng dụng tương ứng với bản cập nhật mới. Trường hợp không có thay đổi, thông tin hiển thị ra ngoài sẽ giữ nguyên.

B4: Bấm **Submit build ... for review** để gửi bản cập nhật đến bộ phận kiểm duyệt của Tiki. Bản Build được gửi đi mặc định là Build mới nhất upload thành công.
