---
title: my.createAudioContext
---

**my.createAudioContext** là API dùng để tạo ra AudioContext - đối tượng quản lý việc phát audio trên Tini App. Cụ thể hơn, nó cung cấp các hàm giúp điều khiển [audio](/docs/component/basic/media/audio) component.

## Phương thức của Audio Context

| Phương thức | Tham số  | Mô tả                                      |
| ----------- | -------- | ------------------------------------------ |
| play        | no       | Phát audio.                                |
| pause       | no       | Tạm dừng phát nội dung audio               |
| seek        | position | Nhảy tới một thời điểm cụ thể trong audio. |
| setSrc      | src      | Gán đuờng dẫn cho audio.                   |

## Sample Code

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
