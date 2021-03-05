---
order: 93
category:
  vi-VN: Thanh điều hướng
  en-US: Navigation Bar
title:
  vi-VN: my.setNavigationBar (chưa ready)
  en-US: my.setNavigationBar (chưa ready)
---

## Giới thiệu

**my.setNavigationBar** là API để set style cho Navigation Bar

## Sử dụng

### Sample Code

```js
Page({
  setNavigationBar(e) {
    var title = e.detail.value.title;
    var backgroundColor = e.detail.value.backgroundColor;
    var borderBottomColor = e.detail.value.borderBottomColor;
    var image = e.detail.value.image;
    console.log(title);
    my.setNavigationBar({
      title,
      backgroundColor,
      borderBottomColor,
      image,
    });
  },
  resetNavigationBar() {
    my.setNavigationBar({
      reset: true,
      title: "Navigation Bar",
    });
  },
});
```

### API Params

| Attributes        | Type     | Required | Description                                                                                         |
| ----------------- | -------- | -------- | --------------------------------------------------------------------------------------------------- |
| title             | string   | no       | Navigation Bar title                                                                                |
| image             | string   | no       | Image URL được sử dụng để render trên title                                                         |
| backgroundColor   | HexColor | no       | Background color của Navigation Bar                                                                 |
| borderBottomColor | HexColor | no       | Nếu `backgroundColor` được set, thì `borderBottomColor` sẽ luôn nhận giá trị bằng `backgroundColor` |
| reset             | Boolean  | no       | Reset về màu mặc định                                                                               |
| success           | Function | No       | Callback function khi thành công.                                                                   |
| fail              | Function | No       | Callback function khi thất bại.                                                                     |
| complete          | Function | No       | Callback function khi hoàn tất tác vụ cho dù thành công hay thất bại.                               |
