---
title: my.getEncryptedStorage
sidebar_custom_props:
  description: Lấy dữ liệu đã được lưu theo key
---

`my.getEncryptedStorage` là api để lấy dữ liệu đã được lưu theo key.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/security-storage/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/api/security-storage/index" />

## API Params

| Thuộc tính | Kiểu dữ liệu | Bắt buộc | Mô tả                                                                                                |
| ---------- | ------------ | -------- | ---------------------------------------------------------------------------------------------------- |
| key        | string       | ✓        | Key của dữ liệu                                                                                      |
| config     | object       |          | Có thể bật chế độ xác thực trước khi lấy dữ liệu                                                     |
| success    | Function     |          | Callback khi dữ liệu được đọc thành công. Trong cấu trúc của response, `data` là field chứa dữ liêu. |
| fail       | Function     |          | Callback khi đọc dữ liệu thất bại                                                                    |
| complete   | Function     |          | Callback sau khi thực hiện việc lưu dữ liệu bất kể thành công hay thất bại                           |

## config payload

| Thuộc tính           | Kiểu dữ liệu | Platform     | Mô tả                                                                                                                                                                                                                                              |
| -------------------- | ------------ | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| accessControl        | string       | ios          | <br />- 'BIOMETRY_ANY_OR_DEVICE_PASSCODE'<br />- 'BIOMETRY_CURRENT_SET_OR_DEVICE_PASSCODE<br/>- 'BIOMETRY_ANY'                                                                                                                                     |
| authenticationPrompt | string       | ios          | Ghi chú khi người dùng mở khóa bằng sinh trắc học hoặc mật khẩu thiết bị.                                                                                                                                                                          |
| service              | string       | ios          | Tiêu chuẩn khi mã hoá, nếu khi lưu trữ người dùng set giá trị thì khi muốn lấy cần thêm đúng giá trị đã lưu trữ nếu không dữ liệu sẽ trả về null                                                                                                   |
| authenticateType     | string       | ios, android | Loại xác thực: <br />- DEVICE_PASSCODE_OR_BIOMETRICS (Xác thực bằng sinh trắc học hoặc mật mã thiết bị.) <br />- BIOMETRICS (Xác thực bằng phương pháp sinh trắc học (Touch ID hoặc Face ID).)<br/>\*Note: Default 'DEVICE_PASSCODE_OR_BIOMETRICS' |

### Success callback

| Thuộc tính | Kiểu dữ liệu  | Mô tả                                                                             |
| ---------- | ------------- | --------------------------------------------------------------------------------- |
| data       | string/Object | Giá trị của dữ liệu được lấy ra. Giá trị của data có thể là string hoặc là object |

## Sample Code

```js title=index.js
Page({
  getStorage() {
    my.getEncryptedStorage({
      key: 'session',
      config: {
        authenticationPrompt: 'login with yourself',
        accessControl: 'BIOMETRY_ANY_OR_DEVICE_PASSCODE'
      },
      success: (res) => {
        my.alert({
          title: 'success',
          content: JSON.stringify(res)
        });
      },
      fail: (res) => {
        my.alert({ title: 'Fail', content: JSON.stringify(res) });
      }
    });
  }
});
```
