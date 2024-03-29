---
title: audio
sidebar_custom_props:
  description: Component cho phép người dùng phát âm thanh trên Tini App
---

`audio` là component cho phép người dùng phát âm thanh trên Tini App. Bạn có thể điều khiển audio component thông qua [my.createAudioContext](/docs/api/media/audio/create-audio-context) api.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/component/basic/audio/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/component/basic/audio/index" />

## Thuộc tính

| Thuộc tính   | Kiểu dữ liệu | Giá trị mặc định | Mô tả                                                                                                           |
| ------------ | ------------ | ---------------- | --------------------------------------------------------------------------------------------------------------- |
| src          | string       |                  | Đường dẫn tới tập tin chứa audio.                                                                               |
| loop         | boolean      | false            | Tự động phát lại audio một khi kết thúc.                                                                        |
| controls     | boolean      | true             | Hiển thị hay ẩn thanh điều khiển audio (nút play/pause, playback progress bar, ...) của audio player            |
| name         | string       |                  | Tên của audio. Nếu controls đuợc phép hiển thị, `name` sẽ xuất hiện bên dưới controls.                          |
| author       | string       |                  | Tên tác giả của audio. Nếu controls được phép hiển thị, `author` sẽ xuất hiện bên duới controls.                |
| onPlay       | event        |                  | Sự kiện được kích hoạt khi audio bắt đầu được phát hoặc được phát tiếp sau khi tạm dừng.                        |
| onPause      | event        |                  | Sự kiện được kích hoạt khi audio bị tạm dừng.                                                                   |
| onEnded      | event        |                  | Sự kiện được kích hoạt khi audio được phát đến hết.                                                             |
| onTimeUpdate | event        |                  | Sự kiện được kích hoạt khi currentTime của audio bị thay đổi.                                                   |
| onError      | event        |                  | Sự kiện được kích hoạt khi lỗi phát sinh trong lúc phát audio. `event.detail = { errMsg: 'MEDIA_ERR_NETWORK' }` |

## Sample Code

```xml title=index.txml
<audio id="audio1" src="https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_5MG.mp3" name="Sample Audio" author="Unknown" />
```

```js title=index.js
Page({
  onReady() {
    const audio = my.createAudioContext('audio1');
    audio.pause();
  }
});
```
