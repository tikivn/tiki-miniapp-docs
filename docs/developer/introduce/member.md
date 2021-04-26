---
title: Quản lý tài khoản
---

## Giới thiệu

Với tài khoản Nhà Phát triển là Công ty, nền tảng Tiki MiniApp cho phép mời nhiều thành viên cùng tham gia phát triển ứng dụng với các vai trò **Owner**, **Admin**, **Programmer**, **Tester**.

Chỉ có Owner, Admin và Programmer có thể truy cập Dev Center và thực hiện các tác vụ liên quan việc phát hành ứng dụng, Tester không thể truy cập vào công cụ này.

## Phân quyền thành viên

Một tài khoản Nhà phát triển có thể có nhiều ứng dụng. Mỗi ứng dụng sẽ quản lý nhóm các thành viên tham gia phát triển của chính nó.

  • **Owner** - Người đại diện Công ty đăng ký tài khoản Nhà phát triển (mặc định sẽ là Owner của tất cả các ứng dụng thuộc Công ty). Mỗi tài khoản Nhà phát triển chỉ có duy nhất một Owner.<br/>
  • **Admin** - Có tất cả quyền hạn trên ứng dụng mà họ được trao quyền Admin, ngoại trừ điều chỉnh thông tin Thanh toán.<br/>
  • **Programmer** - Người lập trình viên tham gia xây dựng ứng dụng. <br/>
  • **Tester** - Người chịu trách nhiệm kiểm thử ứng dụng hoặc được mời trải nghiệm một ứng dụng trước khi phát hành.

| | Owner | Admin | Programmer | Tester |
| --- | :-: | :-: | :-: | :-: |
| Development and<br/>debugging in IDE | ✓ | ✓ | ✓ |  |
| Preview <br/>before go live | ✓ | ✓ | ✓ | ✓ |
| Upload code | ✓ | ✓ | ✓ |  |
| Create new version | ✓ | ✓ |  |  |
| Submit review | ✓ | ✓ |  |  |
| Manage App | ✓ | ✓ |  |  |
| Statistics | ✓ | ✓ |  |  |
| Member<br/>Management | ✓ | ✓ |  |  |
| Update<br/>Developer Account | ✓ |  |  |  |

## Quản lý nhóm thành viên thường trực

**Quản lý nhóm thành viên thường trực** là chức năng mở rộng giúp quản lý một hoặc nhiều nhóm phát triển cùng tham gia xây dựng nhiều ứng dụng dưới danh nghĩa một Công ty/Tổ chức.

### Danh sách thành viên thường trực

**B1:** Truy cập [Dev Center](/dev-center/apps) > Thiết lập tài khoản > Danh sách thanh viên.

<img style={{width: "100%"}} src="https://salt.tikicdn.com/ts/social/a3/f0/05/30917e3903698af22d9d60c0c6e9e066.png"/>

**B2:** Chọn **Thêm thành viên** tại góc trên bên phải

**B3:** Nhập địa chỉ e-mail dùng để đăng kí tài khoản Tiki của thành viên muốn thêm và chọn vai trò tương ứng.

Vai trò của thành viên trong Danh sách thành viên thường trực chỉ có giá trị dùng làm gợi ý mỗi khi một ứng dụng mới được khởi tạo, quyền hạn thực tế trên từng ứng dụng sẽ được quản lý tại mục Ứng dụng > Member Management.

<img style={{width: "100%"}} src="https://salt.tikicdn.com/ts/social/5c/61/b1/4975f2d185e1353e253c9dec94acff19.png"/>

**B4:** Bấm **Thêm**

**B5:** Xuất hiện danh sách các ứng dụng mà thành viên mới có quyền truy cập, với vai trò là vai trò mặc định được chọn tại Bước 3. Owner có thể tùy chỉnh lại cho để phù hợp với phạm vi công việc thực tế.

<img style={{width: "100%"}} src="https://salt.tikicdn.com/ts/upload/b5/5e/0c/30104b6bfe4d39bb1136e2035b8e3b4a.jpg"/>

**B6:** Bấm **Hoàn tất**

### Vì sao cần quản lý riêng biệt thành viên thường trực và thành viên phát triển ứng dụng?
  
  • Trong trường hợp Công ty/Tổ chức có nhu cầu phân chia nhóm **thành viên tham gia toàn bộ ứng dụng** và **nhóm thành viên tham gia một ứng dụng cụ thể**, có thể dễ dàng quản lý bằng cách lựa chọn thêm thành viên vào Danh sách thường trực hoặc Thành viên của ứng dụng.

  • Mời một nhóm người ngoài Tổ chức tham gia kiểm thử/dùng thử một ứng dụng bất kì mà không ảnh hưởng đến các ứng dụng khác cùng Công ty.

## Câu hỏi thường gặp

