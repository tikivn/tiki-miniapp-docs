---
title: Có bao nhiêu loại ứng dụng di động
image: https://developers.tiki.vn/img/Blog_Types_of_Apps.png
description: Giới thiệu 4 loại ứng dụng có mặt trên thị trường di động
---

Ngày nay ứng dụng di động tác động đến mọi khía cạnh đời sống con người, từ thông tin liên lạc, công việc, tài chính, giải trí, đi lại, đặt thức ăn, mua hàng, du lịch đến kết bạn, tìm người yêu. Khó lòng đưa ra thống kê chính xác có hết thảy bao ứng dụng di động trên toàn cầu. Tuy nhiên, dù số lượng có là bao nhiêu đi chăng nữa, chúng được chia thành vào 4 loại: native app, hybrid app, web app và mini app.

<img src="/img/Blog_Types_of_Apps.png" style={{ margin: '0 auto', display: 'flex' }} width="700"/>

## Native app

Native app được tạo ra cho một hệ điều hành cụ thể. Sẽ là bất khả thi nếu chúng ta đem ứng dụng Android chạy điện thoại iPhone.

Native app được cài đặt thông qua app store chẳng hạn Google Play Store và Apple Store. Mỗi hệ điều hành có ngôn ngữ riêng để lập trình ứng dụng. Ví dụ, để xây dựng ứng dụng trên iOS, Objective C và Swift là 2 lựa chọn lý tưởng; còn đối với Android thì Java, Python và Kotlin là những công cụ phổ biến.

**Ưu điểm:**

- Native app có lợi điểm là hiệu suất nhanh và bảo mật tốt hơn so với các loại ứng dụng di động khác.
- Loại ứng dụng này có thể can thiệp sâu vào phần cứng.

**Khuyểt điểm:**

- Để ứng dụng có thể chạy trên các nền tảng khác nhau đòi hỏi phải xây dựng codebase riêng cho mỗi nền tảng. Điều đó sẽ dẫn đến việc gia tăng đáng kể thời gian, nguồn nhân lực, và chi phí cho việc phát triển, bảo trì và nâng cấp native app.
- Người dùng phải thường xuyên cập nhật native app.

## Web app

Web app không phải là một ứng dụng thực thụ, mà là website. Trong chừng mực nào đó, chúng có giao diện và cách thức hoạt động giống native app. Tuy nhiên, người dùng truy cập chúng thông qua trình duyệt. Chúng được thiết kế bằng HTML, CSS, JavaScript hay Ruby.

**Ưu điểm:**

- Web app có thể chạy trên nhiều nền tảng khác nhau miễn là trình duyệt có hỗ trợ. Do đó, chỉ cần một codebase cho tất cả nền tảng; tiết kiệm thời gian và chi phí cho việc phát triển, bảo trì và nâng cấp.
- Người luôn truy cập phiên bản mới nhất của ứng dụng.

**Khuyết điểm:**

- Tốc độ của web app phụ thuộc nhiều vào kết nối Internet và lượng người truy cập.
- Không thể khai thác đầy đủ khả năng và trải nghiệm của một nền tảng.

## Hybrid App

Hybrid app là sự kết hợp những ưu điểm của native app và web app. Nó được cài đặt giống một native app nhưng lại có cơ chế hoạt động tương tự một web app. Công nghệ phổ biến dùng để phát triển hybrid app này phải kể đến HTML, CSS, và các loại hybrid framework của JavaScript (React Native, AngularJS, Flutter).

**Ưu điểm:**

- Codebase được viết một lần và có thể triển khai trên tất cả nền tảng. Vì thế, thời gian phát triển ngắn và chi phí phát triển thấp so với native app.
- Có khả năng hoạt động dù có kết nối Internet hay không.

**Khuyết điểm:**

- Tốc độ chạy của hybrid app chậm hơn so với native app.
- Khó có thể khai thác hết khả năng và trải nghiệm của một nền tảng.

## Mini app

Sinh sau đẻ muộn so với các 3 loại ứng dụng kể trên, mini app chạy hoạt động bên trong một native app - được gọi là super app. Mỗi nền tảng mini app đều phát hành framework riêng. Thường thì framework kiểu này gọn nhẹ với cú pháp dựa trên XML, JavaScript.

**Ưu điểm:**

- Hiệu năng hoạt động của mini app không thua kém so với native app.
- Mini app mang tính đa nền; chỉ cần một codebase duy nhất cho tất cả nền tảng. Hơn thế nữa, mini app còn tận dụng được các tính năng có sẵn trên super app. Từ đó có thể suy ra, thời gian, công sức, chi phí xây dựng và nâng cấp mini app còn thấp hơn cả web app hay hybrid app.
- Người dùng không cần phải cập nhật mini app bởi phiên bản mới nhất của mini app luôn được tìm thấy trong super app.

**Khuyết điểm:**

- Mini app phụ thuộc vào super app. Người dùng phải cài super app mới có thể sử dụng mini app.

_Hãy cũng nhau tìm hiểu về [Tiki mini app](/docs/introduce/getting-started)_.
