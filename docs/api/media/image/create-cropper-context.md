---
title: my.createCropperContext
sidebar_custom_props:
  description: Dùng để tạo ra ImageCropperContext - đối tượng cung cấp phương thức giúp bạn điều khiển `image-cropper` component
---

`my.createCropperContext` là API dùng để tạo ra ImageCropperContext - đối tượng cung cấp phương thức giúp bạn điều khiển [ImageCropper](/docs/component/basic/utilities/image-cropper) component.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/component/advance/utilities/image-cropper/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/component/advance/utilities/image-cropper/index" />

## Các phương thức LottieContext cung cấp

| Phương thức | Tham số | Mô tả                   |
| ----------- | ------- | ----------------------- |
| save        | no      | Thực hiện việc crop ảnh |

## Sample Code

```js
const cropper = my.createCropperContext('cropper-1');
cropper.save();
```

Bạn có thể xem thêm ví dụ tại [Image Cropper Component](/docs/component/basic/utilities/image-cropper)
