---
title: my.setTabBarStyle
---

`my.setTabBarStyle` là API để set style cho Tab Bar

## API Params

| Thuộc tính     | Kiểu dữ liệu     | Bắt buộc | Mô tả                                                           |
| --------------- | -------- | :------: | --------------------------------------------------------------------- |
| color           | HexColor | ✓      | Color của tabBar                                                      |
| selectedColor   | HexColor | ✓      | Màu của tab bar được lựa chọn                                         |
| backgroundColor | HexColor | ✓      | Màu background                                                        |
| borderStyle     | String   | ✓      | Màu của border                                                        |
| success         | Function |        | Callback function khi thành công.                                     |
| fail            | Function |        | Callback function khi thất bại.                                       |
| complete        | Function |        | Callback function khi hoàn tất tác vụ cho dù thành công hay thất bại. |


## Sample Code

```js
my.setTabBarStyle({
  color: '#FF0000',
  selectedColor: '#00FF00',
  backgroundColor: '#0000FF',
  borderStyle: 'white'
});
```

