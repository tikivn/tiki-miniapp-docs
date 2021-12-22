---
title: my.makePayment
---

## Giới thiệu

**my.makePayment** là API dùng để tạo payment. Luồng payment như sau:

- Developer dùng api của Tiki để tạo order từ đơn hàng. Tham khảo [Quy trình tạo và xử lý đơn hàng](/docs/backend-api/payment/overview)
- Gọi jsapi my.makePayment để tạo khởi tạo payment. Sau đó miniapp sẽ được redirect tới page quick payment của tiki. Sau khi thanh toán thành công sẽ trả về callback success hoặc fail

## Lưu ý

Việc makePayment cần user phải được login từ trước. Sử dụng jsapi my.getAuthCode để lấy accessToken và sau đó tạo order.

## Sử dụng

### Sample Code

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

### API Params

Các thuộc tính:

| Attributes | Type     | Required | Description                                                                         |
| ---------- | -------- | -------- | ----------------------------------------------------------------------------------- |
| orderId    | string   | Yes      | Order Id để thực hiện payment                                                       |
| success    | Function | No       | Callback function khi payment được thực hiện thành công, argument luôn là `success` |
| fail       | Function | No       | Callback function khi payment thất bại, argument sẽ là error message                |
| complete   | Function | No       | Callback function khi việc gọi payment kết thúc cho dù thành công hay thất bại.     |

#### Callback function payload

success callback payload là string và luôn là `success`
fail callback payload là string và sẽ là error message
