---
title: rich-text
---

- Thẻ rich-text dùng để hiển thị nội dung cho HTML dưới dạng các node.
- Thẻ rich-text không hỗ trợ render toàn bộ các thẻ HTML, mà chỉ hỗ trợ một số thẻ HTML và một số thuộc tính.
- Một số css selector theo tag name sẽ không được hỗ trợ (ví dụ `div { color: red }`), do đó bạn nên sử dụng inline style trong trường hợp này

***Khả dụng***: hỗ trợ từ version 1.81.8 trở lên.

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
    <rich-text nodes="{{nodes}}" />

    <button class="mt-small" size="small" onTap="onShowNode">View nodes</button>
    <view class="nodes mt-small" tiki:if="{{showNodesText}}">
      {{nodesText}}
    </view>
  </view>
  <view class="block">
    <rich-text nodes="{{htmlNodes}}" />

    <button class="mt-small" size="small" onTap="onShowHtmlNode">View nodes</button>
    <view class="nodes mt-small" tiki:if="{{showHtmlNodesText}}">
      {{htmlNodesText}}
    </view>
  </view>
</view>
```

```js title="Mini App Demo - pages/component/basic/rich-text/index.js"
import parse from '@tiki.vn/mini-html-parser2';

const html = `<div class="rt-container">
  <img 
    style="width: 200px; height: 200px" 
    class="rt-image"
    src="https://salt.tikicdn.com/cache/w400/ts/product/5e/18/24/2a6154ba08df6ce6161c13f4303fa19e.jpg" alt="Product" />
  <h3 style="margin: 8px 0;">Cây cam ngọt của tôi</h3>
  <table class="rt-table">
    <tr class="even">
      <td class="col">Danh mục</td>
      <td class="col">Tiểu thuyết</td>
    </tr>
    <tr>
      <td class="col">Cung cấp bởi</td>
      <td class="col">HaAnBooks</td>
    </tr>
    <tr class="even">
      <td class="col">Công ty phát hành</td>
      <td class="col">Nhã Nam </td>
    </tr>
    <tr>
      <td class="col">Kích thước</td>
      <td class="col">14 x 20.5 cm</td>
    </tr>
  </table>
</div>`;

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
        text: 'Simple rich-text.'
      }
    ]
  }
];

Page({
  data: {
    nodes,
    nodesText: JSON.stringify(nodes, null, 2),
    htmlNodes: [],
    htmlNodesText: '',
    showNodesText: false,
    showHtmlNodesText: false
  },
  onLoad() {
    parse(html, (err, htmlNodes) => {
      if (!err) {
        this.setData({
          htmlNodes,
          htmlNodesText: JSON.stringify(htmlNodes, null, 2)
        });
      }
    });
  },
  onShowNode() {
    this.setData({ showNodesText: !this.data.showNodesText });
  },
  onShowHtmlNode() {
    this.setData({
      showHtmlNodesText: !this.data.showHtmlNodesText
    });
  }
});
```

```css title="Mini App Demo - pages/component/basic/rich-text/index.tcss"
.rt-container {
  display: flex;
  flex-direction: column;
}

.rt-container .rt-image {
  margin: 0 auto;
}

.even {
  background-color: var(--gray20);
}

.col {
  padding: 4px;
  font-size: 12px;
}
```
