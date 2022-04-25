---
title: Các trạng thái của tiện ích, release và build
---

## Trạng thái tiện ích

| **Trạng thái** | **Mô tả**                                                                                                                                                                                                                                                        |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Draft          | Tiện ích chưa phát hành trên Kho tiện ích.                                                                                                                                                                                                                       |
| Published      | Tiện ích đã phát hành trên Kho tiện ích, tất cả người dùng Tiki có thể tìm kiếm và sử dụng.                                                                                                                                                                      |
| Unpublished    | Tiện ích đã được phát hành trên Kho tiện ích nhưng Nhà phát triển rút nó khỏi Kho tiện ích sau đó. <br/> Nó sẽ không còn được tìm thấy trên Kho tiện ích. <br/> Nhà phát triển có thể chủ động phát hành lại tiện ích.                                           |
| Suspended      | Tiện ích đã bị đình chỉ bởi Tiki. Nó sẽ không còn được tìm thấy trên Kho tiện ích. <br/> Nhà phát triển có thời hạn 90 ngày để tiến hành quy trình Kháng cáo để có thể phát hành lại tiện ích. Trong thời gian kháng cáo, tiện ích vẫn ở trạng thái "Suspended". |
| Terminated     | Tiện ích sẽ bị loại bỏ vĩnh viễn sau 90 ngày "Suspended" mà không có kháng cáo hoặc kháng cáo bất thành.                                                                                                                                                         |

## Trạng thái release

Mỗi release tương đương một version. Ở một thời điểm, một tiện ích chỉ được phép có một release duy nhất trên Kho tiện ích.

| **Trạng thái**     | **Mô tả**                                                                                                                                                                                                             |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Draft              | Release vừa đuợc tạo thành công                                                                                                                                                                                       |
| Waiting for Review | Release có một build đã được Submit build for review, song ban xét duyệt Tiki chưa xem xét đến.                                                                                                                       |
| In Review          | Release có một build đang trong quá trình trình được xem xét bởi ban xét duyệt Tiki.                                                                                                                                  |
| Update Rejected    | Build của release bị ban xét duyệt Tiki từ chối (có kèm lý do) <br/> Nhà phát triển có thể chỉnh sửa source code trên Tini Studio, upload build mới, thêm thông tin trên Tini Console và **Submit build for review**. |
| Approved           | Build của release đã được chấp thuận. Nhà phát triển có thể publish release đó trên Kho tiện ích.                                                                                                                     |
| Available          | Release đang hiện diện trong Kho tiện ích. Người dùng có thể sử dụng phiên bản này.                                                                                                                                   |
| Previous           | Những release từng được phát hành trên Kho tiện ích trước đây.                                                                                                                                                        |
| Ineligible         | Những release có version thấp hơn release đang có mặt trên Kho tiện ích, nhưng chưa từng được phát hành trên Kho tiện ích trước đây.                                                                                  |

**Previous** vs **Ineligible**: giả dụ một tiện ích có 5 release: 1.0.0, 2.0.0, 3.0.0, 4.0.0 và 5.0.0. Release 2.0.0, 3.0.0 và 5.0.0 lần lượt được publish trên Kho tiện ích. Hiện release 5.0.0 đang ở trên Kho tiện ích, thì trạng thái của 5 release sẽ như sau.

| Release | Trạng thái |
| ------- | ---------- |
| 1.0.0   | Ineligible |
| 2.0.0   | Previous   |
| 3.0.0   | Previous   |
| 4.0.0   | Ineligible |
| 5.0.0   | Available  |

## Trạng thái build

| Trạng thái  | Mô tả                                                      |
| ----------- | ---------------------------------------------------------- |
| Queued      | Đã upload thành công và chờ compile.                       |
| In Progress | Build đang được compile.                                   |
| Ready       | Build đã được compile thành công và có thể gửi kiểm duyệt. |
| Failed      | Build compile không thành công.                            |

## Ví dụ

Tình huống 1: Tạo tiện ích mới

| **Bước** | **Hành động**                     | **Trạng thái tiện ích** | **Trạng thái release** |
| -------- | --------------------------------- | ----------------------- | ---------------------- |
| 1        | Tạo mới tiện ích                  | Draft                   | (chưa tồn tại)         |
| 2        | Upload build 1, version 0.9.4     | Draft                   | Draft                  |
| 3        | Submit build 1 for review         | Draft                   | Waiting for Review     |
| 4        | Tiki đang xem xét build 1         | Draft                   | In Review              |
| 5        | Tiki từ chối build 1              | Draft                   | Update Rejected        |
| 6        | Upload build 2, version 0.9.4     | Draft                   | Draft                  |
| 7        | Submit build 2 for review         | Draft                   | Waiting for Review     |
| 8        | Tiki đang xem xét build 2         | Draft                   | In Review              |
| 9        | Tiki chấp thuận build 2           | Draft                   | Approved               |
| 10       | Publish release trên Kho tiện ích | Published               | Available              |

Tình huống 2: Nối tiếp tình huống 1. Tiện ích version 0.9.4 đang hiện diện trên Kho tiện ích. 

| **Bước** | **Hành động**                           | **Trạng thái tiện ích** | **Trạng thái release**                                           |
| -------- | --------------------------------------- | ----------------------- | ---------------------------------------------------------------- |
| 1        | Release (version) 0.9.4                 | Published               | Release 0.9.4: Available                                         |
| 2        | Upload build 1, version 1.7.6           | Published               | Release 0.9.4: Available <br/> Release 1.7.6: Draft              |
| 3        | Submit release 1.7.6 build 1 for review | Published               | Release 0.9.4: Available <br/> Release 1.7.6: Waiting for review |
| 4        | Tiki đang xem xét release 1.7.6 build 1 | Published               | Release 0.9.4: Available Release <br/> 1.7.6: In review          |
| 5        | Tiki chấp thuận release 1.7.6 build 1   | Published               | Release 0.9.4: Available <br/> Release 1.7.6: Approved           |
| 6        | Publish release 1.7.6 trên Kho tiện ích | Published               | Release 0.9.4: Previous <br/> Release 1.7.6: Available           |
