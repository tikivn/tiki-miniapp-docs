---
order: 50
category:
  vi-VN: Thiết bị
  en-US: Device
title:
  vi-VN: my.getSystemInfo
  en-US: my.getSystemInfo
---

## Giới thiệu

**my.getSystemInfo** là API dùng để lấy thông tin của hệ thống.

## Sử dụng

### Sample Code

```jsx
<view style={styles.page}>
  <view style={styles.page__section}>
    <view style={styles.page__section__content}>
      <text>my.getSystemInfo</text>
      <text>{JSON.stringify(data.systemInfo)}</text>
      <view style={styles.page__section__buttons}>
        <button title="Query" onPress={getSystemInfo} />
        <button title="Clear" onPress={clear} />
      </view>
    </view>
  </view>
</view>
```

```js
Page({
  data: {
    systemInfo: {},
  },
  getSystemInfo() {
    my.getSystemInfo({
      success: (systemInfo) => {
        this.setData({ systemInfo });
      },
    });
  },
  clear() {
    this.setData({ systemInfo: {} });
  },
});
```

### API Params

| Attributes | Type     | Required | Description                                                           |
| ---------- | -------- | -------- | --------------------------------------------------------------------- |
| success    | Function | No       | Callback function khi thành công.                                     |
| fail       | Function | No       | Callback function khi thất bại.                                       |
| complete   | Function | No       | Callback function khi hoàn tất tác vụ cho dù thành công hay thất bại. |

### Giá trị trong success callback

Khi việc gọi API thành công, framework sẽ trả về thông tin về thiết bị như sau:

| Attributes      | Type   | Description                                                                                                                |
| --------------- | ------ | -------------------------------------------------------------------------------------------------------------------------- |
| app             | String | Tên của app host hiện tại, nếu chạy trên App Tiki giá trị sẽ là Tiki hoặc trên seller center app sẽ là Tiki Seller Center. |
| brand           | String | Nhã hiệu của thiết bị hiện tại đang chạy (iPhone, Samsung,..).                                                             |
| currentBattery  | Number | Trả về dung lượng hiện tại của pin, có giá trị từ 0 - 1.                                                                   |
| model           | String | Model của thiết bị (iPhone X, Samsung Note 4, ...).                                                                        |
| platform        | String | Nền tảng của hệ điều hành (iOS, Android, Web).                                                                             |
| system          | String | Hệ điều hành chạy trên thiết bị (iOS, Android).                                                                            |
| version         | String | Verion hiện tại của hệ điều hành (12.0, 14.0,...).                                                                         |
| freeStorage     | Number | Dung lượng bộ nhớ còn trống theo bytes.                                                                                    |
| screenWidth     | Number | Chiều rộng theo px của màn hình thiết bị.                                                                                  |
| screenHeight    | Number | Chiều cao theo px của màn hình thiết bị.                                                                                   |
| windowWidth     | Number | Chiều rộng của cửa sổ chứa page hiện tại (kích thước không bao gồm status bar, nav bar và bottom bar).                     |
| windowHeight    | Number | Chiều cao của cửa sổ chứa page hiện tại (kích thước không bao gồm status bar, nav bar và bottom bar).                      |
| titleBarHeight  | Number | Chiều cao của navigation bar.                                                                                              |
| statusBarHeight | Number | Chiều cao của status bar.                                                                                                  |
