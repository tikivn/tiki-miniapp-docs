---
title: image
---

`image` component dùng để hiển thị hình ảnh


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

## Chi tiết

### Các thuộc tính

| Thuộc tính     | Kiểu dữ liệu | Mô tả                                                                                                                                                                           |
| -------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| src            | string       | Đường dẫn hoặc base64 của hình.                                                                                                                                                 |
| class          | string       | Css class                                                                                                                                                                       |
| style          | string       | Inline style                                                                                                                                                                    |
| lazy-load      | boolean      | Cho phép lazy load hình                                                                                                                                                         |
| default-source | string       | Hình mặc định. Hình này sẽ được hiển thị khi hình trong `src` đang trong quá trình load hoặc không load được. Trường hợp hình trong `src` load thất bại, `onError` sẽ được gọi. |
| mode           | string       | Chế độ hiển thị của hình ảnh. Mặc định là `scaleToFill`. Bạn có thể xem các mode được hỗ trợ bên dưới. Chỉ hỗ trợ version từ 1.76.5 trở lên                                     |
| onTap          | event        | Sự kiện được kích hoạt khi người tap vào hình. Chỉ hỗ trợ version >= 1.74.22                                                                                                    |
| catchTap       | event        | Sự kiện được khích hoạt khi tap vào image, tuy nhiên event sẽ không bubble lên parent. Chỉ hỗ trợ từ version 1.74 trở lên.22                                                    |
| onLoad         | event        | Sự kiện được kích hoạt khi hình được tải về thành công, `event.detail = { width, height }`                                                                                      |
| onError        | event        | Sự kiện được kích hoạt khi load hình thất bại, `event.detail = { errMsg: 'Error message' }`                                                                                     |

### Mode

Có 14 mode trong thẻ image, trong đó có 4 scale mode và 9 clipping mode

#### Scale mode

| Mode        | Description                                                                                                                                                             |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| scaleToFill | Hình sẽ được tự động scale width và height để lấp đầy phần tử chứa mà không thay đổi aspect ratio (tỷ lệ khung ảnh)                                                     |
| aspectFit   | Hình được hiển thị đầy đủ mà không thay đổi tỷ lệ, trong đó phần dài nhất của hình ảnh sẽ được lấp đầy và đảm bảo là hình ảnh được hiển thị đầy đủ                      |
| aspectFill  | Hình được scale sao cho vừa với phía cạnh ngắn hơn của hình, nghĩa là phía ngắn hơn sẽ được tự động scale để hiển thị cho vừa, tuy nhiên phía còn lại có thể bị cắt mất |
| widthFix    | Width của hình sẽ không thay đổi còn height sẽ được tự động (height auto) điều chỉnh cho phù hợp                                                                        |

#### Clipping mode

| Mode         | Description                                                          |
| ------------ | -------------------------------------------------------------------- |
| top          | Chỉ phần trên cùng của hình được hiển thị mà không bị scale          |
| bottom       | Chỉ phần dưới cùng của hình được hiển thị mà không bị scale          |
| center       | Chỉ phần giữa của hình được hiển thị mà không bị scale               |
| left         | Chỉ phần bên trái của hình được hiển thị mà không bị scale           |
| right        | Chỉ phần bên phải của hình được hiển thị mà không bị scale           |
| top left     | Chỉ phần trên cùng bê trái của hình được hiển thị mà không bị scale  |
| top right    | Chỉ phần trên cùng bên phải của hình được hiển thị mà không bị scale |
| bottom left  | Chỉ phần dưới cùng bên trái của hình được hiển thị mà không bị scale |
| bottom right | Chỉ phần dưới cùng bên phải của hình được hiển thị mà không bị scale |

## Lưu ý

- Bạn cần khai báo width và height của image thông qua inline style hoặc trong tcss, mặc định là width = `300px` và height = `225px`. Thuộc tính width và height sẽ không được kế thừa trong image
- Để sử dụng image với height là auto, bạn có thể dùng mode là `widthFix`
- Nên dùng _absolute path_ cho các đường dẫn của image
- Không nên dùng thuộc tính object-fit trong tcss để canh size của image mà dùng `mode`
