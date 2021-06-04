---
title: my.saveFile
---

## Giới thiệu

**my.saveFile** là API dùng lưu lại file về device từ 1 đường dẫn tạm thời (local temporary file)
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
  onChooseImage() {
    my.chooseImage({
      count: 1,
      success: (res) => {
        console.log(res);
        this.setData({
          tempFilePath: res.filePaths[0],
        });
      },
      fail: (e) => {
        console.log(e);
      },
    });
  },
  onSaveFile() {
    my.saveFile({
      filePath: this.data.tempFilePath,
      success: (res) => {
        console.log(res);
        my.alert({ title: "Saved", content: `File path ${res.filePath}` });
        this.setData({
          savedFilePath: res.filePath,
        });
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

| Attributes | Type     | Required | Description                                                                    |
| ---------- | -------- | -------- | ------------------------------------------------------------------------------ |
| filePath      | String   | Yes       |  Đường dẫn của local temporary file                   |
| success    | Function | No       | Callback function khi save file được thực hiện thành công                     |
| fail       | Function | No       | Callback function khi save file thất bại                                      |
| complete   | Function | No       | Callback function khi việc save file kết thúc cho dù thành công hay thất bại. |

### Callback success function payload

| Attributes | Type   | Description                |
| ---------- | ------ | -------------------------- |
| filePath  | Number  | Dung lượng của file |                                    
