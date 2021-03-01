---
order: 90
category:
  vi-VN: Thanh điều hướng
  en-US: Navigation Bar
title:
  vi-VN: my.getTitleColor (chưa ready)
  en-US: my.getTitleColor (chưa ready)
---

## Giới thiệu

**my.getTitleColor** là API để lấy background color của Navigation Bar

## Sử dụng

### Sample Code

```jsx
<view>
  <view class="page-section-demo">
    <text>Title Color</text>
    <input type="text" disabled="{{true}}" value="{{titleColor.color}}"></input>
  </view>
  <view class="page-section-btns">
    <view onTap="getTitleColor">Get Color</view>
  </view>
</view>
```

```js
Page({
  data: {
    titleColor: {},
  },
  getTitleColor() {
    my.getTitleColor({
      success: (res) => {
        this.setData({
          titleColor: res,
        });
      },
    });
  },
});
```

### API Params

| Attributes | Type     | Required | Description                                                           |
| ---------- | -------- | -------- | --------------------------------------------------------------------- |
| success    | Function | No       | Callback function khi thành công.                                     |
| fail       | Function | No       | Callback function khi thất bại.                                       |
| complete   | Function | No       | Callback function khi hoàn tất tác vụ cho dù thành công hay thất bại. |

### Giá trị trong success callback

| Attributes | Type     | Description                         |
| ---------- | -------- | ----------------------------------- |
| color      | HexColor | Background color của Navigation Bar |
