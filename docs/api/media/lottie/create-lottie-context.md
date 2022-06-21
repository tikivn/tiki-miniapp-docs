---
title: my.createLottieContext
sidebar_custom_props:
  description: Dùng để tạo ra LottieContext - đối tượng cung cấp các thuôc tính và phương thức giúp bạn điều khiển `lottie` component
---

`my.createLottieContext` là API dùng để tạo ra LottieContext - đối tượng cung cấp các thuôc tính và phương thức giúp bạn điều khiển [lottie](/docs/component/basic/media/lottie) component.

## Các phương thức LottieContext cung cấp

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

```js title=index.js
Page({
  onReady() {
    const lottieContext = my.createLottieContext('lottie');
    lottieContext.play();
  }
});
```

Bạn có thể xem thêm ví dụ tại [Lottie Component](/docs/component/basic/media/lottie)
