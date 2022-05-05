---
title: Tổng quan về local file
---
1 số JS API như `my.downloadFile`, `my.uploadFile`, `my.chooseImage` ... sẽ sinh ra các file tạm trong quá trình thực hiện. Tuy nhiên, local file sẽ có 2 loại:

- **local temporary file**: File được sinh ra trong quá trình gọi các jsapi như `my.chooseImage`, `my.downloadFile`. Các file này được lưu tạm thời và không đảm bảo khi app khỏi động lại thì file vẫn còn. File có thể bị xoá để clean resources khi app khởi động lại. Do đó, nếu có nhu cầu lưu lại file để sử dụng lại lần sau thì dùng jsapi `my.saveFile` để lưu lại thành local cache file.
 
- **Local cache file**: File được sinh ra bằng jsapi `my.saveFile`. File này không bị xoá đi trừ khi sử dụng `my.removeSavedFile` để xoá. Dung lượng của folder lưu trữ local cache files giới hạn là 10MB.

Đường dẫn của local file có dạng:
{{Protocol Name}}://File Path

The protocol name là "miniapp-resource" cho iOS/Android and "http" khi chạy trên simulator. Developers có thể bỏ qua sự khác biệt này nhưng ko nên hard code đường dẫn 

