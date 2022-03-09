---
title: Xây dựng Shopping Template cùng Tini App (Phần 3)
---

# Xây dựng Shopping Template cùng Tini App (Phần 3)

![](https://i.imgur.com/jlbTD97.png)

## :checkered_flag: Recap

Ở 2 phần trước, chúng ta đã cùng nhau tìm hiểu về Shopping Template và "thực chiến" với 2 pages: `Home` và `Search`.
Ở phần này, mình sẽ cùng các bạn tiếp tục xây dựng giỏ hàng và thực hiện mock payment.

# Mục lục

### I. Quản lý state trong Tini App

### II. Xây dựng giỏ hàng

1. Navigate đến giỏ hàng
2. Thêm sản phầm vào giỏ hàng
3. Sửa số lượng sản phẩm
4. Xoá sản phầm khỏi giỏ hàng
5. Thêm + xoá coupon
6. Tạo payment (Mở rộng)

### III. Tổng kết

---

### I. Quản lý state trong Tini App

- Mình đã có một bài viết nói về cách tiếp cận và xử lý state trong Tini App. Bạn có thể đọc bài viết `Quản lý state trong Tini App - Cái nhìn tổng quan và cách tiếp cận` [Phần 1](https://community.tiki.vn/t/qu-n-ly-state-trong-tini-app-cai-nhin-t-ng-quan-va-cach-ti-p-c-n-p1/1745) và [Phần 2](https://community.tiki.vn/t/qu-n-ly-state-trong-tini-app-cai-nhin-t-ng-quan-va-cach-ti-p-c-n-p2/1748/1).
- Ý tưởng chung ở đây chúng ta sẽ dùng `app` như một global store - nơi mà mọi page và component đều có thể truy cập tới bằng method `getApp()`.
- Kết hợp `Event Emitter` để thực hiện render khi `app` thay đổi.

![](https://i.imgur.com/I6w4H7v.png)

> :pushpin: Xem thêm [getApp()](https://developers.tiki.vn/docs/framework/app/get-app-method)

##

###### app.js

```
App({
  cartEvent: new EventEmitter(),

  cart: {
    buyer: {},
    seller: {},
    orderedProducts: [],
    productId: '',
    shippingFee: 0,
    price: 0,
    total: 0,
    coupon: {
      name: '',
      discount: 0,
      isValid: false,
    },
  },

  // ...
});
```

##

### II. Xây dựng giỏ hàng

<img src="https://i.imgur.com/qpvVe1A.gif" alt="Cart Page" width="300"/>

Như video demo ở trên, ở `Cart Page` chúng ta sẽ có các actions:

1. Navigate đến giỏ hàng
2. Thêm sản phầm vào giỏ hàng
3. Sửa số lượng sản phẩm
4. Xoá sản phẩm khỏi giỏ hàng
5. Thêm + xoá coupon
6. Tạo payment (Mở rộng)

Hãy cùng đi từng action nào

##

#### 1. Navigate đến giỏ hàng

Để navigate đến giỏ hàng, ta sẽ sử dụng jsapi `my.navigateTo()`

###### pages/detail/index.js

```
navigateToCart () {
  my.navigateTo({ url: `pages/cart/index` });
};
```

> :pushpin: Xem thêm [my.navigateTo()](https://developers.tiki.vn/docs/api/ui/route/navigate-to)

Tuy nhiên, để gắn sự kiện cho icon ở navigation bar, chúng ta phải khai báo trong event `onCustomIconEvent`

###### pages/detail/index.js

```
onCustomIconEvent(e) {
  navigateToCart();
},
```

> :pushpin: Xem thêm [onCustomIconEvent()](https://developers.tiki.vn/docs/framework/miniapp-page/life-cycle#oncustomiconevent)

![](https://i.imgur.com/03iVTiX.png)

- Mỗi khi sử dụng `my.navigateTo()`, framework sẽ push page đó vào screen stack.
- Để pop screen ra khỏi stack, ta có thể bấm vào nút back trên navigation bar hoặc sử dụng jsapi `my.navigateBack()`

> :pushpin: Xem thêm [my.navigateBack()](https://developers.tiki.vn/docs/api/ui/route/navigate-back)

##

#### 2. Thêm sản phẩm vào giỏ hàng

Khi tap vào button `Add to cart`, chúng ta sẽ gọi `addProduct()` từ app để add sản phầm vào giỏ hàng

###### pages/detail/index.js

```
addToCart() {
  getApp().addProduct(this.data.product);
},
```

Ta sẽ implement `addProduct()` ở app như sau:

- Tìm kiếm xem ở giỏ hàng đã có sản phẩm đó chưa.
- Nếu chưa có thì add vào và cho số lượng là 1.
- Nếu có rồi thì tăng số lượng lên 1 đơn vị.
- Tính toán lại giá bằng cách gọi `calculatePrices()` - Hàm này sẽ tính toán lại giá và emit event `CART_UPDATE`.

###### app.js

```
addProduct(product) {
  const position = this.cart.orderedProducts.findIndex(
    (item) => item.id === product.id,
  );
  if (position !== -1) this.cart.orderedProducts[position].quantity += 1;
  else this.cart.orderedProducts.push({ ...product, quantity: 1 });

  this.calculatePrices();
},
```

```
calculatePrices() {
  const { shippingFee, coupon, orderedProducts } = this.cart;
  const price = orderedProducts.reduce((acc, curr) => {
    return acc + curr.price * curr.quantity;
  }, 0);
  const total = price > 0 ? price + shippingFee - coupon.discount : 0;
  this.cart = {
    ...this.cart,
    price,
    total,
  };

  this.cartEvent.emit(EMITTERS.CART_UPDATE, this.cart);
},
```

Ở `pages/cart`, ta sẽ lắng nghe event `CART_UPDATE` được emit ở trên và update data cart mới từ đó render lại thông tin cart

###### pages/cart/index.js

```
async onLoad() {
  this.disposableCollection.push(
    app.cartEvent.on(EMITTERS.CART_UPDATE, (cart) =>
      this.setData({
        cart,
      }),
    ),
  );
},
```

<img src="https://i.imgur.com/11275dg.png" alt="cart" width="500"/>

##

#### 3. Sửa số lượng sản phẩm

Khi tap button `+` hoặc `-` hoặc nhập trực tiếp số vào component `stepper`, ta sẽ gọi `changeQuantityProduct()` của app

> :pushpin: Xem thêm [stepper](https://developers.tiki.vn/docs/component/advance/form/stepper)

###### pages/detail/index.js

```
onChangeQuantityProduct(product, quantity) {
  getApp().changeQuantityProduct(product, quantity);
},
```

Ta sẽ implement `changeQuantityProduct()` ở app như sau:

- Tìm sản phẩm trong cart.
- Update lại số lượng theo số lượng trong param nhận được.
- Tính toán lại giá bằng cách gọi `calculatePrices()` tương tự như trên.

###### app.js

```
changeQuantityProduct(product, quantity) {
  const position = this.cart.orderedProducts.findIndex(
    (item) => item.id === product.id,
  );
  if (position !== -1) {
    this.cart.orderedProducts[position].quantity = quantity;
  }

  this.calculatePrices();
},
```

##

#### 4. Xoá sản phầm khỏi giỏ hàng

Khi tap vào icon close, chúng ta sẽ lưu sản phẩm được chọn lại (vì trong cart có thể sẽ có nhiều sản phẩm) và show modal xác nhận

<img src="https://i.imgur.com/Q9c8qJn.png" alt="modal confirm" width="400"/>

> :pushpin: Xem thêm [modal](https://developers.tiki.vn/docs/component/advance/feedback/modal)

###### components/order-list/index.js

```
confirmRemoveOrder(product) {
  this.selectedProduct = product;
  this.setData({
    modal: {
      isShow: true,
      headers: ['Confirmation'],
      descriptions: ['Do you want to remove this product from your cart?'],
      leftButton: 'Yes',
      rightButton: 'No',
    },
  });
},
```

Khi tap vào `Yes`, `removeProduct()` ở app sẽ được gọi và nhận vào product được chọn mà ta đã lưu lại ở trên.

```
onRemoveProduct(product) {
  app.removeProduct(product);
},
```

Ta sẽ implement `removeProduct()` ở app như sau:

- Tìm sản phẩm trong cart.
- Remove sản phẩm khỏi cart.
- Tính toán lại giá bằng cách gọi `calculatePrices()` tương tự như trên.

###### app.js

```
removeProduct(product) {
  const position = this.cart.orderedProducts.findIndex(
    (item) => item.id === product.id,
  );
  if (position !== -1) this.cart.orderedProducts.splice(position, 1);

  this.calculatePrices();
},
```

##

#### 5. Thêm + xoá coupon

Tương tự như trên, ta cũng implement `selectCoupon()` và `removeCoupon()` trong app. Sau đó `calculatePrices()` cũng sẽ được gọi để tính toán lại giá thành và trigger event update UI của cart.

<img src="https://i.imgur.com/fdSzJB7.png" alt="coupon" width="600"/>

```
async selectCoupon(code) {
  try {
    const coupon = await getCouponFromCodeAPI(code);
    this.cart.coupon = coupon;

    this.calculatePrices();
  } catch {}
},

removeCoupon() {
  this.cart.coupon = {
    name: '',
    discount: 0,
    isValid: false,
  };

  this.calculatePrices();
},
```

##

#### 6. Tạo payment (Mở rộng)

Bạn có thể để tạo payment thông qua hệ thống payment của Tiki thông qua jsapi `my.makePayment()`.

> :pushpin: Xem thêm [my.makePayment()](https://developers.tiki.vn/docs/api/open/make-payment)

---

### :end: III. Tổng kết

Một lần nữa, cảm ơn các bạn đã đọc cuối bài, qua 3 phần của blog `Xây dựng Shopping Template cùng Tini App` chúng ta đã tìm hiểu cách cài đặt 3 pages lớn nhất của template là `Home Page`, `Search Page`, `Cart Page` đồng thời biết được data flows của một ứng dụng Tini Apps.

Vì thời gian có hạn nên các ví dụ ở bài blog này có thể chưa đầy đủ vì thế mình có đính kèm link github ở [đây](https://github.com/tikivn/miniapp-getting-started/tree/main/shop), bạn có thể clone về và ngâm cứu sâu hơn.

Hi vọng vài viết sẽ giúp ích cho bạn trong quá trình tìm hiểu và xây dựng ứng dụng trên nền tảng Tini App :tada:
