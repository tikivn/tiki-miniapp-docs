---
title: my.createLottieContext
---

## Giới thiệu

**my.createLottieContext** là API dùng để quản lý [Lottie](/docs/component/media/lottie) component.

## Sử dụng

### Sample Code

```xml
<lottie id="lottie" path="./lottie.json" />
```

**index.js**

```js
Page({
  onReady() {
    const lottieContext = my.createLottieContext('lottie');
    lottieContext.play();
  }
});
```

Bạn có thể xem thêm ví dụ tại [Lottie Component](/docs/component/media/lottie)

### Return value

Trả về Lottie Context Object với hỗ trợ thuộc tính và methods theo như bên dưới.

### Video Context Methods

| Method       | params            | Description                                                                                  |
| ------------ | ----------------- | -------------------------------------------------------------------------------------------- |
| play         | no                | Dùng để play nội dung.                                                                       |
| pause        | no                | Dùng để tạm dừng nội dung đang được phát. Khi play lottie sẽ chạy lại từ điểm đang được dừng |
| stop         | no                | Dùng để dừng hẳn nội dung đang được phát. Khi play lottie sẽ chạy lại từ đầu                 |
| setSpeed     | { value: number } | Dùng để thay đổi tốc độ của lottie. Mặc định là 1                                            |
| goToAndStop  | { value: number } | Nhảy tới một thời điểm được chỉ định sau đó dừng hẳn                                         |
| goToAndPlay  | { value: number } | Nhảy tới một thời điểm được chỉ định sau đó play tiếp                                        |
| setDirection | { value: number } | Thay đổi direction cho lottie. Mặc định là 1                                                 |
