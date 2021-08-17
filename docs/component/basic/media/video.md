---
title: video
---

## Giới thiệu

`video` là component cho phép người dùng có thể play nội dung hình ảnh trên tini-app. Bạn có thể tham khảo thêm api liên quan [my.createVideoContext](/docs/api/media/create-video-context).

## Sử dụng

### Sample Code

**index.txml**

```xml
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

**index.js**

```js
Page({
  onReady() {
    const video = my.createAudioContext('video');
    video.pause();
  }
})
```

## Chi tiết
### Các thuộc tính

| Property     | Type    | Description                                                                                                                                                                        |
| ------------ | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| src          | string  | Đường dẫn tới nội dung hình ảnh.                                                                                                                                                   |
| loop         | boolean | Khi được chỉ định, video player sẽ tự động phát lại khi phát tới cuối nội dung.                                                                                                    |
| autoplay     | boolean | Khi được chỉ định, video player sẽ tự động phát.                                                                                                                                   |
| controls     | boolean | Cho phép tuỳ chỉnh sử dụng hay không sử dụng controls mặc định củas Video Player.                                                                                                  |
| object-fit   | string  | Cách thể hiện của video khi kích thước của video khác với video container. Các giá trị bao gồm: 'fill', 'contain', 'cover', 'none' và 'scale-down'. Giá trị mặc định là 'contain'. |
| plays-inline | boolean | Mặc định video sẽ được mở fullscreen khi phát, quy định thuộc tính này cho phép phát video tại chỗ.                                                                                |
| poster       | string  | Hình đại diện của video trước khi nội dung được load.                                                                                                                              |
| onPlay       | event   | Sự kiện được gọi khi nội dung bắt được được play.                                                                                                                                  |
| onPause      | event   | Sự kiện được gọi khi nội dung được tạm dừng.                                                                                                                                       |
| onEnded      | event   | Sự kiện được gọi khi nội dung kết thúc.                                                                                                                                            |
| onTimeUpdate | event   | Sự kiện được gọi để cập nhật vị trí hiện tại của nội dung theo thời gian.                                                                                                          |
| onError      | event   | Sự kiện được gọi khi có lỗi khi play nội dung. `event.detail = { errMsg: 'MEDIA_ERR_NETWORK' }`                                                                                    |