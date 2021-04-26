---
title: tabs
---

## Giới thiệu

`tabs`

### Lưu ý

- Các component bên trong thẻ tab nên được vào bên trong thẻ [view](https://miniapp.tiki.vn/docs/component/view-container/view)
- Các `icon` trong `tabs` bạn có thể tìm thấy ở đây: [icon](https://miniapp.tiki.vn/docs/component/basic/icon)
- Số lượng các phần tử trong biến `tabs` và số component trong thẻ `<tabs>` nên bằng nhau
- Nếu số lượng `tab` từ 2 trở lên và chiều cao của các `tab` khác nhau, thanh scroll của `tab` có chiều cao ngắn hơn sẽ bị ảnh hưởng
- Bạn cần khai báo `flex: 1` cho container chứa `tabs`

## Sử dụng

### Sample Code

**index.txml**

```xml
<view>
  <block-header
    title="Usage"
    description="Tab bar is used as a graphical interface element that allows multiple panels to be contained within a single window, using tabs as a navigational element." />

  <view class="block-content">
    <text class="title mb-8">Variants</text>

    <text class="subtitle mb-8">Text only</text>
    <tabs tab-height="{{48}}" tabs="{{tabs1}}">
      <view class="tab-item" />
      <view class="tab-item" />
      <view class="tab-item" />
      <view class="tab-item" />
    </tabs>

    <text class="subtitle mb-8 mt-16">Text with icon</text>
    <tabs tabs="{{tabs2}}">
      <view class="tab-item" />
      <view class="tab-item" />
      <view class="tab-item" />
      <view class="tab-item" />
    </tabs>
  </view>
</view>
```

```css
.tab-item {
  height: 104px;
  background-color: #fff;
}

.block-content {
  background-color: var(--gray10);
}

.mb-8 {
  margin-bottom: 8px;
}

.mt-16 {
  margin-top: 16px;
}
```

```js
Page({
  data: {
    tabs1: [
      { title: 'Tab' },
      { title: 'Tab' },
      { title: 'Tab' },
      { title: 'Tab' }
    ],
    tabs2: [
      { title: 'Tab', icon: 'home' },
      { title: 'Tab', icon: 'home', showDot: true },
      { title: 'Tab', icon: 'home' },
      { title: 'Tab', icon: 'home' }
    ]
  }
});
```

### Chi tiết

| Property                        | Type    | Default Value | Required | Description                                                                                                                                            |
| ------------------------------- | ------- | ------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| tabs                            | array   | []            |          | Mảng các đối tượng: `[{ title: string, icon: string, iconSize: number, showDow: bool, dotColor: string }]`, trong đó `title` là bắt buộc phải khai báo |
| swipeable                       | boolean | true          |          | Cho phép tabs có thể swipe được                                                                                                                        |
| animation                       | boolean | true          |          | Có animation khi đổi tab                                                                                                                               |
| initial-tab                     | number  | 0             |          | Khởi tạo tab được chọn lần đầu                                                                                                                         |
| tab-height                      | number  | 56            |          | Chiều cao của thanh tab bar                                                                                                                            |
| tab-size                        | number  | 5             |          | Số lượng tab tối đa hiển thị trên thanh tab bar, nếu số tab nhỏ hơn `tab-size`, độ rộng của các tab sẽ được chia đều dựa trên kích thước của màn hình  |
| active-text-color               | string  | brand         |          | Màu của text trong tab khi được chọn                                                                                                                   |
| inactive-text-color             | string  | gray60        |          | Màu của text trong tab khi không được chọn                                                                                                             |
| active-icon-color               | string  | brand         |          | Màu của icon khi tab được chọn                                                                                                                         |
| inactive-icon-color             | string  | gray60        |          | Màu của icon khi tab không được chọn                                                                                                                   |
| tab-bar-underline-color         | string  | gray20        |          | Màu underline của tab khi được chọn                                                                                                                    |
| tab-bar-active-underline-color  | string  | brand         |          | Màu underline của tab khi không được chọn                                                                                                              |
| tab-bar-underline-height        | number  | 1             |          | Độ cao của underline                                                                                                                                   |
| tab-bar-background-color        | string  | white         |          | Màu của tab khi không được chọn                                                                                                                        |
| tab-bar-active-background-color | string  | white         |          | Màu của tab khi được chọn                                                                                                                              |
| show-tab-bar                    | string  | true          |          | Hiển thị tab bar hay không                                                                                                                             |
| onTabClick                      | event   |               |          | Sự kiện được gọi khi bấm vào tab, `event.detail = { index, tab }`                                                                                      |
| onChange                        | event   |               |          | Sự kiện được gọi khi đổi tab, `event.detail = { index, tab }`                                                                                          |

<img style={{maxWidth: 414}} alt="Tab" src="/img/tab-component.png"/>
