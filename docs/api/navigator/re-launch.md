---
order: 42
category:
  vi-VN: Điều hướng
  en-US: Navigator
title:
  vi-VN: my.reLaunch
  en-US: my.reLaunch
---

## Giới thiệu

**my.reLaunch** là API dùng để đóng tất cả các pages hiện tại và nhảy tới một page nào đó trong ứng dụng.

## Sử dụng

### Sample Code

```xml
<view class="page">
  <view class="page__section">
    <view class="button">
      <button title="Navigate To" onTap="navigateTo" />
    </view>
    <view class="button">
      <button title="Navigate Back" onTap="navigateBack" />
    </view>
    <view class="button">
      <button title="Switch Tab" onTap="switchTab" />
    </view>
    <view class="button">
      <button title="reLaunch" onTap="reLaunch" />
    </view>
  </view>
</view>
```

```js
Page({
  reLaunch() {
    my.reLaunch({ url: "pages/tabBar/component/index" });
  },
});
```

### API Params

| Attributes | Type     | Required | Description                                                                                                                                                                                                                                                                                                                                      |
| ---------- | -------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| url        | String   | Yes      | Đường dẫn (pagePath) của màn hình muốn nhảy tới. Nếu bạn chỉ định màn hình nằm trong tabbar thì màn hình đó sẽ được thêm vào stack thay việc thực hiện chuyển tab. <br><br> Để truyền dữ liệu giữa các màn hình bạn có thể truyền theo query string đằng sau dấu `?` của url. <br><br>**Ví dụ:** `pages/index/index?param1=value1&param2=value2` |
| success    | Function | No       | Callback function khi thành công.                                                                                                                                                                                                                                                                                                                |
| fail       | Function | No       | Callback function khi thất bại.                                                                                                                                                                                                                                                                                                                  |
| complete   | Function | No       | Callback function khi hoàn tất tác vụ cho dù thành công hay thất bại.                                                                                                                                                                                                                                                                            |
