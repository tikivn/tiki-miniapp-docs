---
title: movable-view
---

`movable-view` là container component cho phép kéo và thả chính nó và các thành phần con trong nó trên page. `movable-view` bắt buộc phải nằm trong [movable-area](movable-area). Nếu không, movable-view không thể di chuyển được.

## Thuộc tính

| Thuộc tính    | Kiểu dữ liệu | Giá trị mặc định | Mô tả                                                                                                                   |
| ------------- | ------------ | ---------------- | ----------------------------------------------------------------------------------------------------------------------- |
| direction     | string       | none             | Các hướng mà thành phần có thể di chuyển được. Giá trị của direction bao gồm "all", "vertical", "horizontal" và "none". |
| inertia       | boolean      | false            | Khi thuộc tính này xác định, movable-view sẽ có quán tính sau khi thả ra.                                               |
| out-of-bounds | boolean      | false            | Khi thuốc tính này xác định, movable-view có thể di chuyển ra ngoài movable-area.                                       |
| x             | number       | undefined        | Vị trí mặc định theo x-axis của view. Khi giá tị x nằm ngoài movable area vị trí biên sẽ được sử dụng.                  |
| y             | number       | undefined        | Vị trí mặc định theo y-axis của view. Khi giá tị y nằm ngoài movable area vị trí biên sẽ được sử dụng                   |
| damping       | number       | 20               | Khi thuộc tính out-of-bounds được bật, sau khi di chuyển ra ngoài movable area view sẽ có hiệu ứng bật ngược lại.       |
| friction      | number       | 2                | Khi inertia được bật, thuộc tính này dùng để quy định gia tốc của view tiếp tục di chuyển sau khi thả ra.               |
| disabled      | boolean      | false            | Tắt không cho view di chuyển.                                                                                           |
| scale         | boolean      | false            | Xác định cho phép view scale bằng 2 ngón tay được không.                                                                |
| scale-min     | number       | 0.5              | Giá trị tối thiểu được scale.                                                                                           |
| scale-max     | number       | 0.5              | Giá trị cực đại được scale.                                                                                             |
| scale-value   | number       | 1                | Giá trị scale ban đầu.                                                                                                  |
| animation     | boolean      | false            | Cho phép tắt mở animation khi di chuyển.                                                                                |
| onChange      | EventHandle  | undefined        | Sự kiện được kích hoạt khi view được di chuyển. event.detail = { x, y source }                                          |
| onScale       | EventHandle  | undefined        | Sự kiện được kích hoạt khi view được scale. event.detail = { x, y, scale }                                              |

### Giá trị của Source trong sự kiện onChange và onScale

Sự kiện onChange và onScale có thể được kích hoạt do người dùng di chuyển hoặc cũng do hiểu ứng liên quan. Để phần biệt sự kiện là do người dùng hay hệ thống bạn dựa vào thuộc tính source trong detail với các giá trị sau:

| Thuộc tính          | Mô tả                                    |
| ------------------- | ---------------------------------------- |
| touch               | Khi view đang được di chuyển             |
| touch-out-of-bounds | Khi view di chuyển ra ngoài movable area |
| out-of-bounds       | Khi view di chuyển vào lại movable area  |
| friction            | Khi view di chuyển do quán tính          |
| Empty string        | View di chuyển do setData                |

## Sample Code

```xml title=index.txml
<view>
  <block-header title="Usage" description="A movable view container. It can be dragged to move on a page. " />
  <view class="block-content">
    <view onTap="onTap">movable-view is smaller than movable-area</view>
    <movable-area>
      <movable-view direction="all">text</movable-view>
    </movable-area>
  </view>

  <view class="block-content">
    <text>movable-view is larger than movable-area</text>
    <movable-area>
      <movable-view class="max" direction="all">text</movable-view>
    </movable-area>
  </view>

  <view class="block-content">
    <text>movable-view can move horizontally</text>
    <movable-area>
      <movable-view direction="horizontal">text</movable-view>
    </movable-area>
  </view>

  <view class="block-content">
    <text>movable-view can move vertically</text>
    <movable-area>
      <movable-view direction="vertical">text</movable-view>
    </movable-area>
  </view>

  <view class="block-content">
    <text>movable-view can move after the view container is out of the movable area</text>
    <movable-area>
      <movable-view direction="all" out-of-bounds>text</movable-view>
    </movable-area>
  </view>

  <view class="block-content">
    <text>movable-view has inertia</text>
    <movable-area>
      <movable-view direction="all" inertia>text</movable-view>
    </movable-area>
  </view>

  <view class="block-content">
    <text>two-finger scaling</text>
    <movable-area scale-area>
      <movable-view direction="all" scale scale-min="0.5" scale-max="4">text</movable-view>
    </movable-area>
  </view>
</view>
```

