---
title: my.trimVideo
sidebar_custom_props:
  description: Cho phép cắt video trong 1 khoảng thời gian
---

`my.trimVideo` là API cho phép cắt video trong 1 khoảng thời gian.

**_Khả dụng_**: Hỗ trợ từ version 1.83.40 trở lên.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/trim-video/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/api/trim-video/index" />

## API Params

| Thuộc tính  | Kiểu dữ liệu | Bắt buộc | Mô tả                                                                                                                   |
| ----------- | ------------ | :------: | ----------------------------------------------------------------------------------------------------------------------- |
| minDuration | number       |    ✓     | Thời gian ít nhất của video                                                                                             |
| maxDuration | Bumber       |    ✓     | Thời gian lớn nhất của video                                                                                            |
| range       | Object       |          | Nếu muốn trim video trong 1 khoảng range cho trước, nếu range được set thì video sẽ trim theo range này mà không bật UI |
| success     | Function     |          | Callback function khi cắt video thành công.                                                                             |
| fail        | Function     |          | Callback function khi cắt video bất thành.                                                                              |
| complete    | Function     |          | Callback function khi gọi API hoàn tất bất kể có cắt được video hay không.                                              |

### range object

| Thuộc tính | Kiểu dữ liệu | Mô tả              |
| ---------- | ------------ | ------------------ |
| start      | number       | Thời điểm bắt đầu  |
| end        | number       | Thời điểm kết thúc |

### Callback function payload

| Thuộc tính | Kiểu dữ liệu | Mô tả                                                                                |
| ---------- | ------------ | ------------------------------------------------------------------------------------ |
| filePath   | string       | Đường dẫn của video đã được cắt. Sử dụng đường dẫn này để hiển thị video hoặc upload |
| duration   | number       | Thời gian của video được cắt                                                         |

## Sample Code

```xml
<view>
  <block-header title="Usage" description="Trim Video" />
  <view class="block-content">
    <button class="button-full" onTap="onChooseVideo">Choose Video</button>
  </view>

  <video id="video" object-fit="cover" style="width: 100%; height: 100%;" onPlay="onPlay" onPause="onPause"
    onEnd="onEnd" onTimeUpdate="onTimeUpdate" plays-inline src="{{videoUrl}}" />
</view>
```

```js
Page({
  data: {
    videoUrl: undefined
  },
  onChooseVideo() {
    my.chooseVideo({
      success: (res) => {
        my.trimVideo({ filePath: res.filePaths[0], duration: 5 });
      },
      fail: (e) => {
        my.alert({ content: JSON.stringify(e) });
        console.log(e);
      }
    });
  }
});
```
