---
title: Luồng thanh toán
sidebar_position: 1
---

## Giới thiệu

<img src="/img/standard-flows/checkout-hero-header.png" width="640"/>

### Mục đích

Quy chuẩn luồng thanh toán cho các ứng dụng bên thứ nhất và bên thứ ba của giải pháp Tiki Open Platform

Ba loại ứng dụng chính được áp dụng luồng này:

* Ứng dụng liên quan các sản phẩm kỹ thuật số (mua vé máy bay, đặt phòng khách sạn, mua ebook v..v..)
* Ứng dụng liên quan các sản phẩm vật lý (mua sách, thương mại điện tử, v..v..)
* Ứng dụng liên quan đến ngành F&B (Food & Beverage)

Dựa vào 3 loại ứng dụng chính trên, chúng tôi cung cấp 2 loại luồng thanh toán:

* **Luồng thanh toán dùng giỏ hàng (Add-to-cart checkout)**
* **Luồng thanh toán nhanh, không qua giỏ hàng (Quick checkout)**

|                   | ATC checkout (Luồng thanh toán dùng giỏ hàng) | Quick checkout (Luồng thanh toán nhanh)
| :---------------- | :------------------------------------------------------------------------------- | :------------
| Trang Giỏ Hàng    | Có trang Giỏ Hàng bao gồm khả năng quản lý số lượng sản phẩm                     | Không có trang Giỏ Hàng
| Trang Thanh Toán  | Xem thông tin tổng hợp của đơn hàng và không quản lý sản phẩm được (vì khả năng quản lý giỏ hàng đã có ở trang Giỏ Hàng)               | Xem thông tin tổng hợp đơn hàng và có khả năng quản lý giỏ hàng (giới hạn)
| Loại ứng dụng     | Ngoài việc thuận tiện thanh toán, ứng dụng cung cấp khả năng cho người dùng có thể lưu lại sản phẩm để mua sau  | Ứng dụng khuyến khích người dùng mua và thanh toán ngay một cách nhanh chóng

### Đối tượng sử dụng

Các ứng dụng sử dụng giải pháp Tiki Open Platform.

### Lí do sử dụng

Để đồng bộ hóa trải nghiệm thanh toán cho các ứng dụng dùng giải pháp Tiki Open Platfrom.

## Tải về

<img src="/img/standard-flows/atc-checkout-flow.png" width="860"/>

:::tip Figma community

Tải về và xem thêm chi tiết: https://www.figma.com/community/file/1136188457172652362

:::

