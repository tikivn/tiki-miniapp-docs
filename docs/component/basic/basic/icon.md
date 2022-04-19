---
title: icon
---

`icon` là component dùng để hiển thị icon có sẵn trong Tini App.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/component/basic/foundation/icons/index" />

## Thuộc tính

| Thuộc tính | Kiểu dữ liêu | Gia trị mặc định | Bắt buộc | Mô tả                                                                                                                                                                                                                                                                                                                                                                                                              |
| ---------- | ------------ | ---------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| type       | string       |                  | ✓        | Loại icon hiển thị. Nhận giá trị : [ home \|\| search \|\| calendar \|\| location \|\| setting \|\| contact \|\| chat \|\| info \|\| warning \|\| success \|\| plus \|\| minus \|\| geometry \|\| close \|\| close_circle \|\| more \|\| arrow_right \|\| arrow_left \|\| arrow_down \|\| arrow_up \|\| bookmark \|\| app_home \|\| phone_home \|\| share \|\| warning_glyph \|\| success_glyph \|\| close_glyph ] |
| size       | number       | 24               |          | Kích thước icon. Đơn vị tính pixel.                                                                                                                                                                                                                                                                                                                                                                                |
| color      | string       |                  |          | Màu của icon, sử dụng mã màu như trong css                                                                                                                                                                                                                                                                                                                                                                         |
### Bộ icon của Tini App

<img src="/img/Action_icons.png" width="600px" alt="Action icons"/>

---

<img src="/img/Content_icons.png" width="500px" alt="Content icons"/>

---

<img src="/img/Media_icons.png" width="400px" alt="Media icons"/>

---
<img src="/img/Navigation_icons.png" width="600px" alt="Navigation icons"/>

---

<img src="/img/Status_icons.png" width="250px" alt="Status icons"/>


## Sample Code

```xml title=index.txml
<view class="container">
  <view class="block">
    <text class="header">Type</text>
    <view class="list">
      <block tiki:for="{{iconType}}">
        <view class="item">
          <icon type="{{item}}" />
          <text>{{ item }}</text>
        </view>
      </block>
    </view>
  </view>

  <view class="block">
    <text class="header">Size</text>
    <view class="list">
      <block tiki:for="{{iconSize}}">
        <view class="item">
          <icon type="success_glyph" size="{{item}}" />
          <text>{{ item }}</text>
        </view>
      </block>
    </view>
  </view>

  <view class="block">
    <text class="header">Color</text>
    <view class="list">
      <block tiki:for="{{iconColor}}">
        <view class="item">
          <icon type="success_glyph" size="45" color="{{item}}" />
          <text style="color:{{item}}">{{ item }}</text>
        </view>
      </block>
    </view>
  </view>
</view>
```

```css title=index.tcss
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

.list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.header {
  font-size: 16px;
  font-weight: 600;
}

.item {
  margin: 8px;
  justify-content: center;
  align-items: center;
}

button {
  margin-top: 8px;
  width: 100%;
}
```

```js title=index.js
Page({
  data: {
    iconSize: [20, 30, 40, 50, 60],
    iconColor: ['red', 'yellow', 'blue', 'green'],
    iconType: [
      'home',
      'search',
      'calendar',
      'location',
      'setting',
      'contact',
      'chat',
      'info',
      'warning',
      'success',
      'plus',
      'minus',
      'geometry',
      'close',
      'close_circle',
      'more',
      'arrow_right',
      'arrow_left',
      'arrow_down',
      'arrow_up',
      'bookmark',
      'app_home',
      'phone_home',
      'share',
      'warning_glyph',
      'success_glyph',
      'close_glyph'
    ]
  }
});
```
