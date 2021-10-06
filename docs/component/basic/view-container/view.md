---
title: view
---

Thẻ `view` là một container component dùng để chứa các component khác, có chức năng tự với thẻ `div` trong HTML. 

## Thuộc tính

| Thuộc tính           | Kiểu dữ liệu | Giá trị mặc định | Mô tả                                                                                                   |
| -------------------- | ------------ | ---------------- | ------------------------------------------------------------------------------------------------------- |
| hidden               | boolean      | false            | Ẩn đi hay hiển thị thẻ view.                                                                            |
| class                | string       | null             | custom class cho thẻ view                                                                               |
| style                | string       | null             | custom style cho thẻ view                                                                               |
| animation            | object       | {}               | Dùng để điều khiển animation của thẻ view. Xem thêm [my.createAnimation](api/ui/animation/animation.md) |
| onTap                | Event        |                  | Sự kiện được kích hoạt khi người dùng tap vào vùng hiển thị của thẻ view.                               |
| onTouchStart         | Event        |                  | Sự kiện được kích hoạt khi người dùng touch vào vùng hiển thị của thẻ view.                             |
| onTouchMove          | Event        |                  | Sự kiện được kích hoạt khi người dùng di chuyển ngón tay trên màn hình sau hành động touch.             |
| onTouchEnd           | Event        |                  | Sự kiện được kích hoạt khi người dùng rút ngón tay ra khỏi màn hình.                                    |
| onTouchCancel        | Event        |                  | Sự kiện được kích hoạt khi touch bị gián đoạn; ví dụ có cuộc gọi hoặc popup hiển thị.                   |
| onLongTap            | Event        |                  | Sự kiện được kích hoạt khi người tap vào vùng hiển thị của thẻ view và giữ lâu hơn 500ms.               |
| onTransitionEnd      | Event        |                  | Sự kiện được kích hoạt khi hoàn thành một CSS Transition.                                               |
| onAnimationStart     | Event        |                  | Sự kiện được kích hoạt khi bắt đầu một CSS Animation.                                                   |
| onAnimationEnd       | Event        |                  | Sự kiện được kích hoạt khi kết thúc một CSS Animation.                                                  |
| onAnimationIteration | Event        |                  | Sự kiện được kích hoạt mỗi lần kết thúc một vòng lặp CSS Animation.                                     |

## Sample Code

**index.txml**

```xml
<view class="container">
  <view><button>A button</button></view>
  <view><text>A text</text></view>
</view>
```

```css
.container {
  min-height: 100%;
  background-color: red;
  padding: 16px;
}
```

