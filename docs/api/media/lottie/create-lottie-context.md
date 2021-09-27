---
title: my.createLottieContext
---

**my.createLottieContext** là API dùng để quản lý [Lottie](/docs/component/media/lottie) component.

Trả về Lottie Context Object với hỗ trợ thuộc tính và methods theo như bên dưới.

## Video Context Methods

| Phương thức  | Tham số           | Mô tả                                                                                                                         |
| ------------ | ----------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| play         | no                | Phát lottie animation.                                                                                                        |
| pause        | no                | Tạm ngưng phát animation. Nếu phát tiếp, sẽ bắt đầu từ thời điểm bị tam ngưng.                                                |
| stop         | no                | Dừng hẳn phát animation. Nếu phát tiếp, sẽ bắt đầu lại từ đầu.                                                                |
| setSpeed     | { speed: number } | Dùng để thay đổi tốc độ phát của. Mặc định là 1 (bình thường). Giá trị từ 0 đến 1: tốc độ chậm lại; giá trị lớn 1: nhanh hơn. |
| goToAndStop  | { value: number } | Nhảy tới một thời điểm được chỉ định trong animation sau đó dừng hẳn (stop).                                                  |
| goToAndPlay  | { value: number } | Nhảy tới một thời điểm được chỉ định, sau đó phát tiếp animation                                                              |
| setDirection | { value: number } | Thay đổi direction cho lottie. Mặc định là 1. 1: theo chiều bình thường; -1: theo chiều ngược lại                             |


## Sample Code

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
