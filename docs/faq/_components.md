## Components

### Component là gì ?

Component là tập hợp các thành phần bao gồm giao diện, các thuộc tính và các hàm nhằm hỗ trợ các nhà phát triển xây dựng giao diện của ứng dụng.

Tini App cung cấp sẵn cho bạn 2 loại component: Basic components và Advanced components.

> :pushpin: [Xem thêm](/docs/component/overview)

### Có thể có một component dùng chung cho toàn bộ app được không ?

Tini App không có cơ chế để xây dựng một component dạng master layout để khai báo một lần và dùng chung cho toàn app.

Tuy nhiên bạn có thể viết một component và import nó vào những page mà bạn muốn dùng chung.

### Tôi đã có sẵn các component của ReactJS, tôi có thể dùng các component đó trong Tini App được không ?

Hiện tại vẫn chưa có cơ chế để sử dụng lại các component khác ngoài phạm vi mà framework cung cấp, do đó bạn không thể sử dụng các component từ ReactJS, Vue hoặc Angular.

### Tôi thấy Tini App có component webview, tôi có thể nhúng toàn bộ app của tôi vào webview được không ?

Bạn có thể sử dụng webview trong Tini App, tuy nhiên team không khuyến khích bạn sử dụng một webview cho toàn bộ app của bạn. Ngoài việc hạn chế về mặt trải nghiệm người dùng, webview cũng sẽ bị giới hạn ở một số tính năng, cũng như là không hỗ trợ đầy đủ các jsAPI.

Nếu app bạn thật sự cần tới webview, bạn có thể liên hệ với team Tini App để được cung cấp giải pháp hoặc kiểm duyệt trước khi dùng nhé.
