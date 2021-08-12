---
title: Phê duyệt và phát hành ứng dụng
---

## Khái quát quy trình xử lý build trên Dev Center 

Mỗi lần bạn tải source code của dự án lên Dev Center được tính là một build.

Tại Dev Center, source code sẽ được tự động compile. Nếu compile thành công, build sẽ mang trạng thái “Ready”. Tiếp đó, bạn **Submit build [number] for review**. 

***Lưu ý***: Không nhất thiết bạn phải **Submit build for review** mọi build bạn đưa lên Dev Center. Khi bạn sử dụng tính năng **Submit build for review** thì build mới nhất của release sẽ được chọn gởi đi. 

Bộ phận phê duyệt của Tiki sẽ kiểm tra source code của build cũng như chạy thử ứng dụng theo cách thủ công tại Dev Assistant. Nếu build đáp ứng quy định và hoạt động tốt, nó sẽ được phê chuẩn. Build này chính thức được dùng làm release và trạng thái của release sẽ chuyển sang  "Approved".

Cuối cùng bạn **Publish** release đã được phê duyệt.

<img style={{width: "100%"}} src="/static/img/Build_Processing_DevCenter_diagram.png"/>

## Quản lý Release và Build của ứng dụng

1. Truy cập vào [Dev Center](https://developer.tiki.vn/apps).
2. Sidebar menu >> **Ứng dụng của bạn**.
3. Mở ứng dụng mong muốn.
4. Sidebar menu >> **Release**. Danh sách release của ứng dụng sẽ xuất hiện.
   <img style={{width: "100%"}} src="https://salt.tikicdn.com/ts/upload/19/d6/c2/0a4b6f53dd4fe8bed130daa316ebd19c.png"/>
5. Để xem danh sách build của một release, click vào **Xem** tương ứng với release mong muốn.
   

## Submit build for review

1. Truy cập vào [Dev Center](https://developer.tiki.vn/apps).
2. Sidebar menu >> **Ứng dụng của bạn**.
3. Mở ứng dụng mong muốn.
4. Sidebar menu >> **Release**. Danh sách release của ứng dụng sẽ xuất hiện
5. Click vào **Xem** tương ứng với release mong muốn.
6. Nhấn nút **Submit build [number] for review** ở cuối trang. Mặc nhiên build mới nhất có trạng thái "Ready" của release sẽ được chọn gửi đi.

## Publish release trên Kho tiện ích

1. Truy cập vào [Dev Center](https://developer.tiki.vn/apps).
2. Sidebar menu >> **Ứng dụng của bạn**.
3. Mở ứng dụng mong muốn.
4. Sidebar menu >> **Release**. Danh sách release của ứng dụng sẽ xuất hiện
5. Click vào **Xem** tương ứng với release mong muốn.
6. Nhấn nút **Publish** ở cuối trang. 
   
<img style={{width: "100%"}} src="https://salt.tikicdn.com/ts/upload/73/64/1c/a65373c67e8a1ae6465234e562b01089.png"/>


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

| **Trạng thái**     | **Mô tả**                                                                                                                                                                                                           |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Draft              | Bản release vừa đuợc tạo thành công                                                                                                                                                                                 |
| Waiting for Review | Release có một build đã được Submit build for review, song ban xét duyệt Tiki chưa xem xét đến.                                                                                                                     |
| In Review          | Release có một build đang trong quá trình trình được xem xét bởi ban xét duyệt Tiki.                                                                                                                                |
| Update Rejected    | Build của release bị ban xét duyệt Tiki từ chối (có kèm lý do) <br/> Nhà phát triển có thể chỉnh sửa source code trên Tini Studio, upload build mới, thêm thông tin trên Dev Center và **Submit build for review**. |
| Approved           | Build của release đã được chấp thuận. Nhà phát triển có thể publish release đó trên Kho tiện ích.                                                                                                                   |
| Avaiable           | Release đang hiện diện trong Kho tiện ích. Người dùng có thể sử dụng phiên bản.                                                                                                                                     |
| Previous           | Những release từng được phát hành trên Kho tiện ích trước đây.                                                                                                                                                      |
| Ineligible         | Những release có version thấp hơn release đang có mặt trên Kho tiện ích, nhưng chưa từng được phát hành trên Kho tiện ích trước đây.                                                                                |

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
