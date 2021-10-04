---
title: image
---

`image` component dùng để hiển thị hình ảnh.


## Thuộc tính

| Thuộc tính     | Kiểu dữ liệu | Mô tả                                                                                                                                                                           |
| -------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| src            | string       | Đường dẫn hoặc base64 của hình.                                                                                                                                                 |
| class          | string       | Css class                                                                                                                                                                       |
| style          | string       | Inline style                                                                                                                                                                    |
| lazy-load      | boolean      | Cho phép lazy load hình                                                                                                                                                         |
| default-source | string       | Hình mặc định. Hình này sẽ được hiển thị khi hình trong `src` đang trong quá trình load hoặc không load được. Trường hợp hình trong `src` load thất bại, `onError` sẽ được gọi. |
| mode           | string       | Chế độ hiển thị của hình ảnh. Mặc định là `scaleToFill`. Bạn có thể xem các mode được hỗ trợ bên dưới. Chỉ hỗ trợ version từ 1.76.5 trở lên.                                    |
| onTap          | event        | Sự kiện được kích hoạt khi người tap vào hình. Chỉ hỗ trợ từ version 1.74.22 trở lên                                                                                            |
| catchTap       | event        | Sự kiện được khích hoạt khi tap vào image, tuy nhiên event sẽ không bubble lên parent. Chỉ hỗ trợ từ version 1.74.22 trở lên.                                                   |
| onLoad         | event        | Sự kiện được kích hoạt khi hình được tải về thành công, `event.detail = { width, height }`                                                                                      |
| onError        | event        | Sự kiện được kích hoạt khi load hình thất bại, `event.detail = { errMsg: 'Error message' }`                                                                                     |

### Mode

Image component có thể hiển thị hình ảnh ở 14 mode khác nhau, gồm 4 scaling mode và 9 clipping mode.

#### Scaling mode

Ở chế độ này, hình được scale (phóng to/thu nhỏ), tỷ lệ khung hình có thể 

| Mode        | Mô tả                                                                                                                                                                                                                                    |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| scaleToFill | Hình được scale sao cho cả chiều rộng và chiều cao vừa khít image component, không băt buộc duy trì tỷ lệ khung hình (aspect ratio)                                                                                                      |
| aspectFit   | Hình được scale sao cho cạnh dài hơn của nó vừa khít image component mà vẫn duy trì tỷ lệ khung hình.                                                                                                                                    |
| aspectFill  | Hình được scale sao cho cạnh ngắn hơn của nó vừa với image component mà vẫn duy trì tỷ lệ khung hình. Giả sử hình có chiều cao ngắn hơn chiều rộng, thì phần bên trái và bên phải của hình không được hiển thị bên trong image component |
| widthFix    | Width của hình sẽ không thay đổi còn height sẽ được tự động (height auto) điều chỉnh cho phù hợp                                                                                                                                         |

### Clipping mode
Ở chế độ này, kích thước của hình không đổi, chỉ 1 phần của hình được hiển thị nếu chiều cao/chiều rộng của hình lớn hơn component. 

| Mode         | Mô tả                                                                                                 |
| ------------ | ----------------------------------------------------------------------------------------------------- |
| top          | Phần trên của hình được hiển thị nếu chiều cao của hình lớn hơn chiều cao của image component.        |
| bottom       | Phần dưới của hình được hiển thị nếu chiều cao của hình lớn hơn chiều cao của image component.        |
| center       | Phần chính giữa hình được hiển thị nếu kích thước hình lớn hơn kích thước của image component.        |
| left         | Phần bên trái của hình được hiển thị nếu chiều rộng của hình lớn hơn chiều rộng của image component.  |
| right        | Phần bên phải của hình được hiển thị nếu chiều rộng của hình lớn hơn chiều rộng của image component.  |
| top left     | Phần trên bên trái của hình được hiển thị nếu kích thước hình lớn hơn kích thước của image component. |
| top right    | Phần trên bên phải của hình được hiển thị nếu kích thước hình lớn hơn kích thước của image component. |
| bottom left  | Phần dưới bên trái của hình được hiển thị nếu kích thước hình lớn hơn kích thước của image component. |
| bottom right | Phần dưới bên phải của hình được hiển thị nếu kích thước hình lớn hơn kích thước của image component. |

***Lưu ý***

> Bạn cần khai báo `width` và `height` của image component thông qua inline style hoặc trong tcss, mặc định là `width = 300px` và `height = 225px`. Thuộc tính `width` và `height` sẽ không được kế thừa trong image.
> 
> Để sử dụng hình với height là auto, bạn có thể dùng mode là `widthFix`.
> 
> Nên dùng _absolute path_ cho các đường dẫn của hình.
> 
> Không nên dùng thuộc tính `object-fit` trong tcss để canh kích thước cho image mà thay vào đó dùng `mode`.

## Sample Code

**index.txml**

```xml
<view>
  <view class="block-content">
    <view onTap="onTap" class="component-item">
      <image
        onLoad="onLoad"
        src="/images/app_logo.png"
        class="image-item" />
    </view>
    <view class="component-item">
      <image src="https://via.placeholder.com/300.png" />
    </view>
  </view>
</view>
```

**index.js**

```js
Page({
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
