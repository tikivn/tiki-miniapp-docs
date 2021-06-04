---
title: my.getSavedFileList
---

## Giới thiệu

**my.getSavedFileList** là API dùng để lấy thông tin tất cả các file đã đươc cache (local cache file)
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
  onGetSavedFileList() {
    my.getSavedFileList({
      success: (res) => {
        my.alert({
          title: "Saved File List",
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

### API Params

Các thuộc tính:

| Attributes | Type     | Required | Description                                                                    |
| ---------- | -------- | -------- | ------------------------------------------------------------------------------ |
| filePath      | String   | Yes       |  Đường dẫn tới local file                   |
| success    | Function | No       | Callback function khi lấy thông tin file được thực hiện thành công                     |
| fail       | Function | No       | Callback function khi lấy thông tin file thất bại                                      |
| complete   | Function | No       | Callback function khi việc lấy thông tin file kết thúc cho dù thành công hay thất bại. |

### Callback success function payload

| Attributes | Type   | Description                |
| ---------- | ------ | -------------------------- |
| fileList  | Array  | Array chứa thông tin tất cả local file |                                      

### fileList payload

| Attributes | Type   | Description                |
| ---------- | ------ | -------------------------- |
| size  | Number  | Dung lượng của file |      
| createTime  | String  | Timestamp của thời gian tạo file |
| filePath  | String  | Đường dẫn của file |