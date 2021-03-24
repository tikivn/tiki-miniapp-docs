---
---
order: 21
category:
  vi-VN: View containers
  en-US: View containers
title:
  vi-VN: scroll-view
  en-US: scroll-view
---

### Giới thiệu

`scroll-view` là một container component có thể scroll được. Thanh scroll ngoài cùng không ảnh hưởng gì đến thanh scroll của `scroll-view`.

### Lưu ý

- Bạn cần thiết lập thuộc tính height cho `scroll-view` thông qua [inline-style](https://miniapp.tiki.vn/docs/framework/tcss/tcss-introduction#Inline-style) hoặc [tcss](https://miniapp.tiki.vn/docs/framework/tcss/tcss-introduction)
- `scroll-view` không hỗ trợ cả `scroll-x` và `scroll-y` cùng lúc, khi cả 2 thuộc tính này là `false`, thanh scroll sẽ không hoạt động
- `scroll-view` chỉ hỗ trợ bạn ẩn hoặc hiện thanh scroll, không có tùy chỉnh cho việc pull-down refresh hoặc custom thanh scroll
- Để dùng thuộc tính `scroll-into-view` bạn cần để các component vào bên trong thẻ [view](https://miniapp.tiki.vn/docs/component/view-container/view) và khai báo id cho nó
- Không nên dùng dùng `onScroll` để thiết lập giá trị của `scroll-top` hoặc `scroll-left` qua biến trong data, có thể dẫn đến trường hợp thanh scroll bị giật

## Sử dụng

### Sample Code

**index.txml**

```xml
<view>
  <block-header title="Usage" description="Scroll view component" />

  <view class="block-content">
    <view class="page-section-title">vertical scroll</view>
    <scroll-view
      scroll-y="{{true}}"
      style="height: 200px;"
      onScrollToUpper="upper"
      onScrollToLower="lower"
      onScroll="scroll"
      scroll-into-view="{{toView}}"
      scroll-top="{{scrollTop}}">
      <view id="blue" class="scroll-view-item bc_blue"></view>
      <view id="red"  class="scroll-view-item bc_red"></view>
      <view id="yellow" class="scroll-view-item bc_yellow"></view>
      <view id="green" class="scroll-view-item bc_green"></view>
    </scroll-view>
  </view>
  <view class="taps">
    <view class="tap" onTap="tap">next</view>
    <view class="tap" onTap="tapMove">move</view>
    <view class="tap" onTap="scrollToTop">scrollToTop</view>
  </view>
</view>
```

**index.js**

```js
const order = ['blue', 'red', 'green', 'yellow'];

Page({
  data: {
    toView: 'red',
    scrollTop: 100,
  },
  onLoad() {
    this.scroll = debounce(this.scroll.bind(this), 100);
  },
  upper(e) {
    console.log('upper', e);
  },
  lower(e) {
    console.log('lower', e);
  },
  scroll(e) {
    console.log('scroll', e);
    // this.setData({
    //   scrollTop: e.detail.scrollTop,
    // });
  },
  scrollToTop(e) {
    console.log(e);
    this.setData({
      scrollTop: 0,
    });
  },
  tap() {
    for (let i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        const next = (i + 1) % order.length;
        this.setData({
          toView: order[next],
          scrollTop: next * 200,
        });
        break;
      }
    }
  },
  tapMove() {
    this.setData({
      scrollTop: this.data.scrollTop + 10,
    });
  },
});
```

**index.tcss**

```css
.page-section-title {
  padding: 16rpx 32rpx;
}

.tap {
  flex: 1;
  height: 84rpx;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #49a9ee;
}

.bc_blue {
  background-color: #49a9ee;
}

.bc_red {
  background-color: #f04134;
}

.bc_yellow {
  background-color: #ffbf00;
}

.bc_green {
  background-color: #00a854;
}

.scroll-view-item {
  height: 200px;
}

.taps {
  display: flex;
  flex-direction: row;
}
```

### Chi tiết

| Property                          | Type    | Default Value | Description                                                                                                                                                                                           |
| --------------------------------- | ------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| class                             | string  |               | Tên của class                                                                                                                                                                                         |
| style                             | string  |               | Inline style                                                                                                                                                                                          |
| scroll-x                          | boolean | false         | Cho phép scroll theo chiều ngang                                                                                                                                                                      |
| scroll-y                          | boolean | false         | Cho phép scroll theo chiều dọc                                                                                                                                                                        |
| scroll-top                        | number  | 0             | Giá trị khởi tạo vị trí của thanh scroll dọc                                                                                                                                                          |
| scroll-left                       | number  | 0             | Giá trị khởi tạo vị trí của thanh scroll ngang                                                                                                                                                        |
| scroll-into-view                  | string  |               | Scroll tới phần tử con với `id` bằng với giá trị của `scroll-into-view`. Giá trị của `scroll-into-view` được ưu tiên hơn `scroll-top` và `scroll-left`. `scroll-into-view` chỉ áp dụng cho thẻ `view` |
| scroll-with-animation             | boolean | false         | Sử dụng animation khi scroll                                                                                                                                                                          |
| enable-back-to-top                | boolean | false         | Khi bấm vào thanh status bar trên iOS thì thanh scroll sẽ tự động được cuộn lên đầu. Chỉ hỗ trợ iOS và scroll theo chiều dọc                                                                          |
| shows-vertical-scroll-indicator   | boolean | true          | Cho phép hiển thị thanh scroll dọc                                                                                                                                                                    |
| shows-horizontal-scroll-indicator | boolean | true          | Cho phép hiển thị thanh scroll ngang                                                                                                                                                                  |
| onScrollToUpper                   | event   |               | Sự kiện được gọi khi thanh scroll tới vị trí trên đầu hoặc ngoài cùng bên trái của `scroll-view`                                                                                                      |
| onScrollToLower                   | event   |               | Sự kiện được gọi khi thanh scroll tới vị trí dưới cùng hoặc ngoài cùng bên phải của `scroll-view`                                                                                                     |
| onScroll                          | event   |               | Sự kiện được gọi khi đang scroll, `event.detail = { scrollLeft, scrollTop, scrollHeight, scrollWidth }`                                                                                               |
| onTouchStart                      | event   |               | Sự kiện được gọi khi bắt đầu chạm vào `scroll-view`. [Xem thêm](https://miniapp.tiki.vn/docs/framework/event/event-object#TouchEvent-touch-event-object)                                              |
| onTouchmove                       | event   |               | Sự kiện được gọi khi bạn di chuyển trong lúc chạm vào `scroll-view`. [Xem thêm](https://miniapp.tiki.vn/docs/framework/event/event-object#TouchEvent-touch-event-object)                              |
| onTouchEnd                        | event   |               | Sự kiện được gọi khi dừng chạm vào `scroll-view`. [Xem thêm](https://miniapp.tiki.vn/docs/framework/event/event-object#TouchEvent-touch-event-object)                                                 |
