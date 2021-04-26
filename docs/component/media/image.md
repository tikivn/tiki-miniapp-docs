---
title: image
---

## Giới thiệu

image component để hiển thị hình ảnh

## Sử dụng

### Sample Code

**index.txml**

```xml
<view>
  <view class="block-content">
    <view onTap="onTap" class="component-item">
      <image
        onLoad="onLoad"
        src="{{source}}"
        class="image-item" />
    </view>
    <view class="component-item">
      <image src="../../../images/app_logo.png" />
    </view>
    <view class="component-item">
      <image src="https://via.placeholder.com/300.png" />
    </view>
  </view>
</view>
```

**index.js**

```js
import source from '../../../images/app_logo.png';

Page({
  data: {
    source
  },
  onLoad(e) {
    console.log('onLoad', e);
  },
  onTap(e) {
    console.log('onTap', e);
  },
  onError(e) {
    console.log('onError', e);
  }
});
```

**index.tcss**

```css
.image-item {
  width: 100px;
  height: 100px;
}
```

## Chi tiết

### Các thuộc tính

| Property      | Type   | Description                                                                                                                                                          |
| ------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| src           | string | Đường dẫn hoặc data base 64 của hình ảnh. [Xem thêm](#src)                                                                                                           |
| resize-mode   | string | Hỗ trợ thay đổi kích thước ảnh của image khi kích thước của khung hình không khớp với kích thước thật của ảnh. Giá trị mặc định là `cover`. [Xem thêm](#resize-mode) |
| resize-method | string | Cơ chế được sử dụng để thay đổi kích thước hình ảnh. Giá trị mặc định là `auto`. [Xem thêm](#resize-method)                                                          |
| onLoad        | event  | Sự kiện được gọi khi hình ảnh được tải về thành công, `event.detail = { width, height }`                                                                             |
| onError       | event  | Sự kiện được gọi khi hình ảnh tải về thất bại, `event.detail = { errMsg: 'Error message' }`                                                                          |

### Chi tiết thuộc tính

#### src

Source của hình ảnh. Hỗ trợ các định dạng ảnh: _png, jpg, jpeg, bmp, gif, webp, psd (chỉ hỗ trợ iOS)_. Ngoài ra bạn có thể dùng định dạng base 64

- Trong file txml chỉ hỗ trợ đường dẫn tương đối hoặc remote url
- Trong file js, bạn có thể import hình ảnh với `require` hoặc `import`. Ví dụ:

**index.js**

```js
import image1 from './images/image.png';
const image2 = require('./images/image.png');

Page({
  data: { image1, image2 }
});
```

**index.txml**

```xml
<image src="{{image1}}" />
<image src="{{image2}}" />
```

**Lưu ý**: Bạn không thể khai báo biến trong data là đường dẫn tương đối rồi sử dụng trong txml. Ví dụ:

**index.js**

```js
Page({
  data: {
    image1: './images/image.png',
    image2: 'https://reactnative.dev/img/tiny_logo.png'
  },
;
```

**index.txml**

```xml
<!-- Không hợp lệ -->
<image src="{{image1}}" />
<!-- Hợp lệ -->
<image src="{{image2}}" />
```

#### resize-mode

Hỗ trợ thay đổi kích thước ảnh của image khi kích thước của khung hình không khớp với kích thước thật của ảnh. Giá trị mặc định là `cover`. Bạn có thể chọn một trong các giá trị:

- `cover`: Hình ảnh sẽ được giữ nguyên tỉ lệ và sẽ lấp đầy toàn bộ khung chứa hình, các bộ phận thừa sẽ bị cắt đi và không được hiển thị
- `contain`: Hình ảnh sẽ được giữ nguyên tỉ lệ và phóng to/ thu nhỏ lại để phù hợp với khung chứa hình
- `stretch:` Tự động thay đổi tỉ lệ width, height sao cho vừa với khung chứa hình
- `repeat:` Hình ảnh sẽ được giữa nguyên kích thước và tỉ lệ. Nếu hình ảnh nhỏ hơn khung chứa nó, sẽ tự động lập lại hình ảnh cho tới khi vừa với khung chứa
- `center`: Hình ảnh sẽ được hiển thị ở giữa khung chứa. Nếu hình ảnh lớn hơn khung chứa nó, hình ảnh sẽ được thu nhỏ lại cho vừa với khung hình

#### resize-method

Cơ chế được dùng để thay đổi kích thước của hình ảnh khi kích thước của ảnh khác với kích thước của khung chứa. Mặc định là `auto`. Bạn có thể chọn một trong các giá trị: `auto`, `resize`, `scale`. Tham khảo thêm [https://frescolib.org/docs/resizing.html](https://frescolib.org/docs/resizing.html)

- `resize`: Nên dùng giá trị này thay vì `scale` khi hình ảnh lớn hơn view chứa nó
- `scale`: Sẽ nhanh hơn so với resize và hình ảnh sẽ có chất lượng cao hơn. Thường dùng khi hình ảnh nhỏ hơn view chứa nó.

## Lưu ý

- Bạn cần khai báo width và height của image thông qua inline style hoặc trong tcss, mặc định là width = `300px` và height = `225px`. Thuộc tính width và height sẽ không được kế thừa trong image
