---
title: Toast Bar
---

- `toast-bar` là component trong [tini-ui](https://www.npmjs.com/package/@tiki.vn/tini-ui) hỗ trợ show toast. Bạn có thể dùng jsAPI showToast với chức năng cũng gần tương tự

<!-- ## Quét mã để trải nghiệm -->

<!-- import { QRCode } from '@site/src/components/QRCode'; -->

<!-- <QRCode page="pages/component/advance/form/tooltip/index" /> -->


## Cài đặt `tini-ui`:

```bash
$> yarn add @tiki.vn/tini-ui
```

## Thuộc tính 

| Thuộc tính           | Kiểu dữ liệu                                 | Giá trị mặc định   | Mô tả                                                                                      |
| ----------------- | ------------------------------------ | ------------- | ----------------------------------------------------------------------------------------------- |
| type              | `'success'` \| `'error'` \| `'info'` | 'success'     | Loại toast bar, mỗi type sẽ có một màu khác nhau                                                |
| iconLeft          | string                               | ''            | Icon phía bên trái, hỗ trợ các giá trị trong [icon component](/docs/component/basic/basic/icon) |
| show              | boolean                              | false         | Cho phép hiển thị toast bar hay không                                                           |
| className         | string                               | ''            | Custom class cho toast bar                                                                      |
| style             | string                               | ''            | Style cho toast bar                                                                             |
| content           | string                               | ''            | Nội dung của toast bar                                                                          |
| textColor         | string                               | ''            | Nội dung của toast bar                                                                          |
| placement         | `'top'` \| `'bottom'`                | 'bottom'      | Vị trí hiển thị của tooltip                                                                     |
| top               | string                               | '24px'        | Vị trí của toast bar đi từ top của page, có tác dụng khi placement là `top`                     |
| bottom            | string                               | '24px'        | Vị trí của toast bar đi từ bottom của page, có tác dụng khi placement là `bottom`               |
| duration          | number                               | 3000          | Thời gian toast bar xuất hiện                                                                   |
| animationDuration | number                               | 300           | Thời gian animation của toast bar                                                               |
| zIndex            | number                               | 999           | z-index của toast bar                                                                           |
| onTapAction       | function                             |               | Sự kiện được gọi khi bấm vào action trên toast bar                                              |
| onClose           | function                             |               | Sự kiện được gọi khi bấm vào icon close                                                         |


## Sample Code

```json title=index.json
{
  "defaultTitle": "Toast Bar",
  "usingComponents": {
    "toast-bar": "@tiki.vn/tini-ui/es/toast-bar/index"
  }
}
```

```xml title=index.txml
<button onTap="onShowToast">Show Toast</button>
<toast-bar
  onClose="onCloseToast"
  show="{{showToast}}"
  duration="{{3000}}"
  content="Toast Bar"
  animation="{{true}}"
  bottom="200px"
  type="error" />
```

```js title=index.js
Page({
  data: {
    showToast: false
  },
  onShowToast() {
    this.setData({ showToast: true });
  },
  onCloseToast() {
    this.setData({ showToast: false });
  }
});
```
