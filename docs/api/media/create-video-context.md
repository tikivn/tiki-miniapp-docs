---
title: my.createVideoContext
---

## Giới thiệu

**my.createVideoContext** là API dùng để quản lý [Video](/docs/component/media/video) component.

## Sử dụng

### Sample Code

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

### Return value

Trả về Video Context Object với hỗ trợ thuộc tính và methods theo như bên dưới.

### Video Context Methods
| Method | params   | Description                                           |
| ------ | -------- | ----------------------------------------------------- |
| play   | no       | Dùng để play nội dung.                                |
| pause  | no       | Dùng để dừng nội dung đang được phát.                 |
| seek   | position | Dùng để nhảy tới vị trí theo thời gian trên nội dung. |
