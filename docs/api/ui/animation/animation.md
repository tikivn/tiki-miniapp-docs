---
title: my.createAnimation
---

## Giới thiệu

my.createAnimation là api để tạo ra một animation instance.

Animation instance sử dụng các hàm của nó để mô tả animation và cuối cùng,
sử dụng hàm `export` để truyền thuộc tính animation vào các view trên TXML.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/animation/index" />

## Sử dụng

### Sample Code

```css
.animation-element {
  width: 100px;
  height: 100px;
  background: red;
}
```

```xml
<view class="page">
  <view class="page-description">Animation</view>
  <view class="page-section">
    <view class="page-section-title">my.createAnimation</view>
    <view class="page-section-demo">
      <view class="animation-element" animation="{{animation}}"></view>
    </view>
    <view class="page-section-btns">
      <view type="primary" onTap="rotate">Rotate/view>
      <view type="primary" onTap="scale">Scale</view>
      <view type="primary" onTap="translate">Translate</view>
    </view>
    <view class="page-section-btns">
      <view type="primary" onTap="skew">Skew</view>
      <view type="primary" onTap="rotateAndScale">Rotate and scale</view>
      <view type="primary" onTap="rotateThenScale">Rotate then scale</view>
    </view>
    <view class="page-section-btns">
      <view type="primary" onTap="all">All animation</view>
      <view type="primary" onTap="allInQueue">All in queue</view>
      <view type="primary" onTap="reset">Reset</view>
    </view>
  </view>
</view>
```

```js
Page({
  onReady() {
    this.animation = my.createAnimation();
  },
  rotate() {
    this.animation.rotate(Math.random() * 720 - 360).step();
    this.setData({ animation: this.animation.export() });
  },
  scale() {
    this.animation.scale(Math.random() * 2).step();
    this.setData({ animation: this.animation.export() });
  },
  translate() {
    this.animation
      .translate(
        Math.random() * 100 - 50,
        Math.random() * 100 - 50
      )
      .step();
    this.setData({ animation: this.animation.export() });
  },
  skew() {
    this.animation
      .skew(Math.random() * 90, Math.random() * 90)
      .step();
    this.setData({ animation: this.animation.export() });
  },
  rotateAndScale() {
    this.animation
      .rotate(Math.random() * 720 - 360)
      .scale(Math.random() * 2)
      .step();
    this.setData({ animation: this.animation.export() });
  },
  rotateThenScale() {
    this.animation
      .rotate(Math.random() * 720 - 360)
      .step()
      .scale(Math.random() * 2)
      .step();
    this.setData({ animation: this.animation.export() });
  },
  all() {
    this.animation
      .rotate(Math.random() * 720 - 360)
      .scale(Math.random() * 2)
      .translate(
        Math.random() * 100 - 50,
        Math.random() * 100 - 50
      )
      .skew(Math.random() * 90, Math.random() * 90)
      .step();
    this.setData({ animation: this.animation.export() });
  },
  allInQueue() {
    this.animation
      .rotate(Math.random() * 720 - 360)
      .step()
      .scale(Math.random() * 2)
      .step()
      .translate(
        Math.random() * 100 - 50,
        Math.random() * 100 - 50
      )
      .step()
      .skew(Math.random() * 90, Math.random() * 90)
      .step();
    this.setData({ animation: this.animation.export() });
  },
  reset() {
    this.animation
      .rotate3d(0, 0, 0, 0)
      .rotateX(0)
      .rotateY(0)
      .rotateZ(0)
      .scale(1)
      .translate(0, 0)
      .skew(0, 0)
      .step({ duration: 0 });
    this.setData({ animation: this.animation.export() });
  }
});
```

### Chi tiết

| Thuộc tính      | Kiểu dữ liệu | Required | Mô tả                                                                                                                                                             |
| --------------- | ------------ | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| duration        | Number       | No       | Thời gian để animation được thực hiện, mặc định là 400ms                                                                                                          |
| timeFunction    | String       | No       | Hiệu ứng để thực hiện animation, có thể nhận các giá trị: `linear`, `ease`, `ease-in`, `ease-out`, `ease-in-out`, `step-start`, `step-end`. Mặc định là `linear`. |
| delay           | Number       | No       | Animation delay time (in ms).                                                                                                                                     |
| transformOrigin | string       | No       | Giá trị ban đầu của CSS transform.                                                                                                                                |
