---
title: Thanh toán bằng chuyển khoản ngân hàng

description: Khách hàng thanh toán đơn hàng trên Tiki mini app bằng phương thức chuyển khoản ngân hàng 
---

Đây là phương thức khách hàng trả tiền cho đơn hàng bằng cách chuyển tiền vào tài khoản ngân hàng của đối tác.

:::important Quan trọng

Thanh toán bằng chuyển khoản ngân hàng đang trong giai đoạn thử nghiệm, chưa được áp dụng đại trà.

:::

## Luồng thanh toán

<img src="/img/Bank_Transfer_UML.png" width="800px" alt="Bank Transfer UML" style={{ margin: '0 auto', display: 'flex' }}/>

1. Khách hàng tạo đơn hàng trong ứng dụng của đối tác.
2. Ứng dụng chuyển thông tin đơn hàng về hệ thống của đối tác.
3. Hệ thống của đối tác tạo đơn hàng nội bộ.
4. Hệ thống của đối tác gọi API tạo đơn hàng Tiki trên Tini Order API. Đơn hàng Tiki cần chứa đầy đủ thông tin: tên các sản phẩm, số lượng đặt, giá bán và tổng cộng. 
5. Tini Order API trả về mã đơn hàng Tiki.
6. Ứng dụng của đối tác gọi JS API `my.makePayment` với tham số truyền vào `payment-method :  banktransfer` và mã đơn hàng Tiki.
7. Tini Order API trả về trạng thái thành công. 
8. Ứng dụng sẽ hiện thông tin tài khoản ngân hàng của đối tác. 
9. Khách hàng chuyển khoản bên ngoài ứng dụng.
10. Một khi đối tác nhận được tiền, sẽ cập nhật trạng thái đơn hàng lên hệ thống của mình.
11. Hệ thống của đối tác sẽ cập nhật trạng thái đơn hàng Tiki là Processing (Đang xử lý) trên Tini Order API. 
12. Cập nhật trạng thái đơn hàng trên app để báo cho khách hàng biết.
13. Đối tác thực hiện quy trình nội bộ và tiếp tục cập nhật trạng thái mới cho đơn hàng khi họ hoàn thành dịch vụ.
14. Hệ thống của đối tác cập nhật trạng thái đơn hàng Tiki là Completed (Hoàn thành) trên Tini Order API.
15. Ứng dụng hiển thị trạng thái đơn hàng hoàn thành cho đơn hàng của khách.

#### Ghi chú

- Trong quá trình vận hành đơn hàng, nếu khách hàng có nhu cầu huỷ đơn hàng, đối tác có thể tự hoàn tiền và gọi API huỷ đơn đến Tini Order API.
- Đối tác có thể tự huỷ đơn hàng nếu như khách hàng không thanh toán trong một thời gian quá dài (Tiki đề xuất 7 ngày).

<img src="/img/Bank_Transfer_Cancel_UML.png" width="800px" alt="Cancel a bank transfer" style={{ margin: '0 auto', display: 'flex' }}/>

## Sơ đồ trạng thái cửa đơn hàng

<img src="/img/Bank_Transfer_diagram.png" width="600px" alt="Bank Transfer diagram" style={{ margin: '0 auto', display: 'flex' }}/>

