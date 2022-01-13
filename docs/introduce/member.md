---
title: Quản lý tài khoản

description: cấp quyền cho các thành viên tham gia phát triển dự án Tiki mini app
---

Nền tảng Tini App cho phép một tài khoản Nhà phát triển có nhiều ứng dụng. Mỗi ứng dụng có thể có nhiều người cùng tham gia phát triển ở các vai trò Owner, Admin, Programmer, Tester.

- **Owner**: Người đại diện Công ty đăng ký tài khoản Nhà phát triển, mặc định sẽ là Owner của tất cả các ứng dụng thuộc Công ty đó. Mỗi tài khoản Nhà phát triển chỉ có duy nhất một Owner. Owner có quyền cấp, huỷ, thay đổi vai trò Admin, Programmer và Tester cho/của các thành viên thường trực và thành viên trong bất kỳ dự án nào. 
- **Admin**: Có tất cả quyền hạn trên ứng dụng mà họ được trao quyền Admin, ngoại trừ điều chỉnh thông tin Thanh toán. Admin có quyền cấp, huỷ, thay đổi vai trò Programmer và Tester.
***Lưu ý***: Admin thường trực có quyền cấp vai trò Admin cho bản thân mình trong bất kỳ ứng dụng nào của công ty. 
- **Programmer**: Lập trình viên tham gia xây dựng ứng dụng.
- **Tester**: Người chịu trách nhiệm kiểm thử ứng dụng hoặc được mời trải nghiệm một ứng dụng trước khi phát hành.

Owner, Admin và Programmer có quyền truy cập Tini Console cũng như thực hiện các tác vụ liên quan việc phát hành ứng dụng, trong khi Tester không thể truy cập công cụ này.

<div align="center"> ---oOo--- </div>

Phàm đội ngũ xây dựng các ứng dụng cho công ty quy tụ nhiều thành phần khác nhau. Có người làm việc lâu dài, góp mặt vào nhiều ứng dụng; có người được mướn theo thời vụ chỉ tham gia một dự án; có người là khách hàng của công ty được mời dùng thử sản phẩm; … .Vì lẽ đó, Tini App giới thiệu khái niệm nhóm Thành viên thường trực và nhóm Thành viên phát triển ứng dụng, nhằm giúp công ty cấp quyền truy cập cho các kiểu thành viên khác nhau một cách thuận tiện.

- Tài khoản Nhà phát triển sẽ có một nhóm Thành viên thường trực (chung).
- Tương ứng mỗi ứng dụng của Nhà phát triển sẽ có một nhóm Thành viên phát triển ứng dụng (riêng).

## Quản lý Thành viên thường trực

### Những ai nên nằm trong danh sách Thành viên thường trực?

Những người là thành viên xuyên suốt, tham gia phát triển/ kiểm thử/ vận hành/…  nhiều hoặc hầu hết các ứng dụng của Công ty.

### Xem danh sách thành viên thường trực

