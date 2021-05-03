---
title: audio
---

## Giới thiệu

`audio` là component cho phép người dùng có thể play nội dung âm thanh trên tini-app. Bạn có thể tham khảo thêm api liên quan [my.createAudioContext](/docs/api/media/create-audio-context).

## Sử dụng

### Sample Code

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

## Chi tiết
### Các thuộc tính

| Property     | Type    | Description                                                                                     |
| ------------ | ------- | ----------------------------------------------------------------------------------------------- |
| src          | string  | Đường dẫn tới nội dung âm thanh.                                                                |
| loop         | boolean | Khi được chỉ định, audio player sẽ tự động phát lại khi phát tới cuối nội dung.                 |
| controls     | boolean | Cho phép tuỳ chỉnh sử dụng hay không sử dụng controls mặc định của Audio Player.                |
| name         | string  | Khi cho phép hiển thị controls, `name` sẽ được hiển thị trên phần tên của nội dung.             |
| author       | string  | Khi cho phép hiển thị controls, `control` sẽ được hiển thị trên phần tác giả của nội dung.      |
| onPlay       | event   | Sự kiện được gọi khi nội dung bắt được được play.                                               |
| onPause      | event   | Sự kiện được gọi khi nội dung được tạm dừng.                                                    |
| onEnded      | event   | Sự kiện được gọi khi nội dung kết thúc.                                                         |
| onTimeUpdate | event   | Sự kiện được gọi để cập nhật vị trí hiện tại của nội dung theo thời gian.                       |
| onError      | event   | Sự kiện được gọi khi có lỗi khi play nội dung. `event.detail = { errMsg: 'MEDIA_ERR_NETWORK' }` |