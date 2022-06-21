---
title: my.downloadFile
sidebar_custom_props:
  description: Dùng để dowload file về máy. File sẽ được lưu trữ tạm ở device
---

`my.downloadFile` là API dùng để dowload file về máy. File sẽ được lưu trữ tạm ở device.

:::note Lưu ý

Bạn vẫn có thể sử dụng `my.request` để download dữ liệu; tuy nhiên api `my.request` chỉ trả về raw data của file. Khác với `my.request`, `downloadFile` sẽ thực hiện download về lưu file; sau đó trả về đường dẫn tạm thời có thể truy cập lại file bất cứ lúc nào.

:::

:::important Quan trọng

Bạn cần phải thêm tên miền trong phần **Cài đặt chung** của ứng dụng trên [Tini Console](https://developer.tiki.vn/apps) trước khi sử dụng các Networking API và Webview. Xem phần hướng dẫn [tại đây](/docs/development/tini-console/whitelist-domains).

:::

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/download-file/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/api/download-file/index" />

## API Params

Để cấu hình việc gọi network, bạn cần truyền object với các thuộc tính sau:

| Thuộc tính | Kiểu dữ liệu | Bắt buộc | Mô tả                                                                             |
| ---------- | ------------ | :------: | --------------------------------------------------------------------------------- |
| url        | string       |    ✓     | Đường dẫn của file muốn download                                                  |
| headers    | Object       |          | Cấu hình headers khi thực hiện gọi network.                                       |
| success    | Function     |          | Callback function khi việc download file thành công.                              |
| fail       | Function     |          | Callback function khi việc download file thất bại.                                |
| complete   | Function     |          | Callback function khi việc download file kết thúc cho dù thành công hay thất bại. |

### Success Callback function payload

payload trong success callback là đường dẫn tạm thời của file đã download. Đường dẫn này có thể sử dụng bất cứ lúc nào.

## Sample Code

Example bên dưới nhập vào 1 url để download file

```xml
<view>
  <block-header title="Usage" description="Download a file" />
  <view class="block-content">
    Input the url to download
    <input class="form-value" placeholder="URL" name="url" onInput="urlChange"></input>
  </view>
  <view class="block-content">
    <button class="button-full" onTap="onDownloadFile">Download Image</button>
  </view>
  <image src="{{image}}" />
</view>
```

```js
Page({
  data: {
    url: undefined,
    image: undefined
  },
  urlChange(e) {
    this.setData({
      url: e.detail.value
    });
  },
  onDownloadFile() {
    my.downloadFile({
      url: this.data.url,
      success: (res) => {
        console.log(res);
        this.setData({ image: res });
      },
      fail: (e) => {
        console.log(e);
      }
    });
  }
});
```
