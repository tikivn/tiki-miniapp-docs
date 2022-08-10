---
title: my.setEncryptedStorage
sidebar_custom_props:
  description: Lưu trữ dữ liệu theo key, dữ liệu mới sẽ ghi đè dữ liệu cũ nếu cùng key
---

`my.setEncryptedStorage` là api để lưu trữ dữ liệu theo key, dữ liệu mới sẽ ghi đè dữ liệu cũ nếu cùng key.

:::note Lưu ý

- Dữ liệu sẽ không bị mất khi ứng dụng bị xoá. Việc cài đè tiện ích không làm mất dữ liệu được lưu trữ.

:::

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/security-storage/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/api/security-storage/index" />

## API Params

| Thuộc tính | Kiểu dữ liệu  | Bắt buộc | Mô tả                                                                      |
| ---------- | ------------- | :------: | -------------------------------------------------------------------------- |
| key        | string        |    ✓     | Key của dữ liệu                                                            |
| value      | Object/string |    ✓     | Giá trị của dữ liệu                                                        |
| config     | object        |          | Có thể bật chế độ xác thực trước khi lấy dữ liệu                           |
| success    | Function      |          | Callback khi dữ liệu được lưu thành công                                   |
| fail       | Function      |          | Callback khi dữ liệu được lưu thất bại                                     |
| complete   | Function      |          | Callback sau khi thực hiện việc lưu dữ liệu bất kể thành công hay thất bại |

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
  setStorage() {
    my.setEncryptedStorage({
      key: 'session',
      value: 'test',
      config: {
        authenticationPrompt: 'login with yourself',
        accessControl: 'BIOMETRY_ANY_OR_DEVICE_PASSCODE'
      },
      success: (res) => {
        my.alert({ title: 'success' });
      },
      fail: (res) => {
        my.alert({ title: 'Fail', content: JSON.stringify(res) });
      }
    });
  }
});
```
