---
title: my.removeSavedFile
---

## Giới thiệu

**my.removeSavedFile** là API dùng để xoá 1 local cache file
## Sử dụng

### Sample Code

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
    savedFilePath: undefined,
  },
  onRemoveSavedFile() {
    my.getSavedFileList({
      success: (res) => {
        my.removeSavedFile({
          filePath: res.fileList[0].filePath,
          success: (res) => {
            my.alert({
              title: "Remove file success",
              content: JSON.stringify(res),
            });
            console.log("remove success");
          },
          fail: (e) => {
            console.log(e);
          },
        });
      },
    });
  },
});

```

### API Params

Các thuộc tính:

| Attributes | Type     | Required | Description                                                                    |
| ---------- | -------- | -------- | ------------------------------------------------------------------------------ |
| filePath      | String   | Yes       |  Đường dẫn tới local cache file                   |
| success    | Function | No       | Callback function khi xoá file được thực hiện thành công                     |
| fail       | Function | No       | Callback function khi xoá file thất bại                                      |
| complete   | Function | No       | Callback function khi việc xoá kết thúc cho dù thành công hay thất bại. |