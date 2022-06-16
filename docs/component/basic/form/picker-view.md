---
title: picker-view
---

`picker-view` hiển thị một vùng chọn dạng scroll trong page. Các thành phần con bên trong `picker-view` cần được bọc bởi thẻ `picker-view-column`. Giá trị của `picker-view` được thiết lập hoặc lấy từ `index` của các phần tử trong mảng

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/component/basic/picker-view/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/component/basic/picker-view/index" />

## Thuộc tính

| Thuộc tính      | Kiểu dữ liệu | Mô tả                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| value           | number array | Chỉ định giá trị được chọn trong các `picker-view-column` (bắt đầu từ 0), số lượng phần tử trong mảng nên trùng với số `picker-view-column` đang hiển thị. Ví dụ bản có 2 `picker-view-column` trong `picker-view`, bạn muốn ở `picker-view-column` đầu tiên chọn index thứ 1, ở `picker-view-column` thứ 2 chọn index đầu tiên, bạn khai báo `value="{{[1, 0]}}"`.<br /> Nếu bạn không khai báo thì mặc định sẽ là index đầu tiên được chọn |
| indicator-style | string       | Inline style cho indicator, là phần nằm giữa chỗ index đang được chọn                                                                                                                                                                                                                                                                                                                                                                        |
| indicator-class | string       | Class name cho indicator                                                                                                                                                                                                                                                                                                                                                                                                                     |
| mask-style      | string       | Inline style cho mask                                                                                                                                                                                                                                                                                                                                                                                                                        |
| mask-class      | string       | Class name cho mask                                                                                                                                                                                                                                                                                                                                                                                                                          |
| onChange        | event        | Sự kiện được gọi khi giá trị bị thay đổi, `event.detail = { value: value }`, trong đó value là mảng các index đang được chọn trong `picker-column`                                                                                                                                                                                                                                                                                           |

## Sample Code

```json title=index.json
{
  "defaultTitle": "picker-view",
  "usingComponents": {
    "block-header": "components/block-header/index"
  }
}
```

```xml title=index.txml
<block-header title="Usage" description="Picker" />

<view>
  <view class="block-content">
    <picker-view
      value="{{value}}"
      onChange="onChange">
      <picker-view-column>
        <view>Tháng 1</view>
        <view>Tháng 2</view>
        <view>Tháng 3</view>
        <view>Tháng 4</view>
        <view>Tháng 5</view>
        <view>Tháng 6</view>
        <view>Tháng 7</view>
        <view>Tháng 8</view>
        <view>Tháng 9</view>
        <view>Tháng 10</view>
        <view>Tháng 11</view>
        <view>Tháng 12</view>
      </picker-view-column>
      <picker-view-column>
        <view>Năm 2021</view>
        <view>Năm 2022</view>
        <view>Năm 2023</view>
        <view>Năm 2024</view>
      </picker-view-column>
    </picker-view>
  </view>
</view>
```

```js title=index.js
Page({
  data: {},
  onChange(e) {
    console.log(e.detail.value);
    this.setData({
      value: e.detail.value
    });
  }
});
```
