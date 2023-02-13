---
title: Tích hợp đối soát thông qua SFTP 
---

### 1. Cấu trúc thư mục trong server

| # | Folder        |      Ý nghĩa                      |
| -- | ------------------- | ------------------------------------ |
| 1 | /IF_TIKI_VIP/INBOUND | Nhận dữ liệu từ đối tác |
| 2 | /IF_TIKI_VIP/OUTBOUND | Kết quả đối soát             |
| 3 | /IF_TIKI_VIP/ARCHIVED  | Backup file của Tiki               |


### 2. Định dạng tên file inbound

File đối soát sẽ có định dạng: tikivip_PartnerName_Date_CounterId

- {PartnerName}: Tiki sẽ qui định tuỳ theo từng đối tác
- {Date}: YYYYMMDD ngày của dữ liệu trong file
- {CounterId}: thứ tự các file trong 1 ngày. Sẽ bắt đầu từ số 1

Ví dụ: tikivip_vnptmoney_20230414_1

Note:
- Dữ liệu maximum của 1 file là 500.000 dòng



### 3. Chi tiết file đối soát

File đối soát của đối tác là một file CSV trong đó cần có chứa các trường dữ liệu. Các trường dữ liệu này sẽ được hai bên thống nhất thông qua meeting về đối soát.

### 4. Chu kỳ gửi file

Phần này sẽ được hai bên thống nhất thông qua meeting về đối soát. Thông thường vào sáng ngày T+1 sẽ gửi dữ liệu ngày T lên server đối soát.

### 5. Thông tin sftp
Tiki sẽ gửi thông tin sftp server gồm có:
- IP server
- Port
- User
- Key access
Tiki cung cấp 2 môi trường sandbox và production.
