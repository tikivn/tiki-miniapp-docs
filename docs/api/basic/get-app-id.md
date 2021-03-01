---
order: 12
category:
  vi-VN: Cơ bản
  en-US: Basic
title:
  vi-VN: my.getAppId (chưa ready)
  en-US: my.getAppId (not ready)
---

## Giới thiệu

**my.getAppId** là API dùng để lấy ID của Mini App hiện tại

## Sử dụng

### Sample code

```js
my.getAppId({
  success: (res) => {
    my.alert({
      title: "Alert",
      content: `App id is ${res}`,
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

| Attributes | Type   | Description              |
| ---------- | ------ | ------------------------ |
| appId      | string | ID của Mini App hiện tại |
