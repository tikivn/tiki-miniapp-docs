---
title: my.showNavigationBarLoading
---

## Giới thiệu

**my.showNavigationBarLoading** là API để hiển thị loading animation trên thanh Navigation Bar của page hiện tại

## Sử dụng

### Sample Code

**index.txml**

```xml
<view>
  <view class="block-content">
    <button class="button-full" onTap="showLoading">Show navigation bar loading</button>
    <button class="button-full" onTap="hideLoading">Hide navigation bar loading</button>
  </view>
</view>
```

**index.js**

```js
Page({
  showLoading() {
    my.showNavigationBarLoading();
  },
  hideLoading() {
    my.hideNavigationBarLoading();
  }
});
```
