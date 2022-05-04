---
title: Quá trình xây dựng IDE cho Tini App (Phần 2)
group: studio
---

# Quá trình xây dựng IDE cho Tini App (Phần 2)

![Tini App Studio](https://raw.githubusercontent.com/tikivn/tiki-miniapp-docs/master/static/img/studio-development.jpg)

Trong nội dung của phần mở đầu đã đề cập tới mục tiêu của chuỗi bài viết **_Quá trình xây dựng IDE cho Tini App_** là tập trung vào các thành phần và quá trình xây dựng IDE. Tuy nhiên, để dễ dàng hơn trong việc tiếp cận những kiến thức đó. Ở phần này, chúng ta sẽ giới thiệu sơ lược về Tini App, những khái niệm liên quan và tại sao phải dành thời gian để xây dựng IDE.

<br/>

**Nội dung bao gồm:**

1. Phần mở đầu
2. Sơ lược về Tini App và tại sao phải xây dựng IDE? _(Bạn đang đọc bài này)_
3. Ngôn ngữ cho Tini App và công cụ compiler
4. Chọn giải pháp và xây dựng editor
5. Giả lập môi trường ứng dụng Tini App và các cộng cụ debug
6. Xây dựng các công cụ Tini Console và định hướng phát triển trong tương lai

## Super App là gì?

Super App dịch ra tiếng Việt là siêu ứng dụng. Khái niệm này mới xuất hiện trong một vài năm gần đây, khi mà các doanh nghiệp công nghệ bắt đầu chuyển mình trở thành một công ty đa dịch vụ.

Với mô hình truyền thống, một ứng dụng sẽ sở hữu một dịch vụ nhất định và trong đó sẽ có các tính năng nhằm phục vụ, phát triển lợi ích cho dịch vụ (Tạm gọi là dịch vụ gốc).

![Tini App Studio](https://raw.githubusercontent.com/tikivn/tiki-miniapp-docs/master/static/img/super-app.jpg)

**_Ví dụ Super App_**

Với Super App, ứng dụng không chỉ còn gói gọn trong một dịch vụ, mà người dùng có thể tìm kiếm và sử dụng thêm các dịch vụ vệ tinh xung quanh cùng với dịch vụ gốc. Ví dụ, thay vì chúng ta phải cài đặt rất nhiều ứng dụng cho mỗi loại dịch vụ khác nhau như: Thương mại điện tử, ví điện tử, bảo hiểm, … Thì giờ đây, chỉ cần cài đặt một Super App và ở đó tích hợp tất cả các dịch vụ mà chúng ta cần. Việc này không chỉ mang lại lợi ích cho doanh nghiệp mà còn thuận tiện hơn cho người sử dụng, mang tới một trải nghiệm liền mạch.

## Những giải pháp để xây dựng Super App

Giải pháp đầu tiên cho việc chuyển đổi ứng dụng của doanh nghiệp trở thành một Super App là _“Tự thân làm nên tất cả”_. Cụ thể, doanh nghiệp sẽ chủ động xây dựng đội ngũ để làm các tính năng cho từng dịch vụ của đối tác.

- **Ưu điểm:** Chủ động kiểm soát được chất lượng sản phẩm đạt mức tốt nhất, an toàn nhất cho doanh nghiệp.

- **Nhược điểm:** Cần một đội ngũ nhân sự đủ lớn và có kinh nghiệm trong lĩnh vực đó. Vì khác với xây dựng tính năng, một dịch vụ có thể có rất nhiều tính năng phức tạp và theo đặc thù riêng của từng doanh nghiệp.

Giải pháp thứ hai thuê nhân sự bên ngoài hoặc giao cho doanh nghiệp đối tác phát triển.

- **Ưu điểm:** Tốc độ kết nối và phát triển các dịch vụ của đối tác sẽ nhanh hơn vì hầu như các tính năng đều sẽ do đối tác cung cấp.

- **Nhược điểm:** Chất lượng sản phẩm bị phụ thuộc, không có nhiều các giải pháp tự động để kiểm tra chất lượng sản phẩm và cũng có thể sẽ ảnh hưởng tới vấn đề bảo mật nếu việc chọn giải pháp công nghệ chưa tốt.

## Những công nghệ để xây dựng Super App

Giải pháp công nghệ đạt hiểu quả tốt nhất về mặt hiệu suất ứng dụng là dùng Native Code (Kotlin cho Android, Swift cho iOS hay Javascript cho Web, …). Nhược điểm của giải pháp này là cần một đội ngũ nhân sự đủ lớn và nếu có nhân sự bên ngoài nhiều khả năng phải cấp quyền cho họ truy cập vào source code của mình.

Giải pháp công nghệ thứ hai là Cross-Platform như: React-Native, Flutter, Ionic, … Những giải pháp này có thể sẽ giảm một chút về mặt hiệu suất so với Native Code nhưng sẽ mang lại tốc độ phát triển ứng dụng và giảm chi phí nhân sự. Nhược điểm cũng giống như Native Code, vẫn cần đội ngũ nhân sự đủ lớn và rủi ro về mặt bảo mật.

Sử dụng WebView để hiển thị website có sẵn từ đối tác cũng là một giải pháp thường được sử dụng. Ưu điểm là chúng ta có thể tái sử dụng được ứng dụng có sẵn, nhiệm vụ là ta cần viết các cơ chế để giao tiếp với các ứng dụng đó. Nhược điểm dễ thấy là ứng dụng Web đôi khi sẽ cho trải nghiệm không tốt về mặt hiệu suất.

![Tini App Studio](https://raw.githubusercontent.com/tikivn/tiki-miniapp-docs/master/static/img/mini-app.jpg)

**_Ví dụ Super App và Mini App_**

Mini App là một khái niệm mới, được bắt nguồn từ thị trường Trung Quốc. Mini App được hiểu đơn giản là một ứng dụng nhỏ, có thể xem như là một dịch vụ của đối tác; và được Super App như là một kênh phân phối ứng dụng tới người sử dụng. Mini App có thể tận dụng được hết các lợi thế của những công nghệ nói trên và khắc phục điểm yếu là phải cấp quyền truy cập source code của doanh nghiệp cho đối tác.

## Tini App là gì?

Tini App là một dự án Mini App do Tiki phát triển. Trên thị trường hiện tại có rất nhiều giải pháp để xây dựng Mini App và giải pháp dễ triển khai nhất là xây dựng các bộ thư viện (Bao gồm các APIs giao tiếp với Super App, các thành phần giao diện được xây dựng sẵn) để cung cấp cho đối tác và kèm theo các tài liệu hướng dẫn. Các giải pháp này đều phải phụ thuộc vào công nghệ mà Super App đang sử dụng, ví dụ như Native Code, Cross-Platform; và có thể tiềm ẩn những nguy cơ về bảo mật vì đang chạy trên cùng một môi trường với Super App, ví dụ đọc thông tin từ bộ nhớ để lấy dữ liệu trái phép, …

![Tini App Studio](https://raw.githubusercontent.com/tikivn/tiki-miniapp-docs/master/static/img/tini-app.png)

**_Ví dụ quy trình phát triển một Tini App_**

Đối với Tini App, Tiki chọn giải pháp có thể xem là tốt nhất, đã được thị trường Trung Quốc xây dựng và chứng minh mức độ hiệu quả. Thay vì sử dụng các công nghệ có sẵn để cung cấp cho đối tác, Tiki xây dựng riêng bộ ngôn ngữ và các công cụ cho Tini App để các đối tác dựa trên đó phát triển sản phẩm của mình. Sau đó, ứng dụng sẽ được chuyển đổi sao cho phù hợp với từng nền tảng, từng thiết bị khác nhau. Quá trình chuyển đối này đều phải thông qua các công cụ của Tiki xây dựng, giảm thiểu tối đa rủi ro có thể gặp phải. Có thể hiểu đơn giản, Tini App như là một hệ điều hành thu nhỏ trên Tiki.

## Tại sao phải xây dựng IDE cho Tini App

Chính vì xây dựng bộ ngôn ngữ riêng, Tini App cần có công cụ lập trình, kiểm thử và các giải pháp đính kèm để hỗ trợ tối đa, thuận tiện cho việc phát triển ứng dụng.

\*\*\*

_Để hiểu rõ hơn, ở các phần tiếp theo của chuỗi bài viết. Mình sẽ chia sẻ nhiều hơn về kiến trúc và các công cụ phát triển một Tini App. Các bạn cũng có thể truy cấp website [developers.tiki.vn](https://developers.tiki.vn) và cộng đồng Tini App [community.tiki.vn](https://community.tiki.vn) để có thêm nhiều thông tin._
