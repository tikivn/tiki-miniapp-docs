---
title: Tổng quan

description: Tiki mini app sử dụng dịch vụ giao hàng của Tiki.
---

## Giới Thiệu

Khi khách hàng đặt hàng trên Mini App, thì nhà bán có thể lựa chọn dịch vụ giao hàng của Tiki để vận chuyển hàng hoá đến cho khách hàng.

## Tích Hợp Shipping Như Thế Nào?

Để sử dụng được tính năng giao hàng thì bạn phải đăng ký trở thành nhà bán trên Tiki để có thể tiếp cận khách hàng. Cụ thể các bước như sau:

### Tạo Tài Khoản

1. Trước hết, để là một pháp nhân có thể nhận được tiền thanh toán từ user trên Tiki. Bạn cần phải có account với Seller Center. Đăng ký account Seller Center ở [đây](https://sellercenter.tiki.vn/new/#/register)

1. Sau khi có account trên Seller Center. Bạn cần tạo SKUs để cho các Tini App sử dụng (SKU này có thể sử dụng chung giữa các Tini App hoặc bạn cũng có thể tạo một SKU cho mỗi Tini App của bạn)

1. Đăng nhập vào [Tini Console](https://developers.tiki.vn/apps) và thực hiện các bước theo hướng dẫn để link tài khoản Seller với của bạn vào Nhà phát triển.

### Đăng Ký Sản Phẩm

Sản phẩm trên sản TMĐT của Tiki và sản phẩm do đối tác cung cấp qua Tini App là hai dòng sản phẩm độc lập. Do đó, bạn cần phải đăng ký sản phẩm của bạn với platform Tini App. Bạn có 2 cách để đăng ký sản phẩm cho Tini App

- Đăng ký sản phẩm sử dụng [Tini Console](https://developers.tiki.vn/apps)
- Dùng SKU bạn đăng ký ở bước trên và gọi API `product_create` [platform API](../open-api/overview) để tạo sản phẩm
