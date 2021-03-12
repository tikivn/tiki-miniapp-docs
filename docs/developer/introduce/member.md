---
order: 12
category:
  vi-VN: Hướng dẫn nhà phát triển 
  en-US: MiniApp Development Guide
title: 
  vi-VN: Quản lý tài khoản
  en-US: Member Management
---

## Giới thiệu

Với tài khoản Nhà Phát triển là Công ty, nền tảng Tiki MiniApp cho phép mời nhiều thành viên cùng tham gia phát triển ứng dụng với các vai trò **Owner**, **Admin**, **Programmer**, **Tester**.

Chỉ có Owner, Admin và Programmer có thể truy cập Dev Center và thực hiện các tác vụ liên quan việc phát hành ứng dụng, Tester không thể truy cập vào công cụ này.

## Phân quyền thành viên

Một tài khoản Nhà phát triển có thể có nhiều ứng dụng. Mỗi ứng dụng sẽ quản lý nhóm các thành viên tham gia phát triển của chính nó.

  • **Owner** - Người đại diện Công ty đăng ký tài khoản Nhà phát triển (mặc định sẽ là Owner của tất cả các ứng dụng thuộc Công ty). Mỗi tài khoản Nhà phát triển chỉ có duy nhất một Owner.<br/>
  • **Admin** - Có tất cả quyền hạn trên ứng dụng mà họ được trao quyền Admin, ngoại trừ điều chỉnh thông tin Thanh toán.<br/>
  • **Programmer** <br/> - Người lập trình viên tham gia xây dựng ứng dụng.
  • **Tester** - Người chịu trách nhiệm kiểm thử ứng dụng hoặc được mời trải nghiệm một ứng dụng trước khi phát hành.

| | Owner | Admin | Programmer | Tester |
| --- | :-: | :-: |:-: | :-: |
| Development and<br/>debugging in IDE | ✓ | ✓ | ✓ |  |
| Preview <br/>before go live | ✓ | ✓ | ✓ | ✓ |
| Upload code | ✓ | ✓ | ✓ |  |
| Submit review | ✓ | ✓ |  |  |
| Manage App | ✓ | ✓ |  |  |
| Statistic | ✓ | ✓ |  |  |
| Member<br/>Management | ✓ | ✓ |  |  |
| Update<br/>Developer Account | ✓ |  |  |  |