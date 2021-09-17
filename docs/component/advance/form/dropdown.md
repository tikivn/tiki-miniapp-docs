---
title: Dropdown
---

## Giới thiệu

- `dropdown` là component trong [tini-ui](https://www.npmjs.com/package/@tiki.vn/tini-ui). Với giao diện gần giống với `textfield`, nhưng có hỗ trợ bottom sheet khi bấm vào cho phép hiển thị và chọn data
- Để sử dụng `dropdown`, bạn cần phải cài [tini-ui](https://www.npmjs.com/package/@tiki.vn/tini-ui) từ version `0.0.19` trở lên.

## Sử dụng

### Cài đặt `tini-ui`:

```bash
$> yarn add @tiki.vn/tini-ui
```

### Sample Code

```json title=index.json
{
  "usingComponents": {
    "dropdown": "@tiki.vn/tini-ui/es/dropdown/index"
  }
}
```

```xml title=index.txml
  <dropdown
    maskClose="{{false}}"
    bottomSheetHeight="300"
    items="{{items1}}"
    value="{{selected1}}"
    onSelect="onSelect1"
    placeholder="Chọn 1">
  </dropdown>

  <dropdown
    bottomSheetHeight="200"
    bottomSheetTitle="Custom"
    labelKey="label"
    idKey="key"
    items="{{items2}}"
    value="{{selected2}}"
    onSelect="onSelect2"
    placeholder="Chọn 2">
  </dropdown>

  <dropdown
    bottomSheetTitle="Custom"
    labelKey="label"
    idKey="key"
    multiple
    items="{{items2}}"
    value="{{selected3}}"
    onSelect="onSelect3"
    placeholder="Chọn multiple">
  </dropdown>
```

**index.js**

```js
Page({
  data: {
    selected1: 'Item 2',
    selected2: null,
    selected3: [
      { key: 1, label: 'Item 1' },
      { key: 2, label: 'Item 2' },
      { key: 3, label: 'Item 3' }
    ],
    items1: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
    items2: [
      { key: 1, label: 'Item 1' },
      { key: 2, label: 'Item 2' },
      { key: 3, label: 'Item 3' },
      { key: 4, label: 'Item 4' },
      { key: 5, label: 'Item 5' },
      { key: 6, label: 'Item 6' },
      { key: 7, label: 'Item 7' },
      { key: 8, label: 'Item 8' },
      { key: 9, label: 'Item 9' }
    ]
  },
  onSelect(selected) {
    this.setData({ selected });
  },
  onSelect1(selected1) {
    this.setData({ selected1 });
  },
  onSelect2(selected2) {
    this.setData({ selected2 });
  },
  onSelect3(selected3) {
    this.setData({ selected3 });
  }
});
```

### Chi tiết

| Property          | Type                           | Default Value | Description                                                                                                                                                                                               |
| ----------------- | ------------------------------ | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| placeholder       | string                         |               | Placeholder cho dropdown                                                                                                                                                                                  |
| disabled          | boolean                        | false         | Disable dropdown                                                                                                                                                                                          |
| shape             | string                         | rounded       | Kiểu border radius của dropdown. Hỗ trợ `rounded` hoặc `pill`. Mặc định là `rounded`                                                                                                                      |
| loading           | boolean                        | false         | Hiển thị loading skeleton cho dropdown                                                                                                                                                                    |
| className         | string                         |               | Class cho dropdown                                                                                                                                                                                        |
| items             | array string hoặc array object |               | Mảng dữ liệu để hiển thị trên bottom sheet                                                                                                                                                                |
| labelKey          | string                         | name          | Label key để hiển thị trên bottom sheet, không cần truyền nếu items là mảng string. Ví dụ bạn có mảng `[{value: 'Content 1', key: 1}]` thì set `labelKey="Content 1"` thì bottom sheet sẽ hiển thị `text` |
| idKey             | string                         | id            | Id key để phân biệt các item trên bottom sheet, ví dụ bạn có mảng `[{name: 'Content 1', customKey: 1}]`, thì bạn cần truyền `idKey="customKey"`                                                           |
| showSearch        | boolean                        | false         | Hiển thị search input trên bottom sheet hay không                                                                                                                                                         |
| closeAfterSelect  | boolean                        | true          | Tự động đóng bottom sheet sau khi một item được chọn                                                                                                                                                      |
| searchPlaceholder | string                         | Tìm kiếm      | Placeholder cho input search, chỉ có hiệu lực khi `showSearch=true`                                                                                                                                       |
| labelText         | string                         | false         | Label text cho dropdown                                                                                                                                                                                   |
| useBottomSheet    | boolean                        | false         | Cho phép dùng bottom sheet hay không                                                                                                                                                                      |
| bottomSheetHeight | number                         |               | Chiều cao của bottom sheet                                                                                                                                                                                |
| bottomSheetTitle  | string                         | Dropdown      | Title của bottom sheet                                                                                                                                                                                    |
| bottomSheetButton | string                         | Chọn          | Text cho button dưới footer của bottom sheet                                                                                                                                                              |
| maskClose         | string                         | true          | Cho phép đóng bottom sheet khi bấm vào mask hay không                                                                                                                                                     |
| value             | string/object                  |               | Value cho item được chọn trong bottom sheet                                                                                                                                                               |
| errorMsg          | string                         |               | Lỗi hiển thị dưới dropdown                                                                                                                                                                                |
| hasError          | string                         |               | Hiển thị trạng thái có lỗi của dropdown                                                                                                                                                                   |
| showCheck         | string                         | false         | Hiển thị icon check cho item được chọn trong bottom sheet. Sẽ tự động ẩn nếu `multiple=true`                                                                                                              |
| multiple          | string                         | false         | Cho phép chọn nhiều item trên bottom sheet                                                                                                                                                                |
| onTap             | event                          |               | Sự kiện được gọi khi một item trên bottom sheet được chọn                                                                                                                                                 |
| onSelect          | event                          |               | Sự kiện được gọi khi chọn một item trên bottom sheet                                                                                                                                                      |
| onSearch          | event                          |               | Sự kiện được gọi khi input search thay đổi                                                                                                                                                                |
