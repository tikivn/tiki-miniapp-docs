---
title: Custom header
---

## Giới thiệu

Bài viết này sẽ hướng dẫn các bạn làm một header cho page với nội dung được fixed on top kèm theo animation khi scroll page. Bạn có thể xem kết quả ở hình bên dưới:

<img style={{maxWidth: 300}} src="/img/header-animation.gif" alt="Header animation" />

import Import from '@site/src/components/Import';

<Import github="https://github.com/tikivn/tiniapp-example" githubFolder="custom-header" />

## 1. Giới thiệu các cấu hình `transparentTitle`

`transparentTitle` là thuộc tính dùng để cấu hình độ transparent (trong suốt) của thanh navigation bar (thanh điều hướng), được khai báo trong file config `app.json` hoặc trong file config `.json` của các page. Khi bạn thiết lập cấu hình này trong app thì nó sẽ được sử dụng cho tất cả các page, nếu bạn để trong page thì chỉ page đó có hiệu lực. Ngoài ra trong app.json thì bạn phải bỏ vào trong `window`, còn với page thì bạn phải để bên ngoài.

```json title=src/app.json
{
  "window": {
    "transparentTitle": "auto"
  }
}
```

```json title=src/pages/index/index.json
{
  "transparentTitle": "auto"
}
```

`transparentTitle` hỗ trợ 3 giá trị:

- none: giá trị mặc định, navigation bar sẽ không có transparent, và nó sẽ có màu dựa vào config của `titleBarColor` (Mặc định là màu trắng)
- always: luôn transparent
- auto: mức độ transparent sẽ tự động thay đổi dựa vào vị trí scroll trên màn hình

<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridGap: 8, marginBottom: 16 }}>
  <img src="/img/header-none.gif" alt="header none" />
  <img src="/img/header-always.gif" alt="header always" />
  <img src="/img/header-auto.gif" alt="header auto" />
</div>

Bạn có thể xem thêm các cấu hình khác cho page tại [đây](/docs/framework/miniapp-page/config) và cho app tại [đây](/docs/framework/app/config#window)

## 2. Kết hợp cấu hình `transparentTitle` với sự kiện `onPageScroll` để làm header

Ở phần 1 chúng ta đã tìm hiểu về các loại config cho `transparentTitle`. Bằng việc tùy biến các config, bạn hoàn toàn có thể làm được thanh header với nhiều hiệu ứng khác nhau. Sau đây mình sẽ hướng dẫn các bạn cách làm một thanh header như vậy.

Trước tiên chúng ta xác định header sẽ có 2 trạng thái:

1. Trạng thái mặc định, khi page chưa được scroll:
   <img style={{maxWidth: 300}} src="/img/header-state-1.png" alt="header state 1" />

2. Trạng thái sau khi page scroll đến một mức nào đó, input sẽ được đẩy lên trên và màu của header sẽ thay đổi:
   <img style={{maxWidth: 300}}src="/img/header-state-2.png" alt="header state 2" />

Trước tiên bạn cần vào file `.json` của page để thêm vào `transparentTitle: always` để chúng ta có thể hoàn toàn làm chủ màu của thanh navigation bar:

```json title=src/pages/index/index.json
{
  "transparentTitle": "always"
}
```

Sau khi config transparentTitle, chúng ta sẽ implement txml. Ở đây mình sẽ chia header thành 3 phần:

1. Top Header: sẽ chứa icon luôn fix cạnh các control trên navigation bar
2. Search: chứa ô input phục vụ cho mục đích tìm kiếm
3. Top Content: để hiển thị nội dung nào đó trên cùng

```xml title=src/pages/index/index.txml
<view class="wrap {{fixedHeader ? 'fix-search' : ''}}">
  <view class="top-header">
    <image
      class="cart"
      onTap="onTapCart"
      src="{{ fixedHeader? '../../images/cart-black.svg' : '../../images/cart-white.svg'}}" />
  </view>

  <view class="search">
    <input class="input" type="search" placeholder="Search here..." />
  </view>

  <view class="top">
    <view class="top-content">
      <text class="greeting" number-of-lines="{{1}}">
        Hi, I'm Tini App!
      </text>
    </view>
  </view>
</view>
```

Dưới đây là nội dung của tcss

```css title=src/pages/index/index.tcss
:root {
  --control-width: 90px;
  --cart-size: 24px;
}

.wrap {
  position: relative;
}

.top-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
}

.cart {
  width: var(--cart-size);
  height: var(--cart-size);
  position: absolute;
  top: calc(var(--tf-status-bar-height) + 15px);
  right: calc(var(--control-width) + 8px);
}

.fix-search .top-header {
  background: #fff;
}

.search {
  position: absolute;
  background: #017fff;
  top: calc(var(--tf-status-bar-height) + 48px);
  left: 0;
  right: 0;
  padding: 8px 16px;
}

.fix-search .search {
  background: #fff;
  border-bottom: solid 1px #ccc;
}

.search .input {
  width: 100%;
  transition: width 0.2s;
  display: block;
}

.fix-search .search {
  position: fixed;
  padding-top: calc(var(--tf-status-bar-height) + 5px);
  top: 0;
}

.fix-search .search input {
  width: calc(100% - var(--control-width) - var(--cart-size));
}

.top {
  padding-top: calc(var(--tf-status-bar-height));
  background: #017fff;
}

.top-content {
  width: 100%;
  height: 90px;
  background: #017fff;
  margin: 0 auto;
}

.greeting {
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  margin-left: 16px;
  margin-top: 12px;
}
```

Và cuối cùng là xử lý logic trong file .js

```javascript title=src/pages/index/index.js
Page({
  data: {
    fixedHeader: false
  },
  onPageScroll(event) {
    this.setData({ fixedHeader: event.scrollTop > 20 });
  },
  onTapCart() {
    console.log('onTapCart');
  }
});
```

Trong txml mình đã chia thành 3 thành phần như mình nói ở trên, bạn có thể tùy chỉnh nội dung lại theo nhu cầu app của bạn.

Trong tcss, mình sẽ kết hợp sử dụng css variable và calc, đồng thời dùng position absolute và fixed cho các nội dung cần cố định.

Để thay đổi trạng thái từ 1 sang 2, trong js chúng ta cần lắng nghe sự kiện `onPageScroll`. Khi scrollTop vượt quá 20px, mình sẽ cập nhật lại biến `fixedHeader`. Khi biến này thay đổi giá trị là `true`, class `fix-search` sẽ được thêm vào trong view wrap, đồng thời hình của Giỏ hàng (cart) sẽ đổi từ màu trắng sang màu đen:

```xml {1,6}
<view class="wrap {{fixedHeader ? 'fix-search' : ''}}">
  <view class="top-header">
    <image
      class="cart"
      onTap="onTapCart"
      src="{{ fixedHeader? '../../images/cart-black.svg' : '../../images/cart-white.svg'}}" />
  </view>
  ...
</view>
```

## Kết

Sau bài viết này hy vọng các bạn có thêm nhiều ý tưởng mới cho việc làm đẹp navigation bar và header cho app của bạn. Nếu có bất kỳ câu hỏi hoặc góp ý nào, bạn hãy lên [community](https://community.tiki.vn) để chia sẻ nhé.

Bài viết đã được lượt bớt một số code. Bạn có thể xem đầy đủ code tại [đây](https://github.com/tikivn/tiniapp-example/tree/main/custom-header)
