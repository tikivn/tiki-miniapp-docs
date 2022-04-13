---
title: Xây dựng Shopping Template cùng Tini App (Phần 1)
---

# Xây dựng Shopping Template cùng Tini App (Phần 1)

![](https://i.imgur.com/jlbTD97.png)

# Mục lục

### A. Giới thiệu

- I. Shopping Template là gì ?
- II. Chức năng
- III. Cấu trúc dự án

### B. Bắt tay vào việc

- I. Setup project
- II. Xây dựng Home page
  1. Phân tích layout
  2. Component banners
  3. Component section-title
  4. Component product
  5. Component product-section
  6. Component category
  7. Component category-section
  8. Component category-carousel
  9. Tổng thể
  10. Mock data và API

### C. Tạm kết

---

## :checkered_flag: A. Giới thiệu

### I. Shopping Template là gì ?

Shopping Template là open souce template hỗ trợ lập trình viên xây dựng một ứng dụng mua sắm đơn giản bằng nền tảng [Tini App](https://developers.tiki.vn/docs/introduce/getting-started). Hôm nay, chúng ta sẽ cùng nhau xây dựng lại template này từ đầu.

##

### II. Chức năng

- Xem thông tin cơ bản shop
- Banners quảng cáo
- Danh mục sản phẩm
- Bộ sưu tập sản phẩm
- Thông tin chi tiết sản phẩm
- Sắp xếp và lọc sản phẩm
- Tìm kiếm sản phẩm
- Quản lý giỏ hàng
- Thanh toán (mock)
- Danh sách orders
- Thông tin account

Bạn có thể quét mã QR hoặc click vào [link này](https://ti.ki/APPZFPDDI3) để trải nghiệm demo:

<img id="qc-code" src="https://i.imgur.com/tq0kMms.png" alt="QR code" width="200"/>

##

### III. Cấu trúc dự án

```
src
│
└── assets
│   └───icons
│   └───images
│
└── components
│   └───banners
│   └───product-section
│   └───category-section
│   └───...
│
└── pages
│   └───home
│   └───category
│   └───search
│   └───...
│
└── services
│
└── utils
│
└── services
│
└── app.js
└── app.json
└── app.tcss
└── package.json
```

---

## :rocket: B. Bắt tay vào việc

### I. Setup project

- Tạo một project Tini App mới ([Xem thêm](https://developers.tiki.vn/docs/development/studio/development)).
- Để sử dụng các Advance Component như textfield, stepper,... chúng ra sẽ cài đặt `tini-ui` ([Xem thêm](https://developers.tiki.vn/docs/component/advance/introduce#c%C3%A0i-%C4%91%E1%BA%B7t)).
- Để style các component một các đơn giản chúng ta có thể sử dụng `tini-style` (`tini-style` đã được built-in tron `tini-ui`, bạn chỉ cần import trong file `app.tcss` ([Xem thêm](https://developers.tiki.vn/docs/component/advance/styling/concept/install)).
- Thêm `query-string` để truyền query giữ các pages dễ dàng hơn ([Xem thêm](https://www.npmjs.com/package/query-string)).
-

###### package.json

```json
{
  "name": "miniapp-tini-shop",
  "version": "1.0.1",
  "tiki": {
    "appIdentifier": "vn.tiki.tinishop",
    "buildNumber": 1
  },
  "dependencies": {
    "@tiki.vn/tini-ui": "0.10.0",
    "query-string": "^7.0.1"
  }
}
```

##

### II. Xây dựng Home page

<img src="https://i.imgur.com/3aO7C4W.gif" alt="home page" width="300"/>

##

#### 1. Phân tích layout

Break nhỏ layout này ta sẽ được các components:

![](https://i.imgur.com/IkLotnb.png)

##

#### 2. Component banners

![](https://i.imgur.com/Ok5RQy4.png)

Ý tưởng của `banners` khá đơn giản, chúng ta sẽ có nhận vào 1 mảng `banners` là array các url image, sau đó dùng component được built-in sẵn trong framework là `carousel` để show các images ấy dưới dạng carousel.

> :pushpin: Xem thêm [carousel](https://developers.tiki.vn/docs/component/basic/view-container/carousel) và [image](https://developers.tiki.vn/docs/component/basic/media/image)

###### components/banners/index.js

```js
Component({
  props: {
    banners: []
  }
});
```

###### components/banners/index.txml

```xml
<carousel
  tiki:else
  autoplay
  indicator-dots
  circular
  class="banners"
>
  <carousel-item
    tiki:for="{{banners}}"
    tiki:key="id"
  >
    <image
      class="w-full h-full"
      src="{{item.image}}"
      mode="widthFix"
    />
  </carousel-item>
</carousel>
```

> :pushpin: [Xem souce code tại đây](https://github.com/tikivn/miniapp-getting-started/tree/main/shop/src/components/banners)

##

#### 3. Component section-title

![](https://i.imgur.com/KJko9HN.png)

Chúng ta có thể dễ dàng nhận ra hình ảnh này được lặp đi lặp lại nhiều lần trong home page, thế nên tại sao chúng ta lại không component hoá nó nhỉ, đây cũng là một component khá dễ để chúng ta làm quen với các class được cung cấp bởi `tini-style`.

| Class            | CSS                             |
| ---------------- | ------------------------------- |
| .flex            | display: flex;                  |
| .justify-between | justify-content: space-between; |
| .items-center    | align-items: center;            |
| .font-bold       | font-weight: 700;               |
| .text-medium     | font-size: 16px;                |

> :pushpin: Các giá trị css như 700 và 16px là giá trị mặc định, bạn có thể customize các giá trị này thông qua việc chỉnh sửa [css token](https://developers.tiki.vn/docs/component/advance/styling/concept/customize)
> :pushpin: Xem thêm [tini-style](https://developers.tiki.vn/docs/component/advance/styling/concept/install)

![](https://i.imgur.com/WrmCshW.png)

> :pushpin: Xem thêm [text](https://developers.tiki.vn/docs/component/basic/basic/text) và [icon](https://developers.tiki.vn/docs/component/basic/basic/icon)

###### components/section-title/index.js

```js
Component({
  props: {
    title: '',
    onTapActionButton: () => {}
  },

  methods: {
    _onTapActionButton() {
      this.props.onTapActionButton();
    }
  }
});
```

###### components/section-title/index.txml

```xml
<view class="flex justify-between items-center mt-4x-small mb-medium">
  <text class="font-bold text-medium">
    {{title}}
  </text>
  <view
    class="flex items-center"
    onTap="_onTapActionButton"
  >
    <text class="text-brand mr-2x-small">View more</text>
    <icon type="arrow_right" color="#1A94FF"/>
  </view>
</view>


```

> :pushpin: [Xem souce code tại đây](https://github.com/tikivn/miniapp-getting-started/tree/main/shop/src/components/section-title)

##

#### 4. Component product

![](https://i.imgur.com/tdT69pf.png)

Ở component product này phần layout cũng khá dễ, chúng ta chỉ cần sử dụng một vài class của `tini-style` như [flexbox](https://developers.tiki.vn/docs/component/advance/styling/flexbox/flex.generated) và [spacing](https://developers.tiki.vn/docs/component/advance/styling/spacing/margin.generated) là có thể hoàn thành cơ bản layout này.

Mình xin giới thiệu cái đặc biệt ở component này chính là phần format giá tiền. Ví dụ data chúng ta nhận được là `price: 3569000`, làm sao để format con số này thành `3.569.000 đ` và hiển thị trong txml.

Có nhiều cách để làm việc này, tuy nhiên trong khuôn khổ bài này mình xin chia sẻ với các bạn cách mình hay sử dụng nhất đó là dùng `sjs` .

> :pushpin: Xem thêm [sjs](https://developers.tiki.vn/docs/framework/sjs/how-to-import)

##### Bước 1: Tạo file common.sjs

###### utils/common.sjs

```js
// Nhiệm vụ của function này là convert number 1000 --> 1.000 đ

export const moneyFormatter = (number, currency = ' ₫') => {
  return parseInt(number).toLocaleString('vi-VN') + currency;
};
```

##### Bước 2: Import function trên vào file index.txml của product

###### components/product/index.txml

```xml
<import-sjs from="../../utils/common.sjs" name="{moneyFormatter}"></import-sjs>
```

##### Bước 2: Sử dụng function

###### components/product/index.js

```js
{
  {
    moneyFormatter(product.price);
  }
}
```

> :pushpin: [Xem souce code tại đây](https://github.com/tikivn/miniapp-getting-started/tree/main/shop/src/components/product)

##

#### 5. Component product-section

Ở home page chúng ta có 2 loại product-section:

- Loại **vertical** có dạng grid 2 cột, scroll xuống để xem thêm sản phẩm
  ![](https://i.imgur.com/LfPjw59.png)

- Loại **horizontal** có dạng slide, vuốt sang trái để xem thêm sản phầm
  ![](https://i.imgur.com/GKk77Wv.png)

Chúng ta sẽ có một component với các props sau:

- `type` sẽ có giá trị là `horizontal` hoặc `vertical` để phân xác định dạng hiển thị
- `products` là array chứa các sản phẩm
- `onTapProduct` là callback sẽ được gọi khi nhấn vào `product`

###### components/product-section/index.js

```js
Component({
  props: {
    type: 'vertical',
    products: [],
    onTapProduct: () => {}
  },

  methods: {
    _onTapProduct(product) {
      this.props.onTapProduct(product);
    }
  }
});
```

Ở file .txml, chúng ta sẽ dùng `template` để tách biệt txml của 2 dạng vertical và horizontal

> :pushpin: Xem thêm [template](https://developers.tiki.vn/docs/framework/txml/template)

###### components/product-section/index.txml

```xml
<view class="{{className}}">
  <template name="vertical">
    <view class="product-section-vertical">
      <block
        tiki:for="{{products}}"
        tiki:key="id"
      >
        <product product="{{item}}" onTapProduct="_onTapProduct"/>
      </block>
    </view>
  </template>

  <template name="horizontal">
    <view class="product-section-horizontal hide-scroll-bar">
      <block
        tiki:for="{{products}}"
        tiki:key="id"
      >
        <product product="{{item}}" onTapProduct="_onTapProduct"/>
      </block>
    </view>
  </template>

  <template
    is="{{type}}"
    data="{{isLoading, products}}"
  />
</view>

```

Ở file .tcss:

- Với dạng **vertical** ta sẽ dùng grid và set 2 cột.
- Với dạng **horizontal** ta sẽ dùng flex và cho overflow-x auto.

###### components/product-section/index.tcss

```css
.product-section-vertical {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.product-section-horizontal {
  display: flex;
  overflow-x: auto;
}
```

> :pushpin: [Xem souce code tại đây](https://github.com/tikivn/miniapp-getting-started/tree/main/shop/src/components/product-section)

##

#### 6. Component category

![](https://i.imgur.com/1ayvVm4.png)

Tương tự component `product`, đây là một component đơn giản chúng ta chỉ cần sử dụng một vài class của `tini-style` như [flexbox](https://developers.tiki.vn/docs/component/advance/styling/flexbox/flex.generated) và [spacing](https://developers.tiki.vn/docs/component/advance/styling/spacing/margin.generated) là có thể hoàn thành cơ bản layout này.

> :pushpin: [Xem souce code tại đây](https://github.com/tikivn/miniapp-getting-started/tree/main/shop/src/components/product-section)

##

#### 7. Component category-section

![](https://i.imgur.com/kjn6uNX.png)

Component `category-section` sẽ có layout giống `product-section` dạng vertical, chỉ khác là `category-section` sẽ có 4 cột thay vì 2 và component con là `category` thay vì `product`.

###### components/category-section/index.tcss

```css
.product-section-vertical {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
```

> :pushpin: [Xem souce code tại đây](https://github.com/tikivn/miniapp-getting-started/tree/main/shop/src/components/category-section)

###

#### 8. Component category-carousel

<img src="https://i.imgur.com/2vlWTfO.gif" alt="category-carousel" width="400"/>

Thoạt nhìn qua `category-carousel` có vẻ giống `category-section`. Tuy nhiên bản chất `category-carousel` sẽ gồm một hoặc nhiều `category-section` dưới dạng carousel.

Chúng ta sẽ có một component với các props và method sau sau:

- `categories` là array chứa các category con
- `onTapCategory` là callback sẽ được gọi khi nhấn vào `category`
- `activatedCategory` để xác định index của `category-section` đang được active
- `onCategoryChange` sẽ được gọi khi chúng ta vuốt và set lại giá trị `activatedCategory`

###### components/category-carousel/index.js

```js
Component({
  props: {
    categories: [],
    onTapCategory: () => {},
    activatedCategory: 0
  },

  methods: {
    _onTapCategory(category) {
      this.props.onTapCategory(category);
    },

    onCategoryChange(event) {
      this.setData({
        activatedCategory: event.detail.current
      });
    }
  }
});
```

###### components/category-carousel/index.txml

```xml
<carousel
  indicator-dots="{{categories.length > 1}}"
  onChange="onCategoryChange"
>
  <carousel-item tiki:for="{{categories}}">
    <category-section
      className="category-carousel {{index === activatedCategory ? 'category-carousel-active' : index < activatedCategory ? 'category-carousel-prev' : 'category-carousel-next'}} {{index === categories.length - 1 ? 'category-carousel-last' : ''}}"
      categories="{{item}}"
      onTapCategory="_onTapCategory"
    />
  </carousel-item>
</carousel>
```

Ứng với mỗi vị trí `prev, active, next, last` ta sẽ có css khác nhau để tạo ra hiệu ứng như video ở trên.

###### components/category-carousel/index.tcss

```css
.category-carousel {
  transition: ease-in-out 0.3s;
}

.category-carousel-prev {
  transform: translateX(-22px);
}

.category-carousel-active,
.category-carousel-next {
  transform: translateX(22px);
}

.category-carousel-active.category-carousel-last {
  padding: 0 8px;
  transform: unset;
}
```

> :pushpin: [Xem souce code tại đây](https://github.com/tikivn/miniapp-getting-started/tree/main/shop/src/components/category-carousel)

#### 9. Tổng thể

Như vậy chúng ta đã đi qua tất cả các component ở home page, bây giờ ta có thể ghép chúng lại với nhau:

###### pages/home/index.txml

```xml,
<view tiki:else>
  <banners
    class="home-banners"
    banners="{{banners}}"
  />

  <view class="home-section">
    <section-title
      title="Hot deals"
    />
    <product-section
      type="horizontal"
      className="home-hot-deals"
      products="{{hotDealProducts}}"
      onTapProduct="onTapProduct"
    />
  </view>

  <view class="home-section home-category">
    <section-title
      title="Category"
      onTapActionButton="goToCategory"
    />
    <category-carousel
      categories="{{categories}}"
      onTapCategory="goToCategoryDetail"
    />
  </view>

  <view class="home-section">
    <section-title
      title="Featured"
    />
    <product-section
      products="{{featuredProducts}}"
      onTapProduct="onTapProduct"
    />
  </view>

  <view class="home-section">
    <section-title
      title="New"
    />
    <product-section
      products="{{newProducts}}"
      onTapProduct="onTapProduct"
    />
  </view>
</view>
```

Khai báo tên page

###### pages/home/index.json

```json
{
  "defaultTitle": "Shop Name",
  "usingComponents": {
    "banners": "components/banners/index",
    "section-title": "components/section-title/index",
    "product-section": "components/product-section/index",
    "category-carousel": "components/category-carousel/index"
  }
}
```

Thêm icon giỏ hàng
![](https://i.imgur.com/J9aZVFk.png)

###### pages/home/index.js

```js
//...
  async onReady() {
    my.addIconsToNavigationBar({
      icons: [
        {
          image: image,
          width: 48,
          height: 48,
        },
      ],
      padding: 8,
    });
  },
```

Thêm tab bar bằng cách khai bảo ở **app.json**:
![](https://i.imgur.com/DwVRHUo.png)

###### app.json

```json
{
  "window": {
    "defaultTitle": "Tini shop"
  },
  "pages": ["pages/home/index"],
  "tabBar": {
    "borderTopActiveColor": "#1A94FF",
    "borderTopColor": "#EBEBF0",
    "items": [
      {
        "name": "Home",
        "pagePath": "pages/home/index",
        "icon": "/assets/icons/tab-home.png",
        "activeIcon": "assets/icons/tab-home-active.png"
      }
    ]
  }
}
```

Và chúng ta sẽ có kết quả như hình:
![](https://i.imgur.com/4MKUjPO.png)

##

#### 10. Mock data và API

Bạn sẽ thắc mắc là data đâu để render như vậy.
Câu trả lời là chúng ta sẽ xây dựng mock data và lấy chúng thông qua API của Github.
Vì mình đã publish chúng nên bạn có thể sử dụng chung mock data với mình mà không phải xây dựng lại từ đầu.
Ví dụ bạn muốn lấy danh sách sản phẩm mới, bạn có thể gọi tới API sau: https://raw.githubusercontent.com/tikivn/miniapp-getting-started/main/shop/src/services/mock/new-products.json

Ở Tini App, bạn không cần và không sử dụng được các package khác để tạo một request API, thay vào đó Tini App đã cung cấp cho bạn một jsapi là `my.request`.

> :pushpin: Xem thêm [my.request](https://developers.tiki.vn/docs/api/network/request)

Vì `my.request` có dạng callback nên để thuận tiện mình sẽ wrap nó lại thành một async function:

###### services/request.js

```js
export const request = async ({
  path,
  method = 'GET',
  headers = {},
  data
}) => {
  return new Promise((resolve, reject) => {
    my.request({
      url: `${BASE_URL}/${path}.json`,
      headers: {
        'Content-Type': 'application/json',
        ...headers
      },
      method,
      data,
      success: (res) => {
        resolve(res);
      },
      fail: (err) => {
        reject(err);
      }
    });
  });
};
```

Cài đặt các API gọi đến từng end-point tương ứng:

###### services/index.js

```js
export const getShopInfoAPI = () => {
  return request({ path: '/shop' });
};

export const getCategoriesAPI = () => {
  return request({ path: '/categories' });
};

export const getFeaturedProductsAPI = () => {
  return request({ path: '/featured-products' });
};

export const getNewProductsAPI = () => {
  return request({ path: '/new-products' });
};
```

Và ở page, mình sẽ gọi các API này ở life cycle method `onLoad()` và dùng `setData()` để gán các giá trị mới nhận được vào data đồng thời trigger re-render.

> :pushpin: Xem thêm [Page và setData](https://developers.tiki.vn/docs/framework/miniapp-page/introduction)
> :pushpin: Xem thêm [Page's life cycle](https://developers.tiki.vn/docs/framework/miniapp-page/life-cycle)

###### pages/home/index.js

```js
Page({
  data: {
    shop: {},
    categories: [],
    featuredProducts: [],
    newProducts: [],
    banners: [],
    hotDealProducts: []
  },

  async loadData() {
    try {
      const [
        shop,
        categories,
        featuredProducts,
        newProducts,
        banners,
        hotDealProducts
      ] = await Promise.all([
        getShopInfoAPI(),
        getCategoriesAPI(),
        getFeaturedProductsAPI(),
        getNewProductsAPI(),
        getBannersAPI(),
        getHotDealProductsAPI()
      ]);

      this.setData({
        shop,
        featuredProducts,
        newProducts,
        banners,
        hotDealProducts,
        categories: group(categories, 8)
      });
    } catch {
      this.setData({
        isLoading: false
      });
    }
  },

  async onReady() {
    this.loadData();
  }
});
```

> :pushpin: [Xem souce code tại đây](https://github.com/tikivn/miniapp-getting-started/tree/main/shop/src/pages/home)

---

### :end: C. Tạm kết

Chúng ta đã đi qua các phần:

- Shopping Template là gì
- Chức năng và cấu trúc dự án
- Cách khởi tạo project Tini App
- Xây dựng Home page:
  - Phân tích và break layout
  - Xây dựng các component
  - Data và gọi API

Rất cảm ơn bạn và cũng xin chúc mừng bạn đã cùng mình tìm hiểu xây dựng từ đầu một ứng dụng Tini App thực sự.
Vì bài viết đã dài nên mình xin kết thúc phần 1 ở đây. Xin hẹn gặp lại các bạn ở phần 2 và cùng nhau xây dựng những pages tiếp theo
Chúc các bạn có thời gian bổ ích và vui vẻ với `Tini App`. :tada:
