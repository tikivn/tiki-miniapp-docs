---
---
order: 22
category:
  vi-VN: View containers
  en-US: View containers
title:
  vi-VN: carousel
  en-US: carousel
---

### Giới thiệu

`carousel` là một container componet hỗ trợ các hiệu ứng lướt cho các phần tử bên trong.

## Sử dụng

### Sample Code

**index.txml**

```xml
<view>
  <carousel onChange="onChange">
    <view class="item red">
      <text>1</text>
    </view>
    <view class="item green">
      <text>2</text>
    </view>
    <view class="item yellow">
      <text>3</text>
    </view>
  </carousel>
</view>
```

**index.js**

```js
Page({
  data: {},
  onChange(e) {
    console.log('onChange :>> ', e);
  },
});
```

**index.tcss**

```css
.red {
  background-color: red;
}

.green {
  background-color: green;
}

.yellow {
  background-color: yellow;
}

.item {
  height: 200px;
}
```

### Chi tiết

| Property               | Type     | Default Value | Description                                                                  |
| ---------------------- | -------- | ------------- | ---------------------------------------------------------------------------- |
| indicator-dots         | boolean  | true          | Cho phép hiển thị dot                                                        |
| indicator-color        | string   | gray-20       | Màu của dot                                                                  |
| indicator-active-color | string   | brand         | Màu của dot đang được active                                                 |
| autoplay               | boolean  | true          | Cho phép autoplay                                                            |
| current                | number   | 0             | Chỉ được item được chọn theo vị trí của nó                                   |
| duration               | number   | 500           | Thời gian để thực hiện hiệu ứng đổi item                                     |
| interval               | number   | 5000          | Thời gian để một item tự chuyển đổi qua item khác                            |
| cell-spacing           | number   | 4             | Khoảng cách giữa các item                                                    |
| circular               | boolean  | true          | Cho phép `carousel` thực hiện lặp vô tận                                     |
| swipeable              | boolean  | true          | Cho phép `carousel` swipe để đổi item khác                                   |
| width                  | number   |               | Kích thước của `carousel`, mặc định sẽ là chiều rộng của thiết bị            |
| slide-width            | number   |               | Kích thước của `carousel item`, mặc định sẽ là chiều rộng của thiết bị       |
| onChange               | function |               | Sự kiện được gọi sau khi item khác được active, `event.detail = { current }` |

### Lưu ý

- Các component bên trong `carousel` nên là thẻ [view](https://miniapp.tiki.vn/docs/component/view-container/view)
- Bạn nên khai báo `cell-spacing` với `circular=true` và kèm thêm `width` và `slide-width` để tránh layout bị vỡ
