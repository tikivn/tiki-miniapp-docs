## Tini Studio

### Tôi có thể download Tini Studio mới nhất ở đâu ?

Bạn có thể tải studio mới nhất cho Window/MacOS tại [đây](/downloads)

### Tini Studio là gì ? Vì sao tôi phải dùng Tini Studio để phát triển Tini App ?

Tini Studio (TS) là một IDE thuộc bộ công cụ gỡ lỗi và phát triển phần mềm cho Tiki Tini App (Tini App SDK)

Bạn cần sử dụng TS để phát triển Tini App vì TS cung cấp cho bạn các chức năng quan trọng sau mà hiện Tiki chưa cung cấp các giải pháp thay thế khác:

- Cung cấp Simulator giả lập môi trường app khi chạy trên Tiki Mobile App, Tiki Web-App, giả lập các chức năng xác thực, định danh thông qua api của tiki (ex:JSAPI my.getUserInfo,...);
- Upload Tini App lên Tiki Console
- Công cụ gỡ lỗi - debug và remote debug Tini App
- Preview UI, UX của Tini App

> :pushpin: [Xem thêm](/docs/development/studio/overview)

### Tôi có thể cài các extension vào Tini Studio như trên VS Code được không ?

Bạn có thể cài các extention được publish lên Open VSX Registry đa số các extention trên vscode cũng được publish lên registry này.

Hoặc bạn có thể cài trực tiếp vscode extention từ các file \*.VSIX

### Tôi không dùng Tini Studio mà sử dụng các IDE khác có thể phát triển Tini App được không ?

Bạn hoàn toàn có thể lựa chọn các IDE khác như vscode, vim,.. để phục vụ quá trình phát triển Tini App.

Tuy nhiên nếu bạn cần sử dụng các tính năng của Simulator, Tini App Compiler, upload Tini App lên Tini Console,... thì việc sử dụng TS là bắt buộc.

### Tini studio có support typescript không ?

Hiện tại Tini studio đã support Typescript.

> :pushpin: [Xem thêm](/docs/development/studio/typescript-support)
