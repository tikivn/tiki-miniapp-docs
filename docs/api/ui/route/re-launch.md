---
title: my.reLaunch
---

`my.reLaunch` là API dùng để đóng tất cả các pages hiện tại và nhảy tới một page nào đó trong ứng dụng.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/navigator/index" />

## API Params

| Thuộc tính |  Kiểu dữ liệu   | Bắt buộc | Mô tả                                                                                                                                                                                                                                                                                                                                              |
| ---------- | -------- | :------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| url        | String   | ✓       | Đường dẫn (pagePath) của màn hình muốn nhảy tới. Nếu bạn chỉ định màn hình nằm trong tabbar thì màn hình đó sẽ được thêm vào stack thay việc thực hiện chuyển tab. <br /><br /> Để truyền dữ liệu giữa các màn hình bạn có thể truyền theo query string đằng sau dấu `?` của url. <br /><br />**Ví dụ:** `pages/index/index?param1=value1&param2=value2` |
| success    | Function |       | Callback function khi gọi hàm thành công..                                                                                                                                                                                                                                                                                                                        |
| fail       | Function |       | Callback function khi gọi hàm thất bại.                                                                                                                                                                                                                                                                                                                          |
| complete   | Function |        | Callback function khi hoàn tất gọi hàm bất kể thành công hay thất bại.                                                                                                                                                                                                                                                                                    |


## Sample Code

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
    my.reLaunch({ url: 'pages/tabBar/component/index' });
  }
});
```

