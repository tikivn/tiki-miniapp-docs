---
title: my.getSavedFileList
---

`my.getSavedFileList` là API dùng để lấy thông tin tất cả các tập tin được lưu cục bộ của Tini App gọi API này.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/file/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/api/file/index" />

## API Params

| Thuộc tính | Kiểu dữ liệu | Bắt buộc | Mô tả                                                                       |
| ---------- | ------------ | :------: | --------------------------------------------------------------------------- |
| filePath   | String       |    ✓     | Đường dẫn tới local file                                                    |
| success    | Function     |          | Callback function khi lấy thông tin tất cả tập tin thành công               |
| fail       | Function     |          | Callback function khi lấy thông tin tất cả tập tin thất bại                 |
| complete   | Function     |          | Callback function khi việc gọi API kết thúc bất kể thành công hay thất bại. |

### Callback success function payload

| Thuộc tính | Kiểu dữ liệu     | Mô tả                                               |
| ---------- | ---------------- | --------------------------------------------------- |
| fileList   | Array of Objects | Array chứa thông tin tất cả tập tin được lưu cục bộ |

### fileList payload

| Thuộc tính | Kiểu dữ liệu | Mô tả                        |
| ---------- | ------------ | ---------------------------- |
| size       | Number       | Dung lượng của tập tin       |
| createTime | String       | Ngày giờ tập tin được tạo ra |
| filePath   | String       | Đường dẫn của tập tin        |

## Sample Code

```xml
<view>
  <block-header title="Usage" description="File system" />
  <view class="block-content">
    <image src="{{tempFilePath}}" />
    <button class="button-full" onTap="onChooseImage">Choose Image</button>
  </view>
  <view class="block-content">
    <button class="button-full" onTap="onSaveFile">Save Image</button>
    <button class="button-full" onTap="onGetFileInfo">Get File Info</button>
    <button class="button-full" onTap="onGetSavedFileInfo">Get Saved File Info</button>
    <button class="button-full" onTap="onGetSavedFileList">Get Saved File List</button>
    <button class="button-full" onTap="onRemoveSavedFile">Remove Save File</button>
  </view>
</view>
```

```js
Page({
  data: {
    tempFilePath: undefined,
    savedFilePath: undefined
  },
  onChooseImage() {
    my.chooseImage({
      count: 1,
      success: (res) => {
        console.log(res);
        this.setData({
          tempFilePath: res.filePaths[0]
        });
      },
      fail: (e) => {
        console.log(e);
      }
    });
  },
  onGetSavedFileList() {
    my.getSavedFileList({
      success: (res) => {
        my.alert({
          title: 'Saved File List',
          content: JSON.stringify(res)
        });
        console.log(JSON.stringify(res));
      },
      fail: (e) => {
        console.log(e);
      }
    });
  }
});
```
