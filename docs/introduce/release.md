---
title: Phát hành ứng dụng

description: các bước nhà phát triển cần làm để phát hành mini app trên kho tiện ích của Tiki
---

## Khái quát quy trình xử lý build trên Tini Console 

Mỗi lần bạn tải source code của dự án lên [Tini Console](https://developer.tiki.vn/apps) được tính là một build.

Tại [Tini Console](https://developer.tiki.vn/apps), source code sẽ được tự động compile. Nếu compile thành công, build sẽ mang trạng thái "Ready". Tiếp đó, bạn **Submit build [number] for review**. 

***Lưu ý***: Không nhất thiết bạn phải **Submit build for review** mọi build bạn đưa lên Tini Console. Khi bạn sử dụng tính năng **Submit build for review** thì build mới nhất của release sẽ được chọn gởi đi. 

Bộ phận phê duyệt của Tiki sẽ kiểm tra source code của build cũng như chạy thử ứng dụng theo cách thủ công tại Dev Assistant. Nếu build đáp ứng quy định và hoạt động tốt, nó sẽ được phê chuẩn. Build này chính thức được dùng làm release và trạng thái của release sẽ chuyển sang  "Approved".

Cuối cùng bạn **Publish** release đã được phê duyệt.

<img style={{width: "100%"}} src="/img/Build_Processing_DevCenter_diagram.png"/>

## Quản lý Release và Build của ứng dụng

1. Truy cập vào [Tini Console](https://developer.tiki.vn/apps).
2. Sidebar menu >> **Ứng dụng của bạn**.
3. Mở ứng dụng mong muốn.
4. Sidebar menu >> **Release**. Danh sách release của ứng dụng sẽ xuất hiện.
   <img src="/img/Release_list.png" width="900px" alt="Release list" style={{ margin: '0 auto', display: 'flex' }}/>
5. Để xem danh sách build của một release, click vào **Xem** tương ứng với release mong muốn.

## Submit build for review

1. Truy cập vào [Tini Console](https://developer.tiki.vn/apps).
2. Sidebar menu >> **Ứng dụng của bạn**.
3. Mở ứng dụng mong muốn.
4. Sidebar menu >> **Release**. Danh sách release của ứng dụng sẽ xuất hiện
5. Click vào **Xem** tương ứng với release mong muốn. 
6. Điền vào mục **Thông tin ứng dụng**.
   <img src="/img/Submit_Build_for_Review.png" width="700px" alt="Submit Build for Review" style={{ margin: '0 auto', display: 'flex' }}/>
7. Đánh dấu chọn vào ô **Xuất bản ứng dụng ngay sau khi thông qua kiểm duyệt** nếu như bạn muốn build (release) này tự động publish lên Kho tiện ích ngay sau khi Bộ phận phê duyệt của Tiki chấp thuận.
8. Nhấn nút **Submit build [number] for review** ở cuối trang. Mặc nhiên build mới nhất có trạng thái "Ready" của release sẽ được chọn gửi đi.

## Publish release trên Kho tiện ích

1. Truy cập vào [Tini Console](https://developer.tiki.vn/apps).
2. Sidebar menu >> **Ứng dụng của bạn**.
3. Mở ứng dụng mong muốn.
4. Sidebar menu >> **Release**. Danh sách release của ứng dụng sẽ xuất hiện
5. Click vào **Xem** tương ứng với release mong muốn.
6. Nhấn nút **Publish** ở cuối trang. 

### Tạo QR code cho ứng dụng

Bạn có thể dùng công cụ [Mini App QR Code Generator](/qr-code) để tạo ra mã QR cho ứng ứng của mình phục vụ cho mục đích marketing.


## Trạng thái ứng dụng

| **Trạng thái** | **Mô tả**                                                                                                                                                                                                                                                        |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Draft          | Ứng dụng chưa phát hành trên Kho tiện ích.                                                                                                                                                                                                                       |
| Published      | Ứng dụng đã phát hành trên Kho tiện ích, tất cả người dùng Tiki có thể tìm kiếm và sử dụng.                                                                                                                                                                      |
| Unpublished    | Ứng dụng đã được phát hành trên Kho tiện ích nhưng Nhà phát triển rút nó khỏi Kho tiện ích sau đó. <br/> Nó sẽ không còn được tìm thấy trên Kho tiện ích. <br/> Nhà phát triển có thể chủ động phát hành lại ứng dụng.                                           |
| Suspended      | Ứng dụng đã bị đình chỉ bởi Tiki. Nó sẽ không còn được tìm thấy trên Kho tiện ích. <br/> Nhà phát triển có thời hạn 90 ngày để tiến hành quy trình Kháng cáo để có thể phát hành lại ứng dụng. Trong thời gian kháng cáo, ứng dụng vẫn ở trạng thái "Suspended". |
| Terminated     | Ứng dụng sẽ bị loại bỏ vĩnh viễn sau 90 ngày "Suspended" mà không có kháng cáo hoặc kháng cáo bất thành.                                                                                                                                                         |

## Trạng thái release

Mỗi release tương đương một version. Ở một thời điểm, một ứng dụng chỉ được phép có một release duy nhất trên Kho tiện ích.

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

**Previous** vs **Ineligible**: giả dụ một ứng dụng có 5 release: 1.0.0, 2.0.0, 3.0.0, 4.0.0 và 5.0.0. Release 2.0.0, 3.0.0 và 5.0.0 lần lượt được publish trên Kho tiện ích. Hiện release 5.0.0 đang ở trên Kho tiện ích, thì trạng thái của 5 release sẽ như sau.

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

Tình huống 1: Tạo ứng dụng mới

| **Bước** | **Hành động**                     | **Trạng thái ứng dụng** | **Trạng thái release** |
| -------- | --------------------------------- | ----------------------- | ---------------------- |
| 1        | Tạo mới ứng dụng                  | Draft                   | (chưa tồn tại)         |
| 2        | Upload build 1, version 0.9.4     | Draft                   | Draft                  |
| 3        | Submit build 1 for review         | Draft                   | Waiting for Review     |
| 4        | Tiki đang xem xét build 1         | Draft                   | In Review              |
| 5        | Tiki từ chối build 1              | Draft                   | Update Rejected        |
| 6        | Upload build 2, version 0.9.4     | Draft                   | Draft                  |
| 7        | Submit build 2 for review         | Draft                   | Waiting for Review     |
| 8        | Tiki đang xem xét build 2         | Draft                   | In Review              |
| 9        | Tiki chấp thuận build 2           | Draft                   | Approved               |
| 10       | Publish release trên Kho tiện ích | Published               | Available              |

Tình huống 2: Nối tiếp tình huống 1. Ứng dụng version 0.9.4 đang hiện diện trên Kho tiện ích. 

| **Bước** | **Hành động**                           | **Trạng thái ứng dụng** | **Trạng thái release**                                           |
| -------- | --------------------------------------- | ----------------------- | ---------------------------------------------------------------- |
| 1        | Release (version) 0.9.4                 | Published               | Release 0.9.4: Available                                         |
| 2        | Upload build 1, version 1.7.6           | Published               | Release 0.9.4: Available <br/> Release 1.7.6: Draft              |
| 3        | Submit release 1.7.6 build 1 for review | Published               | Release 0.9.4: Available <br/> Release 1.7.6: Waiting for review |
| 4        | Tiki đang xem xét release 1.7.6 build 1 | Published               | Release 0.9.4: Available Release <br/> 1.7.6: In review          |
| 5        | Tiki chấp thuận release 1.7.6 build 1   | Published               | Release 0.9.4: Available <br/> Release 1.7.6: Approved           |
| 6        | Publish release 1.7.6 trên Kho tiện ích | Published               | Release 0.9.4: Previous <br/> Release 1.7.6: Available           |

