---
title: my.createAudioContext
---

## Giới thiệu

**my.createAudioContext** là API dùng để quản lý [Audio](/docs/component/media/audio) component.

## Sử dụng

### Sample Code

```xml
<audio id="audio1" src="https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_5MG.mp3" name="Sample Audio" author="Unknown" />
```

```js
Page({
  onReady() {
    const audio = my.createAudioContext('audio1');
    audio.pause();
  }
})
```
### Return value

Trả về Audio Context Object với hỗ trợ thuộc tính và methods theo như bên dưới.

### Audio Context Methods
| Method | params   | Description                                           |
| ------ | -------- | ----------------------------------------------------- |
| play   | no       | Dùng để play nội dung.                                |
| pause  | no       | Dùng để dừng nội dung đang được phát.                 |
| seek   | position | Dùng để nhảy tới vị trí theo thời gian trên nội dung. |
| setSrc | src      | Dùng để cập nhật `src` của audio.                     |
