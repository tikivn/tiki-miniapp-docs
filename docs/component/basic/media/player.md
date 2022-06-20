---
title: player
sidebar_custom_props:
  description: Component hỗ trợ xem video trên youtube
---

`player` là component hỗ trợ xem video trên youtube. Không giống như [video](/docs/component/basic/media/video) component hỗ trợ cho cả native và web video, player component chỉ hỗ trợ dạng web video.

**_Khả dụng_**: chỉ được hỗ trợ từ phiên bản 1.88.4 trở lên.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/component/basic/player/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/component/basic/player/index" />

## Thuộc tính

| Thuộc tính    | Kiểu dữ liệu | Bắt buộc | Giá tri mặc định | Mô tả                                                                                                                                                     |
| ------------- | ------------ | -------- | ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| url           | string       | ✓        |                  | Đường dẫn của video. Hỗ trợ các file local hoặc youtube                                                                                                   |
| playing       | boolean      |          | false            | Cho phép phát hay dừng player                                                                                                                             |
| loop          | number       |          | false            | Cho phép lặp lại video                                                                                                                                    |
| controls      | boolean      |          | false            | Cho phép hiển thị các controls cho video                                                                                                                  |
| volume        | number       |          |                  | Mức độ âm lượng của video. Nhận giá trị từ 0 tới 1                                                                                                        |
| muted         | number       |          | false            | Cho phép tắt tiếng video                                                                                                                                  |
| onPlayerReady | event        |          |                  | Sự kiện được gọi khi video đã sẵn sàng để phát                                                                                                            |
| onStart       | event        |          |                  | Sự kiện được gọi khi video bắt đầu phát hoặc được phát lại sau khi tạm dừng                                                                               |
| onPause       | event        |          |                  | Sự kiện được gọi khi video tạm dừng                                                                                                                       |
| onProgress    | event        |          |                  | Sự kiện được gọi khi thời gian phát của video thay đổi. `event.detail = { played: number; playedSeconds: number; loaded: number; loadedSeconds: number }` |
| onSeek        | event        |          |                  | Sự kiện được gọi khi video nhảy tới một thời điểm nào đó. `event.detail = { seconds: number }`                                                            |
| onError       | event        |          |                  | Sự kiện được gọi khi video bị lỗi                                                                                                                         |

:::note Lưu ý

- Do chính sách của một số trình duyệt, video không thể **Auto play** được ([xem tại đây](https://www.theverge.com/2018/3/22/17150870/google-chrome-autoplay-videos-sound-mute-update)). Vì lẽ đó, để autoplay video, bạn cần thiết lập giá trị của `playing` là true và phải tắt tiếng đi với `muted` là true.
- Trên simulator của studio bạn không thể bận fullscreen của video được

:::

## Sample Code

Một số component được sử dụng trong source [API Demo](https://github.com/tikivn/miniapp-getting-started/tree/main/api-demo).

```xml title=index.txml
<view>
  <block-header title="Usage" description="Allows play a local video or youtube on app" />
  <view class="block-content">
    <view class="video-contain">
      <player
        controls
        url="https://www.youtube.com/watch?v=-HiYWgBB30g"
        onPlayerReady="onPlayerReady"
        onStart="onStart"
        onProgress="onProgress"
        onDuration="onDuration"
        onPause="onPause"
        onSeek="onSeek"
        onEnded="onEnded"
        onError="onError"
      />
    </view>
  </view>
</view>
```

```javascript title=index.js
Page({
  onPlayerReady() {
    console.log('onPlayerReady');
  },
  onStart() {
    console.log('onPlayerReady');
  },
  onProgress(progress) {
    console.log('onProgress', progress);
  },
  onDuration(duration) {
    console.log('onDuration', duration);
  },
  onPause() {
    console.log('onPause');
  },
  onSeek(seek) {
    console.log('onSeek', seek);
  },
  onEnded() {
    console.log('onEnded');
  },
  onError(err) {
    console.log('error', err);
  }
});
```
