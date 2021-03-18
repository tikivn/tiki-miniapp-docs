---
order: 12
category:
  vi-VN: Thành phần nâng cao
  en-US: Advance components
title:
  vi-VN: badge
  en-US: badge
---

## Giới thiệu

Red dots, số hoặc kí tự, dùng để nhắc nhở cho user khi có update, hoặc hiển thị thông báo.

## Sử dụng

Khai báo components:
```json
{
  "defaultTitle": "Badge",
  "usingComponents": {
    "avatar": "@tikivn/mini-ui/lib/badge/index"
  }
}
```
### Sample Code:

#### Slot
Sử dụng slot="inner" để hiển thị dot bên trong một component (isWrap=true)
*index.txml*
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

*index.tcss*
```css
.component-item {
  display: flex;
  flex-direction: row;
  padding: 12px;
}
```

*Result:*
```__react
import image from '../../../theme/static/images/badge-dot.png'
ReactDOM.render(<img style={{maxWidth: 414}} alt="Badge" src={image}/>, mountNode);
```

#### Component
Implement với những component khác.(isWrap=false)

*index.txml*
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
*index.tcss*
```css

```
*Result*
```__react
import image from '../../../theme/static/images/badge-component.png'
ReactDOM.render(<img style={{maxWidth: 414}} alt="Badgehja" src={image}/>, mountNode);
```
#### Stroke
Sử dụng store để làm đậm viền của badge component.
*index.txml*
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

*Result*
```__react
import image from '../../../theme/static/images/badge-stroke.png'
ReactDOM.render(<img style={{maxWidth: 414}} alt="Badge" src={image}/>, mountNode);
```



**index.js**
```js
Page({
    data: {
        items: [
            {
                dot: false,
                text: 99,
                isWrap: false,
                intro: 'Dot only',
            },
            {
                dot: false,
                text: 100,
                overflowCount: 99,
                isWrap: false,
                intro: 'overflowCount',
            },
            {
                dot: false,
                text: 'new',
                isWrap: false,
                intro: 'with arrow',
            },
            {
                dot: false,
                text: '22222222222222',
                isWrap: false,
                intro: 'with text',
                withArrow: true,
                direction: 'middle',
            },
            {
                dot: false,
                text: 'left arrow',
                isWrap: false,
                intro: 'Left item',
                withArrow: true,
                direction: 'left',
            },
            {
                dot: false,
                text: 'right arrow',
                isWrap: false,
                intro: 'Righ arrow',
                withArrow: true,
                direction: 'right',
            },
        ],
    },
});


```

### Chi tiết

| Property      | Type                    | Default Value | Description                                                                                                |
| ------------- | ----------------------- | ------------- | ---------------------------------------------------------------------------------------------------------- |
| text          | string                  | ''            | Nội dung bên trong badge.                                                                                  |
| dot           | boolean                 | false         | Hiển thị badge như là dot. (require: dot=true)                                                             |
| overflowCount | number                  | 99            | khi giá trị text là kiểu số và lớn hơn overflowCount, thì sẽ hiển thị ..., ngược lại hiển thị giá trị text |
| withArrow     | boolean                 | false         | hiển thị arrow cho badge                                                                                   |
| direction     | 'left','middle','right' | ''            | điều hướng arrow (left,middle,right)                                                                       |
| stroke        | boolean                 | false         | hiển thị stroke cho badge                                                                                  |

```__react
import image from '../../../theme/static/images/badge-full.png'
ReactDOM.render(<img style={{maxWidth: 414}} alt="Button" src={image}/>, mountNode);
```