| **Câu hỏi** | **Kết quả** |
| --- | --- |
| **Thành viên thường trực** và **Thành viên tham gia ứng dụng** khác gì nhau? | **Thành viên thường trực** <br/> Quản lý danh sách thành viên tham gia quy trình phát triển app của công ty sở hữu Dev Account. <br/> Người dùng có mặt trong danh sách User Management nghĩa là: <br/> • Có trong danh sách gợi ý trở thành thành viên (App's member) một ứng dụng mới được khởi tạo <br/> • Role được gán trong User Management là giá trị tham khảo dùng mỗi khi khởi tạo ứng dụng mới, role thực sự sẽ tương ứng với từng ứng dụng riêng biệt <br/>**Thành viên tham gia ứng dụng** <br/> Quản lý danh sách thành viên trực tiếp phát triển và vận hành một ứng dụng cụ thể. <br/> Người dùng có mặt trong danh sách có thể:  <br/> • Tải app và sử dụng thông app ứng dụng Tiki Consumer <br/> • Tùy theo role được gán trong App Member Management, sẽ có quyền tương ứng để xem, chình sửa, phát hành ứng dụng,...
| Khi nào cần thêm một người vào danh sách Thành viên thường trực? | Khi người đó là: <br/> • Thành viên xuyên suốt, tham gia phát triển và vận hành hầu hết các ứng dụng của Công ty
| Khi nào cần thêm một người vào danh sách Thành viên tham gia ứng dụng? | Khi người đó là: <br/> • Người dùng vãng lai được mời dùng thử ứng dụng mới hoặc phiên bản mới trong thời gian ngắn <br/> • Nhân viên thời vụ phụ trách một vài ứng dụng trong thời gian ngắn <br/> • Công ty sở hữu nhiều phòng ban, mỗi phòng ban phụ trách một ứng dụng riêng biệt
| Vai trò của một người được gán trong Thành viên thường trực có ý nghĩa gì? | Giá trị tham khảo mỗi khi có một ứng dụng mới được khởi tạo.
| Vai trò của một người được gán trong Thành viên tham gia ứng dụng có ý nghĩa gì? | Quyền hạn thực sự của một người đối với một ứng dụng.
| Một người có thể có người vai trò khác khác nhau hay không? Chuyện gì sẽ xảy ra tương ứng? | Mỗi người có thể có nhiều vai trò (role) khác nhau tương ứng với từng ứng dụng. <br/> **Ví dụ:** <br/> Tài khoản nguyanvana@tiki.vn có role mặc định được gán trong User Management là Programmer của công ty Tiki Corp <br/> • Khi App#1 được tạo ra, hệ thống gợi ý nguyenvana@tiki.vn là Programmer của app #1 => Admin đồng ý <br/> • Khi App#2 được tạo ra, hệ thống gợi ý nguyenvana@tiki.vn là Programmer của app #2 => Admin chỉnh sửa thành Tester <br/> • Khi App#3 được tạo ra, hệ thống gợi ý nguyenvana@tiki.vn là Programmer của app #3 => Admin remove nguyenvana@tiki.vn khoi3 app #3 <br/> **Kết quả:** <br/> • Tài khoản nguyanvana@tiki.vn vẫn mặc định là Programmer của Tiki Corp <br/> • Với App#1, nguyanvana@tiki.vn là Programmer <br/> • Với App#2, nguyanvana@tiki.vn là Tester <br/> • Với App#3, nguyanvana@tiki.vn hoàn toàn không liên đới <br/> • Khi App#4 được khởi tạo, nguyanvana@tiki.vn vẫn được gợi ý là Programmer của ứng dụng
| Có thể mời người dùng vãng lai tham gia kiểm thử ứng dụng không? | Có thể, bằng cách thêm người dùng vào danh sách Thành viên tham gia ứng dụng.
| Khi Xóa một người khỏi Thành viên thường trực, chuyện gì sẽ xảy ra? | Hệ thống sẽ cảnh báo người dùng hiện đang thực sự hoạt động trên các danh sách các ứng dụng của Nhà phát triển. <br/> Admin có thể Xóa hoặc không Xóa tài khoản người dùng khỏi từng ứng dụng, sau đó Xóa khỏi Thành viên thường trực. <br/> Nếu một người bị Xóa khỏi Thành viên thường trực nhưng vẫn còn quyền Thành viên tham gia ứng dụng, họ sẽ được xem nhưng một khách vãng lai của ứng dụng (câu hỏi 3) và không được gợi ý khi ứng dụng mới được tạo ra.
| Khi Xóa một người khỏi Thành viên tham gia ứng dụng chuyện gì sẽ xảy ra? | Người dùng sẽ lập tức mất quyền với ứng dụng tương ứng. <br/> Nếu người dùng có nhiều quyền trong nhiều ứng dụng, họ vẫn có thể truy cập vào các ứng dụng còn lại. <br/> Nếu người dùng có trong danh sách User Management, họ vẫn được gợi ý trở thành thành viên khi ứng dụng mới được tạo.




