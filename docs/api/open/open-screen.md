---
title: my.openScreen
---

## Giới thiệu

**my.openScreen** là API dùng để mở 1 số màn hình của tiki

## Sử dụng

### Sample Code
index.txml
```xml
<view class="block-content">
    <input class="form-value" placeholder="Product ID" name="productId" onInput="productIdChange"></input>
    <button class="button-full" onTap="onOpenProductDetail">Open Product detail</button>
  </view>
  <view class="block-content">
    <button class="button-full" onTap="onOpenFeed">Open Feed</button>
  </view>
  <view class="block-content">
    <button class="button-full" onTap="onOpenListing">Open Listing</button>
  </view>
  <view class="block-content">
    <input class="form-value" placeholder="Tiki ID" name="tikiId" onInput="tikiIDChange"></input>
    <button class="button-full" onTap="onOpenProfile">Open Profile</button>
  </view>
```

index.js
```js
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
```

### API Params

Các thuộc tính:

| Attributes | Type     | Required | Description                                                                         |
| ---------- | -------- | -------- | ----------------------------------------------------------------------------------- |
| screenCode        | String   | Yes      | Mã screen cần mở |
| params | Object | No | Các thông số params gửi kèm khi mở màn hình ví dụ màn hình product detail cần product id |
| success    | Function | No       | Callback function khi mở màn hình được thực hiện thành công                             |
| fail       | Function | No       | Callback function khi mở màn hình thất bại, argument sẽ là error message                |
| complete   | Function | No       | Callback function khi việc mở màn hình kết thúc cho dù thành công hay thất bại.     |

### Callback function payload
* success callback payload là 1 biến boolean và luôn là true 
* Fail callback payload 

| Attributes   | Type     |  Description              |
| ----------   | -------- | ------------------------- |
| error        | string   | error title               |
| errorMessage | string   | error message in detail   |

### Mã màn hình


| Mã màn hình  | Description | Params required |
| ----------   | -------- | ------------------------- |
| TK_PRODUCT_DETAIL  | Màn hình Product detail   |     productId          |
| TK_HOME | Màn hình home   | No |
| TK_LISTING | Màn hình categories   | No |
| TK_SOCIAL_FEED | Màn hình Lướt   | No |
| TK_PROFILE | Màn hình user profile   | tikiid |
