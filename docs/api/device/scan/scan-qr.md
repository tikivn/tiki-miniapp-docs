---
title: my.scan
---

## Giới thiệu

- **my.scan** là API dùng để scan QR hoặc barcode
- Chỉ hỗ trợ từ version 1.78.1 trở lên

## Sử dụng

### Sample Code

```js title=index.js
Page({
  onScan() {
    my.scan({
      success: (res) => {
        console.log(res);
        my.alert({ title: 'Found', content: res});
      },
      fail: (e) => {
        console.log(e);
      },
    });
  },
});
```

```xml title=index.txml
<view>
  <block-header title="Usage" description="Scan QR/Barcode" />
  <view class="block-content">
    <button class="button-full" onTap="onScan">Start Scan</button>
  </view>
</view>
```

### API Params

Các thuộc tính:

| Attributes | Type     | Required | Description                                                                                                              |
| ---------- | -------- | -------- | ------------------------------------------------------------------------------------------------------------------------ |
| hideAlbum  | Function | No       | Option để hide button chọn hình từ album. Chỉ cho phép scan hoàn toàn bằng camera   |
| success    | Function | No       | Callback khi việc scan thành công                                                   |
| fail       | Function | No       | Callback khi việc scan thất bại                                                     |
| complete   | Function | No       | Callback khi việc scan thành công hoặc thất bại                                     |

### Callback function payload

Response trong success callback là string của code scan được