---
title: badge
sidebar_custom_props:
  description: Component Tini UI - Hiển thị red dot, số hoặc kí tự, dùng để nhắc nhở cho user khi có update, hoặc hiển thị thông báo
---

Hiển thị red dot, số hoặc kí tự, dùng để nhắc nhở cho user khi có update, hoặc hiển thị thông báo.

:::warning Cảnh báo

Component đang được cập nhật. Vẫn chưa sẵn sàng để sử dụng.

:::

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/component/advance/navigation/badge/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/component/advance/navigation/badge/index" />

## Thuộc tính

| Thuộc tính    | Kiểu dữ liệu            | Giá trị mặc định | Mô tả                                                                                                      |
| ------------- | ----------------------- | ---------------- | ---------------------------------------------------------------------------------------------------------- |
| text          | string                  | ''               | Nội dung bên trong badge.                                                                                  |
| dot           | boolean                 | false            | Hiển thị badge như là dot. (require: dot=true)                                                             |
| overflowCount | number                  | 99               | khi giá trị text là kiểu số và lớn hơn overflowCount, thì sẽ hiển thị ..., ngược lại hiển thị giá trị text |
| withArrow     | boolean                 | false            | hiển thị arrow cho badge                                                                                   |
| direction     | 'left','middle','right' | ''               | điều hướng arrow (left,middle,right)                                                                       |
| stroke        | boolean                 | false            | hiển thị stroke cho badge                                                                                  |

## Sử dụng

Khai báo components:

```json
{
  "defaultTitle": "Badge",
  "usingComponents": {
    "avatar": "@tiki.vn/tini-ui/es/badge/index"
  }
}
```

### Sample Code:

#### Slot

Sử dụng slot="inner" để hiển thị dot bên trong một component (isWrap=true)
_index.txml_

```xml
<view class="component-item">
    <badge text="" dot="true" isWrap="true">
        <view slot="inner" style="height: 24px; width: 24px; background-color: #ddd;"></view>
    </badge>
    <text style="margin-left: 12px">Dot only</text>

    <badge text="10" dot="true">
        <view slot="inner" style="height: 24px; width: 24px; background-color: #ddd;"></view>
    </badge>
    <text style="margin-left: 12px">Badge with text</text>
</view>

```

```css title=index.tcss
.component-item {
  display: flex;
  flex-direction: row;
  padding: 12px;
}
```

_Result:_

<img alt="Badge" src="/img/badge-dot.png"/>

#### Component

Implement với những component khác.(isWrap=false)

_index.txml_

```xml
<view">
    <view class="component-item between">
        <text>{{item.intro}}</text>
        <badge
            isWrap="false"
            text="{{item.text}}"
            dot="{{item.dot}}"
            overflowCount="{{item.overflowCount}}"
            withArrow="{{item.withArrow}}"
            direction="{{item.direction}}" />
    </view>
</view>

```

```css title=index.tcss

```

_Result_

<img alt="Badge" src="/img/badge-component.png"/>

#### Stroke

Sử dụng store để làm đậm viền của badge component.
_index.txml_

```xml
<view">
    <text class="title mb-8">3. Stroke</text>
    <text class="heading">Use as a wrapper, it is used to render the internal area</text>
    <view style="
             display: flex;
             flex-direction:row;
             justify-content: space-between;
             padding: 10px;
             background-color: #333;
             color: #f8f8f8;">
        <text style="color:white">Badge component with stroke</text>
        <badge text="Miniapp demo" stroke="{{true}}" withArrow="{{true}}" direction="left" />
    </view>
</view>

```

_Result_

<img alt="Badge" src="/img/badge-stroke.png"/>

**index.js**

```js
Page({
  data: {
    items: [
      {
        dot: false,
        text: 99,
        isWrap: false,
        intro: 'Dot only'
      },
      {
        dot: false,
        text: 100,
        overflowCount: 99,
        isWrap: false,
        intro: 'overflowCount'
      },
      {
        dot: false,
        text: 'new',
        isWrap: false,
        intro: 'with arrow'
      },
      {
        dot: false,
        text: '22222222222222',
        isWrap: false,
        intro: 'with text',
        withArrow: true,
        direction: 'middle'
      },
      {
        dot: false,
        text: 'left arrow',
        isWrap: false,
        intro: 'Left item',
        withArrow: true,
        direction: 'left'
      },
      {
        dot: false,
        text: 'right arrow',
        isWrap: false,
        intro: 'Righ arrow',
        withArrow: true,
        direction: 'right'
      }
    ]
  }
});
```

<img alt="Badge" src="/img/badge-full.png"/>
