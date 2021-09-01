---
title: canvas
---
`canvas` là một vùng hình chữ nhật phục vụ cho mục đích chứa đồ hoạ. Theo mặc định, nó không có đường viền cũng như nội dung; bạn sẽ sử dụng JavaScript để kết xuất đồ hoạ.

## Thuộc tính

| Thuộc tính     | Kiểu dữ liệu | Giá trị mặc định | Mô tả                                                                                 |
| -------------- | ------------ | ---------------- | ------------------------------------------------------------------------------------- |
| id             | string       |                  | Định danh duy nhất của canvas                                                         |
| style          | string       |                  |                                                                                       |
| class          | string       |                  |                                                                                       |
| width          | number       | 300              | Chiều rộng của canvas                                                                 |
| height         | number       | 225              | Chiều cao của canvas                                                                  |
| disable-scroll | boolean      | false            | Không cho canvas scroll                                                               |
| type           | string       |                  | Kiểu render đồ hoạ - 2d hay webgl.                                                    |
| onTap          | event        |                  | Sự kiện được kích hoạt khi touch vào canvas                                           |
| onTouchStart   | event        |                  | Sự kiện được kích hoạt khi ngón tay bắt đầu touch vào canvas.                         |
| onTouchMove    | event        |                  | Sự kiện được kích hoạt khi ngón tay di chuyển trên canvas.                            |
| onTouchEnd     | event        |                  | Sự kiện được kích hoạt khi ngón tay rút khỏi canvas.                                  |
| onTouchCancel  | event        |                  | Sự kiện được hoạt khi hành động touch bị gián đoạn bởi một cuộc gọi hay popup window. |
| onLongTap      | event        |                  | Sự kiện được kích hoạt khi thời gian ngón tay nhấn vào canvas lâu hơn 500 mili giây.  |
| onReady        | event        |                  | Sự kiện được kích hoạt khi canvas được khởi tạo thành công và sẵn sàng hoạt động.     |

## Sample Code

index.txml

```css
<view class="page">
  <view class="page-description">Canvas API</view>
  <view class="page-section">
    <view class="page-section-title">my.createCanvasContext</view>
    <view class="page-section-demo">
      <canvas class="canvas-element" id="canvas" onTap="log" onTouchStart="log"></canvas>
    </view>
    <scroll-view class="canvas-buttons" scroll-y="true">
        <button a:for="{{methods}}" a:for-item="method"
                class="canvas-button" type="primary" onTap="{{method}}">{{method}}</button>
    </scroll-view>
    <scroll-view class="canvas-buttons" scroll-y="true" style="height: 150rpx;">
      <button class="canvas-button" type="primary" onTap="toTempFilePath">toTempFilePath</button>
      <button class="canvas-button" type="primary" onTap="getImageData">getImageData</button>
      <button class="canvas-button" type="primary" onTap="putImageData">putImageData</button>
      <button class="canvas-button" type="primary" onTap="preloadCanvasImage">preloadCanvasImage</button>
    </scroll-view>
  </view>
</view>
```