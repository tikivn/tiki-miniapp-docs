## JS API

### JS API là gì ?

JS API là tập API cung cấp

- Khả năng truy cập tới các tính năng trên devices như sensor, camera...
- Hiển thị giao diện như alert, toast, custom tab bar, navigation bar...
- Sử dụng các Open API của Tiki như thông tin đăng nhập, thanh toán...
  Các api được gọi thông qua object "my".

> :pushpin: [Xem thêm](/docs/api/overview)

### Tôi có thể dùng axios hoặc fetch để gọi API được không. Vì sao phải cần my.request ?

Các Tini App chạy trên SuperApp là Tiki nên việc kiểm soát nội dung của TiniApp rất quan trọng.

Vì vậy để đảm bảo TiniApp đó an toàn với người dùng, thì TiniApp bắt buộc phải sử dụng my.request. Không thể sử dụng axios hay fetch.

### Tôi có nhiều Tini App, có cách nào nhảy từ Tini App này qua Tini App khác không ?

Bạn có thể sử dụng JSAPI my.navigateToMiniApp để nhảy qua TiniApp khác.

> :pushpin: [Xem thêm](/docs/api/ui/route/navigate-to-miniapp)

### Tôi đã có sẵn app trên Apple Store/ CH Play, tôi có thể từ Tini App mở app của tôi được không, hoặc ngược lại, từ app của tôi làm sao để mở được Tini App trên Tiki ?

Bạn có thể sử dụng JSAPI my.openNativeAppStore để mở link download app từ Apple Store/ CH Play.

> :pushpin: [Xem thêm](/docs/api/open/open-native-store)