1. Truy cập vào [Tini Console](https://developer.tiki.vn/apps).
2. Sidebar menu >> **Thiết lập tài khoản** >> **Quản lý thành viên**

<img src="/img/Permanent_Member_list.png" style={{ margin: '0 auto', display: 'flex' }}/>

### Thêm thành viên thường trực

1. Truy cập vào [Tini Console](https://developer.tiki.vn/apps).
2. Sidebar menu >> **Thiết lập tài khoản** >> **Quản lý thành viên**.
3. Bấm nút **Thêm thành viên** ở góc phải trên.
4. Trong hộp thoại **Thêm thành viên**, nhập địa chỉ email dùng để đăng ký tài khoản Tiki của người mà bạn đang muốn thêm vào, và chọn vai trò mặc định cho người đó. Kế đó bấm nút **Thêm**
   <img src="/img/New_Permanent_Member_form.jpg" width="250px" style={{ margin: '0 auto', display: 'flex' }}/>
5. Trong trang "Thêm thành viên", xác định vai trò của thành viên đó trong từng dự án cụ thể. Sau đó, bấm nút **Hoàn tất**.
   <img src="/img/Assign_Role_to_Member.jpg" width="800px" alt="Assign roles" style={{ margin: '0 auto', display: 'flex' }}/>

## Quản lý Thành viên phát triển ứng dụng

### Những ai nên nằm trong danh sách Thành viên phát triển ứng dụng?

Mọi đối tượng tham gia phát triển/ kiểm thử/ vận hành/… ứng dụng đó.

***Lưu ý:*** 

- Tester/ Programmer/ Admin dẫu hiện diện trong danh sách Thành viên thường trực vẫn cần được thêm vào danh sách Thành viên phát triển ứng dụng thì mới có thể làm việc với ứng dụng ấy.
- Admin thành viên thường trực có quyền cấp vai trò Admin của ứng dụng cho chính bản thân mình.
- Owner, Admin và Programmer của ứng dụng có quyền truy cập Tini Console cũng như thực hiện các tác vụ liên quan việc phát hành ứng dụng, trong khi Tester không thể truy cập công cụ này.

### Xem danh sách Thành viên phát triển ứng dụng

1. Truy cập vào [Tini Console](https://developer.tiki.vn/apps).
2. Sidebar menu >> **Tiện ích của bạn**.
3. Mở ứng dụng mà bạn muốn xem danh sách thành viên.
4. Sidebar menu >> **Quản lý thành viên**.

### Thêm Thành viên phát triển ứng dụng 

1. Truy cập vào [Tini Console](https://developer.tiki.vn/apps).
2. Sidebar menu >> **Tiện ích của bạn**.
3. Mở ứng dụng mà bạn muốn xem danh sách thành viên.
4. Sidebar menu >> **Quản lý thành viên**.
5. Bấm nút **Thêm thành viên** tại góc phải trên.
6. Trong hộp thoại **Thêm thành viên**, nhập địa chỉ email dùng để đăng ký tài khoản Tiki của người mà bạn đang muốn thêm vào, và chọn vai trò cho người đó trong ứng dụng. Kế đó bấm nút **Thêm**.

## Những thắc mắc thường gặp về Thành viên thường trực và Thành viên phát triển ứng dụng

**Hỏi**: Trường hợp nào nên thêm một người vào danh sách Thành viên phát triển ứng dụng nhưng không thêm vào danh sách Thành viên thường trực?

**Đáp**: 

- Công ty sở hữu nhiều phòng ban, mỗi phòng ban phụ trách một ứng dụng riêng biệt.
- Nhân viên thời vụ hoặc hợp đồng phụ trách một hoặc vài ứng dụng trong thời gian ngắn.
- Bên thứ 3 được thuê để phát triển hoặc chỉ đơn thuần kiểm thử một ứng dụng cụ thể.
- Người dùng vãng lai được mời dùng thử và góp ý cho ứng dụng mới hoặc phiên bản mới trong thời gian ngắn.

**Hỏi**: Một người có thể đảm nhiệm vai trò khác nhau cho các ứng dụng khác nhau?

**Đáp**: Chính xác. Một người có thể đóng vai trò Tester cho ứng dụng A, vai trò Programmer cho cả 2 ứng dụng B và C, vai trò Admin cho ứng dụng D.

**Hỏi**: Khi xoá một người khỏi danh sách Thành viên thường trực thì chuyện gì sẽ xảy ra?

**Đáp**: Hệ thống sẽ cảnh báo người ấy hiện đang là thành viên của các ứng dụng nào. Owner/ Admin có thể xoá hoặc giữ lại quyền thành viên đối với từng ứng dụng của người ấy; sau cùng mới xoá quyền Thành viên thường trực.

Trường hợp một người bị xoá khỏi danh sách Thành viên thường trực, nhưng vẫn còn quyền Thành viên phát triển ứng dụng, thì người đó vẫn được quyền làm việc ứng dụng.

**Hỏi**: Khi xoá một người khỏi danh sách Thành viên phát triển ứng dụng thì chuyện gì sẽ xảy ra?

**Đáp**: Người ấy sẽ mất quyền truy cập vào ứng dụng này. Tuy nhiên, người ấy vẫn có thể làm việc bình thường với những ứng dụng khác miễn sao còn là thành viên của các ứng dụng đó.

