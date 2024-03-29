---
title: video
sidebar_custom_props:
  description: Component cho phép người dùng phát video trên Tini App
---

`video` là component cho phép người dùng phát video trên Tini App. Bạn có thể điều khiển component này thông qua [my.createVideoContext](/docs/api/media/video/create-video-context) api.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/component/basic/video/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/component/basic/video/index" />

## Thuộc tính

| Thuộc tính   | Kiểu dữ liệu | Giá trị mặc định | Mô tả                                                                                                                                                     |
| ------------ | ------------ | ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| src          | string       |                  | Đường dẫn tới tập tin video.                                                                                                                              |
| loop         | boolean      | false            | Tự động phát lại video một khi kết thúc.                                                                                                                  |
| autoplay     | boolean      | false            | Tự động phát video.                                                                                                                                       |
| controls     | boolean      | true             | Hiển thị hay ẩn thanh điều khiển video (nút play/pause, playback progress bar, ...) của video player.                                                     |
| object-fit   | string       | contain          | Quy định cách thức điều chỉnh kích cỡ video sao cho vừa vặn video container. Nhận các giá trị [fill \|\| contain \|\| cover \|\| none \|\| scale down ] . |
| plays-inline | boolean      | false            | Phát video ở chế độ nội tuyến (inline) hay chế độ toàn màn hình (fullscreen)                                                                              |
| poster       | string       |                  | Ảnh đại diện cho video trước khi video được phát.                                                                                                         |
| onLoading    | event        |                  | Sự kiện được kích hoạt khi video đang tải dữ liệu để play                                                                                                 |
| onCanPlay    | event        |                  | Sự kiện được kích hoạt khi video có thể phát sau khi tải dữ liệu thành công                                                                               |
| onPlay       | event        |                  | Sự kiện được kích hoạt khi video bắt đầu được phát hoặc được phát tiếp sau khi tạm dừng                                                                   |
| onPause      | event        |                  | Sự kiện được kích hoạt khi video bị tạm dừng.                                                                                                             |
| onEnded      | event        |                  | Sự kiện được kích hoạt khi video được phát đến hết.                                                                                                       |
| onTimeUpdate | event        |                  | Sự kiện được kích hoạt khi thời điểm hiện tại của video thay đổi. `event.detail = { currentTime: number }`                                                |
| onError      | event        |                  | Sự kiện được khích hoạt khi lỗi phát sinh trong lúc phát audio. `event.detail = { errMsg: 'MEDIA_ERR_NETWORK' }`.                                         |

## Sample Code

```xml title=index.txml
<video
    id="video"
    controls="false"
    loop
    object-fit="cover"
    style="width: 100%; height: 100%;"
    onPlay="onPlay"
    onPause="onPause"
    plays-inline
    src="https://dev-tikiscp.tbox.vn/miniapps/miki/cat.mp4"
  />
```

```js title=index.js
Page({
  onReady() {
    const video = my.createAudioContext('video');
    video.pause();
  }
});
```
