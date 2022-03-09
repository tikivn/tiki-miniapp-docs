---
title: Debug

description: các công cụ gỡ lỗi Tiki mini app
---
## Compiler Log

Tên gọi đã nói lên chức năng của nó. Các lỗi xảy liên quan đến syntax và framework sẽ được tìm thấy tại đây.

Để xem Compiler Log, main menu >> **Tools** >> **Compiler Log**.

<img src="/img/CompilerLog_TiniStudio.png" width="600px" alt="DevTools" style={{ margin: '0 auto', display: 'flex' }}/>

## DevTools

DevTools trong Tini Studio là bộ công cụ giúp nhà phát triển phát hiện ra các vấn đề mà ứng dụng gặp phải một cách nhanh gọn lẹ. Mỗi công cụ này được phân bố trên một tab riêng biệt.

Để kích hoạt DevTools, hãy làm theo một trong ba cách sau:

- Cách 1: Menu >> **Developer Tools**.
- Cách 2: Menu >> **View** >> **Developer Tools**.
- Cách 3: Bấm vào nút **DevTools** ngay phía dưới menu.

DevTools của Tini Studio có công dụng và phương thức hoạt động không khác gì mấy so với DevTools của Google Chrome. Vì thế bạn có thể tham khảo thêm [Chrome DevTools](https://developer.chrome.com/docs/devtools/).

<img src="/img/DevTools_TiniStudio.png" width="800px" alt="DevTools" style={{ margin: '0 auto', display: 'flex' }}/>

### Các công cụ cơ bản

#### Elements

Khi bạn click chuột trái vào element bất kỳ trong Trình giả lập, source code TXML và TCSS của element đó sẽ hiển thị trong tab **Elements**.

#### Console

Liệt kê các lỗi JavaScript (nếu có) trong quá trình thực thi ứng dụng. Khi bạn click vào một lỗi cụ thể, tập tin chứa đoạn code bị lỗi sẽ xuất hiện trên tab **Sources**.

Độc đáo hơn, bạn cũng có thể chạy các đoạn code JavaScript trực tiếp trên tab này để tương tác với ứng dụng đang chạy.

#### Sources

Bạn có thể mở các tập tin JavaScript của dự án ngay trên tab này, thêm các breakpoint/debugger vào đó.

#### App Log

Hiển thị JSAPI được gọi kèm theo thời gian thực hiện, dữ liệu gửi đi và kết quả trả về.

#### Network

Cho phép theo dõi hoạt động mạng của ứng dụng. Cụ thể là:

- Thông tin về các request mà ứng dụng gửi đến máy chủ, bao gồm URL, trạng thái request, thời gian phản hồi, …
- Những tài nguyên - hình ảnh, video, js, … -  được ứng dụng tải về từ máy chủ.

### Hiển thị thêm công cụ

1. Nhấn vào biểu tượng ba chấm đứng **⋮** nằm ở góc phải trên của DevTools. Menu ngữ cảnh hiện ra.
2. Menu ngữ cảnh >> **More tools** >> Chọn công cụ bạn muốn hiển thị.

### Menu Command

<img src="/img/DevTools_Run_Command.jpg" width="450px" alt="DevTools Run Comman" style={{ margin: '0 auto', display: 'flex' }}/>

Tính năng này cho phép bạn truy cập nhanh vào tập lệnh của DevTools, trong đó có cả lệnh hiển thị công cụ bị ẩn.

Có 2 cách gọi menu Command:

- Cách 1: Nhấn vào biểu tượng ba chấm đứng **⋮** nằm ở góc phải trên của DevTools để mở menu ngữ cảnh. Chọn **Run Command** từ menu ngữ cảnh.

- Cách 2: Sử dụng tổ hợp phím tắt: **Ctrl + Shift + P**.

## Remote Debugging

Tạo điều kiện cho nhà phát triển chạy ứng dụng trên thiết bị di động thực thụ mà không cần phải tải ứng dụng lên Tini Console.

