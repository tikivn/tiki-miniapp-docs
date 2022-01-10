---
title: Trạng thái đơn hàng
---

| Trạng thái               | Mô tả                                                     |
| ------------------------ | --------------------------------------------------------- |
| draft                    | Đơn hàng đã được tạo ra và đang trong giai đoạn đặt hàng. |
| waiting_for_payment      | Người dùng đang tiến hành thanh toán online đơn hàng.     |
| waiting_for_verification | Đợi Tiki xác nhận số tiền khách hàng đã thanh toán        |
| online_paid              | Việc thanh toán đơn hàng đã xong.                         |
| canceled                 | Đơn hàng đã bị hủy bời người đùng hoặc đối tác.           |
| completed                | Đơn hàng đã được giao hàng thành công.                    |

**_Lưu ý_**

> Một điểm quan trọng bạn cần ghi nhớ là chỉ những đơn hàng có trạng thái "completed" Tiki mới giải ngân tiền thanh toán của khách hàng cho đối tác.

#### Sơ đồ

<img style={{ margin: '0 auto', display: 'flex' }} src="/img/order-state-diagram.svg" alt="Order statuses"/>
