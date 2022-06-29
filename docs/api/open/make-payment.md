---
title: my.makePayment
sidebar_custom_props:
  description: Tạo payment
---

`my.makePayment` là API dùng để tạo payment. Luồng payment như sau:

- Developer dùng JS của Tiki để tạo order từ đơn hàng. Tham khảo [Quy trình tạo và xử lý đơn hàng](/docs/backend-api/payment/overview)
- Gọi API `my.makePayment` để tạo khởi tạo payment. Kế đó, ứng dụng sẽ được redirect tới trang quick payment của Tiki.
  - Trường hợp khách hàng chọn COD (thanh toán tiền mặt khi giao hàng), đơn hàng sẽ chuyển thẳng sang trạng thái 'processing'.
  - Trường hợp khách hàng chọn thanh toán trực tuyến, thì họ sẽ tiến hành thủ tục thanh toán. Nếu thanh toán thành công, đơn hàng sẽ chuyển sang trạng thái 'processing'.

<!--- khi việc khi việc thanh toán hoàn tất sẽ trả về success callback hoặc fail callback. --->

Xem thêm [Trạng thái đơn hàng](/docs/backend-api/payment/order-status)

:::note Lưu ý

Việc makePayment cần user phải được login từ trước. Sử dụng jsapi my.getAuthCode để lấy accessToken và sau đó tạo order.

:::

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/make-payment-V2/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/api/make-payment-V2/index" />

## API Params

| Thuộc tính    | Kiểu dữ liệu | Bắt buộc | Mô tả                                                                                                                           |
| ------------- | ------------ | :------: | ------------------------------------------------------------------------------------------------------------------------------- |
| orderId       | string       |    ✓     | Order Id để thực hiện payment. Mỗi orderId chỉ được dùng để makePayment một lần, không được dùng orderId cũ để makePayment lại. |
| paymentMethod | string       |          | Thêm tham số `paymentMethod : 'cod'` vào nếu khách hàng chọn thanh toán tiền mặt khi giao hàng.                                 |
| success       | Function     |          | Callback function khi payment được thực hiện thành công, argument luôn là `success`                                             |
| fail          | Function     |          | Callback function khi payment thất bại, argument sẽ là error message                                                            |
| complete      | Function     |          | Callback function khi việc gọi payment kết thúc cho dù thành công hay thất bại.                                                 |

### Callback function payload

success callback payload là string và luôn là `success`
fail callback payload là string và sẽ là error message

## Sample Code

```js
const app = getApp();

Page({
  data: {
    cart: app.cart
  },
  onShow() {
    this.setData({ cart: app.cart });
  },
  doPayment() {
    my.getAuthCode({
      scope: [],
      success: (res) => {
        my.makePayment({
          orderId: '67328847745515542',
          success: (res) => {
            my.alert({ title: 'payment', content: res });
          }
        });
      }
    });
  }
});
```
