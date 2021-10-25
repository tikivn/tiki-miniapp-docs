---
title: rich-text
---

- Thẻ rich-text dùng để hiển thị nội dung cho html dưới dạng các node
- Chỉ hỗ trợ từ version 1.81.8 trở lên

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/component/basic/rich-text/index" />

## Thuộc tính

| Thuộc tính | Kiểu dữ liệu  | Giá trị mặc định | Bắt buộc | Mô tả                                                                                                                                                                                                                                                                                                           |
| ---------- | ------------- | ---------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| nodes      | array of node | []               | ✓        | Mảng các node để hiển thị, bạn có thể xem thông tin các thành phần node bên dưới.<br />**Lưu ý**: rich-text chỉ hỗ trợ hiển thị html dưới dạng node, nếu bạn có một html string và muốn convert qua nodes, bạn có thể cài đặt package [@tiki.vn/mini-html-parser2](https://github.com/tikivn/mini-html-parser). |

Node hỗ trợ hai loại: [element node](#element-node) và [text node](#text-node). Mặc định là element node, với tên các node chính là các thẻ của HTML

### Element Node

Khi bạn khai báo **type=node**

| Thuộc tính | Kiểu dữ liệu | Giá trị mặc định | Bắt buộc | Mô tả                                                                   |
| ---------- | ------------ | ---------------- | -------- | ----------------------------------------------------------------------- |
| name       | string       | node             | ✓        | Tên của node, sử dụng tên của các thẻ HTML. Chỉ hỗ trợ một số thẻ HTML. |
| attrs      | object       | node             |          | Chứa các thuộc tính của thẻ html. Chỉ hỗ trợ một vài thuộc tính HTML.   |
| children   | string       | node             |          | Mảng các node con. Cấu trúc tương tự như nodes.                         |

### Text Node

Khi bạn khai báo **type=text**

| Thuộc tính | Kiểu dữ liệu | Giá trị mặc định | Bắt buộc | Mô tả             |
| ---------- | ------------ | ---------------- | -------- | ----------------- |
| text       | string       |                  | ✓        | Nội dụng của node |

### Danh sách các thẻ HTML và thuộc tính được hỗ trợ

- Mặc định hỗ trợ thuộc tính `class` và `style` cho tất cả các thẻ, không hỗ trợ `id`
- Có thể để các thẻ không hỗ trợ vào `attrs`, tuy nhiên nó sẽ không được hiển thị trong rich-text

| Tên node   | Các thuộc tính                  |
| ---------- | ------------------------------- |
| a          | -                               |
| abbr       | -                               |
| address    | -                               |
| article    | -                               |
| aside      | -                               |
| b          | -                               |
| bdr        | -                               |
| bdo        | dir                             |
| big        | -                               |
| blockquote | -                               |
| br         | -                               |
| caption    | -                               |
| center     | -                               |
| cite       | -                               |
| code       | -                               |
| col        | span, width                     |
| colgroup   | span, width                     |
| dd         | -                               |
| del        | -                               |
| div        | -                               |
| dl         | -                               |
| dt         | -                               |
| em         | -                               |
| fieldset   | -                               |
| font       | -                               |
| footer     | -                               |
| h1         | -                               |
| h2         | -                               |
| h3         | -                               |
| h4         | -                               |
| h5         | -                               |
| h6         | -                               |
| header     | -                               |
| hr         | -                               |
| i          | -                               |
| img        | alt, src, height, width         |
| ins        | -                               |
| label      | -                               |
| legend     | -                               |
| li         | -                               |
| mark       | -                               |
| nav        | -                               |
| ol         | start, type                     |
| p          | -                               |
| pre        | -                               |
| q          | -                               |
| rt         | -                               |
| ruby       | -                               |
| s          | -                               |
| section    | -                               |
| small      | -                               |
| span       | -                               |
| strong     | -                               |
| sub        | -                               |
| sup        | -                               |
| table      | width                           |
| tbody      | -                               |
| td         | colspan, height, rowspan, width |
| tfoot      | -                               |
| th         | colspan, height, rowspan, width |
| thead      | -                               |
| tr         | -                               |
| tt         | -                               |
| u          | -                               |
| ul         | -                               |

## Sample code

```xml title="Mini App Demo - pages/component/basic/rich-text/index.txml"
<block-header title="Usage" description="Rich text"/>
<view class="container">
  <view class="block">
    <view>Nodes:</view>
    <text class="nodes">
      {{nodesText}}
    </text>

    <view class="mt-small">Result:</view>
    <rich-text nodes="{{nodes}}" />
  </view>
</view>
```

```js title="Mini App Demo - pages/component/basic/rich-text/index.js"
const nodes = [
  {
    name: 'div',
    attrs: {
      class: 'my-class',
      style: 'color: red;'
    },
    children: [
      {
        type: 'text',
        text: 'Hello rich-text.'
      }
    ]
  }
];

Page({
  data: {
    nodes,
    nodesText: JSON.stringify(nodes, null, 2)
  }
});
```
