---
title: my.getRunScene (chưa ready)
---

## Giới thiệu

**my.getRunScene** là API dùng để lấy version của Mini App đang chạy

## Sử dụng

### Sample code

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

### Return value

| Attributes | Type     | Required | Description                                                           |
| ---------- | -------- | -------- | --------------------------------------------------------------------- |
| success    | Function | No       | Callback function khi thành công.                                     |
| fail       | Function | No       | Callback function khi thất bại.                                       |
| complete   | Function | No       | Callback function khi hoàn tất tác vụ cho dù thành công hay thất bại. |

### Giá trị trong success callback

| Attributes | Type   | Description                    |
| ---------- | ------ | ------------------------------ |
| envVersion | string | Version hiện tại của Mini App. |
