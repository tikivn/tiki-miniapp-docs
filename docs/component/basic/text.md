---
order: 11
category:
  vi-VN: Thành phần cơ bản
  en-US: Basic components
title:
  vi-VN: text
  en-US: text
---

## Giới thiệu

text

## Sử dụng

### Sample Code

**index.txml**

```xml
<view class="container">
  <view class="block">
    <text>{{ text }}</text>
    <button onTap="add">Add line</button>
    <button type="secondary" onTap="remove">
      Remove line
    </button>
  </view>
  <view class="block">
    <text number-of-lines="{{2}}">{{ longText }}</text>
  </view>
</view>
```

```css
.container {
  min-height: 100%;
  background-color: var(--gray20);
  padding: 16px;
}

.block {
  background-color: white;
  margin: 8px 0;
  padding: 16px;
  border-radius: var(--border-radius-rounded-4px);
}

button {
  margin-top: 8px;
  width: 100%;
}
```

```js
const text = 'This is first line\nThis is second line';
const extraLine = [];
const longText =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

Page({
  data: {
    text,
    longText,
  },
  add: function() {
    extraLine.push('Other line');
    this.setData({
      text: text + '\n' + extraLine.join('\n'),
    });
  },
  remove: function() {
    if (extraLine.length > 0) {
      extraLine.pop();
      this.setData({
        text: text + '\n' + extraLine.join('\n'),
      });
    }
  },
});
```

### Chi tiết

| Property        | Type    | Default Value | Description                                                                                    |
| --------------- | ------- | ------------- | ---------------------------------------------------------------------------------------------- |
| selectable      | boolean | false         | Cho phép nội dung có thể được chọn hay không, nếu là true thì có thể chọn và sao chép nội dung |
| number-of-lines | number  | null          | Số dòng tối đa mà nội dung trong text được hiển thị, nếu quá số dòng sẽ hiển thị ... ở cuối    |

```__react
import image from '../../../theme/static/images/text-component.png'
ReactDOM.render(<img style={{maxWidth: 414}} alt="Text" src={image}/>, mountNode);
```
