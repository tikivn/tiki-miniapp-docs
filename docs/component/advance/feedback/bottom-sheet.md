---
title: bottom-sheet
sidebar_custom_props:
  description: Component Tini UI - Hiển thị modal show từ dưới lên
---

Bottom Sheet là component được sử dụng để hiển thị modal show từ dưới lên.

![image](https://salt.tikicdn.com/ts/miniapp/17/39/96/0a7ed3934129953b1038012a51e6158f.png)

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/component/advance/feedback/bottom-sheet/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/component/advance/feedback/bottom-sheet/index" />

## Cài đặt

Để sử dụng bottom-sheet bạn cần phải cài đặt thư viện tini-ui.

```bash
$> yarn add @tiki.vn/tini-ui
```

## Chi tiết

Mỗi một bottom-shet sẽ có các thành phần như hình vẽ dưới đây

![bottom-item-structure](https://salt.tikicdn.com/ts/miniapp/77/f4/b5/580a775a8026ebd3fb799c8a83732173.png)

Trong đó `header`, `additionContent`, `default`, và `footer` là các slot.

Nếu trong trường hợp, chúng ta không truyền vào `header` và `footer` slot, thì chúng ta có thể custom
các thuộc tính title, và buttonTitle

### Thuộc tính

| Thuộc tính     | Kiểu dữ liệu                          | Giá trị mặc định | Mô tả                                                       |
| -------------- | ------------------------------------- | ---------------- | ----------------------------------------------------------- |
| title          | string                                | 'Bottom sheet'   | header title                                                |
| buttonTitle    | string                                | 'OK'             | title của footer button                                     |
| buttonShape    | 'pill', 'rounded', 'circle', 'square' | 'rounded'        | shape của footer button. Hỗ trợ từ version 0.2.1-rc trở lên |
| buttonCls      | string                                | ''               | class của footer button. Hỗ trợ từ version 0.2.1-rc trở lên |
| mark           | boolean                               | true             | Giống thuộc tính mark của popup                             |
| animation      | boolean                               | true             | Giống thuộc tính animation của popup                        |
| show           | boolean                               | true             | Giống thuộc tính show của popup                             |
| disableScroll  | boolean                               | false            | Giống thuộc tính disableScroll của popup                    |
| zIndex         | number                                | 2                | Giống thuộc tính zIndex của popup                           |
| disableFromTop | number                                | 50               | Khoảng cách từ navigation title tới bottom sheet            |
| onClose        | event                                 | no               | Xử lý sự kiện close bottom sheet                            |
| onClick        | event                                 | no               | Xử lý sự kiện click vào button ở footer                     |

## Sample Code

Chi tiết sample code, có thể tham khảo ở
[https://github.com/tikivn/miniapp-getting-started/tree/main/api-demo/src/pages/component/advance/feedback/bottom-sheet](https://github.com/tikivn/miniapp-getting-started/tree/main/api-demo/src/pages/component/advance/feedback/bottom-sheet)

Khai báo sử dụng trong file .json

```json
{
  "defaultTitle": "List",
  "usingComponents": {
    "bottom-sheet": "@tiki.vn/tini-ui/es/bottom-sheet/index"
  }
}
```

Sử dụng trong txml

```xml
<template name="bottom-sheet-list">
  <radio-group>
    <label tiki:for="{{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]}}">
      <list-item padding>
        <view slot="prefix" class="list-item-prefix">
          <radio value="{{item}}" />
        </view>
        <view class=" list-item-title">Label
        </view>
        <view slot="suffix" class="list-item-suffix">
          <view>Data</view>
        </view>
      </list-item>
    </label>
  </radio-group>
</template>

<view class="page-bottom-sheet">
  <block-header title="Usage"
    description="Bottom sheets are used to display content that temporarily blocks interactions with the main view of an application. Bottom sheets should be used sparingly only to provide complex actions when we  want users stay on the current screen." />
  <block-variant header="Variants">
    <view class="list-button">
      <tu-button onTap="onShowBottomSheetList">Bottom sheet with list</tu-button>
      <tu-button onTap="onShowBottomSheetText">Bottom sheet with text</tu-button>
      <tu-button onTap="onShowBottomSheetPicker">Bottom sheet with picker</tu-button>
    </view>
    <bottom-sheet show="{{show}}" title="List" buttonTitle="OK" distanceFromTop="{{100}}" onClose="onClose" onClick="onClick">
      <template is="bottom-sheet-{{template}}" />
    </bottom-sheet>
  </block-variant>
</view>
```

Đoạn code trên sẽ tạo ra giao diện như sau

![image](https://salt.tikicdn.com/ts/miniapp/17/39/96/0a7ed3934129953b1038012a51e6158f.png)
