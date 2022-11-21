---
title: button-bar
sidebar_custom_props:
  description: Component Tini UI - Button-bar theo Design System của Tiki
---

`Tini Button-bar` là một component được xây dựng dựa trên Design System của Tiki.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/component/advance/actions/button-bar/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/component/advance/actions/button-bar/index" />

## Thuộc tính

| Thuộc tính    | Kiểu dữ liệu                                                | Giá trị mặc định | Mô tả                                                                                                                            |
| :------------ | :---------------------------------------------------------- | :--------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| onTapFirst    | function([EventObject](/docs/framework/event/event-object)) |                  | Hàm xử lý được gọi khi người dùng tap vào nút đầu tiên.                                                                          |
| onTapSecond   | function([EventObject](/docs/framework/event/event-object)) |                  | Hàm xử lý được gọi khi người dùng tap vào nút thứ hai (nếu có).                                                                  |
| onTapCheckbox | function([EventObject](/docs/framework/event/event-object)) |                  | Hàm xử lý được gọi khi người dùng tap vào checkbox.                                                                              |
| buttons       | array                                                       |                  | Mảng bao gồm các thuộc tính của các [button](/docs/component/advance/actions/button) hiển thị trên button-bar (tối đa 2 buttons) |
| direction     | enum('row', 'column')                                       | 'row'            | Hướng sắp xếp của các button                                                                                                     |
| checkboxText  | string                                                      | ""               | Nội dung hiển thị của checkbox                                                                                                   |
| class         | string                                                      |                  | Class của button-bar.                                                                                                            |
| style         | string                                                      |                  | Inline styles cho button-bar.                                                                                                    |

## Sample Code

Khai báo components:

```json
{
  "defaultTitle": "Tini Button-bar",
  "usingComponents": {
    "button": "@tiki.vn/tini-ui/es/button-bar/index"
  }
}
```

```xml
<button-bar checkboxText="Option"
            direction="row"
            onTapFirst="onTap"
            buttons="{{[
    {
        buttonText: 'Button1',
        shape: 'pill',
        type: 'outline',
    },
    {
        buttonText: 'Button2',
        shape: 'pill'
    },
]}}" />
```

```js
Page({
  onTap(e) {
    my.alert({ content: 'First Button Clicked' });
  }
});
```
