---
title: my.prompt
---

`my.prompt` là api để hiển thị prompt popup, để user có thể nhập giá tri vào.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/prompt/index" />

## API Params

| Thuộc tính       | Kiểu dữ liệu | Mô tả                                                |
| ---------------- | ------------ | ---------------------------------------------------- |
| title            | string       |  Title của prompt box                                 |
| message          | string       | Content message của prompt box                       |
| placeholder      | string       | Placeholder của text box                             |
| align            | string       | Kiểu align cho message:J "left", "center" hoặc "right" |
| okButtonText     | string       | Text của button ok, mặc định là OK                   |
| cancelButtonText | string       | Text của button cancel, mặc định là Cancel           |
| success          | Function     | Callback function khi hiển thị prompt box thành công.|
| fail             | Function     | Callback function khi hiển thị prompt box thất bại.  |
| complete         | Function     | Callback function khi hoàn tất gọi hàm bất kể thành công hay thất bại.  |


## Sample Code

```xml title=index.txml
<view class="page">
  <view class="page-description">Confirm API</view>
  <view class="page-section">
    <view class="page-section-title">my.prompt</view>
    <view class="page-section-demo">
      <button type="primary" onTap="onPrompt">Show prompt</button>
    </view>
  </view>
</view>
```

```js title=index.js
Page({
  onPrompt() {
    my.prompt({
      title: 'Prompt',
      message: 'This is a long message',
      placeholder: 'Input your name',
      okButtonText: 'Uhm',
      cancelButtonText: 'Ohm',
      success: (result) => {
        my.alert({
          title: JSON.stringify(result)
        });
      }
    });
  }
});
```
