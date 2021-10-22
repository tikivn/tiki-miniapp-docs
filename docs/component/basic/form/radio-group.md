---
title: radio-group
---

## Giới thiệu

`radio-group` dùng để nhóm các [radio](/docs/component/form/radio) lại với nhau. Bên trong `radio-group` có thể chứa nhiều `radio`, nhưng tại một thời điểm chỉ có một `radio` có thể được chọn, các `radio` cần khai báo thuộc tính `value`

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
  },
  onChange(e) {
    console.log('onChange', e);
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

| Property | Type     | Description                                                                                                                                  |
| -------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| onChange | function | Sự kiện được gọi khi giá trị của các radio bị thay đổi, `event.detail = { value: value }`, value chính là giá trị của `radio` đang được chọn |
| name     | string   | Khai báo `name` khi được sử dụng trong [form](/docs/component/form/form), được sử dụng để lấy `value` cho `form`                             |
