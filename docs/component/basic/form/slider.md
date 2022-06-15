---
title: slider
---

`slider` component cho phép bạn chọn giá trị bằng việc kéo thả trong một phạm vi nhất định.

**_Khả dụng_**: Được hỗ trợ từ running version `1.73.13` trở lên.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/component/basic/slider/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/component/basic/slider/index" />

## Thuộc tính

| Thuộc tính       | Kiểu dữ liệu | Giá trị mặc định    | Mô tả                                                                                                                  |
| ---------------- | ------------ | ------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| name             | string       |                     | Khai báo `name` khi được sử dụng trong [form](form), được sử dụng để lấy `value` cho `form`                            |
| value            | number       | 0                   | Giá trị hiện tại của slider                                                                                            |
| min              | number       | 0                   | Giá trị nhỏ nhất của slider                                                                                            |
| max              | number       | 100                 | Giá trị lớn nhất của slider                                                                                            |
| step             | number       | 1                   | Chỉ định mỗi lần tăng/giảm bao nhiêu đơn vị, `step` phải lớn hơn 0 và là số được chia hết bởi `max` và `min`           |
| disabled         | boolean      | false               | Disable slider                                                                                                         |
| show-tooltip     | boolean      | true                | Hiển thị tooltip hay không                                                                                             |
| active-color     | string       | #1a94ff             | Màu của thanh giá trị đang được active                                                                                 |
| background-color | string       | rgba(0, 0, 0 , 0.1) | Màu của nền của slider                                                                                                 |
| handle-color     | string       | #ffffff             | Màu của nền của vòng tròn toggle                                                                                       |
| track-size       | number       | 8                   | Kích thước của thanh đang được active                                                                                  |
| handle-size      | number       | 24                  | Kích thước của vòng tròn toggle                                                                                        |
| rail-size        | number       | 4                   | Kích thước của vòng thanh slider                                                                                       |
| controlled       | boolean      | false               | Khi giá trị là `true`, giá trị của slider sẽ được điều khiển hoàn toàn thông qua hàm `setData` trong file `js`         |
| onChange         | event        |                     | Sự kiện được gọi khi giá trị bị thay đổi và người dùng đã không còn chạm vào slider, `event.detail = { value: value }` |
| onChanging       | event        |                     | Sự kiện được gọi khi giá trị bị thay đổi và người dùng vẫn còn chạm vào slider, `event.detail = { value: value }`      |

## Sample Code

Một số component được sử dụng trong source [API Demo](https://github.com/tikivn/miniapp-getting-started/tree/main/api-demo).

```json title=index.json
{
  "defaultTitle": "slider",
  "usingComponents": {
    "list-item": "@tiki.vn/tini-ui/es/list/list-item/index",
    "block-header": "components/block-header/index",
    "block-variant": "components/block-variant/index"
  }
}
```

```xml title=index.txml
<view class="page">
  <block-header title="Usage"
    description="Slider allow users to select option(s) within a range." />

  <block-variant header="Variants" title="State" description="Default, Hover, Focus, Active and Disabled.">
    <view class="item">
      <slider value="{{value}}" onChange="onChange" onChanging="onChanging" />
    </view>
    <view class="item">
      <slider disabled value="{{20}}" />
    </view>
  </block-variant>
</view>
```

```js title=index.js
Page({
  data: {
    value: 0
  },
  onChange(e) {
    console.log('onChange: ', e);
  },
  onChanging(e) {
    console.log('onChanging: ', e);
  }
});
```

```css title=index.tcss
.item {
  margin-top: 32px;
}
```
