---
title: my.getAppSecret
---

`my.getAppSecret` là API dùng để lấy thông tin secret của Mini App hiện tại. Thông tin này có thể được thiết lập ở trang web Tini Console của Mini App này.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/app-secret/index" />

**_Khả dụng_**: Hỗ trợ từ version 1.87.5 trở lên.

## API Params

| Thuộc tính | Kiểu dữ liệu | Mô tả                                      |
| ---------- | ------------ | ------------------------------------------ |
| success    | Function     | Callback function khi thực hiện thành công.|
| fail       | Function     | Callback function khi thực hiện thất bại.  |
| complete   | Function     | Callback function khi thực hiện hoàn tất.  |

### Sample Code

```xml
<view>
  <view class="block-content">
    <text class="title text-full">my.getAppSecret</text>
    <text class="description text-full">Get app secret, which is set via tini console</text>
    <button class="button-full" onTap="onGetAppSecret">Get App Secret</button>
  </view>
</view>
```

```js
Page({
  onGetAppSecret() {
    my.getAppSecret({
      success: (res) => {
        my.alert({ title: 'Success', content: JSON.stringify(res) });
      },
      fail: (e) => {
        my.alert({ title: 'Fail', content: JSON.stringify(e) });
      },
    });
  },
});
```
