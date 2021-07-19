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

| Property       | Type    | Description                                                                                                                                                                                                                                                                     |
| -------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| src            | string  | Đường dẫn hoặc data base 64 của hình ảnh.                                                                                                                                                                                                                                       |
| class          | string  | Css class                                                                                                                                                                                                                                                                       |
| style          | string  | Inline style                                                                                                                                                                                                                                                                    |
| lazy-load      | boolean | Hỗ trợ lazy load hình ảnh                                                                                                                                                                                                                                                       |
| default-source | string  | Hình ảnh mặc định. Nếu giá trị được thiết lập, hình ảnh trong `default-source` sẽ được hiển thị trước, sau đó sẽ hiển thị hình ảnh trong `src` sau khi đã được tải thành công. Ngoài ra, hình ảnh này còn được dùng khi hình ảnh không load được (Khi đó `onError` sẽ được gọi) |
| onTap          | event   | Sự kiện được gọi khi tap vào image. Chỉ hỗ trợ version >= 1.74.22                                                                                                                                                                                                               |
| catchTap       | event   | Sự kiện được gọi khi tap vào image, tuy nhiên event sẽ không buble lên parent. Chỉ hỗ trợ version >= 1.74.22                                                                                                                                                                    |
| onLoad         | event   | Sự kiện được gọi khi hình ảnh được tải về thành công, `event.detail = { width, height }`                                                                                                                                                                                        |
| onError        | event   | Sự kiện được gọi khi hình ảnh tải về thất bại, `event.detail = { errMsg: 'Error message' }`                                                                                                                                                                                     |

## Lưu ý

- Bạn cần khai báo width và height của image thông qua inline style hoặc trong tcss, mặc định là width = `300px` và height = `225px`. Thuộc tính width và height sẽ không được kế thừa trong image
