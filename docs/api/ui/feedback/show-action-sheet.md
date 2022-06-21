---
title: my.showActionSheet
sidebar_custom_props:
  description: Hiển thị bottom popup để user có thể chọn option
---

`my.showActionSheet` là API để hiển thị bottom popup để user có thể chọn option.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/action-sheet/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/api/action-sheet/index" />

## API Params

| Thuộc tính          | Kiểu dữ liệu     | Bắt buộc | Mô tả                                                                  |
| ------------------- | ---------------- | :------: | ---------------------------------------------------------------------- |
| title               | string           |          | Title của action sheet                                                 |
| items               | Array of strings |    ✓     | Các options hiển thị ra cho user                                       |
| destructiveBtnIndex | number           |          | Chỉ ra index của option mà muốn hiển thị kiểu destructive              |
| cancelButtonText    | string           |          | Text của button cancel, mặc định là Cancel                             |
| success             | Function         |          | Callback function khi hiển thị bottom popup thành công.                |
| fail                | Function         |          | Callback function khi hiển thị bottom popup thất bại.                  |
| complete            | Function         |          | Callback function khi hoàn tất gọi hàm bất kể thành công hay thất bại. |

## Sample Code

```xml title=index.txml
<view class="page">
  <view class="page-description">Confirm API</view>
  <view class="page-section">
    <view class="page-section-title">my.confirm</view>
    <view class="page-section-demo">
      <button type="primary" onTap="onActionSheet">Show action sheet</button>
    </view>
  </view>
</view>
```

```js title=index.js
Page({
  onActionSheet() {
    my.showActionSheet({
      title: 'Action Sheet',
      items: ['Button 1', 'Button 2', 'Button 3'],
      destructiveBtnIndex: 2,
      success: (res) => {
        const btn =
          res.index === -1 ? 'Cancel' : 'at index ' + res.index;
        my.alert({
          title: `Clicked button ${btn}`
        });
      }
    });
  }
});
```
