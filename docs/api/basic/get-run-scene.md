---
title: my.getRunScene
sidebar_custom_props:
  description: Lấy version của Mini App đang chạy
---

`my.getRunScene` là API dùng để lấy version của Mini App đang chạy

## Sample code

```js
my.getRunScene({
  success(result) {
    my.alert({
      title: 'App version',
      content: `${result.envVersion}`
    });
  }
});
```

## Return value

| Thuộc tính | Kiểu dữ liệu | Mô tả                                                                 |
| ---------- | ------------ | --------------------------------------------------------------------- |
| success    | Function     | Callback function khi thành công.                                     |
| fail       | Function     | Callback function khi thất bại.                                       |
| complete   | Function     | Callback function khi hoàn tất tác vụ cho dù thành công hay thất bại. |

### Giá trị trong success callback

| Thuộc tính | Kiểu dữ liệu | Mô tả                                                          |
| ---------- | ------------ | -------------------------------------------------------------- |
| version    | string       | Version hiện tại của Mini App.                                 |
| envVersion | string       | Môi trường hiện tại mà app đang chay: `develop` hoặc `release` |
