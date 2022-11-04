---
title: my.setNavigationBar
sidebar_custom_props:
  description: Set style cho Navigation Bar
---

`my.setNavigationBar` là API để set style cho Navigation Bar

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/navigation-bar/set-navigation-bar/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/api/navigation-bar/set-navigation-bar/index" />

## API Params

| Thuộc tính        | Kiểu dữ liệu | Mô tả                                                                                                |
| ----------------- | ------------ | ---------------------------------------------------------------------------------------------------- |
| title             | String       | Tiêu đề của Navigation Bar.                                                                          |
| image             | String       | Image URL được sử dụng để render trên title. Có thể set cùng lúc title và image.                     |
| titleBarColor     | HexColor     | Background color của Navigation Bar.                                                                 |
| borderBottomColor | HexColor     | Nếu `backgroundColor` được set, thì `borderBottomColor` sẽ luôn nhận giá trị bằng `backgroundColor`. |
| theme             | String       | Set theme của Navigation. Giá trị `reverse` hoặc `default`.                                          |
| search            | Object       | Các giá trị hiển thị khung search.                                                                   |
| reset             | Boolean      | Reset về `titleBarColor` và `borderBottomColor` về màu mặc định.                                     |
| success           | Function     | Callback function khi thành công.                                                                    |
| fail              | Function     | Callback function khi thất bại.                                                                      |
| complete          | Function     | Callback function khi hoàn tất tác vụ cho dù thành công hay thất bại.                                |

## Giá trị trong search

| Thuộc tính   | Kiểu dữ liệu | Mô tả                          |
| ------------ | ------------ | ------------------------------ |
| show         | Boolean      | Bật/tắt hiển thị khung search. |
| placeholder  | String       | Placeholder.                   |
| borderRadius | Number       | Border radius.                 |

## Sample Code

```js
Page({
  setNavigationBar(e) {
    var title = e.detail.value.title;
    var backgroundColor = e.detail.value.backgroundColor;
    var borderBottomColor = e.detail.value.borderBottomColor;
    var image = e.detail.value.image;
    var show = e.detail.value.show;
    var placeholder = e.detail.value.placeholder;
    var borderRadius = e.detail.value.borderRadius;
    var theme = e.detail.value.theme;
    my.setNavigationBar({
      title,
      backgroundColor,
      borderBottomColor,
      image,
      search: {
        show,
        placeholder
        borderRadius,
      },
      theme,
    });
  },
  resetNavigationBar() {
    my.setNavigationBar({
      reset: true,
      title: 'Navigation Bar'
    });
  }
});
```
