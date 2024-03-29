---
title: picker
sidebar_custom_props:
  description: Component cung cấp một vùng chọn dạng scroll được hiển thị bên trong popup
---

`picker` tương tự với `picker-view`, cho phép người dùng chọn một phần tử trong một mảng dưới dạng scroll, tuy nhiên nó sẽ được hiển thị bên trong popup ở dưới page.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/component/basic/picker/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/component/basic/picker/index" />

## Thuộc tính

| Thuộc tính           | Kiểu dữ liệu             | Mô tả                                                                                                                   |
| -------------------- | ------------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| title                | string                   | Title của picker                                                                                                        |
| range                | array of strings/objects | Mảng các phần tử hiển thị trong picker, nếu bạn khai báo một mảng các đối tượng, bạn cần khai báo thêm `range-key`      |
| confirm-button-text  | string                   | Nội dung của button dưới footer; mặc định là `OK`. Chỉ support framework version từ 1.73.5 trở lên                      |
| confirm-button-class | string                   | Class của button dưới footer. Chỉ support framework version từ 1.73.5 trở lên                                           |
| rang-key             | string                   | Chỉ định key nào trong object sẽ được hiển thị, được dùng khi range là mảng đối tượng                                   |
| value                | string                   | Chỉ định index nào được chọn, bắt đầu từ 0                                                                              |
| onChange             | event                    | Sự kiện được gọi khi giá trị bị thay đổi, `event.detail = { value: value }`, trong đó value là index của item được chọn |
| disabled             | boolean                  | Nếu giá trị là `true`, khi bạn bấm vào `picker` thì sẽ không hiển thị                                                   |

## Sample Code

```json title=index.json
{
  "defaultTitle": "picker",
  "usingComponents": {
    "block-header": "components/block-header/index"
  }
}
```

```xml titel=index.txml
<block-header title="Usage" description="Picker" />

<view>
  <view class="block-content">
    <view class="component-item">
      <picker range="{{array}}" value="{{arrayIndex}}" onChange="onArrayChange">
        <view class="picker">
          Array: {{arrayIndex}}
        </view>
      </picker>
    </view>
    <view class="component-item">
      <picker title="Array Object" range="{{objecttArray}}" range-key="name" value="{{objecttArrayIndex}}" onChange="onObjectArrayChange">
        <view class="picker">
          Array Object: {{objecttArrayIndex}}
        </view>
      </picker>
    </view>
  </view>
</view>
/view>
```

```js title=index.js
Page({
  data: {
    array: Array.from(Array(10).keys()),
    objecttArray: Array.from(Array(10).keys()).map((i) => ({
      id: i,
      name: `Array ${i}`
    })),
    arrayIndex: 0,
    objecttArrayIndex: 0
  },
  onArrayChange(e) {
    console.log('array', e.detail.value);
    this.setData({
      arrayIndex: e.detail.value
    });
  },
  onObjectArrayChange(e) {
    console.log('arrayObject', e.detail.value);
    this.setData({
      objecttArrayIndex: e.detail.value
    });
  }
});
```

```css title=index.tcss
.picker {
  width: 100%;
}
```
