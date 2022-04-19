---
title: my.compressVideo
---

`my.compressVideo` là API dùng để nén video khiến chúng có dung lượng nhỏ hơn.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/compress-video/index" />

## API Params

| Thuộc tính    | Kiểu dữ liệu | Bắt buộc | Mô tả                                                                            |
| ------------- | ------------ | :------: | -------------------------------------------------------------------------------- |
| filePath      | String       |    ✓     | Đường dẫn tới tập tin video cần nén                                              |
| compressLevel | Sring        |          | Mức độ nén video, mặc định là medium. Bảng chi tiết ở dưới.                      |
| success       | Function     |          | Callback function khi nén video thành công                                       |
| fail          | Function     |          | Callback function khi nén video bất thành                                        |
| complete      | Function     |          | Callback function khi gọi API hoàn tất bất kể nén video thành công hay thất bại. |

### Callback function payload

| Thuộc tính | Kiểu dữ liệu | Mô tả                                         |
| ---------- | ------------ | --------------------------------------------- |
| filePath   | string       | Chứa đường đẫn tạm thời của video đã được nén |

### Compress level

| Mức độ | Mô tả          |
| ------ | -------------- |
| low    | Low quality    |
| medium | Medium quality |
| high   | High quality   |

## Sample Code

```xml
<view>
  <block-header title="Usage" description="Compress video" />
  <view class="block-content">
    <video id="video" object-fit="cover" style="width: 100%; height: 100%;" onPlay="onPlay" onPause="onPause"
      onEnd="onEnd" onTimeUpdate="onTimeUpdate" plays-inline src="{{tempFilePath}}" />
    <button class="button-full" onTap="onChooseVideo">Choose Video</button>
  </view>
  <view class="block-content">
    <block-variant title="compressLevel">
      <view class="first-item" />
        <radio-group onChange="onChangeCompressLevel">
          <list-item>
            <label class="label-line">
              <radio class="label-line-radio" value="low" />
              <view class="label-line-content">low</view>
            </label>
          </list-item>
          <list-item>
            <label class="label-line">
              <radio class="label-line-radio"  checked value="medium" />
              <view class="label-line-content">medium</view>
            </label>
          </list-item>
          <list-item>
            <label class="label-line">
              <radio class="label-line-radio" value="high" />
              <view class="label-line-content">high</view>
            </label>
          </list-item>
        </radio-group>
    </block-variant>

    <button class="button-full" disabled="{{tempFilePath === undefined}}" onTap="onCompressVideo">Compress Video</button>
    <video id="video" object-fit="cover" style="width: 100%; height: 100%;" onPlay="onPlay" onPause="onPause"
      onEnd="onEnd" onTimeUpdate="onTimeUpdate" plays-inline src="{{compressVideoUrl}}" />
  </view>
</view>
```

```js
Page({
  data: {
    tempFilePath: undefined,
    compressVideoUrl: undefined,
    compressLevel: 'medium'
  },
  onChangeCompressLevel(v) {
    this.setData({
      compressLevel: v
    });
  },
  onChooseVideo() {
    my.chooseVideo({
      maxDuration: 15,
      success: (res) => {
        my.alert({ content: JSON.stringify(res) });
        this.setData({
          tempFilePath: res.filePaths[0]
        });
      },
      fail: (e) => {
        my.alert({ content: JSON.stringify(e) });
        console.log(e);
      }
    });
  },
  onCompressVideo() {
    my.showLoading({ content: 'Loading...' });
    my.compressVideo({
      filePath: this.data.tempFilePath,
      compressLevel: this.data.compressLevel,
      success: (res) => {
        this.setData({
          compressVideoUrl: res.filePath
        });
        my.hideLoading();
      },
      fail: (e) => {
        my.alert({ content: JSON.stringify(e) });
        my.hideLoading();
        console.log(e);
      }
    });
  }
});
```
