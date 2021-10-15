---
title: my.askDownloadNewClient
---

## Giới thiệu

**my.askDownloadNewClient** là API để kiểm tra ứng dụng Tiki đang dùng có phải là bản mới nhất không. Khi ứng dụng ở device user đã cũ, app sẽ hiển thị 1 popup yêu cầu người dùng update lên version mới nhất, user có thể cancel hoặc tiếp tục để mở link tới apple store hoặc google play để update Tiki app. 

## Sử dụng

### Sample Code

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

### API Params

Các thuộc tính:

| Attributes | Type     | Required | Description                                                                         |
| ---------- | -------- | -------- | ----------------------------------------------------------------------------------- |
| success    | Function | No       | Callback function khi việc kiểm tra được thực hiện thành công                             |
| fail       | Function | No       | Callback function khi việc kiểm tra thất bại, argument sẽ là error message                |
| complete   | Function | No       | Callback function khi việc kiểm tra kết thúc cho dù thành công hay thất bại.     |

### Callback function payload
* success callback payload là 1 biến boolean thể hiện việc update thành công hay không. Nếu user cancel, không đồng ý update thì biến này sẽ là false.
  
* Fail callback payload 

| Attributes   | Type     |  Description              |
| ----------   | -------- | ------------------------- |
| error        | string   | error title               |
| errorMessage | string   | error message in detail   |
