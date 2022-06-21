---
title: my.getCart
sidebar_custom_props:
  description: Trả về tổng sản phẩm đang có trong giỏ hàng (cart) của Tiki, được lọc theo sellerId
---

`my.getCart` là API trả về tổng sản phẩm đang có trong giỏ hàng (cart) của Tiki, được lọc theo sellerId.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/get-cart/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/api/get-cart/index" />

## API Params

| Thuộc tính | Kiểu dữ liệu | Bắt buộc | Mô tả                                                                   |
| ---------- | ------------ | :------: | ----------------------------------------------------------------------- |
| sellerId   | Number       |    ✓     | Id của nhà bán                                                          |
| success    | Function     |          | Callback function khi get cart được thực hiện thành công                |
| fail       | Function     |          | Callback function khi get cart thất bại, argument sẽ là error message   |
| complete   | Function     |          | Callback function khi get cart kết thúc cho dù thành công hay thất bại. |

### Giá trị trong success callback

| Thuộc tính | Kiểu dữ liệu | Mô tả                                                  |
| ---------- | ------------ | ------------------------------------------------------ |
| total      | number       | Tổng sản phẩm trong giỏ hàng theo sellerId             |
| items      | array        | Danh sách tất cả sản phẩm trong giỏ hàng theo sellerId |

## Sample Code

```xml title=index.txml
<view>
  <block-header title="Usage" description="Get Cart" />
  <view class="block-content">
    <button style="width: 100%;" onTap="onGetCart">
      Get Cart
    </button>
  </view>
</view>
```

```js title=index.js
Page({
  onGetCart() {
    my.getCart({
      sellerId: 1,
      success: (res) => {
        console.log(res);
        my.alert({
          title: 'Total number of items',
          content: res.total
        });
      },
      fail: (res) => {
        console.log(res);
      }
    });
  }
});
```
