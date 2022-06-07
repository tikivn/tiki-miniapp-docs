---
title: my.bioMetrics.localAuth
---

`my.bioMetrics.localAuth` là API dùng để xác thực người dùng ở mức độ device. Tức là JSAPI này sẽ mở tính năng xác thực bằng Biometrics sẵn có của device (nếu device đã cài đặt face id, hoặc touch id, hoặc xác thực móng măt...), sau khi xác thực xong thì trả về kết quả thành công hay thất bại.

**Lưu ý:**
- Việc lưu trữ cặp key này đòi hỏi thiết bị phải có sensor của bio metrics và đã cài đặt sẵn 1 trong face id, touch id hoặc móng mắt... Sử dụng JSAPI [my.bioMetrics.isSupported](./server-authentication/is-supported) để kiểm tra việc này.
## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/component/api/bio-metrics/local/index" />

**_Khả dụng_**: Hỗ trợ từ version 1.96.7 trở lên.

## API Params

| Thuộc tính | Kiểu dữ liệu | Bắt buộc | Mô tả                                                                                 |
| ---------- | ------------ | -------- | ---------------------------------------------------------------------------- |
| content    | String       | √        | Content của popup hiện ra khi xác thực bằng biometrics                                      |
| success    | Function     |          | Callback function khi việc xác thực thành công                                        |
| fail       | Function     |          | Callback function khi việc xác thực thất bại hoặc user huỷ bỏ                         |
| complete   | Function     |          | Callback function bất kể thành công hay thất bại                                      |

## Giá trị trong success callback

Khi việc gọi API thành công, framework chỉ trả về payload là boolean thể hiện việc xác thực đã thành công.

### Sample Code

```xml title=index.xml
<view>
  <block-header title="Usage" description="Use Biometrics to authenticate with device" />
  <view class="block-content">
    <view class="page-section-btns">
      <button type="primary" onTap="localAuth">Local Authentication</button>
    </view>
  </view>
</view>
```

```js title=index.js
Page({
  localAuth() {
    my.bioMetrics.localAuth({
      content: 'Sign in',
      success: () => {
        my.alert({ title: 'Success', content: `Authenticated!` });
      },
      fail: (res) => {
        my.alert({ title: 'Fail', content: JSON.stringify(res) });
      },
    });
  },
});
```
