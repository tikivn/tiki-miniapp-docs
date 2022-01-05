---
title: my.getSetting
---

`my.getSetting` là một API lấy thông tin cài đặt. Trả về kết quả cài đặt quyền của người dùng. Chỉ quyền đã yêu cầu từ người dùng mới xuất hiện trong kết quả trả về.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/get-setting/index" />

**_Khả dụng_**: Hỗ trợ từ version v1.86.3 trở lên.

## API Params

| Thuộc tính | Kiểu dữ liệu | Mô tả                                                                                              |
| ---------- | ------------ | -------------------------------------------------------------------------------------------------- |
| success    | Function     | Callback function khi lấy thông tin quyền người dùng thành công.                                   |
| fail       | Function     | Callback function khi lấy thông tin quyền người dùng bất thành.                                    |
| complete   | Function     | Callback function khi việc lấy thông tin quyền người dùng hoàn tất bất kể thành công hay thất bại. |

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
  <block-header title="Usage" description="Returns the result of the user's permission settings. Only permissions requested from the user are returned" />
  <view class="block-content">
    <view class="page-section-demo">
      <button type="primary" onTap="getSetting">Setting</button>
    </view>
  </view>
</view>
```

```js
Page({
  getSetting() {
    my.getSetting({
      success: (res) => {
        my.alert({ title: 'Success', content:  JSON.stringify(res)});
      },
      fail: (res) => {
        my.alert({ title: 'Fail', content: JSON.stringify(res) });
      },
  });
});
```
