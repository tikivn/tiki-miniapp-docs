---
title: Xây dựng và đăng tải ứng dụng
---

## 1. Xây dựng ứng dụng

Sau khi bạn hoàn thành công đoạn ra ứng dụng với **App ID** duy nhất trên Dev Center, bạn chuyển sang tạo một project mới trên Tini Studio. Điền **App ID** vào hộp thoại **Configure your project**.

<img src="/static/img/New_Project_TiniStudio.jpg" width="450px" alt="Developer Registration Form" style={{ margin: '0 auto', display: 'flex' }}/>

**App ID** này sẽ được đặt trong tập tin package.json.

## 2. Quy tắc đánh số phiên bản

Để upload ứng dụng lên Dev Center được suôn sẻ, bạn cần nắm rõ về version và buildNumber của Tini App.

- Nhà phát triển tuỳ ý đánh số version cho ứng dụng của mình, theo định dạng x.y.z (major.minor.patch).
- Một version có thể gồm nhiều bản build. Các buildNumber của một version được tự động đánh số từ 1 trở đi. Mỗi lần nhà phát triển upload ứng dụng lên Dev Center nhưng không tăng version lên thì buildNumber tự khắc tăng lên 1.
- Nếu bất kỳ bản build nào của một version được chấp thuận publish trên Tiki App, bạn phải tăng version lên cho lần upload tiếp theo. Nói dễ hiểu, version sau phải lớn hơn version trước.

Ví dụ: bạn upload ứng dụng 5 lần lên Dev Center.
> Lần 1: Bạn đánh số version = 1.1.2; buildNumber sẽ được gán giá trị bằng 1.
>  
> Lần 2: Bạn giữ nguyên version = 1.1.2; buildNumber sẽ tự động tăng thành 2.
> 
> Lần 3: Bạn vẫn giữ nguyên version = 1.1.2; buildNumber lúc này sẽ là 3. Ứng dụng được phê duyệt publish. Version 1.1.2 chẳng thể nào dùng cho lần upload tiếp theo.
> 
> Lần 4: Bạn tăng version = 2.9.3;  buildNumber sẽ quay trở về 1. Ứng dụng được phê duyệt publish.
> 
> Lần 5: Bạn lại phải chọn version mới = 6.5.8; buildNumber tiếp tục là 1.

## 3. Tải lên ứng dụng

Khi bạn đã hoàn thành ứng dụng hoặc nâng cấp ứng dụng, bước cần làm tiếp theo là đưa source code của nó lên Dev Center nơi nó sẽ được xét duyệt và phát hành trên Kho tiện ích của Tiki App.  

1. Mở dự án muốn upload trên Tini Studio.
2. Đăng nhập bằng tài khoản Dev Center từ Tini Studio bằng cách bấm vào nút **Đăng Nhập** ở góc phải trên.
   ***Lưu ý***: Chỉ những ai có vai trò Owner, Admin hay Programmer trong ứng dụng mới được quyền tải lên ứng dụng
3. Bấm nút **Upload** bên cạnh nút **Đăng Nhập**; hoặc menu >> **Upload App**.
4. Nếu đây là lần đầu tiên bạn upload dự án, bạn sẽ được yêu cầu chọn tên ứng dụng tương ứng trên Dev Center.
5. Trong hộp thoại **Upload a new build**, gõ version mong muốn và bấm nút **Upload**.
6. Một khi build được tải thành công lên Dev Center, máy chủ sẽ biên dịch build (sẽ ). Nếu mọi việc thuận lợi, build sẽ có trạng thái "Ready".

***Lưu ý***: Kích thước (source code) của build upload bị giới hạn ở mức 5 MB. Nếu như bạn dùng nhiều tài nguyên có kích thước lớn (hình ảnh, video, audio,...), bạn nên đưa lên CDN của mình thay vì bỏ chung vào trong thư mục của build. Ngoài ra, nên hạn chế cài các package node_modules không cần thiết. Các package như thế chỉ hỗ trợ cho quá trình làm ứng dụng dưới local như eslint, prettier,... bạn nên bỏ vào devDependencies thay vì dependencies

