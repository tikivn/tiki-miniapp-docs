---
title: my.navigateBack
---

## Giới thiệu

**my.navigateTo** là API dùng để đóng màn hình hiện tại và trở lại màn hình trước đó.

## Sử dụng

### Sample Code

```xml
<view class="page">
  <view class="page__section">
    <view class="button">
      <button onTap="navigateTo">Navigate To</button>
    </view>
    <view class="button">
      <button onTap="navigateBack">Navigate Back</button>
    </view>
    <view class="button">
      <button onTap="switchTab">Switch Tab</button>
    </view>
    <view class="button">
      <button onTap="reLaunch">reLaunch</button>
    </view>
  </view>
</view>
```

```js
Page({
  navigateBack() {
    my.navigateBack();
  }
});
```

### API Params

| Attributes | Type   | Required | Description                                                                                                                                                |
| ---------- | ------ | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| delta      | Number | No       | Số lượng giữa page hiện tại với page muốn quay lại. Ví dụ bạn muốn bỏ qua page trước đó và quay lại page trước đó nữa thì `delta = 2`. Mặc định delta = 1. |