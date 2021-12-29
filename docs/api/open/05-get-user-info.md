---
title: 'my.getUserInfo'
---

**my.getUserInfo** là API để lấy các thông tin cơ bản của users (tên, ảnh)
## API Params

| Thuộc tính | Kiểu dữ liệu | Mô tả                                                                 |
| ---------- | ------------ | --------------------------------------------------------------------- |
| success    | Function     | Callback function khi thành công.                                     |
| fail       | Function     | Callback function khi thất bại.                                       |
| complete   | Function     | Callback function khi hoàn tất tác vụ cho dù thành công hay thất bại. |

## Giá trị trong success callback

| Thuộc tính | Kiểu dữ liệu | Mô tả                     |
| ---------- | ------------ | ------------------------- |
| avatar     | String       | URL ảnh đại diện của user |
| name       | String       | Tên của user              |

## Giá trị trong fail callback

| Thuộc tính | Kiểu dữ liệu | Mô tả        |
| ---------- | ------------ | ------------ |
| code       | String       | Mã lỗi       |
| message    | String       | Nội dung lỗi |

### Sample Code

```js
Page({
  getTitleColor() {
    my.getUserInfo({
      success: (res) => {},
      fail: (res) => {}
    });
  }
});
```

