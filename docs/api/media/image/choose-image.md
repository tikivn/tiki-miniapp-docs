---
title: my.chooseImage
---

**my.chooseImage** là API dùng để chụp ảnh bằng camera hoặc chọn hình từ album cục bộ.

## API Params

| Thuộc tính | Kiểu dữ liệu | Mô tả                                                                             |
| ---------- | ------------ | --------------------------------------------------------------------------------- |
| count      | number       | Số lượng tối đa ảnh có thể chọn. Mặc định là 1                                    |
| sourceType | Array        | Chụp hình bằng camera hay lấy hình từ album. Mặc định là cả 2. ['camera, 'album'] |
| success    | Function     | Callback function khi lấy ảnh thành công.                                         |
| fail       | Function     | Callback function khi lấy ảnh bất thành.                                          |
| complete   | Function     | Callback function khi gọi API hoàn tất bất kể có lấy được ảnh hay không.          |

### Callback function payload

| Thuộc tính | Kiểu dữ liệu     | Mô tả                                                                                 |
| ---------- | ---------------- | ------------------------------------------------------------------------------------- |
| filePaths  | Array            | Đường dẫn của các ảnh được chọn. Sử dụng đường dẫn này để display image hoặc upload   |
| tempFiles  | Array of Objects | Danh sách các ảnh được chọn cùng với các thông tin như path, size, width, height, ... |

### tempFiles payload

| Thuộc tính | Kiểu dữ liệu | Mô tả                                  |
| ---------- | ------------ | -------------------------------------- |
| path       | string       | Đường đẫn tạm thời của ảnh             |
| size       | number       | Dung lượng của ảnh. Đơn vị tính: byte  |
| width      | number       | Chiều rộng của ảnh. Đơn vị tính: pixel |
| height     | number       | Chiều cao của ảnh. Đơn vị tính pixel   |


## Sample Code

```xml
<view>
  <block-header title="Usage" description="Pick image from camera or albums" />
  <view class="block-content">
    <button class="button-full" onTap="onChooseImage">Choose Image</button>
  </view>
  <block tiki:for="{{imgs}}">
    <image src="{{item}}" />
  </block>
</view>
```

```js
Page({
  data: {
    imgs: undefined,
  },
  onChooseImage() {
    my.chooseImage({
      count: 5,
      success: (res) => {
        console.log(res);
        this.setData({
          imgs: res.filePaths,
        });
      },
      fail: (e) => {
        console.log(e);
      },
    });
  },
});
```


<img style={{maxWidth: 414}} alt="choose-image" src="/img/choose-image.gif"/>  