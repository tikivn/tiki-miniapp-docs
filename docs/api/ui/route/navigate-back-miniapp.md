---
title: my.navigateBackMiniApp
---

## Giới thiệu

**my.navigateBackMiniApp** là API dùng để quay lại app trước đó. API chỉ gọi thành công khi app hiện tại được mở từ một app khác trước đó.

## Sử dụng

### Sample Code

```xml
<view class="page">
  <view class="page__section">
    <view class="button">
      <button title="Navigate To MiniApp" onTap="navigateToMiniApp" />
    </view>
    <view class="button">
      <button title="Navigate back MiniApp" onTap="navigateBackMiniApp" />
    </view>
  </view>
</view>
```

```js
Page({
  navigateBackMiniApp() {
    my.navigateBackMiniApp({
      extraData: {
        paymentStatus: 'success'
      },
      success() {
        alert('DONE');
      }
    });
  }
});
```

### API Params

| Attributes | Type     | Required | Description                                                                                                                        |
| ---------- | -------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| extraData  | Object   | No       | Dữ liệu cần được truyền cho app được nhảy tới.<br /> App được nhảy tới sẽ lấy thông tin qua hàm `App.onLaunch()` và `App.onShow()` |
| success    | Function | No       | Callback function khi thành công.                                                                                                  |
| fail       | Function | No       | Callback function khi thất bại.                                                                                                    |
| complete   | Function | No       | Callback function khi hoàn tất tác vụ cho dù thành công hay thất bại.                                                              |