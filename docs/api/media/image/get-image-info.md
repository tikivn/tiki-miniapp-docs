---
title: my.getImageInfo
---

`my.getImageInfo` là API dùng để lấy thông tin của 1 ảnh (image). Ảnh có thể từ remote, từ đường dẫn cục bộ hoặc từ resources của app.

## API Params

| Thuộc tính | Kiểu dữ liệu | Băt buộc | Mô tả                                                                                         |
| ---------- | ------------ | :------: | --------------------------------------------------------------------------------------------- |
| src        | string       | ✓        | Đường dẫn của ảnh. Hỗ trợ remote URL, đường dẫn tương đối, đường dẫn từ resources của app.    |
| success    | Function     |          | Callback function khi lấy thông tin ảnh thành công                                            |
| fail       | Function     |          | Callback function khi lấy thông tin ảnh bất thành                                             |
| complete   | Function     |          | Callback function khi gọi API hoàn tất bất kể việc lấy thông tin ảnh thành công hay thất bại. |

### Success function payload

| Thuộc tính  | Kiểu dữ liệu | Mô tả                             |
| ----------- | ------------ | --------------------------------- |
| width       | number       | Chiều rộng của ảnh                |
| height      | number       | Chiều cao của ảnh                 |
| orientation | string       | Orientation của ảnh               |
| path        | string       | Đường dẫn cục bộ của ảnh          |
| type        | string       | Định dạng của ảnh, ví dụ jpg, png |

### Orientation type

| Kiểu           | Mô tả                                 |
| -------------- | ------------------------------------- |
| up             | Mặc định                              |
| down           | Xoay 180°                             |
| left           | Xoay 90° ngược chiều kim đồng hồ      |
| right          | Xoay 90° theo chiều kim đồng hồ       |
| up-mirrored    | Giống up nhưng lật theo chiều ngang   |
| down-mirrored  | Giống down nhưng lật theo chiều ngang |
| left-mirrored  | Giống left nhưng lật theo chiều dọc   |
| right-mirrored | Giống right nhưng lật theo chiều dọc  |


## Sample Code

```xml
<view>
  <block-header title="Usage" description="Get image info" />
  <view class="block-content">
    <view class="text">Remote Image: {{remoteUrl}}</view>
    <view class="text">Local Resources: {{localResources}}</view>
  </view>
  <view class="block-content">
    <button class="button-full" onTap="onFromRemoteImage">From Remote Image
    </button>
    <button class="button-full" onTap="onFromLocalImage">From Local
      Image</button>
    <button class="button-full" onTap="onFromResources">From
      resources</button>
  </view>
</view>
```

```js
Page({
  data: {
    remoteUrl:
      'https://salt.tikicdn.com/cache/w1240/ts/brickv2og/46/be/6f/dbc3e5d06f9f063d4b69c1cb7248d9fb.png.webp',
    localResources: 'images/app_logo.png'
  },
  onFromRemoteImage() {
    this.getImageInfo(this.data.remoteUrl);
  },
  onFromLocalImage() {
    my.chooseImage({
      count: 1,
      success: (res) => {
        this.getImageInfo(res.filePaths[0]);
      },
      fail: (e) => {
        console.log(e);
      }
    });
  },
  onFromResources() {
    this.getImageInfo(this.data.localResources);
  },

  getImageInfo(path) {
    my.getImageInfo({
      src: path,
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

