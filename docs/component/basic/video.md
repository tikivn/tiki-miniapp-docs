---
order: 17
category:
  vi-VN: Thành phần cơ bản
  en-US: Basic components
title:
  vi-VN: video
  en-US: video
---

## Giới thiệu

Sử dụng để hiện thị nội dung và chơi một video

## Sử dụng

### Sample Code

**index.txml**

```xml
<view class="container">
  <view class="block">
    <video
      src="https://vjs.zencdn.net/v/oceans.mp4"
      poster=""
      poster-size="contain"
      object-fit="contain"
      initial-time="5"
      autoplay="true"
      loop="true"
      muted="false"
      controls="true"
      onPlay="onPlay"
      onPause="onPause"
      onTimeUpdate="onTimeUpdate"
      onError="onError"
      onFullScreenChange="onFullScreenChange"
      onRenderStart="onRenderStart"
    />
  </view>
</view>
```

**index.tcss**

```css
.container {
  min-height: 100%;
  background-color: var(--gray20);
  padding: 16px;
}

.block {
  position: relative;
  width: 100%;
  padding-top: 75%;
}

video {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
```

**index.js**

```js
Page({
  data: {},
  onPlay() {},
  onPause() {},
  onTimeUpdate(e) {},
  onError() {},
  onFullScreenChange(e) {},
  onRenderStart() {},
});
```

### Chi tiết

| Property           | Type    | Default Value | Description                                                                                                             |
| ------------------ | ------- | ------------- | ----------------------------------------------------------------------------------------------------------------------- |
| src                | string  | ""            | Đường dẫn của một video                                                                                                 |
| poster             | string  | "contain"     | Đường dẫn poster của một video                                                                                          |
| poster-size        | string  | "contain"     | Xác định cách hiện thị kích thước của poster so với khung hiển thị của video (contain/center/cover/none/repeat/stretch) |
| object-fit         | string  | "none"        | Xác định cách hiện thị kích thước video so vơi khung hiển thị chứa video (none/contain/cover/stretch)                   |
| initial-time       | number  | 0             | Vị trí thời gian sẽ bắt đầu chơi                                                                                        |
| autoplay           | boolean | false         | Tự động bắt đầu chơi                                                                                                    |
| loop               | boolean | false         | Lặp lại video khi kết thúc                                                                                              |
| muted              | boolean | false         | Tắt âm thanh                                                                                                            |
| controls           | boolean | true          | Hiển thị thanh điều khiển                                                                                               |
| onPlay             | event   | null          | Sự kiện khi video được chơi                                                                                             |
| onPause            | event   | null          | Sự kiện khi video được dừng lại                                                                                         |
| onEnded            | event   | null          | Sự kiện khi video kết thúc                                                                                              |
| onTimeUpdate       | event   | null          | Sự kiên khi video đang chơi và trả về thời gian hiện tại của video, `event.detail = { currentTime: value }`         |
| onError            | event   | null          | Sự kiện khi xảy ra lỗi không thể tải được video                                                                         |
| onFullScreenChange | event   | null          | Sự kiện khi video thay đổi kích thước hiện thị toàn màn hình, `event.detail = { fullScreen: value }`                |
| onRenderStart      | event   | null          | Sự kiện khi video sẵn sàng chơi                                                                                         |


```__react
import image from '../../../theme/static/images/video-component.png'
ReactDOM.render(<img style={{maxWidth: 414}} alt="Button" src={image}/>, mountNode);
```
