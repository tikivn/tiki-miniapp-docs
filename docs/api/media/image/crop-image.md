---
title: my.cropImage
---

- `my.cropImage` là API dùng để crop hình ảnh.

**_Khả dụng_**: Hỗ trợ từ version 1.82.35 trở lên.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/crop-image/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/api/crop-image/index" />

## API Params

| Thuộc tính | Kiểu dữ liệu | Bắt buộc | Mô tả                                                                                     |
| ---------- | ------------ | :------: | ----------------------------------------------------------------------------------------- |
| filePath   | string       |    ✓     | Đường dẫn tới hình ảnh cần crop. Chỉ support đường dẫn cục bộ.                            |
| width      | number       |    ✓     | Chiều rộng mong muốn của hình ảnh sau khi crop                                            |
| height     | number       |    ✓     | Chiều dài mong muốn của hình ảnh sau khi crop                                             |
| circle     | boolean      |          | Bật/tắt chế độ crop ảnh thành hình tròn                                                   |
| success    | Function     |          | Callback function khi việc crop hình ảnh thành công.                                      |
| fail       | Function     |          | Callback function khi việc crop hình ảnh bất thành.                                       |
| complete   | Function     |          | Callback function khi gọi API hoàn tất bất kể việc crop hình ảnh thành công hay thất bại. |

## Sample Code

```xml title=index.txml
<view>
  <block-header title="Usage" description="Compress image" />
  <view class="block-content">
    <image class="image-cover" src="{{tempFilePath}}" />
    <button class="button-full" onTap="onChooseImage">Choose Image</button>
  </view>
  <view class="block-content">
    <button class="button-full" disabled="{{tempFilePath === undefined}}" onTap="onCropImage">Crop
      Image</button>
  </view>
</view>
```

```js title=index.js
Page({
  data: {
    tempFilePath: undefined,
    cropFilePath: undefined
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

  onCropImage() {
    my.cropImage({
      filePath: this.data.tempFilePath,
      circle: true,
      width: 400,
      height: 400,
      success: (res) => {
        my.previewImage({
          urls: [res.path],
          enablesavephoto: false,
          enableShowPhotoDownload: false,
          success: (res) => {
            console.log('success', res);
          },
          fail: (err) => {
            console.log('fail', err);
          }
        });
      },
      fail: (e) => {
        console.log(e);
      }
    });
  }
});
```
