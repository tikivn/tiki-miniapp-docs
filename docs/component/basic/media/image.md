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

| Property       | Type    | Description                                                                                                                                                                                                                                                                                            |
| -------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| src            | string  | Đường dẫn hoặc data base 64 của hình ảnh.                                                                                                                                                                                                                                                              |
| class          | string  | Css class                                                                                                                                                                                                                                                                                              |
| style          | string  | Inline style                                                                                                                                                                                                                                                                                           |
| lazy-load      | boolean | Hỗ trợ lazy load hình ảnh                                                                                                                                                                                                                                                                              |
| default-source | string  | Hình ảnh mặc định. Nếu giá trị được thiết lập, hình ảnh trong `default-source` sẽ được hiển thị trước, sau đó sẽ hiển thị hình ảnh trong `src` sau khi đã được tải thành công. Ngoài ra, hình ảnh này còn được dùng khi hình ảnh không load được (Khi đó `onError` sẽ được gọi)                        |
| mode           | string  | Chế độ hiển thị của hình ảnh. Mặc định là `scaleToFill`. Bạn có thể xem các mode được hỗ trợ bên dưới. Chỉ hỗ trợ version từ 1.76.5 trở lên |
| onTap          | event   | Sự kiện được gọi khi tap vào image. Chỉ hỗ trợ version >= 1.74.22                                                                                                                                                                                                                                      |
| catchTap       | event   | Sự kiện được gọi khi tap vào image, tuy nhiên event sẽ không buble lên parent. Chỉ hỗ trợ version >= 1.74.22                                                                                                                                                                                           |
| onLoad         | event   | Sự kiện được gọi khi hình ảnh được tải về thành công, `event.detail = { width, height }`                                                                                                                                                                                                               |
| onError        | event   | Sự kiện được gọi khi hình ảnh tải về thất bại, `event.detail = { errMsg: 'Error message' }`                                                                                                                                                                                                            |

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
