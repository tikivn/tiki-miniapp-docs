---
title: my.setChatSellerProfileId
sidebar_custom_props:
  description: Dùng để set chat seller profile Id
---

`my.setChatSellerProfileId` là API dùng để set chat seller profile Id. Nếu set chat seller profile Id thì khi mở chat từ option menu, sẽ mở tới kênh chat với seller đó.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/set-chat-seller-profile/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/api/set-chat-seller-profile/index" />

## API Params

| Thuộc tính | Kiểu dữ liệu | Bắt buộc | Mô tả                                                                                     |
| ---------- | ------------ | :------: | ----------------------------------------------------------------------------------------- |
| sellerId   | Number       |    ✓     | Id của nhà bán                                                                            |
| success    | Function     |          | Callback function khi set chat seller profile Id được thực hiện thành công                |
| fail       | Function     |          | Callback function khi set chat seller profile Id thất bại, argument sẽ là error message   |
| complete   | Function     |          | Callback function khi set chat seller profile Id kết thúc cho dù thành công hay thất bại. |

## Sample Code

```xml title=index.txml
<view>
<block-header
      title="Usage"
      description="my.setChatSellerProfileId" />
  <view class="block-content">
    <view>
      <input style="width:100%" type="text" placeholder="seller id" name="key" value="{{sellerId}}" onInput="sellerIdChange"></input>
    </view>
    <view>
      <button class="button-full" onTap="onTapChange">setChatSellerProfileId</button>
    </view>
  </view>
</view>
```

```js title=index.js
Page({
  data: {
    sellerId: ''
  },
  sellerIdChange(e) {
    this.setData({
      sellerId: e.detail.value
    });
  },
  onTapChange() {
    my.setChatSellerProfileId({
      sellerId: this.data.sellerId,
      success: (res) => {
        my.alert({ content: `Đã set seller id thành công` });
      }
    });
  }
});
```
