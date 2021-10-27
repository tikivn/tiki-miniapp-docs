---
title: my.getSavedFileInfo
---

`my.getSavedFileInfo` là API dùng để lấy thông tin tập tin được lưu cục bộ. Để lấy thông tin tập tin tạm, sử dụng `my.getFileInfo()`.

## API Params

Các thuộc tính:

| Thuộc tính | Kiểu dữ liệu | Bắt buộc | Mô tả                                                                                     |
| ---------- | ------------ | :------: | ----------------------------------------------------------------------------------------- |
| filePath   | string       |    ✓     | Đường dẫn tới tập tin cục bộ                                                              |
| success    | Function     |          | Callback function khi lấy thông tin tập tin thành công                                    |
| fail       | Function     |          | Callback function khi lấy thông tin tập tin bất thành                                     |
| complete   | Function     |          | Callback function khi việc lấy thông tin tập tin kết thúc bất kể thành công hay thất bại. |

### Callback success function payload

| Thuộc tính | Kiểu dữ liệu | Mô tả                                  |
| ---------- | ------------ | -------------------------------------- |
| size       | number       | Dung lượng của file. Đơn vị tính: byte |
| createTime | string       | Ngày giờ tập tin được tạo ra           |


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
  onGetSavedFileInfo() {
    my.getSavedFileInfo({
      filePath: this.data.savedFilePath,
      success: (res) => {
        my.alert({
          title: "Saved File Info",
          content: JSON.stringify(res),
        });
        console.log(JSON.stringify(res));
      },
      fail: (e) => {
        console.log(e);
      },
    });
  },
});

```
