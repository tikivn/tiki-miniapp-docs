---
title: Giới thiệu về TXML

description: ngôn ngữ TXML để xây dựng UI cho Tiki mini app
---

TXML là một ngôn ngữ được thiết kế để xây dựng UI cho một Mini App.
Cú pháp của TXML có thể chia thành 5 phần:

- [Gán dữ liệu vào UI elements](/docs/framework/txml/data-binding)
- [Render có điều kiện](/docs/framework/txml/conditional-rendering)
- [Render list](/docs/framework/txml/list-rendering)
- [Template](/docs/framework/txml/template)
- [Referencing](/docs/framework/txml/referencing)

Sau đây là một ví dụ về TXML

```xml
<!-- pages/index/index.txml -->
<view tiki:for="{{items}}"> {{item}} </view>
<view tiki:if="{{view == 'WEBVIEW'}}"> WEBVIEW </view>
<view tiki:elif="{{view == 'APP'}}"> APP </view>
<view tiki:else> Tini App</view>
<view onTap="add"> {{count}} </view>
```

Và đây là đoạn code JS tương ứng

```js
// pages/index/index.js
Page({
  data: {
    items: [1, 2, 3, 4, 5, 6, 7],
    view: 'Tiki Mini App',
    count: 1
  },
  add(e) {
    this.setData({
      count: this.data.count + 1
    });
  }
});
```

và file `.tcss` tương ứng

```css
/* pages/index/index.tcss */
view {
  padding-left: 10px;
}
```

Với đoạn code trên, chúng ta sẽ có được UI element như sau
