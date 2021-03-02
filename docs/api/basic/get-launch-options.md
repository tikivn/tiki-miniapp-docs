---
order: 13
category:
  vi-VN: Cơ bản
  en-US: Basic
title:
  vi-VN: my.getLaunchOptions (chưa ready)
  en-US: my.getLaunchOptions (not ready)
---

## Giới thiệu

**my.getLaunchOptions** là API dùng để lấy parameters để launch Mini App hiện tại.

## Sử dụng

### Sample code

```js
my.getLaunchOptions({
  success: (res) => {
    my.alert({
      title: "Alert",
      content: `Query is: ${res.query}, path is: ${res.path}`,
    });
  },
});
```

### Return value

| Attributes | Type     | Required | Description                                                           |
| ---------- | -------- | -------- | --------------------------------------------------------------------- |
| success    | Function | No       | Callback function khi thành công.                                     |
| fail       | Function | No       | Callback function khi thất bại.                                       |
| complete   | Function | No       | Callback function khi hoàn tất tác vụ cho dù thành công hay thất bại. |

### Giá trị trong success callback

| Attributes | Type   | Description                                                                                                         |
| ---------- | ------ | ------------------------------------------------------------------------------------------------------------------- |
| query      | Object | Query được truyền vào Mini App. Nếu app được khởi động mà không có query parametter, thì query sẽ không được trả về |
| path       | string | Địa chỉ của page được start                                                                                         |
