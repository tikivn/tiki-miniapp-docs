---
title: my.confirm
---

`my.confirm` là API để hiển thị Confirm popup. Có thể set được title, content, text của  Confirm và Cancel button

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/confirm/index" />

## API Params

| Thuộc tính        | Kiểu dữ liệu | Mô tả                                       |
| ----------------- | ------------ | ------------------------------------------- |
| title             | String       | Title của confirm box                       |
| content           | String       | Content message của confirm box             |
| confirmButtonText | String       | Text của button confirm, mặc định là OK     |
| cancelButtonText  | String       | Text của button confirm, mặc định là Cancel |
| success           | Function     | Callback function khi gọi hàm thành công.       |
| fail              | Function     | Callback function khi gọi hàm thất bại.          |
| complete          | Function     | Callback function khi hoàn tất gọi hàm bất kể thành công hay thất bại.     |

## Sample Code

```xml title=index.txml
<view class="page">
  <view class="page-description">Confirm API</view>
  <view class="page-section">
    <view class="page-section-title">my.confirm</view>
    <view class="page-section-demo">
      <button type="primary" onTap="onConfirm">Show Confirm</button>
    </view>
  </view>
</view>
```

```js title=index.js
Page({
  onConfirm() {
    my.confirm({
      title: 'Alert title',
      content: 'Alert content',
      confirmButtonText: 'Confirm',
      cancelButtonText: 'Cancel',
      success: (result) => {
        my.alert({ title: `${result.confirm}` });
      },
      fail: (e) => {
        my.alert({ title: `${e}` });
      },
      complete: () => {
        console.log('Complete');
      }
    });
  }
});
```


