---
title: button
---

## Giới thiệu

button

## Sử dụng

### Sample Code

**index.txml**

```xml
<view class="container">
  <view class="block">
    <text>type: primary</text>
    <button type="primary" onTap="onTap">
      Primary
    </button>
    <button type="primary" disabled>
      Primary(disabled)
    </button>
    <button type="primary" size="medium">
      Primary(medium)
    </button>
    <button type="primary" size="small">
      Primary(small)
    </button>
    <button type="primary" loading>
      Primary(loading)
    </button>
  </view>

  <view class="block">
    <text>type: secondary</text>
    <button type="secondary">Secondary</button>
    <button type="secondary" disabled>
      Secondary(disabled)
    </button>
    <button type="secondary" size="medium">
      Secondary(medium)
    </button>
    <button type="secondary" size="small">
      Secondary(small)
    </button>
    <button type="secondary" loading>
      Secondary(loading)
    </button>
  </view>

  <view class="block">
    <text>type: tertiary</text>
    <button type="tertiary">Teritiary</button>
    <button type="tertiary" disabled>
      Teritiary(disabled)
    </button>
    <button type="tertiary" size="medium">
      Teritiary(medium)
    </button>
    <button type="tertiary" size="small">
      Teritiary(small)
    </button>
    <button type="tertiary" loading>
      Teritiary(loading)
    </button>
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

button {
  margin-top: 8px;
  width: 100%;
}
```

**index.js**

```js
Page({
  data: {},
  onLoad() {},
  onReady() {},
  onShow() {},
  onHide() {},
  onUnload() {},
  onTitleClick() {},
  onPullDownRefresh() {},
  onReachBottom() {},
  onPageScroll() {},
  onShareAppMessage() {},
  onTap() {
    console.log('Button onTap');
  }
});
```

### Chi tiết

| Property | Type    | Default Value | Description                                       |
| -------- | ------- | ------------- | ------------------------------------------------- |
| size     | string  | "big"         | Kích thước của button (big/medium/small)          |
| type     | string  | "primary"     | Giao diện của button (primary/secondary/tertiary) |
| loading  | boolean | false         | Hiển thị icon loading                             |
| disabled | boolean | false         | Disabled button                                   |
| onTap    | event   | null          | Sự kiện khi tap vào button                        |

<img style={{maxWidth: 414}} alt="Tab" src="/img/button-component.png"/>
