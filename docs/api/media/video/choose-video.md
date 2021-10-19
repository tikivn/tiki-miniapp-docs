---
title: my.chooseVideo
---

`my.chooseVideo` là API dùng để quay video hoặc chọn video từ album cục bộ.

***Khả dụng***: Chỉ hỗ trợ từ version 1.80.0 trở lên

## API Params

| Thuộc tính | Kiểu dữ liệu | Bắt buộc | Mô tả                                                                                |
| ---------- | ------------ | :------: | ------------------------------------------------------------------------------------ |
| camera     | string       |    ✓     | Chỉ định sẽ dùng camera trước (`front`) hay camera sau (`back`). Mặc định là `front` |
| sourceType | Array        |          | Quay video hay lấy video từ album. Mặc định là cả 2. ['camera, 'album']              |
| duration   | number       |          | Giới hạn thời gian quay video. Mặc định là không giới hạn                            |
| compressed | Boolean      |          | Có nén video hay không. Mặc định là không nén                                        |
| success    | Function     |          | Callback function khi lấy video thành công.                                          |
| fail       | Function     |          | Callback function khi lấy video bất thành.                                           |
| complete   | Function     |          | Callback function khi gọi API hoàn tất bất kể có lấy được video hay không.           |

### Callback function payload

| Thuộc tính | Kiểu dữ liệu     | Mô tả                                                                                   |
| ---------- | ---------------- | --------------------------------------------------------------------------------------- |
| filePaths  | Array            | Đường dẫn của các video được chọn. Sử dụng đường dẫn này để hiển thị video hoặc upload  |
| tempFiles  | Array of Objects | Danh sách các video được chọn cùng với các thông tin như path, size, width, height, ... |

### tempFiles payload

| Thuộc tính | Kiểu dữ liệu | Mô tả                                                    |
| ---------- | ------------ | -------------------------------------------------------- |
| path       | string       | Đường đẫn tạm thời của video.                            |
| size       | number       | Dung lượng video. Đơn vị tính: byte.                     |
| width      | number       | Chiều rộng của (độ phân giải) video. Đơn vị tính: pixel. |
| height     | number       | Chiều cao của (độ phân giải) video. Đơn vị tính pixel.   |
| duration   | number       | Thời gian của video.                                     |

## Sample Code

```xml
<view>
  <block-header title="Usage" description="Choose Video from camera or albums" />
  <view class="block-content">
    <button class="button-full" onTap="onChooseVideo">Choose Video</button>
  </view>
  <block tiki:if="{{videoUrl !== undefined}}}">
    <video id="video" object-fit="cover" style="width: 100%; height: 100%;" onPlay="onPlay" onPause="onPause"
      onEnd="onEnd" onTimeUpdate="onTimeUpdate" plays-inline src="{{videoUrl}}" />
  </block>
</view>
```

```js
Page({
  data: {
    videoUrl: undefined,
  },
  onChooseVideo() {
    my.chooseVideo({
      camera: 'front',
      maxDuration: 15,
      success: (res) => {
        my.alert({ content: JSON.stringify(res) });
        this.setData({
          videoUrl: res.filePaths[0],
        });
      },
      fail: (e) => {
        my.alert({ content: JSON.stringify(e) });
        console.log(e);
      },
    });
  },
});

```