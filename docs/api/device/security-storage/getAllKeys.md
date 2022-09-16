---
title: my.getAllKeysEncryptedStorage
sidebar_custom_props:
  description: Lấy toàn bộ key của app
---

`my.getAllKeysEncryptedStorage` là api để lấy toàn bộ key của app.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/security-storage/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/api/security-storage/index" />

## API Params

| Thuộc tính | Kiểu dữ liệu | Mô tả                                                                                                               |
| ---------- | ------------ | ------------------------------------------------------------------------------------------------------------------- |
| config     | object       | Có thể bật chế độ xác thực trước khi lấy tất cả key                                                                 |
| success    | Function     | Callback function khi dữ liệu được lấy thành công. Trong cấu trúc của response, `data` là field Array chứa dữ liêu. |
| fail       | Function     | Callback function khi xoá dữ liệu thất bại                                                                          |
| complete   | Function     | Callback function sau khi thực hiện việc xoá dữ liệu bất kể thành công hay thất bại                                 |

## config payload

| Thuộc tính           | Kiểu dữ liệu | Platform     | Mô tả                                                                                                                                                                                                                                              |
| -------------------- | ------------ | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| accessControl        | string       | ios          | <br />- 'BIOMETRY_ANY_OR_DEVICE_PASSCODE'<br />- 'BIOMETRY_CURRENT_SET_OR_DEVICE_PASSCODE<br/>- 'BIOMETRY_ANY'                                                                                                                                     |
| authenticationPrompt | string       | ios          | Ghi chú khi người dùng mở khóa bằng sinh trắc học hoặc mật khẩu thiết bị.                                                                                                                                                                          |
| service              | string       | ios          | Tiêu chuẩn khi mã hoá, nếu khi lưu trữ người dùng set giá trị thì khi muốn lấy cần thêm đúng giá trị đã lưu trữ nếu không dữ liệu sẽ trả về null                                                                                                   |
| authenticateType     | string       | ios, android | Loại xác thực: <br />- DEVICE_PASSCODE_OR_BIOMETRICS (Xác thực bằng sinh trắc học hoặc mật mã thiết bị.) <br />- BIOMETRICS (Xác thực bằng phương pháp sinh trắc học (Touch ID hoặc Face ID).)<br/>\*Note: Default 'DEVICE_PASSCODE_OR_BIOMETRICS' |

## Sample Code

```js title=index.js
Page({
  onClearData() {
    my.getAllKeysEncryptedStorage({
      config: {
        authenticationPrompt: 'login with yourself',
        accessControl: 'BIOMETRY_ANY_OR_DEVICE_PASSCODE'
      },
      success: function () {
        my.alert({ content: 'Xoá dữ liệu thành công' });
      },
      fail: function (res) {
        my.alert({ content: res.errorMessage });
      }
    });
  }
});
```
