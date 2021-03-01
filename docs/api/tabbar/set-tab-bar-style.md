---
order: 101
category:
  vi-VN: Tab Bar
  en-US: Tab Bar
title:
  vi-VN: my.setTabBarStyle (chưa ready)
  en-US: my.setTabBarStyle (chưa ready)
---

## Giới thiệu

**my.setTabBarStyle** là API để set style cho Tab Bar

## Sử dụng

### Sample Code

```js
my.setTabBarStyle({
  color: "#FF0000",
  selectedColor: "#00FF00",
  backgroundColor: "#0000FF",
  borderStyle: "white",
});
```

### API Params

| Attributes      | Type     | Required | Description                                                           |
| --------------- | -------- | -------- | --------------------------------------------------------------------- |
| color           | HexColor | yes      | Color của tabBar                                                      |
| selectedColor   | HexColor | yes      | Màu của tab bar được lựa chọn                                         |
| backgroundColor | HexColor | Yes      | Màu background                                                        |
| borderStyle     | String   | Yes      | Màu của border                                                        |
| success         | Function | No       | Callback function khi thành công.                                     |
| fail            | Function | No       | Callback function khi thất bại.                                       |
| complete        | Function | No       | Callback function khi hoàn tất tác vụ cho dù thành công hay thất bại. |
