---
title: my.askDownloadNewClient
---

`my.askDownloadNewClient` là API dùng để kiểm tra Tiki App cài trên thiết bị di động có phải là phiên bản mới nhất không. Nếu đó là phiên bản cũ, 1 popup sẽ được hiển thị hỏi xem liệu người dùng có muốn nâng cấp lên phiên bản Tiki App mới nhất không. Người dùng có quyền từ chối bằng cách bấm nút `Huỷ`, hoặc bấm nút `Cập nhật` để truy cập vào Apple Store hay Google Play Store, và cập nhật Tiki App.

<img src="/img/my_askDownloadNewClient_popup.png" width="300px" alt="Tini App version update popup" style={{ margin: '0 auto', display: 'flex' }}/>

## API Params

| Thuộc tính | Kiểu dữ liệu | Mô tả                                                                        |
| ---------- | ------------ | ---------------------------------------------------------------------------- |
| success    | Function     | Callback function khi việc kiểm tra được thực hiện thành công.               |
| fail       | Function     | Callback function khi việc kiểm tra thất bại, argument sẽ là error message.  |
| complete   | Function     | Callback function khi việc kiểm tra hoàn tất bất kể thành công hay thất bại. |

### Callback function payload

- Success callback payload là 1 biến boolean thể hiện việc update thành công hay không. Nếu user cancel, không đồng ý update thì biến này sẽ là false.
  
- Fail callback payload. 

| Thuộc tính   | Kiểu dữ liệu | Mô tả        |
| ------------ | ------------ | ------------ |
| error        | string       | Tên lỗi      |
| errorMessage | string       | Chi tiết lỗi |

## Sample Code

```xml title=index.txml
<view>
  <block-header title="Usage" description="Check latest version" />
  <view class="block-content">
    <button class="button-full" onTap="onCheckLatestVersion">Check Latest Version</button>
  </view>
</view>
```

```js title=index.js
Page({
  onCheckLatestVersion() {
    my.askDownloadNewClient({
      success: (res) => {
        console.log(res);
      },
      fail: (e) => {
        console.log(e);
      },
    });
  },
});

```
