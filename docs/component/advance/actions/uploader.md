---
title: uploader
sidebar_custom_props:
  description: Component Tini UI - Hỗ trợ chọn và xem trước tập tin
---

`uploader` là component thuộc [tini-ui](https://www.npmjs.com/package/@tiki.vn/tini-ui) hỗ trợ chọn và xem trước tập tin (Hiện tại chỉ hỗ trợ tập tin là hình ảnh).

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/component/advance/actions/uploader/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/component/advance/actions/uploader/index" />

## Cài đặt `tini-ui`:

```bash
$> yarn add @tiki.vn/tini-ui
```

## Thuộc tính uploader

| Thuộc tính  | Kiểu dữ liệu | Giá trị mặc định   | Mô tả                                                                                         |
| ----------- | ------------ | ------------------ | --------------------------------------------------------------------------------------------- |
| className   | string       |                    | Custom class                                                                                  |
| style       | string       |                    | Inline style                                                                                  |
| value       | string       |                    | Giá trị khởi tạo                                                                              |
| icon        | string       |                    | Type của icon, xem thêm [tại đây](https://developers.tiki.vn/docs/component/basic/basic/icon) |
| iconSize    | 40           |                    | Size của icon                                                                                 |
| disabled    | boolean      | false              | Disable uploader                                                                              |
| showPreview | boolean      | true               | Cho phép bấm vào hình ảnh để show preview uploader                                            |
| sourceType  | array        | ['camera, 'album'] | Chụp hình bằng camera hay lấy hình từ album. Mặc định là cả hai                               |
| onChange    | event        |                    | Sự kiện sẽ được gọi khi chọn hoặc xoá hình ảnh`                                               |

## Thuộc tính hình ảnh

| Thuộc tính | Kiểu dữ liệu | Mô tả                                  |
| ---------- | ------------ | -------------------------------------- |
| path       | string       | Đường đẫn tạm thời của ảnh             |
| size       | number       | Dung lượng của ảnh. Đơn vị tính: byte  |
| width      | number       | Chiều rộng của ảnh. Đơn vị tính: pixel |
| height     | number       | Chiều cao của ảnh. Đơn vị tính pixel   |

## Sample Code

```json title=index.json
{
  "defaultTitle": "Uploader",
  "usingComponents": {
    "uploader": "@tiki.vn/tini-ui/es/uploader/index"
  }
}
```

```xml title=index.txml
<uploader/>
<uploader icon="plus"/>
<uploader style="width: 80px; height: 80px;" iconSize="40"/>
<uploader>
  <view class="flex items-center px-2x-small">
    <icon type="info" class="mr-2x-small"/>
    <text>Select image</text>
  </view>
</uploader>
<uploader disabled/>
<uploader value="https://i.picsum.photos/id/77/500/500.jpg?hmac=tSoa4RHbrWHe6CfA-uOJZpiHj-3e9OoYJ91vBlFaMD8"/>
<uploader onChange="onChange"/>
```

```js title=index.js
Page({
  onChange(images) {
    my.alert({
      title: 'Uploader was changed',
      content: JSON.stringify(images)
    });
  }
});
```
