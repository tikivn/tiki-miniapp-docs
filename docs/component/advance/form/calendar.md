---
title: Calendar
---

## Giới thiệu

- `calendar` là component trong [tini-ui](https://www.npmjs.com/package/@tiki.vn/tini-ui) là thành phẩn nhỏ gọn hiển thị thông tin lịch (ngày, tháng, năm).
- Để sử dụng `calendar`, bạn cần phải cài [tini-ui](https://www.npmjs.com/package/@tiki.vn/tini-ui) từ version `0.2.1-rc.8` trở lên.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/component/advance/form/calendar/index" />

## Sử dụng

### Cài đặt `tini-ui`:

```bash
$> yarn add @tiki.vn/tini-ui
```

### Sample Code

**index.json**

```json
{
  "defaultTitle": "Calendar",
  "usingComponents": {
    "list-item": "@tiki.vn/tini-ui/es/list/list-item/index",
    "calendar": "@tiki.vn/tini-ui/es/calendar/index",
    "block-header": "components/block-header/index",
    "block-variant": "components/block-variant/index"
  }
}
```

**index.txml**

```xml
<template name="variant-format">
  <block-variant header="Variant" title="1. Header" description="Default, Title with fast navigation & Time only">
    <view class="mt-medium">
      <view class="font-bold pb-2x-small border-bottom ">1.1. Header - Default</view>
      <view class="mt-2x-small">
        <calendar mode="single" header="month" />
      </view>
    </view>
    <view class="mt-medium">
      <view class="font-bold pb-2x-small border-bottom ">1.2. Header - Fast forward & back forward</view>
      <view class="mt-2x-small">
        <calendar mode="range" header="year" />
      </view>
    </view>
    <view class="mt-medium">
      <view class="font-bold pb-2x-small border-bottom ">1.2. Header - Fast forward & back forward</view>
      <view class="mt-2x-small">
        <calendar mode="timeOnly" />
      </view>
    </view>
  </block-variant>
</template><template name="variant-state">
  <block-variant title="2. Content" description="Default & With sub content.">
    <view class="mt-medium">
      <view class="font-bold pb-2x-small border-bottom ">2.1. Content - Default</view>
      <view class="mt-2x-small">
        <calendar mode="single" onSelect="onSelect" onChange="onChange" />
      </view>
    </view>
    <view class="mt-medium">
      <view class="font-bold pb-2x-small border-bottom ">2.2. Content - With sub content</view>
      <view class="mt-2x-small">
        <calendar tagData="{{tagData}}" mode="single" header="year" onSelect="onSelect" onChange="onChange" />
      </view>
    </view>
  </block-variant>
</template>
<view class="page">
  <block-header title="Usage" description="Calendar allow users to overview and select a start and end time." />
  <template is="variant-format" data="{{tagData}}" />
  <template is="variant-state" data="{{tagData}}" />
</view>
```

**index.js**

```js
Page({
  data: {
    tagData: [
      {
        date: '09-11-2021',
        tag: 'Aa'
      },
      {
        date: '10-11-2021',
        tag: 'Aa'
      },
      {
        date: '11-11-2021',
        tag: 'Aa'
      },
      {
        date: '12-11-2021',
        tag: 'Aa',
        tagColor: 'blue',
        tagInactiveColor: 'red'
      },
      {
        date: '13-11-2021',
        tag: 'Aa',
        disabled: true
      },
      {
        date: '28-11-2021',
        tag: 'Aa',
        tagColor: 'blue',
        tagInactiveColor: 'red'
      }
    ]
  },
  onSelect(data) {
    console.log(data);
  },
  onChange(data) {
    console.log(data);
  }
});
```

### Chi tiết

| Property     | Type                                                                                         | Default Value  | Description                                                                        |
| ------------ | -------------------------------------------------------------------------------------------- | -------------- | ---------------------------------------------------------------------------------- |
| className    | string                                                                                       | ''             | Custom class cho calendar                                                          |
| style        | string                                                                                       | ''             | Style cho calendar                                                                 |
| locale       | `'en'` \| `'vi'`                                                                             | 'vi            | Hỗ trợ Tiếng Việt / Tiếng Anh.                                                     |
| tagData      | [{ date: '11-11-2021', tag: 'Aa', tagColor: 'blue', tagInactiveColor: 'red',disable: true},] | []             | Có thể đặt tag (color) hoặc disabled một số ngày cụ thể                            |
| mode         | `'timeOnly', 'single' , 'range`                                                              | 'timeOnly'     | Chế độ hiển thị/chọn lịch. (single - chọn một ngày, range - chọn khoảng thời gian) |
| header       | `'year', 'month'`                                                                            | 'month'        | Nếu set 'year' có thể chọn next/pre year.                                          |
| selectedDate | []                                                                                           | []             | Ngày đang được chọn. (format là timestamp)                                         |
| onSelect     | event                                                                                        | (data) => void | Trigger function này khi chọn ngày bên trái của calendar                           |
| onChange     | event                                                                                        | (data) => void | Trigger function này khi thay đổi tháng/năm bên phải của calendar                  |
