---
title: audio
---

## Giới thiệu

`audio` là component cho phép người dùng có thể play nội dung âm thanh trên tini-app. Bạn có thể tham khảo thêm api liên quan [my.createAudioContext](/docs/api/media/create-audio-context).

## Thuộc tính

| Thuộc tính   | Kiểu dữ liệu | Giá tri mặc định | Mô tả                                                                                                           |
| ------------ | ------------ | ---------------- | --------------------------------------------------------------------------------------------------------------- |
| src          | string       |                  | Đường dẫn tới tập tin chứa audio.                                                                               |
| loop         | boolean      | false            | Tự động phát lại audio một khi kết thúc.                                                                        |
| controls     | boolean      | true             | Hiển thị hay ẩn thanh điều khiển audio (nút play/pause, playback progress bar, ...) của audio player            |
| name         | string       |                  | Tên của audio. Nếu controls đuợc phép hiển thị, `name` sẽ xuất hiện bên dưới controls.                          |
| author       | string       |                  | Tên tác giả của audio. Nếu controls được phép hiển thị, `control` sẽ xuất hiện bên duới controls.               |
| onPlay       | event        |                  | Sự kiện được kích hoạt khi audio bắt đầu được phát hoặc được phát  tiếp sau khi tạm dừng.                       |
| onPause      | event        |                  | Sự kiện được kích hoạt khi audio bị tạm dừng.                                                                   |
| onEnded      | event        |                  | Sự kiện được kích hoạt khi audio được phát đến hết.                                                             |
| onTimeUpdate | event        |                  | Sự kiện được kích hoạt khi currentTime của audio bị thay đổi                                                    |
| onError      | event        |                  | Sự kiện được kích hoạt khi lỗi phát sinh trong lúc phát audio. `event.detail = { errMsg: 'MEDIA_ERR_NETWORK' }` |

## Sample Code

**index.txml**

```xml
<audio id="audio1" src="https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_5MG.mp3" name="Sample Audio" author="Unknown" />
```

**index.js**

```js
Page({
  onReady() {
    const audio = my.createAudioContext('audio1');
    audio.pause();
  }
})
```

