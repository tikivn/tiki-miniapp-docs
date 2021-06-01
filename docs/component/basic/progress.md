---
title: progress
---

## Giới thiệu

Thanh tiến trình

## Sử dụng

### Sample Code

**index.txml**

```xml
<view class="container">
  <view class="block">
    <progress />
    <progress percent="20" show-info="{{showInfo}}" />
    <progress percent="40" stroke-width="20" />
    <progress percent="60" active-color="red" />
    <progress percent="80" background-color="green" />
    <progress percent="90" active="true" show-info="true" />
    <progress percent="100" />
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

progress {
  margin-bottom: 32px;
}
```

**index.js**

```js
/* js */
Page({
  data: {
    showInfo: true
  }
});
```

### Chi tiết

| Property         | Type    | Default Value                  | Required | Description                                       |
| ---------------- | ------- | ------------------------------ | -------- | ------------------------------------------------- |
| percent          | number  | 0                              | Không    | Hiển thị phần trăm progress. Giá trị từ 0 tới 100 |
| show-info        | boolean | false                          | Không    | Hiển thị phần trăm ở bên phải thanh progress      |
| stroke-width     | number  | 4                              | Không    | Kích thước thanh progress                         |
| active-color     | string  | --brand                        | Không    | Màu của thanh phần trăm hiển thị                  |
| background-color | string  | --background-progress-inactive | Không    | Màu của toàn bộ thanh progress                    |
| active           | boolean | false                          | Không    | Sử dụng animation cho thanh progress              |
