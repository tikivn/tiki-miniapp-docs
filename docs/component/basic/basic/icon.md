---
title: icon
---

## Giới thiệu

icon

## Sử dụng

### Sample Code

**index.txml**

```xml
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

**index.tcss**

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

**index.js**

```js
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

### Chi tiết

| Property | Type   | Default Value | Required | Description                                                                                                                                                                                                                                                                                                       |
| -------- | ------ | ------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type     | string |               | Có       | Loại icon hiển thị. Giá trị hợp lệ bao gồm: `home, search, calendar, location, setting, contact, chat, info, warning, success, plus, minus, geometry, close, close_circle, more, arrow_right, arrow_left, arrow_down, arrow_up, bookmark, app_home, phone_home, share, warning_glyph, success_glyph, close_glyph` |
| size     | number | 24            | Không    | Kích thước của icon                                                                                                                                                                                                                                                                                               |
| color    | string |               | Không    | Màu của icon, sử dụng mã màu như trong css                                                                                                                                                                                                                                                                        |
