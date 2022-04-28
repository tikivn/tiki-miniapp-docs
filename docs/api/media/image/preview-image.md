---
title: my.previewImage
---

`my.previewImage` là API cho phép mở một cửa sổ lớn để xem hình ảnh

***Khả dụng***: Chỉ hỗ trợ từ version 1.81.6 trở lên

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/preview-image/index" />

## API Params

| Thuộc tính              | Kiểu dữ liệu | Bắt buộc | Mô tả                                                                                         |
| ----------------------- | ------------ | :------: | --------------------------------------------------------------------------------------------- |
| urls                    | string       |    ✓     | Mảng các đường dẫn hình ảnh, chỉ hỗ trợ remote url và các hình có sẵn trong thiết bị.         |
| current                 | number       |          | Chỉ định hình ảnh đầu tiên muốn hiển thị, mặc định là 0.                                      |
| enablesavephoto         | boolean      |          | Hiển thị option cho phép user Lưu hình ảnh khi nhấn giữ lâu (long press) vào hình.            |
| enableShowPhotoDownload | boolean      |          | Hiển thị nut Download ở dưới footer.                                                          |
| success                 | Function     |          | Callback function khi hình ảnh hiển thị thành công.                                           |
| fail                    | Function     |          | Callback function khi hình ảnh hiển thị bất thành.                                            |
| complete                | Function     |          | Callback function khi gọi API hoàn tất bất kể việc hiển thị hình ảnh thành công hay thất bại. |

## Sample Code

```xml title=index.txml
<view>
  <block-header title="Usage" description="Preview Image" />
  <view class="block-content">
    <label class="flex items-center mb-small">
      <checkbox onChange="onChangeSavePhoto" />
      <text class="block ml-small">enablesavephoto</text>
    </label>
    <label class="flex items-center">
      <checkbox onChange="onChangeDownload" />
      <text class="block ml-small">enableShowPhotoDownload</text>
    </label>
  </view>
  <view class="block-content">
    <button class="button-full" onTap="onPreview">Preview Image</button>
  </view>
</view>
```

```js title=index.js
Page({
  data: {
    enablesavephoto: false,
    enableShowPhotoDownload: false
  },
  onChangeSavePhoto(e) {
    this.setData({ enablesavephoto: e.detail.value });
  },
  onChangeDownload(e) {
    this.setData({ enableShowPhotoDownload: e.detail.value });
  },
  onPreview() {
    my.previewImage({
      urls: [
        'https://www.w3schools.com/html/pic_trulli.jpg',
        'https://www.w3schools.com/html/img_chania.jpg',
        'https://www.w3schools.com/html/img_girl.jpg'
      ],
      enablesavephoto: this.data.enablesavephoto,
      enableShowPhotoDownload: this.data.enableShowPhotoDownload,
      success: (res) => {
        console.log('success', res);
      },
      fail: (err) => {
        console.log('fail', err);
      }
    });
  }
});
```
