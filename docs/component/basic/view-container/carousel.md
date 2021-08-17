---
title: carousel
---

## Giới thiệu

`carousel` là một container componet hỗ trợ các hiệu ứng lướt cho các phần tử bên trong. Các thành phần bên trong `carousel` cần được bọc bởi `carousel-item`

## Sử dụng

### Sample Code

**index.txml**

```xml
<view>
  <carousel onChange="onChange">
    <carousel-item>
      <view class="item red">
        <text>1</text>
      </view>
    </carousel-item>
    <carousel-item>
      <view class="item red">
        <text>2</text>
      </view>
    </carousel-item>
    <carousel-item>
      <view class="item red">
        <text>3</text>
      </view>
    </carousel-item>
  </carousel>
</view>
```

**index.js**

```js
Page({
  data: {},
  onChange(e) {
    console.log('onChange: ', e);
  }
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

| Property               | Type     | Default Value | Description                                                                                                                  |
| ---------------------- | -------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| indicator-dots         | boolean  | false         | Cho phép hiển thị dot                                                                                                        |
| indicator-color        | string   | gray-20       | Màu của dot                                                                                                                  |
| indicator-active-color | string   | brand         | Màu của dot đang được active                                                                                                 |
| active-class           | string   |               | Class được thêm vào `carousel-item` khi item đó được chọn                                                                    |
| autoplay               | boolean  | false         | Cho phép autoplay                                                                                                            |
| current                | number   | 0             | Chỉ được item được active với giá trị truyền vào là vị trí của item đó (bắt đầu từ 0)                                        |
| duration               | number   | 500           | Thời gian để thực hiện hiệu ứng đổi item                                                                                     |
| interval               | number   | 5000          | Thời gian để một item tự chuyển đổi qua item khác                                                                            |
| vertical               | number   | false         | Hiển thị carousel theo chiều dọc, cần khai báo chiều cao cho `carousel` thông qua thuộc tính `height` ở `style` hoặc `class` |
| circular               | boolean  | false         | Cho phép `carousel` thực hiện lặp vô tận                                                                                     |
| disable-touch          | boolean  | false         | Cho phép user có thể touch được vào carousel để lướt hay không                                                               |
| spacing                | number   | 0             | Khoảng cách giữa các item (đơn vị px). Chỉ hỗ trợ version >= 1.74.23                                                         |
| onChange               | function |               | Sự kiện được gọi sau khi item khác được active, `event.detail = { current }`                                                 |
