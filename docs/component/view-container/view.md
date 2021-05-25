---
title: view
---

## Giới thiệu

Tương tự như thể div của HTMLElement, thẻ view là thành phần container dùng để chứa các thành phần khác. Thẻ view sẽ không tác động gì trình bày của các thành phần con đến khi nó được style bằng thuộc tính style hoặc tcss.

## Sử dụng

### Sample Code

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

### Chi tiết

| Property             | Type        | Default Value | Description                                                                                                    |
| -------------------- | ----------- | ------------- | -------------------------------------------------------------------------------------------------------------- |
| hidden               | boolean     | false         | Hiện thị hay không thẻ view.                                                                                   |
| class                | string      | null          | custom class cho thẻ view                                                                                      |
| style                | string      | null          | custom style cho thẻ view                                                                                      |
| animation            | object      | {}            | Dùng để kiểm soát animation của thẻ view - chi tiết xem [my.createAnimation](/docs/api/interactive/animation). |
| onTap                | EventHandle | undefined     | Khi có sự kiện touch vào vùng hiển thị của thẻ view.                                                           |
| onTouchStart         | EventHandle | undefined     | Khi có sự kiện touch vào vùng hiển thị của thẻ view.                                                           |
| onTouchMove          | EventHandle | undefined     | Khi có sự di chuyển sau khi touch.                                                                             |
| onTouchEnd           | EventHandle | undefined     | Khi có sự kiện kết thúc di chuyển.                                                                             |
| onTouchCancel        | EventHandle | undefined     | Khi sự kiện touch bị đứt quãng (ví dụ như có điện thoại, có popup hiển thị).                                   |
| onLongTap            | EventHandle | undefined     | Sự kiện được trigger khi giữ nhấn trên màn hình lâu hơn 500ms.                                                 |
| onTransitionEnd      | EventHandle | undefined     | Sự kiện được trigger sau khi hoàn thành 1 CSS Transition.                                                      |
| onAnimationStart     | EventHandle | undefined     | Sự kiện được trigger khi bắt đầu CSS Animation.                                                                |
| onAnimationEnd       | EventHandle | undefined     | Sự kiện được trigger khi kết thúc CSS Animation.                                                               |
| onAnimationIteration | EventHandle | undefined     | Sự kiện được trigger khi kết thúc 1 vòng lặp CSS Animation.                                                    |
