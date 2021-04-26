---
title: Shopping
---

## Mục tiêu

Kết hợp với [Fake Store API](https://fakestoreapi.com/) để làm Shopping MiniApp với các chức năng:

1. Hiển thị danh sách sản phẩm với carousel và tabs
2. Xem chi tiết sản phẩm
3. Thêm sản phẩm vào giỏ hàng
4. Xem thông tin giỏ hàng

**Các kỹ thuật sẽ sử dụng:**

- Dùng các component [view](https://miniapp.tiki.vn/docs/component/view-container/view), [carousel](https://miniapp.tiki.vn/docs/component/view-container/carousel), [button](https://miniapp.tiki.vn/docs/component/basic/button), [image](https://miniapp.tiki.vn/docs/component/media/image), [text](https://miniapp.tiki.vn/docs/component/basic/text)
- Sử dụng các JS API [navigateTo](https://miniapp.tiki.vn/docs/api/navigator/navigate-to), [request](https://miniapp.tiki.vn/docs/api/network/request), [getSystemInfo](https://miniapp.tiki.vn/docs/api/device/get-system-info)
- Dùng [Custom component](https://miniapp.tiki.vn/docs/framework/component/custom-component-introduction)
- Lưu trữ `global data` trong `app`
- Sử dụng các [life cycle](https://miniapp.tiki.vn/docs/framework/overview#Qu%E1%BA%A3n-l%C3%BD-Page) như `onShow`, `onLoad` để xử lý dữ liệu
- Sử dụng các cú pháp [tiki:for](https://miniapp.tiki.vn/docs/framework/txml/list-rendering) để render list và [tiki:if](https://miniapp.tiki.vn/docs/framework/txml/conditional-rendering) để xử lý logic
- Cài đặt và sử dụng [tiki-mini-ui](https://miniapp.tiki.vn/docs/component/advance/badge)
- Cài đặt và sử dụng `npm packages`

**Bạn có thể xem đầy đủ source code [tại đây](https://github.com/tikivn/miniapp-getting-started/tree/main/shopping)**

## Chuẩn bị

### Tạo một app mới trên Dev Center

Xem hướng dẫn tại trang [Tạo MiniApp của bạn](/docs/developer/introduce/create).

### Tạo một project mới trên Tiki MiniApp Studio

Xem hướng dẫn tại [đây](/docs/ide/start-page).

## Coding

### 1. Coding trang Sản phẩm

**1.1. Hiển thị danh sách sản phẩm với [carousel](https://miniapp.tiki.vn/docs/component/view-container/carousel-en).**

Dùng API [my.request](https://miniapp.tiki.vn/docs/api/network/request-en) để lấy danh sách sản phẩm từ API Get all products của [Fake Store API](https://fakestoreapi.com/docs) trong hàm `onLoad`. Việc gọi API trong `onLoad` tương tự như việc bạn gọi trong `componentDidMount` của `React`

_pages/index/index.js_

```js
  data: {
    bannerWidth: 0,
    windowWidth: 0,
    imageWidth: 0,
    loading: true,
    cellSpacing: 12,
    banners: []
  },
  onLoad() {
    // Get products
    my.request({
      url: 'https://fakestoreapi.com/products',
      method: 'GET',
      success: (response) => {
        this.setData({ banners: response, loading: false });
      },
    });

    // Get size
    my.getSystemInfo({
      success: (info) => {
        this.setData({
          bannerWidth: info.windowWidth - this.data.cellSpacing * 2,
          windowWidth: info.windowWidth,
          imageWidth: info.windowWidth / 2 - this.data.cellSpacing * 2,
        })
      }
    });
  },
```

Trong `data` chúng ta khởi tạo 2 biến `loading = false` để đánh dấu trạng thái đang tải api của page và biến `banners = []` để chứa thông tin của các `products` từ API. Giá trị của 2 biến này sẽ được set lại sau khi gọi request `sucess`

Trong `onLoad` còn gọi thêm API [getSystemInfo](https://miniapp.tiki.vn/docs/api/device/get-system-info-en) để lấy thông tin về width của device, do component [carousel](https://miniapp.tiki.vn/docs/component/view-container/carousel-en) cần truyền `width` và `slide-width` khi có `cell-spacing`. Ngoài ra chúng ta còn khởi tạo giá trị `imageWidth` cho [image](https://miniapp.tiki.vn/docs/component/media/image) sẽ được sử dụng trong `product-item` component được nói tới ở phần tiếp theo

_pages/index/index.txml_

```xml
<view class="loading" tiki:if="{{loading}}">
  <image
    class="loading-image"
    src="../../images/spinner.gif" />
</view>

<view class="container" tiki:else="{{!loading}}">
  <carousel
    indicator-dots="{{false}}"
    cell-spacing="{{cellSpacing}}"
    width="{{windowWidth}}"
    slide-width="{{bannerWidth}}">
    <block tiki:for="{{banners}}">
      <image
        resize-mode="contain"
        style="width: {{bannerWidth}}px; height: 96px"
        src="{{item.image}}" />
    </block>
  </carousel>
</view>
```

Trong `txml` sử dụng [Conditional rendering](https://miniapp.tiki.vn/docs/framework/txml/conditional-rendering-en) với `tiki:if` và `tiki:else` để hiển thị và ẩn 2 thẻ [view](https://miniapp.tiki.vn/docs/component/view-container/view) chứa loading image với phần content. File `spinner.gif` được bỏ vào trong thư mục `images` cùng cấp với thư mục `pages`.

Hình ảnh trong `carousel` được render trong thẻ `block` với [tiki:for](https://miniapp.tiki.vn/docs/framework/txml/list-rendering-en). Trong thẻ `image` ta khai báo thêm `width` với giá trị là `bannerWidth` được thiết lập trong file `js`

Styling cho `carousel` và `loading` được khai báo trong _pages/index/index.tcss_. Lưu ý là cần khai báo `flex: 1` cho `view` container chứa tabs (được khai báo trong class `.container`)

```css
.loading {
  align-items: center;
  justify-content: center;
  margin-top: 64px;
}

.loading-image {
  width: 64px;
  height: 64px;
}

.container {
  flex: 1;
}
```

**1.2. Hiển thị sản phẩm bên trong [tabs](https://miniapp.tiki.vn/docs/component/view-container/tabs).**

Ý tưởng của phần này là chúng ta sẽ lấy danh sách các Danh mục sản phẩm hiển thị trên tab bar, và mỗi lần nhấn vào tab nào thì sản phẩm của danh mục đó sẽ được load theo

_pages/index/index.js_

```js
  const app = getApp();

  Page({
    ...
    onLoad() {
      ...
      // Get categories
      my.request({
        url: 'https://fakestoreapi.com/products/categories',
        method: 'GET',
        success: (response) => {
          const categories = response.map(item => ({ title: item, loading: true, products: [] }));
          this.setData({ categories }, () => this.getProductByCategory(0));
        },
      });
    },
    getProductByCategory(index) {
      my.request({
        url: `https://fakestoreapi.com/products/category/${this.data.categories[index].title}`,
        method: 'GET',
        success: (response) => {
          const categories = this.data.categories.map((item, catIdx) => catIdx === index ? {...item, products: response, loading: false} : item );
          this.setData({ categories });
        }
      });
    },
    onTabChange(e) {
      if (this.data.categories[e.detail.index].products.length) {
        return;
      }

      // Get products
      this.getProductByCategory(e.detail.index);
    },
    onPageAddCart(product) {
      app.onAppAddCart(product);
      my.showToast({
        type: 'success',
        content: 'Sản phẩm đã được thêm vào giỏ hàng',
        buttonText: 'OK',
        duration: 3000,
      });
    },
  })
```

Tương tự như ở mục 1.1. Việc lấy Danh mục sản phẩm (categories) lên được thự hiện bên trong hàm `onLoad`.
Do API `/categories` chỉ trả về một mảng string các tên sản phẩm (Ví dụ `[ "electronics", "jewelery", "men clothing", "women clothing" ]`) nên ta cần map nó về mảng các object với thuộc tính bắt bắt buộc là `title`, ngoài ra có thêm thuộc tính là `loading` với giá trị mặc định là `true` và thuộc tính `products` để chứa các product thuộc về category đó.

Sau khi map xong biến `categories`, ta lưu nó vào `data` thông qua `this.setData` kèm thêm 1 callback function được gọi sau khi `setData` thành công. Mặc định tab được chọn là phần tử đầu tiên nên ta sẽ gọi API để lấy danh sách các product của cateogory đầu tiên thông qua hàm `getProductByCategory`.

`getProductByCategory` khi gọi thành công sẽ trả về danh sách các product của category đó, ta chỉ việc gán products vào category và update lại data.

`onPageAddCart` là hàm dùng để thêm một sản phẩm vào giỏ hàng, nó sẽ gọi tới hàm `onAppAddCart` được khai báo trong `app.js`

_app.js_

```js
App({
  cart: {
    totalPrice: 0,
    products: [],
  },
  onAppAddCart(product) {
    const index = this.cart.products.findIndex(p => p.id === product.id);
    if (index > -1) {
      this.cart.products[index].total += 1;
    } else {
      this.cart.products.push({ ...product, total: 1 });
    }
    this.cart.totalPrice += product.price;
  },
});
```

Trong file `app.js` chúng ta sẽ khai báo một biến _global_ là `cart`, nó có thể được sử dụng ở xuyên suốt các `page`, đồng thời ta `expose` thêm function là `onAppAddCart` được sử dụng trong `page`

_pages/index/index.txml_

```xml
  <tabs tabs="{{categories}}" onChange="onTabChange">
    <block tiki:for="{{categories}}">
      <view class="loading" tiki:if="{{item.loading}}">
        <image style="width: 32px; height: 32px"  src="../../images/spinner.gif" />
      </view>

      <view tiki:if="{{!item.loading}}" class="products">
        <product-item
          tiki:for="{{item.products}}"
          imageWidth="{{imageWidth}}"
          onAddCart="onPageAddCart"
          product="{{item}}" />
      </view>
    </block>
  </tabs>
```

Chúng ta tiếp tục dùng `tiki:for` để hiển thị danh sách các product của từng category. Mỗi khi bấm vào tab nào đó hàm `onTabChange` sẽ được gọi. Mặc định loading sẽ được hiển thị cho tới khi product của category đó được load xong. Trong đoạn code trên bạn sẽ thấy chúng ta sử dụng [Custom component](https://miniapp.tiki.vn/docs/framework/component/custom-component-introduction) là `product-item`.
Để sử dụng một `custom-component`, bạn tạo 1 folder `components` cùng cấp với folder `pages`, sau đó tạo các file `.txml`, `.js`, `.json` và `.js` tương tự như cấu trúc của một page. Nội dung của các file đó như sau:
_components/product-item/index.json_

```json
{
  "component": true,
  "usingComponents": {
    "price": "components/price/index"
  }
}
```

Trong file `.json` chúng ta cần khai báo `component: true` khi muốn nó là một `custom component`, bạn cũng có thể sử dụng một`custom component` khác bên trong một `custom-component`, trong trường hợp này chúng ta dùng `price` là một `custom component` khác.

Vai trò của `price` component khá đơn giản, chỉ dùng để hiển thị giá của `product`, tuy nhiên sau này chúng ta có thể mở rộng để thêm phần format, discount,...

Dưới đây là phần nội dung trong `price` component:

_components/price/index.js_

```js
Component({});
```

_components/price/index.json_

```json
{
  "component": true
}
```

_component/price/index.tcss_

```tcss
.price {
  font-weight: bold;
  font-size: 12px;
}
```

_components/price/index.txml_

```xml
<view style="align-items: flex-start">
  <text class="price">${{price}}</text>
</view>
```

Quay trở lại `product-item` component, chúng ta tiếp tục ở file _components/product-item/index.txml_

```xml
<view class="product">
  <image
    resize-mode="contain"
    style="width: {{imageWidth}}px"
    src="{{product.image}}" />
  <view onTap="onGoToProductPage">
    <text number-of-lines="{{3}}">{{product.title}}</text>
  </view>
  <view class="price-container">
    <price price="{{product.price}}" />
    <button
      onTap="onAddCart"
      class="add"
      type="secondary">
      <icon color="#1A94FF" type="plus" />
    </button>
  </view>
</view>
```

Trong file `txml` này chúng ta sử dụng các `props` là `imageWidth`, `product` được truyền vào từ `page`, với thẻ [button](https://miniapp.tiki.vn/docs/component/basic/button) gọi hàm `onAddCart` được khai báo trong file `.js` và thẻ [icon](https://miniapp.tiki.vn/docs/component/basic/icon) với `type` là `plus`.

_components/product-item/index.js_

```js
Component({
  methods: {
    onAddCart() {
      this.props.onAddCart(this.props.product);
    },
    onGoToProductPage() {
      my.navigateTo({ url: `pages/product/index?id=${this.props.product.id}` });
    },
  },
});
```

Đối với `custom component` chúng ta sẽ handle các sự kiện bên trong `methods`.
Hàm `onGoToProductPage` được gọi khi user bấm vào `title` của product, nó sử dụng API [navigateTo](https://miniapp.tiki.vn/docs/api/navigator/navigate-to) để chuyển đến trang `product detail`, chi tiết về page này sẽ được nói ở phần tiếp theo (Lưu ý là khi navigate đến một page chưa được khai báo trong app.json thì miniapp sẽ báo lỗi).
Hàm `onAddCart` sẽ gọi tới `props onAddCart` đã được khai báo bên trong `txml` của page.
Như vậy luồng gọi hàm `addCart` sẽ có được xử lý xuyên suốt từ `custom component` tới `page` rồi tới `app`

```__react
import image from '../../../theme/static/images/shopping/cart-flow.png'
ReactDOM.render(<img style={{maxWidth: 414}} alt="Cart Flow" src={image}/>, mountNode);
```

_components/product-item/index.tcss_

```css
.product {
  width: 50%;
  padding: 12px;
}

.add {
  width: 32px;
  height: 32px;
}

.price-container {
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
```

Mỗi `product` sẽ có width là `50%`, như vậy một dòng chúng ta sẽ hiển thị được 2 product. Dưới đây là kết quả:

```__react
import image from '../../../theme/static/images/shopping/product-list.png'
ReactDOM.render(<img style={{maxWidth: 414}} alt="Product List" src={image}/>, mountNode);
```

### 2. Coding trang product detail:

Trang product detail để hiển thị thông tin chi tiết sản phẩm được chọn từ trang chủ. Đầu tiên bạn cần tạo mới các file `.txml`, `.js`, `.json` và `.tcss` cho trang này trong thư mục `pages`. Sau đó ta khai báo nào trong `app.json`:

_app.json_

```json
  "pages": [
    "pages/index/index",
    "pages/product/index",
  ],
```

Nội dung của trang này như sau:

`pages/product/index.js`

```js
import query from 'query-string';

Page({
  data: {
    product: null,
  },
  onLoad(e) {
    const params = query.parse(e);
    my.request({
      url: `https://fakestoreapi.com/products/${params.id}`,
      method: 'GET',
      success: product => this.setData({ product }),
    });
  },
});
```

Hàm `onLoad` sẽ gọi API để lấy thông tin sản phẩm bằng `product id`. Biến `e` có dạng `id=${product id}` (`id` là params được truyền trong hàm `onGoToProductPage`), nó là một string các params nên để tiện cho việc lấy `params`mình sẽ sử dụng package [query-string](https://www.npmjs.com/package/query-string), nó sẽ `parse` các params mình truyền vào từ page trước đó thành object.

Để thêm package `query-string` vào, ở cấp ngoài cùng của project bạn chạy lệnh:
`yarn add query-string` hoặc `npm install query-string`.

```xml

<view class="loading" tiki:if="{{!product}}">
  <image
    class="loading-image"
    src="../../images/spinner.gif" />
</view>

<view tiki:else="{{product}}">
  <image
    resize-mode="contain"
    style="width: {{imageWidth}}px"
    src="{{product.image}}" />
  <view>
    <text>{{product.title}}</text>
  </view>
  <view class="price-container">
    <price price="{{product.price}}" />
    <button
      class="add"
      type="secondary">
      <icon color="#1A94FF" type="plus" />
    </button>
  </view>
</view>

```

Trong file `txml` mình vẫn dùng lại component `price` nên trong file `index.json` mình cần khai báo `usingComponents`:

```json
{
  "defaultTitle": "Chi tiết sản phẩm",
  "usingComponents": {
    "price": "components/price/index"
  }
}
```

Kết quả của trang `product`

```__react
import image from '../../../theme/static/images/shopping/product-page.png'
ReactDOM.render(<img style={{maxWidth: 414}} alt="Product Page" src={image}/>, mountNode);
```

### 3. Coding trang cart

Page `cart` sẽ được hiển thị dưới dạng [tabBar](https://miniapp.tiki.vn/docs/framework/config/app#tabBar). Mình sẽ thêm config `tabBar` vào file `app.json`:

```json
  "pages": [
    "pages/index/index",
    "pages/product/index",
    "pages/cart/index"
  ],
  "tabBar": {
    "items": [
      {
        "name": "Sản phẩm",
        "pagePath": "pages/index/index",
        "icon": "images/home.png",
        "activeIcon": "images/home_active.png"
      },
      {
        "name": "Giỏ hàng",
        "pagePath": "pages/cart/index",
        "icon": "images/cart.png",
        "activeIcon": "images/cart_active.png"
      }
    ]
  }
```

Nội dung file `.js`

_pages/cart/index.js_

```js
const app = getApp();

Page({
  data: {
    cart: app.cart,
  },
  onShow() {
    this.setData({ cart: app.cart });
  },
});
```

Do biến `cart` trong `App` đã được khai báo là global nên ta có thể lấy nó ra từ `App` và gán nó vào trong data. Hàm `onShow` sẽ được gọi mỗi khi page hiển thị.

_pages/cart/index.txml_

```xml
<view tiki:if="{{!cart || !cart.products.length}}">
  <text class="empty">Giỏ hàng của bạn đang trống</text>
</view>

<view class="flex-1" tiki:if="{{!cart || cart.products.length}}" >
  <scroll-view
    scroll-y="{{true}}"
    shows-vertical-scroll-indicator="{{false}}"
    class="flex-1">
    <block
      tiki:for="{{cart.products}}">
      <view class="item">
        <image
          resize-mode="contain"
          class="image"
          src="{{item.image}}" />
        <view style="flex: 1">
          <text>{{item.title}}</text>
          <price price="{{item.price}}"/>
        </view>
      </view>
    </block>
  </scroll-view>

  <view class="bottom">
    <text>Tổng cộng: ${{cart.totalPrice}}</text>
    <button class="submit">Thanh toán</button>
  </view>
</view>
```

Chỉ hiển thị danh sách các sản phẩm khi đã được thêm vào trong `cart`, nếu không sẽ đưa ra thông báo là `Giỏ hàng của bạn đang trống`.
Sử dụng [scroll-view](https://miniapp.tiki.vn/docs/component/view-container/scroll-view) để hiển thị danh sách cách sản phẩm trong giỏ hàng.

Do chúng ta dùng lại component `price` nên cần khai báo nó vào trong file `json`

_pages/cart/index.json_

```json
{
  "usingComponents": {
    "price": "components/price/index"
  }
}
```

_pages/cart/index.tcss_

```css
.empty {
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  margin-top: 64px;
}

.item {
  flex-direction: row;
  align-items: center;
}

.image {
  width: 64px;
  height: 64px;
  margin-right: 12px;
}

.flex-1 {
  flex: 1;
}

.bottom {
  border: solid 0px #efefef;
  border-top-width: 1px;
  height: 72px;
  padding-top: 8px;
}

.bottom text {
  text-align: center;
}

.submit {
  width: 100%;
}
```

Phần bottom của page sẽ luôn hiển thị dưới cùng, do đó mình cần set `height` vào trong class `.bottom`, phần còn lại sẽ chiếm trọn trong `page` nên mình dùng class `.flex-1` với `flex: 1`.

Giao diện của trang `cart`

```__react
import image from '../../../theme/static/images/shopping/cart-page.png'
ReactDOM.render(<img style={{maxWidth: 414}} alt="Cart" src={image}/>, mountNode);
```
