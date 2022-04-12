---
title: Alphabet
---

## Giới thiệu

Alphabet là component được sử dụng để hiển thị danh sách các kí tự trong alphabet.

## Sử dụng

### Cài đặt `tini-ui`:

```bash
$> yarn add @tiki.vn/tini-ui
```

### Sample Code

**index.json**

```json
{
  "defaultTitle": "Alphabet",
  "usingComponents": {
    "alphabet": "@tiki.vn/tini-ui/es/list/alphabet/index"
  }
}
```

**index.txml**

```xml
<alphabet alphabet="{{alphabet}}" onClick="onAlphabetClick" >
  <view slot="prefix"><icon size="12" type="info"/></view>
</alphabet>
```

**index.js**

```js
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
      'Z',
    ],
  },
  onAlphabetClick(ev) {
    my.alert({
      content: JSON.stringify(ev.data),
    });
  },
});
```

### Chi tiết

| Property      | Type                  | Default Value | Description                                    |
| ------------- | --------------------- | ------------- | ---------------------------------------------- |
| alphabet     | string[]                | []            | Khởi tạo các kí tự alphabet|
| onClick    | event   | () => void    | Trigger function này khi click item của alphabet
