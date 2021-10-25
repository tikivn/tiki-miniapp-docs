---
title: radio
---

## Giới thiệu

`radio` dùng để chọn một giá trị. Để nhóm nhiều `radio` lại với nhau, bạn cần sử dụng [radio-group](/docs/component/form/radio-group)

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/component/advance/form/radio-button/index" />

## Sử dụng

### Sample Code

**index.txml**

```xml
<view class="container">
  <view class="block">
    <radio-group class="radio-group" onChange="onChange">
      <view class="radio" tiki:for="{{items}}" key="radio-{{index}}">
        <radio value="{{item.name}}" checked="{{item.checked}}" />
        <text class="text">{{item.value}}</text>
      </view>
    </radio-group>
  </view>
</view>
```

**index.js**

```js
Page({
  data: {
    items: [
      { name: 'angular', value: 'AngularJS' },
      { name: 'react', value: 'React', checked: true },
      { name: 'polymer', value: 'Polymer' },
      { name: 'vue', value: 'Vue.js' },
      { name: 'ember', value: 'Ember.js' },
      { name: 'backbone', value: 'Backbone.js', disabled: true }
    ]
  }
});
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

.radio-group {
  display: flex;
  flex-direction: column;
}

.radio {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;
}

.text {
  margin-left: 12px;
}
```

### Chi tiết

| Property | Type    | Description                                              |
| -------- | ------- | -------------------------------------------------------- |
| value    | string  | Giá trị của radio                                        |
| checked  | boolean | Chỉ định radio có được chọn hay không. Mặc định là false |
| disabled | boolean | Disable radio component                                  |
| color    | string  | Màu của component, sử dụng mã màu như trong css          |
