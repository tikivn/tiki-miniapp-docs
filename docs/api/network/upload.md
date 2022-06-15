---
title: my.uploadFile
---

`my.uploadFile` là API dùng để upload file từ máy lên server.

:::note Lưu ý

Chỉ thực hiện được việc upload các đường dẫn tạm thời của file ví dụ đường dẫn từ api `chooseImage`, `downloadFile`.

:::

:::important Quan trọng

Bạn cần phải thêm tên miền trong phần **Cài đặt chung** của ứng dụng trên [Tini Console](https://developer.tiki.vn/apps) trước khi sử dụng các Networking API và Webview. Xem phần hướng dẫn [tại đây](/docs/development/tini-console/whitelist-domains).

:::

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/upload-file/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/api/upload-file/index" />

## Sample Code

Example bên dưới lấy ra 1 hình từ gallery và upload lên `http://httpbin.org/post`

```xml
<view>
  <block-header title="Usage" description="Upload a file" />
  <view class="block-content">
    <button class="button-full" onTap="onUploadFile">Upload Image</button>
  </view>
</view>
```

```js
Page({
  data: {
    url: undefined
  },
  onUploadFile() {
    my.chooseImage({
      count: 1,
      success: (res) => {
        const path = res.filePaths[0];
        console.log(path);
        my.uploadFile({
          url: 'http://httpbin.org/post',
          fileType: 'image/jpeg',
          fileName: 'file',
          filePath: path,
          success: (res) => {
            console.log(res);
            my.alert({ title: 'Upload success' });
          },
          fail: function (res) {
            console.log(res);
            my.alert({ title: 'Upload fail' });
          }
        });
      }
    });
  }
});
```

## API Params

Để cấu hình việc gọi network, bạn cần truyền object với các thuộc tính sau:

| Thuộc tính |          | Bắt buộc | Mô tả                                                                                          |
| ---------- | -------- | :------: | ---------------------------------------------------------------------------------------------- |
| url        | string   |    ✓     | Đường dẫn của server muốn upload                                                               |
| fileName   | string   |    ✓     | Tên file của như sử dụng làm key trong form data, server sẽ lấy ra file từ field này           |
| filePath   | string   |    ✓     | Đường dẫn tạm thời của file                                                                    |
| formData   | FormData |          | Các field khác của form cần send khi upload file                                               |
| fileType   | string   |    ✓     | Mime của file ví dụ image/png. Hiện chỉ support imag, videos, và audio (image / video / audio) |
| headers    | Object   |          | Cấu hình headers khi thực hiện gọi network.                                                    |
| success    | Function |          | Callback function khi việc upload file thành công.                                             |
| fail       | Function |          | Callback function khi việc upload file thất bại.                                               |
| complete   | Function |          | Callback function khi việc upload file kết thúc cho dù thành công hay thất bại.                |

### Success Callback function payload

### Callback function payload

| Thuộc tính | Kiểu dữ liệu | Mô tả                                |
| ---------- | ------------ | ------------------------------------ |
| data       | String       | Dữ liệu đươc trả về từ server upload |

### Các lỗi hay gặp khi upload file.

- File không tồn tại -> do đường dẫn không đúng.
- Upload fail từ server-> có thể file quá lớn, hoặc ko có permission. 1 số server yêu cầu truyền authorization token, nên khi gọi uploadFile phải truyền thêm headers.
- Trong formData có thể gửi giá trị base64 nhưng không nên lạm dụng vì sẽ khiến payload của việc upload tăng lên nhiều và việc upload có thể mất nhiều thời gian hơn.
- Hiện chỉ cho upload file image, audio và video, và chỉ upload đươc 1 file/lần.
