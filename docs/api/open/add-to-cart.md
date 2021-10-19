---
title: my.addToCart
---

`my.addToCart` là API để thêm 1 hoặc nhiều sản phẩm vào giỏ hàng (cart) của Tiki.

## API Params

| Thuộc tính | Kiểu dữ liệu     | Bắt buộc | Mô tả                                                                       |
| ---------- | ---------------- | :------: | --------------------------------------------------------------------------- |
| products   | Array of Objects |    ✓     | Danh sác các sản phẩm cần thêm vào cart.                                    |
| success    | Function         |          | Callback function khi add vào cart được thực hiện thành công                |
| fail       | Function         |          | Callback function khi add vào cart thất bại, argument sẽ là error message   |
| complete   | Function         |          | Callback function khi add vào cart kết thúc cho dù thành công hay thất bại. |


### Thuộc tính của product

| Thuộc tính | Kiểu dữ liệu | Mô tả          |
| ---------- | ------------ | -------------- |
| productId  | string       | ID của product |
| quantity   | number       | Số lượng       |

### Callback function payload

Fail callback payload 

| Thuộc tính   | Kiểu dữ liệu | Mô tả                     |
| ------------ | ------------ | ------------------------- |
| error        | string       | Tên lỗi                   |
| errorMessage | string       | Nội dung chi tiết của lỗi |

## Sample Code

Ví dụ thêm sản phẩm vào giỏ hàng, cập nhật badge và mở màn hình giỏ hàng của Tiki.

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

