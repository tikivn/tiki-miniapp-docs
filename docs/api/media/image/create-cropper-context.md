---
title: my.createCropperContext
---

`my.createCropperContext` là API dùng để tạo ra ImageCropperContext - đối tượng cung cấp phương thức giúp bạn điều khiển [ImageCropper](/docs/component/basic/utilities/image-cropper) component.

## Các phương thức LottieContext cung cấp

| Phương thức  | Tham số           | Mô tả                                                                                                                         |
| ------------ | ----------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| save         | no                | Thực hiện việc crop ảnh                                   |


## Sample Code

```js
const cropper = my.createCropperContext('cropper-1');
cropper.save();
```

Bạn có thể xem thêm ví dụ tại [Image Cropper Component](/docs/component/basic/utilities/image-cropper)
