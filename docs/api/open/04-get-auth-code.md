---
title: 'my.getAuthCode'
---

`my.getAuthCode` là API để lấy ra auth code của một user.

Thông qua việc sử dụng auth code, lập trình viên của Mini App có thể gọi tới các Open API của Tiki để
sử dụng các tính năng phức tạp hơn.

:::note Lưu ý

Để sử dụng được hàm `my.getAuthCode` trên Tini Studio, các bạn cần phải cấu hình trường `appIdentifier` trong
file `package.json` trùng với một app id được tạo bởi Tini Console.

Nếu như trường `appIdentifier` không trùng với app id được tạo bởi Tini Console, API `my.getAuthCode` sẽ không trả về đúng dữ liệu.

:::

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/get-auth-code/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/api/get-auth-code/index" />

## API Params

| Thuộc tính | Kiểu dữ liệu   | Mô tả                                                                 |
| ---------- | -------------- | --------------------------------------------------------------------- |
| scopes     | String / Array | Danh sách các scopes, mặc định là []                                  |
| success    | Function       | Callback function khi thành công.                                     |
| fail       | Function       | Callback function khi thất bại.                                       |
| complete   | Function       | Callback function khi hoàn tất tác vụ cho dù thành công hay thất bại. |

### Giá trị trong success callback

| Thuộc tính        | Kiểu dữ liệu | Mô tả                                    |
| ----------------- | ------------ | ---------------------------------------- |
| authCode          | String       | URL ảnh đại diện của user                |
| authErrorScopes   | Key-Value    | Key là tên scope, value là error code    |
| authSuccessScopes | Array        | Danh sách các scopes được users cho phép |

Error code là một chuỗi, có thể nhận các giá trị

| Error code | Ý nghĩa                                |
| ---------- | -------------------------------------- |
| 1          | Mini App không có quyền xin scopes này |
| 2          | Users không cho phép lấy auth code     |

## Sample Code

```js
Page({
  getAuthCode() {
    my.getAuthCode({
      success: (res) => {},
      fail: (res) => {}
    });
  }
});
```
