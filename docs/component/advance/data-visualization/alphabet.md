---
title: alphabet
sidebar_custom_props:
  description: Component Tini UI - Hiển thị các chữ cái trong bảng Alphabet
---

Alphabet là component được sử dụng để hiển thị các chữ cái trong bảng Alphabet.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/component/advance/navigation/alphabet/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/component/advance/navigation/alphabet/index" />

## Cài đặt `tini-ui`:

```bash
$> yarn add @tiki.vn/tini-ui
```

## Thuộc tính

| Thuộc tính | Kiểu dữ liệu | Giá trị mặc định | Mô tả                                            |
| ---------- | ------------ | ---------------- | ------------------------------------------------ |
| alphabet   | string[]     | []               | Khởi tạo các kí tự alphabet                      |
| onClick    | event        | () => void       | Trigger function này khi click item của alphabet |

## Sample Code

```json title=index.json
{
  "defaultTitle": "Alphabet",
  "usingComponents": {
    "alphabet": "@tiki.vn/tini-ui/es/list/alphabet/index"
  }
}
```

```xml title=index.txml
<alphabet alphabet="{{alphabet}}" onClick="onAlphabetClick" >
  <view slot="prefix"><icon size="12" type="info"/></view>
</alphabet>
```

```js title=index.js
Page({
  data: {
    alphabet: [
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z'
    ]
  },
  onAlphabetClick(ev) {
    my.alert({
      content: JSON.stringify(ev.data)
    });
  }
});
```
