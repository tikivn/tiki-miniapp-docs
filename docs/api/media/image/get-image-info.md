---
title: my.getImageInfo
---

## Giới thiệu

**my.getImageInfo** là API dùng để lấy thông tin của 1 image. Image có thể là từ remote, từ đường dẫn local hoặc từ resource của app.

## Sử dụng

### Sample Code

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

### API Params

Các thuộc tính:

| Attributes | Type     | Required | Description                                                                                        |
| ---------- | -------- | -------- | -------------------------------------------------------------------------------------------------- |
| src        | String   | Yes      | Đường dẫn của image. Support remote url, đường dẫn tương đối, đường dẫn image từ resources của app |
| success    | Function | No       | Callback function khi lấy thông tin image được thực hiện thành công                                |
| fail       | Function | No       | Callback function khi lấy thông tin image thất bại                                                 |
| complete   | Function | No       | Callback function khi việc lấy thông tin image kết thúc cho dù thành công hay thất bại.            |

### Success function payload

| Attributes  | Type   | Description                        |
| ----------- | ------ | ---------------------------------- |
| width       | Number | Chiều rộng của image               |
| height      | Number | Chiều cao của image                |
| orientation | String | Orientation của image              |
| path        | String | Đường dẫn local của image          |
| type        | String | Định dạng của image ví dụ jpg, png |

### Orientation type

| Level          | Description                           |
| -------------- | ------------------------------------- |
| up             | default                               |
| down           | Xoay 180 độ                           |
| left           | Xoay 90 ngược chiều kim đồng hồ       |
| right          | xoay 90 độ theo chiều kim đồng hồ     |
| up-mirrored    | Giống up nhưng lật theo chiều ngang   |
| down-mirrored  | Giống down nhưng lật theo chiều ngang |
| left-mirrored  | Giống left nhưng lật theo chiều dọc   |
| right-mirrored | Giống right nhưng lật theo chiều dọc  |
