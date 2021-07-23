---
title: lottie
---

## Giới thiệu

- Lottie là thư viện cho phép chạy các hoạt ảnh kết xuất từ After Effects và có thể chạy trên ứng dụng mobile và web. Bạn có thể hiểu về lottie [tại đây](https://airbnb.io/lottie)
- Bạn có thể sử dụng lottie component cùng với [my.createLottieContext](/docs/api/media/create-lottie-context)
- Lottie component chỉ hỗ trợ từ phiên bản 17.5.2 trở lên

## Sử dụng

### Sample Code

Một số component được sử dụng trong source [API Demo](https://github.com/tikivn/miniapp-getting-started/tree/main/api-demo).

**index.txml**

```xml
<view class="container">
  <view class="block">
    <lottie
      id="lottie"
      loop="{{true}}"
      autoplay="{{true}}"
      onComplete="onComplete"
      onLoopComplete="onLoopComplete"
      onDataFailed="onDataFailed"
      onDataReady="onDataReady"
      path="./lottie.json"
    />
  </view>

  <view class="block">
    <view class="actions">
      <button onTap="play" size="small">Play</button>
      <button onTap="pause" size="small">Pause</button>
      <button onTap="stop" size="small">Stop</button>
      <button onTap="toggleDirection" size="small">Switch direction</button>
      <button onTap="decrease" size="small">- Speed</button>
      <button onTap="increase" size="small">+ Speed</button>
      <button onTap="goToAndStop" size="small">Go and stop</button>
      <button onTap="goToAndPlay" size="small">Go and play</button>
    </view>
  </view>
</view>
```

**index.js**

```javascript
Page({
  speed: 1,
  onLoad() {
    this.lottieContext = my.createLottieContext('lottie');
  },
  onComplete(e) {
    console.log('onComplete', e);
  },
  onDataFailed(e) {
    console.log('onComplete', e);
  },
  onDataReady(e) {
    console.log('onDataReady', e);
  },
  onLoopComplete(e) {
    console.log('onLoopComplete', e);
  },
  lottieContext: null,
  play() {
    this.lottieContext.play();
  },
  pause() {
    this.lottieContext.pause();
  },
  stop() {
    this.lottieContext.stop();
  },
  decrease() {
    this.speed = this.speed - 0.1;
    this.lottieContext.setSpeed({ value: this.speed });
  },
  increase() {
    this.speed = this.speed + 0.1;
    this.lottieContext.setSpeed({ value: this.speed });
  },
  goToAndStop() {
    this.lottieContext.goToAndStop({ value: 0.1 });
  },
  goToAndPlay() {
    this.lottieContext.goToAndPlay({ value: 0.8 });
  },
  toggleDirection() {
    this.lottieContext.setDirection({
      value: this.direction === -1 ? 1 : -1
    });
  }
});
```

## Chi tiết

### Các thuộc tính

| Property       | Type    | Description                                                             |
| -------------- | ------- | ----------------------------------------------------------------------- |
| path           | string  | Đường dẫn tới nội dung của file json. Hỗ trợ các file local hoặc remote |
| autoplay       | boolean | Autoplay lottie. Mặc định là false                                      |
| speed          | number  | Tốc độc animation của lottie. Mặc định là 1                             |
| onComplete     | event   | Sự kiện được gọi khi kết thúc animation                                 |
| onDataFailed   | event   | Sự kiện được gọi nội dung của lottie tải không thành công               |
| onDataReady    | event   | Sự kiện được gọi khi nội dung của lottie được load xong                 |
| onLoopComplete | event   | Sự kiện được gọi khi loop hoàn tất                                      |

## Lưu ý

- Trong một số trường hợp nếu lottie không hiển thị, bạn có thể kiểm tra nội dung của file lottie [tại đây](https://lottiefiles.com/preview)