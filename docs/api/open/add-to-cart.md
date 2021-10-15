---
title: my.addToCart
---

## Giới thiệu

**my.addToCart** là API để add 1 product vào giỏ hàng của tiki
## Sử dụng

### Sample Code

Example add product vào giỏ hàng, update badge và mở màn hình giỏ hàng của Tiki.

```xml title=index.txml
<view>
  <block-header title="Usage" description="Add to cart" />
  <view class="block-content">
    <input class="form-value" placeholder="Product Id" name="productId" onInput="productIdChange"></input>
  </view>
  <view class="block-content">
    <view class="component-item">
      <button style="width: 100%;" onTap="onAddToCart">
        Add to Cart
      </button>
    </view>
  </view>
</view>
```

```js title=index.js
Page({
  data: {
    productId: undefined,
    quantity: 0,
  },
  onLoad() {
    my.addIconsToNavigationBar({
      icons: [
        {
          image: '/images/cart.png',
          width: 25,
          height: 25,
        },
      ],
      padding: 10,
      success: (res) => {
        console.log(res);
      },
      fail: (res) => {
        console.log(res);
      },
    });
  },

  productIdChange(e) {
    this.setData({
      productId: e.detail.value,
    });
  },
  onAddToCart() {
    my.addToCart({
      products: {
        productId: this.data.productId,
        quantity: 1,
      },
      success: (res) => {
        this.setData({
          quantity: this.data.quantity + 1,
        });
        my.addIconsToNavigationBar({
          icons: [
            {
              image: '/images/cart.png',
              width: 25,
              height: 25,
              badge: `${this.data.quantity}`,
            },
          ],
          padding: 10,
          success: (res) => {
            console.log(res);
          },
          fail: (res) => {
            console.log(res);
          },
        });
      },
      fail: (res) => {
        console.log(res);
      },
    });
  },

  onCustomIconEvent(e) {
    my.openScreen({ screenCode: 'TK_CART' });
  },
});
```

### API Params

Các thuộc tính:

| Attributes | Type     | Required | Description                                                                         |
| ---------- | -------- | -------- | ----------------------------------------------------------------------------------- |
| products    | Array  | Yes       | Mảng object các products cần add vào cart. Xem thuộc tính của object product bên dưới                             |
| success    | Function | No       | Callback function khi add vào cart được thực hiện thành công                             |
| fail       | Function | No       | Callback function khi add vào cart thất bại, argument sẽ là error message                |
| complete   | Function | No       | Callback function khi add vào cart kết thúc cho dù thành công hay thất bại.     |


### products attributes

| Attributes   | Type     |  Description              |
| ----------   | -------- | ------------------------- |
| productId    | string   | ID của product            |
| quantity     | number   | Số lượng                  |

### Callback function payload

* Fail callback payload 

| Attributes   | Type     |  Description              |
| ----------   | -------- | ------------------------- |
| error        | string   | error title               |
| errorMessage | string   | error message in detail   |
