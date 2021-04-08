---
order: 41
category:
  vi-VN: Điều hướng
  en-US: Navigator
title: 
  vi-VN: my.navigateBack
  en-US: my.navigateBack
---

## Giới thiệu

**my.navigateTo** là API dùng để đóng màn hình hiện tại và trở lại màn hình trước đó.

## Sử dụng

### Sample Code

```jsx
<view style={styles.page}>
  <view style={styles.page__section}>
    <view style={styles.button}>
      <button title="Navigate To" onPress={navigateTo} />
    </view>
    <view style={styles.button}>
      <button title="Navigate Back" onPress={navigateBack}  />
    </view>
    <view style={styles.button}>
      <button title="Switch Tab" onPress={switchTab}  />
    </view>
    <view style={styles.button}>
      <button title="reLaunch" onPress={reLaunch}  />
    </view>
  </view>
</view>
```

```js
Page({
  navigateBack() {
    my.navigateBack();
  },
})
```

### API Params

| Attributes | Type   | Required | Description                                                                                                                                                 |
| ---------- | ------ | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| delta      | Number | No       | Số lượng giữa page hiện tại với page muốn quay lại. Ví dụ bạn muốn bỏ qua page trước đó và quay lại page trước đó nữa thì `delta = 2`. Mặc định delta = 1. |
