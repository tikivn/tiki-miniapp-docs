---
title: my.getFileInfo
sidebar_custom_props:
  description: Dùng để lấy thông tin một tập tin cục bộ. Tập tin có thể ở dạng tạm hoặc được lưu
---

`my.getFileInfo` là API dùng để lấy thông tin một tập tin cục bộ. Tập tin có thể ở dạng tạm hoặc được lưu.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/file/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/api/file/index" />

## API Params

| Thuộc tính      | Kiểu dữ liệu | Bắt buộc | Mô tả                                                                              |
| --------------- | ------------ | :------: | ---------------------------------------------------------------------------------- |
| filePath        | string       |    ✓     | Đường dẫn tới tập tin                                                              |
| digestAlgorithm | string       |          | Thuât toán digest để lấy file summary, hỗ trợ `md5` và `sha1`, mặc định là `md5`   |
| success         | Function     |          | Callback function khi lấy thông tin tập tin thành công                             |
| fail            | Function     |          | Callback function khi lấy thông tin tập tin bất thành                              |
| complete        | Function     |          | Callback function khi việc lấy thông tin tập tin kết thúc bất kể công hay thất bại |

### Callback success function payload

| Thuộc tính | Kiểu dữ liệu | Mô tả                                     |
| ---------- | ------------ | ----------------------------------------- |
| size       | number       | Dung lượng của tập tin. Đơn vị tính: byte |
| digest     | string       | Summary của tập tin                       |

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
  onGetFileInfo() {
    my.getFileInfo({
      filePath: this.data.tempFilePath,
      success: (res) => {
        console.log(res);
        my.alert({
          title: 'File Info',
          content: JSON.stringify(res)
        });
      },
      fail: (e) => {
        console.log(e);
      }
    });
  }
});
```
