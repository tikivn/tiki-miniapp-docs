---
title: my.openDocument
sidebar_custom_props:
  description: Dùng để xem trước file PDF.
---

`my.openDocument` là API dùng để xem trước file PDF.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/file/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/api/file/index" />

## API Params

| Thuộc tính | Kiểu dữ liệu | Bắt buộc | Mô tả                                                                                                                                       |
| ---------- | ------------ | :------: | ------------------------------------------------------------------------------------------------------------------------------------------- |
| filePath   | String       |    ✓     | Đường dẫn thông qua kết quả trả về của <a target="_blank" href="https://developers.tiki.vn/docs/api/network/down-load">my.downloadFile</a>. |
| fileType   | String       |    ✓     | Định dạng file.                                                                                                                             |
| success    | Function     |          | Callback function khi open document được thực hiện thành công.                                                                              |
| fail       | Function     |          | Callback function khi open document thất bại.                                                                                               |
| complete   | Function     |          | Callback function khi việc open document kết thúc cho dù thành công hay thất bại.                                                           |

## Giá trị fileType

| Thuộc tính | Mô tả                    |
| ---------- | ------------------------ |
| fileType   | Chỉ hỗ trợ định dạng PDF |

## Sample Code

```xml
<view>
  <block-header title="Usage" description="File system" />
  <view class="block-content">
    <input class="input-full" onInput="onChangeUrl" value={{urlFile}} placeholder="Input File Url to Open"></input>
    <button class="button-full" onTap="onOpenDocument">Open Document</button>
  </view>
</view>
```

```js
Page({
  data: {
    urlFile: ''
  },
  onOpenDocument() {
    my.showLoading({ content: 'Loading...' });
    my.downloadFile({
      url: this.data.urlFile,
      success: (res) => {
        my.openDocument({
          filePath: res.filePath, // only for mobile
          fileType: 'pdf',
          url: this.data.urlFile // only for web
          success: (res) => {
            console.log('open document success');
            my.hideLoading();
          },
          fail: (e) => {
            console.log('open document fail');
            my.hideLoading();
          }
        });
      },
      fail: (e) => {
        my.hideLoading();
      }
    });
  },
  onChangeUrl(e) {
    this.setData({ urlFile: e.detail.value });
  }
});
```
