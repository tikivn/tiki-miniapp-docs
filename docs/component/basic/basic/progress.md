---
title: progress
sidebar_custom_props:
  description: Thanh tiến trình
---

Progress bar (thanh tiến trình).

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/component/basic/progress/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/component/basic/progress/index" />

## Thuộc tính

| Thuộc tính       | Kiểu dữ liệu | Giá trị mặc định               | Mô tả                                                                    |
| ---------------- | ------------ | ------------------------------ | ------------------------------------------------------------------------ |
| percent          | number       | 0                              | Hiển thị đoạn active đạt bao nhiêu phần trăm. Nhận giá trị từ 0 tới 100. |
| show-info        | boolean      | false                          | Hiển thị con số phần trăm ở bên phải thanh progress bar.                 |
| stroke-width     | number       | 4                              | Độ dày đuờng viên của progress bar.                                      |
| active-color     | string       | --brand                        | Màu của đoạn active.                                                     |
| background-color | string       | --background-progress-inactive | Màu của toàn bộ thanh progress.                                          |
| active           | boolean      | false                          | Sử dụng animation cho thanh progress.                                    |

## Sample Code

```xml title=index.txml
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
