---
title: Trạng thái đơn hàng
---

| Trạng thái               | Mô tả                                                                                                                                |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| draft                    | Đơn hàng đã được tạo ra và đang trong giai đoạn đặt hàng.                                                                            |
| waiting_for_payment      | Người dùng đang tiến hành thanh toán online đơn hàng.                                                                                |
| waiting_for_verification | Đợi Tiki xác nhận số tiền khách hàng đã thanh toán                                                                                   |
| online_paid              | Việc thanh toán đơn hàng (trực tuyến) đã xong.                                                                                       |
| processing               | Đơn hàng đang được xử lý                                                                                                             |
| on_delivery              | Đơn hàng đang được vận chuyển. Nó áp dụng cho tất cả trạng thái của đối tác vận chuyển như lấy hàng, lưu kho, luân chuyển, giao hàng |
| canceled                 | Đơn hàng đã bị hủy bời người đùng hoặc đối tác.                                                                                      |
| completed                | Đơn hàng đã được giao hàng thành công.                                                                                               |

:::important Quan trọng

- Tất cả đơn hàng đều phải kết thúc ở trạng 'completed' hoặc 'canceled' sau một SLA cụ thể.
- Chỉ những đơn hàng có trạng thái 'completed' Tiki mới giải ngân tiền thanh toán của khách hàng cho đối tác.
- Trong trường hợp khách hàng thanh toán trực tuyến, một khi nhận được API cancel từ đối tác thì Tiki sẽ xử lý việc hoàn tiền cho khách hàng. Và đối tác không cần làm thêm gì nữa.  
- Đơn hàng đã có trạng thái 'completed' thì không thể chuyển về trạng thái 'canceled' và hoàn tiền cho khách hàng.
- Đơn hàng đã có trạng thái 'completed' hoặc 'cancled' thì không thể đổi được sang trạng thái khác.
:::


<img style={{ margin: '0 auto', display: 'flex' }} src="/img/order-state-diagram-v2.png" alt="Order statuses"/>
