---
title: lottie
---

Lottie là thư viện cho phép chạy các hoạt ảnh kết xuất từ After Effects và có thể chạy trên ứng dụng mobile và web. Bạn có thể điều khiển lottie component thông qua [my.createLottieContext](/docs/api/media/lottie/create-lottie-context) api.

Để hiểu thêm về lottie, vui lòng tham khảo https://airbnb.io/lottie.

**Khả dụng**: Lottie component chỉ hỗ trợ từ phiên bản 17.5.2 trở lên

## Thuộc tính

| Thuộc tính     | Kiểu dữ liệu | Mô tả                                                                                                                                                     |
| -------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| path           | string       | Đường dẫn tới nội dung của file json. Hỗ trợ các file local hoặc remote                                                                                   |
| autoplay       | boolean      | Tự động phát animation. Mặc định là false.                                                                                                                |
| speed          | number       | Tốc độ animation. Mặc định là 1. Giá trị từ 0 đến 1: tốc độ chậm lại; giá trị lớn 1: nhanh hơn.                                                           |
| onComplete     | event        | Sự kiện được gọi khi việc phát animation kết thúc, không tính phần loop.                                                                                  |
| onDataFailed   | event        | Sự kiện được kích hoạt khi load animation thất bại.                                                                                                       |
| onDataReady    | event        | Sự kiện được kích hoạt khi animation được load xong.                                                                                                      |
| onLoopComplete | event        | Animation đuợc phát lần đầu tiên. Nó tiếp tục được phát lại (loop) lần 1, 2, 3 ... Ngay khi loop lần 1 kết thúc, sự kiện onLoopComplete sẽ đuợc kích hoạt |

**_Lưu ý_**: Nếu gặp trường hợp lottie không hiển thị, bạn có thể kiểm tra nội dung của file lottie [tại đây](https://lottiefiles.com/preview)

## Sample Code

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
