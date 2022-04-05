---
title: my.getSystemInfo
---

`my.getSystemInfo` là API dùng để lấy thông tin của hệ thống.

## API Params

| Thuộc tính | Kiểu dữ liệu | Mô tả                                                                                                                                           |
| ---------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| keys       | Array        | Các thuộc tính cần lấy thông tin; nếu không API sẽ trả về thông tin của tất cả thuộc tính. <br/> Ví dụ: `keys: ['windowWidth', 'windowHeight']` |
| success    | Function     | Callback function khi lấy thông tin hệ thống thành công.                                                                                        |
| fail       | Function     | Callback function khi lấy thông tin hệ thống bất thành.                                                                                         |
| complete   | Function     | Callback function khi việc lấy thông tin hệ thống hoàn tất bất kể thành công hay thất bại.                                                      |

## Giá trị trong success callback

Khi việc gọi API thành công, framework sẽ trả về thông tin về thiết bị như sau:

| Thuộc tính      | Kiểu dữ liệu | Mô tả                                                                                                                        |
| --------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| app             | string       | Tên của super app hiện tại, nếu chạy trên Tiki App giá trị sẽ là Tiki; hoặc trên seller center app sẽ là Tiki Seller Center. |
| brand           | string       | Nhãn hiệu của thiết bị đang chạy (iPhone, Samsung,..).                                                                       |
| currentBattery  | number       | Mức pin hiện tại, có giá trị từ 0 - 1.                                                                                       |
| model           | string       | Model của thiết bị (iPhone X, Samsung Note 4, ...).                                                                          |
| platform        | string       | Nền tảng mà thiết bị chạy trên. platform =  'ios' \| 'android' \| 'macos' \| 'windows' \| 'web' \| 'native'       |
| system          | string       | Hệ điều hành của thiết bị (Android, iOS, iPhone OS, iPadOS). "iOS" đối với các thiết bị iOS mới; "iPhone OS" đối với các thiết bị iOS cũ hơn (gồm những dòng iPad cũ hơn); "iPadOS" dành cho iPads sử dụng iPad 15.0 |
| version         | string       | Phiên bản của hệ điều hành (12.0, 14.0,...).                                                                                 |
| hostVersion     | string       | Phiên bản của Tiki App.                                                                                                      |
| runtimeVersion  | string       | Phiên bản Tini App Framework.                                                                                                | . |
| freeStorage     | number       | Dung lượng bộ nhớ còn trống. Đơn vị tính byte.                                                                               |
| screenWidth     | number       | Chiều rộng của màn hình thiết bị. Đơn vị tính pixel.                                                                         |
| screenHeight    | number       | Chiều cao của của màn hình thiết bị. Đơn vị tính pixel.                                                                      |
| windowWidth     | number       | Chiều rộng của cửa sổ chứa page hiện tại, không bao gồm status bar, navigation bar và bottom bar.                            |
| windowHeight    | number       | Chiều cao của cửa sổ chứa page hiện tại, không bao gồm status bar, navigation bar và bottom bar).                            |
| titleBarHeight  | number       | Chiều cao của navigation bar.                                                                                                |
| statusBarHeight | number       | Chiều cao của status bar.                                                                                                    |

### Sample Code

```xml
<view class="page">
  <view class="page__section">
    <view class="page__section__content">
      <text>my.getSystemInfo</text>
      <text>{{JSON.stringify(systemInfo)}}</text>
      <view class="page__section__buttons">
        <button onTap="getSystemInfo">Query</button>
        <button onTap="clear">Clear</button>
      </view>
    </view>
  </view>
</view>
```

```js
Page({
  data: {
    systemInfo: {}
  },
  getSystemInfo() {
    my.getSystemInfo({
      success: (systemInfo) => {
        this.setData({ systemInfo });
      }
    });
  },
  clear() {
    this.setData({ systemInfo: {} });
  }
});
```
