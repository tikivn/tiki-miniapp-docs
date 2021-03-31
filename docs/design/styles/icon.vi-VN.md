---
order: 33
category: Thiết kế chung
title: Hệ thống icon
---

Tiny sử dụng [thư viện icon của Nucleo](https://nucleoapp.com/) để làm bộ icon hệ thống. Bởi các icon này có các thuộc tính mà chúng tôi mong muốn là gọn gàng, quen thuộc và đơn giản ẩn dụ và thiết kế chỉnh chu. Các icon của Tiny đóng vai trò hỗ trợ trực quan để giúp mọi người trải nghiệm hiệu quả hơn.

*Tuyên bố từ chối trách nhiệm: Theo giấy phép sử dụng của Nucleo, chúng tôi chỉ cung cấp bộ icon hệ thống như các icon điều hướng, icon trạng thái... Nếu bạn muốn đồng bộ với những icon đó trong MiniApp, vui lòng mua [thư viện icon của Nucleo](https://nucleoapp.com/).*


## Tổng quan về icon

Kích thước tiêu chuẩn của Tiny là 24px. <br />
<img class="img-basic" src="https://salt.tikicdn.com/ts/social/8d/a2/30/cdcaf1f36812d29caf0c1387b77d6029.png" alt="icon size" height="300px" />


Vùng được thiết kế cho những icon dạng bình thường là 16 x 16px, cách Live area là 2px. <br />
<img class="img-basic" src="https://salt.tikicdn.com/ts/social/a4/9a/af/61dc1ff3e7cce3008fb357794b9cb279.png" alt="normal icon" height="300px" />


Vùng được thiết kế cho những icon đặc biệt như hình tròn hoặc icon quan trọng là 20 x 20px, bằng với Live area của một icon. <br />
<img class="img-basic" src="https://salt.tikicdn.com/ts/social/6e/cd/0a/65e110e4a4a2646b75f2c264ff477ed4.png" alt="normal icon" height="300px" />


---

---


## Các dạng icon

### Dạng nét

<img class="img-basic" src="https://salt.tikicdn.com/ts/social/9b/1b/79/2b4de89a0e44b329bcb6b81836a976f9.png" alt="line icon" height="100px" />

#### Cách dùng

Bộ icon dạng nét là bộ icon sử dụng chính trong Tiny. Icon nét được sử dụng như:
- Các yếu tố hỗ trợ cho nội dung.
- Hành động điều hướng (Quay lại, Tìm kiếm, Thông tin, v.v.).
- Trạng thái không hoạt động của icon dạng mảng.

#### Kỹ thuật

- Độ dày nét 2px.
- Bo góc 2px khi có thể.
- Bo tròn nét cuối.


### Dạng mảng

<img class="img-basic" src="https://salt.tikicdn.com/ts/social/ec/9c/42/7bd49b1602da727010533c372517d6e8.png" alt="glyph icon" height="100px" />

#### Cách dùng

- Gây sự chú ý
- Trạng thái hoạt động của icon dạng nét.

#### Kỹ thuật

- Hình dạng phải rõ ràng, theo các khối hình học đơn giản.
- Bo góc 2px khi có thể.


---


## Kích thước icon

Các icon đã được thiết kế để hoạt động ở bốn kích thước sau: 16px, 20px, 24px và 32px.
- Các icon nên được chia tỷ lệ theo kích thước văn bản.
- Canh giữa về chiều cao giữa các icon và văn bản khi chúng ở bên cạnh nhau.