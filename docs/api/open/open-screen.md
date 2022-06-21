---
title: my.openScreen
sidebar_custom_props:
  description: Dùng để mở 1 số màn hình của Tiki
---

`my.openScreen` là API dùng để mở 1 số màn hình của Tiki.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/open-screen/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/api/open-screen/index" />

## API Params

| Thuộc tính | Kiểu dữ liệu | Bắt buộc | Mô tả                                                                                    |
| ---------- | ------------ | :------: | ---------------------------------------------------------------------------------------- |
| screenCode | String       |    ✓     | Mã screen cần mở                                                                         |
| params     | Object       |          | Các thông số params gửi kèm khi mở màn hình ví dụ màn hình product detail cần product id |
| success    | Function     |          | Callback function khi mở màn hình được thực hiện thành công                              |
| fail       | Function     |          | Callback function khi mở màn hình thất bại, argument sẽ là error message                 |
| complete   | Function     |          | Callback function khi việc mở màn hình kết thúc cho dù thành công hay thất bại.          |

### Callback function payload

- success callback payload là 1 biến boolean và luôn là true
- Fail callback payload

| Thuộc tính   | Kiểu dữ liệu | Mô tả                   |
| ------------ | ------------ | ----------------------- |
| error        | string       | error title             |
| errorMessage | string       | error message in detail |

### Mã màn hình

| Mã màn hình       | Mô tả                   | Params required  |
| ----------------- | ----------------------- | ---------------- |
| TK_PRODUCT_DETAIL | Màn hình Product detail | productId        |
| TK_HOME           | Màn hình home           | No               |
| TK_LISTING        | Màn hình categories     | categoryId (web) |
| TK_SOCIAL_FEED    | Màn hình Lướt           | No               |
| TK_PROFILE        | Màn hình user profile   | tikiid           |
| TK_CART           | Màn hình Cart           |                  |

## Sample Code

```xml title=index.txml
<view>
  <block-header title="Usage" description="Open a screen" />
  <view class="block-content">
    <input class="form-value" placeholder="Product ID" name="productId" onInput="productIdChange"></input>
    <button class="button-full" onTap="onOpenProductDetail">Open Product detail</button>
  </view>
  <view class="block-content">
    <button class="button-full" onTap="onOpenHome">Open Home</button>
  </view>
  <view class="block-content">
    <button class="button-full" onTap="onOpenFeed">Open Feed</button>
  </view>
  <view class="block-content">
    <input class="form-value" placeholder="Category ID" name="categoryId" onInput="categoryIdChange"></input>
    <button class="button-full" onTap="onOpenListing">Open Product Listing</button>
  </view>
  <view class="block-content">
    <button class="button-full" onTap="onOpenCart">Open Cart</button>
  </view>
  <view class="block-content">
    <input class="form-value" placeholder="Tiki ID" name="tikiId" onInput="tikiIDChange"></input>
    <button class="button-full" onTap="onOpenProfile">Open Profile</button>
  </view>
  <view class="block-content">
    <input class="form-value" placeholder="Slug" name="slug" onInput="slugChange"></input>
    <button class="button-full" onTap="onOpenSellerStore">Open Seller Store</button>
  </view>
</view>
```

```js title=index.js
Page({
  ...
  onOpenProductDetail() {
    my.openScreen({
      screenCode: "TK_PRODUCT_DETAIL",
      params: { productId: this.data.productId },
      success: (res) => {
        console.log(res);
      },
      fail: (e) => {
        console.log(e);
      },
    });
  },
  onOpenHome() {
    my.openScreen({
      screenCode: "TK_HOME",
      success: (res) => {
        console.log(res);
      },
      fail: (e) => {
        console.log(e);
      },
    });
  },
  onOpenFeed() {
    my.openScreen({
      screenCode: "TK_SOCIAL_FEED",
      success: (res) => {
        console.log(res);
      },
      fail: (e) => {
        console.log(e);
      },
    });
  },
  onOpenListing() {
    my.openScreen({
      screenCode: "TK_LISTING",
      params: { categoryId: this.data.categoryId },
      success: (res) => {
        console.log(res);
      },
      fail: (e) => {
        console.log(e);
      },
    });
  },
  onOpenProfile() {
    my.openScreen({
      screenCode: "TK_PROFILE",
      params: { tikiid: this.data.tikiId },
      success: (res) => {
        console.log(res);
      },
      fail: (e) => {
        console.log(e);
      },
    });
  },
  onOpenSellerStore() {
    my.openScreen({
      screenCode: "TK_SELLER_STORE",
      params: { slug: this.data.slug },
      success: (res) => {
        console.log(res);
      },
      fail: (e) => {
        console.log(e);
      },
    });
  },
  onOpenCart() {
    my.openScreen({
      screenCode: "TK_CART",
      success: (res) => {
        console.log(res);
      },
      fail: (e) => {
        console.log(e);
      },
    });
  },
}
```
