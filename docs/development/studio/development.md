---
title: Phát triển ứng dụng trên Tini Studio

description: các bước xây dựng một dự án Tiki mini app
---

## 1. Tải về Tini Studio
 
Truy cập vào [liên kết này](https://developers.tiki.vn/downloads) để tải Tini Studio về máy của bạn.

## 2. Cài đặt Tini Studio

Chạy tập tin cài đặt Tini Studio.

## 3. Tạo dự án Tini App mới

1. Thực hiện một trong hai cách sau:
   - Menu >> **File** >> **New Project**.
   - Trên trang **Getting Started** của Tini Studio, nhấn vào New Project.
2. Trong hộp thoại **Choose a template**, chọn template phù hợp với dự án của bạn. Bấm nút **Next**.
   <img src="/img/Choose_Template_for_Project_TiniStudio.png" width="450px" alt="Choose a template for project" style={{ margin: '0 auto', display: 'flex' }}/> 
3. Trong hộp thoại **Create a new project**, điền tên dự án, App ID và đường dẫn mà bạn muốn lưu dự án đó **[Save location]**. Kế đến, bấm nút **Create** để hoàn tất quá trình tạo dự án.
   <img src="/img/New_Project_TiniStudio.png" width="450px" alt="Create a new project" style={{ margin: '0 auto', display: 'flex' }}/>

#### Ý nghĩa một số trường trong hộp thoại Create a new project

**AppID**: định danh duy nhất của của ứng dụng. Bạn đăng ký nó trong quá trình tạo mới ứng dụng mới trên [Tini Console](https://developer.tiki.vn/apps). Xem thêm [Tạo Tini App của bạn](/docs/introduce/create). Nếu chưa tạo ứng dụng trên [Tini Console](https://developer.tiki.vn/apps), bạn có thể nhập một App ID bất kì theo đúng format để tạo Project trước.

**Create a new folder**: tạo ra thực mục mới chứa các tập tin và thư mục của dự án, nằm trong đường dẫn được chỉ định trong trường **Location**. Thư mục được tao ra sẽ có tên là tên của dự án. 

- Nếu **Create a new folder** không được chọn (unchecked), các tập tin và thư mục của dự án sẽ nằm trong đường dẫn được chỉ định trong trường **Location**.

**Create a git repository**: tự động init một git -local project.

## 4. Lập trình cho ứng dụng

## 5. Chạy ứng dụng cục bộ

Để chạy ứng dụng với trình giả lập của Tini Studio ngay trên máy tính, bạn theo những bước sau:

1. Biên dịch ứng dụng thông qua menu >> **Tools** >> **Compile**.
   ***Lưu ý***: bình thường bạn không nhất thiết thực hiện bước này. Bởi lẽ, khi xảy ra thay đổi trong code, Tini Studio sẽ tự động biên dịch lại dự án.
2. Bật trình giả lập bằng một trong hai cách:
   - Cách 1: Menu >> **View** >> **Simulator**.
   - Cách 2: Bấm vào nút **Simulator** ngay phía dưới main menu.

<img src="/img/Simulator.png" width="300px" alt="Simulation" style={{ margin: '0 auto', display: 'flex' }}/>

## 6. Debug

## 7. Tải lên ứng dụng

Xem thêm [Xây dựng và tải lên ứng dụng](/docs/introduce/upload)

## 8. Chạy ứng dụng với Dev Assistant

Xem thêm [Dev Assistant](/docs/development/testing/dev-assistant) 