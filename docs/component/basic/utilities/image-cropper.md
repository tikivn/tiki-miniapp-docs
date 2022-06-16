---
title: Image Cropper
---

Image Cropper là component cho phép crop ảnh theo tỉ lệ mong muốn.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/component/advance/utilities/image-cropper/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/component/advance/utilities/image-cropper/index" />

## Thuộc tính

| Thuộc tính  | Kiểu dữ liệu | Giá trị mặc định   | Mô tả                                                                          |
| ----------- | ------------ | ------------------ | ------------------------------------------------------------------------------ |
| src         | string       |                    | Đường dẫn cục bộ tới hình ảnh muốn crop                                        |
| aspectRatio | string       | 1:1                | Tỷ lệ crop ảnh mong muốn, format {w}:{h}. Ví dụ 1:1, 4:3                       |
| className   | string       |                    | Thêm class cho component                                                       |
| id          | string       |                    | id của component. Dùng jsapi createCropperContext(id) để reference tới cropper |
| onSave      | event        | (e:Object) => void | Callback khi việc crop hình hoàn thành.                                        |

## Sample Code

:::note Lưu ý
JavaScript code dưới đây được sử dụng cho tất cả các component demo, không phải là best practice.
:::

Sử dụng image cropper ở txml

```xml
<image-cropper id="cropper-1" class="cropper" src={{imagePath}} aspectRatio={{ratio}} onSave="onCropperFinish" />
```

Thực hiện việc crop hình

```js
const cropper = my.createCropperContext('cropper-1');
cropper.save();
```

Callback cho việc crop thành công.

```js
onCropperFinish(e) {
    my.previewImage({
      urls: [e.uri],
      enablesavephoto: false,
      enableShowPhotoDownload: false,
      success: (res) => {
        console.log('success', res);
      },
      fail: (err) => {
        console.log('fail', err);
      },
    });
  },
}
```

Sample hoàn chỉnh

```js tittle=index.js
Page({
  data: {
    imagePath: undefined,
    ratio: '1:1'
  },
  onLoad() {
    my.chooseImage({
      count: 1,
      success: (res) => {
        this.setData({
          imagePath: res.filePaths[0]
        });
      },
      fail: (e) => {
        console.log(e);
      }
    });
  },
  onChangeRatio(e) {
    const ratio = e.target.dataset.ratio;
    this.setData({
      ratio
    });
  },
  onSave(e) {
    const cropper = my.createCropperContext('cropper-1');
    cropper.save();
  },

  onCropperFinish(e) {
    my.previewImage({
      urls: [e.uri],
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
  onChangePhoto() {
    my.chooseImage({
      count: 1,
      success: (res) => {
        this.setData({
          imagePath: res.filePaths[0]
        });
      },
      fail: (e) => {
        console.log(e);
      }
    });
  }
});
```

```xml
  <view class="page-container">
  <image-cropper id="cropper-1" class="cropper" src={{imagePath}} aspectRatio={{ratio}} onSave="onCropperFinish" />
  <view class="cropper-footer">
    <view class="cropper-footer-ratio">
      <image class="ratio-icon" mode="center" src="/images/ratio_34.png" onTap="onChangeRatio" data-ratio="3:4"></image>
      <image class="ratio-icon" mode="center" src="/images/ratio_11.png" onTap="onChangeRatio" data-ratio="1:1"></image>
      <image class="ratio-icon" mode="center" src="/images/ratio_43.png" onTap="onChangeRatio" data-ratio="4:3"></image>
    </view>
    <tu-button class="save-button" shape="pill" type="solid" onTap="onChangePhoto">Album</tu-button>
    <tu-button class="save-button" shape="pill" type="solid" onTap="onSave">Save</tu-button>
  </view>
</view>
```

### Kết quả

<div style={{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    widht:'100%',
    background:'#f2f4f5',
    padding:'24px',
    borderRadius:'4px'
  }}>
  <div>
      <img style={{maxWidth: 300}} alt="modal" src="/img/image-cropper.jpg"/>
  </div>
</div>
