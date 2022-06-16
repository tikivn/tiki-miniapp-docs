---
title: my.openSetting
---

`my.openSetting` my.openSetting là một API đùng để mở giao diện cài đặt. Trả về kết quả cài đặt quyền của người dùng. Chỉ quyền đã yêu cầu từ người dùng mới xuất hiện trong giao diện cài đặt.

**_Khả dụng_**: Hỗ trợ từ version 1.85.8 trở lên.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/open-setting/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/api/open-setting/index" />

## API Params

| Thuộc tính | Kiểu dữ liệu | Bắt buộc | Mô tả                                                                      |
| ---------- | ------------ | :------: | -------------------------------------------------------------------------- |
| success    | Function     |          | Callback function khi mở giao diện cài đặt thành công.                     |
| fail       | Function     |          | Callback function khi mở giao diện cài đặt bất thành.                      |
| complete   | Function     |          | Callback function khi mở giao diện cài đặt bất kể thành công hay thất bại. |

## Giá trị trong success callback

Khi việc gọi API thành công, framework sẽ trả về thông tin như sau:

| Thuộc tính  | Kiểu dữ liệu | Mô tả                                                                                                                                                                                               |
| ----------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| authSetting | object       | Kết quả ủy quyền người dùng, trong đó khoá là giá trị phạm vi và giá trị trả về là kiểu bool, cho biết liệu người dùng có được phép ủy quyền hay không, hãy xem danh sách phạm vi để biết chi tiết. |

## Danh sách các phạm vi

| Phạm vi  | Kiểu dữ liệu                                                                                  | Mô tả                  |
| -------- | --------------------------------------------------------------------------------------------- | ---------------------- |
| userInfo | <a href="/docs/api/open/get-user-info">my.getUserInfo</a>                                     | Thông tin cá nhân      |
| authCode | <a href="/docs/api/open/get-auth-code">my.getAuthCode</a>                                     | Thông tin đăng nhập    |
| location | <a href="/docs/api/geo/location/get-location">my.getLocation</a>                              | Vị trí                 |
| camera   | <a href="/docs/api/media/image/save-image">my.chooseImage</a><br/><a href="">my.saveImage</a> | Camera và Thư viện ảnh |

### Sample Code

```xml
<view class="page">
  <block-header title="Usage" description="Open the settings interface. Returns the results of the user's permission settings. Only permissions requested from the user appear in the settings interface." />
  <view class="block-content">
    <view class="page-section-demo">
      <button type="primary" onTap="openSetting">Setting</button>
    </view>
  </view>
</view>
```

```js
Page({
  openSetting() {
    my.openSetting({
      success: (res) => {
        my.alert({
          title: 'Success',
          content: JSON.stringify(res)
        });
        /*
         * res.authSetting = {
         *   "userInfo": true,
         *   "location": true,
         *   ...
         * }
         */
      },
      fail: (res) => {
        my.alert({ title: 'Fail', content: JSON.stringify(res) });
      }
    });
  }
});
```
