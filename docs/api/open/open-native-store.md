---
title: my.openNativeAppStore
---

## Giới thiệu

**my.openNativeAppStore** là API dùng để mở apple store hoặc play store của 1 ứng dụng

## Sử dụng

### Sample Code

```xml title=index.txml
<view>
  <block-header title="Usage" description="Open the Google Play/Apple Store" />
  <view class="block-content">
    <button class="button-full" onTap="onOpenNativeStore">Open Store</button>
  </view>
</view>
```

```js title=index.js
Page({
  onOpenNativeStore() {
    my.openNativeAppStore({
      googlePlayId: 'vn.tiki.app.tikiandroid',
      appleStoreId: '958100553',
      success: (res) => {
        console.log(res);
      },
      fail: (e) => {
        console.log(e);
      },
    });
  },
});
```

### API Params

Các thuộc tính:

| Attributes | Type     | Required | Description                                                                         |
| ---------- | -------- | -------- | ----------------------------------------------------------------------------------- |
| appleStoreId        | String   |        | App Id của ứng dụng ios cần mở link tới apple store |
| googlePlayId | String |   | App Id của ứng dụng android cần mở link tới apple store |
| success    | Function | No       | Callback function khi mở store được thực hiện thành công                             |
| fail       | Function | No       | Callback function khi mở store thất bại, argument sẽ là error message                |
| complete   | Function | No       | Callback function khi việc mở store kết thúc cho dù thành công hay thất bại.     |

### Callback function payload
* success callback payload là 1 biến boolean và luôn là true 
* Fail callback payload 

| Attributes   | Type     |  Description              |
| ----------   | -------- | ------------------------- |
| error        | string   | error title               |
| errorMessage | string   | error message in detail   |
