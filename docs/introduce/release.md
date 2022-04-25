---
title: Phát hành tiện ích

description: các bước nhà phát triển cần làm để phát hành mini app trên kho tiện ích của Tiki
---

Vui lòng đọc kỹ [Nguyên tắc kiểm duyệt](/docs/operation/approval-rules) trước khi submit build for review. 

## Khái quát quy trình xử lý build trên Tini Console 

Mỗi lần bạn tải source code của dự án lên [Tini Console](https://developer.tiki.vn/apps) được tính là một build.

Tại [Tini Console](https://developer.tiki.vn/apps), source code sẽ được tự động compile. Nếu compile thành công, build sẽ mang trạng thái "Ready". Tiếp đó, bạn **Submit build [number] for review**. 

:::note Lưu ý

- Không nhất thiết bạn phải **Submit build for review** mọi build bạn đưa lên Tini Console.
- Khi bạn sử dụng tính năng **Submit build for review** thì build mới nhất (của release mới nhất) sẽ được chọn gởi đi. 

:::

Bộ phận phê duyệt của Tiki sẽ chạy thử tiện ích, đi qua các luồng cơ bản. Nếu build đáp ứng quy định và hoạt động tốt, nó sẽ được phê chuẩn. Build này chính thức được dùng làm release và trạng thái của release sẽ chuyển sang "Approved".

Cuối cùng bạn **Publish** release đã được phê duyệt.

<img style={{width: "100%"}} src="/img/Build_Processing_DevCenter_diagram.png"/>

Xem thêm [Các trạng thái của tiện ích, release và build](/docs/development/tini-console/app_status)


## Quản lý Release và Build của tiện ích

1. Truy cập vào [Tini Console](https://developer.tiki.vn/apps).
2. Sidebar menu >> **Tiện ích của bạn**.
3. Mở tiện ích mong muốn.
4. Sidebar menu >> **Release**. Danh sách release của tiện ích sẽ xuất hiện.
   <img src="/img/Release_list.png" width="900px" alt="Release list" style={{ margin: '0 auto', display: 'flex' }}/>
5. Để xem danh sách build của một release, click vào **Xem** tương ứng với release mong muốn.

## Submit build for review

Bạn chỉ có thể submit build for review với điều kiện release mới nhất có trạng thái Draft.

1. Truy cập vào [Tini Console](https://developer.tiki.vn/apps).
2. Sidebar menu >> **Tiện ích của bạn**.
3. Mở tiện ích mong muốn.
4. Sidebar menu >> **Release**. Danh sách release của tiện ích sẽ xuất hiện.
5. Click vào **Xem** tương ứng với release mới nhất.  
6. Điền vào mục **Thông tin tiện ích**. Xem **Ghi nhớ** ngay bên dưới.
   <img src="/img/Submit_Build_for_Review.png" width="700px" alt="Submit Build for Review" style={{ margin: '0 auto', display: 'flex' }}/>
7. Đánh dấu chọn vào ô **Xuất bản tiện ích ngay sau khi thông qua kiểm duyệt** nếu như bạn muốn build (release) này tự động publish lên Kho tiện ích ngay sau khi Bộ phận phê duyệt của Tiki chấp thuận.
8. Nhấn nút **Submit build [number] for review** ở cuối trang. Mặc nhiên build mới nhất có trạng thái "Ready" của release sẽ được chọn gửi đi. 

:::note Ghi nhớ

Nhằm tạo điều kiện bộ phận kiểm duyệt của Tiki đánh giá tiện ích một cách nhanh chóng và toàn diện, ở bước 6 bạn cần cung cấp những thông tin sau:

- Trong ô **Ghi chú cho người duyệt (Không bắt buộc)**, hướng dẫn chi tiết quy trình kiểm tra các luồng chính của tiện ích cũng như luồng thanh toán. Ví dụ cách tìm để kiểm thử sản phẩm, thông tin lúc thanh toán, ... . Trường hợp bạn không cung cấp được thông tin thanh toán, thì có thể record lại video và để link vào đây.
- Trong ô **Release Note** liệt kê các tính năng chính của ứng dung nếu là lần đầu submit build. Ghi rõ những những tính năng mới và những thay đổi/cập nhật trong những lần submit build sau.

:::

## Publish release

Nếu đã chọn **Xuất bản tiện ích sau khi thông qua kiểm duyệt** khi Submit build for review, thì release của bạn sẽ được tự động phát hành trên Tiện ích; bạn không cần làm gì thêm. Trái lại, bạn cần phát hành release theo cách thủ công như sau:

1. Mở release đã được phê duyệt. 
2. Nhấn nút **Publish** ở cuối trang.

:::note Lưu ý

Nhằm đảm bảo việc phát hành thành công, bạn nên vào Kho tiện ích nửa tiếng sau khi đã publish release:

- Kiểm tra xem tiện ích đã xuất hiện trong Danh mục được thiết lập trong Kho tiện ích hay chưa.
- Kiểm tra xem tiện ích xuất hiện trong trang ***Tìm kiếm*** của Kho tiện ích hay không. 

::: 

