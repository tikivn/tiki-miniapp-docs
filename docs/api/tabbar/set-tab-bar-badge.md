---
order: 101
category:
  vi-VN: Tab Bar
  en-US: Tab Bar
title:
  vi-VN: my.setTabBarBadge
  en-US: my.setTabBarBadge
---

## Giới thiệu

**my.setTabBarBadge** là API để bỏ đi badge text cho một Tab Bar Item

## Sử dụng

### Sample Code

```js
my.setTabBarBadge({
  index: 0,
  text: 10,
});
```

### API Params

| Attributes | Type     | Required | Description                                                                         |
| ---------- | -------- | -------- | ----------------------------------------------------------------------------------- |
| index      | Number   | yes      | Index của tab page, tính từ 0, và từ trái qua phải.                                 |
| text       | String   | yes      | Nếu text có độ dài lớn hơn 3 ký tự, text sẽ được hiện thị thành 2 ký tự đầu + '...' |
| success    | Function | No       | Callback function khi thành công.                                                   |
| fail       | Function | No       | Callback function khi thất bại.                                                     |
| complete   | Function | No       | Callback function khi hoàn tất tác vụ cho dù thành công hay thất bại.               |
