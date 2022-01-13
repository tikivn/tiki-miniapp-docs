---
title: Tạo Tini App của bạn

description: Cách một Tiki mini app trên Tini Console và quy ước đặt app ID.
---

Một khi đã chính thức trở thành Nhà phát triển Tini App, bạn được quyền tạo mới ứng dụng, bắt đầu quá trình phát triển. Truy cập vào [Tini Console](https://developer.tiki.vn/apps) và tiến hành những bước sau:

## 1. Tạo mới ứng dụng

Bấm nút **Tạo tiện ích mới** tại góc phải trên.

<img  src="/img/Create_TiniApp_button.jpg" style={{ margin: '0 auto', display: 'flex' }} alt="app management empty"/>

## 2. Khai báo ứng dụng

**Tên ứng dụng**: tối đa 20 ký tự.

**App ID**: định danh duy nhất của ứng dụng. Nó có dạng chuỗi tối đa 30 ký tự, chấp nhận chữ cái thường (a-z), chữ số (0-9) và dấu gạch chân (underscore _ ). Đặc biệt App ID phải chứa ít nhất 2 phân đoạn phân cách nhau bằng dấu chấm (dot .); mỗi phân đoạn phải bắt đầu bằng chữ cái.

Ví dụ:

> example.miniapp → Hợp lệ
>
> com.example.movingservice  → Hợp lệ
> 
> com.example.billing_app01 → Hợp lệ
> 
> marketingsubprogram → Bất hợp lệ, vì chỉ chứa 1 phận đoạn
> 
> com.example.HOTEL-booking → Bất hợp lệ, vì chứa chữ cái hoa lẫn dấu gạch nối
> 
> com.example.7travel → Bất hợp lệ, vì chữ số đứng đầu phân đoạn

Khai báo thông tin ứng dụng xong, nhấn nút **Hoàn tất** để kết thúc.

<img style={{width: "100%"}} src="https://salt.tikicdn.com/ts/upload/be/e4/35/cfc7318dbb244188a1cbf9cbac9a37c0.jpg" alt="app management - create" />

## 3. Cài đặt tài khoản

- Cấp quyền cho các thành viên tham gia phát triển ứng dụng (Xem thêm [Quản lý thành viên](member) )
- Thiết lập phương thức thanh toán và vận chuyển.
