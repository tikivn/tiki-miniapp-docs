---
title: my.createVideoContext
---

`my.createVideoContext` là API dùng để tạo ra VideoContext - đối tuợng quản lý việc phát video. Cụ thể hơn, nó cung cấp các hàm giúp điều khiển [video](/docs/component/basic/media/video) component.

## Return value

Trả về Video Context Object với hỗ trợ thuộc tính và methods theo như bên dưới.

### Video Context Methods

| Phương thức | Tham số  | Mô tả                                                                 |
| ----------- | -------- | --------------------------------------------------------------------- |
| play        | no       | Phát video.                                                           |
| pause       | no       | Dừng phát video. Nếu phát tiếp, sẽ bắt đầu từ thời điểm bị tam ngưng. |
| seek        | position | Nhảy đến một thời điểm cụ thể trong audio.                            |

## Sample Code

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

```js title=index.js
Page({
  onReady() {
    const video = my.createAudioContext('video');
    video.pause();
  }
})
```


