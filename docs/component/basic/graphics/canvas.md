---
title: canvas
sidebar_custom_props:
  description: Component phục vụ cho mục đích chứa đồ hoạ
---

`canvas` là một vùng hình chữ nhật phục vụ cho mục đích chứa đồ hoạ. Theo mặc định, nó không có đường viền cũng như nội dung; bạn sẽ sử dụng JavaScript để kết xuất đồ hoạ.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/component/basic/canvas/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/component/basic/canvas/index" />

## Thuộc tính

| Thuộc tính     | Kiểu dữ liệu | Giá trị mặc định | Mô tả                                                                                 |
| -------------- | ------------ | ---------------- | ------------------------------------------------------------------------------------- |
| id             | string       |                  | Định danh duy nhất của canvas                                                         |
| style          | string       |                  |                                                                                       |
| class          | string       |                  |                                                                                       |
| width          | number       | 300              | Chiều rộng của canvas                                                                 |
| height         | number       | 225              | Chiều cao của canvas                                                                  |
| disable-scroll | boolean      | false            | Không cho canvas scroll                                                               |
| type           | string       |                  | Kiểu render đồ hoạ - 2d hay webgl.                                                    |
| onTap          | event        |                  | Sự kiện được kích hoạt khi touch vào canvas                                           |
| onTouchStart   | event        |                  | Sự kiện được kích hoạt khi ngón tay bắt đầu touch vào canvas.                         |
| onTouchMove    | event        |                  | Sự kiện được kích hoạt khi ngón tay di chuyển trên canvas.                            |
| onTouchEnd     | event        |                  | Sự kiện được kích hoạt khi ngón tay rút khỏi canvas.                                  |
| onTouchCancel  | event        |                  | Sự kiện được hoạt khi hành động touch bị gián đoạn bởi một cuộc gọi hay popup window. |
| onLongTap      | event        |                  | Sự kiện được kích hoạt khi thời gian ngón tay nhấn vào canvas lâu hơn 500 mili giây.  |
| onReady        | event        |                  | Sự kiện được kích hoạt khi canvas được khởi tạo thành công và sẵn sàng hoạt động.     |

## Sample Code

```xml title=index.txml
<view class="page">
  <view class="canvas-view">
    <canvas
      id="canvas"
      width="610"
      height="610"
      class="canvas"
      onTouchStart="log"
      onTouchMove="log"
      onTouchEnd="log"
    />
  </view>
</view>
```

```js title=index.js
Page({
  onReady() {
    this.point = {
      x: Math.random() * 590,
      y: Math.random() * 590,
      dx: Math.random() * 10,
      dy: Math.random() * 10,
      r: Math.round((Math.random() * 255) | 0),
      g: Math.round((Math.random() * 255) | 0),
      b: Math.round((Math.random() * 255) | 0)
    };

    this.interval = setInterval(this.draw.bind(this), 17);
    this.ctx = my.createCanvasContext('canvas');
  },

  draw() {
    const { ctx } = this;
    ctx.setFillStyle('#FFF');
    ctx.fillRect(0, 0, 610, 610);

    ctx.beginPath();
    ctx.arc(this.point.x, this.point.y, 20, 0, 2 * Math.PI);
    ctx.setFillStyle(
      'rgb(' +
        this.point.r +
        ', ' +
        this.point.g +
        ', ' +
        this.point.b +
        ')'
    );
    ctx.fill();
    ctx.draw();

    this.point.x += this.point.dx;
    this.point.y += this.point.dy;
    if (this.point.x <= 10 || this.point.x >= 590) {
      this.point.dx = -this.point.dx;
      this.point.r = Math.round((Math.random() * 255) | 0);
      this.point.g = Math.round((Math.random() * 255) | 0);
      this.point.b = Math.round((Math.random() * 255) | 0);
    }

    if (this.point.y <= 10 || this.point.y >= 590) {
      this.point.dy = -this.point.dy;
      this.point.r = Math.round((Math.random() * 255) | 0);
      this.point.g = Math.round((Math.random() * 255) | 0);
      this.point.b = Math.round((Math.random() * 255) | 0);
    }
  },
  drawBall() {},
  log(e) {
    if (e.touches && e.touches[0]) {
      console.log(e.type, e.touches[0].x, e.touches[0].y);
    } else {
      console.log(e.type);
    }
  },
  onUnload() {
    clearInterval(this.interval);
  }
});
```

```css title=index.tcss
.canvas-view {
  display: flex;
  justify-content: center;
}

.canvas {
  width: 305px;
  height: 305px;
  background-color: #fff;
}
```
