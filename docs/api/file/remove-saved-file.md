---
title: my.removeSavedFile
---

`my.removeSavedFile` là API dùng để xoá 1 local cache file.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/file/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/api/file/index" />

## API Params

Các thuộc tính:

| Thuộc tính | Kiểu dữ liệu | Bắt buộc | Mô tả                                                                   |
| ---------- | ------------ | :------: | ----------------------------------------------------------------------- |
| filePath   | String       |    ✓     | Đường dẫn tới local cache file                                          |
| success    | Function     |          | Callback function khi xoá file được thực hiện thành công                |
| fail       | Function     |          | Callback function khi xoá file thất bại                                 |
| complete   | Function     |          | Callback function khi việc xoá kết thúc cho dù thành công hay thất bại. |

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
  onRemoveSavedFile() {
    my.getSavedFileList({
      success: (res) => {
        my.removeSavedFile({
          filePath: res.fileList[0].filePath,
          success: (res) => {
            my.alert({
              title: 'Remove file success',
              content: JSON.stringify(res)
            });
            console.log('remove success');
          },
          fail: (e) => {
            console.log(e);
          }
        });
      }
    });
  }
});
```
