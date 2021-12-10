---
title: Release Studio 1.16.1
---

Studio 1.16.1

<!--truncate-->

Studio 1.16
Link download https://developers.tiki.vn/downloads 3

Thêm file project.config.json
Tini Studio hỗ trợ thêm file project.config.json. Ở các phiên bản trước, Tini Studio sẽ tự động tìm kiếm
các thư mục chứa file app.json, và chọn ra thư mục đầu tiên chưa file này để coi đó là root của dự án của bạn.

Ví dụ, dự án của bạn có structure như sau

|-- project
|-- app1
|-- app.json
|-- app2
|-- app.json
Nếu Tini Studio được mở với thư mục project, thì Tini Studio sẽ lựa chọn app1 là root của project của bạn.

Từ version 1.16, các bạn có thể chủ động cấu hình root của thư mục của mình thông qua key “minprogramRoot”.

Trong tương lai, Tini Studio sẽ hỗ trợ thêm các cấu hình khác trong file project.config.json này.

Để xem chi tiết, các bạn có thể tham khảo https://developers.tiki.vn/docs/studio/project-config 2

Sửa lỗi Simulator không load được khi app.json nhận vào các đường dẫn sai
Trong các version cũ, khi bạn truyền các đường dẫn của page không hợp lệ vào file app.json.
Thì Simulator sẽ không load được, và chỉ hiển thị icon loading mà thôi.
Để tìm hiểu nguyên nhân chi tiết, các lập trình viên sẽ phải vào mục View [ ] Compiler log để xem
các log lỗi từ Compiler.

Từ version 1.16 trở đi, nếu như bạn truyền đường dẫn của pages không hợp lệ vào file app.json,
Simulator sẽ ngay lập tức báo lỗi để bạn biết lỗi ở đâu và sửa file này.

Sửa lỗi không load được project URL trong tcss
Trong các version cũ, ở tcss, khi bạn truyền vào tcss các file từ trong project.
Ví dụ

.class1 {
background: lightblue url(../../assets/images/image1.png) no-repeat fixed
center;
}
Thì các file này chỉ được sử dụng trong Tini Studio, mà không có tác dụng khi mở Tini App trên Tiki App.

Từ Tini Studio version 1.16, bug này sẽ được fix. Tính năng này cho phép các bạn có thể load css, hoặc thậm chí
load cả các custom font trong ứng dụng của mình.

Hiển thị lỗi khi upload Tini App
Trong các phiên bản cũ, khi tổ chức của bạn chưa có bất kỳ ứng dụng nào trên Dev Center, nếu bạn upload Tini App lên,
Studio sẽ tự động mở đường dẫn https://developers.tiki.vn 1

Trong version 1.16, Tini Studio sẽ hiện thị một message để thông báo cho developers tạo mới ứng dụng trên Dev Center

Hỗ trợ bản build trên Tala
Từ version 1.16, khi muốn mở Studio với môi trường talaria, các bạn có thể sử dụng compiler để truyền vào tham số

/Applications/Tini\ App\ Studio.app/Contents/MacOS/Tini\ App\ Studio --args --runtime-env=dev
Sửa lỗi với my.getAuthCode
Trong các phiên bản cũ, khi bạn gọi API my.getAuthCode, nếu như bạn đang set appIdentifier trong file package.json
không trùng với một ứng dụng được tạo bảo Dev Center, thì API sẽ trả về token là null.

Ở version 1.16, Tini Studio sẽ trả về error với API này.

Sửa lỗi API my.getUserInfo luôn trả về trường avatar là ‘’
Từ version 1.16, khi Tini App chạy trên app Tiki, nếu user có avatar, trường avatar sẽ được trả về trong API my.getUserInfo

Trả về thêm số điện thoại và email trong API my.getUserInfo
Khi chạy Tini App trên app Tiki, developers có thể xin thêm quyền để lấy thêm số điện thoại và email của users.

Việc xin quyền này cần được approve từ team quản trị của Tini App.

Chi tiết vui lòng xem thêm tại https://developers.tiki.vn/docs/api/backend-permission 1

Fix lỗi với API my.chooseImage
Trong các phiên bản cũ, API my.chooseImage khi chạy trên iOS với tham số sourceType bằng ['album'],
thì sẽ chỉ có thể chọn được các video mà không lựa chọn được image.

Bug này sẽ được fix trên bản mới.

Thêm API my.setCanPullDown
Từ phiên bản 1.16, developer có thể sử dụng API my.setCanPullDown để set lại việc hỗ trợ kéo xuống để refresh.

Chi tiết về API có thể xem tại my.setCanPullDown | Tini App

Thêm API my.setBackgroundTextStyle
Từ phiên bản 1.16, developer có thể sử dụng API my.setBackgroundTextStyle để set lại font và color của text Kéo xuống để refresh.

Chi tiết về API có thể xem tại my.setBackgroundTextStyle | Tini App

Thêm API my.setBackgroundColor
Từ phiên bản 1.16, developer có thể sử dụng API my.setBackgroundColor để set màu background của window.

Chi tiết về API có thể xem tại my.setBackgroundColor | Tini App

Yêu cầu phải whitelist domain cho component web-view
Từ phiên bản 1.16, khi sử dụng web-view, app cần phải white list các domain trước khi sử dụng.
Chi tiết về việc white list domain, các bạn có thể đọc thêm tại đây

Hỗ trợ gọi thêm các API mới từ web-view
Từ phiên bản mới, web-view component cho phép gọi thêm các API mới.

Hiện tại, web-view đã có thể gọi các API sau

my.navigateTo
my.navigateBack
my.getSystemInfo
my.getUserInfo
my.request
my.postMessage
my.setStorage
my.getStorage
my.removeStorage
my.clearStorage
my.getStorageInfo
my.chooseImage
my.previewImage
my.getLocation
my.showLoading
my.getAddress
Chi tiết xem tại https://developers.tiki.vn/docs/component/basic/view-container/webview

Thêm API my.previewImage
Từ phiên bản 1.16, developer có thể sử dụng API my.previewImage để preview một số ảnh.

Chi tiết về API có thể xem tại https://developers.tiki.vn/docs/api/media/image/preview-image 1

Thêm component rich-text
rich-text component cho phép developer có thể render HTML dưới dạng các nodes

Chi tiết có thể xem tại https://developers.tiki.vn/docs/component/basic/basic/rich-text

Download
Link download Tini App 3
