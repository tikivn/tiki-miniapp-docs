---
title: Trạng thái đơn hàng
---

| Trạng thái          | Mô tả                                                     |
| ------------------- | --------------------------------------------------------- |
| draft               | Đơn hàng đã được tạo ra và đang trong giai đoạn đặt hàng. |
| waiting_for_payment | Người dùng đang tiến hành thanh toán online đơn hàng.     |
| online_paid         | Việc thanh toán đơn hàng đã xong.                         |
| canceled            | Đơn hàng đã bị hủy bời người đùng hoặc đối tác.           |
| completed           | Đơn hàng đã được giao hàng thành công.                    |

***Lưu ý***

> Ở trạng thái **online_paid**, người dùng vẫn có thể hủy đơn hàng ở trang đơn hàng của Tiki.
> 
> Đối tác nên thực hiện business của mình và hoàn thành đơn hàng trong cùng một **_transaction_**.
> 
> Một điểm quan trọng bạn cần ghi nhớ là chỉ những đơn hàng có trạng thái "completed" Tiki mới giải ngân tiền thanh toán của khách hàng cho đối tác.

#### Sơ đồ

<img style={{ margin: '0 auto', display: 'flex' }} src="/img/Order_Status_diagram.jpg" alt="Order statuses"/>

<!-- ![Sơ đồ](order-state.svg) -->
