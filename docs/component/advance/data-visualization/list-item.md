---
title: List item
---

List item là component được sử dụng để hiển thị một item trong list.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/component/advance/data-visualization/list/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/component/advance/data-visualization/list/index" />

## Cài đặt `tini-ui`:

Để sử dụng list item bạn cần phải cài đặt thư viện tini-ui.

```bash
$> yarn add @tiki.vn/tini-ui
```

## Chi tiết

Mỗi một list item sẽ có các thành phần như hình vẽ dưới đây

![list-item-structure](https://salt.tikicdn.com/ts/miniapp/37/ef/f6/cc263dc234dcb9e8f629cb9cc13f55bd.png)

Trong đó `prefix`, `suffix`, `default`, `afterTitle`, `afterUpperSubtitle`, `afterLowerSubTitle`, `additionContent` là các UI component
có thể được tuỳ chỉnh bằng cách sử dụng `<slot>` với tên tương ứng.

Còn `thumb`, `upperTitle`, `lowerTitle` và `arrow` là các UI property có thể tuỳ chỉnh bằng cách truyền vào
property của `<list-item>`.

### Thuộc tính

| Thuộc tính    | Kiểu dữ liệu                    | Giá trị mặc định | Mô tả                                                                                                                                                                                                                                                      |
| ------------- | ------------------------------- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| padding       | boolean                         | false            | Nếu cờ được bật, list-item sẽ được bao ngoài bởi một phần padding. Chi tiết phần padding này vui lòng xem file Figma của Design System                                                                                                                     |
| class         | string                          |                  | custom class để thay đổi thuộc tính cho list-item                                                                                                                                                                                                          |
| thumb         | URL                             |                  | url cuả thumb image. Nếu thumb không được truyền vào, thumb image sẽ không hiển thị.                                                                                                                                                                       |
| thumbSize     | number                          |                  | size của image. Trường này bắt buộc phải truyền nếu như truyền vào `thumb`                                                                                                                                                                                 |
| upperSubtitle | string                          | no               | Giá trị của upperSubtitle                                                                                                                                                                                                                                  |
| lowerSubtitle | string                          | no               | Giá trị của lowerSubtitle                                                                                                                                                                                                                                  |
| titlePosition | enum('top', 'middle', 'bottom') | 'top'            | Vị trí của title. Nếu là 'top' thì slot `<default>` sẽ được render trên đầu của `upperSubtitle`. Nếu là `middle` thì `<default>` được render ở giữa `upperSubtitle` và `lowerSubtitle`. Nếu là `bottom` thì `<default>` được render ở dưới `lowerSubtitle` |
| arrow         | boolean                         | false            | Nếu cờ được bật, thì sẽ render arrow icon ở bên phải của `<list-item>`.                                                                                                                                                                                    |
| iconSize      | number                          | 20px             | size của icon                                                                                                                                                                                                                                              |
| disabled      | boolean                         | false            | Nếu cờ được bật, `<list-item>` là không thể click vào                                                                                                                                                                                                      |
| onClick       | event                           |                  | Hàm để xử lý sự kiện click vào                                                                                                                                                                                                                             |

## Sample Code

Khai báo sử dụng trong file .json

```json
{
  "defaultTitle": "List",
  "usingComponents": {
    "list-item": "@tiki.vn/tini-ui/es/list/list-item/index"
  }
}
```

Sử dụng trong txml

```xml
<template name="header">
  <view class="page-list-header">
    <view class="page-list-header-title">Usage</view>
    <view class="page-list-header-content">Lists are used to display name/value pairs, action and information.</view>
  </view>
</template>

<template name="list-content-with-suffix-and-prefix">
  <view class="page-list-content-block">
    <view class="page-list-content-block-title">Content with Prefix & Suffix</view>
    <list-item arrow upperSubtitle="Description"
      thumb="https://uat.tikicdn.com/ts/miniapp/8f/73/72/47a128fa0f759f1fca0b37bbc487d5f1.png" thumbSize="40px">
      <view>Label</view>
      <view slot="suffix">
        <view class="text-title text-regular">CTA message</view>
      </view>
      <view slot="prefix">
        <icon type="location" size="24" color="#808089" />
      </view>
    </list-item>
    <list-item upperSubtitle="Description"
      thumb="https://uat.tikicdn.com/ts/miniapp/8f/73/72/47a128fa0f759f1fca0b37bbc487d5f1.png" thumbSize="40px">
      <view>Label</view>
      <view slot="suffix">
        <button size="small" class="page-list-item-button">Button</button>
      </view>
      <view slot="prefix">
        <icon type="location" size="24" color="#808089" />
      </view>
    </list-item>
    <list-item arrow upperSubtitle="Description">
      <view>Label</view>
      <view slot="prefix">
        <icon type="location" size="24" color="#808089" />
      </view>
    </list-item>
  </view>
</template>

<view class="page page-list">
  <template is="header" />
  <view class="page-list-content">
    <view class="page-list-content-title">Variants</view>
    <template is="list-content-with-suffix-and-prefix" />
  </view>
</view>
```

Khai báo style với tcss

```css
.page-list-header {
  background-color: var(--white);
  padding: var(--space-stack-small);
  margin-bottom: var(--space-stack-2x-small);
}

.page-list-header-title {
  font-style: var(--font-style-normal);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-large);
  line-height: var(--font-height-large);
}

.page-list-header-content {
  margin-top: var(--space-stack-2x-small);
  font-style: var(--font-style-normal);
  font-weight: var(--font-weight-regular);
  font-size: var(--font-size-base);
  line-height: var(--font-height-base);
}

.page-list-content {
  padding: var(--space-stack-small);
}

.page-list-content-title {
  font-style: var(--font-style-normal);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-large);
  line-height: var(--font-height-large);
  margin-bottom: var(--space-stack-medium);
}

.page-list-content-block {
  background-color: var(--white);
  padding: var(--space-stack-medium);
  padding-bottom: var(--space-stack-large);
  border-radius: var(--radius-rounded-8px, 8px);
  margin-bottom: var(--space-stack-medium);
  border: 1px solid var(--gray20);
}

.page-list-content-block-title {
  font-style: var(--font-style-normal);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-base);
  line-height: var(--font-height-base);
  margin-bottom: var(--space-stack-2x-small);
}

.page-list-content-block button {
  border-radius: var(--radius-rounded-4px, 4px);
}

.text-title {
  font-style: var(--font-style-normal);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-base);
  line-height: var(--font-height-base);
  color: var(--text-list-primary, var(--gray100));
}

.text-bold {
  font-weight: var(--font-weight-bold);
}

.text-regular {
  font-weight: var(--font-weight-regular);
}
```

Đoạn code trên sẽ tạo ra giao diện như sau

![image](https://salt.tikicdn.com/ts/miniapp/45/c3/35/9368721ab3652cd71ecb4232a86b25de.png)
