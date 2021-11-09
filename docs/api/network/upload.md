---
title: my.uploadFile
---

`my.uploadFile` là API dùng để upload file từ máy lên server.

**Lưu ý:** 

Chỉ thực hiện được việc upload các đường dẫn tạm thời của file ví dụ đường dẫn từ api chooseImage, downloadFile

***Quan trọng***: Bạn cần phải thêm tên miền trong phần **Cài đặt chung** của ứng dụng trên [Tini Console](https://developer.tiki.vn/apps) trước khi sử dụng các Networking API và Webview. Xem phần hướng dẫn [tại đây](/docs/backend-api/overview#tên-miền).

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
    url: undefined,
  },
  onUploadFile() {
    my.chooseImage({
      count: 1,
      success: (res) => {
        const path = res.filePaths[0];
        console.log(path);
        my.uploadFile({
          url: "http://httpbin.org/post",
          fileType: "image/jpeg",
          fileName: "file",
          filePath: path,
          success: (res) => {
            console.log(res);
            my.alert({ title: "Upload success" });
          },
          fail: function (res) {
            console.log(res);
            my.alert({ title: "Upload fail" });
          },
        });
      },
    });
  },
});

```

## API Params

Để cấu hình việc gọi network, bạn cần truyền object với các thuộc tính sau:

| Attributes | Type     | Required | Description                                                                                    |
| ---------- | -------- | -------- | ---------------------------------------------------------------------------------------------- |
| url        | string   | Yes      | Đường dẫn của server muốn upload                                                               |
| fileName   | string   | Yes      | Tên file của như sử dụng làm key trong form data, server sẽ lấy ra file từ field này           |
| filePath   | string   | Yes      | Đường dẫn tạm thời của file                                                                    |
| formData   | FormData | No       | Các field khác của form cần send khi upload file                                               |
| fileType   | string   | Yes      | Mime của file ví dụ image/png. Hiện chỉ support imag, videos, và audio (image / video / audio) |
| headers    | Object   | No       | Cấu hình headers khi thực hiện gọi network.                                                    |
| success    | Function | No       | Callback function khi việc upload file thành công.                                             |
| fail       | Function | No       | Callback function khi việc upload file thất bại.                                               |
| complete   | Function | No       | Callback function khi việc upload file kết thúc cho dù thành công hay thất bại.                |

### Success Callback function payload

### Callback function payload

| Attributes | Type   | Description                          |
| ---------- | ------ | ------------------------------------ |
| data       | String | Dữ liệu đươc trả về từ server upload |


### Các lỗi hay gặp khi upload file.

- File không tồn tại -> do đường dẫn không đúng. 
- Upload fail từ server-> có thể file quá lớn, hoặc ko có permission. 1 số server yêu cầu truyền authorization token, nên khi gọi uploadFile phải truyền thêm headers.
- Trong formData có thể gửi giá trị base64 nhưng không nên lạm dụng vì sẽ khiến payload của việc upload tăng lên nhiều và việc upload có thể mất nhiều thời gian hơn.
- Hiện chỉ cho upload file image, audio và video, và chỉ upload đươc 1 file/1 lần.